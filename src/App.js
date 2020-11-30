import List from './List'
import './App.css'

function App(props) {
  const ALLCARDS = props.store.allCards;
  const LISTS = props.store.lists.map(list =>{
    let theseCards = list.cardIds.map(id => {
      return ALLCARDS[id];
    })
    return <List header={list.header} cards={theseCards}></List>
  })
  return (
    <main className='App'>
      <header className = 'App-header'>
        <h1>Trelloyes!</h1>
      </header>
      <div className='App-list'>
        {LISTS}
      </div>
    </main>
  );
}

export default App;
