import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Form from "./Form";

export const ListData = () => {
  const [listData, setListData] = useState([]);
  useEffect(() => {
    JSON.parse(localStorage.getItem("dataBantuan"));
  }, []);
  const handleDelete = (item) => {
    const data = JSON.parse(localStorage.getItem("dataBantuan"))[item];
    if (data.length === 0) {
      localStorage.removeItem(data);
      Swal.fire({
        icon: "success",
        title: "Yeaayy",
        text: "berhasil dihapus",
      });
    }
  };
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
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {listData?.map((data, i) => (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{data.namaLengkap}</td>
                  <td>{data.nik}</td>
                  <td>{data.nokk}</td>
                  <td>
                    <img
                      src={data.fotoKtp.imageUrl}
                      className="img-thumbnail"
                      alt="fotoKtp"
                    />
                  </td>
                  <td>
                    <img
                      src={data.fotoKK.imageUrl}
                      className="img-thumbnail"
                      alt="fotoKtp"
                    />
                  </td>
                  <td>{data.umur}</td>
                  <td>{data.jenisKelamin}</td>
                  <td>{data.provinsi}</td>
                  <td>{data.kota}</td>
                  <td>{data.kecamatan}</td>
                  <td>{data.kelurahan}</td>
                  <td>{data.alamat}</td>
                  <td>{data.rt}</td>
                  <td>{data.rw}</td>
                  <td>{data.prapandemi}</td>
                  <td>{data.pascapandemi}</td>
                  <td>{data.alasan}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => handleDelete(i)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Form setListData={setListData} listData={listData} />
    </>
  );
};
