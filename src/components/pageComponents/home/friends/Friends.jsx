import React, { useEffect, useState } from 'react';
import { FriendsContext } from '../../../../context/FriendsContext';
import { Md5G } from 'react-icons/md';
import { HashLoader } from "react-spinners";
import FriendCard from '../../../cards/friendCard/FriendCard';

const Friends = () => {
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/friends.json');
            const data = await res.json();
            setFriends(data);
            setLoading(false)
        }
        fetchData();
    }, [])

    return (
        <div className='Friends-section min-h-screen'>
            <h2 className='text-(--secondary-color) text-2xl font-semibold mb-4'>Your Friends</h2>
            <HashLoader color="#244D3F" loading={loading} className='mx-auto' />
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {
                    friends.map((friend) =>
                        <FriendCard key={friend.id} friend={friend} />
                    )
                }
            </div>
        </div>
    );
};

export default Friends;