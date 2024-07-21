import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Blog_page(props) {
  console.log( props.Blog_page)
  return (
    <>
     <Head>
       <title>Blogs</title>
     </Head>
    <section className="blog_page">
      <div className="checkout_banner">
        <Container>
          <h1>Blog</h1>
        </Container>
      </div>
      <div className="blog-sec pt-0">
        <Container>
          <ol className="breadcrumb pl-0">
            <li className="breadcrumb-item">
              <Link href={"/"}>Home </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Blog
            </li>
          </ol>
          
          <Row className="mt-5">
            {props.Blog_page.blog_arr.map(blog_arr =>
              <Col sm={12} md={4} lg={4} key={blog_arr.id}>                
                <div className="blog-boxes" title={blog_arr.title}>                  
                  <Link href={"/blog/" + blog_arr.blogtitle}>
                    <div className="img-content">
                      <div className="img-thum">
                      <Image
                        alt={blog_arr.title}
                        src={`https://ik.imagekit.io/vs4gypuhi/${blog_arr.image}`}
                        sizes="(max-width:750px) 50vw, 20wv"
                        fill style={{
                          objectFit: 'cover', // cover, contain, none
                        }}
                      />
                     </div>
                    <h2>{blog_arr.title}</h2>
                    </div>
                  </Link>
                  <p>{blog_arr.blog_des}</p>
                   <div className="caption">
                        <Link href={"/blog/" + blog_arr.blogtitle} className="admin-icon"> 
                        <Image
                            alt="Kanan"
                            src={"/img/testi1.png"}
                            sizes="(max-width:750px) 30vw, 15wv"
                            height={30}
                            width={30}
                          />
                          <p className="admin"> {blog_arr.by}</p>
                        </Link> 
                        <p>{blog_arr.date}</p>
                   </div>                
                </div>
              </Col>
            )}
          </Row>

          <div className="text-center">
            {props.Blog_page.current_page - 1 === 0
              ? <span className="btn btn-secondary mr-2">Prev Page</span>
              : <Link
                  className="btn btn-dark mr-2"
                  href={"/blog?page=" + (props.Blog_page.current_page - 1)}
                >
                  Prev Page
                </Link>}
            {
             
            }
            {props.Blog_page.last_page == props.Blog_page.current_page
              ? <span className="btn btn-secondary">Next Page</span>
              : <Link
                  className="btn btn-dark"
                  href={"/blog?page=" + (props.Blog_page.current_page + 1)}
                >
                  Next Page{" "}
                </Link>}
          </div> 
        </Container>

        {/* <Widget_v ce_name="" /> */}
      </div>
    </section>
    </>
  );
}
export const getServerSideProps = async(cxt)=>{
  const pageurl2 = cxt.query.page; 
  const res = await fetch(`https://cms.fasttrackvisa.com/api/blogs${(pageurl2 === undefined ? '' : '?page=' + pageurl2)}`);
  if (!res.ok){
    throw new Error('Failed to fetch data')
   }
  const Blog_page = await res.json()
  console.log(Blog_page)
  return{
     props: {Blog_page}
  }
} 