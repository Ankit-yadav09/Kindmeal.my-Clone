import React from 'react'
import styles from "../Styles/footer.module.css"

const Footer = () => {
  return (
    <div className={styles.footer_outer}>
      
      <div className={styles.footer_inner}>
        <div className={styles.footer_top}>
          <div className={styles.footer_content_box}>
            <h4>General</h4>
            <p>Home</p>
            <p>Sign Up</p>
            <p>Bussiness/Restauranteurs</p>
            <p>Advertising</p>
            <p>About KindMeal.my</p>
            <p>Help & FAQ</p>
            <p>Terms & Conditions</p>
            <p>Inspiring Partners</p>
            <p>Lifestyle Ambassadors</p>
            <p>Jobs & Careers</p>
            <p>Contact Us</p>
          </div>
          
          <div className={styles.footer_content_box}>
            <h4>Features</h4>
            <p>Meat-free Deals</p>
            <p>Tasty Menus</p>
            <p>Kind Moments</p>
            <p>Meat-free Recipes</p>
            <p>Member Recommandations</p>
            <p>Featured Restaurants</p>
            <p>Vegetarian & Vegan Directories</p>
            <p>Food Map</p>
            <p>Become A Superhero</p>
            <p>Vegan News</p>
            <p>latest Comments</p>
          </div>
          
          <div className={styles.footer_content_box}>
            <h4>Social Media</h4>
            <p>KindMeal Widget</p>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
            
          </div>
          
          <div className={styles.footer_content_box}>
            <h4>Mobile</h4>
            <p>iPhone & iPod App</p>
            <p>Android App</p>

            <h4>Exciting Promos</h4>
            <p>Free Meals</p>
            <p>Food Bloggers</p>
            <p>Uber CHIRP</p>
            <p>Jane goodall Contest</p>
            <p>Win digi iPhone 6</p>
            <p>Feed The Poor</p>
            <p>Win Superhero Gifts</p>
            <p>Win an iPad Mini 3</p>
          
          </div>
          
          <div className={styles.footer_content_box}>
            <h4>PetFinder.my</h4>
            <p>Adopt A Pet</p>
            <p>Smartphone Apps</p>
            <p>WAGazine</p>
            <p>Discussion forum</p>
            <p>Medical Fund</p>
            
          </div>
        </div>
        
        <div className={styles.footer_bottom}>
          <p>This is a clone of KindMeal.my Website for study purpose only and not for any commercial use.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer