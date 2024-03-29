import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";
import { Context } from "../store/appContext.js";

export const Contacts = () => {
	const [state, setState] = useState({
		showModal: false
	});

	const { store, actions } = useContext(Context);

	useEffect(() => actions.getContacts(), []);

	return (
		<div className="container">
			<div>
				<p className="text-end my-3">
					<Link className="btn btn-success text-end" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.contacts.map(item => (
							<ContactCard
								name={item.full_name}
								email={item.email}
								address={item.address}
								phone={item.phone}
								key={item.id}
								id={item.id}
								onDelete={() => {
									setState({ showModal: true });
								}}
							/>
						))}
					</ul>
				</div>
			</div>
			<Modal show={state.showModal} onClose={() => setState({ showModal: false })} />
		</div>
	);
};
