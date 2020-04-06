import React from 'react';
import burgerLogo from '../../assets/Images/original.png';
import classes from './Logo.css';

const logo = props => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={burgerLogo} alt="Myburger"/>
    </div>
);

export default logo;