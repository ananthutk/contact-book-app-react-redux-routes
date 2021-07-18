import { CLEAR_CONTACT, CREATE_CONTACT, DELETE_CONTACT, DELETE_SELECTED_CONTACT, GET_CONTACT, SELECT_CONTACT, UPDATE_CONTACT } from "../constant/types";

const initialState = {
  contacts: [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "phone": "1-770-736-8031 x56442",
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "phone": "010-692-6593 x09125",
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "phone": "1-463-123-4447",
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
      "phone": "493-170-9623 x156",
    }
  ],
  contact: null,
  selectedContacts: []
}

export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      }
    case GET_CONTACT:
      const contact = state.contacts.find(contact => contact.id == action.payload);
      return {
        ...state,
        contact: contact
      }
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) => contact.id == action.payload.id ?
          action.payload : contact)
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id != action.payload)
      }
    case SELECT_CONTACT:
      return {
        ...state,
        selectedContacts: action.payload
      }
    case CLEAR_CONTACT:
      return {
        ...state,
        selectedContacts: []
      }
    case DELETE_SELECTED_CONTACT:
      return {
        ...state,
        contacts: []
      }
    default:
      return state;
  }
}