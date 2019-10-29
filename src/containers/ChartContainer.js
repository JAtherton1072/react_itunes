import React from 'react';
import ChartList from "../components/ChartList";



class ChartContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      songs: [],


    };


  }


  componentDidMount() {
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";

    fetch(url)
    .then(res => res.json())
    .then(songs => this.setState({ songs: songs }))
    .catch(err => console.error(err));

  }




  render(){
    return (
      <div>
        <h2>Current UK Top 20 Songs</h2>
        <ChartList songs={ this.state.songs } />


      </div>
    );
  }
}

export default ChartContainer;
