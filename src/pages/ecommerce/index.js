import React from 'react';

import Lanterna from '../../images/ecommerce/lanterna.png';
import CameraEspiã from '../../images/ecommerce/360-camera-espia.png';

const dContainer = {
    'background-color': '#B8E0D8',
    'grid-template-rows': '500px 500px 500px'
};

const dContainerDiv = {
    'background-color': '#f5d5d5'
};

const dContainerA = {
    'border': '2px solid #339967',
    'background': '#339967'
};

const Ecommerce = () => (
    
    <div className="container" style={dContainer}>
            <div>
               <strong><h2>Lanterna Super Forte</h2></strong>
               <img src={Lanterna} alt="Lanterna Super Forte" />
               <p>Finalmente chega ao Brasil uma das lanternas mais potentes do mundo!</p>
               <a href="#" style={dContainerA}>Comprar</a>
            </div>
            <div>
               <strong><h2>360 Camera Espiã</h2></strong>
               <img src={CameraEspiã} alt="360 Camera Espiã" />
               <p>Tenha sua casa sempre protegida.</p>               
               <a href="#" style={dContainerA}>Comprar</a>
            </div>
            <div>
               <strong><h2>Lanterna Super Forte</h2></strong>
               <img src={Lanterna} alt="Lanterna Super Forte" />
               <p>Finalmente chega ao Brasil uma das lanternas mais potentes do mundo!</p>
               <a href="#" style={dContainerA}>Comprar</a>
            </div>
            <div>
               <strong><h2>Lanterna Super Forte</h2></strong>
               <img src={Lanterna} alt="Lanterna Super Forte" />
               <p>Finalmente chega ao Brasil uma das lanternas mais potentes do mundo!</p>
               <a href="#" style={dContainerA}>Comprar</a>
            </div>
            <div>
               <strong><h2>Lanterna Super Forte</h2></strong>
               <img src={Lanterna} alt="Lanterna Super Forte" />
               <p>Finalmente chega ao Brasil uma das lanternas mais potentes do mundo!</p>
               <a href="#" style={dContainerA}>Comprar</a>
            </div>
    </div>
    
);

export default Ecommerce;
