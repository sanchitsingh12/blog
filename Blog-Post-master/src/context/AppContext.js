import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
import {  toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export const AppContext=createContext();
export default function AppContextProvider({children}){
    const [loading,setLoading]=useState(false);
    const[posts,setPosts]=useState([]);
    const[page,setPage]=useState(1);
    const [totalPages,setTotalPages]=useState(null);

    async function fetchBlogPosts(page=1){
        setLoading(true);
        let url= `${baseUrl}${page}`;
        console.log(url);
         try{
            const response = await fetch(url);
            const data=await response.json();
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
         }catch(err){
            
            setPage(1);
            setPosts([]);
            toast.error("Problem in network");
            setTotalPages(null);
         }
         setLoading(false);
    }
    function pageChangeHandler(page){
        setPage(page);
        fetchBlogPosts(page);
    }
    
    const value={
        loading,setLoading,
        posts,setPosts,
        page,setPage,
        posts,setPosts,
        totalPages,setTotalPages,
        fetchBlogPosts,pageChangeHandler
    };
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}