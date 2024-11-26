import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
 

const LeftMain = () => {
    const [categories,setCategory] = useState([]);
    useEffect(()=>{
        fetch("https://openapi.programming-hero.com/api/news/categories")
        .then(res =>res.json())
        .then(data =>setCategory(data.data.news_category))
    },[])
    // console.log(categories)
    return (
        <div>
            <h1 className='text-xl font-semibold mb-3'>All Category</h1>
            <div className='grid grid-cols-2 md:grid-cols-1 gap-2 '>
            {
                categories.map(category => 
                (<NavLink to={`/category/${category.category_id}`} className='btn border-none text-lg' key={category.category_id}>{category.category_name}</NavLink>)
                )
            }
            </div>
        </div>
    );
};

export default LeftMain;