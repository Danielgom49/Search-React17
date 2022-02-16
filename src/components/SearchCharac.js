import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import querystring from 'query-string'
import useForm from '../helpers/useForm'
import { getCharacter } from '../selectors/getCharacter'


const SearchCharac = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const { q = '' } = querystring.parse(location.search)

    const [character, handleOnChange] = useForm({
        searchText: q
    })

    const { searchText } = character

    const handleSubtmit = (e) => {
        e.preventDefault()
        console.log(searchText);
        navigate(`?q=${searchText}`)
    }

    const filter = getCharacter(searchText)
    console.log(filter);
    return (
        <div>
            <h1 className="text-2xl font-bold text-center m-5" >Buscar</h1>
            <hr />
            <form onSubmit={handleSubtmit} className="flex justify-center m-5">
                <input className="border-2 border-black rounded-lg p-2"
                    type="text"
                    placeholder="Buscar"
                    name="searchText"
                    onChange={handleOnChange}
                />
            </form>
            <div className="flex flex-wrap m-5 justify-center items-center">
                {
                    filter.map((c) => (
                        <div key={c.id} className="flex flex-col items-center m-5 border-2 border-solid border-gray-900 p-5" >
                            <h1 className="text-xl font-bold" >{c.name}</h1>
                            <img src={c.image} alt="character" width="250" />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SearchCharac