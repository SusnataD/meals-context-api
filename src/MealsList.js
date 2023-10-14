import { useContext } from "react";
import MealsContext from "./store/mealsContext";

const MealsList = () => {
    const ctx = useContext(MealsContext);

    return(
        <div>
            <h2>Meals List for Today</h2>
            {ctx.meals.map((item)=>{
                return(
                    <li key={Math.random()}>{item}</li>
                )
            })}
        </div>
    )
}

export default MealsList;