import React from 'react'
import './ModeButton.css'

export const ModeButton = ({rounds}) => {
    return(
        <div className={'mode-container'}>
            <p className={'round-container'}>{rounds}</p>
        </div>
    )
}