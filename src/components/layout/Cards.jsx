import Edit_card from '../../images/edit.png'
import './applayout.css';
const Cards = (props) => {
    return <div className="cards" style={{marginBottom:"10px"}}>
        <div className="cards-title"><h3>{props.title}</h3> <span><img src={Edit_card} alt="edit"/></span> </div>
        <div className="cards-body">{props.children}</div>
    </div>
};

export default Cards;
