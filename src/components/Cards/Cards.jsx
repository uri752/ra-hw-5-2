import React from 'react'

export default function Cards( { cards } ) {
    
    const items = cards.map( item => 
        (
            <div className='block list'>{item.title}</div>                            
        )
    );

    return (
    <div className='block'>
        {items}
    </div>
  )
}
