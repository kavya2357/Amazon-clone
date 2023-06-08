import React from 'react'
import './row2.css'
import Img1 from './images/img1.png'
import Img2 from './images/img2.png'
import Img3 from './images/img3.png'
import Img4 from './images/img4.png'
import Img5 from './images/img5.png'

function row2(){
    return(
        <div className='main'>
            <div className='sub1'>
                <div className='title'>
                    <h2>Referesh your home ambiance | Local shops collection</h2>
                    <span>See all offers</span>
                </div>
                <div className='items'>
                    <img src={Img1} alt=""/>
                    <img src={Img2} alt=""/>
                    <img src={Img3} alt=""/>
                    <img src={Img4} alt=""/>
                    <img src={Img5} alt=""/>
                </div>
            </div>
        </div>
    );
}
export default row2;