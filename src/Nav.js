import React, { useEffect, useState} from 'react'
import "./Nav.css"
function Nav() {
const [show, handleShow] = useState(false);

const transitionNavBar = () => {
    if(window.scrollY > 100){
        handleShow(true);
    }else {
        handleShow(false);
    }
}

useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
},[]);

    return (
        <div className={`nav ${show && 'nav_black'}`}>
            <div className='nav_contents'>

            <img
            className= 'nav_logo'
             src="https://pngimg.com/uploads/netflix/netflix_PNG11.png" alt=""/>
           
            <img
            className='nav_avatar'
            src="https://i.pinimg.com/originals/fb/8e/8a/fb8e8a96fca2f049334f312086a6e2f6.png" alt=''/>
          

            </div>
        

          
            
        </div>
    )
}

export default Nav
