import { useRef } from "react";
import { useHistory } from "react-router-dom";

export default function Start({ setUserName, userName, nickName }) {

    const inputRef = useRef();
    let history = useHistory();

    const handleClick = () => {

        inputRef.current.value && setUserName(inputRef.current.value);
        history.push("/container")

    };


    return (
        <div className="start">
            <input
                className="startInput"
                placeholder="enter your name"
                ref={inputRef}
            />

            <button className="startButton" onClick={handleClick}>
                Start
            </button>
        </div>
    );
}