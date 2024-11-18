import "./App.css";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";
import { useContext, useEffect } from "react";
import AppContextProvider, { AppContext } from "./context/AppContext";
import { ToastContainer } from "react-toastify";

export default function App() {
  const{fetchBlogPosts,posts}=useContext(AppContext);
  useEffect(()=>{
    fetchBlogPosts();
  },[]);
  
  return (

    

    <div className=" w-screen min-h-screen flex flex-col items-center">
      
      <Header/>
      <Blogs/>
      {posts.length!==0&&

      <Pagination/>
      }
    </div> 
  );
}
