import React from 'react';
import Avatar from 'react-avatar';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteContact } from '../../actions/contactAction';

function Contact({ contact, selectAll }) {
  const { id, name, phone, email } = contact;
  const dispatch = useDispatch();
  return (
    <tr>
      <td>
        {selectAll && <div className="custom-control custom-checkbox">
          <input checked={selectAll} type="checkbox" className="custom-control-input" />
          <label className="custom-control-label"></label>
        </div>}
      </td>
      <td><Avatar className="me-2" name={name} size={45} round={true} />{name}</td>
      <td>{phone}</td>
      <td>{email}</td>
      <td className="actions">
        <Link to={`/contacts/edit/${id}`}>
          <span className="material-icons me-2" title="Edit Contact">edit</span>
        </Link>
        <span
          className="material-icons text-danger"
          style={{ cursor: 'pointer' }}
          title="Delete Contact"
          onClick={() => dispatch(deleteContact(id))}
        >
          remove_circle
        </span>
      </td>
    </tr>
  )
}

export default Contact
