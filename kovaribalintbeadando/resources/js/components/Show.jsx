import React, { useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';

import './show.css';

function Show(props) {
    const [visitorName, setVisitorName] = useState()
    const [visitorAge, setVisitorAge] = useState()
    const [visitorTicket, setVisitorTicket] = useState()

    const [visitorUpdateID, setVisitorUpdateID] = useState()
    const [visitorUpdateName, setVisitorUpdateName] = useState()
    const [visitorUpdateAge, setVisitorUpdateAge] = useState()
    const [visitorUpdateTicketid, setVisitorUpdateTicketid] = useState()

    const [visitorTable, setVisitors] = useState([
        {
            id: 1,
            name: "REACT PLACEHOLDER",
            age: 12,
            ticketid: 1,
        },
    ])

    const [ticketTable, setTickets] = useState([ 
        {
            id: 1,
            nickname: "REACT PLACEHOLDER",
            price: 69,
            gaveDate: "2023-01-09-18-39-00",
            maxUse: 69
        },
    ])
    const [ticketName, setTicketName] = useState()
    const [ticketPrice, setTicketPrice] = useState()
    const [ticketDate, setTicketDate] = useState()
    const [ticketMaxUse, setTicketMaxUse] = useState()

    const [ticketIDUpdate, setTicketIDUpdate] = useState()
    const [ticketNameUpdate, setTicketNameUpdate] = useState()
    const [ticketPriceUpdate, setTicketPriceUpdate] = useState()
    const [ticketDateUpdate, setTicketDateUpdate] = useState()
    const [ticketMaxUseUpdate, setTicketMaxUseUpdate] = useState()


    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/guests', {
            method: "GET",
            headers: {
                'Content-type': 'application/json',
            },
        }).then((response) => response.json()).then((data) => setVisitors([...data.guests]))

        fetch('http://127.0.0.1:8000/api/tickets', {
            method: "GET",
            headers: {
                'Content-type': 'application/json',
            },
        }).then((response) => response.json()).then((data) => setTickets([...data.tickets]))
    }, [])

    return ( 
    <React.Fragment>
        <b>Látogatók</b>
        <table>
            <thead>
                <tr>
                    <th>
                        ID
                    </th>
                    <th>
                        Név
                    </th>
                    <th>
                        Kor
                    </th>
                    <th>
                        Jegy azonosító
                    </th>
                    <th>
                        Törlés
                    </th>
                </tr>
            </thead>
            <tbody>
                {visitorTable.map(item => {
                    return (
                        <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.ticketid}</td>
                        <td><button onClick={() => {
                            fetch('http://127.0.0.1:8000/api/guests/'+item.id, {
                                method: "DELETE",
                                headers: {
                                    'Content-type': 'application/json',
                                }}).then((response) => response.json()).then((data) => setVisitors([...data.visitors]))
                        }}>Törlés</button></td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
        <b>Látogató - Létrehozás</b>
        <div>Név:</div><input onChange={(event) => setVisitorName(event.target.value)}></input>
        <div>Kor:</div><input onChange={(event) => setVisitorAge(event.target.value)} type="number"></input>
        <div>Jegy azonosító:</div><input onChange={(event) => setVisitorTicket(event.target.value)} type="number"></input>
        <br/>
        <button onClick={() => {
            fetch('http://127.0.0.1:8000/api/guests', {
                method: "POST",
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    "name": visitorName,
                    "age": visitorAge,
                    "ticketid": visitorTicket
                })
            }).then((response) => response.json()).then((data) => setVisitors([...data.visitors]))
        }}>Létrehozás</button>
        <br/>
        <br/>
        <b>Látogató - Szerkesztése</b>
        <div>ID:</div><input type="number" onChange={(event) => setVisitorUpdateID(event.target.value)}></input>
        <div>Név:</div><input onChange={(event) => setVisitorUpdateName(event.target.value)}></input>
        <div>Kor:</div><input type="number" onChange={(event) => setVisitorUpdateAge(event.target.value)}></input>
        <div>Jegy azonosító:</div><input type="number" onChange={(event) => setVisitorUpdateTicketid(event.target.value)}></input>
        <br />
        <button onClick={() => {
            fetch('http://127.0.0.1:8000/api/guests/'+visitorUpdateID, {
                method: "PUT",
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    "id": visitorUpdateID,
                    "name": visitorUpdateName,
                    "age": visitorUpdateAge,
                    "ticketid": visitorUpdateTicketid
                })
            }).then((response) => response.json()).then((data) => setVisitors([...data.visitors]))}}>Szerkesztés</button>

        <br />
        <br />
        <br />

        <b>Jegyek</b>
        <table>
            <thead>
                <tr>
                    <th>
                        ID
                    </th>
                    <th>
                        Név
                    </th>
                    <th>
                        Ár
                    </th>
                    <th>
                        Kiadás dátuma
                    </th>
                    <th>
                        Maximum felhasználás
                    </th>
                    <th>
                        Törlés
                    </th>
                </tr>
            </thead>
            <tbody>
                {ticketTable.map(item => {
                    return (
                        <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.nickname}</td>
                        <td>{item.price}</td>
                        <td>{item.gaveDate}</td>
                        <td>{item.maxUse}</td>
                        <td><button onClick={() => {
                            fetch('http://127.0.0.1:8000/api/tickets/'+item.id, {
                                method: "DELETE",
                                headers: {
                                    'Content-type': 'application/json',
                                }}).then((response) => response.json()).then((data) => setTickets([...data.tickets]))
                        }}>Törlés</button></td>
                        </tr>
                    );
                })}
            </tbody>
        </table>

        <b>Jegy - Létrehozás</b>
        <div>Név:</div><input onChange={(event) => setTicketName(event.target.value)}></input>
        <div>Ár:</div><input onChange={(event) => setTicketPrice(event.target.value)} type="number"></input>
        <div>Kiadás dátuma:</div><input onChange={(event) => setTicketDate(event.target.value)}></input>
        <div>Maximum felhasználás</div><input onChange={(event) => setTicketMaxUse(event.target.value)} type="number"></input>
        <br/>
        <button onClick={() => {
            fetch('http://127.0.0.1:8000/api/tickets', {
                method: "POST",
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    "nickname": ticketName,
                    "price": ticketPrice,
                    "gaveDate": ticketDate,
                    "maxUse": ticketMaxUse
                })
            }).then((response) => response.json()).then((data) => setTickets([...data.tickets]))
        }}>Létrehozás</button>
        <br/>
        <br/>
        <b>Jegy - Szerkesztése</b>
        <div>ID:</div><input onChange={(event) => setTicketIDUpdate(event.target.value)} type="number"></input>
        <div>Név:</div><input onChange={(event) => setTicketNameUpdate(event.target.value)}></input>
        <div>Ár:</div><input onChange={(event) => setTicketPriceUpdate(event.target.value)} type="number"></input>
        <div>Kiadás dátuma:</div><input onChange={(event) => setTicketDateUpdate(event.target.value)}></input>
        <div>Maximum felhasználás</div><input onChange={(event) => setTicketMaxUseUpdate(event.target.value)} type="number"></input>
        <br/>
        <button onClick={() => {
            fetch('http://127.0.0.1:8000/api/tickets/'+ticketIDUpdate, {
                method: "PUT",
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    "id": ticketIDUpdate,
                    "nickname": ticketNameUpdate,
                    "price": ticketPriceUpdate,
                    "gaveDate": ticketDateUpdate,
                    "maxUse": ticketMaxUseUpdate
                })
            }).then((response) => response.json()).then((data) => setTickets([...data.tickets]))
        }}>Szerkesztés</button>
    </React.Fragment> );
}

export default Show;

if (document.getElementById('example')) {
    const Index = ReactDOM.createRoot(document.getElementById("example"));

    Index.render(
        <React.StrictMode>
            <Show/>
        </React.StrictMode>
    )
}
