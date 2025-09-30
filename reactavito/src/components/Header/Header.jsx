import "./Header.css"

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-box">
          <a href="/" className="header-logo">
            <img src="/images/logo.svg" alt="logo" />
            <span>Abito</span>
          </a>
          <div className="header-controls">
            <button className="btn btn-outline">Вход и регистрация</button>
            <button className="btn btn-primary">Подать объявление</button>
          </div>

          <div className="header-burger-menu">
            <img
              src="/images/burger-menu.svg"
              alt="burger-menu"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
