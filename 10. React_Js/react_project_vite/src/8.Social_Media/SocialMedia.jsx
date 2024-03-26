import React, { useState } from "react";
import Header from "./Componant/Header";
import Footer from "./Componant/Footer";
import SideBar from "./Componant/SideBar";
import HomePost from "./Componant/HomePost";
import CreatePost from "./Componant/CreatePost";
import ContainerPostListStoreProvider from "./Store/PostListStoreProvider";


export default function SocialMedia() {
  let [selectedBar, setSelectedBar] = useState("Home");
  return (
    <ContainerPostListStoreProvider> 

    <div className="d-flex w-100">
      <SideBar selectedBar={selectedBar} setSelectedBar={setSelectedBar} />
      <div className="w-100">
        <Header />
        
        {selectedBar=== "Home" ? <HomePost /> : <CreatePost/>  }
       

        <Footer />
      </div>
    </div>
    </ContainerPostListStoreProvider>
  );
}


// <containerPostListProvider>  is container who wraped children, as a children ban ke jayenge  ye all componant aur value use kr payenge
