import { useState } from "react";

export const useFiled = (type = '') => {
    const [value, setValue] = useState('')

    const onChange = (e) => {
        setValue(e.target.value)
    }

    return{
        type,
        value,
        onChange
    }
}

export const useSelectField = () => {
    const [value, setValue] = useState(null);

    const onChange = (selectedOption) => {
        setValue(selectedOption);
    };

    return {
        value,
        onChange
    };
};