
import React, { useEffect, useState } from 'react';
import axiosApi from '../../utils/axios'



export const Children = (props) => {
    const { count } = props
    const [ childCount, setChildCount] = useState(100)
    useEffect(() => {
        // axios 接口返回值给子组件state赋值，并渲染
        axiosApi.get('../mock/mockChildren.json', {})
        .then(res => {
            if(res.status === 200){
                setChildCount(5000)
                // console.log(res);
            }
        })
    }, [])

    useEffect(() => {
        //根据父组件传的值，弄出子组件需要的state，类似compontWillreceiveProps
        setChildCount(childCount+count+1000)
    }, [count])
    // console.log(112);

    return (
        
        <div>
            {count}
            ---------------------
            {childCount} 


            ————————————————————————————————————————————————————
            <br/>
            {/* class组件生命周期等操作 */}
            {/* <Grandson ></Grandson> */}
            
        </div>
    )
}
