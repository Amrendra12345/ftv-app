import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

export default function HomeList(props) {
  const { locale } = useRouter();
  return (
    <section className="homeCategary pt-5">
      <div className="container">
        <Row>
          {Array.isArray(props.homelists) &&
            props.homelists.map((list, i) => {
              return (
                <Col sm={6} md={4} key={i}>
                  <div className="pro-div">
                    <Link href={ "/" + list.urllink} locale={false}>
                      <figure className="visa-img">
                        <Image
                          alt={list.title}
                          sizes="(max-width: 500px) 30vw"
                          src={
                            "https://ik.imagekit.io/vs4gypuhi/" + list.imageurl
                          }
                          height={270}
                          width={397}
                          priority={false}
                        />
                      </figure>
                      <div className="pro-details">
                        <h2 className="pro-title">
                          {list.title}
                        </h2>
                        <p className="skill">
                          <i className="fa fa-clock-o" /> {list.duration}{" "}
                          Validity
                        </p>
                        <p className="skill">
                          <i className="fa fa-usd" /> Starting as low as{" "}
                          {list.currency_icon} {list.price} per Visa{" "}
                        </p>
                      </div>
                    </Link>
                  </div>
                </Col>
              );
            })}
        </Row>
      </div>
    </section>
  );
}
