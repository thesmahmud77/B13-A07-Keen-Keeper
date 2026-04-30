import React, { useContext } from "react";
import MainContainer from "../Container/MainContainer";
import { useParams } from "react-router";
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { IoArchiveOutline } from "react-icons/io5";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiPhoneCall } from "react-icons/bi";
import { MdTextsms } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import useLoaderApps from "../Hooks/useLoaderApps";
import { AuthContext } from "../Provider/AuthContent";
import Swal from "sweetalert2";

const FriendDetails = () => {
  const { id } = useParams();
  // console.log(id);
  const { data, loader } = useLoaderApps();
  // console.log(data);
  const { friendInfo, setFriendInfo } = useContext(AuthContext);

  const Friends = data.find((singleDetails) => String(singleDetails.id) === id);
  // console.log(firendsdetsils);
  // const {  name, goal } = firendsdetsils;
  if (loader)
    return <h1 className="text-center font-bold text-xl py-20">Loading...</h1>;

  const handleQuickCall = () => {
    const quickCheckData = {
      id: Friends.id,
      name: Friends.name,
      date: Friends.next_due_date,
      picture: Friends.picture,
      type: "Call",
    };
    // console.log(quickCheckData, "From Friends Details Page");
    setFriendInfo([...friendInfo, quickCheckData]);
    Swal.fire({
      title: "Call Added In Timeline",
      icon: "success",
      draggable: true,
    });
  };
  const handleQuickText = () => {
    const quickCheckData = {
      id: Friends.id,
      name: Friends.name,
      date: Friends.next_due_date,
      picture: Friends.picture,
      type: "Text",
    };
    // console.log(quickCheckData, "From Friends Details Page");
    setFriendInfo([...friendInfo, quickCheckData]);
    Swal.fire({
      title: "Text Added In Timeline",
      icon: "success",
      draggable: true,
    });
  };
  const handleQuickVideo = () => {
    const quickCheckData = {
      id: Friends.id,
      name: Friends.name,
      date: Friends.next_due_date,
      picture: Friends.picture,
      type: "video",
    };
    // console.log(quickCheckData, "From Friends Details Page");
    setFriendInfo([...friendInfo, quickCheckData]);
    Swal.fire({
      title: "Video Added In Timeline",
      icon: "success",
      draggable: true,
    });
  };

  return (
    <MainContainer>
      <div className="grid grid-cols-12 mx-auto gap-6 min-h-screen py-20">
        <div className=" col-span-4 space-y-5 py-5 px-2">
          <div className="border-2 border-gray-300 text-center py-10 space-y-1 flexCenter flex-col">
            <figure>
              <img className="rounded-full" src={Friends.picture} alt="" />
            </figure>
            <h1 className="font-bold text-2xl">{Friends.name}</h1>
            <div className="flex items-center justify-center gap-2">
              <button className="px-5 py-1 rounded-full mt-2 border-2 border-gray-300 text-white bg-red-500">
                {Friends.status}
              </button>
              <button className="px-5 py-1 rounded-full mt-2 border-2 border-gray-300 text-white bg-green-500">
                {Friends.tags}
              </button>
            </div>
            <p className="textPrimary font-semibold">{Friends.bio}</p>
            <p className="textPrimary">Email: {Friends.email}</p>
          </div>
          <div className=" flexCenter flex-col space-y-3">
            <button className=" flexCenter gap-1 border-2 border-gray-300 w-full py-4 font-bold rounded-[5xl]">
              <span>
                <HiOutlineBellSnooze className="w-7 h-7" />
              </span>
              Snooze 2 weeks
            </button>
            <button className=" flexCenter gap-1 border-2 border-gray-300 w-full py-4 font-bold rounded-[5xl]">
              <span>
                <IoArchiveOutline className="w-7 h-7" />
              </span>
              Archive
            </button>
            <button className=" flexCenter gap-1 border-2 w-full py-4 font-bold rounded-[5xl] text-red-500">
              <span>
                <RiDeleteBinLine className="w-7 h-7" />
              </span>
              Delete
            </button>
          </div>
        </div>
        <div className="col-span-8 space-y-5 py-5 px-2">
          <div className="grid grid-cols-12 gap-5">
            <div className=" col-span-4 text-center border-2 border-gray-300 px-10 py-5">
              <h1 className="font-bold text-2xl">
                {Friends.days_since_contact}
              </h1>
              <p>Days Since Contact</p>
            </div>
            <div className="col-span-4 text-center border-2 border-gray-300 px-10 py-5">
              <h1 className="font-bold text-2xl">{Friends.goal}</h1>
              <p>Goal (Days)</p>
            </div>
            <div className="col-span-4 text-center border-2 border-gray-300 px-10 py-5">
              <h1 className="font-bold text-2xl">{Friends.next_due_date}</h1>
              <p>Next Due</p>
            </div>
          </div>
          <div className="flex items-start justify-between border-2 border-gray-300 py-5 px-2 mt-10 py-10">
            <div>
              <h2>Relationship Goal</h2>
              <p>
                Connect every <span className="font-bold">30 days</span>
              </p>
            </div>
            <button className="bg-green-200 px-8 py-3 rounded-[10px] cursor-pointer">
              Edit
            </button>
          </div>
          <div className="mt-12">
            <h1 className="font-bold text-4xl">Quick Check-In</h1>
            <div className="flex items-center justify-between gap-5 mt-5">
              <button
                onClick={handleQuickCall}
                className="flexCenter flex-col gap-1 border-2 border-gray-300 w-full py-4 font-bold rounded-[6px] transition-all duration-300 hover:bg-[#244D3F] hover:text-white cursor-pointer"
              >
                <BiPhoneCall className="w-7 h-7" />
                Call
              </button>
              <button
                onClick={handleQuickText}
                className="flexCenter flex-col gap-1 border-2 border-gray-300 w-full py-4 font-bold rounded-[6px] transition-all duration-300 hover:bg-[#244D3F] hover:text-white cursor-pointer"
              >
                <MdTextsms className="w-7 h-7" />
                Text
              </button>
              <button
                onClick={handleQuickVideo}
                className="flexCenter flex-col gap-1 border-2 border-gray-300 w-full py-4 font-bold rounded-[6px] transition-all duration-300 hover:bg-[#244D3F] hover:text-white cursor-pointer"
              >
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
