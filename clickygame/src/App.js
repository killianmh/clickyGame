import React from 'react';
import pics from './pics.json';
import Header from './components/Header';
import Jumbo from './components/Jumbo';
import Wrapper from './components/Wrapper';
import PicCard from './components/PicCard';
import './App.css'

class App extends React.Component {
  state={
    pics
  }


  render() {
    return (
      <div className="Container">
        <Header />
        <Jumbo />
        <div className="PicCard-display">
          <Wrapper>
            {this.state.pics.map(pic => {
              return(<PicCard
                key = {pic.id} 
                image = {pic.image}
              />
            )})}
          </Wrapper>
        </div>
      </div>
    );
  }
}

export default App;
