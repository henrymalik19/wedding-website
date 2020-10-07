import React from 'react'

function FlowerOverlay({ children }) {
    const flowerImgUrl = '/img/flower_banner.min.png';
    
    return (
        <>
            <img className="home-img-bottom-right" src={flowerImgUrl} alt="" />
            <img className="home-img-top-left" src={flowerImgUrl} alt="" />
            
            { children }
        </>
    )
}

export default FlowerOverlay;
