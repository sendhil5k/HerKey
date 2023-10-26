import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';
import JFGlogo from '../images/JFH_logo.png'
import forever21 from '../images/forever_21_img.png'

//import styled from 'styled-components';

export default function Header() {
   
    return (
        <>
        <nav className="navigation">
          <div className='jfg-log-big'>  
          <Link to="/"><img src={JFGlogo} alt="logo" style={{width:"130px"}} /></Link>
          </div>
        
      <div className="navigation-menu">
    
        <ul style={{marginBottom:"0px"}}>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/packages">Packages</Link>
          </li>
          <li>
          <Link to="/events">events</Link>
          </li>
          <li>
          <Link to="/blogs">blogs</Link>
          </li>
        </ul>
      </div>
      <div className='hd-r-panel'>
          <img src={forever21} alt="logo" className='hd-rt-img' />
      </div>
      
    </nav>
        </>
    )
};
