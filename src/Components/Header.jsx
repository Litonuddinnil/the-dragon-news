import React, { useEffect, useState } from 'react';
import logoHome from "../assets/assets/logo.png"

const Header = () => {
    const [updateDate,setUpdateDate] =  useState("");

    useEffect(()=>{
        const formattedDate = new Intl.DateTimeFormat("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        }).format(new Date());
        setUpdateDate(formattedDate);
    },[]);
    return (
        <div className='flex flex-col items-center justify-center my-4'>
            <img src={logoHome} alt="" />
            <h1 className='text-[#706F6F] text-lg underline my-6'>Journalism Without Fear or Favour</h1>
            <p>{updateDate}</p>
        </div>
    );
};

export default Header;