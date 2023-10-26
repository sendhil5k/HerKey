import {Link} from 'react-router-dom';
const Breadcrumbs = () => {
    return <div className="breadcrumbs">
                <div className='xm-show'>Dashboard |&nbsp;<Link to="/myaccount" className='link-style'>My Account</Link></div>
                <div className='sm-show'>
                    <Link to="/myinventory">My Inventory</Link> | &nbsp;
                    <Link to="/companyprofile">Company Profile</Link> | &nbsp;
                    <Link to="/allusers">All User</Link> | &nbsp;
                    <Link to="/myaccount">My Account</Link>
                    </div>
        </div>;
};

export default Breadcrumbs;

