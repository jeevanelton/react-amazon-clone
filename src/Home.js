import React from "react";
import "./home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://www.amazon.in/images/G/31/img19/AmazonPay/Boson/Sid/UPI/July/DesktopHero_1500x600_IMC_Unrec._CB428573416_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="1231323"
          title="Shade Net 50% Uv Stabilized Garden Netting House Agro, 30 Sq. M (Green, 10 x 32 Ft)"
          price={479}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/81n8KHh5fTL._AC_UL270_SR262,270_.jpg"
        />

        <Product
          id="1231324"
          title="PRO365 Double Ab Wheel Roller/Carver/Abdominal Workout Safe (6 MM Blue Knee Mat, Yellow Roller)"
          price={349}
          rating={4}
          image="https://www.amazon.in/images/I/71F0zfxHUwL._SL1500_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="1231325"
          title="Aurion Skipping-Rope Jump Skipping Rope for Men"
          price={173}
          rating={4}
          image="https://rukminim1.flixcart.com/image/352/352/jp5sknk0/skipping-rope/z/y/f/fitness-rope-for-exercise-through-skipping-and-jumping-original-imafbg46gkgcct4c.jpeg?q=70"
        />
        <Product
          id="1231326"
          title="Strauss Adjustable Hand Grip Strengthener"
          price={259}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/61xc0%2BJWDqL._AC_UL270_SR270,270_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="1231327"
          title="Samsung 138 cm (55 Inches) Wondertainment Series Ultra HD LED"
          price={60000}
          rating={4}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTejVNdpQ_i_HB7o0c-Ndc8eTqJZ2iBONdRcA&usqp=CAU"
        />
      </div>
    </div>
  );
};

export default Home;
