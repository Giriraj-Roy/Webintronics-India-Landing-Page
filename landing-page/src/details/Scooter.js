import React from 'react'

const Scooter = () => {
    return (
        <div className='scooterImage' style={{backgroundBlendMode: 'overlay'}}>
            {<img  src={require('./scooter.jpg')} alt='scooter' width="700" height="700"/>}
        </div>
    )
}

export default Scooter
