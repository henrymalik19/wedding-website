import React from 'react'

function FlowerOverlay({ children }) {
    const flowerImgUrl = `${process.env.PUBLIC_URL}img/clipart702784.png`;
    
    return (
        <>
            <img className="home-img-bottom-right" src={flowerImgUrl} alt="" />
            <img className="home-img-top-left" src={flowerImgUrl} alt="" />
            
            { children }
        </>
    )
}

export default FlowerOverlay;
