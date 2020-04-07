import React from 'react';
import './styles.css';

import RodapeCartoes from '../../images/rodape-cartoes.jpg'
import RodapeSeguro from '../../images/site-seguro.png'


const Footer = () => (
    <footer>
        <nav>
            <img src={RodapeCartoes} />
            <img src={RodapeSeguro} />
        </nav>
    </footer>
);

export default Footer;