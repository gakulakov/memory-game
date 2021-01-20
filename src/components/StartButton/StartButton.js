import React from 'react'
import './StartButton.css'
import { connect } from "react-redux";
import { startButton } from '../../redux/actions/action'


const StartButton = ({start, startButton}) => start ? null : <div className={'start-button'} onClick={startButton}>Start</div>


const mapStateToProps = (state) => {
    return{
    start: state.rebus.start
    }
}

const mapDispatchToProps = {
    startButton 
  }

export default connect(mapStateToProps, mapDispatchToProps)(StartButton);