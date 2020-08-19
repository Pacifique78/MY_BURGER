import React from 'react';
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Meat', type: 'meat'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'}
]
const buildControls = props => (
    <div className={classes.BuildControls}>
    <p>Current price: {props.price}</p>
        {controls.map(ctrl => (
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label}
            added={() => props.add(ctrl.type)}
            removed={() => props.remove(ctrl.type)}
            disabled={props.disabled[ctrl.type]} />
        ))}
        <button className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.ordered}>{props.isAuth? 'ORDER NOW' : 'SIGNIN TO ORDER'}</button>
    </div>
);

export default buildControls;