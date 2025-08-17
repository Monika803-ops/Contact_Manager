import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './index.css'; // import CSS for styling

const ContactForm = ({ contactData, isEdit }) => {
  const [name, setName] = useState(contactData?.name || '');
  const [email, setEmail] = useState(contactData?.email || '');
  const [phone, setPhone] = useState(contactData?.phone || '');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const contact = { name, email, phone };

    try {
      if (isEdit) {
        await axios.put(`http://localhost:5000/api/contacts/${contactData._id}`, contact);
      } else {
        await axios.post('http://localhost:5000/api/contacts', contact);
      }
      navigate('/');
    } catch (error) {
      console.error('Error saving contact:', error);
    }
  };

  return (
    <div className="form-container">
      <h2>{isEdit ? 'Edit Contact' : 'Add Contact'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input type="text" value={phone} onChange={e => setPhone(e.target.value)} required />
        </div>
        <button type="submit" className="submit-btn">{isEdit ? 'Update' : 'Add'} Contact</button>
      </form>
    </div>
  );
};

export default ContactForm;
