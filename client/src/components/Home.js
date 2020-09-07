import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const arrow = <FontAwesomeIcon icon={faArrowRight} />
const check = <FontAwesomeIcon icon={faCheck} />

function Home() {
    return (
        <>
            <div id='headerBackground'>
                <div className="header">
                    <p className='header__title'>Find sweets you'll love. Support independent bakers. Only on Etsy-Bakery.</p>
                    <p id='headerFeatured'>Everday finds</p>
                    <div className="header__images">
                        <div className='header__imgContainer'>
                            <img className='header__img' src='https://livforcake.com/wp-content/uploads/2017/07/black-forest-cake-thumb-500x500.jpg' alt='Everyday find item 1'></img>
                            <p>Cakes {arrow}</p>
                            
                            
                        </div>
                        <div className='header__imgContainer'>
                            <img className='header__img' src='https://gaspichealthyberry.com/wp-content/uploads/2018/05/Blueberry-pies-500x500.jpg' alt='Everyday find item 2'></img>
                            <p>Pies {arrow}</p>
                        </div>
                        <div className='header__imgContainer'>
                            <img className='header__img' src='https://joyfoodsunshine.com/wp-content/uploads/2020/01/double-chocolate-cookies-recipe-7-500x500.jpg' alt='Everyday find item 3'></img>
                            <p>Cookies {arrow}</p>
                        </div>
                        <div className='header__imgContainer'>
                            <img className='header__img' src='https://www.cookingclassy.com/wp-content/uploads/2018/01/healthier-brownies-3-500x500.jpg' alt='Everyday find item 5'></img>
                            <p>Brownies {arrow}</p>
                        </div>
                        <div className='header__imgContainer'>
                            <img className='header__img' src='https://www.cocoandash.com/wp-content/uploads/2017/12/IMG_7816-500x500.jpg' alt='Everyday find item 4'></img>
                            <p>Candy {arrow}</p>
                        </div>
                        <div className='header__imgContainer'>
                            <img className='header__img' src='https://spicedblog.com/wp-content/uploads/2019/07/Trdelnik1-500x500.jpg' alt='Everyday find item 5'></img>
                            <p>Pastries {arrow}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bodyHeader'>
                <div className='bodyHeader__item'>
                    <p>{check} Unique everything</p> 
                    <p className='bodyHeader__comment'>We have hundreds of one-of-a-kind sweets, 
                        so you can find whatever you need (or really, really want).</p>
                </div>
                <div className='bodyHeader__item'>
                    <p>{check} Independent bakers</p>
                    <p className='bodyHeader__comment'>Buy directly from someone who put their heart and soul into baking something special. </p> 
                </div>
                <div className='bodyHeader__item'>
                    <p>{check} Secure shopping</p>
                    <p className='bodyHeader__comment'>We use best-in-class technology to protect your transactions.</p>
                </div>
            </div>
            <div className='body'>
                <div className='body__grid'>
                    <div className='body_gridItem body__gridItem1'>
                        <p>Editors' Picks</p>
                        <h2>A Beautiful Mess x Etsy-Bakery</h2>
                    </div>
                    
                    <img className='body__gridImg body__gridItem2' src='https://spicedblog.com/wp-content/uploads/2019/07/Trdelnik1-500x500.jpg' alt='Editors pick item 1'></img>
                    
                   {/* refactor for price on hover maybe wrap in divs? */}
                    <img className='body__gridImg body__gridItem3' src='https://spicedblog.com/wp-content/uploads/2019/07/Trdelnik1-500x500.jpg' alt='Editors pick item 2'></img>
                    
                    
                    <img className='body__gridImg body__gridItem4' src='https://spicedblog.com/wp-content/uploads/2019/07/Trdelnik1-500x500.jpg' alt='Editors pick item 3'></img>
                    
                    
                    <img className='body__gridImg body__gridItem5' src='https://spicedblog.com/wp-content/uploads/2019/07/Trdelnik1-500x500.jpg' alt='Editors pick item 4'></img>
                    
                    
                    <img className='body__gridImg body__gridItem6' src='https://spicedblog.com/wp-content/uploads/2019/07/Trdelnik1-500x500.jpg' alt='Editors pick item 5'></img>
                    
                    
                    <img className='body__gridImg body__gridItem7' src='https://spicedblog.com/wp-content/uploads/2019/07/Trdelnik1-500x500.jpg' alt='Editors pick item 6'></img>
                    
                    
                    <img className='body__gridImg body__gridItem8' src='https://spicedblog.com/wp-content/uploads/2019/07/Trdelnik1-500x500.jpg' alt='Editors pick item 1'></img>
                    
                </div>
            </div>
        </>
    )
}

export default Home;