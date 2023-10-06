export default function ProgressCircle({ circleWidth = 200, currentValue, valueLimit, progressName, units, radius = 85}) {

    const percentage = currentValue/valueLimit;
    const dashArray = radius * Math.PI * 2;
    const dashOffset = dashArray - (dashArray*percentage);

    return(
        <div className="relative">
            <svg 
                width={circleWidth}
                height={circleWidth}
                viewBox={`0 0 ${circleWidth} ${circleWidth}`}
            >
                <circle
                    cx={circleWidth/2}
                    cy={circleWidth/2}
                    strokeWidth="15px"
                    r={radius}
                    className="fill-none stroke-gray-400"
                />

                <circle
                    cx={circleWidth/2}
                    cy={circleWidth/2}
                    strokeWidth="15px"
                    r={radius}
                    className="fill-none stroke-blue-800"
                    style={{
                        strokeDasharray: dashArray,
                        strokeDashoffset: dashOffset,
                    }}

                />
            </svg>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <h1 className="font-bold text-lg">{progressName}</h1>
                <h1 >{Math.round(currentValue)}/{valueLimit}</h1>
                <h1>{units}</h1>
            </div>
        </div>
    )
}