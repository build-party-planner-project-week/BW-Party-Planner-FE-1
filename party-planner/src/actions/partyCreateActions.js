import { axiosWithAuth } from "../utility/axiosWithAuth";

export const CREATE_PARTY_START = "CREATE_PARTY";
export const CREATE_PARTY_SUCCESS = "CREATE_PARTY_SUCCESS";
export const CREATE_PARTY_FAILED = "CREATE_PARTY_FAILED";
export const GET_PARTIES = "GET_PARTIES";
export const GET_PARTIES_SUCCESS = "GET_PARTIES_SUCCESS";
export const DELETE_PARTY_START = "DELETE_PARTY_START";
export const DELETE_PARTY_SUCCESS = "DELETE_PARTY_SUCCESS";
export const DELETE_PARTY_FAILED = "DELETE_PARTY_FAILED";
export const createParty = partyInfo => dispatch => {
  dispatch({ type: CREATE_PARTY_START });
  //when this is triggered possibly go to a form or modal pop out were user can put in party information
  //make axios post request to server to add that party to databasegit
  axiosWithAuth()
    .post("/party", partyInfo)
    .then(res => {
      dispatch({ type: CREATE_PARTY_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: CREATE_PARTY_FAILED, payload: err.response });
    });
};

export const getParties = id => dispatch => {
  dispatch({ type: GET_PARTIES });

  axiosWithAuth()
    .get(`${id}/party`)
    .then(res => {
      res.data.forEach(party => {
        party.items = []
      })
      dispatch({ type: GET_PARTIES_SUCCESS, payload: res.data });
    })
    .catch(err => console.log(err));
};

export const deleteParty = partyId => dispatch => {
  dispatch({ type: DELETE_PARTY_START });
  axiosWithAuth()
    .delete(`/${partyId}/party`)
    .then(res => {
      console.log(res);
      dispatch({ type: DELETE_PARTY_SUCCESS });
    })
    .catch(err => {
      dispatch({ type: DELETE_PARTY_FAILED });
      console.log(err);
    });
};
