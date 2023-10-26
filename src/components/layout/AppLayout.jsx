import React from "react";
import { Outlet } from "react-router-dom";
import './applayout.css';
import Header from "../Header";
import Sidebar from "../sidebar/Sidebar";

const AppLayout = () => {
   
  /*  const useMediaQuery = (query) => {
  
        const [matches, setMatches] = useState(false);
    
        useEffect(() => {
          const media = window.matchMedia(query);
          if (media.matches !== matches) {
            setMatches(media.matches);
          }
          const listener = () => setMatches(media.matches);
          window.addEventListener("resize", listener);
          return () => window.removeEventListener("resize", listener);
        }, [matches, query]);
    
        return matches;
      };
*/
    

    return <div className="bodyTitlebar">
        <Header />
        <div className="MainPanel">
            <Sidebar />
            <div className="right_content_panel"><Outlet /></div>
        </div>
    </div>;
};

export default AppLayout;
