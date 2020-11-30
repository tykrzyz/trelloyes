import Card from './Card'
import './List.css'


function List(props){
    const CARDS = props.cards.map(card =>{
        return <Card title={card.title} content={card.content} key={card.id}></Card>
    })
    return(
        <section className='List'>
            <header className='List-header'>
                <h2>{props.header}</h2>
            </header>
            <div className='List-cards'>
                {CARDS}
                <button
                    type='button'
                    className='List-add-button'>
                    + Add Random Card
                </button>
            </div>
        </section>
    )
}

export default List