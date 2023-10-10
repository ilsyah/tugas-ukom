import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-top navbar-expand navbar-dashboard navbar-dark ps-0 pe-2 pb-0">
      <div
        className="d-flex justify-content-between w-100"
        id="navbarSupportedContent">
        <div className="d-flex align-items-center">
          {/* Search form */}

          {/* / Search form */}
        </div>
        {/* Navbar links */}
        <ul className="navbar-nav align-items-center">
          <li className="nav-item dropdown ms-lg-3">
            <a
              className="nav-link dropdown-toggle pt-1 px-0"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              <div className="media d-flex align-items-center pb-2">
                <span>
                  <i
                    style={{ fontSize: 150 + "%" }}
                    className="fa fa-user-circle"></i>
                </span>
                <span className="mb-1 ms-2">Admin</span>
              </div>
            </a>
            <div className="dropdown-menu dashboard-dropdown dropdown-menu-end mt-2 py-1">
              <div role="separator" className="dropdown-divider my-1" />
              <a className="dropdown-item d-flex align-items-center" href="#">
                <svg
                  className="dropdown-icon text-danger me-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                Logout
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
