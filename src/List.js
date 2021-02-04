import Card from './Card'
import './List.css'
import store from './store'


function List(props){
    let cards = props.cardIds.map((cardId, i) => {
        return store.allCards[cardId];
    })
    cards = cards.map(card =>{
        return <Card title={card.title} content={card.content} key={card.id} id ={card.id} delete={(key) => props.delete(key)} addRandom = {props.addRandom}></Card>
    })
    return(
        <section className='List'>
            <header className='List-header'>
                <h2>{props.header}</h2>
            </header>
            <div className='List-cards'>
                {cards}
                <button
                    type='button'
                    className='List-add-button'
                    onClick= {e => props.addRandom(props.id)}>
                    + Add Random Card
                </button>
            </div>
        </section>
    )
}

export default List