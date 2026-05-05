import Heading from "./heading"
import Pokemon from "./pokemon"

import RandomPokemonData from "./randomPokemonData"
import './pokemon.css'
import { useState } from "react"
import RandomPokemonPic from "./randomPokemonPic"
function App() {
  let min = Math.ceil(1);
  let max = Math.floor(1025);
  let ID=[];  
  const [SR,setSR]=useState([1,2,3,4,5,6,7,8,9,10])
  
  function handleOnClick(){
    let n=SR.length;
    for(let i=0;i<n;i++)
    {
      
      ID[i]=(Math.floor(Math.random() * (max - min) + min))
      console.log(ID);
      
    }
    setSR(ID)
    
    console.log(SR[3]);
    
  }
  
  function handleShowMore(){
    let arr=[];
    let n=SR.length+1;
    for(let i=n;i<n+10;i++)
    {
      arr[i-n]=i

      
    }
  

    setSR([...SR,...arr])
  }
  



  return (
    <>
    <Heading></Heading>
    <Pokemon></Pokemon>
    <button onClick={handleOnClick}>Surprise Me</button>

    
    <div className="multiplePokemon">
    {SR.map((id, index) => (
    <div key={index} className="pokemonCard">
      <RandomPokemonPic pokemonID={id} />
      <RandomPokemonData pokemonID={id} />
    </div>
  ))}
</div>
    <button onClick={handleShowMore} className="load-more-btn">Show More</button>
    </>
  )
}

export default App
