const Header = () => {
    return (
        <header class="tophead">
            <nav class="d-flex container navbar navbar-expand-lg navbar-light">
                <div class="homeicon">
                    <a class="flex-grow-1 navbar-brand" href="#"><span>V</span>icon</a>
                </div>
                <div class="d-flex justify-content-end collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav">
                        <li class="nav-item active px-3">
                            <a class="nav-link about" href="#">About</a>
                        </li>
                        <li class="nav-item button px-2">
                            <button class="btn-signin nav-link" id="signincheck" href="/login" data-toggle="modal" data-target="#exampleModal1">
                                Sign in
                        </button>
                        </li>
                        <li class="nav-item button">
                            <button class="btn-signup nav-link signupcheck" href="#" data-toggle="modal" data-target="#exampleModal">
                                SIGN UP
                        </button>
                        </li>
                    </ul>
            </div>
            </nav>
        </header>
    )
}

export default Header
