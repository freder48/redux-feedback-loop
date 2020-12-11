import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';


class Understanding extends Component {

  goToSupport = () => {
    this.props.history.push('/support');
  }

  render() {
    return (
      <div className="understandings">
       <header>
         <h1>How well are you understanding the content?</h1>
       </header>

       <section>
         <label>Understanding?</label>
         <input type="number" min="1" max="5" required/>
         <button onClick={this.goToSupport}>Next</button>
       </section>


      </div>
    );
  }
}

export default withRouter(Understanding);
