import React from 'react'
import img from "../assets/FREINDbook logo(dark).png"
import { NavLink, useNavigate } from "react-router-dom";
import video1 from "../assets/Online world.gif"
import { NativeBuffer } from 'mongoose';

const Firstpage = () => {
    const Navigate = useNavigate()

    function handleClick(){
        Navigate('/home')
    }

  return (
    <div className=' h-screen 2xl:mt-[-30px] xl:mt-16 lg:mt-[-30px] md:mt-[-50px] mt-[5%]'>
      <div className='flex place-content-center '>
        <div>
            <div className='flex-col place-content-center '>
              <img  src={video1}   alt="" srcset="" className='mx-auto 2xl:w-[450px] lg:w-96 md:w-[450px] w-[100vw]'/>
                <h4 className='text-4xl  text-cyan-700 font-bold text-center font-head'>Welcome to</h4>
                <div>
                <img className='h-70 ' src={img} alt="" />
               </div>
            </div>
            
        </div>
      </div>


       <div className='flex place-content-center '>
            <div className='flex  flex-col 2xl:gap-1 xl:gap-2 md:gap-2 gap-6 '>
                <div>
                    <h4 className=' text-cyan-700 text-center mx-6 2xl:text-3xl lg:text-2xl md:text-2xl text-xl font-bold font-body'>Make freinds online and express yourself</h4>
                </div>
                <div className='md:mt-6'>
                <div>
                    <h4 className=' text-cyan-700 text-center mx-6 2xl:text-3xl lg:text-3xl md:text-2xl text-lg font-body'>Have an Account? <NavLink to="/login" className="font-bold">Login</NavLink>  </h4>
                </div>
                <div>
                    <h4 className=' text-cyan-700 text-center mx-6 2xl:text-3xl lg:text-3xl md:text-2xl text-lg font-body'> Don't have an account? <NavLink to="/reg" className="font-bold">Signin</NavLink></h4>
                </div>
                </div>
                
                {/* <div  className='flex place-content-center mt-[-50px] mb-4'>
                    <button className='2xl:w-80 w-56  h-14 bg-sky-200 rounded-3xl text-3xl text-teal-500 font-semibold' onClick={handleClick}>Continue</button>
                </div> */}
            </div>
        </div>       
    </div>
  )
}

export default Firstpage
