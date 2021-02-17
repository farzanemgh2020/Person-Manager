import React, { Component} from 'react';
//import ReactMarkdown from 'react-markdown';
import marked from "marked";

 class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = { terms: null }
  }
  componentDidMount() {
    const readmePath = require("../README.md");
  
    fetch(readmePath)
      .then(response => {
        return response.text()
      })
      .then(text => {
        this.setState({
          terms: marked(text)
        })
      })
  }

  render() {
    return (
      <section>
        <article dangerouslySetInnerHTML={{__html: this.state.terms}}></article>
      </section>
    )
  }
}
  
 export default HomePage;

 