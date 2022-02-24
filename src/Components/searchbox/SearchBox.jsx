import React from 'react';

class SearchBar extends React.Component{

  state={term:''};

  onInputChange = (e)=>{
    
    this.setState({term: e.target.value});
  }

  onFormSubmit = e=>{
    e.preventDefault();

    this.props.onTermSubmit(this.state.term);
  }

  render(){

    return (
    
      <div className="ui inverted segment" bis_skin_checked="1">
        
        <form className="ui action inverted fluid icon input" bis_skin_checked="1"
        onSubmit={this.onFormSubmit} >

        <input type="text" placeholder="Search..."
         value={this.state.term}
          onChange={this.onInputChange}/>

        <button className="ui icon button" onClick={this.onFormSubmit}>

        <i className="search icon"></i>

        </button>
        </form>
        <div className="ui inverted divider" bis_skin_checked="1"></div>
      </div>
      
    )
  }
}

export default SearchBar;