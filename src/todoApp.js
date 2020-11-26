import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


class TodoApp extends React.Component {
constructor(props){
  super(props);
    this.state = {
      activity: '',
      date: '',
      date: ''
    }
  }

submitForm(event) {

}





render () {
  return (
  	<div className="container todoApp1" >
                  <p>TodoApp</p>
           <form className='todobody' id='todo1' >

           <div className='row col-lg align-items-center'>
	           <input type='text' className='form-control' id='activity' placeholder='Activity' value={this.state.activity} onChange={e => this.setState({activity: e.target.value})} />
	           <input type='date' className='form-control' id='date' placeholder='Date' value={this.state.date} onChange={e => this.setState({date: e.target.value})} />
	           <input type='time' className='form-control' id='time' placeholder='Time' value={this.state.time} onChange={e => this.setState({time: e.target.value})} />
	           
	           <input type='submit' className='btn-sm btn-primary' id='addtask' value='Add Task' onClick={e => this.submitForm(e)} />
	           
           </div>
           
           </form>
    </div>

  	)
}




}

export default TodoApp;