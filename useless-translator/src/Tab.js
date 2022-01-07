import './App.css';
import React, { useState } from 'react';

const Tab = (props) => {
    return (
        <>
            <div className={props.current_tab === props.language_code ? "tabcontent_active" : "tabcontent_hidden"}>
                <p>{props.translated_text}</p>
            </div>
        </>   
    )
}

export default Tab
