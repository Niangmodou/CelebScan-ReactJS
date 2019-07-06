import React from 'react';


const UrlSearch = (props) => {
    const {textChange,buttonClick} = props;
    return (
        <div className="UrlSearch">
            <form>
                <input onChange={textChange} className="urlBox" type='text' placeholder='Enter a url...'></input>
            </form>
            <button onClick={buttonClick} type="button" className="button">Detect</button>
        </div>
    );
}

export default UrlSearch;