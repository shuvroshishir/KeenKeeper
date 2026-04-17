import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { FriendsContext } from '../../context/FriendsContext';

const Stats = () => {
    const { timeline } = useContext(FriendsContext);

    const callCount = timeline.filter(item => item.type === "call").length;
    const textCount = timeline.filter(item => item.type === "text").length;
    const videoCount = timeline.filter(item => item.type === "video").length;

    const data = [
        { name: 'Call', value: callCount, fill: '#00C49F' },
        { name: 'Text', value: textCount, fill: '#0088FE' },
        { name: 'Video', value: videoCount, fill: '#FFBB28' },
    ];

    return (
        <section className='Timeline-section container mx-auto space-y-6'>
            <h2 className='text-(--secondary-color) text-5xl font-bold'>Friendship Analytics </h2>

            <div className='p-8 rounded-lg bg-white shadow hover:shadow-md duration-200 transition-all ease-in-out'>
                <h3 className='text-(--primary-color) font-semibold text-xl mb-6'>By Interaction Type</h3>


                <div className=' flex justify-center items-center'>
                    <PieChart style={{ width: '100%', maxWidth: '350px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
                        <Pie
                            data={data}
                            innerRadius="80%"
                            outerRadius="100%"
                            // Corner radius is the rounded edge of each pie slice
                            cornerRadius="50%"
                            fill="#8884d8"
                            // padding angle is the gap between each pie slice
                            paddingAngle={5}
                            dataKey="value"
                            isAnimationActive={true}
                        />

                        <Legend wrapperStyle={{ marginTop: 20 }} />
                        <Tooltip />
                    </PieChart>
                </div>
            </div>
        </section>
    );
};

export default Stats;