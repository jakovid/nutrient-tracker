import './App.css';
import BuildHeader from './components/header/header';
import NutritionNav from './components/nutrition-nav/nutrition-nav';
import NutritionOverview from './components/nutrition-display/nutrition-overview';
import FoodSearch from './components/food-search/food-search';
import { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

function App() {

  const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
  }

  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  const [foodSearchActive, setFoodSearchActive] = useState(false);
  const [user, setUser] = useState();
  const [micronutrients, setMicronutrients] = useState();
  const [foodLog, setFoodLog] = useState([]);

  const totalProtein = foodLog.reduce((total, item) => total + item.foodNutrients.find((nutrient) => nutrient.nutrientName === 'Protein').value * item.userGrams/100, 0);
  const totalCarbs = foodLog.reduce((total, item) => total + item.foodNutrients.find((nutrient) => nutrient.nutrientName === 'Carbohydrate, by difference').value * item.userGrams/100, 0);
  const totalFat = foodLog.reduce((total, item) => total + item.foodNutrients.find((nutrient) => nutrient.nutrientName === 'Total lipid (fat)').value * item.userGrams/100, 0);

  const totalVitaminA = Math.round(foodLog.reduce((total, item) => {
      const nutrient = item.foodNutrients.find((nutrient) => nutrient.nutrientName === 'Vitamin A, RAE');
      if (nutrient) {
        return total + nutrient.value * (item.userGrams / 100);
      }
      return total;
    }, 0)
  );

  const totalVitaminC = Math.round(foodLog.reduce((total, item) => {
    const nutrient = item.foodNutrients.find((nutrient) => nutrient.nutrientName === 'Vitamin C, total ascorbic acid');
    if (nutrient) {
      return total + nutrient.value * (item.userGrams / 100);
    }
    return total;
  }, 0)
);

  const totalVitaminD = Math.round(foodLog.reduce((total, item) => {
    const nutrient = item.foodNutrients.find((nutrient) => nutrient.nutrientName === 'Vitamin D (D2 + D3)');
    if (nutrient) {
      return total + nutrient.value * (item.userGrams / 100);
    }
    return total;
  }, 0)
  );

  const totalVitaminE = Math.round(foodLog.reduce((total, item) => {
    const nutrient = item.foodNutrients.find((nutrient) => nutrient.nutrientName === 'Vitamin E (alpha-tocopherol)');
    if (nutrient) {
      return total + nutrient.value * (item.userGrams / 100);
    }
    return total;
  }, 0)
  );

  const totalVitaminK = Math.round(foodLog.reduce((total, item) => {
    const nutrient = item.foodNutrients.find((nutrient) => nutrient.nutrientName === 'Vitamin K (phylloquinone)');
    if (nutrient) {
      return total + nutrient.value * (item.userGrams / 100);
    }
    return total;
  }, 0)
  );

  const totalThiamin = Math.round(foodLog.reduce((total, item) => {
    const nutrient = item.foodNutrients.find((nutrient) => nutrient.nutrientName === 'Thiamin');
    if (nutrient) {
      return total + nutrient.value * (item.userGrams / 100);
    }
    return total;
  }, 0)
  );

  const totalRiboflavin = Math.round(foodLog.reduce((total, item) => {
    const nutrient = item.foodNutrients.find((nutrient) => nutrient.nutrientName === 'Riboflavin');
    if (nutrient) {
      return total + nutrient.value * (item.userGrams / 100);
    }
    return total;
  }, 0)
  );

  const totalNiacin = Math.round(foodLog.reduce((total, item) => {
    const nutrient = item.foodNutrients.find((nutrient) => nutrient.nutrientName === 'Niacin');
    if (nutrient) {
      return total + nutrient.value * (item.userGrams / 100);
    }
    return total;
  }, 0)
  );

  const totalPantothenicAcid= Math.round(foodLog.reduce((total, item) => {
    const nutrient = item.foodNutrients.find((nutrient) => nutrient.nutrientName === 'Pantothenic acid');
    if (nutrient) {
      return total + nutrient.value * (item.userGrams / 100);
    }
    return total;
  }, 0)
  );

  const totalVitaminB6 = Math.round(foodLog.reduce((total, item) => {
    const nutrient = item.foodNutrients.find((nutrient) => nutrient.nutrientName === 'Vitamin B-6');
    if (nutrient) {
      return total + nutrient.value * (item.userGrams / 100);
    }
    return total;
  }, 0)
  );

  // 
  const totalBiotin = Math.round(foodLog.reduce((total, item) => {
    const nutrient = item.foodNutrients.find((nutrient) => nutrient.nutrientName === 'Riboflavin');
    if (nutrient) {
      return total + nutrient.value * (item.userGrams / 100);
    }
    return total;
  }, 0)
  );

  const totalFolate = Math.round(foodLog.reduce((total, item) => {
    const nutrient = item.foodNutrients.find((nutrient) => nutrient.nutrientName === 'Folate, total');
    if (nutrient) {
      return total + nutrient.value * (item.userGrams / 100);
    }
    return total;
  }, 0)
  );

  const totalVitaminB12= Math.round(foodLog.reduce((total, item) => {
    const nutrient = item.foodNutrients.find((nutrient) => nutrient.nutrientName === 'Vitamin B-12');
    if (nutrient) {
      return total + nutrient.value * (item.userGrams / 100);
    }
    return total;
  }, 0)
  );

  const totalCalcium = Math.round(foodLog.reduce((total, item) => {
    const nutrient = item.foodNutrients.find((nutrient) => nutrient.nutrientName === 'Calcium, Ca');
    if (nutrient) {
      return total + nutrient.value * (item.userGrams / 100);
    }
    return total;
  }, 0)
  );

  // 
  const totalChromium = Math.round(foodLog.reduce((total, item) => {
    const nutrient = item.foodNutrients.find((nutrient) => nutrient.nutrientName === 'Riboflavin');
    if (nutrient) {
      return total + nutrient.value * (item.userGrams / 100);
    }
    return total;
  }, 0)
  );

  const totalCopper = Math.round(foodLog.reduce((total, item) => {
    const nutrient = item.foodNutrients.find((nutrient) => nutrient.nutrientName === 'Copper, Cu');
    if (nutrient) {
      return total + nutrient.value * (item.userGrams / 100);
    }
    return total;
  }, 0)
  );

  // 
  const totalFluoride = Math.round(foodLog.reduce((total, item) => {
    const nutrient = item.foodNutrients.find((nutrient) => nutrient.nutrientName === 'Riboflavin');
    if (nutrient) {
      return total + nutrient.value * (item.userGrams / 100);
    }
    return total;
  }, 0)
  );
  // 
  const totalIodine= Math.round(foodLog.reduce((total, item) => {
    const nutrient = item.foodNutrients.find((nutrient) => nutrient.nutrientName === 'Riboflavin');
    if (nutrient) {
      return total + nutrient.value * (item.userGrams / 100);
    }
    return total;
  }, 0)
  );

  const totalIron = Math.round(foodLog.reduce((total, item) => {
    const nutrient = item.foodNutrients.find((nutrient) => nutrient.nutrientName === 'Iron, Fe');
    if (nutrient) {
      return total + nutrient.value * (item.userGrams / 100);
    }
    return total;
  }, 0)
  );

  const totalMagnesium = Math.round(foodLog.reduce((total, item) => {
    const nutrient = item.foodNutrients.find((nutrient) => nutrient.nutrientName === 'Magnesium, Mg');
    if (nutrient) {
      return total + nutrient.value * (item.userGrams / 100);
    }
    return total;
  }, 0)
  );

  const totalManganese = Math.round(foodLog.reduce((total, item) => {
    const nutrient = item.foodNutrients.find((nutrient) => nutrient.nutrientName === 'Manganese, Mn');
    if (nutrient) {
      return total + nutrient.value * (item.userGrams / 100);
    }
    return total;
  }, 0)
  );

  // 
  const totalMolybdenum= Math.round(foodLog.reduce((total, item) => {
    const nutrient = item.foodNutrients.find((nutrient) => nutrient.nutrientName === 'Riboflavin');
    if (nutrient) {
      return total + nutrient.value * (item.userGrams / 100);
    }
    return total;
  }, 0)
  );

  const totalPhosphorus= Math.round(foodLog.reduce((total, item) => {
    const nutrient = item.foodNutrients.find((nutrient) => nutrient.nutrientName === 'Phosphorus, P');
    if (nutrient) {
      return total + nutrient.value * (item.userGrams / 100);
    }
    return total;
  }, 0)
  );

  const totalSelenium = Math.round(foodLog.reduce((total, item) => {
    const nutrient = item.foodNutrients.find((nutrient) => nutrient.nutrientName === 'Selenium, Se');
    if (nutrient) {
      return total + nutrient.value * (item.userGrams / 100);
    }
    return total;
  }, 0)
  );

  const totalZinc= Math.round(foodLog.reduce((total, item) => {
    const nutrient = item.foodNutrients.find((nutrient) => nutrient.nutrientName === 'Zinc, Zn');
    if (nutrient) {
      return total + nutrient.value * (item.userGrams / 100);
    }
    return total;
  }, 0)
  );

  const totalPotassium = Math.round(foodLog.reduce((total, item) => {
    const nutrient = item.foodNutrients.find((nutrient) => nutrient.nutrientName === 'Potassium, K');
    if (nutrient) {
      return total + nutrient.value * (item.userGrams / 100);
    }
    return total;
  }, 0)
  );

  const totalSodium= Math.round(foodLog.reduce((total, item) => {
    const nutrient = item.foodNutrients.find((nutrient) => nutrient.nutrientName === 'Sodium, Na');
    if (nutrient) {
      return total + nutrient.value * (item.userGrams / 100);
    }
    return total;
  }, 0)
  );

  // 
  const totalChloride = Math.round(foodLog.reduce((total, item) => {
    const nutrient = item.foodNutrients.find((nutrient) => nutrient.nutrientName === 'Riboflavin');
    if (nutrient) {
      return total + nutrient.value * (item.userGrams / 100);
    }
    return total;
  }, 0)
  );

  const totalCholine = Math.round(foodLog.reduce((total, item) => {
    const nutrient = item.foodNutrients.find((nutrient) => nutrient.nutrientName === 'Choline, total');
    if (nutrient) {
      return total + nutrient.value * (item.userGrams / 100);
    }
    return total;
  }, 0)
  );

  const intakeLevels = {
    "Vitamin A": totalVitaminA , 
    "Vitamin C": totalVitaminC, 
    "Vitamin D": totalVitaminD, 
    "Vitamin E": totalVitaminE,
    "Vitamin K": totalVitaminK,
    "Vitamin B1 (Thiamin)": totalThiamin,
    "Vitamin B2 (Riboflavin)": totalRiboflavin,
    "Vitamin B3 (Niacin)": totalNiacin,
    "Vitamin B5 (Pantothenic Acid)": totalPantothenicAcid,
    "Vitamin B6": totalVitaminB6,
    "Vitamin B7 (Biotin)": totalBiotin,
    "Vitamin B9 (Folate)": totalFolate,
    "Vitamin B12": totalVitaminB12,
    "Calcium": totalCalcium,
    "Chromium": totalChromium,
    "Copper": totalCopper,
    "Fluoride": totalFluoride,
    "Iodine": totalIodine,
    "Iron": totalIron,
    "Magnesium": totalMagnesium,
    "Manganese": totalManganese,
    "Molybdenum": totalMolybdenum,
    "Phosphorus": totalPhosphorus,
    "Selenium": totalSelenium,
    "Zinc": totalZinc,
    "Potassium": totalPotassium,
    "Sodium": totalSodium,
    "Chloride": totalChloride,
    "Choline": totalCholine

  }

  const fetchMicronutrients = async () => {
    try {
      const collectionRef = db.collection('micronutrient-intake');
      const snapshot = await collectionRef.get();
      const data = snapshot.docs.map((doc) => doc.data());
      setMicronutrients(data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  }

  async function updateMicronutrients() {
    if(micronutrients == undefined) {
      await fetchMicronutrients();
    }
    console.log(micronutrients)
  }

  function updateUser(data) {
    setUser(data);
  }

  return (
    <div className="App flex flex-col justify-start h-screen">
      <BuildHeader updateUser={updateUser} updateMicronutrients={updateMicronutrients} />
      <div className='flex flex-row justify-start w-full h-full'>
        { user == undefined 
          && micronutrients == undefined 
          && (<div className='h-full p-4 flex items-center justify-center w-full'>Please submit your information above as accurately as you can to continue.</div>)
        }

        { user != undefined 
          && micronutrients != undefined 
          && (<NutritionNav 
            setFoodSearchActive={setFoodSearchActive} 
            foodSearchActive={foodSearchActive} 
            foodLog={foodLog}
          />)
        }

        { foodSearchActive == true 
          && user != undefined 
          && micronutrients != undefined 
          && (<FoodSearch 
            foodLog={foodLog} 
            setFoodLog={setFoodLog} 
            foodSearchActive={foodSearchActive} 
            setFoodSearchActive={setFoodSearchActive} 
          />)
        }

        { foodSearchActive == false 
          && user != undefined 
          && micronutrients != undefined 
          && (<NutritionOverview 
            user={user} 
            micronutrients={micronutrients} 
            intakeLevels={intakeLevels}
            totalProtein={totalProtein}
            totalCarbs={totalCarbs}
            totalFat={totalFat}
          />)
        }
      </div>
    </div>
  );
}

export default App;
