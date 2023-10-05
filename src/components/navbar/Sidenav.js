import React from "react";
import profile from "../../assets/img/team/profile-picture-3.jpg";
import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <>
      <nav className="navbar navbar-dark navbar-theme-primary px-4 col-12 d-lg-none">
        <a className="navbar-brand me-lg-5" href="../../index.html">
          <img
            className="navbar-brand-dark"
            src="../../assets/img/brand/light.svg"
            alt="Volt logo"
          />
          <img
            className="navbar-brand-light"
            src="../../assets/img/brand/dark.svg"
            alt="Volt logo"
          />
        </a>
        <div className="d-flex align-items-center">
          <button
            className="navbar-toggler d-lg-none collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#sidebarMenu"
            aria-controls="sidebarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
        </div>
      </nav>
      <nav
        id="sidebarMenu"
        className="sidebar d-lg-block bg-gray-800 text-white collapse"
        data-simplebar>
        <div className="sidebar-inner px-4 pt-3">
          <div className="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
            <div className="d-flex align-items-center">
              <div className="avatar-lg me-4">
                <img
                  src=""
                  className="card-img-top rounded-circle border-white"
                  alt=""
                />
              </div>
              <div className="d-block">
                <h2 className="h5 mb-3">Hi, Admin</h2>
                <a
                  href="../../pages/examples/sign-in.html"
                  className="btn btn-secondary btn-sm d-inline-flex align-items-center">
                  <svg
                    className="icon icon-xxs me-1"
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
                  Sign Out
                </a>
              </div>
            </div>
            <div className="collapse-close d-md-none">
              <a
                href="#sidebarMenu"
                data-bs-toggle="collapse"
                data-bs-target="#sidebarMenu"
                aria-controls="sidebarMenu"
                aria-expanded="true"
                aria-label="Toggle navigation">
                <svg
                  className="icon icon-xs"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
          <ul className="nav flex-column pt-3 pt-md-0">
            <li className="nav-item">
              <a
                href="../../index.html"
                className="nav-link d-flex align-items-center">
                <span className="sidebar-icon">
                  <img
                    src="../../assets/img/brand/light.svg"
                    height={20}
                    width={20}
                    alt="Volt Logo"
                  />
                </span>
                <span className="mt-1 ms-1 sidebar-text">Puskesmas Sehat</span>
              </a>
            </li>
            <li
              role="separator"
              className="dropdown-divider mt-4 mb-3 border-gray-700"
            />
            <li className="nav-item">
              <Link to="/dashboard" className="nav-link">
                <span className="sidebar-icon">
                  <svg
                    className="icon icon-xs me-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                  </svg>
                </span>
                <span className="sidebar-text">Dashboard</span>
              </Link>
            </li>
            <li className="nav-item">
              <span
                className="nav-link collapsed d-flex justify-content-between align-items-center"
                data-bs-toggle="collapse"
                data-bs-target="#submenu-pages">
                <span>
                  <span className="sidebar-icon">
                    <svg
                      className="icon icon-xs me-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                        clipRule="evenodd"
                      />
                      <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                    </svg>
                  </span>
                  <span className="sidebar-text">Data - Data</span>
                </span>
                <span className="link-arrow">
                  <svg
                    className="icon icon-sm"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </span>
              <div
                className="multi-level collapse"
                role="list"
                id="submenu-pages"
                aria-expanded="false">
                <ul className="flex-column nav">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="../../pages/examples/sign-in.html">
                      <span className="sidebar-text">Data Pasien</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/table">
                      <span className="sidebar-text">Data Dokter</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="../../pages/examples/forgot-password.html">
                      <span className="sidebar-text">Data Poliklinik</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="../../pages/examples/reset-password.html">
                      <span className="sidebar-text">Data Puskesmas</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a
                href="../../pages/dashboard/dashboard.html"
                className="nav-link">
                <span className="sidebar-icon">
                  <svg
                    className="icon icon-xs me-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                    <path
                      fillRule="evenodd"
                      d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="sidebar-text">History</span>
              </a>
            </li>

            <li
              role="separator"
              className="dropdown-divider mt-4 mb-3 border-gray-700"
            />
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Sidenav;
