export const DashboardContent = () => {
  return (
    <>
      <h1 className="mt-4">Dashboard</h1>
      <ol className="breadcrumb mb-4">
        <li className="breadcrumb-item active">Dashboard</li>
      </ol>
      <div className="row">
        <div className="col">
          <div className="card bg-primary text-white mb-4">
            <div className="card-body">
              Total Penerima Data Bantuan
              <div className="quantyty">
                <h1>
                  {JSON.parse(localStorage.getItem("dataBantuan")).length}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
