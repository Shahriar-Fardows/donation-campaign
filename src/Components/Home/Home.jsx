import { useState } from 'react';
import CardData from '../All-home-Card/CardData';
import Banner from '../Banner/Banner';
import './Home.css'
const Home = () => {
    const [searchData , setSearchData ] = useState('');
    console.log(searchData)
    const SearchValue = (value)=>{
        setSearchData(value);
    }
    return (
       <div>
         <section>
            <header className='header h-[20rem] lg:h-[30rem]'></header>
            <div className=' mt-[-15rem] lg:mt-[-20rem]'>
                <Banner 
               SearchValue={SearchValue}
                ></Banner>
            </div>

        </section>
        <section className=' mx-4   mt-[15rem] mb-24'>
            <CardData
            searchData={searchData}
            />
        </section>
       </div>
    );
};

export default Home;