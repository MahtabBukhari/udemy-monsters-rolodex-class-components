import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
    // console.log('1')
  }
  // FOR BETTER PERFORMANCE //

  // the reason to define this function outside of the render() function is that in this way
  // onSearchChange() function is iniialized only one time as the class is initialized
  // if we define this function in side the render() function then this function will be
  // initialized every time the render() function is re-render
  onSearchChange = (event) => {
    this.setState(
      () => {
        const searchField = event.target.value.toLowerCase();
        return { searchField };
      }
      // ()=>{
      //   console.log(this.state.searchField)
      // }
    );
  };

  componentDidMount() {
    // console.log('3')

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users }; //shallow copy here means that it simply goes to the state object and find the monsters key and replace its value
        })
      )
      .catch((err) => console.log(err));
  }

  render() {
    // console.log('2')
    // FOR BETTER PERFORMANCE //

    // destructuring the state is better approach
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filterdMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          className="monsters-search-box"
          onEventHandler={onSearchChange}
          placeholder="search monsters"
        />

        <CardList monsters={filterdMonsters} />
      </div>
    );
  }
}

export default App;
