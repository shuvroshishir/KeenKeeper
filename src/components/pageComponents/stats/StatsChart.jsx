import React from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';


const StatsChart = ({ callCount, textCount, videoCount }) => {


    const data = [
        { name: 'Call', value: callCount, fill: '#244D3F' },
        { name: 'Text', value: textCount, fill: '#7E35E1' },
        { name: 'Video', value: videoCount, fill: '#37A163' },
    ];

    return (
        <PieChart style={{ width: '100%', maxWidth: '350px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
            <Pie
                data={data}
                innerRadius="80%"
                outerRadius="100%"
                // Corner radius is the rounded edge of each pie slice
                cornerRadius="10%"
                fill="#8884d8"
                // padding angle is the gap between each pie slice
                paddingAngle={5}
                dataKey="value"
                isAnimationActive={true}
            />

            <Legend wrapperStyle={{ marginTop: 20 }} />
            <Tooltip />
        </PieChart>
    );
};

export default StatsChart;