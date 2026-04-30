import React from "react";
import MainContainer from "../Container/MainContainer";
import { useParams } from "react-router";
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { IoArchiveOutline } from "react-icons/io5";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiPhoneCall } from "react-icons/bi";
import { MdTextsms } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import useLoaderApps from "../Hooks/useLoaderApps";

const FriendDetails = () => {
  const { id } = useParams();
  // console.log(id);
  const { data, loader } = useLoaderApps();
  // console.log(data);

  const Friends = data.find((singleDetails) => String(singleDetails.id) === id);
  // console.log(firendsdetsils);
  // const {  name, goal } = firendsdetsils;
  if (loader) return <h1 className="text-center py-20">Loading...</h1>;

  return (
    <MainContainer>
      <div className="grid grid-cols-12 mx-auto gap-6 min-h-screen py-20">
        <div className=" col-span-4 space-y-5 py-5 px-2">
          <div className="border-2 text-center py-10 space-y-1 flexCenter flex-col">
            <figure>
              <img className="rounded-full" src={Friends.picture} alt="" />
            </figure>
            <h1 className="font-bold text-2xl">{Friends.name}</h1>
            <button className="px-5 py-1 rounded-full mt-2 border-2 text-white bg-red-500">
              {Friends.status}
            </button>
            <button className="px-5 py-1 rounded-full mt-2 border-2 text-white bg-green-500">
              {Friends.tags}
            </button>
            <p className="textPrimary font-semibold">
              "Former colleague, great mentor"
            </p>
            <p className="textPrimary">Preferred: email</p>
          </div>
          <div className=" flexCenter flex-col space-y-3">
            <button className=" flexCenter gap-1 border-1 w-full py-4 font-bold rounded-[5xl]">
              <span>
                <HiOutlineBellSnooze className="w-7 h-7" />
              </span>
              Snooze 2 weeks
            </button>
            <button className=" flexCenter gap-1 border-1 w-full py-4 font-bold rounded-[5xl]">
              <span>
                <IoArchiveOutline className="w-7 h-7" />
              </span>
              Archive
            </button>
            <button className=" flexCenter gap-1 border-1 w-full py-4 font-bold rounded-[5xl] text-red-600">
              <span>
                <RiDeleteBinLine className="w-7 h-7" />
              </span>
              Delete
            </button>
          </div>
        </div>
        <div className="col-span-8 space-y-5 py-5 px-2">
          <div className="flex items-center justify-between gap-10">
            <div className=" text-center border-1 px-10 py-5">
              <h1 className="font-bold text-2xl">
                {Friends.days_since_contact}
              </h1>
              <p>Days Since Contact</p>
            </div>
            <div className=" text-center border-1 px-10 py-5">
              <h1 className="font-bold text-2xl">{Friends.goal}</h1>
              <p>Goal (Days)</p>
            </div>
            <div className=" text-center border-1 px-10 py-5">
              <h1 className="font-bold text-2xl">{Friends.next_due_date}</h1>
              <p>Next Due</p>
            </div>
          </div>
          <div className="flex items-start justify-between border-1 py-5 px-2">
            <div>
              <h2>Relationship Goal</h2>
              <p>
                Connect every <span className="font-bold">30 days</span>
              </p>
            </div>
            <button className="bg-green-100 px-5 py-2 rounded-2xl">Edit</button>
          </div>
          <div>
            <h1>Quick Check-In</h1>
            <div className="flex items-center justify-between gap-5">
              <button className=" flexCenter flex-col gap-1 border-1 w-full py-4 font-bold rounded-[6px]">
                <BiPhoneCall className="w-7 h-7" />
                Call
              </button>
              <button className=" flexCenter flex-col gap-1 border-1 w-full py-4 font-bold rounded-[6px]">
                <MdTextsms className="w-7 h-7" />
                Text
              </button>
              <button className=" flexCenter flex-col gap-1 border-1 w-full py-4 font-bold rounded-[6px]">
                <FaVideo className="w-7 h-7" />
                Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default FriendDetails;
