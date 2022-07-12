import Card from './Card'
import classes from './CardList.module.css'

export default function CardList(props) {
  return (
    <ul className={classes.list}>
      {props.cards.map((card) => (
        <Card 
          key={card.id}
          id={card.id}
          name={card.name}
          image={card.image}
        />
      ))}
    </ul>
  );
}