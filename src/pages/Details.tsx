import { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import { CardDetails, CardProps } from "../components/Card/Details";
import api from "../services/api";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { StoreState } from "../redux";

export function Details() {
 const { id } = useParams();

 const productList = [
  {
   idProduct: 1,
   name: "Chevette",
   description:
    "Corote, suco MID de Baunilha com Limão e Gelo de coco, pra sua felicidade! Valor da dose",
   image:
    "https://c.pxhere.com/photos/79/35/alcoholic_beverage_cocktail_counter_drink_glasses_liquor_pour-1529499.jpg!d",
   price: 2.5,
   isVegan: true,
   isGlutenFree: false,
   isEnough: 1,
   category: 1,
  },
  {
   idProduct: 2,
   name: "x-salada pequeno",
   description: "Um lanchinho com muita salada!",
   image:
    "https://2.bp.blogspot.com/-RYsrnDN4ui8/Vu3YrGO0SQI/AAAAAAAABkA/a10Szk00yGQ_8YF6AmbF083SAVsd1H31w/s640/dfhgad.png",
   price: 20.5,
   isVegan: false,
   isGlutenFree: true,
   isEnough: 1,
   category: 2,
  },
  {
   idProduct: 3,
   name: "x-calabresa com Alface",
   description: "Um lanchão com muita calabresa!",
   image:
    "https://www.blindburger.com.br/wp-content/uploads/2015/12/xcalabresa.png",
   price: 22.5,
   isVegan: false,
   isGlutenFree: true,
   isEnough: 2,
   category: 3,
  },
  {
   idProduct: 4,
   name: "x-bacon",
   description: "Um lanchão com muito bacon!",
   image:
    "https://img1.gratispng.com/20180328/izw/kisspng-cheeseburger-bacon-hamburger-wrap-hot-dog-bacon-5abba6a08b2616.56814528152224732857.jpg",
   price: 25.5,
   isVegan: false,
   isGlutenFree: true,
   isEnough: 2,
   category: 4,
  },
  {
   idProduct: 5,
   name: "x-onion com Chocolate",
   description: "Um lanchão com muita cebola!",
   image:
    "https://storage.googleapis.com/grandchef-apps/gc3896/images/products/6007567642ef7.png",
   price: 23.5,
   isVegan: false,
   isGlutenFree: true,
   isEnough: 2,
   category: 5,
  },
 ];

 const product = productList[Number(id) - 1];

 return (
  <>
   <Header hasGoBack />
   <CardDetails
    idProduct={product.idProduct}
    name={product.name}
    description={product.description}
    image={product.image}
    price={product.price}
    isVegan={product.isVegan}
    isGlutenFree={product.isGlutenFree}
    isEnough={product.isEnough}
    category={product.category}
   />
  </>
 );
}

export default Details;
