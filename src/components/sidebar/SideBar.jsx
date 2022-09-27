import React from 'react';
import { NavLink } from 'react-router-dom';
import { SideBarData } from '../../data/SideBarData';
// import Navbar from '../common/Navbar';
import './SideBar.css';

const SideBar = () => {
    return (
        <>
            <div className='sidebar--list flex flex-col justify-between bg-gray-100 pt-16 pr-8 pb-24 pl-4 w-1/4 h-full'>
                <div className='block mt-2 text-base text-white font-normal'>
                    {SideBarData.map((item, index) => {
                        return (
                            <NavLink
                            to={item.path}
                            key={index}
                            className={`row first_child ${index}`}
                            id={window.location.pathname === item.path ? "active" : ""}
                            style={{ display: "flex"}}
                          >
                            <span style={{ display: 'inline-block', fontSize: '1.4rem', marginRight: '0.5rem' }} id="icon">
                              {item.icon}
                            </span>
                            <span style={{ display: 'inline-block' }} id="title">
                              {item.title}
                            </span>
                          </NavLink>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default SideBar