import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import {useState, useEffect} from 'react'

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchByNameValue, setSearchByNameValue] = useState('');
  const [searchByCategoryValue, setSearchByCategoryValue] = useState('3');
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(monsters => setMonsters(monsters))
    .catch(error => console.log(error));
    
    console.log(fetch('https://jsonplaceholder.typicode.com/users').then(r =>r.json()));
    setFilteredMonsters(monsters);
  },[]);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchByNameValue));
    setFilteredMonsters(newFilteredMonsters);
  },[searchByNameValue, monsters]);

  const onChangeHandler = (event) => {
    const value = event.target.value.toLowerCase();
    console.log(event.target.name+':'+value);

    switch (event.target.name) {
      case 'search-by-name': setSearchByNameValue(value);break;
      case 'search-by-category': setSearchByCategoryValue(value);break;
      default: 
    }
  }

  return (
    <div className="App">
      <SearchBox onChangeHandler={onChangeHandler} name='search-by-name' placeholder='search by name'/>
      <SearchBox onChangeHandler={onChangeHandler} name='search-by-category' placeholder='search by category'/>
      <CardList monsters={filteredMonsters} category={searchByCategoryValue}/>
    </div>
  );
}

export default App;
