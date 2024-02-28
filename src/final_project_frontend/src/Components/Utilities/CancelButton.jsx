import React, { useState } from 'react';

const styles = {
    padding: '5px 12px',
    border: 'none',
    fontSize: '17px',
    color: '#fff',
    borderRadius: '20px',
    letterSpacing: '2px',
    fontWeight: '700',
    textTransform: 'uppercase',
    transition: '0.5s',
    transitionProperty: 'box-shadow',
    background: 'rgb(40,224,12)',
    boxShadow: '0 0 25px rgb(107,70,193)',
};

const hoverStyles = {
    boxShadow: '0 0 5px rgb(40,224,12), 0 0 25px rgb(40,224,12), 0 0 50px rgb(40,224,12), 0 0 100px rgb(40,224,12)',
};

const CancelButton = ({ onClick}) => {
    const [isHovered, setIsHovered] = useState(false)


    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <button
            onClick={onClick}
            style={isHovered ? { ...styles, ...hoverStyles } : styles}
            onMouseEnter={() => handleMouseEnter()}
            onMouseLeave={() => handleMouseLeave()}
        >
             Cancel
        </button>
    );
}


export default CancelButton;
