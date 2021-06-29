import React from 'react';
import Avatar from './Avatar';

function AvatarList({title}) {

    const homer = {
        image: "https://www.stickees.com/files/cartoon/the-simpsons/2259-garage-band-homer-sticker.png",
        firstName: "Homer",
        lastName: "Simpson"
      };

    const marge = {
        image: "https://www.stickees.com/files/cartoon/the-simpsons/2252-marge-simpson-sticker.png",
        firstName: "Marge",
        lastName: "Simpson"
    };  

    const bart = {
        image: "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
        firstName: "Bart",
        lastName: "Simpson"
      };

    return (
        <div className="AvatarList">
            <h1>Nous sommes les Simpson</h1>
            <Avatar {...homer}/>
            <Avatar {...marge}/>
            <Avatar {...bart}/>
        </div>
    )
}

export default AvatarList;
