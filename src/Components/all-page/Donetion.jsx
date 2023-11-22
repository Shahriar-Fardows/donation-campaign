/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getId } from "../Util/utility";
import DonationDoneCard from "./DonationDoneCard";

const Donetion = () => {
    const ApiData = useLoaderData();
    const [datas, setDatas] = useState([]);
    const [showAll, setShowAll] = useState(4)
    console.log(showAll)
    useEffect(() => {
        const oldIds = getId();
        if (ApiData.length > 0) {
            const allReadyDone = []
            for (const id of oldIds) {
                const allData = ApiData.find(api => api.id == id)
                console.log(allData)
                if (allData) {
                    allReadyDone.push(allData)
                }
            }
            setDatas(allReadyDone);
            
        }


    }, [])
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 max-w-6xl mx-4 lg:mx-auto my-5 gap-5 ">
                {
                    datas.slice(0,showAll).map(data => <DonationDoneCard
                        key={data.id}
                        data={data}
                    ></DonationDoneCard>)
                }
            </div>
           <div>
           <div className={showAll > datas.length && 'hidden'}>
                <div className="text-center my-5">
                    <Link onClick={()=> setShowAll(datas.length)} className="btn bg-gray-700 text-white">Show more!!</Link>
                </div>
            </div>
           </div>
        </div>

    );
};

export default Donetion;