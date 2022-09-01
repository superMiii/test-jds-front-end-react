import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { City, District, Province, Village } from "../utils/Fetch";

function Form({ setListData, listData }) {
  const navigate = useNavigate();
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [villages, setVillages] = useState([]);
  const [namaLengkap, setNamaLengkap] = useState("");
  const [nik, setNik] = useState(0);
  const [nokk, setNokk] = useState(0);
  const [fotoKtp, setFotoKtp] = useState(null);
  const [fotoKK, setFotoKK] = useState(null);
  const [umur, setUmur] = useState(0);
  const [jenisKelamin, setJenisKelamin] = useState("");
  const [provinsi, setProvinsi] = useState("");
  const [kota, setKota] = useState("");
  const [kecamatan, setKecamatan] = useState("");
  const [kelurahan, setKelurahan] = useState("");
  const [alamat, setAlamat] = useState("");
  const [rt, setRt] = useState(0);
  const [rw, setRw] = useState(0);
  const [prapandemi, setPrapandemi] = useState("");
  const [pascapandemi, setPascapandemi] = useState("");
  const [alasan, setAlasan] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  useEffect(() => {
    const getProvince = async () => {
      const req = await Province();
      setProvinces(req);
    };
    getProvince();
  }, [listData]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (namaLengkap === "") {
      alert("Nama Tidak Boleh Kosong");
    } else if (nik === 0) {
      alert("NIK Tidak Boleh Kosong");
    } else if (nik.length < 16) {
      alert("NIK Tidak Boleh Kurang dari 16 Digit");
    } else if (nik.length > 16) {
      alert("NIK Tidak Boleh Lebih dari 16 Digit");
    } else if (nokk === 0) {
      alert("Nomor Kartu keluarga Tidak Boleh Kosong");
    } else if (nokk.length < 16) {
      alert("Nomor Kartu keluarga Kurang dari 16 Digit");
    } else if (nokk.length > 16) {
      alert("Nomor Kartu keluarga Lebih dari 16 Digit");
    } else if (fotoKtp == null) {
      alert("Foto EKTP tidak boleh kosong");
    } else if (fotoKK == null) {
      alert("Foto Kartu Keluarga tidak boleh kosong");
    } else if (fotoKtp.size > 2000000) {
      alert("File foto EKTP tidak boleh lebih dari 2MB");
    } else if (fotoKK.size > 2000000) {
      alert("File foto KK tidak boleh lebih dari 2MB");
    } else if (umur === 0) {
      alert("Umur Tidak Boleh Kosong");
    } else if (umur < 25) {
      alert("Umur Tidak Kurang dari 25 Tahun");
    } else if (jenisKelamin === "") {
      alert("Jenis Kelamin Tidak Boleh Kosong");
    } else if (provinsi === "") {
      alert("Provinsi Tidak Boleh Kosong");
    } else if (kota === "") {
      alert("Kab/Kota Tidak Boleh Kosong");
    } else if (kecamatan === "") {
      alert("Kecamatan Tidak Boleh Kosong");
    } else if (kelurahan === "") {
      alert("Kelurahan/Desa Tidak Boleh Kosong");
    } else if (alamat === "") {
      alert("Alamat Tidak Boleh Kosong");
    } else if (rt === 0) {
      alert("RT Tidak Boleh Kosong");
    } else if (rw === 0) {
      alert("RW Tidak Boleh Kosong");
    } else if (alasan === "") {
      alert("Pilihan tidak boleh kosong");
    } else {
      const d = new Date();
      let text = d.toISOString();
      const provinceSelected = provinces.filter((item) => item.id === provinsi);
      const kotaSelected = cities.filter((item) => item.id === kota);
      const kecamatanSelected = districts.filter(
        (item) => item.id === kecamatan
      );
      const kelurahanSelected = villages.filter(
        (item) => item.id === kelurahan
      );
      const data = {
        id: text,
        namaLengkap,
        nik,
        nokk,
        fotoKtp,
        fotoKK,
        umur,
        jenisKelamin,
        provinsi: provinceSelected[0].name,
        kota: kotaSelected[0].name,
        kecamatan: kecamatanSelected[0].name,
        kelurahan: kelurahanSelected[0].name,
        alamat,
        rt,
        rw,
        prapandemi,
        pascapandemi,
        alasan,
      };
      let setTimer = Math.floor(Math.random() * 2000);
      if (setTimer > 1500) {
        setTimeout(() => {
          console.log("Interval Server Error");
          alert("Interval Server Error");
        }, setTimer);
      } else {
        setTimeout(() => {
          console.log("Berhasil");
          localStorage.setItem(
            "dataBantuan",
            JSON.stringify(listData?.length > 0 ? [...listData, data] : [data])
          );
        }, Math.floor(Math.random() * 2000));
        setListData((datas) => (datas?.length > 0 ? [...datas, data] : [data]));
        Swal.fire({
          icon: "success",
          title: "Yeaayy",
          text: "berhasil ditambahkan",
        });
        navigate("/data", { replace: true });
        setNamaLengkap("");
        setNik("");
        setNokk("");
        setFotoKtp("");
        setFotoKK("");
        setUmur("");
        setJenisKelamin("");
        setProvinsi("");
        setKota("");
        setKecamatan("");
        setKelurahan("");
        setRt("");
        setRw("");
        setPrapandemi("");
        setPascapandemi("");
        setAlasan("");
        setAlamat("");
      }
    }
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
        size: file.target.files[0].size,
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
        size: file.target.files[0].size,
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
                      value={namaLengkap}
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
                      value={nik}
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
                      value={nokk}
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
                      value={umur}
                    />
                  </div>
                  <div className="col-lg-6">
                    <label>Jenis Kelamin</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      id="jenisKelamin"
                      onChange={(e) => setJenisKelamin(e.target.value)}
                      value={jenisKelamin}
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
                      value={provinsi}
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
                      value={kota}
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
                      value={kecamatan}
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
                      value={kelurahan}
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
                      value={alamat}
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
                      value={rt}
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
                      value={rw}
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
                      value={prapandemi}
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
                      value={pascapandemi}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <label>Alasan membutuhkan bantuan</label>
                    {/* <div onChange={(e) => setAlasan(e.target.value)}> */}
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        value="Kehilangan pekerjaan"
                        onChange={(e) => setAlasan(e.target.value)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
                        Kehilangan pekerjaan
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        value="Kepala keluarga terdampak atau korban Covid-19"
                        onChange={(e) => setAlasan(e.target.value)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault2"
                      >
                        Kepala keluarga terdampak atau korban Covid-19
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault3"
                        value="Tergolong fakir/miskin semenjak sebelum Covid-19"
                        onChange={(e) => setAlasan(e.target.value)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault3"
                      >
                        Tergolong fakir/miskin semenjak sebelum Covid-19
                      </label>
                    </div>
                    {/* </div> */}
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault4"
                        value={alasan}
                      />
                      <input
                        className="form-control"
                        placeholder="lainnya"
                        onChange={(e) => setAlasan(e.target.value)}
                        // value={alasan}
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
