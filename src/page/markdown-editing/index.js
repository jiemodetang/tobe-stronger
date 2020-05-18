
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown'
import axiosApi from '../../utils/axios'



const Markdown_editing = () => {
    const [childCount, setChildCount] = useState('')

    useEffect(() => {
        // axios 接口返回值给子组件state赋值，并渲染
        axiosApi.get('../mock/markdownTest.md', {})
            .then(res => {
                if (res.status === 200) {
                    console.log(res.data)
                    setChildCount(res.data)
                }
            })
    }, [])
    return (
        <div>
            11
            <ReactMarkdown
                source={"## Tables?"}
                escapeHtml={true}
               
            />

        </div>
    )

}
export default Markdown_editing 