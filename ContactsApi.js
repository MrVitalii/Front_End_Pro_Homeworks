class ContactsApi {
    static API = 'https://6426d763556bad2a5b596110.mockapi.io/api/contacts'

    static getList() {
        return fetch(ContactsApi.API).then((res) => {
            if (res.ok) {
                return res.json()
            }

            throw new Error('Can not retrieve contact list from server.');
        })
    }

    static create(todo) {
        return fetch(ContactsApi.API, {
            method: 'POST',
            body: JSON.stringify(todo),
            headers: {
                'Content-type': 'application/json'
            }
        }).then((res) => {
            if (res.ok) {
                return res.json()
            }

            throw new Error('Can not create contact on server.');
        })
    }

    static delete(id) {
        return fetch(`https://6426d763556bad2a5b596110.mockapi.io/api/contacts/${id}`, {
            method: 'DELETE',
        }).then(res => {
            if (res.ok) {
                return res.json();
            }

            throw new Error('Can not delete contact from server.');
        })
    }
}