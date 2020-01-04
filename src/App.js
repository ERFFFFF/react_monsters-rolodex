import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
class App extends Component
{
  constructor() 
  {
    super();

    this.state = 
    {
      monsters: [],
      searchField: ''
    };
  }
  componentDidMount()
  {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  // => sert a bind le this.setstate (ou n'importe quel this dans la méthode) avec le this du component react, sinon erreur this is undifined
  handleChange = e =>
  {
    this.setState({ searchField: e.target.value})
  }
  render() 
  {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <SearchBox 
          placeholder="search monster" 
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
