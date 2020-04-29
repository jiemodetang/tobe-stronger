import * as React from 'react'
import './VueSimpleVerify.scss'
import barImage from './images/bar'
import successImage from './images/success'


export default class ReactSimpleVerify extends React.Component {
    /**
     * 默认参数
     */
    static defaultProps = {
        width: 340,
        height: 36,
        borderColor: '#E4E4E4',
        bgColor: '#F2F3F5',
        borderRadius: 4,
        tips: '请按住滑块，拖动到最右边',
        barBackground: `url(${ barImage })`,
        movedColor: '#00C1DE',
        successTips: '完成验证',
        successIcon: successImage
    }
    constructor(props) {
        super(props)
        this.state = {
            /** 是否滑入 */
            isMouseEnter: false,
            /** 滑动距离 */
            diff: 0,

        }
    }
    /**
   * 初始数据
   */
    /** x */
    x1 = 0
    x2 = 0
    /** 鼠标是否按下 */
    isMousedown = false
    /** 是否已经成功 */
    isSuccess = false
    /** 最大滑动距离 */
    max = this.props.width - 50
    style = {
        width: this.props.width,
        height: this.props.height,
        border: `${this.props.borderColor} 1px solid`,
        backgroundColor: this.props.bgColor,
        borderRadius: this.props.borderRadius
    }
    /** 滑条盒子样式 */
    slideBoxStyle = {
        borderRadius: this.props.borderRadius
    }
    /** 成功图标 */
    iconStyle = {
        background: `url(${ successImage }) no-repeat`
    }



    /**
     * 绑定事件
     */
    componentDidMount() {
        document.body.addEventListener('mousemove', this.mousemove.bind(this))
        document.body.addEventListener('mouseup', this.mouseup.bind(this))
    }

    /**
     * 移除事件
     */
    componentWillUnmount() {
        document.body.removeEventListener('mousemove', this.mousemove.bind(this))
        document.body.removeEventListener('mouseup', this.mouseup.bind(this))
    }

    /**
     * 鼠标移入
     */
    mouseenter() {
        if (this.isSuccess) {
            return
        }
        this.setState({
            isMouseEnter: true
        })
    }

    /**
     * 鼠标离开
     */
    mouseleave() {
        if (this.isSuccess || this.isMousedown) {
            return
        }
        this.setState({
            isMouseEnter: false
        })
    }

    /**
     * 鼠标按下
     */
    mousedown(e) {
        if (this.isSuccess) {
            return
        }
        this.x1 = e.nativeEvent.x
        this.isMousedown = true
    }

    /**
     * 鼠标移动
     */
    mousemove(e) {
        if (!this.isMousedown || this.isSuccess) {
            return
        }
        e.preventDefault()
        e.stopPropagation()
        this.x2 = e.x
        let diff = this.x2 - this.x1
        if (diff < 0) {
            diff = 0
        }
        if (diff >= this.max) {
            diff = this.max
            this.isSuccess = true
            this.props.success && this.props.success()
        }
        this.setState({
            diff
        })
    }

    /**
     * 鼠标松开
     */
    mouseup() {
        if (this.isSuccess) {
            return
        }
        this.isMousedown = false
        this.setState({
            isMouseEnter: false,
            diff: 0
        })
    }

    /**
     * 重置
     */
    reset() {
        this.isSuccess = false
        this.setState({
            diff: 0
        })
        setTimeout(() => {
            this.isMousedown = false
            this.setState({
                isMouseEnter: false
            })
        }, 0)
    }

    render() {
        /** 滑条样式 */
        const slideStyle = {
            borderRadius: this.props.borderRadius,
            background: this.props.movedColor,
            left: 50 - this.props.width,
            opacity: this.state.isMouseEnter ? 1 : 0,
            transitionDuration: !this.state.isMouseEnter || !this.isMousedown ? '.3s' : '0s',
            transform: `translateX(${this.state.diff}px)`
        }
        /** 滑块样式 */
        const barStyle = {
            background: this.props.barBackground,
            transitionDuration: !this.state.isMouseEnter || !this.isMousedown ? '.3s' : '0s',
            transform: `translateX(${this.state.diff}px)`
        }
        /** 成功文本样式 */
        const textStyle = {
            opacity: this.isSuccess ? 1 : 0,
            transitionDuration: !this.state.isMouseEnter || !this.isMousedown ? '.3s' : '0s'
        }
        console.log(this.style);
        
        return (
            <div style={this.style} className="simple-verify">
                <div className="verify-tips">{this.props.tips}</div>
                <div style={this.slideBoxStyle} className="verify-box">
                    <div style={slideStyle} className="veriry-slide" />
                </div>
                <div
                    className="verify-bar"
                    onMouseEnter={this.mouseenter.bind(this)}
                    onMouseLeave={this.mouseleave.bind(this)}
                    onMouseDown={this.mousedown.bind(this)}
                >
                    <div style={barStyle} className="icon" />
                </div>
                <div style={textStyle} className="verify-success-tips">
                    <span style={this.iconStyle} />{this.props.successTips}
                </div>
            </div>
        )
    }
}
