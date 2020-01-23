import React from "react"
import "./Control.css"
import Btn from "./Btn.js"

const Control = (props) => {
    return(
        <div id="Control">
            <div className="row">
                <Btn content = {"7"} handleClick = {props.handleClick}/>
                <Btn content = {"8"} handleClick = {props.handleClick}/>
                <Btn content = {"9"} handleClick = {props.handleClick}/>
                <Btn content = {"+"} handleClick = {props.handleClick}/>
            </div>
            <div className="row">
                <Btn content = {"4"} handleClick = {props.handleClick}/>
                <Btn content = {"5"} handleClick = {props.handleClick}/>
                <Btn content = {"6"} handleClick = {props.handleClick}/>
                <Btn content = {"-"} handleClick = {props.handleClick}/>
            </div>
            <div className="row">
                <Btn content = {"1"} handleClick = {props.handleClick}/>
                <Btn content = {"2"} handleClick = {props.handleClick}/>
                <Btn content = {"3"} handleClick = {props.handleClick}/>
                <Btn content = {"*"} handleClick = {props.handleClick}/>
            </div>
            <div className="row">
                <Btn content = {"."} handleClick = {props.handleClick}/>
                <Btn content = {"0"} handleClick = {props.handleClick}/>
                <Btn content = {"="} handleClick = {props.evaluate}/>
                <Btn content = {"/"} handleClick = {props.handleClick}/>
            </div>
            <div className="clear" onClick = {props.handleClear}>
                CLEAR
            </div>
        </div>
    )
}

export default Control