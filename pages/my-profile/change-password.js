// import Image from 'next/image'
import Link from 'next/link';
// import Router from 'next/router';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LazyLoad from 'react-lazy-load';
import Footer from '../../pages/components/Footer';
import axios from 'axios'; 
import Head from 'next/head';

export default function ChangePassword() {
	const [oldPassword, setOldPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [confirmNewPassword, setConfirmNewPassword] = useState('');
	const [error, setError] = useState(null);
	const [activeClass, setActiveClass] = useState('hsticky');

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (newPassword !== confirmNewPassword) {
			setError('Passwords do not match');
			return;
		}
		const data = new FormData();
		data.append('uid', JSON.parse(localStorage.getItem('loginDetails'))?.id);
		data.append('current_password', oldPassword);
		data.append('newpassword', newPassword);

		axios.post('https://cms.fasttrackvisa.com/api/change-password',data).then((res) => {
			console.log(res);
		}).catch((ex) => console.error("Update Password", ex), setError('Unable to change password'))
	};

	return (
		<>
             <Head>
				<title>Change Password</title>
			 </Head>
			

			<div className="checkout_banner mt-3">

				<Container>
					<h1 className='mt-5'>Welcome back, </h1>
					<p>Here's your account details.</p>
				</Container>

			</div>


			<Container>
			<ol className="breadcrumb pl-0 bg-white">
					<li className="breadcrumb-item"><Link href={'/'}>
							Home
					</Link></li>
					<li className="breadcrumb-item"><Link href={'/my-profile'}>
						My Profile
					</Link></li>

					<li className="breadcrumb-item active" aria-current="page"> My Transactions </li>
				</ol>
				<div className="desi-work-container pt-3"> 
 

					<Row>
						<Col sm={12} md={3} lg={3}>
							<ul className='profile_ul'>
								<li><Link href={'/my-profile/my-transactions'}><i className='fa fa-list'></i> My Transactions</Link></li>
								<li><Link href={'/my-profile/change-password'}><i className='fa fa-key'></i> Change Password</Link></li>
								<li><Link href={'/my-profile'}><i className='fa fa-user'></i> Update Profile</Link></li>
							</ul>
						</Col>
						<Col sm={12} md={9} lg={9}>

							<form onSubmit={handleSubmit}>
								<Row className="gutters5">
									<Col sm={6}>
										<div className="ftv-field">
											<label>Old Password</label>
											<input
												type="password" className="form-control" placeholder='here'
												value={oldPassword}
												onChange={(e) => setOldPassword(e.target.value)}
											/>
										</div>
									</Col><Col sm={6}>
										<div className="ftv-field">
											<label>New Password</label>
											<input
												type="password" className="form-control" placeholder='here'
												value={newPassword}
												onChange={(e) => setNewPassword(e.target.value)}
											/>
										</div>
									</Col><Col sm={6}>
										<div className="ftv-field">
											<label>Confirm New Password</label>
											<input
												type="password" className="form-control" placeholder='here'
												value={confirmNewPassword}
												onChange={(e) => setConfirmNewPassword(e.target.value)}
											/>
										</div>
									</Col>
								</Row>


								<button className='btn4 d-block w-100 mt-4' type='submit'>Update Password</button>
								{error && <p>{error}</p>}
							</form>


						</Col>


					</Row>

				</div>



			</Container>

			<hr />

			<LazyLoad offset={100}>
				<Footer ce_name=''></Footer>

			</LazyLoad>
		</>

	);
}