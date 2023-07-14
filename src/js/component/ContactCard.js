import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import rigoBaby from "../../img/rigo-baby.jpg"
import propTypes from "prop-types";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export const ContactCard = props => {
	const [state, setState] = useState({
		//initialize state here
		name: props.name,
		email: props.email,
		address: props.address,
		phone: props.phone
	});

	// const navigate = useNavigate();

	const { store, actions } = useContext(Context);

	return (
		<li className="list-group-item">
			<div className="row w-100 align-items-center">
				<div className="col-12 col-sm-6 col-md-3 px-0">
					<img src={rigoBaby} alt="Mike Anamendolla" className="rounded-circle mx-auto d-block img-fluid" style={{maxHeight:75+"%",maxWidth:75+"%"}}/>
				</div>
				<div className="col-12 col-sm-6 col-md-9 text-sm-left">
					<div className="text-end">
						<Link
							className="btn"
							onClick={() => {
								actions.setContact(props.name,props.email,props.phone,props.address);
							}}
							to={`update/${props.id}`}>
							<i className="fas fa-pencil-alt mr-3" />
						</Link>
						<button
							className="btn"
							onClick={() => {
								actions.setId(props.id);
								props.onDelete();
							}}>
							<i className="fas fa-trash-alt" />
						</button>
					</div>
					<h1 className="name lead">{state.name}</h1>
					<br />
					<i className="fas fa-map-marker-alt text-muted mr-3" />
					<span className="text-muted">{state.phone}</span>
					<br />
					<span
						className="fa fa-phone fa-fw text-muted mr-3"
						data-toggle="tooltip"
						title=""
						data-original-title="(870) 288-4149"
					/>
					<span className="text-muted small">{state.address}</span>
					<br />
					<span
						className="fa fa-envelope fa-fw text-muted mr-3"
						data-toggle="tooltip"
						data-original-title=""
						title=""
					/>
					<span className="text-muted small text-truncate">{state.email}</span>
				</div>
			</div>
		</li>
	);
};

/**
 * Define the data-types for
 * your component's properties
 **/
ContactCard.propTypes = {
	id: propTypes.string,
	name: propTypes.string,
	email: propTypes.string,
	address: propTypes.string,
	phone: propTypes.string,
	history: PropTypes.object,
	onDelete: PropTypes.func
};

/**
 * Define the default values for
 * your component's properties
 **/
ContactCard.defaultProps = {
	name: "Nombre",
	email: "Correo",
	address: "dirección",
	phone: "telefono",
	onDelete: null
};
