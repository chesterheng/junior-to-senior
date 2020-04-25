import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchField, requestRobots } from '../action'
import '../style/App.css';

const App = ({ store }) =>{

    const [searchResults, setSearchResults] = useState([]);

    const text = useSelector(state => state.searchRobots.searchField)

    const robosUsers = useSelector(state => state.getRobotsReducer.users)
    
    const dispatch = useDispatch();

    const onSearchChange = (e) => {
        dispatch(setSearchField(e.target.value))
    };

    useEffect(() =>  {
        dispatch(requestRobots());
    }, [dispatch])

    useEffect(() => {
        let filteredRobots = robosUsers.filter(robots => {
            return(
                robots.name.toLowerCase().includes(text.toLowerCase())
            );
        });
        setSearchResults(filteredRobots);
    }, [text,robosUsers])

    const newRobot = searchResults;

    return(
        <div className="tc">
            <Scroll>
                <h1 className="f2">RoboFriends</h1>
                <SearchBox SearchChange={ onSearchChange }/>
            </Scroll>
                {
                    text === "" ? <CardList robots={ robosUsers }/> : <CardList robots={ newRobot }/>
                }
        </div>
    );
}

export default App;