import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addContact } from '../../actions/contactAction';
import shortid from 'shortid'
import { useHistory } from 'react-router-dom';

const AddContact = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const createContact = (e) => {
    e.preventDefault();
    const newContact = {
      id: shortid.generate(),
      name: name,
      phone: phone,
      email: email
    }
    dispatch(addContact(newContact));

    history.push("/");
  }

  return (
    <div className="card border-0 shadow">
      <div className="card-header">Add a Contact</div>
      <div className="card-body">
        <form onSubmit={(e) => createContact(e)}>
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
          <button className="btn btn-primary" type="submit">Create Contact</button>
        </form>
      </div>
    </div>
  )
}

export default AddContact
