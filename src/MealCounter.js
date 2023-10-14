import { useContext } from "react"
import MealsContext from "./store/mealsContext"

const MealCounter = (props) => {
    const ctx = useContext(MealsContext);

    return(
        <div>
            Meals Count :: {ctx.meals.length}
            <button onClick={props.onCheckConsole("hello")}>Lifting State Up!</button>
        </div>
    )
}

export default MealCounter