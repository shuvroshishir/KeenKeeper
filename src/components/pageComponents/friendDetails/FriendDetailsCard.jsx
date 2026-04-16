import React from 'react';
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { FiArchive } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { PiPhoneCallBold } from "react-icons/pi";
import { MdOutlineTextsms } from "react-icons/md";
import { FiVideo } from "react-icons/fi";

const FriendDetailsCard = ({ friend }) => {

    const { name, picture, email, days_since_contact, status, tags, bio, goal, next_due_date } = friend;


    return (

        <div className="Friend-details-card container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

            <div className="card-left">
                <div className="bg-white shadow rounded-lg px-12 py-6 flex flex-col items-center hover:shadow-md hover:scale-101 transition-all duration-100 ease-in-out">
                    <div className="flex justify-center">
                        <img
                            src={picture}
                            alt={name}
                            className="w-20 h-20 rounded-full object-cover"
                        />
                    </div>

                    <h2 className="font-semibold text-xl mt-4 mb-2">{name}</h2>


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


                    <div className="mt-2 flex gap-1 justify-center flex-wrap">

                        {tags.map((tag, idx) => <span key={idx} className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full capitalize font-medium">
                            {tag}
                        </span>)}

                    </div>

                    <p className="text-(--para-color) font-medium mt-3 text-center italic">
                        "{bio}"
                    </p>
                    <p className="text-(--para-color) text-sm mt-3 text-center">
                        Preferred: {email}
                    </p>
                </div>

                <div className="mt-4 space-y-2">
                    <button className="flex justify-center items-center gap-2 font-medium color-(--para-color)  bg-white shadow w-full p-2 rounded cursor-pointer hover:shadow-md hover:scale-101 transition-all duration-100 ease-in-out"><RiNotificationSnoozeLine /> Snooze 2 Weeks</button>

                    <button className="flex justify-center items-center gap-2 font-medium color-(--para-color)  bg-white shadow w-full  p-2 rounded cursor-pointer hover:shadow-md hover:scale-101 transition-all duration-100 ease-in-out"><FiArchive /> Archive</button>

                    <button className="flex justify-center items-center gap-2  font-medium color-(--para-color) bg-white shadow w-full  p-2 rounded text-red-500 cursor-pointer hover:shadow-md hover:scale-101 transition-all duration-100 ease-in-out"><RiDeleteBinLine /> Delete</button>
                </div>
            </div>


            <div className="card-right lg:col-span-2 space-y-6">

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="bg-white py-8 px-4 rounded-lg shadow text-center hover:shadow-md hover:scale-101 transition-all duration-100 ease-in-out">
                        <h2 className="text-(--primary-color) font-semibold text-3xl">{days_since_contact}</h2>
                        <p className="text-(--para-color) text-lg mt-2">Days Since Contact</p>
                    </div>

                    <div className="bg-white py-8 px-4 rounded-lg shadow text-center hover:shadow-md hover:scale-101 transition-all duration-100 ease-in-out">
                        <h2 className="text-(--primary-color) font-semibold text-3xl">{goal}</h2>
                        <p className="text-(--para-color) text-lg mt-2">Goal (Days)</p>
                    </div>

                    <div className="bg-white py-8 px-4 rounded-lg shadow text-center hover:shadow-md hover:scale-101 transition-all duration-100 ease-in-out">
                        <h2 className="text-(--primary-color) font-semibold text-3xl">
                            {new Date(next_due_date).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric'
                            })}
                        </h2>
                        <p className="text-(--para-color) text-lg mt-2">Next Due</p>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow flex justify-between items-center hover:shadow-md hover:scale-101 transition-all duration-100 ease-in-out">
                    <div>
                        <h3 className="font-medium text-xl text-(--primary-color) mb-4">Relationship Goal</h3>
                        <p className="text-(--para-color) text-sm">Connect every <b className='text-(--secondary-color)'>30 days</b></p>
                    </div>
                    <button className="btn">Edit</button>
                </div>

                <div className="bg-white p-6 rounded-lg shadow hover:shadow-md hover:scale-101 transition-all duration-100 ease-in-out">
                    <h3 className="mb-4 font-medium text-xl text-(--primary-color)">Quick Check-In</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-(--secondary-color)">
                        <button className="text-lg shadow p-4 rounded-lg bg-gray-50 hover:shadow-md hover:bg-gray-100 flex flex-row sm:flex-col gap-2 justify-center items-center cursor-pointer">
                            <PiPhoneCallBold size={32} />Call
                        </button>
                        <button className="text-lg shadow p-4 rounded-lg bg-gray-50 hover:shadow-md hover:bg-gray-100 flex flex-row sm:flex-col gap-2 justify-center items-center cursor-pointer">
                            <MdOutlineTextsms size={32} />Text
                        </button>
                        <button className="text-lg shadow p-4 rounded-lg bg-gray-50 hover:shadow-md hover:bg-gray-100 flex flex-row sm:flex-col gap-2 justify-center items-center cursor-pointer">
                            <FiVideo size={32} />Video
                        </button>
                    </div>
                </div>

            </div>

        </div>

    );
};

export default FriendDetailsCard;