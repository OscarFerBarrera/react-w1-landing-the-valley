import "./Link.css";
import MyButton from '../MyButton/MyButton';

const Link = (props) =>{
    return(
        props.type ==="button" ?
            <MyButton onClick={props.handleClick} text = {props.text}></MyButton>:
            <a className="myLink" href={props.url} target="blank">{props.text}</a>
    );
}

export default Link;