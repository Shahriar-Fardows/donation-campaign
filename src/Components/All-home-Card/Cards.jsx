/* eslint-disable react/prop-types */
import { Card } from 'flowbite-react';
import { Link } from 'react-router-dom';

const Cards = ({ data }) => {
    const {id,picture,title,category,cardBg,textColor,categoryBg} = data;
    
    return (
        <Link to={`/donationinfo/${id}`} >
        
            <Card
                className="max-w-sm w-[100%]" style={{background: cardBg}}
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={picture}
            >
                <span style={{backgroundColor : categoryBg,color : textColor }}  className="font-normal text-gray-700 dark:text-gray-400 p-1 mr-[10rem] text-center rounded	" >
                   {category}
                </span>
                <h5 style={{color : textColor}} className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
                </h5>
                
            </Card>
        </Link>
    );
};

export default Cards;