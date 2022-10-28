import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'markdown'

   
class Header extends React.Component {
  render() {
    return (
      <header className="head">
        <h1>{this.props.title}</h1>
      </header>
    );
  }
}
const placeholder= `# header
## Subheader
[Learn how to code](https:/freecodecamp.org/learn)
> This is a block quote  
This is an online code \`var a=[1,2,3,4,5] \`

     function multiple(a,b){
          return a*b;
      }
- apple
- orange
- mango
- bannana

![image file](download.png )

**Bold text**  
   <br/>
   This is a break`
let htmlmarkup=" "
class AppEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {


      "value":placeholder
    };

    this.handleChange = this.handleChange.bind(this);
    
  }
  componentDidMount(){
    htmlmarkup=marked.parse(this.state.value)
    
  }
  handleChange(e) {
    this.setState({
      "value":e.target.value}
    )
    
    
  }

  render() {
    return (
      <>
        <Header title="Markdown Previewer" />
        <div id="container">
          <textarea
            cols="20"
            rows="10"
            id="editor"
            onChange={this.handleChange}
          >
         {this.state.value}
          </textarea>
          <div id="preview" dangerouslySetInnerHTML={{__html:marked.parse(this.state.value)} }></div>
        </div>
      </>
    );
  }
}

ReactDOM.render(<AppEditor />, document.getElementById("root"));
