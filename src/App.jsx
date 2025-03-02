
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'
import Salad1 from "./assets/Salad1.jpg";
import "./App.css";

function App() {
  return (
    <> 
   <div className="container">  
   {/* <div><img src="src/assets/Backgroup_leaf.jpg" alt="Hanging Leaf" className="background-image" /></div> */}
  <div className="cardComp">
    <h2 className= "heading">Glow with Greens</h2>
      <Card image= {Salad1} title="Green Juice" text = "A healthy Green Juice" link= "https://www.allrecipes.com/recipe/230642/healthy-green-juice/"></Card>
      <Card image= "src/assets/Avocado.jpg" title= "Green Salad" text = "A healthy Salad recipie" link = "https://www.pickuplimes.com/recipe/roasted-sweet-potato-kale-salad-441"></Card>
      <Card image= "src/assets/Avocado.jpg" title= "Avocado Smoothie" text = "Healthy Avaocado Smoothie" link = "https://www.loveandlemons.com/avocado-smoothie/"></Card>
      <Card image= "src/assets/BorocoliSaag.jpg" title= "Brocoli Saag" text = "A healthy Borocoli recipie" link = "https://food52.com/recipes/64227-sarson-ka-saag-saag-paneer-with-broccoli-rabe-and-spinach?srsltid=AfmBOorqDDInyVrZJCVmUqzI4fZmouS4Q9Sd9P1F_vj2A7LnATQrP4vY"></Card>
      <Card image= "src/assets/Green_Pasta.jpg" title= "Green Pasta" text = "A healthy pasta recipie" link = "https://www.pickuplimes.com/recipe/creamy-green-leek-pea-pasta-52"></Card>  
      <Card image= "src/assets/Green_beans.jpg" title="Green Beans" text = "A healthy Green Bean Recipie" link = "https://www.allrecipes.com/recipe/244868/sauteed-garden-fresh-green-beans"></Card>
      <Card image= "src/assets/Pineapple-Green-Juicesq.jpg.webp" title="Pineapple Green Juice" text = "A healthy Green Juice" link= "https://www.eatingwell.com/recipe/251038/pineapple-green-smoothie/"></Card>
      <Card image= "src/assets/Egg_Recipie.jpg" title="Asparagus Egg Recipie" text = "A healthy Egg recipie" link = "https://www.allrecipes.com/recipe/264069/easy-asparagus-frittata/"></Card>  
      <Card image= "src/assets/Green_wrap.jpg" title="Green Wrap" text = "A healthy Wrap" link= "https://www.healthyseasonalrecipes.com/veggie-spinach-wraps-with-hummus/"></Card> 
      <Card image= "src/assets/Green Dip.jpeg" title="Green Dip" text = "A healthy Green Sauce Recipie" link= "https://www.pickuplimes.com/recipe/green-pea-edamame-mint-dip-163"></Card>   
  </div>
  </div>
  </>   
  );
}

export default App
