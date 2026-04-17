import React, { useState } from 'react';
import { FriendsContext } from './FriendsContext';

const FriendsProvider = ({ children }) => {
    const [timeline, setTimeline] = useState([])

    const addToTimeline = (type, friendName) => {
        const newData = {
            type,
            name: friendName,
            date: new Date().toISOString()
        }
        setTimeline([newData, ...timeline]);
    }


    const data = { timeline, addToTimeline }

    return (
        <FriendsContext.Provider value={data}>
            {children}
        </FriendsContext.Provider>
    );
};

export default FriendsProvider;