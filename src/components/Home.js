import { Link } from 'react-router-dom';
import Employee from 'components/Home/Employee';
import Header from './Home/Header';

function Home() {
  return (
    <div  >
      <Header></Header>
      <Employee></Employee>
      <Link to="/Profile"></Link>
    </div>
  );
}

export default Home;
