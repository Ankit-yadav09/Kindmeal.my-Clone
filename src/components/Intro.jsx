import React from 'react'
import styles from "../Styles/intro.module.css"

const Intro = () => {
  return (
    <div className={styles.intro_Outer}>
        <div className={styles.intro_inner}>
                <div>
                    <h1>Introducing The World's 1st Meat-Free Lifestyle Platform</h1>
                </div>
                <div className={styles.ad_image} >
                    <h3>Brought to you by</h3>
                    
                    <img src="https://www.kindmeal.my/images/logo-petfinder.png" alt="" />
                    
                </div>
                <div>
                    <h2>Instant coupon & dining. No upfront coupon payment, booking or printing.</h2>
                </div>
            
            <div className={styles.ad_deals}>
                <div className={styles.ad_eachDeal}>
                    <img src="https://www.kindmeal.my/images/intro_deal.png" alt="deal1" />
                    <h3>Get Great Deals</h3>
                    <p>Show our FREE digital coupons to instantly enjoy exciting deals</p>                    
                </div>
                <div className={styles.ad_eachDeal}>
                    <img src="https://www.kindmeal.my/images/intro_kindmoment.png" alt="deal2" />
                    <h3>Share KindMoments</h3>
                    <p>Spread the joy by sharing your yummy dining moments</p>
                </div>
                <div className={styles.ad_eachDeal}>
                    <img src="https://www.kindmeal.my/images/intro_menu.png" alt="deal3" />
                    <h3>Discover Delicious Food</h3>
                    <p>Explore the latest exquisite offerings and creative menus</p>
                </div>
                <div className={styles.ad_eachDeal}>
                    <img src="https://www.kindmeal.my/images/intro_friends.png" alt="deal4" />
                    <h3>Meet Food Lovers</h3>
                    <p>Make new, compassionate friends and share great food tips</p>
                </div>
            </div>
            
            <div className={styles.join_Intro}>
                <h3>
                Any restaurant or cafe can join KindMeal, vegetarian or not, as long as the deals and menu featured are meat-free.
                <br />
                Enjoy a great meat-free dining experience. Easily save animal lives, health, environment and money now!
                </h3>

                <div className={styles.join_Btn}>
                    <div className={styles.join_Btn_h1}>Join KindMeal Now</div> 
                    <div className={styles.join_Btn_h3}>Your tasty journey begins here</div> 
                </div>
            </div>

            <div className={styles.featured}>
                <div>
                    <h2>As Featured In</h2>
                <img src="https://www.kindmeal.my/images/media-feature2.png" alt="featured" />
                </div>
                
            </div>
            

        </div>
        <div className={styles.midLastImg}>
                <img src="https://www.kindmeal.my/images/banner_whykindmeal.png" alt="" />
         </div>
    </div>
  )
}

export default Intro