const Details = () => {
    return (
        <>
            <div
                className="wrapper"
                style={{
                    backgroundImage: `url(${
                        process.env.PUBLIC_URL +
                        "/Photos-001/istockphoto-1399590160-1024x1024.jpg"
                    })`,
                }}
            >
                <div class="card-group">
                    <div class="card">
                        <img
                            src="backgroundImage"
                            class="card-img-top"
                            alt="..."
                        />
                        <div
                            className="wrapper"
                            style={{
                                backgroundImage: `url(${
                                    process.env.PUBLIC_URL +
                                    "/Photos-001/istockphoto-1399590160-1024x1024.jpg"
                                })`,
                            }}
                        >
                            <span>
                                <h2 className="badge bg-primary rounded-pill card-title">
                                    Details
                                </h2>
                            </span>
                            <div className="row">
                                <div className="col-sm-5">
                                    {" "}
                                    <p class="card-text">
                                        <ol class="list-group list-group-numbered">
                                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                                <div class="ms-2 me-auto">
                                                    <div class="fw-bold">
                                                        Name:
                                                    </div>
                                                    Content for list item
                                                </div>
                                                <span class="badge bg-primary rounded-pill">
                                                    14
                                                </span>
                                            </li>
                                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                                <div class="ms-2 me-auto">
                                                    <div class="fw-bold">
                                                        Date Uploaded:
                                                    </div>
                                                    Content for list item
                                                </div>
                                                <span class="badge bg-primary rounded-pill">
                                                    14
                                                </span>
                                            </li>
                                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                                <div class="ms-2 me-auto">
                                                    <div class="fw-bold">
                                                        Veiws
                                                    </div>
                                                    Content for list item
                                                </div>
                                                <span class="badge bg-primary rounded-pill">
                                                    14
                                                </span>
                                            </li>
                                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                                <div class="ms-2 me-auto">
                                                    <div class="fw-bold">
                                                        Category
                                                    </div>
                                                    Content for list item
                                                </div>
                                                <span class="badge bg-primary rounded-pill">
                                                    14
                                                </span>
                                            </li>
                                        </ol>
                                    </p>
                                </div>
                                <div className="col-sm-2"></div>
                                <div className="col-sm-5">
                                    <h6 card-header>Most Viewed</h6>
                                    <p class="card-text">
                                        <ol class="list-group list-group-numbered">
                                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                                <div class="ms-2 me-auto">
                                                    <div class="fw-bold">
                                                        Day
                                                    </div>
                                                    Content for list item
                                                </div>
                                                <small class="text-muted">
                                                    <span class="badge bg-primary rounded-pill">
                                                        14
                                                    </span>
                                                    Last updated 3 mins ago
                                                </small>
                                            </li>
                                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                                <div class="ms-2 me-auto">
                                                    <div class="fw-bold">
                                                        Week
                                                    </div>
                                                    Content for list item
                                                </div>
                                                <small class="text-muted">
                                                    <span class="badge bg-primary rounded-pill">
                                                        14
                                                    </span>
                                                    Last updated 3 mins ago
                                                </small>
                                            </li>
                                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                                <div class="ms-2 me-auto">
                                                    <div class="fw-bold">
                                                        Month
                                                    </div>
                                                    Content for list item
                                                </div>
                                                <small class="text-muted">
                                                    <span class="badge bg-primary rounded-pill">
                                                        14
                                                    </span>
                                                    Last updated 3 mins ago
                                                </small>
                                            </li>
                                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                                <div class="ms-2 me-auto">
                                                    <div class="fw-bold">
                                                        Year
                                                    </div>
                                                    Content for list item
                                                </div>
                                                <small class="text-muted">
                                                    <span class="badge bg-primary rounded-pill">
                                                        14
                                                    </span>
                                                    Last updated 3 mins ago
                                                </small>
                                            </li>
                                        </ol>
                                    </p>
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
