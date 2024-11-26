import React from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import LeftMain from "../Components/MainSectionOfRoot/LeftMain";
 
import RightMain from "../Components/MainSectionOfRoot/RightMain";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="font-poppins">
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <LatestNews></LatestNews>
        </section>
      </header>
      <nav className="w-11/12 mx-auto py-2">
        <Navbar></Navbar>
      </nav>
      <main className="w-11/12 mx-auto pt-5 grid gap-2 md:grid-cols-12">
        <aside className="left col-span-3">
          <LeftMain></LeftMain>
        </aside>
        <section className="center col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="right col-span-3">
          <RightMain></RightMain>
        </aside>
      </main>
      <footer></footer>
    </div>
  );
};

export default Root;
