import Meal from "./meal";

export default function NutritionNav({ setFoodSearchActive, foodSearchActive, foodLog }) {

    const date = new Date();

    const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    };

    function handleOpenSearch() {
        setFoodSearchActive(!foodSearchActive);
    }

    function removeFood(id) {
        console.log(id)
      };


    return(
        <div className="h-full w-96 bg-white border-e-8 border-slate-700 flex flex-col items-center"> 
            
            <div className="flex items-center border-2 border-slate-700 m-2 rounded-s-full rounded-e-full">
                <button className="text-2xl border-r-2 border-slate-700 h-8 w-8 rounded-s-full hover:bg-slate-700 hover:text-white">{"<"}</button>
                <div className="text-2xl px-3">
                    {date.toLocaleString('en-US', options)}
                </div>
                <button className="text-2xl border-l-2 border-slate-700 h-8 w-8 rounded-e-full hover:bg-slate-700 hover:text-white">{">"}</button>
            </div>

            <Meal name="Overview" />
            {}
            <Meal name="Breakfast"/>
            {foodLog.filter((item) => item.meal === 'breakfast').map((item) => (
                <div className="flex flex-row gap-2 w-full justify-between px-2"> 
                <div className="text-md">{item.description} - {item.userGrams} g</div>
                <button onClick={removeFood(item.id)} className="bg-red-500 w-6 rounded-md text-white">X</button>
            </div>
            ))}
            <Meal name="Lunch"/>
            {foodLog.filter((item) => item.meal === 'lunch').map((item) => (
                <div className="flex flex-row gap-2 w-full justify-between px-2"> 
                <div className="text-md">{item.description} - {item.userGrams} g</div>
                <button onClick={removeFood(item.id)} className="bg-red-500 w-6 rounded-md text-white">X</button>
            </div>
            ))}
            <Meal name="Dinner"/>
            {foodLog.filter((item) => item.meal === 'dinner').map((item) => (
                <div className="flex flex-row gap-2 w-full justify-between px-2"> 
                <div className="text-md">{item.description} - {item.userGrams} g</div>
                <button onClick={removeFood(item.id)} className="bg-red-500 w-6 rounded-md text-white">X</button>
            </div>
            ))}
            <button className="border-2 w-40 bg-blue-500 text-white p-1 text-xl rounded-s-full rounded-e-full" onClick={handleOpenSearch}>+ Food</button>
        </div>
    )
}