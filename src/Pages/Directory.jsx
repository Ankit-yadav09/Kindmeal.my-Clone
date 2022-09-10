import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import styles from "../Styles/directory.module.css"
import axios from "axios";
import Pagination from '../components/Pagination';

const Directory = () => {

const[info,setInfo]=useState([]);
const[loading,setLoading]=useState(false);
const[error,setError]=useState(false);
const[page,setPage]=useState(1);
const[total,setTotal]=useState(3);


const getdata=()=>{
  setLoading(true);
  setError(false);
  axios.get(`http://localhost:8080/data?_limit=2&_page=${page}`)
  .then((res)=>{
    // console.log(res.data)
    setInfo(res.data)
    setLoading(false)
  })
  .catch((err)=>{
    setLoading(false);
    setError(true);
  })
}

useEffect(()=>{
  getdata();
},[page])

console.log(info)
  return (
    <div>
        {/* directory */}
        <div className={styles.top_section_outer}>
            <div className={styles.top_section}>
                <h1>Featured Restaurants In Malaysia</h1>
                <p>Want to know more about the featured restaurants and cafes? Hop in to their KindMeal shops to check out their meat-free deals and delicious food.</p>
                <p>Some restaurants listed may not have active deals, but they all certainly offer tasty meat-free food that you can try right away!</p>
            </div>
            
        </div>
        <div className={styles.directory_4Btns}>
             <div><button>Vegetarian Directory</button></div> 
             <div><button>Featured Restaurants</button></div> 
             <div><button>Food Menu</button></div> 
             <div><button>Food Map</button></div> 
        </div>
        
        <div className={styles.directory_pagination}>
          <Pagination total={total} current={page} onChange={(val)=>setPage(val)}  />
        </div>
        <br />
        {loading && <div>...Loading</div>}
        {error && <div>...Error</div>}

        {info.map((item)=>(
          <div className={styles.restaurants_grid}>
            <div className={styles.grid_eachItem}>
              <img src={item.image} alt={item.id} />
              <h4>{item.address}</h4>
              <p>{item.desc}</p>
            </div>
            <div className={styles.grid_eachItem}>
              <img src={item.image} alt={item.id} />
              <h4>{item.address}</h4>
              <p>{item.desc}</p>
            </div>
            
        </div>
        ))}
        
        
        <Footer/>
    </div>
  )
}

export default Directory