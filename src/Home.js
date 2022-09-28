import React from "react";
import "./Home.css";
import image from "./bg.png";
import Product from "./Product.js";
import chips from "./chips.png";
import tea from "./p1.png";
import Row2 from "./row2.js";
import furnish from "./furnishing.png"
function Home(){
    return(
        <div className="home">
             <div className="home_container">
                <img className="home_image" src={image}/>
             </div>

             <div className="home_row">
                <Product 
                  title="Beyond Snáck Kerala Banana Chips | 3 Pack Combo, 300g| Original Style, Peri Peri, Sour Cream Onion & Parsley (3X100g)"
                  price={204}
                  desc="(₹68/100g)"
                  image={chips}
                  rating="⭐⭐⭐⭐"
                  delivery="Friday, September 16"
                />   

                <Product 
                  title="ShoesSPRIG TE.A Green Tea with Oriental Ginger | Made with Fresh Ginger | Low Bitterness | 100% Soluble Green Tea | Aids in weight loss | Immunity Boosting | No Chemical Additives | Pack of 25"
                  price={145}
                  desc="(₹58/100g)"
                  image={tea}
                  rating="⭐⭐⭐⭐"
                  delivery="Friday, September 16"
                />   
                
                <Product 
                  title="ShoesSPRIG TE.A Green Tea with Oriental Ginger | Made with Fresh Ginger | Low Bitterness | 100% Soluble Green Tea | Rich in Antioxidants and Vitamin C | Relief from Nausea, Indigestion & vomiting | Aids in weight loss | Immunity Boosting | No Chemical Additives | Pack of 25"
                  price={145}
                  desc="(₹58/100g)"
                  image={tea}
                  rating="⭐⭐⭐⭐"
                  delivery="Friday, September 16"
                /> 
                
             </div>

             <div className="home_row">
                <Row2 />
             </div>

             <div className="home_row">
                <div className="row3">
                  <img src={furnish} alt=""/>
                </div>
             </div>

             <div className="home_row">
                
                <Product 
                  title="Shoes"
                  price={20.00}
                  image={tea}
                  rating="⭐⭐⭐⭐"
                />   
                
             </div>
        </div>
    );
}

export default Home;