import React from 'react';
import { useNavigate } from 'react-router';

const FriendCard = ({ friend }) => {
    const { id, name, picture, days_since_contact, status, tags } = friend;
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate(`/friend-details/${id}`)}
            className="Friend-card bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-md hover:scale-103 transition-all duration-200 ease-in-out">

            <div className="flex justify-center mb-4">
                <img
                    src={picture}
                    alt={name}
                    className="w-20 h-20 rounded-full object-cover"
                />
            </div>

            <h2 className="text-lg font-semibold text-(--secondary-color)">
                {name}
            </h2>

            <p className="text-sm text-gray-500 mt-1">
                {days_since_contact}d ago
            </p>

            <div className="mt-3 flex gap-1 justify-center flex-wrap">

                {tags.map((tag, idx) => <span key={idx} className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full capitalize font-medium">
                    {tag}
                </span>)}

            </div>

            <div className="mt-3">
                <span
                    className={`text-white text-xs px-3 py-1 rounded-full capitalize font-medium
                        ${status === "overdue"
                            ? "bg-red-500"
                            : status === "almost due"
                                ? "bg-yellow-500"
                                : "bg-green-500"
                        }`}
                >
                    {status}
                </span>
            </div>
        </div>
    );

};

export default FriendCard;