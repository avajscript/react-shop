import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Dropdown = ({ title = "", color = "#5a90e3", children }) => {
    // ref used to get dropdown element height
    const dropdownRef = useRef(null);
    // height for the dropdown
    const [height, setHeight] = useState("0px");
    const [shown, setShown] = useState(false);
    // chevron icon
    const [iconRotate, setIconRotate] = useState("0");
    const toggleDropdown = (e) => {
        if (shown) {
            setIconRotate("0");
            setShown(false);
            dropdownRef.current.style.maxHeight = null;
        } else {
            setIconRotate("180");
            setShown(true);
            dropdownRef.current.style.maxHeight =
                dropdownRef.current.scrollHeight + "px";
        }
    };

    return (
        <div className="dropdown">
            <div className="dropdown-header" onClick={toggleDropdown}>
                <FontAwesomeIcon
                    icon={faChevronDown}
                    style={{
                        color: color,
                        transform: `rotate(${iconRotate}deg)`,
                    }}
                    className="dropdown-icon"
                />
                <h5 style={{ color: color }}>{title}</h5>
            </div>
            <div ref={dropdownRef} className="dropdown-content">
                {children}
            </div>
        </div>
    );
};

export default Dropdown;
