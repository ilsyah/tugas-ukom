import React from "react";
import Sidenav from "./components/navbar/Sidenav";
import Navbar from "./components/navbar/Navbar";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <Sidenav />
      <main className="content">
        <Navbar />
        <div className="row">
          <div className="col-12 col-sm-6 col-xl-4 my-4">
            <div className="card border-0 shadow">
              <div className="card-body">
                <div className="row d-block d-xl-flex align-items-center">
                  <div className="col-12 col-xl-5 text-xl-center mb-3 mb-xl-0 d-flex align-items-center justify-content-xl-center">
                    <div className="icon-shape icon-shape-primary rounded me-4 me-sm-0">
                      <svg
                        className="icon"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                      </svg>
                    </div>
                    <div className="d-sm-none">
                      <h2 className="h5">Customers</h2>
                      <h3 className="fw-extrabold mb-1">345,678</h3>
                    </div>
                  </div>
                  <div className="col-12 col-xl-7 px-xl-0">
                    <div className="d-none d-sm-block">
                      <h2 className="h6 text-gray-400 mb-0">Data Pasien</h2>
                      <h3 className="fw-extrabold mb-2">302</h3>
                    </div>
                    <small className="d-flex align-items-center text-gray-500">
                      Feb 2 - Mei 12,
                      <svg
                        className="icon icon-xxs text-gray-500 ms-2 me-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                          clipRule="evenodd"
                        />
                      </svg>
                      IDN
                    </small>
                    <div className="small d-flex mt-1">
                      <div>
                        Bulan terakhir
                        <svg
                          className="icon icon-xs text-success"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            fillRule="evenodd"
                            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-success fw-bolder">22%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-4 my-4">
            <div className="card border-0 shadow">
              <div className="card-body">
                <div className="row d-block d-xl-flex align-items-center">
                  <div className="col-12 col-xl-5 text-xl-center mb-3 mb-xl-0 d-flex align-items-center justify-content-xl-center">
                    <div className="icon-shape icon-shape-secondary rounded me-4 me-sm-0">
                      <svg
                        className="icon"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="d-sm-none">
                      <h2 className="fw-extrabold h5">Revenue</h2>
                      <h3 className="mb-1">$43,594</h3>
                    </div>
                  </div>
                  <div className="col-12 col-xl-7 px-xl-0">
                    <Link to="/table">
                      <div className="d-none d-sm-block">
                        <h2 className="h6 text-gray-400 mb-0">Data Dokter</h2>
                        <h3 className="fw-extrabold mb-2">11</h3>
                      </div>
                      <small className="d-flex align-items-center text-gray-500">
                        Feb 1 - Apr 1,
                        <svg
                          className="icon icon-xxs text-gray-500 ms-2 me-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                            clipRule="evenodd"
                          />
                        </svg>
                        IDN
                      </small>
                      <div className="small d-flex mt-1">
                        <div>
                          Bulan Terakhir
                          <svg
                            className="icon icon-xs text-danger"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-danger fw-bolder">2%</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-4 my-4">
            <div className="card border-0 shadow">
              <div className="card-body">
                <div className="row d-block d-xl-flex align-items-center">
                  <div className="col-12 col-xl-5 text-xl-center mb-3 mb-xl-0 d-flex align-items-center justify-content-xl-center">
                    <div className="icon-shape icon-shape-tertiary rounded me-4 me-sm-0">
                      <svg
                        className="icon"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="d-sm-none">
                      <h2 className="fw-extrabold h5">Bounce Rate</h2>
                      <h3 className="mb-1">50.88%</h3>
                    </div>
                  </div>
                  <div className="col-12 col-xl-7 px-xl-0">
                    <div className="d-none d-sm-block">
                      <h2 className="h6 text-gray-400 mb-0">Bounce Rate</h2>
                      <h3 className="fw-extrabold mb-2">50.88%</h3>
                    </div>
                    <small className="text-gray-500"> Feb 1 - Apr 1 </small>
                    <div className="small d-flex mt-1">
                      <div>
                        Since last month
                        <svg
                          className="icon icon-xs text-success"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            fillRule="evenodd"
                            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-success fw-bolder">4%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
