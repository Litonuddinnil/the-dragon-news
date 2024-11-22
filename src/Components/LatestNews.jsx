import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='flex bg-base-200 p-3'>
             <p  className='text-white text-xl bg-[#D72050] px-4 py-1'>Latest</p>
             <Marquee pauseOnHover={true} speed={100} className='space-x-10'>
                <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, dolore!</Link>
                <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, dolore!</Link>
                <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, dolore!</Link>
             </Marquee>
        </div>
    );
};

export default LatestNews;