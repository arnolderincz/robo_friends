import React from 'react';
import Cardlist from './Cardlist';
import {robots} from './robots.js';
import SearchBox from './SearchBox.js';


const App = () => {
    return (
    <div className="tc">
        <h1 className="tc">Robo Friends</h1>
        <SearchBox />
        <Cardlist robots={robots}/>
    </div>)
}

export default App;