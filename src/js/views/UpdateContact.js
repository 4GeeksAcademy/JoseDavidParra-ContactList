import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";

export const Update = () => {
	const { store, actions } = useContext(Context);
	const { id } = useParams();
	const [fullName, setFullName] = useState(store.contact.name);
	const [address, setAddress] = useState(store.contact.address);
	const [phone, setPhone] = useState(store.contact.phone);
	const [email, setEmail] = useState(store.contact.email);

	function handleSubmit(e) {
		e.preventDefault();
		actions.updateContact(id,fullName, email, phone, address);
	}
	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5"> Update contact</h1>
				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							onChange={e => setFullName(e.target.value)}
							className="form-control"
							placeholder={fullName}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							onChange={e => setEmail(e.target.value)}
							className="form-control"
							placeholder={email}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							onChange={e => setPhone(e.target.value)}
							className="form-control"
							placeholder={phone}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							onChange={e => setAddress(e.target.value)}
							className="form-control"
							placeholder={address}
						/>
					</div>
					<button type="submit" className="btn btn-primary form-control">
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
