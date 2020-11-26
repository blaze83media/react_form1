import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


class Calc extends React.Component {
constructor(props){
  super(props);
    this.state = {
      one: '',
      two: '',
    }
  }

componentDidMount () {  //this function only works for keys 1  - 9
	window.addEventListener("keydown", function (e){
	if(e.charCode || e.keyCode == 49) {document.getElementById('screen1').value += '1';}
	if(e.charCode || e.keyCode === 50) {document.getElementById('screen1').value += '2';}
	if(e.charCode || e.keyCode ===51) {document.getElementById('screen1').value += '3';}
	if(e.charCode || e.keyCode === 52) {document.getElementById('screen1').value += '4';}
	if(e.charCode || e.keyCode === 53) {document.getElementById('screen1').value += '5';}
	if(e.charCode || e.keyCode === 54) {document.getElementById('screen1').value += '6';}
	if(e.charCode || e.keyCode === 55) {document.getElementById('screen1').value += '7';}
	if(e.charCode || e.keyCode === 56) {document.getElementById('screen1').value += '8';}
	if(e.charCode || e.keyCode === 57) {document.getElementById('screen1').value += '9';}
	if(e.charCode || e.keyCode === 48) {document.getElementById('screen1').value += '0';}


	if(e.charCode || e.keyCode === 46) {document.getElementById('screen1').value += '.';}
	if(e.charCode || e.keyCode === 47) {document.getElementById('screen1').value += '/';}
	if(e.charCode || e.keyCode === 42) {document.getElementById('screen1').value += '*';}
	if(e.charCode || e.keyCode === 40) {document.getElementById('screen1').value += '(';}
	if(e.charCode || e.keyCode === 41) {document.getElementById('screen1').value += ')';}
	if(e.charCode || e.keyCode === 60) {document.getElementById('screen1').value += '=';}
	if(e.charCode || e.keyCode === 43) {document.getElementById('screen1').value += '+';}
	if(e.charCode || e.keyCode === 45) {document.getElementById('screen1').value += '-';}
	if(e.charCode || e.keyCode === 13) {document.getElementById('screen1').value += 'Enter';}

})
}


calcVal = (value) => {document.getElementById('screen1').value += value;}
sqrtCal = () => {document.getElementById('screen1').value = Math.sqrt(eval(document.getElementById('screen1').value));}
totalAns = () => {document.getElementById('screen1').value = eval(document.getElementById('screen1').value);}
delAll = () => {document.getElementById('screen1').value = window.location.reload();}
saveAns = () => {sessionStorage.setItem('x', document.getElementById('screen1').value);}
recallAns = () => {document.getElementById('screen1').value = sessionStorage.getItem('x');}
cancelRecall = () => {sessionStorage.clear('x'); document.getElementById('screen1').value = window.location.reload();}


//document.getElementById('f1').addEventListener("keyPress", nmb1);


 	



render () {
  return (
     <div className="container justify-content-center Calc1" >
                  <p>Calculator</p>
           <form className='formbody' id='f1' >
           
           <div className='row col-lg align-items-center '>
           <input type='text' className='screen input-group' id='screen1' readOnly />
           </div>

           <div className='row'>
           <div className='col-sm'>
           <input type='button' className='btn-lg btn-primary bt1' id='one' value='1' onClick={this.calcVal.bind(this, '1')} />
           <input type='button' className='btn-lg btn-primary bt1' id='two' value='2' onClick={this.calcVal.bind(this, '2')} />
           <input type='button' className='btn-lg btn-primary bt1' id='three' value='3' onClick={this.calcVal.bind(this,'3')} />
           </div>
           </div>

           <div className='row col-sm'>
           <input type='button' className='btn-lg btn-primary bt1' id='four' value='4' onClick={this.calcVal.bind(this, '4')} />
           <input type='button' className='btn-lg btn-primary bt1' id='five' value='5' onClick={this.calcVal.bind(this, '5')} />
           <input type='button' className='btn-lg btn-primary bt1' id='six' value='6' onClick={this.calcVal.bind(this, '6')} />
           </div>

           <div className='row col-sm'>
           <input type='button' className='btn-lg btn-primary bt1' id='seven' value='7' onClick={this.calcVal.bind(this, '7')} />
           <input type='button' className='btn-lg btn-primary bt1' id='eight' value='8' onClick={this.calcVal.bind(this, '8')} />
           <input type='button' className='btn-lg btn-primary bt1' id='nine' value='9' onClick={this.calcVal.bind(this, '9')} />
           </div>

            <div className='row col-sm'>
           <input type='button' className='btn-lg btn-primary bt1' id='plus' value='+' onClick={this.calcVal.bind(this, '+')} />
           <input type='button' className='btn-lg btn-primary bt1' id='minus' value='-' onClick={this.calcVal.bind(this, '-')} />
           <input type='button' className='btn-lg btn-primary bt1' id='times' value='*' onClick={this.calcVal.bind(this, '*')} />
           </div>

            <div className='row col-sm'>
           <input type='button' className='btn-lg btn-primary bt1' id='divide1' value='/' onClick={this.calcVal.bind(this, '/')} />
           <input type='button' className='btn-lg btn-primary bt1' id='openC' value='(' onClick={this.calcVal.bind(this, '(')}  />
           <input type='button' className='btn-lg btn-primary bt1' id='closeC' value=')' onClick={this.calcVal.bind(this, ')')}  />
           </div>


           <div className='row col-sm'>
           <input type='button' className='btn-lg btn-primary bt1' id='divide' value='SqRt' onClick={this.sqrtCal} />
           <input type='button' className='btn-lg btn-primary bt1' id='cancel' value='C' onClick={this.delAll} />
           <input type='button' className='btn-lg btn-primary bt1' id='equal' value='=' onClick={this.totalAns} />
           </div>

           <div className='row col-sm'>
           <input type='button' className='btn-lg btn-primary bt1' value = 'M' onClick = {this.saveAns}  />
           <input type='button' className='btn-lg btn-primary bt1' value = 'MR' onClick = {this.recallAns}  />
           <input type='button' className='btn-lg btn-primary bt1' value = 'MC' onClick = {this.cancelRecall}  />
           </div>

           <div className='row col-sm'>
           <input type='reset' className='btn-lg btn-primary  bt1'  />
           </div>

           </form>
    </div>

  )
 }
}

export default Calc;