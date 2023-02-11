import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function SelectInput(
    {
        name,
        id,
        value,
        className,
        required,
        isFocused,
        handleChange,
    },
    ref
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <select
                name={name}
                id={id}
                value={value}
                className={
                    `border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ` +
                    className
                }
                ref={input}
                required={required}
                onChange={(e) => handleChange(e)}
            >
                <option value="1">Creos</option>
                <option value="2">Enovos</option>
                <option value="3">SudEnergie</option>
            </select>
        </div>
    );
});