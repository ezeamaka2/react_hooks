import React, { useRef, useImperativeHandle} from 'react'

import classes from './Input.module.css'

const Input = React.forwardRef((props, ref) => {
    const userRef = useRef();

    const activate = () =>{
        userRef.current.focus();
    }

    useImperativeHandle(ref, () =>{
        return{
            focus:activate,
        }
    })

    return (
        <div
          className={`${classes.control} ${
            props.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor={props.id}>{props.label}</label>
          <input
            ref={userRef}
            type={props.type}
            id={props.id}
            defaultValue={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur}
          />
        </div>
    )
})

export default Input
