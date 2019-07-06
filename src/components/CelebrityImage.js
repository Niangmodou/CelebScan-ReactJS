import React from 'react';

const CelebrityImage = (props) => {
    const {imgUrl} = props
    return (
        //{REPLACE WITH AN IMG TAG}
        <div className="Image">
            <img className= "Img" alt="ImageUrl" src={imgUrl}/>
        </div>
    );

}

export default CelebrityImage;