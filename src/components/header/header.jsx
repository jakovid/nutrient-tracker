import { useForm } from "react-hook-form";
import CustomInput from "../user-form/custom-input";
import CustomSelect from "../user-form/custom-select";

export default function BuildHeader({ updateUser, updateMicronutrients }) {

    const {
        control,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const onSubmitPressed = async(data) => {
        console.warn("Submit Pressed", data);
        data.tdee = (data.Gender == 'male' ? 88.362 + (13.397*data.Weight) + (4.799*data.Height) - (5.677*data.Age) : 447.593 + (9.247*data.Weight) + (3.098*data.Height) - (4.330*data.Age))*data.Exercise;
        updateUser(data);
        updateMicronutrients();
        
    }

    return(
        <div className="bg-slate-700 w-full max-w-40 flex items-center gap-4 pl-5 pr-5 p-2 justify-between">
            <div className="flex flex-row gap-4 items-center">
                <div className="h-12 w-12 border-2 flex items-center justify-center rounded-full">
                    <h1 className="text-white text-4xl">%</h1>
                </div>
                <h1 className="text-white text-4xl">FunctionalFusion</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmitPressed)} className="flex justify-end flex-wrap gap-2">
                <CustomSelect
                    name="Gender"
                    control={control}
                    label="Gender"
                    placeholder="Gender"
                    options={[{text: "select"}, {value: "male", text: "Male"}, {value: "female", text: "Female"}, {value: "pregnant", text: "Pregnant"}, {value: "lactating", text: "Lactating"}]}
                    rule={{
                        required: "gender is required"
                    }}
                />
                <CustomInput
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
                <CustomInput
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
                <CustomInput
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
                <CustomSelect
                    name="Exercise"
                    control={control}
                    label="Weekly Exercise"
                    placeholder="Exercise"
                    options={[{value: 0, text: "select"}, {value: 1.2, text: "0 days"}, {value: 1.375, text: "1-3 days"}, {value: 1.55, text: "3-5 days"}, {value: 1.725, text: "6-7 days"}, {value: 1.9, text: "Pro Athlete"}]}
                />
                <button type="submit" className="bg-blue-500 text-white pl-2 pr-2 rounded-md">Submit</button>
            </form>
        </div>
    )
}