import React from "react";
import Sidenav from "../../components/navbar/Sidenav";
import Navbar from "../../components/navbar/Navbar";

const Table = () => {
  return (
    <>
      <Sidenav />
      <main className="content">
        <Navbar />
        <div className="card border-0 shadow my-4">
          <div className="card-title">
            <h3 className="text-center mt-3 text-decoration-underline">
              Data Dokter
            </h3>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-centered table-nowrap mb-0 rounded">
                <thead className="thead-light">
                  <tr>
                    <th className="border-0 rounded-start">#</th>
                    <th className="border-0">Nama</th>
                    <th className="border-0">Poliklinik</th>
                    <th className="border-0">Email</th>
                    <th className="border-0">Address</th>
                    <th className="border-0 rounded-end">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Item */}
                  <tr>
                    <td>1</td>
                    <td>Dr. Jayanto</td>
                    <td>Umum</td>
                    <td>Jayanto@gmail.com</td>
                    <td>Jl. Magersari Blok.a no.13</td>
                    <td>
                      <a href="" className="btn btn-sm btn-warning py-1">
                        Detail
                      </a>
                    </td>
                  </tr>
                  {/* End of Item */}
                  {/* Item */}
                  <tr>
                    <td>2</td>
                    <td>Dr. Akbar</td>
                    <td>Gigi</td>
                    <td>Akbar@gmail.com</td>
                    <td>Jl. Berbek Blok.a no.13</td>
                    <td>
                      <a href="" className="btn btn-sm btn-warning py-1">
                        Detail
                      </a>
                    </td>
                  </tr>
                  {/* End of Item */}
                  {/* Item */}
                  <tr>
                    <td>3</td>
                    <td>Dr. Joshua</td>
                    <td>Jiwa</td>
                    <td>Joshua@gmail.com</td>
                    <td>Jl. Gedongan Blok.a no.13</td>
                    <td>
                      <a href="" className="btn btn-sm btn-warning py-1">
                        Detail
                      </a>
                    </td>
                  </tr>
                  {/* End of Item */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Table;
