
import './App.css';
import Destination from './components';
import {Component} from 'react'
const DestinationDetailsArray=[
  {
  name:"NewYork",
  image:"http://source.unsplash.com/200x150?newyork"
},
  {
  name:"India",
  image:"http://source.unsplash.com/200x150?India"
},
  {
  name:"Bali",
  image:"http://source.unsplash.com/200x150?bali-Indonesia"
},
  {
  name:"Dubai",
  image:"http://source.unsplash.com/200x150?dubai"
},
  {
  name:"norway",
  image:"http://source.unsplash.com/200x150?norway"
},
  {
  name:"USA",
  image:"http://source.unsplash.com/200x150?USA"
}
]
class  App extends Component {
  state ={userInput:""}
  inputsearch=(event)=>{
    this.setState({userInput:event.target.value})
  }
  render(){
    const {userInput}=this.state
    const destinationSearch=DestinationDetailsArray.filter((eachdestination)=>
      eachdestination.name.includes(userInput)
    )
    return (
      <div className='container'>
        <h1>Destination Search</h1>
        <input className='input' type='search' onChange={this.inputsearch} />
        <ul className='ulitem'>
              {destinationSearch.map((eachdestination)=>
              <li className='liItem' >
              <Destination destinationdetails={eachdestination} />
               </li>
              )} 
          </ul>
        </div>
    );
  }
  
}

export default App;
