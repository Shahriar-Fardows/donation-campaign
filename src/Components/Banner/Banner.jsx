/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useState } from 'react';
import './Banner.css';

const Banner = ({SearchValue}) => {
    const [data , setData] = useState('');


    const value =(data) =>{
        setData(data.target.value)
    }
    const search =() =>{
        SearchValue(data);
    }


    return (
        <div>
            <div className='mb-[2rem]'>
                <h1 className=' text-3xl lg:text-5xl text-center font-bold '>I Grow By Helping People In Need</h1>
            </div>
            <div className=' px-[1rem] max-w-4xl mx-auto'>
                <div>
                    <label  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input onChange={value}  type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border  rounded-lg bg-gray-50 focus:ring-slate-500 focus:border-slate-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500" placeholder="Search Category" required/>
                            <button onClick={search} type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;