import React, { useState } from 'react';
import { FriendsContext } from './FriendsContext';
import { getTimelineFromLocalDB, addNewItemIntoLocalDB } from '../utils/localDB'

const FriendsProvider = ({ children }) => {
    const [timeline, setTimeline] = useState(() => getTimelineFromLocalDB())

    const addToTimeline = (type, friendName, friendPicture) => {
        const newData = {
            id: Date.now(),
            type,
            name: friendName,
            picture: friendPicture,
            date: new Date().toISOString()
        }
        setTimeline([newData, ...timeline]);
        addNewItemIntoLocalDB(newData);
    }

    const deleteFromTimeline = (id) => {
        const updatedTimeline = timeline.filter(t => t.id !== id);
        setTimeline(updatedTimeline);
        localStorage.setItem('timeline', JSON.stringify(updatedTimeline));
    }


    const data = { timeline, addToTimeline, deleteFromTimeline }

    return (
        <FriendsContext.Provider value={data}>
            {children}
        </FriendsContext.Provider>
    );
};

export default FriendsProvider;