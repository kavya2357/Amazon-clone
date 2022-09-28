import React from 'react'
import './row2.css'
import img1 from './img1.png'
import img2 from './img2.png'
import img3 from './img3.png'
import img4 from './img4.png'
import img5 from './img5.png'

function row2(){
    return(
        <div className='main'>
            <div className='sub1'>
                <div className='title'>
                    <h2>Referesh your home ambiance | Local shops collection</h2>
                    <span>See all offers</span>
                </div>
                <div className='items'>
                    <img src={img1} alt=""/>
                    <img src={img2} alt=""/>
                    <img src={img3} alt=""/>
                    <img src={img4} alt=""/>
                    <img src={img5} alt=""/>
                </div>
            </div>
        </div>
    );
}
export default row2;