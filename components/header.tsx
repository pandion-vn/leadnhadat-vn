import Link from 'next/link';

const Header = () => {
  return (
    <header id="topnav" className="defaultscroll sticky">
      <div className="container">
        <Link className="logo" href="/">
          <img
            src="/images/pandion-logo-light.svg"
            height="60"
            className="logo-light-mode"
            alt=""
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
