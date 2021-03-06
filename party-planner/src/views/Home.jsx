import React from "react";
import Parties from "./Parties";
import { connect } from "react-redux";
import { createParty, getParties } from "../actions/partyCreateActions";
import Modal from "react-responsive-modal";
import moment from "moment";
import DatePicker from "react-datepicker";
import Loader from "react-loader-spinner";
import "react-datepicker/dist/react-datepicker.css";


class Home extends React.Component {
  state = {
    openModal: false,
    partyDetails: {
      title: "",
      guests: "",
      theme: "",
      date: "",
      budget: "",
      // images: '',
      user_id: null
    },
    parties: []
  };
  componentDidMount() {
    this.setState({
      partyDetails: {
        ...this.state.partyDetails,
        user_id: localStorage.getItem("user_id")
      },
      parties: this.props.getParties(localStorage.getItem("user_id"))
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
  dateChange = date => {
    const dateToString = moment(date);
    this.setState({
      partyDetails: {
        ...this.state.partyDetails,
        date: date
      }
    });
    console.log(typeof dateToString);
  };
  createParty = e => {
    console.log(this.state.partyDetails);
    e.preventDefault();

    this.props.createParty(this.state.partyDetails);

    setTimeout(() => {
      this.setState({
        openModal: false,
        partyDetails: {
          ...this.state.partyDetails,
          title: "",
          guests: "",
          theme: "",
          date: "",
          budget: "",
          // images: ''
        }
      });

    }, 2000)
  };

  logout() {
    localStorage.clear(); 
    window.location.href='/'; 
  }

  onDrop = image => {
    this.setState({
      images: this.state.images.concat(image)
    })
  }

  // fileSelectedHandler = e => {
  //   console.log(e.target.files[0]);
  // }

  render() {
    return (
      <div>
        <button onClick={this.openModal} className="create-party">
          Add new party
        </button>
        

        <Modal
          className="party-modal"
          open={this.state.openModal}
          onClose={() => this.setState({ openModal: false })}
        >
          <h2>Make your party!</h2>
          <form onSubmit={this.createParty}>
            <label>Party title</label>
            <input
              name="title"
              value={this.state.partyDetails.title}
              onChange={this.handleChanges}
              required
            />

            <label>Theme</label>
            <input
              name="theme"
              value={this.state.partyDetails.theme}
              onChange={this.handleChanges}
              required
            />
            <label>
              Guests </label>
              <input
                name="guests"
                value={this.state.partyDetails.guests}
                onChange={this.handleChanges}
              />
           

            <label>
              Date</label>
              <DatePicker
                selected={this.state.partyDetails.date}
                onChange={this.dateChange}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="MMMM d, yyyy h:mm aa"
                timeCaption="time"
              />
            

            {/* <input
               name="date"
               value={this.state.partyDetails.date}
               onChange={this.handleChanges}
             /> */}
            <label>
              Budget</label>
              <input
                name="budget"
                type="number"
                value={this.state.partyDetails.budget}
                onChange={this.handleChanges}
                required
              />
            
            {/* <label>Mood Image URL</label>
            <input 
            name="images"
            value={this.state.partyDetails.images}
            onChange={this.handleChanges}
            /> */}

            

            <div className="message">{this.props.message}</div>
            <button className='createPartyButton'>
              {this.props.creating ? (
                <Loader type="ThreeDots" color="#fff" height={20} width={40} />
              ) : (
                "Create Party"
              )}
            </button>
          </form>
        </Modal>

        <Parties parties={this.props.parties} fetching={this.props.creating} />
        <div>
          <button className='logoutButton' onClick={() => this.logout()}>Logout</button>
        </div>
      </div>
      
    );
  }
}

const mapStateToProps = state => {
  return {
    parties: state.partyReducer.parties,
    user_id: state.loginReducer.user_id,
    creating: state.partyReducer.creating,
    message: state.partyReducer.message
  };
};

export default connect(
  mapStateToProps,
  { createParty, getParties }
)(Home);
