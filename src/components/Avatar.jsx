import React from 'react';

function Avatar({image, firstName, lastName}) {
    return (
        <div className="Avatar">
            <div>
                <img src={image} alt={firstName} />
                <p>{firstName} {lastName.toUpperCase()}</p>
            </div>
        </div>
        
    )
}

export default Avatar;
