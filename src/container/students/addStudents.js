import React, { Component } from "react";

export default class AddStudents extends Component {
	render() {
	  return (
		
		<div>
		<input type='button' className='float-righ mb-4 btn-sm btn-success'  value='Add todo item'  data-toggle="modal" data-target="#todoModal" />

		<div className='modal fade' id='todoModal'>
		 <div className="modal-dialog modal-dialog-centered" role="document">
    	  <div className="modal-content">
			
			<div className="modal-header"> 
					
				<h4>Add New Todo Item </h4>
				<button type="button" className="close" data-dismiss="modal" aria-label="Close">
          			<span aria-hidden="true">&times;</span>
        		</button>
			</div>

		

			<div className="modal-body">
				<input type='text' className='form-control' id='activity11' name='activity' value={this.props.newStudentData.activity} onChange={this.props.onChangeAddStudentHandler} placeholder='Enter Activity' />
				<input type='date' className='form-control' id='activity11' name='date'  value={this.props.newStudentData.data} onChange={this.props.onChangeAddStudentHandler} />
				<br/>
				<input type='time' className='form-control' id='activity11' name='time'  value={this.props.newStudentData.time} onChange={this.props.onChangeAddStudentHandler} />
			</div>				
			

			<div className="modal-footer">
				<input type='button' className='btn-sm btn-primary' value='Add' onClick={() => this.props.addStudent()} />
				<input type='button' className='btn-sm btn-secondary' value='Cancel' data-dismiss="modal" />
			</div>

		  </div>
		 </div>
		 </div>
		</div>
	   )
	}	
}