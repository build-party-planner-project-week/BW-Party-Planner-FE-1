import React from "react";
import Party from './Party'

class Parties extends React.Component {
  //class component Component Didi Mount to retrive parties from back end

  render() {
    //List of parties

    return (
      <div className="party-list">
        {/* {this.props.parties.map((party, i) => <Party party={party} key={i}/>)} */}
        <Party />
      </div>
    );
  }
}

export default Parties;
