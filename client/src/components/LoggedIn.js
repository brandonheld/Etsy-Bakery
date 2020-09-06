// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { logout } from '../store/auth';

// function LoggedIn() {
//     const [isOpen, setIsOpen] = useState();
//     const dispatch = useDispatch();
//     const signOut = (e) => {
//         e.preventDefault();
//         dispatch(logout())
//     }

//     return (
        
//         <div>
//             <button id='accountButton' onClick={() => setIsOpen(!isOpen)}> Account </button> 
//             {(isOpen) ? (
//                 <div className='dropDown'>
//                     <div className="dropDown__signOut" onClick={signOut}>Sign out</div>
//                 </div>
//             ) : null}
//         </div>
//     )

// }

// export default LoggedIn;


// .dropDown {
//     display: flex;
//     width: 100px;
//     max-width: 250px;
//     height: 100px;
//     border: 1px solid pink;
//     position: fixed;
//     z-index: 3;
//     margin-top: 20px;
//     margin-right: 5px;
//     background-color: #FFFDD0;
    
// }
// .dropDown__signOut {
//     padding: 10px;
//     cursor: pointer;
//     text-align: center;
// }
// .dropDown__signOut:hover {
//     background-color: plum;
// }