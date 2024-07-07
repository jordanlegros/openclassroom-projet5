import React, { useState, useRef } from "react";
import style from "../styles/Collapse.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

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



    let renderedContent;
    if (Array.isArray(props.text)) {
        renderedContent = (
            <div className="content">
                {props.text.map((item, index) => (
                    <React.Fragment key={index}>
                        {index > 0 && <br />} {/* Ajoute un <br> entre chaque élément sauf avant le premier */}
                        {item}
                    </React.Fragment>
                ))}
            </div>
        );
    } else {
        renderedContent = <div className="content">{props.text}</div>;
    }



    return (
        <div className="Collapse">
            <div className="Collapse__HeadBar">
                <div className="Collapse__HeadBar--title">{props.title}</div>
                <button className="Collapse__HeadBar--button" onClick={toggle}>
                    <FontAwesomeIcon icon={faAngleDown} className="Collapse__HeadBar--icon" />
                </button>
            </div>

            <div className="content-parent" ref={contentRef} style={contentStyles}>
                {renderedContent}
            </div>
        </div>
    );
};

export default Collapse;
