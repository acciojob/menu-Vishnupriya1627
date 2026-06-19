import React,{ useState } from "react";
import Menu from "./Menu.js";
import "./App.css";

function App() {
  const dishes = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing.`,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400",
      desc: `kombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,`,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up`,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "https://images.unsplash.com/photo-1619158401201-8fa932695178?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b3JlbyUyMHNoYWtlfGVufDB8fDB8fHww",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "https://images.unsplash.com/photo-1528736235302-52922df5c122?w=400",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland`,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings.`,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];

  const [filter,setFilter] = useState(dishes);

  function all(){
    setFilter(dishes);
  }

  function breakfast(){
    setFilter(
      dishes.filter((dish)=>dish.category=='breakfast')
    )
  }

  function lunch(){
    setFilter(
      dishes.filter((dish)=>dish.category=='lunch')
    )
  }

  function shakes(){
    setFilter(
      dishes.filter((dish)=>dish.category=='shakes')
    )
  }

  return (
    <div>
      <h1>Our Menu</h1>
      <div id="button_container">
        <button id="All" onClick={all}>All</button>
        <button id="filter-btn-1" onClick={breakfast}>Breakfast</button>
        <button id="filter-btn-2" onClick={lunch}>Lunch</button>
        <button id="filter-btn-3" onClick={shakes}>Shakes</button>
      </div>
      <div style={{display:"flex", flexWrap:"wrap"}}>
        {
          filter.map((dish)=>(
            <Menu key={dish.id} data={dish}/>
          ))
        }
      </div>
    </div>
  );
}

export default App;
