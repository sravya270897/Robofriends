import React,{Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
//import {robots} from './robots';
import Scroll from '../components/Scroll';
import './App.css';



class App extends Component {
  constructor () {
  	super()
  	this.state = {
  		robots:[],
	    searchField:''
  	}
  }	
  componentDidMount () {
  	fetch('https://jsonplaceholder.typicode.com/users')
  	.then(response => response.json())
  	.then(users => this.setState({robots:users}));
  	
  }
  onSearch = (event) => {
  	this.setState({searchField : event.target.value})
  }

	render() {
    const {robots,searchField} = this.state;
		const filterRobo = robots.filter(robot => {
  	          return(robot.name.toLowerCase().includes(searchField.toLowerCase()));
      })
	 if(robots.length === 0){
	 	return <h1> Loading </h1>
     }	else {
 	       return (
                <div className ='tc'> 	
		            <h1 className = 'f2'>RoboFriends</h1>
		            <SearchBox searchChange={this.onSearch} />
		            <Scroll>
		            <CardList robots={filterRobo} />
		            </Scroll>
                </div>    
	        );
        }
    }
}  
	export default App;