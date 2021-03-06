import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateContact, getContact } from '../../actions/contactAction';
import { useHistory, useParams } from 'react-router-dom';

const EditContact = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const contact = useSelector(state => state.contacts.contact);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (contact != null) {
      setName(contact.name);
      setPhone(contact.phone);
      setEmail(contact.email);
    }

    dispatch(getContact(id));
  }, [contact])

  const onUpdateContact = (e) => {
    e.preventDefault();

    const update_contact = {
      ...contact,
      name: name,
      phone: phone,
      email: email
    }
    dispatch(updateContact(update_contact))

    history.push("/");
  }

  return (
    <div className="card border-0 shadow">
      <div className="card-header">Add a Contact</div>
      <div className="card-body">
        <form onSubmit={(e) => onUpdateContact(e)}>
          <div className="form-group mt-3 mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group mt-3 mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Phone Number"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-group mt-3 mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Enter Your Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="btn btn-warning" type="submit">Update Contact</button>
        </form>
      </div>
    </div>
  )
}

export default EditContact
