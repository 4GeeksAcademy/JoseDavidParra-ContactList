const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contacts: [],
			id: "",
			contact: {}
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			getContacts: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/agenda_de_josie", { method: "GET" })
					.then(response => response.json())
					.then(data => setStore({ contacts: data }))
					.catch(error => console.log(error));
			},
			createContact: (name, email, address, phone) => {
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						full_name: name,
						email: email,
						agenda_slug: "agenda_de_josie",
						address: address,
						phone: phone
					})
				})
					.then(response => console.log(response.json()))
					.catch(error => console.log(error));
			},

			setId: id => {
				setStore({ id: id });
			},
			setContact: (name,email,phone,address) => {
				setStore({contact : {name:name,email:email,phone:phone,address:address}})
			},

			deleteContact: () => {
				fetch(`https://assets.breatheco.de/apis/fake/contact/${getStore().id}`, {
					method: "DELETE"
				}).catch(error => error);
			},

			getContact: id => {
				fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, { method: "GET" })
					.then(response => response.json())
					.then(data => console.log(data))
					// .then(data => setStore({ contact: data }))
					.catch(error => console.log(error));
			},

			updateContact: (id,name, email, phone, address) => {
				fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, {
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						full_name: name,
						email: email,
						agenda_slug: "agenda_de_josie",
						address: address,
						phone: phone
					})
				})
					.then(response => console.log(response.json()))
					.catch(error => console.log(error));
			}
		}
	};
};

export default getState;
