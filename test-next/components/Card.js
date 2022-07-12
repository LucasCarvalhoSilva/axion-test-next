import classes from "./Card.module.css"

export default function Card(props) {
  return(
    <li clasName={classes.item}>
        <div clasName={classes.image} >
          <img src={props.image}/>
          <figcaption>{props.name}</figcaption>
        </div>
    </li>
  )
}