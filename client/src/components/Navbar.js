import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux';

const cart = <FontAwesomeIcon icon={faShoppingCart} />
export const OPEN_SIGNIN = "OPEN_SIGNIN";


function Navbar() {
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    const dispatch = useDispatch()
    return (
        <>
            <div className='navbar'>
                <div className="navbar__search">
                    <h1 id='home'>Evolved-Etsy</h1>
                    <form onSubmit={handleSubmit}>
                    <input id='searchBar'
                        type="text" 
                        name="item"
                        placeholder="Search for anything"
                    />
                    </form>
                    <div className='navbar__signIn'>
                        <button onClick={() => dispatch({ type: OPEN_SIGNIN })}>Sign in</button>
                    </div>
                    <div className='navbar__cart'>
                        {cart}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar;
