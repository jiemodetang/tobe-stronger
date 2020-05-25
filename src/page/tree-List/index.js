import React, { Component } from 'react'
import './index.scss'
import { Tree, Input, Popover, message, Button } from 'antd';
import { data } from './treeList.json'
import { DownOutlined ,CarryOutOutlined} from '@ant-design/icons';
const gData = data;
class treeList extends React.Component {
    state = {
        expandedKeys: [],
        searchValue: '',
    };

    onExpand = expandedKeys => {
        this.setState({
            expandedKeys,
        });
    };
    
    text = () => {
        const { searchValue, expandedKeys, autoExpandParent } = this.state;
        const text = <span onClick={() => { console.log(expandedKeys, '添加子部门'); }}>添加子部门</span>;
        return (
            <div>
                <Popover placement="bottom" title={text} content={null
                } trigger="hover">
                    <span className='addFriend addLeft'><img src="data:image/png;base64,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" alt="" /></span>
                </Popover>
                <Popover placement="bottom" title={this.content} content={null
                } trigger="hover">
                    <span className='addFriend'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAIaElEQVR4Xu2aXYxkRRXHz7ndHSULOoOoMeAoRBI1YmSHxAgaJ2vcB93pW9XSGlkMQaJEJa4fYQlgVBKzYTUqGjQkKArhK7R21e2NvqkTopEHFoNr1IiiruCDWenxI2DovfeYGns3sOzsqXu7ejFV576eUx//f/363LrVhSBP0g5g0upFPAgAiUMgAAgAiTuQuHypAAJA4g4kLl8qgACQuAOJy5cKIAAk7kDi8qUCCACJO5C4fKkAAkDiDiQuXyqAAJC4A4nLlwogACTuQOLypQIIAIk7kLh8qQACQOIOJC5fKoAAkLgDicuXCiAAJO5A4vKlAggAiTuQuHypAAJA4g4kLl8qgACQuAOJy5cKIAAk7kDi8qUCCACJO5C4fKkAAkDiDiQuXyqAAJC4A4nLlwogACTuQOLypQIIAIk7kLh8qQACQOIOJC5fKoAAkLgDicuXCiAAJO5A4vKlAggAJ8+Bbrd7QZZl5xLRUpZlTwHAY0T0kLX2TydvFgBa6zcQ0esRcQkASiJ6HBEPGGN+czLnoZR6NSJuBYCzAOAFVVU9TkS/G41GD56secy9AiilFhDxkwBwGQC86njCiOjniPit8Xh8x9ra2uF5iO/3+6dMJpOPIuIVAPC6TeZxAABu73Q63xwMBg7Q4M/Kykp7cXHxciK6HBHfsskAfyai7wLATdba9eCTeEaH8wQgy/P8akS8DhFf5COCiP6AiB82xvzYJ983Ryl1BSLuAYCXebb5GwDsMsbc65nvlZbn+bsQ8WZEPNunARH9ExFvMMZ8xSe/Sc5cANBavwQALAC8tcGkJgCw0xgzaND2WU1WVlZeuLCwcDsivrdJX1VVXV8UhQNn1gfzPN+bZdnVTToiotustR8CgKpJ+xO1CQ5Av99vHT58eK3h4m/MlYgoy7LV4XD4g1kEK6XuRcT3zdIHEX3CWvu1WfrQWt8AAJ+dpQ8A+LoxZteMfTyneXAAlFJ7EXF3gIn+uyzL80ej0e+b9JXn+ZVZlt3SpO0xbcqyLLeNRqP7m/Sltd4GAD9q0vY4bS41xtwVqK+NboIC0Ov1ziKiRwGgE2iSPzPG1H6NbN++fcuWLVsOAsDpgebx6MGDB1+7f/9+93qq9SilfomI59VqtEkyEa2XZXnuvn37DoXoLzgAWmv3i7sy1OSmrwNtrXX7Ce9HKbUbEfd6N/BL/HTdzZhS6j2I+D2/7r2zvmGMuco7m0kMVgHcu38ymYwR8bRQk5v2c5cx5tI6fWqtHwaAN9Zpw+W6T1Vr7YVc3jPjSimDiKpOGy6XiA5Za1/K5fnGgwGglFpBxJ/4Dlwj7x/GmEW3N/Rps2PHjjM7nc5jPrl1ctzG1L1SfL/Lp9/7TwZ8HR6dLhFdYK3dX2f+m+UGA0Br7Q563OHFPJ6XG2Pctzn75Hn+tizLGm3YuM7dwc1wOHyAy3PxeYHo+q6qamdRFHf7zIPLCQZAnufXZFl2Izdgk3hZlltHo9EvfNpqrfsAcJ9Pbt0cIrrYWvt9n3ZKqWVEnNeR7m5jzJd85sHlBANgThuvjfkj4vJwOHyIE+PieZ5fnGXZzIdIxxurqqp+URRem7per7eViIKU6WPnQkTXWGu/6OMHlxMSgA8g4h3cgE3iiPjK4XDo9V7vdrsXtVqtnzYZh2tTluXbfc8Der3eK4jor1yfTeLufwRrbZDXbUgA5lXynm6326cNBoOnfczq9/unTyaTQ4gYTNuRcauqWiqK4i8+8wCATGv9BAC82DPfO216MBVkwx3UJK2126gF+0SZOmKMMT1vdwBAKfUAIr65ThuP3IeNMW/yyDuaopS6GxHfX6cNl0tE/+p0OouDwaDkcn3ioQG4GQA+5jOwb06djdeRPrXWnwKAL/uO4ZlXe+OllFKIaDz79027xRjzEd9kLi8oAKurq2e0Wq1HEHGBG9gnTkQHrLW1D3SWl5c7S0tLvwWAc3zG8ch5Yjwen7m2tvYfj9xnpWit3X7korrtNsmfIOI5vvshnzGDAuAG1FrvBIA7fQY/Uc704OWd1tpGf6TkeX7h9DygNetcAMDdUbi1ST/dbvc1rVbLfcKe2qT9MW1uNMZcG6Cfo10EB2AKgfv79OOzTJSIPm+tdX+jNn6UUrsQ8abGHfzvr+l7rLWXzNJHr9d7d1VV+2bcmN7fbre3hXr3H9EzFwDcDlgpdSsifrChcXuMMZ/xPf490Rha6+sB4AtN5kFE962vr1/WpPQfO970gOoeAGhSkdxrRBlj/t5Ex4nazAuAjTHdZoyIPlfjStgfieiqoih+GFJonueXZFn21TpXwojoOmvtt0POQyn1DgBwPwzvK2FEtKcoCnfqF/w2kNM2VwDcAD6XQgHAna/fNh6PvyOXQjeQi+JS6HN+PP+n18IrInLX039VFMWvQ/7iub5WV1fPbrfb5x+5Fu7mUVXVI1FdC+dMkPjz68DcXwHPrzwZnXNAAOAcijwuAES+wJw8AYBzKPK4ABD5AnPyBADOocjjAkDkC8zJEwA4hyKPCwCRLzAnTwDgHIo8LgBEvsCcPAGAcyjyuAAQ+QJz8gQAzqHI4wJA5AvMyRMAOIcijwsAkS8wJ08A4ByKPC4ARL7AnDwBgHMo8rgAEPkCc/IEAM6hyOMCQOQLzMkTADiHIo8LAJEvMCdPAOAcijwuAES+wJw8AYBzKPK4ABD5AnPyBADOocjjAkDkC8zJEwA4hyKPCwCRLzAnTwDgHIo8LgBEvsCcPAGAcyjyuAAQ+QJz8gQAzqHI4wJA5AvMyRMAOIcijwsAkS8wJ08A4ByKPC4ARL7AnDwBgHMo8rgAEPkCc/IEAM6hyOMCQOQLzMkTADiHIo8LAJEvMCdPAOAcijwuAES+wJy8/wK+72yfS72S0gAAAABJRU5ErkJggg==" alt="" /></span>
                </Popover>
            </div>
        )
    }
    content = () => {
        const { searchValue, expandedKeys, autoExpandParent } = this.state;
        return (
            <div className='editDisabled'>
                <span onClick={() => { console.log(expandedKeys, '编辑输入框'); }}>编辑</span>
                <br />
                <span onClick={() => { console.log(expandedKeys, '禁用框'); }}>禁用</span>
            </div>
        )
    }
    showIcon=()=>{
        return(
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA5CAYAAABqMUjBAAAAAXNSR0IArs4c6QAAAsNJREFUaAXtmr1OG0EQx2dWCN0hUqSMXEcUPABVPkSaFDaUaaKLETGPkSJVeAVIFMdKQwl2QUMkSJUHSJUapaQAcRaKbjOz9iJ8urO0aIplb69Z3X7MzW/+c7tbDILwo7XGrdH4fQF6GzSuAuhlt0/gFaD+rQC/fG0nnxFRu62fPxvnD7uN7hzrJ+Ob8XeCXHdbWTcbfySLydu91/i3boZrv3JdUDeflZWF5S/pdbbJtuu+69ovZqg7zHuF1nsTB/AGlP6QLKQDV3VMlvzLMyjwIwEvsj2FuNPvpPuucFXzF6o679Nn/lm7kGAH7aVd++rSTgO0m42uAQr4xGuntkWAxVJ6skFN0FhZF8iquTM2zOZXNcu9Tw74zm7smsZVbs/acN3pqyxO+gSB6z/i00jjgCt36XfD/BWd9m9Aw3NSpzXYSB9ZlbKja9GLgLV733awsXTLkB3ll2TnHBDOqPPgWyc9Kdud2aW7w/FT2hH36dx7UZ74MN7Nv75CQq2QKr1smJ/Sja3X7yR/rP+3Kd0d5c8KKH7Bg4W1SHdaYmEmZrO9Btgoq/UhReaxHQimJSa6EB0yIzMZYE7jIGGtagzNjAzMG1RQaWwhyy2lN7MqsxuXBwN9Z1Y1PXoCRSxh0THL/3Cr1B3ya4uA5e6p/kdKL5td2n9H5TyMwHKx9NNSVNhPXeS8igrLxdJPS1FhP3WR8yoqLBdLPy1Fhf3URc6rqLBcLP20FBX2Uxc5r6LCcrH001JU2E9d5LyKCsvF0k9LUWE/dZHzKiosF0s/LUWF/dRFzitSmOqTG/PgFaf0eWN4iZXKmOCsMcDEqrhirSnAzKpMeR7iafDQxMis5lji8jxK7YtgoYnNMBKgAeZaRCqz3wwSmmGJzdZbGmBWtt9OfypQaxBSehMLMzGbzd6ZatppFF6Wy4ftZP9bc6eYWz78HymH0n9EZDPmAAAAAElFTkSuQmCC" alt=""/>
        )
    }
    render() {
        const { searchValue, expandedKeys, autoExpandParent } = this.state;
        const loop = data =>
            data.map(item => {
                const title =
                    <Popover placement="right" title={this.text} content={null
                    } trigger="hover">
                        <span className="site-tree-search-value">{item.title}</span>
                    </Popover>
                if (item.children) {
                    return { title, key: item.key, children: loop(item.children) };
                }

                return {
                    title,
                    key: item.key,
                };
            });
        return (

            <div>
                {/* <Popover placement="rightTop" title={text} content={content
                } trigger="hover"> */}
                <Tree
                    showLine
                    switcherIcon={<DownOutlined />}
                    onExpand={this.onExpand}
                    expandedKeys={expandedKeys}
                    treeData={loop(gData)}
                />
                {/* </Popover> */}

            </div>
        );
    }
}

export default treeList
