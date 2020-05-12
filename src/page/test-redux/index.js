
import React, { Component } from 'react';
import { update } from '../../store/reducerCreator'
import { connect } from 'react-redux';

import { Button } from 'antd';
class TestReudex extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    click = () => {
        const { dispatch } = this.props
        dispatch(update('isLogin', 'value', this.props.isLogin.value.split("").reverse().join("")));
        dispatch(update('isLogin', 'age', '20'));
    }
    render() {
        return (
            <section id="home-new">
                <Button onClick={() => this.click()}>点击我</Button>
                <p>{this.props.isLogin.value}</p>
                <p>{this.props.isLogin.age ? '年龄' + this.props.isLogin.age : ''}</p>
            </section>
        );
    }
}

function filter(state) {
    let { isLogin } = state;
    return { isLogin };
}

export default connect(filter)(TestReudex);




