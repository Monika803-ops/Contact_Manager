import ContactList from '../components/ContactList';
import './style.css';

const Home = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Contact Manager</h1>
      <ContactList />
    </div>
  );
};

export default Home;
