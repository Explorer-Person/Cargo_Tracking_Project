import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";

const FooterUI = () => {
  const updatedYear = new Date().getFullYear();
  return (
    <MDBFooter
      className="text-center"
      color="white"
      style={{ backgroundColor: "#191919" }}
    >
      <MDBContainer className="p-4">
        <section className="">
          <MDBRow className="justify-content-center">
            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Info</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white text-decoration-none">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white text-decoration-none">
                    Site Map
                  </a>
                </li>
              </ul>
            </MDBCol>
            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Our - Motto</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <p>
                    From seamless air transport to swift sea logistics, we
                    navigate the world to bring your cargo where it needs to be
                    - on time, every time
                  </p>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Contact</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a>Email</a>
                </li>
                <li>
                  <a>Phone</a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © {updatedYear} Copyright : Articway Logistic - All rights reserved.
      </div>
    </MDBFooter>
  );
};

export default FooterUI;
