import React from "react";
import Song from "./Song";

const ChartList = ({songs}) => {

    const songNodes = songs.feed.entry.map(song => {
      return (
        <Song author={ song.author } key={ song.id }>{ song.text }</Song>
      );

    });

    return (
      <div className="song-list">
      { songNodes }

      </div>
    );


}

export default ChartList;
