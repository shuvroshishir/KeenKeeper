import React, { useContext, useState } from 'react';
import { FriendsContext } from '../../context/FriendsContext';
import TimelineCard from '../../components/pageComponents/timeline/TimelineCard';
import { FaFilter } from "react-icons/fa";
import NoHistory from '../../components/pageComponents/timeline/NoHistory';


const Timeline = () => {
    const { timeline } = useContext(FriendsContext);
    const [filter, setFilter] = useState("all");

    const filteredTimeline =
        filter === "all"
            ? timeline
            : timeline.filter(t => t.type === filter);


    return (
        <section className='Timeline-section container mx-auto space-y-6'>
            <h2 className='text-(--secondary-color) text-5xl font-bold'>Timeline </h2>

            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1 capitalize bg-(--primary-color) text-white">
                    <FaFilter />Filter: {filter}
                </div>

                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow">
                    <li><a onClick={() => setFilter("all")}>All</a></li>
                    <li><a onClick={() => setFilter("call")}>Call</a></li>
                    <li><a onClick={() => setFilter("text")}>Text</a></li>
                    <li><a onClick={() => setFilter("video")}>Video</a></li>
                </ul>
            </div>

            <div className='Timeline-card-container space-y-4 min-h-[30vh]'>
                {
                    filteredTimeline.length === 0 ?
                        <NoHistory />
                        :
                        filteredTimeline.map((data, idx) => <TimelineCard key={idx} data={data} />)
                }
            </div>
        </section>
    );
};

export default Timeline;