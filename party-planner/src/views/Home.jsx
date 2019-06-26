import React from "react";
import Parties from "./Parties";
import { connect } from "react-redux";
import { createParty, getParties } from "../actions/partyCreateActions";
import Modal from "react-responsive-modal";

class Home extends React.Component {
  state = {
    openModal: false,
    partyDetails: {
      // title: "",
      guests: "",
      theme: "",
      date: "",
      budget: "",
      user_id: null
    }
  };
  componentDidMount() {
    this.setState({
    partyDetails: {
      ...this.state.partyDetails,
      user_id: this.props.user_id
    }
    });
  }
  handleChanges = e => {
    this.setState({
      partyDetails: {
        ...this.state.partyDetails,
        [e.target.name]: e.target.value
      }
    });
  };
  openModal = () => {
    this.setState({ openModal: true });
  };
  createParty = e => {
    e.preventDefault();
    this.props.createParty(this.state.partyDetails);
  };

  render() {

    return (
      <div>
        <button onClick={this.openModal} className="create-party">
          Add new party
        </button>
        <button onClick={() => this.props.getParties(localStorage.getItem('user_id'))}>Get parties</button>
        <Modal
          className="party-modal"
          open={this.state.openModal}
          onClose={() => this.setState({ openModal: false })}
        >
          <h2>Make your party!</h2>
          <form onSubmit={this.createParty}>
            <label>Party title</label>
            {/* <input
              name="title"
              value={this.state.partyDetails.title}
              onChange={this.handleChanges}
            /> */}
            <label>Number of guests</label>
            <input
              name="guests"
              value={this.state.partyDetails.guests}
              onChange={this.handleChanges}
            />
            <label>Theme</label>
            <input
              name="theme"
              value={this.state.partyDetails.theme}
              onChange={this.handleChanges}
            />
            <label>Date</label>
            <input
              name="date"
              value={this.state.partyDetails.date}
              onChange={this.handleChanges}
            />
            <label>Budget</label>
            <input
              name="budget"
              value={this.state.partyDetails.budget}
              onChange={this.handleChanges}
            />

            <button>Create Party</button>
          </form>
        </Modal>
        <Parties />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    parties: state.partyReducer.parties,
    user_id: state.loginReducer.user_id
  };
};

export default connect(
  mapStateToProps,
  { createParty, getParties }
)(Home);
