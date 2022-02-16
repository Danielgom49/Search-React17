import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {
    return (
        <div>
            <div className="flex flex-row bg-gray-900 p-5 m-0 justify-center items-center text-white">
                <Link className="underline p-2" to='/'>Personajes</Link>
                <Link className="underline p-2" to='/search'>Buscar</Link>
            </div>
        </div>
    )
}

export default Nav