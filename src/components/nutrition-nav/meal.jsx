export default function Meal({ name, mealList = []}) {
    return(
        <div className="w-full flex flex-col items-center justify-center my-1 cursor-pointer">
            <h1 className="text-2xl w-full flex border-y-4 border-slate-700 justify-center bg-slate-700 text-white p-1 hover:bg-white hover:text-slate-700">{name}</h1>
            <p>{mealList}</p>
        </div>
    )
}