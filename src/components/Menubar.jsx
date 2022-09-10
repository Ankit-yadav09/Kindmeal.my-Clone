import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "../Styles/menubar.module.css"

const Menubar = () => {
  const navigate=useNavigate();
  
  return (
    <div className={styles.MidOuter}>
        <div className={styles.MidContainer}>
          <div>
            <button onClick={()=>navigate("/")} >Home</button>
          </div>
          <div>
            <button>Meal Deals</button>
          </div>
          <div>
            <button>KindMoments</button>
          </div>
          <div>
            <button>Hot Picks</button>
          </div>
          <div>
            <button>Recipes</button>
          </div>
          <div>
            <button onClick={()=>navigate("/directory")} >Directory</button>
          </div>
          <div>
            <button>Articles</button>
          </div>
          <div>
            <button>Help</button>
          </div>
        </div>
    </div>
  )
}

export default Menubar