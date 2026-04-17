import React, { useContext } from 'react';
import callImg from '../../../assets/call.png'
import textImg from '../../../assets/text.png'
import videoImg from '../../../assets/video.png'
import { RiDeleteBinLine } from "react-icons/ri";
import { FriendsContext } from '../../../context/FriendsContext';
import { toast } from 'react-toastify';


const TimelineCard = ({ data }) => {
    const { id, type, name, picture, date } = data;

    const { deleteFromTimeline } = useContext(FriendsContext);

    const handleDelete = () => {
        toast.error(`${name} Deleted Successfully`);
        deleteFromTimeline(id);
    }
    return (
        <div className='Timeline-card bg-white rounded-lg shadow p-4 flex justify-between items-center gap-4 hover:shadow-md duration-100 ease-in-out transition-all'>
            <div className='flex items-center gap-4'>
                <div>
                    <img src={type === 'call' ? callImg : type === 'text' ? textImg : videoImg} alt="" />
                </div>
                <div className='text-(--para-color)'>
                    <div className='flex items-center gap-2'>
                        <h2 className='sm:text-lg'><span className='text-(--primary-color) text-xl font-medium capitalize'>
                            {type}</span> with {name}
                        </h2>
                        <img src={picture} alt="" className='w-8 h-8 object-cover rounded-full border-3 border-green-300' />
                    </div>

                    <p className='text-sm sm:'>{new Date(date).toLocaleString("en-US", {
                        dateStyle: "long",
                        timeStyle: "short"
                    })}</p>
                </div>
            </div>

            <div
                onClick={handleDelete}
                className='p-2 bg-gray-100 hover:bg-red-400 text-red-500 hover:text-white rounded-full shadow hover:shadow-red-200 hover:shadow-md  flex items-center justify-center cursor-pointer'>
                <RiDeleteBinLine />
            </div>

        </div>
    );
};

export default TimelineCard;