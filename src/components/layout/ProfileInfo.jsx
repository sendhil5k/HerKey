import userAvatar from '../../images/user-avatar.png'
import Edit_card from '../../images/edit.png'
//import axios from "axios";
//import { useEffect } from 'react';
//import { getValue } from '@testing-library/user-event/dist/utils';
const ProfileInfo = () => {
    return <div className='profile-panel'>
            <p></p>
                <div className='profile-avatar'>
                    <div className='profile-image'><img src={userAvatar} alt="emp" className='Thumb_img' /> 
                    <span><img src={Edit_card} alt="edit" /></span></div>
                    <div className='profile-info'>
                        <h3>S.I. Vaishnavi</h3>
                        <span>Designation</span>
                        <p>Manager - HR</p>
                        <span>Company Name</span>
                        <p>XXX Company Name</p>
                    </div>
                </div>
                <div className='aboutme'>
                    <span>About Me</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                
        </div>;
};

export default ProfileInfo;
