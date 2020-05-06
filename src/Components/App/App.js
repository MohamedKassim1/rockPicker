import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import RockPicker from '../RockPicker/RockPicker'
class App extends React.Component{
  clickHandler = ()=>{
    console.log('in clickHandler');
    this.props.dispatch({type: 'click'})
  }
  unClickHandler = ()=>{
    console.log('in clickHandler');
    this.props.dispatch({type: 'unClick'})
  }
  componentDidMount(){
    console.log('in componentDidMount', this.props);
    
  }
render() {
  console.log(this.props);
  
  return (
    <div className="App">
      <header className="App-header">
        <h2>App Picker Pro</h2>
        <p>Rocks: {this.props.reduxState}</p>
      </header>
      <RockPicker/>
    </div>
  );//end return
}//end render
}//end component

const putReduxStateOnProps = (reduxState) => ({reduxState});

export default connect(putReduxStateOnProps) (App);
