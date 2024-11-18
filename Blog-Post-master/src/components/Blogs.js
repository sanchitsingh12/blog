import React, { useContext } from 'react'
import Spinner from './Spinner'
import { AppContext } from '../context/AppContext'


const Blogs = () => {
    const {posts,loading}=useContext(AppContext);
    console.log(posts);
  return (
    <div className=' w-11/12 max-w-2xl   my-[100px] flex flex-col gap-y-7 items-center justify-center'>
        {
            loading?(<Spinner/>):(
                posts.length===0?(
                    <div className=' text-3xl font-bold text-center'>No Post Found</div>
                ):
                (posts.map(  (post)=>(
                    <div key={post.author}>
                        
                        <p className=' font-bold text-lg'>{post.title}</p>
                        <p className=' text-sm'>By <span className='italic'>{post.author}</span> on <span className=' underline font-bold cursor-pointer'>{post.category}</span></p>
                        <p className='text-[14px]'>Posted on {post.date}</p>
                        <p className='text-sm mt-2 mb-2 '>{post.content}</p>
                        <div className='flex gap-x-2 flex-wrap items-center'>
                            {post.tags.map((tag,index)=>{
                                return  <span key={index} className='text-xs font-semibold underline text-blue-700 cursor-pointer'>#{tag}</span>
                            })}
                        </div>
                    </div>
                )))
                
            )
        }
    </div>
  )
}

export default Blogs
