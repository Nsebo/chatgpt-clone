import { Link } from 'react-router-dom';
import './homepage.css';

const homePage = () => {
  return (
    <div className="homepage">
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
};

export default homePage;
