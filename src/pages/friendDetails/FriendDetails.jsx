import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { HashLoader } from "react-spinners";
import FriendDetailsCard from '../../components/pageComponents/friendDetails/FriendDetailsCard';
import { Link } from 'react-router';
import { IoIosArrowBack } from "react-icons/io";
import useFriends from '../../hooks/useFriends';

const FriendDetails = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { friends, loading } = useFriends();

    const { friendId } = useParams();

    const friend = friends.find(f => f.id == friendId);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[50vh]">
                <HashLoader color="#244D3F" />
            </div>
        );
    }

    return (
        <section className='Friend-Details-section container mx-auto'>
            <FriendDetailsCard friend={friend} />
        </section>
    );
};

export default FriendDetails;