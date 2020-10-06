import React from 'react'

function Home() {
    const imgUrl = `${process.env.PUBLIC_URL}/img/photoshoot.jpg`;

    return (
        <main className="home">

            <div className="home-main-img-container">
                <img className="home-main-img" src={imgUrl} alt="Main" />
            </div>
        </main>
    )
}

export default Home;
