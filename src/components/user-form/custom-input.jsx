import { Controller } from "react-hook-form"

export default function CustomInput({ control, name, placeholder, label, rules = {} }) {
    return(
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
                <>
                    <div className="flex flex-row gap-2">
                        <label className="text-white">{label}</label>
                        <input className="w-24 pl-1"
                            value={value}
                            onChange={onChange}
                            onBlur={onBlur}
                            placeholder={placeholder}
                            style={{borderColor: error ? "red" : "black"}}
                        />
                    </div>
                    {error && (<div className="error-message">{error.message || "Error"}</div>)}
                </>
            )}
        />
    )
}


// <div>
//             <span>{text}</span>
//             <input 
//                 type="number"
//                 placeholder={placeholder}
//                 value={value}
//                 onInput={onInput}
//                 onKeyUp={onKeyUp}
//                 readOnly={readOnly}
//              />
//         </div>