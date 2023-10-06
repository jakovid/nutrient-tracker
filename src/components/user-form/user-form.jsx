import { useState } from "react"
import FormInputGroup from "./FormInputGroup"
import { v4 as uuidv4 } from 'uuid';
import { useForm } from "react-hook-form";

export default function UserForm() {
    const [userInfo, setUserInfo] = useState({
        "gender": undefined,
        "age": undefined,
        "height cm": undefined,
        "height in": undefined,
        "weight kg": undefined,
        "weight lbs": undefined,
        "pregnant": false,
        "lactating": false,
    });

    const {
        control,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const onSubmitPressed = (data) => {
        console.warn("Submit Pressed", data)
    }
    
    return(
        <form onSubmit={handleSubmit(onSubmitPressed)} className="form-container">
            <label htmlFor="gender-select">Gender:
                <select name="gender" id="gender-select"> 
                    <option value="null">--Please choose an option--</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select> 
            </label>
            <FormInputGroup
                name="Age"
                placeholder="Age"
                control={control}
                label="Age"
                rules={{
                    required: 'Age is required',
                    min: {
                        value: 19,
                        message: 'We only have information for those old than 19 years old.'
                    },
                    max: {
                        value: 70,
                        message: 'We only have information for those under 70 years old'
                    }
                }}
                
            />
            <FormInputGroup
                name="Height"
                placeholder="Height (cm)"
                control={control}
                label="Height (cm)"
                rules={{
                    required: 'Height is required',
                    maxLength: {
                        value: 5,
                        message: 'You are being a bit too accurate. Limit your input to 5 characters'
                    },
                    min: {
                        value: 54,
                        message: 'Are you Afshin Esmaeil Ghaderzadeh? The shortest adult human was 54.64cm.'
                    },
                    max: {
                        value: 251,
                        message: 'Are you Sultan Kosen? The tallest human was 251cm.'
                    }
                }}
            />
            <FormInputGroup
                name="Weight"
                placeholder="Weight (kg)"
                control={control}
                label="Weight (kg)"
                rules={{
                    required: 'Weight is required',
                    min: {
                        value: 3,
                        message: 'Are you a baby? The average weight at birth is 3.4kg.'
                    },
                    max: {
                        value: 635,
                        message: 'Are you Jon Brower Minnoch? The heaviest human was 635kg.'
                    }
                }}
            />
            <FormInputGroup 
                name="Vitamin A"
                placeholder="Vitamin A in MCG"
                control={control}
                label="Vitamin A (mcg)"
            />
            <FormInputGroup 
                label="Vitamin C (mg)"
                name="Vitamin C"
                placeholder="Vitamin C in MG"
                control={control}
            />
            <FormInputGroup 
                label="Vitamin D (IU)"
                name="Vitamin D"
                placeholder="Vitamin D in IU"
                control={control}
            />
            <FormInputGroup 
                label="Vitamin E (mg)"
                name="Vitamin E"
                placeholder="Vitamin E in MG"
                control={control}
            />
            <FormInputGroup 
                label="Vitamin K (mcg)"
                name="Vitamin K"
                placeholder="Vitamin K in MCG"
                control={control}
            />
            <FormInputGroup 
                label="Vitamin B1 (mg)"
                name="Vitamin B1"
                placeholder="Vitamin B1 in MG"
                control={control}
            />
            <FormInputGroup 
                label="Vitamin B2 (mg)"
                name="Vitamin B2"
                placeholder="Vitamin B2 in MG"
                control={control}
            />
            <FormInputGroup 
                label="Vitamin B3 (mg)"
                name="Vitamin B3"
                placeholder="Vitamin B3 in MG"
                control={control}
            />
            <FormInputGroup 
                label="Vitamin B5 (mg)"
                name="Vitamin B5"
                placeholder="Vitamin B5 in MG"
                control={control}
            />
            <FormInputGroup 
                label="Vitamin B6 (mg)"
                name="Vitamin B6"
                placeholder="Vitamin B6 in MG"
                control={control}
            />
            <FormInputGroup 
                label="Vitamin B7 (mcg)"
                name="Vitamin B7"
                placeholder="Vitamin B7 in MCG"
                control={control}
            />
            <FormInputGroup 
                label="Vitamin B9 (mcg)"
                name="Vitamin B9"
                placeholder="Vitamin B9 in MCG"
                control={control}
            />
            <FormInputGroup 
                label="Vitamin B12 (mg)"
                name="Vitamin B12"
                placeholder="Vitamin B12 in MG"
                control={control}
            />
            <FormInputGroup 
                label="Calcium (mg)"
                name="Calcium"
                placeholder="Calcium in MG"
                control={control}
            />
            <FormInputGroup 
                label="Chromium (mcg)"
                name="Chromium"
                placeholder="Chromium in MCG"
                control={control}
            />
            <FormInputGroup 
                label="Copper (mcg)"
                name="Copper"
                placeholder="Copper in MCG"
                control={control}
            />
            <FormInputGroup 
                label="Fluoride (mg)"
                name="Fluoride"
                placeholder="Fluoride in MG"
                control={control}
            />
            <FormInputGroup 
                label="Iodine (mcg)"
                name="Iodine"
                placeholder="Iodine in MCG"
                control={control}
            />
            <FormInputGroup 
                label="Iron (mg)"
                name="Iron"
                placeholder="Iron in MG"
                control={control}
            />
            <FormInputGroup 
                label="Magnesium (mg)"
                name="Magnesium"
                placeholder="Magnesium in MG"
                control={control}
            />
            <FormInputGroup 
                label="Manganese (mg)"
                name="Manganese"
                placeholder="Manganese in MG"
                control={control}
            />
            <FormInputGroup 
                label="Molybdenum (mcg)"
                name="Molybdenum"
                placeholder="Molybdenum in MCG"
                control={control}
            />
            <FormInputGroup 
                label="Phosphorus (mg)"
                name="Phosphorus"
                placeholder="Phosphorus in MG"
                control={control}
            />
            <FormInputGroup 
                label="Selenium (mcg)"
                name="Selenium"
                placeholder="Selenium in MCG"
                control={control}
            />
            <FormInputGroup 
                label="Zinc (mg)"
                name="Zinc"
                placeholder="Zinc in MG"
                control={control}
            />
            <FormInputGroup 
                label="Potassium (mg)"
                name="Potassium"
                placeholder="Potassium in MG"
                control={control}
            />
            <FormInputGroup 
                label="Sodium (mg)"
                name="Sodium"
                placeholder="Sodium in MG"
                control={control}
            />
            <FormInputGroup 
                label="Chloride (mg)"
                name="Chloride"
                placeholder="Chloride in MG"
                control={control}
            />
            <FormInputGroup 
                label="Choline (mg)"
                name="Choline"
                placeholder="Choline in MG"
                control={control}
            />
            <button type="submit">Calculate</button>
        </form>
    )
}