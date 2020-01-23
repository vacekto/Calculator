import React from "react"
import "./Btn.css"

const Btn = (props) => {

        return(
            <div id="Btn" onClick={() => props.handleClick(props.content)}>
                {props.content}
            </div>
        )
    }

export default Btn