import React from "react"
import "./View.css"

const View = (props) => {    
    return(
        <div id="View">
            <div className="value">
                <div>{props.state.value}</div>
            </div>
            <div className="input">
                <div>{props.state.input}</div>
            </div>
        </div>
    )
}

export default View