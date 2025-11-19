"use client";

import {useState} from "react";


export default function Page(){
  const[url,setUrl]=useState("");
  const[mess,setMess]=useState("");
  const[alias,setAlias]=useState("");



  async function Form(){
    const re=await fetch("/api/create",{
      method:"POST",
      body:JSON.stringify({url,alias}),
     
    });
     const d=await re.json();
     if(!d.error){
      setMess("Short link:http://newlink/ "+alias)
    }else{
     setMess(d.error)

  }
  }

  

  

  return(
    <div>
      <h1>Url Shortener</h1>

      <input
      placeholder="url"
      value={url}
      onChange={(e)=>setUrl(e.target.value)}
      />

    <input
      placeholder="alias"
      value={alias}
      onChange={(e)=>setAlias(e.target.value)}
    />

    <button onClick={Form}>Show</button>
    <p>{mess}</p>
    </div>

  );

}


