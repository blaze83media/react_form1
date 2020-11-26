import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


class App extends React.Component{
  constructor(props){
  super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      message: '',
      mailSent: false,
      error: null
    };
  }

handleFormSubmit(event) {

  event.preventDefault();
  console.log(this.state);

     //let headers = new Headers();

    //headers.append('Content-Type', 'application/json');
    //headers.append('Accept', 'application/json');
    //headers.append('Authorization', 'Basic ' + base64.encode(username + ":" +  password));
    //headers.append('Origin','http://localhost:3000');
   //   /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --user-data-dir="/tmp/chrome_dev_session" --disable-web-security
   const url = 'http://localhost/dashboard/a_bb/rxt_form1.php';
  //const API_PATH = 'http://portfolio.blaze83media.com/form_src/rxt_form1.php';
  axios({
    method: 'post',
    url,
    headers: { 'Content-Type': 'application/json' },
    data: this.state
  })
    .then(result => {
      this.setState({
        mailSent: result.data.sent
      })
    })
    .catch(error => this.setState({ error: error.message }));
}




render () {
  return (
     <div className="App">
                  <p>Contact Me</p>
                  <div>
                  <form action="#">
                  <label>First Name</label>
                  <input type="text" id="fname" name="firstname" placeholder="Your name.."
                  value={this.state.fname} 
                  onChange={e => this.setState({fname: e.target.value})}
                   />
                                    
                  <label>Last Name</label>
                  <input type="text" id="lname" name="lastname" placeholder="Your last name.." 
                  value={this.state.lname} 
                  onChange={e => this.setState({lname: e.target.value})}
                  />


                  <label>Email</label>
                  <input type="email" id="email" name="email" placeholder="Your email" 
                  value={this.state.email} 
                  onChange={e => this.setState({email: e.target.value})}
                  />


                  <label>Subject</label>
                  <textarea id="subject" name="subject" placeholder="Write something.."
                  value={this.state.message} 
                  onChange={e => this.setState({message: e.target.value})}
                  ></textarea>
                  
                  <input type="submit" value="Submit" onClick={e => this.handleFormSubmit(e)} />
                  </form>
                  </div>
      </div>
  );
 }
}
export default App;






