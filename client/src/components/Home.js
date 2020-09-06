import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const arrow = <FontAwesomeIcon icon={faArrowRight} />

function Home() {
    return (
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
    )
}

export default Home;