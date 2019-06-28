import React from "react";
import Party from "./Party";
import Loader from "react-loader-spinner";

class Parties extends React.Component {


  render() {
      return (
        <div className="party-list">
          {this.props.fetching ? <Loader type="CradleLoader" color="#000" height={200} width={200} /> :
           this.props.parties.map(party => {
            return <Party party={party} />
           })
        
        }
        {/* <Party party={this.state.party}/> */}
       
        </div>
      );

  }
}

export default Parties;
