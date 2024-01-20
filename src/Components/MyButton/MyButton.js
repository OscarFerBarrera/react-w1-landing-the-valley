import "./MyButton.css";

const MyButton = (props) =>{
    return(
        <button className="myButton">{props.text}</button>
    );
}

export default MyButton;