import React, { Component } from "react";
class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "https://i.imgflip.com/lbij.jpg",
      allMemeImgs: []
    };
  }
  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const { meme } = response.data;
        console.log(meme[0]);
        this.setState({ allMemeImgs: meme });
      });
  }
  render() {
    return <h1>MemeGenerator</h1>;
  }
}

export default MemeGenerator;
