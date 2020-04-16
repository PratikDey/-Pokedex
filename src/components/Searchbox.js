import React from 'react'

export default function Searchbox({onEnter}) {
    return (
        <div>
            <input
			 type='search'
			 placeholder='Search Pokemon(Name)'
			 onChange={onEnter}
			/>
        </div>
    )
}
