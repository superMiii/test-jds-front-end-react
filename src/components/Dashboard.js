export const Dashboard = () => {
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
              User
              <div className="quantyty">
                <h1>Hai</h1>
              </div>
            </div>
            <div className="card-footer d-flex align-items-center justify-content-between">
              <a
                className="small text-white stretched-link"
                href="#/admin_user"
              >
                View Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
