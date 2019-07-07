import React from 'react';

const TextArea = (props) => {
    const {celebName,percent} = props;
    if (percent === 0){
        return (
            <div className="TextArea">
                <h1>Welcome to CelebScan</h1>
                <p>To get started, enter a Url above and click on detect and</p>
                <p>the name of the celebrity will appear below.</p>
            </div>
        );
    }else{
        return (
            <div className="TextArea">
                <h1>This has a {percent}% chance of being:</h1>
                <h1 className="name">{celebName}</h1>
                <h3>Enter a new Url to try again</h3>
            </div>
        );
    }

}

export default TextArea;
