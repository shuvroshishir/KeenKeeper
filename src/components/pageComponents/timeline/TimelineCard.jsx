import React from 'react';
import callImg from '../../../assets/call.png'
import textImg from '../../../assets/text.png'
import videoImg from '../../../assets/video.png'

const TimelineCard = ({ data }) => {
    const { type, name, date } = data;
    return (
        <div className='Timeline-card bg-white rounded-lg shadow p-4 flex items-center gap-4 hover:shadow-md duration-100 ease-in-out transition-all'>
            <div>
                <img src={type === 'call' ? callImg : type === 'text' ? textImg : videoImg} alt="" />
            </div>
            <div className='text-(--para-color)'>
                <h2 className='sm:text-lg'><span className='text-(--primary-color) text-xl font-medium capitalize'>{type}</span> with {name}</h2>
                <p className='text-sm sm:'>{new Date(date).toLocaleString("en-US", {
                    dateStyle: "long",
                    timeStyle: "short"
                })}</p>
            </div>
        </div>
    );
};

export default TimelineCard;