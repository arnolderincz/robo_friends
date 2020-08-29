import React, {Component} from 'react';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll';

class App extends Component{
    constructor(){
        super();
        this.state = {
          robots: [],
            searchField: ''  
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
        .then(users => this.setState({robots: users}))
   
    }

    onSearchChange = (event) =>{
        this.setState({searchField: event.target.value})
    }

    render(){
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
        if(this.state.robots.length === 0){
            return <h1>Loading...</h1>
        }
        return (
        <div className="tc">
            <h1 className="tc">Robo Friends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
                 <Cardlist robots={filteredRobots}/>
            </Scroll>
           
        </div>)
    }
}

export default App;