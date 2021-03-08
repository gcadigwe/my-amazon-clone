import React from "react";
import "./Home.css";
import Product from "../Product/Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="banner"
        />

        <div className="home__row">
          <Product
            id="45674363"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400.jpg"
            rating={5}
          />
          <Product
            id="49538094"
            title="Kenwood KMix Stand Mixer for Baking, Stylish Kitchen Mixer with k-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/814JG6E-%2BsL._AC_SX522_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49` Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/81Zt42ioCgL._AC_SL1500_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) Smart Speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/55/552/5828/100/3/740778400/740778400_1_720x928.jpg"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-silver-202003_FMT_WHH?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1583551131102"
          />
        </div>
        <div className="home__row">
          <Product
            id="98829332"
            title="Samsung LC4RG90SSUXEN 49`Curved LED Gaming Monitor - Super ultra wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://cdn-bdcfb.nitrocdn.com/OuAhOkQEXaWsTUDYZhJWZazYJWvoodSP/assets/static/optimized/wp-content/uploads/thumbs_dir/3948a07a18f57c5aa0b8f61ef5db130f.samsung-lc49rg90ssuxen-49-curved-led-gaming-monitor-super-ultra-wide-dual-ozd75euz05l82cac1ykxbo3hgv1ofuexhr4a07jdoo.jpg"
          />
        </div>
      </div>
    </div>
  );
}
export default Home;
