import { useContext, useState } from 'react';
import './App.css';
import MealsList from './MealsList';
import MealsContext from './store/mealsContext';
import MealCounter from './MealCounter';


function App() {
  const ctx = useContext(MealsContext);
  const [mealValue, setMealValue] = useState('');
  const [disabled, setDiabled] = useState(true);

  const mealChangeHandler = (e) => {
    if (e.target.value !== '') {
      setDiabled(false);
      setMealValue(e.target.value)
    }
  }

  const ConsoleHandler = (msg) => {
    console.log(msg);
  }

  return (
    <div className="App">
      {ctx.meals.length > 0 && <MealsList />}
      {ctx.meals.length === 0 && <h2>No Meals for today</h2>}
      <input type='text' value={mealValue} onChange={mealChangeHandler} />
      <button
        disabled={disabled}
        onClick={() => {
          ctx.setMeals([...ctx.meals, mealValue]);
          setMealValue('');
          setDiabled(true)
        }}>
        Add Meal Now!
      </button>
      <MealCounter onCheckConsole={ConsoleHandler}/>
    </div>
  );
}

export default App;
