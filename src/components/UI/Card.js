/* we have to give props in card */
import classes from "./Card.module.css";
const Card = (props) => {
  return <div className={classes.Card}>{props.children}</div>;
};
export default Card;
