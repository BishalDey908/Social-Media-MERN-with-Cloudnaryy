import { IoHomeSharp } from "react-icons/io5";
import { MdAddCircleOutline } from "react-icons/md";
import { FaSearch,FaBookmark,FaFacebookMessenger } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../pic/logoipsum-321.svg"
import girl1 from "../pic/1990s beautiful blonde Supergirl.jpg"
import { useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode"
import { useCookies } from 'react-cookie';
import axios from "axios";
import { FiLogIn } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import love from "../pic/Love_Heart_symbol.svg"





const Sidebar = () => {

    const[username,setUsername]=useState("");
    const[useremail,setUseremail]=useState("");
    const[userProfilePic,setUserProfilePic]=useState("");
    const [cookies, setCookie,removeCookie] = useCookies(['token']);
    const[savepostLength,setSavepostLength] = useState("")
    const[localstorageusername,setlocalStorageusername]  = useState('')
    const[animate,setAnimate]=useState(false)
    
    // console.log(cookies)

    const animation = () =>{
        setAnimate(!animate)
    }
    

    const navigate = useNavigate()
    const handleNavigate = () =>{
        navigate("/reg")
    }

    const handleNavigate2 = () =>{
        navigate("/login")
    }

    function clearData(){
        localStorage.clear();
    }

    const handleLogout = () =>{
        const isLoggedIn = false
        axios.post("https://social-media-mern-with-cloudnaryy-backend.onrender.com/api/logout",{username,isLoggedIn})
        .then(()=>{
            console.log("succes to change isLoggedIn");    
        })
        .catch(()=>{
            console.log("error in change in isLoggedIn");
        })
        removeCookie("token")
        console.log("all ok")
        navigate("/login")
        clearData()
        console.log("localstorage cleared")
    }
    
    useEffect(()=>{
        if(cookies.token){
        setUsername(jwtDecode(cookies.token).username)
        setUseremail(jwtDecode(cookies.token).email)
        // setUserProfilePic(jwtDecode(cookies.token).profilepic)
        axios.post("https://social-media-mern-with-cloudnaryy-backend.onrender.com/api/userPic",{username})
        .then((e)=>{
      console.log("this is for profilepic",e.data)
      setUserProfilePic(e.data.profilePic)
    })
        }else{
            console.log(username)
            setUsername(false)
            setUseremail(false)
            setUserProfilePic(false)
        }
    },[cookies,username])

    // console.log(username,useremail)

    const indicateClick = (data) =>{
        console.log(data.target)
    }
    
  return (
    <>

{/* <!-- component --> */}
{/* <!DOCTYPE html> */}
    <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Loopple/loopple-public-assets@main/riva-dashboard-tailwind/riva-dashboard.css" />
    </head>
    <body className="bg-blue 600 ">    
        <div id="sidebar" className="xl:block md:block  container flex  mx-auto bg-blue 600 ">
            <aside className="flex flex-col w-[65px]  lg:h-[555px] bg-cyan-700 md:my-28 lg:my-28 xl:my-36 ml-10 rounded-xl  fixed  inset-y-0 left-0  shadow-2xl shadow-gray-600 " id="sidenav-main"><div className="flex shrink-0 px-8 items-center justify-between pt-[1px] ">
            {/* <a className="transition-colors duration-200 ease-in-out" href="https://www.loopple.com">
            <img alt="Logo" src={logo} className="inline animate-wiggle animate-infinite animate-ease-out"/>
            </a> */}
        </div>
        
        
        <div className="  lg:block dark:border-neutral-700/70 border-neutral-200"></div>

        

        <div className="hidden  lg:block dark:border-neutral-700/70 border-neutral-200"></div>

        <div className=" relative  p-2 mt-12  ">
            <div className="flex flex-col w-full font-medium ">

            {/* <!-- menu item --> */}
            <NavLink to="/home" className="text-white hover:bg-slate-400  rounded-xl  mb-2" >
                <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem] gap-3 h-14">
                <IoHomeSharp className="text-4xl mx-auto" id="logo"/>
                {/* <NavLink to="/search" className="active:text-blue-600 text-2xl   ">Search</NavLink> */}
                {/* <h1 className="text-2xl invisible hover:block  ">Home</h1> */}
                </span>
            </NavLink>


            {/* <!-- menu item --> */}
            <NavLink to="/private" className= " text-white hover:bg-slate-400 rounded-xl mb-2" onClick={animation}>
                <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem] gap-3 h-14">
                <MdAddCircleOutline className="text-6xl mx-auto" id="logo"/>
                {/* <NavLink to="/search" className="active:text-blue-600 text-2xl   ">Search</NavLink> */}
                {/* <h1 className="text-2xl hover:text-orange-500 transition ease-in-out">Create Post</h1> */}
                </span>
            </NavLink>

            <NavLink to="/search" className="hover:bg-slate-400 rounded-xl  text-white mb-2">
                <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem] gap-3 ">
                <FaSearch className="text-2xl  mx-auto" id="logo"/>
                {/* <NavLink to="/search" className="active:text-blue-600 text-2xl   ">Search</NavLink> */}
                {/* <h1 className="text-2xl  hover:text-orange-500 transition ease-in-out">Search</h1> */}
                </span>
            </NavLink>


            {/* <!-- menu item --> */}
           

            

            <NavLink to="/private2" className="text-white hover:bg-slate-400 rounded-xl  mb-2">
                <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem] gap-3">
                <CgProfile className="text-4xl mx-auto" id="logo"/>
                {/* <NavLink to="/search" className="active:text-blue-600 text-2xl   ">Search</NavLink> */}
                {/* <h1 className="text-2xl  hover:text-orange-500 transition ease-in-out">Profile</h1> */}
                </span>
            </NavLink>

            <NavLink to="/private3" className="pt-4 p-1 text-white hover:bg-slate-400 rounded-xl  mb-2">
                <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem] gap-3 h-10 ">
                <FaBookmark className="text-3xl  mx-auto mb-2" id="logo"/>
                {/* <NavLink to="/search" className="active:text-blue-600 text-2xl   ">Search</NavLink> */}
                {/* <h1 className="text-2xl  hover:text-orange-500 transition ease-in-out">Save Posts</h1> */}
                </span>
            </NavLink>

            <NavLink to="/private4" className="pt-4 text-white hover:bg-slate-400 rounded-xl  mb-16">
                <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem] gap-3 h-10">
                <FaFacebookMessenger className="text-3xl mx-auto mb-4" id="logo"/>
                {/* <NavLink to="/search" className="active:text-blue-600 text-2xl   ">Search</NavLink> */}
                {/* <h1 className="text-2xl  hover:text-orange-500 transition ease-in-out">Messenger</h1> */}
                </span>
            </NavLink>
           
           
            {
                !username ? <div className="  ">
                {/* <button onClick={handleNavigate} className="before:ease relative h-12 w-32 overflow-hidden border border-teal-300 text-sky-900 shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-sky-900 before:duration-300 hover:text-white hover:shadow-blue-500 hover:before:h-64 hover:before:-translate-y-32">
                <span className="relative z-10 font-bold " >Sign In</span>
                 </button> */}
                 
                 <div className="select-none flex  place-content-center py-[.775rem] cursor-pointer my-[.4rem] gap-3 hover:bg-slate-400 rounded-xl h-16 pr-3 pt-4" onClick={handleNavigate2}>
             <FiLogIn className="text-3xl text-white ml-2"/>
                {/* <span className="relative z-10  text-2xl" >Log In</span> */}
             </div>
            </div> :
             <div className="select-none flex  place-content-center py-[.775rem] cursor-pointer my-[.4rem] gap-3 hover:bg-slate-400 rounded-xl h-16 pr-3 pt-4" onClick={handleLogout}>
             <FiLogOut className="text-3xl text-white ml-2"/>
                {/* <span className="relative z-10  text-2xl" >Log Out</span> */}
             </div>
            }


            
            </div>
            </div>

            {/* <div className=" flex gap-7 mx-10 my-4 fixed bottom-0">
            <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg  px-5 py-2.5 text-center me-2 mb-2 text-2xl" onClick={handleNavigate}>Sign In</button>
            <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg  px-5 py-2.5 text-center me-2 mb-2 text-2xl" onClick={handleNavigate2}>Log In</button>
            </div> */}

            
            

            

            

        </aside>
        </div>



        {/* ========================================== bottom bar */}

        



        <div className="xl:hidden md:hidden fixed bottom-0 z-50 w-full -translate-x-1/2 bg-white border-t border-gray-200 left-1/2 dark:bg-gray-700 dark:border-gray-600">
    
    <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
        <NavLink to="/home" data-tooltip-target="tooltip-home" type="button" className="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group">
            <svg className="w-5 h-5 mb-1 text-gray-500  group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
            </svg>
            <span className="sr-only">Home</span>
        </NavLink>
        <div id="tooltip-home" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Home
            <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <NavLink to="/private3" data-tooltip-target="tooltip-bookmark" type="button" className="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group">
            <svg className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 20">
                <path d="M13 20a1 1 0 0 1-.64-.231L7 15.3l-5.36 4.469A1 1 0 0 1 0 19V2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v17a1 1 0 0 1-1 1Z"/>
            </svg>
            <span className="sr-only">Bookmark</span>
        </NavLink>
        <div id="tooltip-bookmark" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Bookmark
            <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <NavLink to="/private" data-tooltip-target="tooltip-post" type="button" className="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group">
            <svg className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
            </svg>
            <span className="sr-only">New post</span>
        </NavLink>
        <div id="tooltip-post" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            New post
            <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <NavLink to="/search" data-tooltip-target="tooltip-search" type="button" className="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group">
            <svg className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
            <span className="sr-only">Search</span>
        </NavLink>
        <div id="tooltip-search" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Search
            <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <NavLink to="/private2" data-tooltip-target="tooltip-settings" type="button" className="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group">
        <svg className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
            </svg>
            <span className="sr-only">Settings</span>
        </NavLink>
        <div id="tooltip-settings" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Settings
            <div className="tooltip-arrow" data-popper-arrow></div>
        </div>

        
    </div>
</div>


        
    </body>

    </>
  )
}

export default Sidebar
