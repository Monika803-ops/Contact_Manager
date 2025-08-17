import ContactForm from '../components/ContactForm';
import './style.css';

const AddContact = () => {
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Add Contact</h2>
      <ContactForm isEdit={false} />
    </div>
  );
};

export default AddContact;
