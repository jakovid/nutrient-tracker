export default function ProgressBox({name, currentValue, unit, dri, ul, ol, ou}){

    ul = (ul < 0 ? 99999 : ul)
    ol = (ol < 0 ? dri : ol);
    ou = (ou < 0 ? dri*2 : ou);

    const intakeScore = (currentValue < dri ? "deficient" : currentValue < ol ? "minimal": currentValue < ou ? "optimal" : currentValue < ul ? "excessive" : "toxic")

    return(
        <div className="flex flex-col gap-1 items-center border-2 w-96 bg-slate-700 text-white rounded-lg">
            <h1 className="text-lg font-bold ">{name} - {intakeScore}</h1>
            <h2>Current: {currentValue} {unit}</h2>
            <div className="flex flex-row gap-4">
                <div>DRI: {dri}</div>
                <div>Optimal: {ol} - {ou}</div>
                <div>Toxic: {ul}</div>
            </div>
        </div>
    )
}