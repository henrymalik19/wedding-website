import React from 'react';

function Home() {
  const imgUrl = '/img/photoshoot.min.jpg';

  return (
    <main className="home">

      <div className="home-main-img-container">
        <img className="home-main-img" src={imgUrl} alt="Main" />
      </div>
    </main>
  );
}

export default Home;
