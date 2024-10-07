import React from "react";
import { data } from "../restApi.json";

const Menu = () => {
  return (
    <section className="menu" id="menu">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">POPULAR DISHES</h1>
          <p>
            Discover a world of flavor with our curated selection of popular
            dishes, from sizzling street tacos bursting with authentic spices to
            indulgent gourmet burgers that redefine comfort food. Whether you're
            craving the rich, creamy textures of a classic Italian pasta or the
            bold, aromatic flavors of Asian fusion cuisine, our app showcases
            the most-loved dishes that have won the hearts (and taste buds) of
            food enthusiasts across the city.
          </p>
        </div>
        <div className="dishes_container">
          {data[0].dishes.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.title} />
                <h3>{element.title}</h3>
                <button>{element.category}</button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Menu;
