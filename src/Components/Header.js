import "./header.scss";
import logo from "../img/logo-white.png";
// import logo from "../logo.svg";

function Header() {
  return (
    <>
      <header className="header">
        <div className="header__logo-box">
          <img src={logo} alt="Logo" className="header__logo" />
        </div>
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">OUTDOORS</span>
            <span className="heading-primary--sub">is where life happens</span>
          </h1>
          <a href="#" className="btn btn--white btn--animated">
            Discover More
          </a>
        </div>
      </header>
      <section className="grid-test">
        <div className="row">
          <div className="col-1-of-2">col 1 of 2</div>
          <div className="col-1-of-2">col 1 of 2</div>
        </div>
        <div className="row">
          <div className="col-1-of-3">col 1 of 3</div>
          <div className="col-1-of-3">col 1 of 3</div>
          <div className="col-1-of-3">col 1 of 3</div>
        </div>
        <div className="row">
          <div className="col-1-of-3">col 1 of 3</div>
          <div className="col-2-of-3">col 2 of 3</div>
        </div>
        <div className="row">
          <div className="col-1-of-4">col 1 of 4</div>
          <div className="col-1-of-4">col 1 of 4</div>
          <div className="col-1-of-4">col 1 of 4</div>
          <div className="col-1-of-4">col 1 of 4</div>
        </div>
        <div className="row">
          <div className="col-1-of-4">col 1 of 4</div>
          <div className="col-1-of-4">col 1 of 4</div>
          <div className="col-2-of-4">col 2 of 4</div>
        </div>
        <div className="row">
          <div className="col-1-of-4">col 1 of 4</div>
          <div className="col-3-of-4">col 3 of 4</div>
        </div>
      </section>
    </>
  );
}
export default Header;
