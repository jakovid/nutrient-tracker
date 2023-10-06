export default function ProgressBar({ value, unit, name, dri, ul, ol, ou}) {
    ul = (ul < 0 ? 99999 : ul)
    ol = (ol < 0 ? dri : ol);
    ou = (ou < 0 ? dri*2 : ou);
    const percent = (value/(ol+ou) < 1 ? value/(ol+ou) : 1);
    
    const bgColor = (value < dri ? "darkblue" : value < ol ? "blue": value < ou ? "lightblue" : value < ul ? "blue" : "darkblue")
    const intakeScore = (value < dri ? "deficient" : value < ol ? "minimal": value < ou ? "optimal" : value < ul ? "excessive" : "toxic")
    return(
        <div className=" w-64 m-2">
            <span className="text-slate-700 font-bold">{name} - {intakeScore}</span>
            <div className="bg-black h-2 rounded-s-full rounded-e-full mt-2 w-full">
                <span className="progress-percent relative block h-full rounded-se-full rounded-s-full"
                    style={{ width: `${percent*100}%`, backgroundColor: bgColor}}>
                    <span className="absolute -right-0 -bottom-6 text-xs text-white p-1 rounded-b-md "
                        style={{
                            backgroundColor: bgColor,
                            display: (value > 0 ? "unset" : "none"),
                        }}
                    >{value} {unit}</span>
                </span>
            </div>
        </div>
    )
}