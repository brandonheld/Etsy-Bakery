import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Login from './Login'
const cart = <FontAwesomeIcon icon={faShoppingCart} />

 function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
    };

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
                        <button onClick={() => setIsOpen(!isOpen)}>Sign in</button>
                        {isOpen ?(
                            <div>
                                <Login />
                            </div>
                        ): null}    
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
