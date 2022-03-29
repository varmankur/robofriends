import React, { useState, useEffect } from "react";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import CardList from "../components/CardList";
import './App.css'
import ErrorBoundry from "../components/ErrorBoundry";

function App() {

    const [robots, setRobots] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchField, setSearchField] = useState('');
    

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
         .then(response => response.json())
         .then(users => {setRobots(users)})
         .catch((err) => {
            console.log(err);
          })
         .finally(() => {
            setLoading(false);
          });
    },[])

    const onSearchChange = (event) => {
        setSearchField(event.target.value)

    }
    
    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
    if (loading){
        return (<div className="tc"><h1>loading....</h1></div>)
    } else {
        return (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChanged={onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
    }
}

export default App;