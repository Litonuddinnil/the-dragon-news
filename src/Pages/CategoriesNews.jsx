import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleNewsPaper from '../Components/SingleNewsPaper';

const CategoriesNews = () => {
    const {data: news} = useLoaderData();
    // console.log(news);
    return (
        <div>
            <h1 className='text-xl font-semibold mb-3'>Dragon News Home</h1>
             <p className=' text-center font-semibold'> {news.length} News Find Us On This Category.</p>
             <div>
                {
                    news.map(singleNews =><SingleNewsPaper key={singleNews._id} singleNews={singleNews}></SingleNewsPaper>)
                }
             </div>
        </div>
    );
};

export default CategoriesNews;
