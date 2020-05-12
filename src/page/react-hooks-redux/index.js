
import React, { useReducer, useState, useEffect, useCallback } from 'react';

import { connect, useDispatch } from 'react-redux';

import { Button } from 'antd';

import { update } from '../../store/reducerCreator'

const Parent = (props) => {

    let dispatch = useDispatch(); //取得派发方法

    useEffect(() => {
        console.log(props);
    })
    const [count, setCount] = useState(10);

    const updateStore = useCallback(() => {
        dispatch(update('reactHooks', 'value', '我是改变之后的'+Math.random()));
    }, []);


    return (
        <div>
            Count: {count}
            <br/>
            <br/>
            <Button type="primary" onClick={() => setCount(0)}>Reset</Button>
            <Button style={{margin:'10px'}} type="primary" onClick={() => setCount(count => count + 1)}>+</Button>
            <Button type="primary" onClick={() => setCount(count => count - 1)}>-</Button>
            <br/>
            <br/>
            <Button onClick={updateStore}>点击改变store里面的值</Button>
            <br />
            <br />
            <p>{props.state.reactHooks.value}</p>
            <br />
        </div>
    );
}

function filter(state) {
    return { state };
}

export default connect(filter)(Parent);
