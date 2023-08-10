import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('');
    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length>=2){
            // setCategories(categories=>[inputValue, ...categories]); // insertar por callback
            onNewCategory(inputValue.trim());
            setInputValue('');
        }
    }
    return (
        <form action="" onSubmit={(e) => onSubmit(e)}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
