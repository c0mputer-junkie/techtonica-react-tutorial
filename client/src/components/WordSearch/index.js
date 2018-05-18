import React, {Component} from 'react';
import './WordSearch.css';


export default class WordSearch extends Component{

  render() {
    return (
      <div className ="WordSearch">
        <form>
          <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
          </form>
      </div>
    )
  }
}
