import React from 'react'
import Card from '../Components/Card'
import activities from '../Data/data'

const Ourpool = () => {
    return (
        <div className='bg-slate-50'>
            {activities.map((item) => (
                <Card key={item}
                    image={item.image} />
            ))}
        </div>
    )
}

export default Ourpool
