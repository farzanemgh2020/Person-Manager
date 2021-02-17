import { client } from './';

const url = '/person';

export function fetchPersons(){
  return dispatch => {
    dispatch({
      type: 'FETCH_PERSONS',
      payload: client.get(url)
    })
  }
}

export function newPerson() {
  return dispatch => {
    dispatch({
      type: 'NEW_PERSON'
    })
  }
}

export function savePerson(person) {
  return dispatch => {
    return dispatch({
      type: 'SAVE_PERSON',
      payload: client.post(url, person)
    })
  }
}

export function fetchPerson(_id) {
  return dispatch => {
    return dispatch({
      type: 'FETCH_PERSON',
      payload: client.get(`${url}/${_id}`)
    })
  }
}

export function updatePerson(person) {
  return dispatch => {
    return dispatch({
      type: 'UPDATE_PERSON',
      payload: client.put(`${url}/${person._id}`, person)
    })
  }
}
export function deletePerson(_id) {
  return dispatch => {
    return dispatch({
      type: 'DELETE_PERSON',
      payload: client.delete(`${url}/${_id}`)
    })
  }
}
