import Breadcrumbs from "../components/Breadcrumbs";
import ProfileInfo from "../components/layout/ProfileInfo";
import Cards from "../components/layout/Cards";
import TitlePanel from "../components/layout/TitlePanel";
import AccountPanel from "../components/layout/AccountPanel.jsx";
import AppSetting from "../components/layout/AppSetting";
//import Footer from "../components/Footer";
const Dashboard = () => {
    return <div className="page_panel">
        <Breadcrumbs />
        <TitlePanel tphdead="My Account">
            <Cards title="My Profile">
                <ProfileInfo />
            </Cards>
            <div className="grid-2col">
                <div><Cards title="My Account Settings">
                <AccountPanel />
            </Cards></div>
                <div><Cards title="Application Settings">
                <AppSetting/>
            </Cards></div>
            </div>
            
        </TitlePanel>
    </div>;
};

export default Dashboard;
