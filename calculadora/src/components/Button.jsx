import React from 'react'
import './Button.css'

export default props => {
    let css = 'btn'
    css += props.double ? ' double' : ''
    css += props.triple ? ' triple' : ''
    css += props.operacoes ? ' operacoes' : ''
    return (
        <button
            onClick={e => props.click && props.click(props.label)}
            className={css}>
            {props.label}
        </button>
    )
}
