import React from 'react';

export default function Rates( { rates } ) {
    
    const items = rates.map( item => 
        (
            <ul className='list'>
                <li>{item.name}</li>
                <li>{item.price}</li>
                <li>{item.deviation}</li>
            </ul>
        )
    );

    return (
    <div className="block">
        {items}
    </div>
  )
}
