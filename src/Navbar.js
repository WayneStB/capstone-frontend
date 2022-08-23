import React, { useState } from "react";
import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBContainer,
    MDBIcon,
    MDBCollapse,
    MDBBtn,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

const Navbar = () => {
    const [showBasic, setShowBasic] = useState(false);

    return (
        <header>
            <MDBNavbar expand="lg" light bgColor="info">
                <MDBContainer fluid>
                    <MDBNavbarToggler
                        onClick={() => setShowBasic(!showBasic)}
                        aria-controls="navbarExample01"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <MDBIcon fas icon="bars" />
                    </MDBNavbarToggler>
                    <MDBCollapse navbar show={showBasic}>
                        <MDBNavbarNav right className="mb-2 mb-lg-0">
                            <MDBNavbarItem active>
                                <Link to="/">
                                    <MDBNavbarLink
                                        to="/"
                                        aria-current="page"
                                        href="#"
                                    >
                                        Home
                                    </MDBNavbarLink>
                                </Link>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href="#">Explore</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href="#">Content</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href="#">Friends</MDBNavbarLink>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                        <MDBNavbarNav className="d-flex flex-row-reverse">
                            <MDBNavbarItem>
                                <Link to="/login">
                                    <MDBNavbarLink>Sign In</MDBNavbarLink>
                                </Link>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href="#">Settings</MDBNavbarLink>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>

            <div
                className="p-5 text-center bg-image"
                style={{
                    backgroundImage:
                        "url('https://mdbootstrap.com/img/new/slides/041.webp')",
                    height: "400px",
                }}
            >
                <div
                    className="mask"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
                >
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <div className="text-warning">
                            <Typography
                                variant="h1"
                                component="div"
                                sx={{ flexGrow: 1 }}
                            >
                                PurePlix
                            </Typography>
                            <h4 className="mb-3 text-danger">Subheading</h4>
                            <MDBBtn
                                tag="a"
                                outline
                                size="sm"
                                className="link-info"
                            >
                                Your Artwork last longer when you Save it.
                            </MDBBtn>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
