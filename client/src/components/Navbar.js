import React from 'react'

 function Navbar() {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <div className='navbar'>
                <div className="navbar__search">
                    <h1>Evolved-Etsy</h1>
                    <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="item" 
                        value="" 
                        placeholder="Search for anything"
                    />
                    </form>
                </div>
            </div>
        </>
    )
}
export default Navbar;
