import React from 'react'

const ShowCharacter = (data) => {

    return (
        <div>
            <h1 className="text-2xl font-bold text-center m-5" >Star Wars</h1>
            <hr />

            <div className="flex flex-wrap justify-center items-center" >
                {
                    data.data.map((c) => (
                        <div key={c.id} className="flex flex-col items-center m-5 border-2 border-solid border-gray-900 p-5" >
                            <h1 className="text-xl font-bold" >{c.name}</h1>
                            <img src={c.image} alt="character" width="300" />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ShowCharacter