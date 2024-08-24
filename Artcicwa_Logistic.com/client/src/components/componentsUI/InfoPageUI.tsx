// import Styles from "/public/css/styles.module.css";
import { InfoPageUIProps } from "../../interfaces/InterfaceComponents";
import { Container, Row, Col, Table, Button } from "reactstrap";
import Styles from "/public/css/styles.module.css";
import { useState } from "react";

const InfoPageUI = ({ contentDetailData, handleLogout }: InfoPageUIProps) => {
  const [width] = useState(window.innerWidth);
  return (
    <div>
      <div
        className={`${Styles.infoBox}`}
      >
        <Container className="w-100">
          <Container className="w-100 shadow p-5 border-muted bg-dark">
            {contentDetailData.shipmentDetails.map((shipment) => (
              <Container
                key={shipment.id}
                className="mb-5 text-center shadow justify-content-center bg-light"
              >
                <Row>
                  <Container className="w-100">
                    <img className="w-100" src="/logos/info-header1.png" />
                  </Container>
                </Row>
                <Row>
                  <Row>
                    <Container>
                      <Row className="m-2 w-100">
                        <Col>
                          <Row>
                            <Container className="border border-muted shadow">
                              <Row className=" bg-dark text-light border border-ligth text-light">
                                <h6 className="text-center my-2">
                                  Carrier Tracking Code
                                </h6>
                              </Row>
                              <Row className="my-1">
                                <h6 className="text-center">
                                  {shipment.element.carrierTrackingCode}
                                </h6>
                              </Row>
                            </Container>
                          </Row>
                          <Row>
                            <Container className="border border-muted shadow ">
                              <Row className=" bg-dark text-light border border-ligth text-light">
                                <h6 className="text-center my-2">Name</h6>
                              </Row>
                              <Row className="my-1">
                                <h6 className="text-center">
                                  {shipment.element.name}
                                </h6>
                              </Row>
                            </Container>
                          </Row>

                          <Row>
                            <Container className="border border-muted shadow ">
                              <Row className=" bg-dark text-light border border-ligth text-light">
                                <h6 className="text-center my-2">Phone</h6>
                              </Row>
                              <Row className="my-1">
                                <h6 className="text-center">
                                  {shipment.element.phone}
                                </h6>
                              </Row>
                            </Container>
                          </Row>
                        </Col>
                        <Col>
                          <Row>
                            <Container className="border border-muted shadow ">
                              <Row className=" bg-dark text-light border border-ligth text-light">
                                <h6 className="text-center my-2">Country</h6>
                              </Row>
                              <Row className="my-1">
                                <h6 className="text-center">
                                  {shipment.element.country}
                                </h6>
                              </Row>
                            </Container>
                          </Row>
                          <Row>
                            <Container className="border border-muted shadow ">
                              <Row className=" bg-dark text-light border border-ligth text-light">
                                <h6 className="text-center my-2">
                                  Addres Line 1
                                </h6>
                              </Row>
                              <Row className="my-1">
                                <h6 className="text-center">
                                  {shipment.element.addressLine1}
                                </h6>
                              </Row>
                            </Container>
                          </Row>
                          <Row>
                            <Container className="border border-muted shadow ">
                              <Row className=" bg-dark text-light border border-ligth text-light">
                                <h6 className="text-center my-2">Ship Date</h6>
                              </Row>
                              <Row className="my-1">
                                <h6 className="text-center">
                                  {shipment.element.shipDate}
                                </h6>
                              </Row>
                            </Container>
                          </Row>
                        </Col>
                      </Row>
                    </Container>
                  </Row>

                  <Container className="w-100 py-3">
                    {width <= 550 ? (
                      <Container className="border border-muted shadow ">
                        <Row className=" bg-dark text-light border border-ligth text-light">
                          <h6 className="text-center my-2">Shipment Events</h6>
                        </Row>
                        {shipment.element.shipmentEvents.map((event) => (
                          <Row className="my-1 border border-secondary">
                            <div className="w-100 bg-secondary text-light border border-secondary">
                              Event -- {event.element.eventDate}
                            </div>

                            <ul className={`${Styles.infoList}`} key={event.id}>
                              <li>
                                <h6>Time: </h6> <p>{event.element.eventTime}</p>
                              </li>
                              <hr />
                              <li>
                                <h6>Location: </h6>{" "}
                                <p>{event.element.location}</p>
                              </li>
                              <hr />
                              <li>
                                <h6>Details: </h6>{" "}
                                <p>{event.element.eventDetails}</p>
                              </li>
                            </ul>
                          </Row>
                        ))}
                      </Container>
                    ) : (
                      <Table className={`${Styles.infoTables}`} hover>
                        <thead>
                          <tr>
                            <th className="bg-dark text-light border border-ligth">
                              Date
                            </th>
                            <th className="bg-dark text-light border border-ligth">
                              Time
                            </th>
                            <th className="bg-dark text-light border border-ligth">
                              Location
                            </th>
                            <th className="bg-dark text-light border border-ligth">
                              Details
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {shipment.element.shipmentEvents.map((event) => (
                            <tr key={event.id}>
                              <th scope="row">{event.element.eventDate}</th>
                              <td>{event.element.eventTime}</td>
                              <td>{event.element.location}</td>
                              <td>{event.element.eventDetails}</td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    )}
                  </Container>
                </Row>
              </Container>
            ))}
          </Container>
          <Container className="w-100 shadow p-5 border-muted bg-dark">
            <Container className="shadow py-2 bg-light">
              <Row className="my-3">
                <Container className="w-100">
                  <img className="w-100" src="/logos/info-header.png" />
                </Container>
              </Row>
              <Row className="m-1">
                <Col className="m-1">
                  <Container className="border border-muted shadow">
                    <Row className="text-light bg-dark text-light border border-ligth">
                      <h5 className="text-center my-2">Tracking Code</h5>
                    </Row>
                    <Row className="my-2">
                      <h6 className="text-center">
                        {contentDetailData.order.trackingCode}
                      </h6>
                    </Row>
                  </Container>
                </Col>
              </Row>
              <Row className="m-1">
                <Col className="m-1">
                  <Container className="border border-muted shadow">
                    <Row className="text-light bg-dark text-light border border-ligth">
                      <h5 className="text-center my-2">Sales Channel</h5>
                    </Row>
                    <Row className="my-2">
                      <h6 className="text-center">
                        {contentDetailData.order.salesChannel}
                      </h6>
                    </Row>
                  </Container>
                </Col>
                <Col className="m-1">
                  <Container className="border border-muted shadow">
                    <Row className="text-light bg-dark text-light border border-ligth">
                      <h5 className="text-center my-2">Shipping Service</h5>
                    </Row>
                    <Row className="my-2">
                      <h6 className="text-center">
                        {contentDetailData.order.shippingService}
                      </h6>
                    </Row>
                  </Container>
                </Col>
                <Col className="m-1">
                  <Container className="border border-muted shadow">
                    <Row className="text-light bg-dark text-light border border-ligth">
                      <h5 className="text-center my-2">
                        Packing Slip Comments
                      </h5>
                    </Row>
                    <Row className="my-2">
                      <h6 className="text-center">
                        {contentDetailData.order.packingSlipComments}
                      </h6>
                    </Row>
                  </Container>
                </Col>
              </Row>
              <Row className="m-1">
                <Col className="m-1">
                  <Container className="border border-muted shadow">
                    <Row className="text-light bg-dark text-light border border-ligth">
                      <h5 className="text-center my-2">Order Date</h5>
                    </Row>
                    <Row className="my-2">
                      <h6 className="text-center">
                        {contentDetailData.order.orderDate}
                      </h6>
                    </Row>
                  </Container>
                </Col>
                <Col className="m-1">
                  <Container className="border border-muted shadow">
                    <Row className="text-light bg-dark text-light border border-ligth">
                      <h5 className="text-center my-2">Status</h5>
                    </Row>
                    <Row className="my-2">
                      <h6 className="text-center">
                        {contentDetailData.order.status}
                      </h6>
                    </Row>
                  </Container>
                </Col>
                <Col className="m-1">
                  <Container className="border border-muted shadow">
                    <Row className="text-light bg-dark text-light border border-ligth">
                      <h5 className="text-center my-2">Date Submitted</h5>
                    </Row>
                    <Row className="my-2">
                      <h6 className="text-center">
                        {contentDetailData.order.dateSubmitted}
                      </h6>
                    </Row>
                  </Container>
                </Col>
              </Row>
              <Container className="my-4 text-center">
                {width <= 550 ? (
                  <Container className="border border-muted shadow ">
                    <Row className=" bg-dark text-light border border-ligth text-light">
                      <h6 className="text-center my-2">Shipment Events</h6>
                    </Row>
                    {contentDetailData.orderDetails.map((product) => (
                      <Row className="my-1 border border-secondary">
                        <div className="w-100 bg-secondary text-light border border-secondary">
                          Product -- {product.element.productTitle}
                        </div>
                        <ul
                          className={`${Styles.infoList}`}
                          key={product.element.productId}
                        >
                          <li>
                            <h6>Product ID: </h6>{" "}
                            <p>{product.element.productId}</p>
                          </li>
                          <hr />

                          <li>
                            <h6>Count: </h6> <p>{product.element.count}</p>
                          </li>
                        </ul>
                      </Row>
                    ))}
                  </Container>
                ) : (
                  <Table className="w-100 shadow" hover>
                    <thead>
                      <tr>
                        <th className="bg-dark text-light border border-ligth">
                          Product ID
                        </th>
                        <th className="bg-dark text-light border border-ligth">
                          Product Title
                        </th>
                        <th className="bg-dark text-light border border-ligth">
                          Count
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {contentDetailData.orderDetails.map((product) => (
                        <tr key={product.element.productId}>
                          <td>{product.element.productId}</td>
                          <td>{product.element.productTitle}</td>
                          <td>{product.element.count}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                )}
              </Container>
            </Container>
          </Container>
          <Button
            style={{ marginLeft: "47%" }}
            className="bg-dark my-3 text-light"
            onClick={handleLogout}
          >
            EXIT
          </Button>
        </Container>
      </div>
    </div>
  );
};

export default InfoPageUI;
