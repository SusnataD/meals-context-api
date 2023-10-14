import { useState } from "react"
import MealsContext from "./mealsContext";


const todaysMeals = []

const MealProvider = (props) => {
    const [meals, setMeals] = useState(todaysMeals);

    return(
    <MealsContext.Provider value={{meals, setMeals}}>
        {props.children}
    </MealsContext.Provider>
    )
}

export default MealProvider;