import React from "react";

const Song = ({position, title, artist}) => {

    return (
      <div className="song">
      <p>{ position }</p>
      <p>{ title }</p>
      <p>{ artist }</p>

      </div>
    );

  }



export default Song;
