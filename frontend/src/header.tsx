import logo from "./chaserindlisbacher_logo.png"

function Header () {
    return(
        <header className="row">
            <div className="col-4">
                <img src={logo} alt="logo"></img>
            </div>
            <div className="col">
                <h3></h3>
            </div>
        </header>
    );
}

export default Header;