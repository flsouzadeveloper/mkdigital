import React from 'react';
import Carousel from "./carousel";
import '../../index.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AprendaCroche from '../../images/home-marketing-digital.jpg'

const dContainer = {
    'background-color': '#fff',
    'grid-template-rows': '500px'
};

const dContainerDiv = {
    'background-color': 'rgb(250, 250, 251)'
};

const dContainerA = {
    'border': '2px solid 436DDA',
    'background': '436DDA'
};

const Home = () => (
    <div className="divCarouselHome">
        <Carousel>
        </Carousel>
        <div className="container" style={dContainer}>
            <div style={dContainerDiv}>
               <strong><h2>Aprenda Crochê</h2></strong>
               <img src={AprendaCroche} alt="Aprenda Crochê" />
               <p>Descubra Como Fazer As Peças Mais Lindas Do Mundo</p>
               <a href="#" style={dContainerA}>Comprar</a>
            </div>
            <div style={dContainerDiv}>
               <strong><h2>Aprenda Crochê</h2></strong>
               <img src={AprendaCroche} alt="Aprenda Crochê" />
               <p>Descubra Como Fazer As Peças Mais Lindas Do Mundo</p>
               <a href="#" style={dContainerA}>Comprar</a>
            </div>
            <div style={dContainerDiv}>
               <strong><h2>Aprenda Crochê</h2></strong>
               <img src={AprendaCroche} alt="Aprenda Crochê" />
               <p>Descubra Como Fazer As Peças Mais Lindas Do Mundo</p>
               <a href="#" style={dContainerA}>Comprar</a>
            </div>
        </div>
    </div>
);

export default Home;