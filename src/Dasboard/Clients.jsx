import React, { useState, useEffect } from 'react';
import './styles/dashstyles.css'; // Adjust the path as needed

const Clients = () => {
  const [clients, setClients] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newClient, setNewClient] = useState({
    company: '',
    ticker: '',
    address: '',
    name: '',
    phone: '',
    email: ''
  });

  useEffect(() => {
    // Mock fetch clients data
    const fetchClients = async () => {
      // Here you can fetch data from an API
      const data = [
        // Sample data
        {
          company: 'Example Co.',
          ticker: 'EXM',
          address: '123 Main St',
          name: 'John Doe',
          phone: '123-456-7890',
          email: 'john@example.com'
        }
      ];
      setClients(data);
    };

    fetchClients();
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setNewClient((prevClient) => ({
      ...prevClient,
      [id]: value
    }));
  };

  const handleAddClient = () => {
    setClients((prevClients) => [...prevClients, newClient]);
    setShowModal(false);
    setNewClient({
      company: '',
      ticker: '',
      address: '',
      name: '',
      phone: '',
      email: ''
    });
  };

  const handleDeleteClient = (index) => {
    setClients((prevClients) => prevClients.filter((_, i) => i !== index));
  };

  return (
    <div className="grid-container">
      <header className="header">
        <div className="menu-icon" onClick={() => console.log('Open sidebar')}>
          <span className="material-icons-outlined">menu</span>
        </div>
        <div className="header-left">
          <div id="datetime"></div>
        </div>
        <div className="header-right">
          <div className="dropdown">
            <a className="dropdown-toggle" href="#"></a>
          </div>
          <div className="dropdown">
            <a className="dropdown-toggle" href="/profile">
              <span className="material-icons-outlined userAccountCircle">account_circle</span>
            </a>
          </div>
        </div>
      </header>

      <aside id="sidebar">
        <div className="sidebar-title">
          <div className="sidebar-brand">
            <span className="logoIcon"><img src="./icons/minex.png" alt="MinEx Logo" />MinEx</span>
          </div>
          <div className="close-icon" onClick={() => console.log('Close sidebar')}>
            <span className="material-icons-outlined">close</span>
          </div>
        </div>
        <ul className="sidebar-list">
          <li className="sidebar-list-item">
            <a href="/dashboard">
              <span className="material-icons-outlined">dashboard</span>Dashboard
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="/clients">
              <span className="material-icons-outlined">groups</span>Clients
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="/projects">
              <span className="material-icons-outlined">inventory_2</span>Projects
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="/locations">
              <span className="material-icons-outlined">map</span>Locations
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="/" className="logout">
              <span className="material-icons-outlined">logout</span>Log Out
            </a>
          </li>
        </ul>
      </aside>

      <main className="main-container">
        <div className="main-title">
          <h2>CLIENT MANAGEMENT</h2>
        </div>
        <button id="cmAddNewEntry" onClick={() => setShowModal(true)}>Add Client</button>
        <div className="clients-table">
          <div className="cm-table-container" id="cmsTableContainer">
            <div className="cm-table-row">
              <div className="cm-table-column cm-company cm-header">Company</div>
              <div className="cm-table-column cm-ticker cm-header">TKR</div>
              <div className="cm-table-column cm-address cm-header">Address</div>
              <div className="cm-table-column cm-name cm-header">Name</div>
              <div className="cm-table-column cm-phone cm-header">Phone</div>
              <div className="cm-table-column cm-email cm-header">Email</div>
              <div className="cm-table-column cm-edit cm-header">Edit</div>
              <div className="cm-table-column cm-header cm-add-entry">Delete</div>
            </div>
            {clients.map((client, index) => (
              <div className="cm-table-row" key={index}>
                <div className="cm-table-column cm-company">{client.company}</div>
                <div className="cm-table-column cm-ticker">{client.ticker}</div>
                <div className="cm-table-column cm-address">{client.address}</div>
                <div className="cm-table-column cm-name">{client.name}</div>
                <div className="cm-table-column cm-phone">{client.phone}</div>
                <div className="cm-table-column cm-email">{client.email}</div>
                <div className="cm-table-column cm-edit">
                  <button>Edit</button>
                </div>
                <div className="cm-table-column cm-delete">
                  <button onClick={() => handleDeleteClient(index)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
          {showModal && (
            <div className="disable-modal" id="newPersonModal">
              <h1>Add Client Contact</h1>
              <label htmlFor="newPersonCompany">Company</label>
              <input type="text" id="company" value={newClient.company} onChange={handleInputChange} />
              <label htmlFor="newPersonTicker">Ticker</label>
              <input type="text" id="ticker" value={newClient.ticker} onChange={handleInputChange} />
              <label htmlFor="newPersonAddress">Address</label>
              <input type="text" id="address" value={newClient.address} onChange={handleInputChange} />
              <label htmlFor="newPersonName">Name</label>
              <input type="text" id="name" value={newClient.name} onChange={handleInputChange} />
              <label htmlFor="newPersonPhone">Phone</label>
              <input type="text" id="phone" value={newClient.phone} onChange={handleInputChange} />
              <label htmlFor="newPersonEmail">Email</label>
              <input type="text" id="email" value={newClient.email} onChange={handleInputChange} />
              <button onClick={() => setShowModal(false)}>Cancel</button>
              <button onClick={handleAddClient}>Submit</button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Clients;
