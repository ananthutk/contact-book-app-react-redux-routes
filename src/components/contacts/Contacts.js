import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearAllContact, deleteAllContact, selectAllContact } from '../../actions/contactAction';
import Contact from './Contact';

function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts)
  // console.log(contacts)
  const [selectAll, setSelectAll] = useState(false);

  const selectedContacts = useSelector(state => state.contacts.selectedContacts)

  useEffect(() => {
    if (selectAll) {
      dispatch(selectAllContact(contacts.map(contact => contact.id)));
    } else {
      dispatch(clearAllContact());
    }
  }, [selectAll])
  return (
    <div>

      {selectedContacts.length > 0 && (
        <button
          className="btn btn-danger mb-3"
          title="Delete All Contacts"
          onClick={() => {
            dispatch(deleteAllContact());
            setSelectAll(false);
          }}
        >
          Delete All
        </button>
      )}

      <table className="table shadow">
        <thead className="bg-primary text-white">
          <tr>
            <th>
              <div className="custom-control custom-checkbox">
                <input
                  id="selectAll"
                  type="checkbox"
                  className="custom-control-input"
                  title="Delete All Contacts"
                  checked={selectAll}
                  onClick={() => setSelectAll(!selectAll)}
                />
                <label htmlFor="selectAll" className="custom-control-label"></label>
              </div>
            </th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <Contact contact={contact} key={contact.id} selectAll={selectAll} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Contacts
