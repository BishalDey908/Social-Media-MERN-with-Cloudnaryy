import { useEffect, useState } from "react"
import ProfileCard from "../Components/ProfileCard"
import axios from "axios"
import Sidebar from "../Components/Sidebar"
import Navbar from "../Components/Navbar"
import { RiH1 } from "react-icons/ri"
import { FaMagnifyingGlass } from "react-icons/fa6"
import Loader2 from "../Components/Loader2"

const Search = () => {
  
  // const [searchQuerry,setSearchQuerry] = useState("")
  const [userData,setUserData] = useState([])

  const handleButton = (e) =>{
    const searchQuerry = e.target.value
    axios.post("https://social-media-mern-with-cloudnaryy-backend.onrender.com/api/search",{searchQuerry})
    .then((e)=>{
      // console.log(e.data)
      setUserData(e.data)
      if(e.data === "No such user exists!"){
        alert(e.data);
      }
    })
    .catch((err)=>{
      console.log("error in search",err)
    })
    // console.log(searchQuerry)
  }


  
   
    

  

  

  return (
    <>
    <Navbar />
    <Sidebar />
    <div id="search" className="2xl:h-[100vh] h-[100vh] md:h-[100vh]   2xl:px-48 2xl:mt-32 xl:px-56 xl:mt-32 lg:px-56 lg:mt-28 md:px-60">
      
      
      

    <div className="flex  rounded-xl mt-4 shadow-md  xl:mx-32 lg:ml-24  ">
    <div className="bg-white ">
    <FaMagnifyingGlass className='2xl:block xl:block lg:block md:block hidden ml-6 mt-4 text-2xl text-cyan-700'/>
    </div>
    <input className="w-full 2xl:block xl:block lg:block md:block hidden rounded p-2 h-14 pl-4 focus:outline-0 bg-white font-head" type="text" placeholder="find your friends" name="searchQuerry" onChange={handleButton}/>

    
    </div>

    <div className="bg-white flex w-[85vw] md:w-[350px]  ml-10 border border-black 2xl:hidden xl:hidden lg:hidden md:hidden block mt-24">
    <FaMagnifyingGlass className='2xl:hidden xl:hidden lg:hidden md:hidden block ml-6 mt-4 text-2xl text-cyan-700 bg-white'/>
    <input className="2xl:hidden xl:hidden lg:hidden md:hidden block w-full  rounded p-2 h-14 pl-4 focus:outline-0 bg-white" type="text" placeholder="find your friends" name="searchQuerry" onChange={handleButton}/>
    </div>


    <div className="flex flex-wrap place-content-center gap-4 mt-6  lg:ml-16 xl:mr-10 ">
      {
        
        userData.map((data)=>(

         // eslint-disable-next-line react/jsx-key
         <ProfileCard userdata={data} />
        )) 
      }
    </div>
    </div>
    </>
    
    
  )
}

export default Search
