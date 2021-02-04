import List from './List'
import './App.css'
import React from 'react'
import STORE from './store'

export default class App extends React.Component{
    state = {
      lists: [
        {
          id: '1',
          header: 'First list',
          cardIds: [ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ],
        },
        {
          id: '2',
          header: 'Second list',
          cardIds: ['b', 'c', 'd', 'f', 'h', 'i', 'k'],
        },
        {
          id: '3',
          header: 'Third list',
          cardIds: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm' ],
        },
        {
          id: '4',
          header: 'Fourth list',
          cardIds: [ 'l', 'm' ],
        }
      ],

    }

  render(){
    const lists = this.state.lists.map((list, i) => {
      return (
        <List
          id={this.state.lists[i].id} header={this.state.lists[i].header} cardIds={this.state.lists[i].cardIds} key={i} delete={this.handleDeleteClick} addRandom={this.handleRandomClick}
        /> 
      )
    })
    return(
      <main className='App'>
        <header className = 'App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {lists}
        </div>
      </main>
    )
  }



  handleDeleteClick = (key) => {
    let newLists = [...this.state.lists];
    newLists.forEach(list => list.cardIds = list.cardIds.filter(cardId => cardId !== key));
    this.setState({lists: newLists}); 
  }

  handleRandomClick = (listId) => {

    const newRandomCard = () => {
      const id = Math.random().toString(36).substring(2, 4)
        + Math.random().toString(36).substring(2, 4);
      return {
        id,
        title: `Random Card ${id}`,
        content: 'lorem ipsum',
      }
    }

    const newCard = newRandomCard();
    
    STORE.addCard(newCard.id, newCard.title, newCard.content);
    let newLists = [...this.state.lists];
    newLists[listId-1].cardIds.push(newCard.id);
    this.setState(
      {lists: newLists}
    )
  }
}