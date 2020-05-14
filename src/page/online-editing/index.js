
import React, { Fragment } from 'react';
import AceEditor from "react-ace";

import './online-editing.scss'

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
function onLoad(newValue) {
    console.log("change", newValue);
}
function onChange(newValue) {
    console.log("change", newValue);
}

const Online_editing = () => {
    return (
        <AceEditor
            placeholder="Placeholder Text"
            mode="javascript"
            theme="monokai"
            name="blah2"
            onLoad={onLoad}
            onChange={onChange}
            fontSize={14}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            value={`function onLoad(editor) {
        console.log("i've loaded");
      }
      `}
            setOptions={{
                //自动提示不管用
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true,
                showLineNumbers: true,
                tabSize: 2,
            }}
            style={{ width: '100%' }}
        />
        // http://securingsincity.github.io/react-ace/
        
    )

}
export default Online_editing 