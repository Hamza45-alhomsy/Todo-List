import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className=" border-top border-white border-opacity-10 bg-dark text-white">
      <div className="container py-5">
        <div className="row g-4 align-items-start">
          <div className="col-lg-5">
            <div className="d-inline-flex align-items-center gap-2 rounded-pill bg-white bg-opacity-10 px-3 py-2 mb-3">
              <span className="small text-uppercase letter-spacing-1">
                Todo-list
              </span>
            </div>
            <p className="text-white-50 mb-0">
              Capture what matters, stay organized, and finish the day with a
              clear list.
            </p>
          </div>

          <div className="col-sm-6 col-lg-3">
            <h3 className="h6 text-uppercase text-white-50 mb-3">
              Quick links
            </h3>
            <nav className="d-grid gap-2">
              <Link
                className="link-light text-decoration-none opacity-75-hover"
                to="/home"
              >
                Home
              </Link>
              <Link
                className="link-light text-decoration-none opacity-75-hover"
                to="/login"
              >
                Log in
              </Link>
              <Link
                className="link-light text-decoration-none opacity-75-hover"
                to="/signup"
              >
                Sign up
              </Link>
            </nav>
          </div>

          <div className="col-sm-6 col-lg-4">
            <h3 className="h6 text-uppercase text-white-50 mb-3">
              Built for focus
            </h3>
            <ul className="list-unstyled d-grid gap-2 mb-0 text-white-50">
              <li>Simple task capture with a clean layout</li>
              <li>Progress you can see at a glance</li>
              <li>Mobile-friendly spacing and readable contrast</li>
            </ul>
          </div>
        </div>

        <div className="border-top border-white border-opacity-10 mt-4 pt-3 d-flex flex-column flex-md-row gap-2 justify-content-between text-white-50 small">
          <span>Designed by Hamza Al Homsy.</span>
          <span>© 2026 Todo-list</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
