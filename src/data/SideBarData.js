import React from 'react'
import * as FiIcons from 'react-icons/fi'
export const SideBarData = [
    {
        icon: <FiIcons.FiHome size={20} />,
        title: 'Content',
        path: '/geolocation'
    },
    {
        icon: <FiIcons.FiUsers size={20} />,
        title: 'Users',
        path: '/allusers'
    },
    {
        icon: <FiIcons.FiUserX size={20} />,
        title: 'My Account',
        path: '/useraccount'
    }
]