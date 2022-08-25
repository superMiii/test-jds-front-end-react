function Form() {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
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
              <form id="inputData">
                <div>
                  <label>Nama Lengkap</label>
                  <input
                    type="text"
                    id="namaLengkap"
                    placeholder="Nama Lengkap"
                  />
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
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
