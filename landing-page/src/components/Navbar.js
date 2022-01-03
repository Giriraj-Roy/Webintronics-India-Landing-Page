import React from 'react'

const Navbar = () => {
    return (
        <div className='navbar'>
            <span className='rectOuter'><span className='rectInner'></span></span>
            <div className='navPanel'>
                <span className='navAbout'>About</span>
                <span className='navStore'>Locate Store</span> 
                               
                <span style={{marginRight: "3vh", display: "inline-block"}}>Scooter  <span className='mediaArrow'></span></span>
                <span style={{marginRight: "3vh", display: "inline-block"}}>Purchase Assistance  <span className='mediaArrow'></span></span>
                <button className="btnDealer">Dealership</button>
            </div>
        </div>
    )
}

export default Navbar
