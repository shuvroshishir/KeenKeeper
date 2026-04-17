import React, { useState } from 'react';
import { FriendsContext } from './FriendsContext';

const FriendsProvider = ({ children }) => {
    const [timeline, setTimeline] = useState([])

    const addToTimeline = (type, friendName, friendPicture) => {
        const newData = {
            id: Date.now(),
            type,
            name: friendName,
            picture: friendPicture,
            date: new Date().toISOString()
        }
        setTimeline([newData, ...timeline]);
    }

    const deleteFromTimeline = (id) => {
        const updatedTimeline = timeline.filter(t => t.id !== id);
        setTimeline(updatedTimeline);
    }


    const data = { timeline, addToTimeline, deleteFromTimeline }

    return (
        <FriendsContext.Provider value={data}>
            {children}
        </FriendsContext.Provider>
    );
};

export default FriendsProvider;