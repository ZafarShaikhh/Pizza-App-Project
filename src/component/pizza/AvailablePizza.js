import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from "./AvailablePizza.module.css";
import Items from "./Items";

function AvailablePizza() {
  const [pizza, setPizza] = useState([]);
  useEffect(() => {
    const fetchPizza = async () => {
      const response = await fetch(
        "https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68"
      );
      const responseData = await response.json();

      const loadedPizza = [];

      for (const key in responseData) {
        loadedPizza.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
          rating: responseData[key].rating,
          img_url: responseData[key].img_url,
          isVeg: responseData[key].isVeg,
        });
      }
      setPizza(loadedPizza);
    };
    fetchPizza();
  }, []);
  const pizzaList = pizza.map((pizza) => (
    <Items
      id={pizza.id}
      key={pizza.id}
      name={pizza.name}
      description={pizza.description}
      price={pizza.price}
      rating={pizza.rating}
      img={pizza.img_url}
      isVeg={pizza.isVeg}
      // size={pizza.size}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{pizzaList}</ul>
      </Card>
    </section>
  );
}

export default AvailablePizza;
