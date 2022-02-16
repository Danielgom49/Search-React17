import { useState } from 'react'

const useForm = (intialState) => {

    const [character, setcharacter] = useState(intialState)

    const handleOnChange = ({ target }) => {
        setcharacter({
            ...character,
            [target.name]: target.value
        })
    }


    return [character, handleOnChange]
}


export default useForm
