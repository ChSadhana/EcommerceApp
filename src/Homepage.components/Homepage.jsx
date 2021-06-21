
import React from 'react'
import './Homepage.styles.scss'

const Homepage = () => {
    return(
    <div className='homepage'> 
        <div className='directory'>
            <div className='menuitem'>
                <div className='title'>
                    <h1>HATS</h1>
                    <span className='subtitle'>Shop Now</span>
                </div>
             </div>
             <div className='menuitem'>
                <div className='title'>
                    <h1>SHOES</h1>
                    <span className='subtitle'>Shop Now</span>
                </div>
             </div>
             <div className='menuitem'>
                <div className='title'>
                    <h1>JACKETS</h1>
                    <span className='subtitle'>Shop Now</span>
                </div>
             </div>
             <div className='menuitem'>
                <div className='title'>
                    <h1>WOMEN</h1>
                    <span className='subtitle'>Shop Now</span>
                </div>
             </div>
             <div className='menuitem'>
                <div className='title'>
                    <h1>MEN</h1>
                    <span className='subtitle'>Shop Now</span>
                </div>
             </div>
        </div>
    </div>
    )
}
export default Homepage;