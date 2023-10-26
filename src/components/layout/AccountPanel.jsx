import {Link} from 'react-router-dom';
const AccountPanel = () => {
    return <div className="accounts">
        <div className="grid-2colfix">
            <div>
                <span>Full Name*</span>
                <p>S.I. Vaishnavi</p>
            </div>
            <div>
            <span>Designation</span>
                <p>Manager - HR</p>
                </div>
        </div>
        <div className="grid-2colfix">
            <div>
                <span>Phone / Landline*</span>
                <p>7788997781</p>
            </div>
            <div>
            <label>&nbsp;</label>
                <p><Link to="/changepwd" className='link-color'>Change Password</Link></p>
                </div>
        </div>
    </div>
}
export default AccountPanel;
