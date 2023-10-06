import { setLogLevel } from "@firebase/firestore";
import { useState } from "react";
import FoodResult from "./food-result";

export default function FoodSearch({ foodLog, setFoodLog, foodSearchActive, setFoodSearchActive }) {

    const [search, setSearch] = useState();
    const [searchResults, setSearchResults] = useState();

    const handleInputChange = (event) => {
        setSearch(event.target.value);
    }

    const params = {
        api_key: process.env.REACT_APP_USDA_API_KEY,
        query: `${search}`,
        dataType: ["Survey (FNDDS)"],
        pagesize: 10,
      }
    
    const api_url = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${encodeURIComponent(params.api_key)}&query=${encodeURIComponent(params.query)}&pageSize=${encodeURIComponent(params.pagesize)}`

    async function fetchSearch() {
        const response = await fetch(api_url);
        return await response.json();
    }

    function startSearch() {
        console.log(search)
        fetchSearch().then(data => {
            console.log(data);
            console.log(data.foods);
            setSearchResults(data.foods);
        })
    }

    function handleAddFood(food) {
        
        const updatedFoodLog = [...foodLog, food];
        setFoodLog(updatedFoodLog);
        console.log(foodLog);
        setFoodSearchActive(!foodSearchActive);
    }
    
    return(
        <div className="flex flex-col w-full items-center pt-4">
            <input className="border-2 border-black w-60" placeholder="Search for food..." type="text" value={search} onChange={handleInputChange}/>
            <button onClick={startSearch}>Search</button>
            <div className="w-full flex flex-col items-center">
                {searchResults != undefined && searchResults.map((food) => (
                    <FoodResult food={food} onAddFood={handleAddFood} />
                ))}
            </div>
        </div>
    )
}
