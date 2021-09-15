import React from 'react';
import * as IconBs from "react-icons/bs";
import * as IconIm from "react-icons/im";
import * as IconCg from "react-icons/cg";
import * as IconIo from "react-icons/io";
import * as IconRi from "react-icons/ri";

export const SideBar = [
    {
        title:'Home Page',
        path:'/',
        icon: <IconIm.ImHome />,
        className: 'nav-links'
    },
    {
        title:'Admin Login',
        path:'/autho-login',
        icon: <IconIo.IoMdPerson />,
        className: 'nav-links'
    },
    {
        title:'User Login',
        path:'/user-login',
        icon: <IconIo.IoMdPerson />,
        className: 'nav-links'
    },
    {
        title:'User Sign Up',
        path:'/user-sign',
        icon: <IconBs.BsPersonPlus />,
        className: 'nav-links'
    },
    {
        title:'Add Event',
        path:'/add-event',
        icon: <IconCg.CgAdd />,
        className: 'nav-links'
    },
    {
        title:'List Events',
        path:'/list-events',
        icon: <IconRi.RiFileListLine />,
        className: 'nav-links'
    },
    {
        title:'My Events',
        path:'/my-events',
        icon: <IconRi.RiFileListLine />,
        className: 'nav-links'
    }
]

export default SideBar;
