import axios from "axios"

import { useEffect, useState } from "react"
import Sidebar from "../Components/Sidebar"
import { toast } from "react-toastify"


const Comment = () => {
    
    const[comment, setComment] = useState("")
    // const[postId, setpostId] = useState("")
    const[commentData, setCommentData] = useState([])
    const[commentCount, setCommentCount] = useState("")

    const handleSubmit =()=>{
        let username = localStorage.getItem("username")
        let postId = localStorage.getItem("postId")
        const date = new Date()
        const modDate = date.toLocaleString()
        const messageInput = document.getElementById("message-input");
        console.log("comment post ==> ",comment, username, postId)

        axios.post("https://social-media-mern-with-cloudnaryy-backend.onrender.com/api/addcomment",{username,postId,comment,modDate})
    .then((e)=>{
      console.log("post  added successfully");
      toast.success(e.data)
    })
    .catch(()=>{
      console.log("Error in adding the Postcomment")
    })
    messageInput.value = "";
    }

    useEffect(()=>{
        let postId = localStorage.getItem('postId')
        axios.post("https://social-media-mern-with-cloudnaryy-backend.onrender.com/api/getcomment",{postId})
        .then((e)=>{
            // console.log(e.data)
            setCommentData(e.data)
            setCommentCount(e.data.length)
        })
        .catch((err)=>{
            console.log("error for fetching comments",err)
        })
    },[])
    

    

  return (
    <>
    {/* <Sidebar/> */}
    <div>
    <section className="bg-white  py-8 lg:py-16 antialiased h-screen ">
  <div className="max-w-2xl mx-auto px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg lg:text-2xl font-bold  text-blue-800 font-head">Comments({commentCount})</h2>
    </div>
    <form className="mb-6">
        <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <label for="comment" className="sr-only">Your comment</label>
            <textarea id="comment" rows="6"
            onChange={(e)=>setComment(e.target.value)}
                className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800 font-body"
                placeholder="Write a comment..." required></textarea>
        </div>
        <button type="submit"
            onClick={handleSubmit}
            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center bg-blue-800 text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 font-body">
            Post comment
        </button>
    </form>


    
    
    {
        commentData.map((item,index)=>(
            <article key={index} className="p-6 text-base bg-blue-800 rounded-lg  mb-4">
        <footer className="flex justify-between items-center mb-2">
            <div className="flex items-center">
                <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold font-body">{item.username}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-body"><time pubdate datetime="2022-02-08"
                        title="February 8th, 2022 ">{item.date}</time></p>
            </div>
            
            {/* <!-- Dropdown menu --> */}
            
        </footer>
        <p className="text-gray-500 dark:text-gray-400 font-body">{item.comment}</p>
        
    </article>
        ))
    }
    
  </div>
</section>
</div>
</>
  )
}

export default Comment
