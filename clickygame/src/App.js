import React from 'react';
import pics from './pics.json';
import Header from './components/Header';
import Jumbo from './components/Jumbo';
import Wrapper from './components/Wrapper';
import PicCard from './components/PicCard';
import Footer from './components/Footer';
import './App.css'

class App extends React.Component {
  state={
    pics,
    chosen: [],
    message: "Click an image to begin!",
    score: 0,
    topscore: 0,
    winner: false
  }

  handleClick = (event, id) => {
    event.preventDefault();
    console.log(id)
    let newPics =[];

    if(this.state.chosen.includes(id)){
      this.setState(function(prevState, props){
        newPics = prevState.pics;
        for(let i = prevState.pics.length - 1; i > 0; i--){
          const j = Math.floor(Math.random() * (i + 1));
          let temp = newPics[i];
          newPics[i] = newPics[j];
          newPics[j] = temp;
        }
        console.log(prevState.pics)
        console.log(newPics)
        return({
          pics: newPics,
          chosen: [],
          message: "Wrong Pick!",
          score: 0
        })
      })
    };

    if(!this.state.chosen.includes(id)){
      console.log(this.state.pics);
      this.setState(function(prevState, props){
        newPics = prevState.pics;
        for(let i = prevState.pics.length - 1; i > 0; i--){
          const j = Math.floor(Math.random() * (i + 1));
          let temp = newPics[i];
          newPics[i] = newPics[j];
          newPics[j] = temp;
        }
        console.log(newPics)
        console.log(prevState.chosen);
        let newChosen = prevState.chosen.slice();
        newChosen.push(id);
        console.log(newChosen);
        const newScore = prevState.score + 1;
        let newTopscore;

        if(newScore === 12){
          newTopscore = newScore;
          return({
            pics: newPics,
            chosen: [],
            message: "You Win!",
            score: 0,
            topscore: newTopscore,
            winner: true
          })
        }

        else {
          if(prevState.topscore < newScore){
            newTopscore = newScore;
          }
          else{
            newTopscore = prevState.topscore
          }
  
          return({
            pics: newPics,
            chosen: newChosen,
            message: "Correct! Keep it up!",
            score: newScore,
            topscore: newTopscore
          })
        }
      })
    }
  }

  render() {
    return (
      <div className="Container">
        <Header 
          message = {this.state.message}
          score = {this.state.score}
          topscore = {this.state.topscore}
        />
        <Jumbo />
        <div className="PicCard-display">
          <Wrapper>
            {this.state.pics.map(pic => {
              return(
                <a
                  key= {pic.id}
                  onClick={(event) => this.handleClick(event, pic.id)}>
                    <PicCard
                      image = {pic.image}
                    />
                </a>
              )
            })}
          </Wrapper>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
