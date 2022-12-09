import React, { Component } from "react";
import Card from "../card/card.component";
import "./card-list.component.css";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    console.log(this.props);
    return (
      <div className="card-list">
        {monsters.map((monster) =>(
        
          <Card key={monster.id} monster={monster}/>
         
          )  
          
        )}
      </div>
    );
  }
}

export default CardList;
