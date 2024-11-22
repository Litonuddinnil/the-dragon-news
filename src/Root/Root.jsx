import React from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";

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
        <aside className="left col-span-3">Left section</aside>
        <section className="center col-span-6">Main section</section>
        <aside className="right col-span-3">
            Right section
        </aside>
        </main>
        <footer></footer>
    </div>
  );
};

export default Root;
