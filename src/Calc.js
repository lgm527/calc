import React from 'react';
import './Calc.css';

export default class Calc extends React.Component {

  state = {
    math: '',
    past: []
  }

  handleChange = (i) => {
    this.setState({math: this.state.math+i})
  }

  clearIt = event => {
    this.setState({
      math: ''
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    let result = this.state.math+'='+eval(this.state.math)
    this.setState({
      math: '',
      past: [...this.state.past, result]
    })
  }

  render(){

    const pastMath = this.state.past.map((eq, id) => <li key={id}>{eq}</li>)


    return(

      <div>

      <div className='calc'>

      <div className='title'>calculate if you dare...</div>

      <div className='nButton' onClick={event => this.clearIt(event)}>C</div>
      <div className='input' id='current'>{this.state.math}</div>


      <div className='nButton' onClick={() => this.handleChange('1')}>1</div>
      <div className='nButton' onClick={() => this.handleChange('2')}>2</div>
      <div className='nButton' onClick={() => this.handleChange('3')}>3</div>
      <div className='nButton' onClick={() => this.handleChange('4')}>4</div>
      <div className='nButton' onClick={() => this.handleChange('5')}>5</div>
      <div className='nButton' onClick={() => this.handleChange('6')}>6</div>
      <div className='nButton' onClick={() => this.handleChange('7')}>7</div>
      <div className='nButton' onClick={() => this.handleChange('8')}>8</div>
      <div className='nButton' onClick={() => this.handleChange('9')}>9</div>
      <div className='nButton' onClick={() => this.handleChange('0')}>0</div>
      <div className='nButton' onClick={() => this.handleChange('+')}>+</div>
      <div className='nButton' onClick={() => this.handleChange('-')}>-</div>
      <div className='nButton' onClick={() => this.handleChange('*')}>*</div>
      <div className='nButton' onClick={() => this.handleChange('/')}>/</div>
      <div className='nButton' onClick={event => this.handleSubmit(event)}>=</div>

      </div>

      <div className='past'><h3>Past:</h3> {pastMath}</div>

      </div>
    )
  }

}
