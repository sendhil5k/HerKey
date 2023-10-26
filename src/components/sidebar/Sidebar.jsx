import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './sidebar.css';
import Hplogo from '../../images/hp_logo.png';
import dashboard from '../../images/dashboard.png';
import Jobs_Outline from '../../images/Jobs_Outline.png';
import profiles from '../../images/profiles.png';
import followers from '../../images/followers.png';
import enterprise from '../../images/enterprise.png';
import collaboration from '../../images/collaboration.png';
import conversation from '../../images/conversation.png';





const sidebarNavItems = [
    {
        display: 'Dashboard',
        icon: <i><img src={dashboard} alt='Dashboard' /></i>,
        to: '/',
        section: ''
    },
    {
        display: 'Jobs',
        icon: <i><img src={Jobs_Outline} alt='' /></i>,
        to: '/jobs',
        section: 'jobs'
    },
    {
        display: 'Applications',
        icon: <i><img src={profiles} alt='' /></i>,
        to: '/applications',
        section: 'applications'
    },
    {
        display: 'Followers',
        icon: <i><img src={followers} alt='' /></i>,
        to: '/followers',
        section: 'followers'
    },
    {
        display: 'My Inventory',
        icon: <i><img src={enterprise} alt='' /></i>,
        to: '/myinventory',
        section: 'myinventory'
    },
    {
        display: 'Company Profile',
        icon: <i><img src={enterprise} alt='' /></i>,
        to: '/companyprofile',
        section: 'companyprofile'
    },
    {
        display: 'All Users',
        icon: <i><img src={collaboration} alt='' /></i>,
        to: '/allusers',
        section: 'allusers'
    },
    {
        display: 'My Account',
        icon: <i><img src={conversation} alt='' /></i>,
        to: '/myaccount',
        section: 'myaccount'
    },
]

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0);



    
    const [stepHeight, setStepHeight] = useState(0);
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();

    
  
    useEffect(() => {
        setTimeout(() => {
            const sidebarItem = sidebarRef.current.querySelector('.sidebar__menu__item');
            indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
            setStepHeight(sidebarItem.clientHeight);
        }, 50);
    }, []);

    // change active index
    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);

    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const menuHandler = () => {
      setIsNavExpanded(!isNavExpanded);
     
    };



    return <>
     <div className="sidebar__menu_icon">
            <button className="hamburger" onClick={menuHandler}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="gray"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
            

        </div>
    
    
    <div className={
          isNavExpanded ? "sidebar expanded" : "sidebar"
        }>
        <div className='client_logo'>
            <img src={Hplogo} alt="logo" className="sm-log" /> <span>Hello</span><br/>
            <p>Hewlett Packard E...</p>
        </div>
        <div ref={sidebarRef} className="sidebar__menu">
            <div
                ref={indicatorRef}
                className="sidebar__menu__indicator"
                style={{
                    transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
                }}
            ></div>
            {
                sidebarNavItems.map((item, index) => (
                    <Link to={item.to} key={index}>
                        <div className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}>
                            <div className="sidebar__menu__item__icon">
                                {item.icon}
                            </div>
                            <div className="sidebar__menu__item__text">
                                {item.display}
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>

        <div className='contactus'>Contact Us - <br/>Email: admin@test.com</div>
    </div>
    </>
};

export default Sidebar;