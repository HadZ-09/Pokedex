import { useState,useEffect } from "react";
import './pokemon.css'

function RandomPokemonPic({pokemonID}){
  const [imgURL,setImgURL]=useState("")
  
  
    let url=(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
  useEffect(()=>{
    
    let data= async ()=>{
      let newData= await fetch(url)
      
      newData.json().then(
      (pokemon)=>{
        
        
        setImgURL(pokemon.sprites.other["official-artwork"].front_default)
        
        
        
        
      }
      );
      
    }
    data()  
  },[url])

  return(
    <>
   
    
    <img src={imgURL} alt={name} className="randomPokemonImg"></img>
   
    </>
  )
}
export default RandomPokemonPic
