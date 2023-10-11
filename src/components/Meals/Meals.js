import { Fragment } from "react";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

const Meals = () => {
  return (
    <div style={{backgroundColor:'white'}}>

    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
    </div>
  );
};
export default Meals;
