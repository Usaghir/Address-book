import React from 'react';
import { Link } from 'react-router-dom';
import Employee from 'components/Home/Employee';
import Search from 'components/Home/Search';


function Home() {
  return (
    <div>
       <Search></Search>
      <Employee></Employee>
      <Link to="/Profile">
  <button className="btn font-bebas" style={{ background: '#318fb5' }}>
    Profile
  </button>
</Link>
    </div>
  );
}

export default Home;
