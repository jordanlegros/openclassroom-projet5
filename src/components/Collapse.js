import React, { useState, useRef } from "react";
import style from "../styles/Collapse.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'; // Changer pour faAngleDown

const Collapse = (props) => {
    const [open, setOpen] = useState(false);
    const contentRef = useRef(null);

    const toggle = () => {
        setOpen(!open);
    }

    const contentStyles = {
        height: open ? `${contentRef.current.scrollHeight}px` : "0px",
        overflow: "hidden",
        transition: "height 0.3s ease-in-out"
    };

    return (
        <div className="Collapse">
            <div className="Collapse__HeadBar">
                <div className="Collapse__HeadBar--title">{props.title}</div>
                <button className="Collapse__HeadBar--button" onClick={toggle}>
                    <FontAwesomeIcon icon={faAngleDown} className="Collapse__HeadBar--icon" />
                </button>
            </div>

            <div className="content-parent" ref={contentRef} style={contentStyles}>
                <div className='content'>{props.children}</div>
            </div>
        </div>
    );
};

export default Collapse;