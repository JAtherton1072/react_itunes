import React from "react";

const Song = ({title, artist, chartPosition}) => {

    return (
      <div className="song">
      <p>{ chartPosition }</p>
      <p>{ title }</p>
      <p>{ artist }</p>

      </div>
    );

  }



export default Song;
