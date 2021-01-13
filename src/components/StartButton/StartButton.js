import React from 'react'
import './StartButton.css'

export const StartButton = ({startOn, start}) => start ? null : <div className={'start-button'} onClick={startOn}>Start</div>