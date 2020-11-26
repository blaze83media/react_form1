import React, {Component} from "react";
import axios from "axios";
import "../../App.css";
import AddStudents from "./addStudents";


//SHOW DATA
export default class Student extends Component {
	constructor(props){
		super(props);
		this.state = {
			students: [],
			newStudentData: {
				activity:"",
				date:"",
				time:""
			},
			isLoading: false,
			status:"",
			newStudentModal:false,
		}
	}

	componentDidMount() {
		this.getStudents();
	}

	getStudents() {
		axios.get("http://localhost:8000/api/students").then((response) => {
			if (response.status === 200) { 
				this.setState({
					students: response.data.data ? response.data.data : [],
		        });		       
		    }

		    if (response.data.status === "failed" && response.data.success === false) {
		    	this.setState({
		    		noDataFound: response.data.message,
		    	});
		    }
		
		});		
	}
	
	toggleNewStudentModal = () => {this.setState({
		newStudentModal: !this.state.newStudentModal,
		});
	};

	onChangeAddStudentHandler = (e) => {
		let { newStudentData } = this.state;
		newStudentData[e.target.name] = e.target.value;
		this.setState({ newStudentData });
	};

	addStudent = () => {
		axios.post("http://localhost:8000/api/create-student", this.state.newStudentData)
		.then((response) => {
			const { students } =this.state;
			const newStudents =[...students];
			newStudents.push(response.data);
			this.setState({
				students: newStudents,
				newStudentModal: false,
				newStudentData: {
					activity:"",
					date:"",
					time:"",
				},
			}, 

			() => this.getStudents()
			
			);
		 });
		};
	

	render() {
		const {newStudentData, noDataFound, students} = this.state;
			let studentsDetails = [];
			
			if(students.length) {
				studentsDetails = students.map((student) => {
					return (
						<tr key = {student.id} >
							<td> {student.activity} </td>
							<td> {student.date} </td>
							<td> {student.time} </td>
							
							<td> 
								<input type='button' className='btn-sm btn-success edit1' value='Edit' />
								<input type='button' className='btn-sm btn-danger del1' value='Del' />
							</td>

						</tr>


				    );

			    });
			}

			if (this.state.isLoading) {
				return <div className="spinner-border text-center" role="status" > <span className="sr-only"> Loading... </span> </div>
			}
	
		return(
			<div className="studentC container mt-4">
				<h4 className= "font-weigh-bold" id='t1'> Todo App </h4>
				
				<div className='font-weight-bold'>	
					<AddStudents 

						toggleNewStudentModal={this.toggleNewStudentModal}
						newStudentModal={this.state.newStudentModal}
						onChangeAddStudentHandler={this.onChangeAddStudentHandler}
						addStudent={this.addStudent}
						newStudentData={newStudentData}

					/>  
				</div>

				<table className ="table table-striped">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Activity</th>
							<th scope="col">Time</th>
							<th scope="col">Date</th>
							<th scope="col">Actions</th>
						</tr>
					</thead>


					{students.length === 0 ? (
					<tbody> 
						 {noDataFound} 
					</tbody>
					) : (
					<tbody> 
						{studentsDetails} 
					</tbody>
					)}

				</table>

			</div>				
		);

	}

}

