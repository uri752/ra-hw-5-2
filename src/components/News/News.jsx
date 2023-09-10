import React from 'react';

export default function News( { news } ) {
    
    const items = news.map( item => 
        (
            <div>
                <img src={item.icon} alt="иконка новости" className='icon'/>
                <a href={item.link}>{item.title}</a>
            </div>
        )
    );

    return (
    <div className="block">
        {items}
    </div>
  )
}
