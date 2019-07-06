import React from 'react';

const UrlSearch = ({textChange}) => {
    return (
        <div className="UrlSearch">
            <form>
                <input className="urlBox" type='text' placeholder='Enter a url...'></input>
            </form>
            <button onChange={textChange} type="button" className="button">Detect</button>
        </div>
    );
}

export default UrlSearch;