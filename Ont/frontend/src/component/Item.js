
import { ListGroup } from "react-bootstrap";
import './search.css';
const Item =({value})=>{

    return (
        <ListGroup.Item>
            <p className = "item">{value}</p>
        </ListGroup.Item>
    );
}

export default Item;