import React from 'react';

const UrlSearch = () => {
    return (
        <div className="UrlSearch">
            <form>
                <input className="urlBox" type='text' placeholder='Enter a url...'></input>
            </form>
            <button type="button" className="button">Detect</button>
        </div>
    );
}

export default UrlSearch;