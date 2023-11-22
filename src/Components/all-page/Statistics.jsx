import { Chart } from "react-google-charts";
import { getId } from "../Util/utility";
import { useLoaderData } from "react-router-dom";


const Statistics = () => {
    const donationId = getId();
    const datas = useLoaderData();
    
    const data = [
        ["Task", "Hours per Day"],
        ["Total Donation", datas.length],
       
        ["Your Donation",donationId.length],
        
    ];

    const options = {
        title: "Donation Activities",
    };

    return (
        <div className="max-w-6xl m-auto my-[5rem]">
            <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"400px"}
            />
            
        </div>
    );
};

export default Statistics;