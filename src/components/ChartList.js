import React from "react";
import Song from "./Song";

const ChartList = (props) => {

    const songNodes = props.songs.map((song, index) => {
      return (
        <Song
        title={ song["im:name"].label }
        artist={ song["im:artist"].label }
        chartPosition={ index + 1}
        key={ index } />
      );

    });

    return (
      <div className="song-list">
      { songNodes }

      </div>
    );


}

export default ChartList;
