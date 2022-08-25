function Form() {
  return (
    <div className="form-input">
      <form id="inputData">
        <div>
          <label>Nama Lengkap</label>
          <input type="text" id="namaLengkap" placeholder="Nama Lengkap" />
        </div>
        <div>
          <label>NIK</label>
          <input type="text" id="namaLengkap" placeholder="NIK" />
        </div>
        <div>
          <label>NO KK</label>
          <input type="text" id="namaLengkap" placeholder="NO KK" />
        </div>
        <div>
          <label>Foto KTP</label>
          <input type="file" id="namaLengkap" placeholder="Foto KTP" />
        </div>
        <div>
          <label>Foto KK</label>
          <input type="file" id="namaLengkap" placeholder="Foto KK" />
        </div>
        <div>
          <label>Umur</label>
          <input type="umur" id="umur" placeholder="Umur" />
        </div>
      </form>
    </div>
  );
}

export default Form;
