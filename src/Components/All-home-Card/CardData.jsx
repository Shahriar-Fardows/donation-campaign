/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";

const CardData = ({searchData}) => {
    const [sendCardData, setSendCardData] = useState([]);
  
    const [allCard, setAllCard] = useState(8);

   
    useEffect(() => {
        fetch('api.json')
            .then(res => res.json())
            .then(data =>{ 
                // setSendCardData(data)
                const searchValue = data.filter(data=> data.category.toLowerCase() === searchData.toLowerCase() );
                const  totalData= searchValue.length > 0 ? searchValue : data;
                setSendCardData(totalData)
                
            })
            
    }, [searchData])

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 max-w-7xl mx-auto">
                {
                   sendCardData?.slice(0, allCard).map(data => <Cards
                        key={data.id}
                        data={data}
                    ></Cards>)
                }
            </div>
            <div className={allCard > sendCardData.length && 'hidden'}>
                <div className="text-center my-5 ">

                    <Link onClick={() => setAllCard(sendCardData.length)} className="btn bg-gray-700 text-white">Show More!!!</Link>

                </div>
            </div>
        </div>
    );
};

export default CardData;