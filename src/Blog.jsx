import React, { useState } from 'react'

function Blog() {
    const [posts, setPosts] = useState([])
    const [newpost, setNewpost] = useState({thought:'',url:'',date:null,tags:null,author:'',likes:0,comments:[]})
    function handleThought(a){
        setNewpost({...newpost,thought:a.target.value})
    }
    function handleUrl(a){
        setNewpost({...newpost,url:a.target.value})
    }  
    function handleAuthor(a){
        setNewpost({...newpost,author:a.target.value})
    }
    function addPost(){
        setPosts([...posts,newpost])
    }
  return (
    <div>
            <div className='border border-3 rounded border-warning p-2 m-2 d-flex align-items-center justify-content-center'>
         <div>
        <textarea style={{verticalAlign:'middle'}} rows='4' cols='44' placeholder='Post your blog here' onChange={handleThought}></textarea>&nbsp;<br></br>
        <input type="text" size="42" placeholder='Enter pictures url here' onChange={handleUrl}/>
        <input type="text" placeholder='Blog watermark' onChange={handleAuthor}/>
        </div>
        <button className='btn btn-outline-success' onClick={addPost}>Click to post</button>
          </div>
          <hr />
     <div>
     <ul>
        {
            posts.map((post)=>{
                return <li className='d-flex'>
                    <img src={post.url} alt="" className='w-25 border border-2 p-2 m-2'/>
                   <div>
                    <i>{post.author}</i>
                    <p>{post.thought}</p>
                   </div>
                </li>
            })
        }
     </ul>
     </div>    
</div>
  )
}

export default Blog