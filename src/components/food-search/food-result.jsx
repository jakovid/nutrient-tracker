import { v4 as uuidv4 } from 'uuid';

export default function FoodResult({ food, onAddFood }) {

    const handleAddFood = () => {
        if(food.meal == undefined){
            window.alert('Please select a meal.')
            return;
        }
        if(food.userGrams == undefined || food.userGrams <= 0){
            window.alert('Please select total grams.')
            return;
        }
        let newFood = food
        newFood.id = uuidv4();
        console.log(newFood)
        onAddFood(newFood);
    }

    return(
        <div className="border-2 px-1 my-1 w-10/12 flex flex-row justify-between gap-2">
            <div>{food.brandName} {food.description}</div>
            <div className="flex flex-row gap-2">
                <label>Grams:
                    <input type="number" value={food.userGrams} onChange={(e) => (food.userGrams = e.target.value)} className="border-2 w-12" />
                </label>
                <label>Meal:
                    <select onChange={(e) => (food.meal = e.target.value)}>
                        <option value="select">Select</option>
                        <option value="breakfast">Breakfast</option>
                        <option value="lunch">Lunch</option>
                        <option value="dinner">Dinner</option>
                    </select>
                </label>
                <button className="bg-blue-500 text-white pl-2 pr-2 rounded-md" onClick={handleAddFood}>Add Food</button>
            </div>
        </div>
    )

}