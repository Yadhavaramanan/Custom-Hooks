import {useState} from 'react';
const useFormInput=(initialValue)=>{
const[value,setValue]=useState(initialValue);
const handleChange=(e)=>{
    setValue(e.target.value);
};

return{
    value,
    onChange:handleChange
};
};

export default useFormInput;