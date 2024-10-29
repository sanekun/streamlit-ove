import {
    Streamlit,
    StreamlitComponentBase,
    withStreamlitConnection
} from "streamlit-component-lib";
import React from 'react';
import { Editor, updateEditor } from "@teselagen/ove";
import store from "./store";

import "./App.css";

// if st_height === null; set 500px
//let st_height = this.props.args["height"] | 500;

class Mycomponent extends StreamlitComponentBase {
    render = () => {
        let initialData = this.props.args["data"];
        let st_height = this.props.args["height"] || 500;
        return (
            <div style={{height: `${st_height}px`}}>
                <div style={{height: "90%", overflow: "auto", margin: "10px", padding: "10px", width: "90%"}}>
                    <OveComponent />
                </div>
            </div>
        );
    }
}
function OveComponent() {
    React.useEffect(() => {
        Streamlit.setComponentReady();
        updateEditor(store, "open-vector-editor", {
            sequenceData: {
                circular: true,
                sequence:
                    "gtagagagagagtgagcccgacccccgtagagagagagtgagcccgacccccgtagagagagagtgagcccgacccccgtagagagagagtgagcccgaccccc",
        }});
    });
    const editorProps = {
        editorName: "open-vector-editor",
        isFullscreen: true,
        showMenuBar: true
    };

    return (
        <div>
            <Editor {...editorProps} />
        </div>
    );
}

export default withStreamlitConnection(Mycomponent);