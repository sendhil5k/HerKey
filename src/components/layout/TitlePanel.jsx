import leftArrow from '../../images/go-back-left-arrow.svg'

import './applayout.css';
const TitlePanel = (props) => {
    return <div className="TitlePanel">
        <div className="TitlePanel-head"><span><img src={leftArrow} alt="edit"/></span> 
        <h3>{props.tphdead}</h3>  </div>
        <div className="TitlePanel-body">{props.children}</div>
    </div>
};

export default TitlePanel;
