import Search from './Header/Search';
import Sort from './Header/Sort';



// To contain the sorting and searching components.
function Header() {
  return (
    <nav className = "navbar navbar-expand-lg mob-height sticky" style={{ background: '#474853' }}>
    <div className="container mt-2 pt-2  mb-2 pb-2 justify-content-center">
      <div className="row w-75">
        <Sort  ></Sort>
        <Search ></Search>
      </div>
      </div>
      </nav>
  );
}

export default Header;
