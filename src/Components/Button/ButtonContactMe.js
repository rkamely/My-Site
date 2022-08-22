import React from "react";


import './ButtonContactMe.scss';

function ButtonContactMe(props) {
    return (
        <button className='ButtonContactMe' style={{height: props.height, width: props.width}}
                type={"submit"}> {props.content} </button>

    );
}

export default ButtonContactMe;
