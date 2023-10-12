import React from 'react'

const ButtonBlue = ({caption, handleClick}) => {
    return (
    <button onClick={handleClick} className="bg-blue-500 hover:bg-pink-600 text-white font-bold py-2.5 px-4 rounded">
            {caption}
        </button>
    )
}

export default ButtonBlue
