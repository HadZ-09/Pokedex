import { useState,useEffect } from "react";
import './pokemon.css'

function Pokemon(){

  const [name,setName]=useState([])
  const [weight,setWeight]=useState([])
  const [id,setId]=useState([])
  const [type,setType]=useState([])
  const [url,setUrl]=useState("")
  const [imgURL,setImgURL]=useState("")
  const [backImgURL,setBackImgURL]=useState("")
  
  

  function handleOnClick(){
    let pokemonName=document.querySelector(".input").value
    
    setUrl(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
    document.querySelector(".input").value=""

  }

  useEffect(()=>{
    let data= async ()=>{
      let newData= await fetch(url)
      
      newData.json().then(
      (pokemon)=>{
        setName(pokemon.name)
        console.log(pokemon);
        setWeight(`${pokemon.weight/10} kg`);
        setId(pokemon.id);
        
        setImgURL(pokemon.sprites.other["official-artwork"].front_default)
        setBackImgURL(pokemon.sprites.other["official-artwork"].front_female)
        setType(pokemon.types[0].type["name"]);
        
        
        
      }
      );
      
    }
    data()  
  },[url])

  return(
    <>
    <div>
    <input type="text" className="input"></input>
    <button onClick={handleOnClick}> Search</button>
    </div>
    
    <img src={imgURL} alt={name}></img>
    <img src={backImgURL} alt={name}></img>
    
    
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
export default Pokemon
