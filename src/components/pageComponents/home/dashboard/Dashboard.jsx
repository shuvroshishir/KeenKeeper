import React from 'react';

const Dashboard = () => {
    return (
        <div className="Dashboard-section grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 py-10">

            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md hover:scale-103 transition-all duration-200 ease-in-out">
                <h2 className="text-3xl font-bold text-[#2f5d50]">10</h2>
                <p className="text-gray-500 mt-2">Total Friends</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md hover:scale-103 transition-all duration-200 ease-in-out">
                <h2 className="text-3xl font-bold text-[#2f5d50]">3</h2>
                <p className="text-gray-500 mt-2">On Track</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md hover:scale-103 transition-all duration-200 ease-in-out">
                <h2 className="text-3xl font-bold text-[#2f5d50]">6</h2>
                <p className="text-gray-500 mt-2">Need Attention</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md hover:scale-103 transition-all duration-200 ease-in-out">
                <h2 className="text-3xl font-bold text-[#2f5d50]">12</h2>
                <p className="text-gray-500 mt-2">Interactions This Month</p>
            </div>

        </div>
    );
};

export default Dashboard;