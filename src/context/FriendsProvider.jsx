import React from 'react';
import { FriendsContext } from './FriendsContext';

const FriendsProvider = ({ children }) => {
    const msg = 'hi shishir'
    const data = {
        msg,
    }

    return (
        <FriendsContext.Provider value={data}>
            {children}
        </FriendsContext.Provider>
    );
};

export default FriendsProvider;