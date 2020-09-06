import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom";
import Account from './Account'

const cart = <FontAwesomeIcon icon={faShoppingCart} />

function Navbar() {
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    
    return (
        <div className='navbar'>
            <div className="navbar__search">
                <h1 id='home'>Etsy-Bakery</h1>
                <div className='navbar__searchBox'>
                    <form onSubmit={handleSubmit}>
                    <input id='searchBar'
                        type="text" 
                        name="item"
                        placeholder="Search for anything"
                    />
                    </form>
                </div>
                <div>
                    <Account />
                </div>
                <div className='navbar__cartButton'>
                    {cart}
                </div>
            </div>
            <div className='navbar__categories'>
                <NavLink to='#' className='navlink'>Featured</NavLink>
                <NavLink to='#' className='navlink'>Brownies</NavLink>
                <NavLink to='#' className='navlink'>Cakes</NavLink> 
                <NavLink to='#' className='navlink'>Candy</NavLink>  
                <NavLink to='#' className='navlink'>Chessecake</NavLink>  
                <NavLink to='#' className='navlink'>Cookies</NavLink>
                <NavLink to='#' className='navlink'>Cupcakes</NavLink>
                <NavLink to='#' className='navlink'>Pastries</NavLink>  
                <NavLink to='#' className='navlink'>Pies</NavLink>    
            </div>
        </div>
    )
}
export default Navbar;
