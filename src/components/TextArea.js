import React from 'react';

const TextArea = (props) => {
    const {celebName} = props;
    return (
        <div className="TextArea">
            <h1>Welcome to CelebScan</h1>
            <p>To get started, enter a url above and click on detect and</p>
            <p>the name of the celebrity will appear below.</p>
            <h1>{celebName}</h1>
        </div>
    );

}

export default TextArea;