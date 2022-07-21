import React from 'react'
import {useState,useEffect} from 'react'
const Home = () => {
    // console.log("first")
    const[userdetails,setUserdetails]=useState([]);
    const[username,setUsername]=useState("react");
    const[page,setPage]=useState(10);
    const[per_page,setPer_page]=useState(70);
    const[sort,setOrder]=useState("asc")
    
    const handlesearch= async() => {
     let data= await fetch(`https://api.github.com/search/repositories?q=${username}&${page},${per_page},${sort},${order}`);
     data=await data.json();
     console.log(data);
     setUserdetails([{...data}]);
    }

    useEffect(() =>{
     
         console.log("fourth",userdetails.length)
    },[userdetails])

    // console.log("second")
  return (
    <div>
         {/* <label htmlFor={username}>Username</label> */}
        <input type="text" placeholder="Enter github username" value={username} onChange={(e)=>setUsername(e.target.value)} />
        <button onClick={handlesearch}>Search</button>
    </div>
  )
}

export default Home