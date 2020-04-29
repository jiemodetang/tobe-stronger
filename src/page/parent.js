
import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import {Children} from './children'
import ReactSimpleVerify from '../components/simpleVerify'


export function Parent() {
    const [count, setCount] = useState(0);
    // 类似于componentdidmount 和 componentdidupdate
    useEffect(() => {
        console.log('Father--useEffect-1')
    });
    // 类似于componentdidmount
    // 这个 effect 不依赖任何 props 和 state，因此不需要重新执行；
    // 在这个 effect 中的 props 和 state 会一直是初始值。（因为创建了闭包）
    useEffect(() => {
        //一般来做接口调用
        console.log('Father--useEffect-2')
        //  模拟componentWillUnMount(每一个effect都会运行)
        return () => {
            console.log('Father--componentWillUnMount');
        }
    }, []);
    //可以针对state 进行watch
    useEffect(() => {
        //一般来做接口调用
        console.log('Father--useEffect-3')
        // 模拟componentWillUnMount(每一个effect都会运行)
        return () => {
            console.log('Father--componentWillUnMount');
        }
    }, [count]);

    // -------------------实战
    //  正确
    // useEffect(() => {
    //   console.log('Father--useEffect-4')
    //   var interval = setInterval(() => {
    //     // 不再依赖 count，且每次都能获取到最新的 count 值
    //     setCount(t => t + 1)
    //   }, 1000)
    //   return () => {
    //     console.log('Father--componentWillUnMount-1');
    //     if (interval) clearInterval(interval)
    //   }
    // }, []);
    //错误❌(第二个传count，导致每次count改变都进这个effect，重复创建定时器)
    // useEffect(() => {
    //   console.log('Father--useEffect-3')
    //   var interval = setInterval(() => {
    //     // 不再依赖 time，且每次都能获取到最新的 time 值
    //     setCount(t => t + 1)
    //   }, 1000)
    //   return () => {
    //     console.log('Father--componentWillUnMount-1');
    //     if (interval) clearInterval(interval)
    //   }
    // }, [count]);
    //--------------------

    return (
        <div className="App">
            <div>
                    m1
                {count}
                <button onClick={() => setCount(count + 1)}>
                    点我加1
                </button>
              
            </div>
            --------------------------------------
            <br/>
            <Children  count={count}/>
            <ReactSimpleVerify />
        </div>
    );
}