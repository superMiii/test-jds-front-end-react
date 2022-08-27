import { useEffect, useState } from "react";
import { City, District, Province, Village } from "../utils/Fetch";

function Form() {
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [villages, setVillages] = useState([]);
  const [namaLengkap, setNamaLengkap] = useState("");
  const [nik, setNik] = useState("");
  const [nokk, setNokk] = useState("");
  const [fotoKtp, setFotoKtp] = useState(null);
  const [fotoKK, setFotoKK] = useState(null);
  const [umur, setUmur] = useState("");
  const [jenisKelamin, setJenisKelamin] = useState("");
  const [provinsi, setProvinsi] = useState("");
  const [kota, setKota] = useState("");
  const [kecamatan, setKecamatan] = useState("");
  const [kelurahan, setKelurahan] = useState("");
  const [alamat, setAlamat] = useState("");
  const [rt, setRt] = useState("");
  const [rw, setRw] = useState("");
  const [prapandemi, setPrapandemi] = useState("");
  const [pascapandemi, setPascapandemi] = useState("");
  const [alasan, setAlasan] = useState("");
  const [alasanLainnya, setAlasanLainnya] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  useEffect(() => {
    const getProvince = async () => {
      const req = await Province();
      setProvinces(req);
    };
    getProvince();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      namaLengkap,
      nik,
      nokk,
      fotoKtp,
      fotoKK,
      umur,
      jenisKelamin,
      provinsi,
      kota,
      kecamatan,
      kelurahan,
      alamat,
      rt,
      rw,
      prapandemi,
      pascapandemi,
      alasan,
    };
    // console.log(forms);
  };
  const selectedProvince = async (e) => {
    const req = await City(e);
    setCities(req);
  };
  const selectedCity = async (e) => {
    const req = await District(e);
    setDistricts(req);
  };
  const selectedDistricts = async (e) => {
    const req = await Village(e);
    setVillages(req);
  };
  const onFileKtp = (file) => {
    if (!file) {
      return;
    }
    const reader = new FileReader();

    reader.onload = (e) => {
      setFotoKtp({
        imageUrl: reader.result,
        name: file.target.files[0].name,
      });
    };
    reader.readAsDataURL(file.target.files[0]);
  };

  const onFileKK = (file) => {
    if (!file) {
      return;
    }
    const reader = new FileReader();

    reader.onload = (e) => {
      setFotoKK({
        imageUrl: reader.result,
        name: file.target.files[0].name,
      });
    };
    reader.readAsDataURL(file.target.files[0]);
  };
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog w-100">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Modal title
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="form-input">
              <form id="inputData" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col">
                    <label>Nama Lengkap</label>
                    <input
                      type="text"
                      id="namaLengkap"
                      placeholder="Nama Lengkap"
                      className="form-control"
                      onChange={(e) => setNamaLengkap(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <label>NIK</label>
                    <input
                      type="number"
                      id="nim"
                      placeholder="NIK"
                      className="form-control"
                      onChange={(e) => setNik(e.target.value)}
                    />
                  </div>
                  <div className="col-lg-6">
                    <label>NO KK</label>
                    <input
                      type="number"
                      id="nokk"
                      placeholder="NO KK"
                      className="form-control"
                      onChange={(e) => setNokk(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <label>Foto KTP</label>
                    <input
                      type="file"
                      id="filektp"
                      placeholder="Foto KTP"
                      className="form-control"
                      accept="image/jpg, image/jpeg, image/png, image/bmp"
                      onChange={(e) => onFileKtp(e)}
                    />
                  </div>
                  <div className="col-lg-6">
                    <label>Foto KK</label>
                    <input
                      type="file"
                      id="filekk"
                      placeholder="Foto KK"
                      accept="image/jpg, image/jpeg, image/png, image/bmp"
                      className="form-control"
                      onChange={(e) => onFileKK(e)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <label>Umur</label>
                    <input
                      type="number"
                      id="umur"
                      placeholder="Umur"
                      className="form-control"
                      onChange={(e) => setUmur(e.target.value)}
                    />
                  </div>
                  <div className="col-lg-6">
                    <label>Jenis Kelamin</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      id="jenisKelamin"
                      onChange={(e) => setJenisKelamin(e.target.value)}
                    >
                      <option>Pilihan</option>
                      <option value="Laki-laki">Laki-laki</option>
                      <option value="Perempuan">Perempuan</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <label>Provinsi</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      id="provinsi"
                      onChange={(e) => {
                        selectedProvince(e.target.value);
                        setProvinsi(e.target.value);
                      }}
                    >
                      <option>PILIHAN</option>
                      {provinces.map((province, index) => (
                        <option value={province.id} key={index}>
                          {province.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-lg-6">
                    <label>Kota/Kab</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      id="kota"
                      onChange={(e) => {
                        selectedCity(e.target.value);
                        setKota(e.target.value);
                      }}
                    >
                      <option>PILIHAN</option>
                      {cities.map((city, index) => (
                        <option value={city.id} key={index}>
                          {city.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <label>Kecamatan</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      id="kecamatan"
                      onChange={(e) => {
                        selectedDistricts(e.target.value);
                        setKecamatan(e.target.value);
                      }}
                    >
                      <option>PILIHAN</option>
                      {districts.map((district, index) => (
                        <option value={district.id} key={index}>
                          {district.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-lg-6">
                    <label>Kelurahan</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      id="kelurahan"
                      onChange={(e) => setKelurahan(e.target.value)}
                    >
                      <option>PILIHAN</option>
                      {villages.map((village, index) => (
                        <option value={village.id} key={index}>
                          {village.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <label>Alamat</label>
                    <textarea
                      rows={5}
                      maxLength={255}
                      className="form-control"
                      id="alamat"
                      onChange={(e) => setAlamat(e.target.value)}
                    ></textarea>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <label>RT</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="RT"
                      id="rt"
                      onChange={(e) => setRt(e.target.value)}
                    />
                  </div>
                  <div className="col-lg-6">
                    <label>RW</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="RT"
                      id="rw"
                      onChange={(e) => setRw(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <label>Penghasilan Sebelum Pandemi</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Penghasilan prapandemi"
                      id="penghasilanpra"
                      onChange={(e) => setPrapandemi(e.target.value)}
                    />
                  </div>
                  <div className="col-lg-6">
                    <label>Penghasilan Sesudah Pandemi</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Penghasilan pascapandemi"
                      id="penghasilanpasca"
                      onChange={(e) => setPascapandemi(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <label>Alasan membutuhkan bantuan</label>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
                        Kehilangan pekerjaan
                      </label>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault2"
                      >
                        Kepala keluarga terdampak atau korban Covid-19
                      </label>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault3"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault3"
                      >
                        Tergolong fakir/miskin semenjak sebelum Covid-19
                      </label>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault4"
                      />
                      <input
                        className="form-control"
                        placeholder="lainnya"
                        onChange={(e) => setAlasanLainnya(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                        onChange={(e) => setIsChecked(e.target.checked)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        Saya menyatakan bahwa data yang diisikan adalah benar
                        dan siap mempertanggungjawabkan apabila ditemukan
                        ketidaksesuaian dalam data tersebut.
                      </label>
                    </div>
                  </div>
                </div>
                <div className="d-grid gap-2 mt-2">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={!isChecked ? "disabled" : ""}
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
