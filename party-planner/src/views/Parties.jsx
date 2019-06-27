import React from "react";
import Party from './Party'

class Parties extends React.Component {
  //class component Component Didi Mount to retrive parties from back end

  render() {
    //List of 
    console.log('parties', this.props)
    if(this.props.parties.length === 0){
      return <h1>You have no parties</h1>
    } else {

      return (
        <div className="party-list">
          {this.props.parties.map((party) => <Party party={party} key={party.id}/>)}
          {/* <Party /> */}
          {/* <h2>boo</h2> */}
        </div>
      );
    }
  }
}

export default Parties;
