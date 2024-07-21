import { Col, Container, Row } from "react-bootstrap";
import styles from "../styles/term.module.scss";
import Image from "next/image";
import Link from "next/link";
import Open_new from "./components/Open_new";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

export default function partnership() {
  return (
    <section className="partnership">
      <div className="checkout_banner">
        <Container>
          <h1>
            Trip Planning, Booking <br />
            and Check-in
          </h1>
          <p className="text-white">
            Create meaningful and personalized value at every stage of the
            customer lifecycle and help restore travel confidence.
          </p>

          <p className="mt-3">
            <a href="#" className="btn btn-ftv">
              Get a personalized demo
            </a>
          </p>
        </Container>
      </div>
      <Container>
        <ol className="breadcrumb pl-0 bg-white">
          <li className="breadcrumb-item">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Partnership
          </li>
        </ol>
        <div className="desi-work-container">
          <Row className="align-items-center mb-4">
            <Col sm={6}>
              <h3>Trip Planning</h3>
              <p>
                Help customers search for US domestic and international
                destinations open for travel by levels of restrictions—from no
                restrictions to COVID-19 testing and quarantine measures to
                restricted borders.
              </p>
              <div className="d-flex align-items-start">
                <Image
                  alt="check"
                  src={"/img/check.png"}
                  height={29}
                  width={29}
                />
                <p className="ml-3">
                  Enable filtering capabilities for eligible flights to any
                  destination based on nationality and travel restrictions.
                </p>
              </div>
              <div className="d-flex align-items-start">
                <Image
                  alt="check"
                  src={"/img/check.png"}
                  height={29}
                  width={29}
                />
                <p className="ml-3">
                  Enable filtering capabilities for eligible flights to any
                  destination based on nationality and travel restrictions.
                </p>
              </div>
              <div className="d-flex align-items-start">
                <Image
                  alt="check"
                  src={"/img/check.png"}
                  height={29}
                  width={29}
                />
                <p className="ml-3">
                  Earn commission on eVisas and eTAs by allowing customers to
                  secure visitor visas before booking a trip.
                </p>
              </div>
            </Col>
            <Col sm={6}>
              <Image
                alt="Trip Planning"
                src={"/img/lifestyle.png"}
                height={480}
                width={530}
                className=""
              />
            </Col>
          </Row>
          <Row className="align-items-center mb-4">
            <Col sm={6}>
              <Image
                alt="Trip Planning"
                src={"/img/lifestyle.png"}
                height={480}
                width={530}
              />
            </Col>
            <Col sm={6}>
              <h2 className={styles.title}>Trip Planning</h2>
              <p>
                Help customers search for US domestic and international
                destinations open for travel by levels of restrictions—from no
                restrictions to COVID-19 testing and quarantine measures to
                restricted borders.
              </p>

              <div className="d-flex align-items-start">
                <Image
                  alt="check"
                  src={"/img/check.png"}
                  height={29}
                  width={29}
                />
                <p className="ml-3">
                  Enable filtering capabilities for eligible flights to any
                  destination based on nationality and travel restrictions.
                </p>
              </div>

              <div className="d-flex align-items-start">
                <Image
                  alt="check"
                  src={"/img/check.png"}
                  height={29}
                  width={29}
                />
                <p className="ml-3">
                  Enable filtering capabilities for eligible flights to any
                  destination based on nationality and travel restrictions.
                </p>
              </div>
              <div className="d-flex align-items-start">
                <Image
                  alt="check"
                  src={"/img/check.png"}
                  height={29}
                  width={29}
                />
                <p className="ml-3">
                  Earn commission on eVisas and eTAs by allowing customers to
                  secure visitor visas before booking a trip.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center mb-4">
            <Col sm={6}>
              <h2 className={styles.title}>Trip Planning</h2>
              <p>
                Help customers search for US domestic and international
                destinations open for travel by levels of restrictions—from no
                restrictions to COVID-19 testing and quarantine measures to
                restricted borders.
              </p>

              <div className="d-flex align-items-start">
                <Image
                  alt="check"
                  src={"/img/check.png"}
                  height={29}
                  width={29}
                />
                <p className="ml-3">
                  Enable filtering capabilities for eligible flights to any
                  destination based on nationality and travel restrictions.
                </p>
              </div>

              <div className="d-flex align-items-start">
                <Image
                  alt="check"
                  src={"/img/check.png"}
                  height={29}
                  width={29}
                />

                <p className="ml-3">
                  Enable filtering capabilities for eligible flights to any
                  destination based on nationality and travel restrictions.
                </p>
              </div>
              <div className="d-flex align-items-start">
                <Image
                  alt="check"
                  src={"/img/check.png"}
                  height={29}
                  width={29}
                />
                <p className="ml-3">
                  Earn commission on eVisas and eTAs by allowing customers to
                  secure visitor visas before booking a trip.
                </p>
              </div>
            </Col>
            <Col sm={6}>
              <Image
                alt="Trip Planning"
                src={"/img/lifestyle.png"}
                height={480}
                width={530}
              />
            </Col>
          </Row>
        </div>
      </Container>
      <Open_new></Open_new>
      <div className="yellow_sec">
        <Container>
          <h5>
            We've had excellent feedback from our travellers as we're able to
            provide a single touchpoint for all visa requirements across all
            destinations, and use sherpa° as a trusted partner to facilitate
            visa purchases. Sherpa° has given our customers peace of mind,
            addressing anxiety often associated with travel, further reduced
            inbound calls to our support staff, and prevented customer service
            issues on the ground.
          </h5>
          <p>Craig Nagy, G Adventures, Technology Director, Customer Systems</p>

          <p>
            <Image
              alt="Kanan"
              src={"/img/yellow-img.png"}
              height={66}
              width={618}
            />{" "}
          </p>
        </Container>
      </div>
      <Container className="mt-5 mb-5">
        <Row className="align-items-center mb-4">
          <Col sm={6}>
            <div className="ftv-title text-left">
              <h2>Frequently Asked Questions </h2>
            </div>
            <div className="card mb-5 card-header bg-white">
              <div className="faq-page">
                <Accordion defaultActiveKey="0">
                  <li>
                    <Accordion.Toggle
                      as={Card.Header}
                      className="pl-0 font-weight-bold no-bdr"
                      eventKey="0"
                    >
                      What is an eVisa?
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0">
                      <div className="pt-1 pb-2">
                        Some placeholder content for the first accordion panel.
                        This panel is shown by default, thanks to the
                      </div>
                    </Accordion.Collapse>
                  </li>
                  <li>
                    <Accordion.Toggle
                      as={Card.Header}
                      className="pl-0 font-weight-bold"
                      eventKey="1"
                    >
                      What countries are covered?
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="1">
                      <div className="pt-1 pb-2">
                        Some placeholder content for the first accordion panel.
                        This panel is shown by default, thanks to the
                      </div>
                    </Accordion.Collapse>
                  </li>
                  <li>
                    <Accordion.Toggle
                      as={Card.Header}
                      className="pl-0 font-weight-bold"
                      eventKey="2"
                    >
                      How does your commercial model work?
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="2">
                      <div className="pt-1 pb-2">
                        Some placeholder content for the first accordion panel.
                        This panel is shown by default, thanks to the
                      </div>
                    </Accordion.Collapse>
                  </li>
                </Accordion>
              </div>
            </div>
          </Col>
          <Col sm={6}>
            <Image alt="faq" src={"/img/faq.png"} height={337} width={590} />
          </Col>
        </Row>
      </Container>
      <div className="blue_sec">
        <Container>
          <div className="ftv-title">
            <span className="btn-green">Our solutions</span>
            <h2 className="mt-3">You choose how to work with us. </h2>
            <p>
              Get up and running quickly with embeddable widgets, our intuitive
              API, or white-label WebApp.
            </p>
          </div>

          <Row>
            <Col sm={12} md={4} lg={4}>
              <div className="blog-box">
                <Link href={"/" + "/#"}>
                  <figure>
                    <Image
                      alt="blog 1"
                      src={"/img/blog1.png"}
                      height={264}
                      width={381}
                    />
                  </figure>
                  <h4> #1</h4>
                </Link>
                <p>
                  Majority of peole will work in jobs that don’t exist today....
                </p>
                <p>
                  {" "}
                  <Link href={"/" + "/#"}>
                    <Image
                      alt="Kanan"
                      src={"/img/testi1.png"}
                      height={30}
                      width={30}
                    />
                    Kanan Isazade
                  </Link>
                </p>
              </div>
            </Col>

            <Col sm={12} md={4} lg={4}>
              <div className="blog-box">
                <Link href={"/" + "/#"}>
                  <figure>
                    {" "}
                    <Image
                      alt="blog 2"
                      src={"/img/blog2.png"}
                      height={264}
                      width={381}
                    />{" "}
                  </figure>
                  <h4> #2</h4>
                </Link>
                <p>
                  Majority of peole will work in jobs that don’t exist today....
                </p>
                <p>
                  {" "}
                  <Link href={"/" + "/#"}>
                    <Image
                      alt="Kanan"
                      src={"/img/testi1.png"}
                      height={30}
                      width={30}
                    />{" "}
                    Kanan Isazade
                  </Link>
                </p>
              </div>
            </Col>

            <Col sm={12} md={4} lg={4}>
              <div className="blog-box">
                <Link href={"/" + "/#"}>
                  <figure>
                    <Image
                      alt="blog 3"
                      src={"/img/blog3.png"}
                      height={264}
                      width={381}
                    />{" "}
                  </figure>
                  <h4> #3</h4>
                </Link>
                <p>
                  Majority of peole will work in jobs that don’t exist today....
                </p>
                <p>
                  <Link href={"/" + "/#"}>
                    <Image
                      alt="Kanan"
                      src={"/img/testi1.png"}
                      height={30}
                      width={30}
                    />{" "}
                    Kanan Isazade
                  </Link>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
