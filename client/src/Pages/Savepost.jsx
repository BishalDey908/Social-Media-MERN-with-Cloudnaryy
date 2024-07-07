import axios from "axios"
import { useEffect, useState } from "react"
import { MdVerified } from "react-icons/md";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import Loader from "../Components/Loader";
const Savepost = () => {
    const [username,setUsername] = useState("")
    const [postData,setPostData] = useState(null)
    useEffect(()=>{
        setUsername(localStorage.getItem('username'))
    },[username])

    useEffect(()=>{
        let username = localStorage.getItem( 'username' )
        axios.post("https://social-media-mern-with-cloudnaryy-backend.onrender.com/api/showsaved",{username})
        .then((data)=>{
            console.log("sdfsfsdf")
            console.log(data)
            setPostData(data.data)
        })
        .catch((err)=>{
            console.log(err)
        })

    },[setUsername])


    

  return (
    <>
    <Navbar />
    <Sidebar/>
     <div className="pb-10 py-20   xl:px-52 md:px-[30%]  px-[10%]  mt-[55px] ">
    
   
    {/* <div className="flex gap-10 flex-col   my-10 2xl:mx-32 xl:mx-32 md:mx-32 mx-4">
    <div role="status" className="fixed 2xl:my-0 xl:my-0 md:my-0 my-40  2xl:w-[500px] xl:w-[400px] md:w-[400px]  w-[380px] 2xl:ml-[300px] lg:ml-[300px] md:ml-[200px]  h-[350px] p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
<div className="flex items-center my-2">
       <svg className="w-10 h-10 me-3 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
        </svg>
        <div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
            <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
    </div>
    <div className="flex items-center justify-center 2xl:h-56 xl:h-14 h-72 md:h-72 mb-4 bg-gray-300 rounded dark:bg-gray-700 ">
        <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
        </svg>
    </div>
    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
    
    <span className="sr-only">Loading...</span>
</div>
</div> */}
      {
        postData ? postData.reverse().map((elem,key)=>(
          // eslint-disable-next-line react/jsx-key
          <>
          
          <div key={key} className="bg-white h-auto   2xl:w-[450px] lg:w-[400px] md:w-[400px] w-[80vw] py-4 my-6  rounded-xl shadow-md border-2 shadow-black ">
          <div className="flex justify-between">
    <div className="flex items-center px-4 py-3">
      <img className="h-16 w-16 rounded-full" src={elem.userPic}/>
      <div className="ml-3 ">
      <div className='flex gap-1'>
        <span className=" font-semibold antialiased block leading-tight text-xl text-gray-600 font-head" >{elem.userName} </span>
        <span className="text-xl font-semibold antialiased block leading-tight text-blue-600"><MdVerified/> </span>
      </div>
        <span className="text-gray-600 text-xs block mt-1">{elem.date}</span>
      </div>
    </div>
    <div className="my-auto mr-4">
      <button>remove</button>
    </div>
    </div>
    <div className='flex  h-auto'>
    <div className="flex flex-col ">
    <div className="mx-2">
    <img className=" w-full" src={elem.postImg}/>
    </div>
    <span className="text-sm font-semibold antialiased block leading-tight my-2 mx-2 text-xl text-gray-600 font-body" >{elem.postName}</span>
    </div>
    </div>
    {/* <div className="flex items-center justify-between mx-4 mt-3 mb-2">
      <div  className={`flex gap-5 cursor-pointer ${username? "block":"hidden"}`}>
        <svg fill="#666666"  height="24" viewBox="0 0 48 48" width="24" onClick={()=>handleLike(elem)}><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>

         

        <svg fill="#666666" height="24" viewBox="0 0 48 48" width="24" onClick={()=>handleComment(elem)}><path clip-rule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fill-rule="evenodd" ></path></svg>
        <svg fill="#666666" height="24" viewBox="0 0 48 48" width="24"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z" ></path></svg>
      </div>
      <div className={`flex gap-5 cursor-pointer ${username? "block":"hidden"}`} onClick={()=>handleSave(elem)}>
        <svg fill="#666666" height="24" viewBox="0 0 48 48" width="24"><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z" ></path></svg>
      </div>
    </div>
    <div className={`font-semibold text-sm mx-4 mt-2 mb-4 text-gray-600 ${username? "block":"hidden"}`}>{elem.likes} likes</div> */}
  </div>

  
          </>
        ))  : <div className="flex gap-10 flex-col   my-10 2xl:mx-32 xl:mx-32 md:mx-32 px-[-15px]">
    <div role="status" className="fixed 2xl:my-0 xl:my-0 md:my-0 my-40  2xl:w-[500px] xl:w-[400px] md:w-[400px]  w-[80vw] 2xl:ml-[300px] lg:ml-[300px] md:ml-[200px]  h-[350px] p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
<div className="flex items-center my-2">
       <svg className="w-10 h-10 me-3 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
        </svg>
        <div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
            <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
    </div>
    <div className="flex items-center justify-center 2xl:h-56 xl:h-14 h-72 md:h-72 mb-4 bg-gray-300 rounded dark:bg-gray-700 ">
        <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
        </svg>
    </div>
    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
    
    <span className="sr-only">Loading...</span>
</div>
</div>
      }
      </div>
      
    
    </>
    
   
  )
}

export default Savepost
