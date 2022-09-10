import React, { useContext } from 'react'
import styles from "../Styles/navbar.module.css"
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
// import Login from '../Routes/Login'

const Navbar = () => {
    const navigate= useNavigate()
    const {isAuth,setIsAuth} =useContext(AuthContext);
    
        const handleClick=()=>{
        navigate("/login")   
    }
    const handleLogout=()=>{
        setIsAuth(false)
        alert("Logged out Successfully")
    }
    
  return (
        <div className={styles.navContainer}>
            
            <div className={styles.webLogo}>
                <img src="https://www.kindmeal.my/images/logo-kindmeal.png" alt="company logo" />
            </div>
            
            <div className={styles.navSocial} > 
                <div>
                <a href="https://medium.com" target="_blank" rel="noreferrer">
                    <img src="https://previews.123rf.com/images/fokaspokas/fokaspokas1806/fokaspokas180600389/103144683-link-icon-hyperlink-chain-symbol-simple-icon-white-icon-with-shadow-on-transparent-background.jpg" alt="blog logo" />
                </a>
                </div>
                <div>
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                    <img src="https://icon-library.com/images/facebook-png-icon-white/facebook-png-icon-white-5.jpg" alt="facebook logo" />
                </a>
                </div>
                <div>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                    <img src="https://toppng.com/uploads/preview/image-result-for-facebook-icon-image-result-for-gray-twitter-icon-2018-115632283832aq1i9ssek.png" alt="twitter logo" />
                </a>
                </div>
            </div>
            
            <div className={styles.navAuth}>
                <p>Login</p>
                <div>
                    <a href="https://facebook.com" target="_blank" rel="noreferrer">
                    <button className={styles.fbBtn}  >Facebok</button>
                    </a>
                </div>
                <div>
                {/* <Login className={styles.emailBtn} /> */}
                    <button className={styles.emailBtn} onClick={ !isAuth? handleClick : handleLogout} >{!isAuth ? "Email" : "Logout"}</button>
                </div>
                <div style={{border:"0.5px solid lightgrey",height:"25px"}}></div>

                <p className={styles.signupBtn}>Sign Up</p>
            </div>
            
        </div>
  )
}

export default Navbar