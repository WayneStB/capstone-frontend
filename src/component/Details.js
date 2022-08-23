const Details = () => {
    return (
        <>
            <div
                className="wrapper"
                style={{
                    backgroundImage: `url("https://pureflix.s3.amazonaws.com/istockphoto-1399590160-1024x1024.jpg")`,
                }}
            >
                <div className="card-group">
                    <div className="card">
                        <img
                            src="backgroundImage"
                            className="card-img-top"
                            alt="..."
                        />
                        <div
                            className="wrapper"
                            style={{
                                backgroundImage: `url("https://pureflix.s3.amazonaws.com/istockphoto-1399590160-1024x1024.jpg")`,
                            }}
                        >
                            <span
                                style={{
                                    textAlign: "center",
                                    color: "#054FA4",
                                }}
                            >
                                <h1>Details</h1>
                            </span>
                            <div className="row">
                                <div className="col-sm-5">
                                    {" "}
                                    <div className="card-text">
                                        <ol className="list-group list-group-numbered">
                                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                                <div className="ms-2 me-auto">
                                                    <div className="fw-bold">
                                                        Name:
                                                    </div>
                                                    Content for list item
                                                </div>
                                                <span className="badge bg-primary rounded-pill">
                                                    14
                                                </span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                                <div className="ms-2 me-auto">
                                                    <div className="fw-bold">
                                                        Date Uploaded:
                                                    </div>
                                                    Content for list item
                                                </div>
                                                <span className="badge bg-primary rounded-pill">
                                                    14
                                                </span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                                <div className="ms-2 me-auto">
                                                    <div className="fw-bold">
                                                        Veiws
                                                    </div>
                                                    Content for list item
                                                </div>
                                                <span className="badge bg-primary rounded-pill">
                                                    14
                                                </span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                                <div className="ms-2 me-auto">
                                                    <div className="fw-bold">
                                                        Category
                                                    </div>
                                                    Content for list item
                                                </div>
                                                <span className="badge bg-primary rounded-pill">
                                                    14
                                                </span>
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="col-sm-2"></div>
                                <div className="col-sm-5">
                                    <h6 className="card-header">Most Viewed</h6>
                                    <div className="card-text">
                                        <ol className="list-group list-group-numbered">
                                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                                <div className="ms-2 me-auto">
                                                    <div className="fw-bold">
                                                        Day
                                                    </div>
                                                    Content for list item
                                                </div>
                                                <small className="text-muted">
                                                    <span className="badge bg-primary rounded-pill">
                                                        14
                                                    </span>
                                                    Last updated 3 mins ago
                                                </small>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                                <div className="ms-2 me-auto">
                                                    <div className="fw-bold">
                                                        Week
                                                    </div>
                                                    Content for list item
                                                </div>
                                                <small className="text-muted">
                                                    <span className="badge bg-primary rounded-pill">
                                                        14
                                                    </span>
                                                    Last updated 3 mins ago
                                                </small>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                                <div className="ms-2 me-auto">
                                                    <div className="fw-bold">
                                                        Month
                                                    </div>
                                                    Content for list item
                                                </div>
                                                <small className="text-muted">
                                                    <span className="badge bg-primary rounded-pill">
                                                        14
                                                    </span>
                                                    Last updated 3 mins ago
                                                </small>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                                <div className="ms-2 me-auto">
                                                    <div className="fw-bold">
                                                        Year
                                                    </div>
                                                    Content for list item
                                                </div>
                                                <small className="text-muted">
                                                    <span className="badge bg-primary rounded-pill">
                                                        14
                                                    </span>
                                                    Last updated 3 mins ago
                                                </small>
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ;
            </div>
        </>
    );
};

export default Details;
