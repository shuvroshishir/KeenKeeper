import React, { lazy, Suspense, useContext } from 'react';
import { FriendsContext } from '../../context/FriendsContext';
import NoStats from '../../components/pageComponents/stats/NoStats';
import { HashLoader } from 'react-spinners';


const StatsChart = lazy(() => import('../../components/pageComponents/stats/StatsChart'))

const Stats = () => {
    const { timeline } = useContext(FriendsContext);

    const callCount = timeline.filter(item => item.type === "call").length;
    const textCount = timeline.filter(item => item.type === "text").length;
    const videoCount = timeline.filter(item => item.type === "video").length;

    const isEmpty = callCount === 0 && callCount === 0 && callCount === 0;


    return (
        <section className='Timeline-section container mx-auto space-y-6'>
            <h2 className='text-(--secondary-color) text-5xl font-bold'>Friendship Analytics </h2>

            <div className='p-8 rounded-lg bg-white shadow hover:shadow-md duration-200 transition-all ease-in-out'>
                <h3 className='text-(--primary-color) font-semibold text-xl mb-6'>By Interaction Type</h3>


                <div className=' flex justify-center items-center'>
                    {
                        isEmpty ?
                            <NoStats />
                            :
                            <Suspense fallback={
                                <div className="flex justify-center items-center min-h-[50vh]">
                                    <HashLoader color="#244D3F" />
                                </div>}
                            >
                                <StatsChart
                                    callCount={callCount}
                                    textCount={textCount}
                                    videoCount={videoCount}
                                />
                            </Suspense>
                    }
                </div>
            </div>
        </section>
    );
};

export default Stats;