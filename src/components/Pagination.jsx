import React from 'react'
import styles from "../Styles/pagination.module.css"

const Pagination = ({total,current,onChange}) => {
    
    const prev= <button className={styles.prevBtn} disabled={current===1} onClick={()=>onChange(current-1)} >Prev</button>
    
    const next= <button className={styles.prevBtn} disabled={current===total} onClick={()=>onChange(current+1)} >Next</button>
    
    const pages=new Array(total).fill(0).map((a,i)=>
    <button className={styles.eachBtn} disabled={current===(i+1)} onClick={()=>onChange(i+1)} >{i+1}</button>)
  
    return (
    <div className={styles.btnDiv}>
        <div>Page:{pages}</div>
        
        <div id={styles.nextBtn}>
          {/* <div>{prev}</div> */}
          <div>{next}</div>
          </div>
        
        
        
    </div>
  )
}

export default Pagination