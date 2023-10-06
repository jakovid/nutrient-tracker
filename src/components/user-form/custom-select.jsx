import { Controller } from "react-hook-form"

export default function CustomSelect({ control, name, label, rules = {}, placeholder, options = [] }) {
    return(
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
                <>
                    <div className="flex flex-row gap-2">
                        <label className="text-white">{label}</label>
                        <select className="w-26 pl-1 text-black"
                            value={value}
                            placeholder={placeholder}
                            onChange={onChange}
                            onBlur={onBlur}
                            style={{borderColor: error ? "red" : "black"}}
                        >
                            {options.map( (option) => (
                                <option value={option.value}>{option.text}</option>
                            ))}
                        </select>
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