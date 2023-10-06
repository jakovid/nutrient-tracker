import ProgressCircle from "./progress-circle"
import ProgressBar from "./progress-bar"
import ProgressBox from "./progress-box"

export default function NutritionOverview({ user, micronutrients, intakeLevels, totalProtein, totalCarbs, totalFat }) {
    
    return(
        <div className="w-full">
            <div className="flex flex-row">
                <ProgressCircle currentValue={totalCarbs*4 + totalProtein*4 + totalFat*9} valueLimit={Math.round(user.tdee)} progressName="TDEE" units="calories" radius="80" />
                <div className="flex flex-row">
                    <ProgressCircle currentValue={totalCarbs} valueLimit={Math.round(user.tdee * 0.4 / 4)} progressName="Carbs" units="grams" radius="60" />
                    <ProgressCircle currentValue={totalProtein} valueLimit={Math.round(user.tdee * 0.3 / 4)} progressName="Protein" units="grams" radius="60" />
                    <ProgressCircle currentValue={totalFat} valueLimit={Math.round(user.tdee * 0.3 / 9)} progressName="Fat" units="grams" radius="60" />
                </div>
            </div>

            <div className="flex flex-row flex-wrap gap-2 p-2">
            {micronutrients.map((micronutrient) => (
                <ProgressBox 
                    name={micronutrient.Micronutrient}
                    unit={micronutrient.units}
                    dri={(
                        user.Gender == "male" ? (user.Age <= 30 ? micronutrient.DRI_M_19_30 : user.Age <= 50 ? micronutrient.DRI_M_19_30 : micronutrient.DRI_M_51_70)
                        : user.Gender == "female" ? (user.Age <= 30 ? micronutrient.DRI_F_19_30 : user.Age <= 50 ? micronutrient.DRI_F_19_30 : micronutrient.DRI_F_51_70)
                        : user.Gender == "pregnant" ? (user.Age <= 30 ? micronutrient.DRI_P_19_30 : micronutrient.DRI_P_19_30) 
                        : (user.Age <= 30 ? micronutrient.DRI_L_19_30 : micronutrient.DRI_L_19_30)
                    )}
                    ol={micronutrient["Masterjohn LB"]}
                    ou={micronutrient["Masterjohn UB"]}
                    ul={(
                    user.Gender == "male" ? (user.Age <= 50 ? micronutrient.UL_M_19_50 : micronutrient.UL_M_51_70)
                    : user.Gender == "female" ? (user.Age <=50 ? micronutrient.UL_F_19_50 : micronutrient.UL_F_51_70)
                    : user.Gender == "pregnant" ? (user.Age <= 30 ? micronutrient.UL_P_19-50 : micronutrient.UL_P_51_70) 
                    : (user.Age <= 30 ? micronutrient.UL_L_19_50 : micronutrient.UL_L_51_70)
                    )}
                    currentValue={(intakeLevels[`${micronutrient.Micronutrient}`] != undefined ? intakeLevels[`${micronutrient.Micronutrient}`] : 500)}
                />
            ))}
            </div>
            
        </div>
    )
}