
const initialState = {
  persons: [],
  person:{},
  errors:{},
  loading: false,
};

export default (state=initialState, action={}) => {
 // console.log("actionType", action.type);
  switch (action.type) {
   
    case 'FETCH_PERSONS_FULFILLED': {
        return {
              ...state,
              persons: action.payload.data,
              errors: {},
              loading: false
          }
        }
        case 'FETCH_PERSONS_PENDING': {
          return {
            ...state,
            loading: true,
            errors: {}
          }
        }
    case 'FETCH_PERSON_REJECTED': {
      return {
        ...state,
        loading: false,
        errors: { global: action.payload.message }
      }
    }
    case 'NEW_PERSON': {
      return {
          ...state,
          person: {}
      }
    }
    case 'SAVE_PERSON_PENDING': {
      return {
        ...state,
        loading: true
      }
    }
    case 'SAVE_PERSON_FULFILLED': {
      return {
        ...state,
        persons: [...state.persons, action.payload.data],
        errors: {},
        loading: false
      }
    }

    case 'SAVE_PERSON_REJECTED': {
      const data = action.payload.response.data;
      // convert feathers error formatting to match client-side error formatting
      const { firstName, lastName, phone, email, gender } = data.errors;
      const errors = { global: data.message,firstName, lastName, phone, email, gender };
      return {
        ...state,
        errors: errors,
        loading: false
      }
    }
  
    case 'FETCH_PERSON_PENDING': {
      return {
        ...state,
        loading: true,
        person: {}
      }
    }

    case 'FETCH_PERSON_FULFILLED': {
      return {
        ...state,
        person: action.payload.data,
        errors: {},
        loading: false
      }
    }

    case 'UPDATE_PERSON_PENDING': {
      return {
        ...state,
        loading: true
      }
    }

    case 'UPDATE_PERSON_FULFILLED': {
      const person = action.payload.data;
      return {
        ...state,
        persons: state.persons.map(item => item._id === person._id ? person : item),
        errors: {},
        loading: false
      }
    }

    case 'UPDATE_PERSON_REJECTED': {
      const data = action.payload.response.data;
      const { firstName, lastName, phone, email, gender } = data.errors;
      const errors = { global: data.message,firstName,lastName, phone, email,gender };
      return {
        ...state,
        errors: errors,
        loading: false
      }
    }

    case 'DELETE_PERSON_FULFILLED': {
      const _id = action.payload.data;
      return {
        ...state,
        persons: state.persons.filter(item => item._id !== _id)
      }
    }
    default:
      return state;
  }
}

