import headerLogo from "../../assets/logo.jpeg";
import "./Header.css";

function Header({
  isLoggedIn,
  handleClickSignup,
  handleClickSignin,
  user,
  handleClickSignout,
}) {
  if (isLoggedIn) {
    return (
      <div className="header">
        <img className="header__logo" src={headerLogo} alt="App logo" />

        <p className="header__username">{`(${user.email})`}</p>
        <button
          className="header__button header__button-signout"
          onClick={handleClickSignout}
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="header">
      <img className="header__logo" src={headerLogo} alt="App logo" />

      <button
        className="header__button header__button-signup"
        onClick={handleClickSignup}
      >
        Create account
      </button>
      <button
        className="header__button header__button-signin"
        onClick={handleClickSignin}
      >
        Login
      </button>
    </div>
  );
}

export default Header;
