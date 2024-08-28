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
      <header className="header">
        <img className="header__logo" src={headerLogo} alt="App logo" />

        <p className="header__username">{`(${user.email})`}</p>
        <button
          className="header__button header__button_signout"
          onClick={handleClickSignout}
        >
          Logout
        </button>
      </header>
    );
  }

  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="App logo" />

      <button
        className="header__button header__button_signup"
        onClick={handleClickSignup}
      >
        Create account
      </button>
      <button
        className="header__button header__button_signin"
        onClick={handleClickSignin}
      >
        Login
      </button>
    </header>
  );
}

export default Header;
