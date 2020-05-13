
import React, { Fragment } from 'react';
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
const Online_editing = () => {
    return (
        <AceEditor
            placeholder="Placeholder Text"
            mode="javascript"
            theme="monokai"
            name="blah2"
            // onLoad={this.onLoad}
            // onChange={this.onChange}
            fontSize={14}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            value={`function onLoad(editor) {
        console.log("i've loaded");
      }`}
            setOptions={{
                enableBasicAutocompletion: false,
                enableLiveAutocompletion: false,
                enableSnippets: false,
                showLineNumbers: true,
                tabSize: 2,
            }}
        />
        // http://securingsincity.github.io/react-ace/
    )

}
export default Online_editing 