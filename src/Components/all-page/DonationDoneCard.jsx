/* eslint-disable react/prop-types */

const DonationDoneCard = ({ data }) => {

    const { picture, price, title, category, categoryBg, textColor, cardBg } = data;
    return (


        <div style={{background: cardBg}}  className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full h-[100%] rounded-t-lg   md:w-48 md:rounded-none md:rounded-s-lg" src={picture} alt="" />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <span style={{ backgroundColor: categoryBg, color: textColor }} className="font-normal text-gray-700 dark:text-gray-400 p-1 mr-[10rem] text-center rounded	" >
                    {category}
                </span>
                <h5  className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
                </h5>
                <h5 style={{color : textColor}} className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                    {price}
                </h5>

                <button style={{backgroundColor : textColor}} className="text-white p-2 w-[6.25rem]" >View ditels</button>
            </div>
        </div>


    );
};

export default DonationDoneCard;