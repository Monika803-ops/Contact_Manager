import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ContactForm from '../components/ContactForm';
import './style.css';

const EditContact = () => {
  const { id } = useParams();
  const [contact, setContact] = useState(null);

  useEffect(() => {
    const fetchContact = async () => {
      const res = await axios.get(`http://localhost:5000/api/contacts`);
      const c = res.data.find(c => c._id === id);
      setContact(c);
    };
    fetchContact();
  }, [id]);

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Edit Contact</h2>
      {contact && <ContactForm contactData={contact} isEdit={true} />}
    </div>
  );
};

export default EditContact;
