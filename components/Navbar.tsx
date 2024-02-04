import React from "react";
import Link from "next/link";
import { Lobster } from "next/font/google";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import HomeIcon from "@mui/icons-material/Home";
import { Divider, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import LogoutIcon from "@mui/icons-material/Logout";

type PropsTooltip = {
  children: React.ReactElement;
  className: string;
};

const lobster = Lobster({
  weight: "400",
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <div className="fixed bg-[#0f342a] p-2 w-full h-8, flex items-center z-10">
      <Link className="mr-10" href="/">
        <button className="text-white bg-black pl-5 pr-5 rounded-2xl">
          <h1 className={`text-white ${lobster.className} text-2xl`}>
            LinkTree
          </h1>
        </button>
      </Link>
      <Link href="/">
        <IconButton className="text-white hover:text-black">
          <HomeIcon className="text-3xl " />
          <span className=" text-sm ml-1">Home</span>
        </IconButton>
      </Link>
      <div className="flex-1 flex justify-end">
        <Link
          className="bg-red-950 hover:border hover:border-white text-white hover:bg-[#0f342a]  hover:text-red-950 rounded-2xl"
          href="/add_link"
        >
          <IconButton className="text-white">
            <PlaylistAddIcon className="text-3x" />
            <span className="text-sm ml-1">Manage Links</span>
          </IconButton>
        </Link>

        <Divider className="ml-2 mr-2 h-10 bg-white" orientation="vertical" />

        <Link href="/add_link">
          <IconButton className="text-white hover:text-black">
            <LogoutIcon className="text-3xl " />
            <span className=" text-sm ml-1">Logout</span>
          </IconButton>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
