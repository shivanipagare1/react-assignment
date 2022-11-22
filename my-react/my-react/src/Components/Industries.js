import React from 'react';
import im from '../assets/image/im.png';
import two from '../assets/image/two.png';
import three from '../assets/image/three.png';
import four from '../assets/image/four.png'

function Industries() {
        return (
            <div className='Industries' style={{ backgroundColor: "white" }}>
                <h2 style={{color:"royalBlue"}}>Industries we Serve</h2>
                <p className='Ip'>We serve a wide range of industries. We have worked with small business and Fortune 500 companies alike, 
                    and our team has the skills and experience to meet the unique needs of each client.</p>
                    <div className='im' >
                    <img src={im} alt='#' height={450}></img>
                    </div>
                    <div className='two'>
                    <img src={two} alt='#' height={458} ></img>
                    </div>
                    <div className='three'>
                    <img src={three} alt='#' height={448}></img>
                    </div>
                    <div className='four'>
                    <img src={four} alt='#' height={450}></img>
                    </div>
                
            </div>

        )
    }



export default Industries;
