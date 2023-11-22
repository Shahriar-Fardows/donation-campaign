/* eslint-disable no-undef */
import {  useLoaderData, useParams } from "react-router-dom";
// import InfoCard from "./InfoCard";
import { Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  setId  } from "../Util/utility";

const DonationInfo = () => {
    const infos = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const addCard = infos.find(info => info.id === idInt);
    console.log(addCard)
    const notify = () => {
        setId(idInt)
        
        toast.success('🦄 Donetion Successful' ,{position: "top-center",autoClose: 5000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "dark",
    })};
    const { description, picture, title, price, textColor } = addCard;

    return (

        <div >
            <div className="flex justify-center m-5">
                <Breadcrumb aria-label="Default breadcrumb example" className="">
                    <Breadcrumb.Item href="/" icon={HiHome}>
                        Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item to={`/donationinfo/${id}`}>Donation-Info</Breadcrumb.Item>

                </Breadcrumb>
            </div>

            <section className="  lg:max-w-full lg:mx-auto">
                <div className=" px-5 lg:mx-[25rem]">

                    <img className=" sm:w-[100vw] h-auto lg:w-[100%] lg:h-[40rem]" src={picture} alt="image description" />

                    <div className=" mt-[-4rem] lg:mt-[-5rem] ">
                        <div className=" ml-10">
                            <button onClick={notify} type="button" style={{ backgroundColor: textColor }} className=" py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-300 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100  focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">{price}</button>
                            <ToastContainer position="top-center" hideProgressBar={false}  autoClose={5000} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark"
                            />

                        </div>
                    </div>
                    <div className="my-[5rem]">
                        <h1 className="text-3xl font-bold">{title}</h1><br />
                        <p className=" text-[#0B0B0BB2]">{description}</p>
                    </div>
                </div>

            </section>
        </div>

    );
};

export default DonationInfo;