import React from "react";
import Sidenav from "../../components/navbar/Sidenav";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";

const Antrian = () => {
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
                    <div className="icon-shape icon-shape-info rounded me-4 me-sm-0">
                      <span>
                        <i className="fa fa-user"></i>
                      </span>
                    </div>
                    <div className="d-sm-none">
                      <h2 className="h5">Nama : Rafli Danu</h2>
                      <h3 className="fw-extrabold mb-1 text-center">1</h3>
                    </div>
                  </div>
                  <div className="col-12 col-xl-7 px-xl-0">
                    <div className="d-none d-sm-block">
                      <h2 className="h6 text-gray-400 mb-2">
                        Nama : Rafli Danu
                      </h2>
                      <h3 className="h1 mb-2 text-center pe-2">1</h3>
                    </div>
                    <small className="d-flex align-items-center text-gray-500">
                      address : Jl.Beringin
                    </small>
                    <div className="small d-grid mt-1 gap-2">
                      <Link to="" className="btn btn-sm btn-warning fw-medium">
                        Detail
                      </Link>
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
                    <div className="icon-shape icon-shape-info rounded me-4 me-sm-0">
                      <span>
                        <i className="fa fa-user"></i>
                      </span>
                    </div>
                    <div className="d-sm-none">
                      <h2 className="h5">Nama : Ardianto</h2>
                      <h3 className="fw-extrabold mb-1 text-center">2</h3>
                    </div>
                  </div>
                  <div className="col-12 col-xl-7 px-xl-0">
                    <div className="d-none d-sm-block">
                      <h2 className="h6 text-gray-400 mb-2">Nama : Ardianto</h2>
                      <h3 className="h1 mb-2 text-center pe-2">2</h3>
                    </div>
                    <small className="d-flex align-items-center text-gray-500">
                      Address : Jl. Berdikari
                    </small>
                    <div className="small d-grid mt-1 gap-2">
                      <Link to="" className="btn btn-sm btn-warning fw-medium">
                        Detail
                      </Link>
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

export default Antrian;
