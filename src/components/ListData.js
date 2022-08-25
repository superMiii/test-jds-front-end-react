import { useState } from "react";
import { Link } from "react-router-dom";
import Form from "./Form";

export const ListData = () => {
  const [listData, setListData] = useState(localStorage.getItem("listData"));
  return (
    <>
      <h1 className="mt-4">Data Bantuan Covid-19</h1>
      <ol className="breadcrumb mb-4">
        <li className="breadcrumb-item active">List data</li>
      </ol>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add Data
      </button>

      <div className="row">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nama</th>
                <th scope="col">NIK</th>
                <th scope="col">Nomor KK</th>
                <th scope="col">Foto KTP</th>
                <th scope="col">Foto KK</th>
                <th scope="col">Umur</th>
                <th scope="col">Jenis Kelamin</th>
                <th scope="col">Provinsi</th>
                <th scope="col">Kab/Kota</th>
                <th scope="col">Kecamatan</th>
                <th scope="col">Kelurahan</th>
                <th scope="col">Alamat</th>
                <th scope="col">RT</th>
                <th scope="col">RW</th>
                <th scope="col">Penghasilan Sebelum Pandemi</th>
                <th scope="col">Penghasilan Setelah Pandemi</th>
                <th scope="col">Alasan membutuhkan bantuan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Form />
    </>
  );
};
