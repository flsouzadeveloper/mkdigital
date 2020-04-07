import React from "react";
import { Carousel } from "react-responsive-carousel";

import Home1 from '../../images/home1.jpg'
import Home2 from '../../images/home2.jpg'
import Home3 from '../../images/home3.jpg'

export default () => (
  <Carousel autoPlay showArrows={false} infiniteLoop={true} visibleSlides={false} showIndicators={false}
  showThumbs={false} showStatus={false} stopOnHover={false} dynamicHeight={true}>
    <div>
       <img src={Home1} alt="Boas Compras!" />
       {/* <p className="legend">Legend 1</p> */}
    </div>
    <div>
       <img src={Home2} alt="Boas Compras!" />
       {/* <p className="legend">Legend 1</p> */}
    </div>
    <div>
       <img src={Home3} alt="Boas Compras!" />
       {/* <p className="legend">Legend 1</p> */}
    </div>
  </Carousel>
);
