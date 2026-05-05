import { useState,useEffect } from "react";
import './pokemon.css'

function RandomPokemonData({pokemonID}){

  const [name,setName]=useState([])
  const [weight,setWeight]=useState([])
  const [id,setId]=useState([])
  const [type,setType]=useState([])
//   const [url,setUrl]=useState("")
  
  
  

//   function handleOnClick(){
//     let pokemonName=document.querySelector(".input").value
    
    
//     document.querySelector(".input").value=""

//   }
  
    let url=(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
  useEffect(()=>{
    
    let data= async ()=>{
      let newData= await fetch(url)
      
      newData.json().then(
      (pokemon)=>{
        setName(pokemon.name)
        setType(pokemon.types[0].type["name"])
        setWeight(`${pokemon.weight/10} kg`);
        setId(pokemon.id);
        
        
        
        
      }
      );
      
    }
    data()  
  },[url])

  return(
    <>
    <div>
    {name} <br></br>
    {weight}
    <br></br>
    {id}
    <br></br>
    {type}
    </div>
    </>
  )
}
export default RandomPokemonData
