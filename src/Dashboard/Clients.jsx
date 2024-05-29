import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../components/Common/Sidebar';
import Header from '../components/Common/Header'; 
import Footer from '../components/Common/Footer';

const Clients = () => {
  const [clients, setClients] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

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

  const onSubmit = (data) => {
    setClients((prevClients) => [...prevClients, data]);
    setShowModal(false);
    reset();
  };

  const handleDeleteClient = (index) => {
    setClients((prevClients) => prevClients.filter((_, i) => i !== index));
  };

  return (
    <div className="grid-container">
      {/* Header */}
      <Header />

      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
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
              <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="company">Company</label>
                <input type="text" id="company" {...register('company', { required: 'Company is required' })} />
                {errors.company && <span>{errors.company.message}</span>}

                <label htmlFor="ticker">Ticker</label>
                <input type="text" id="ticker" {...register('ticker', { required: 'Ticker is required' })} />
                {errors.ticker && <span>{errors.ticker.message}</span>}

                <label htmlFor="address">Address</label>
                <input type="text" id="address" {...register('address', { required: 'Address is required' })} />
                {errors.address && <span>{errors.address.message}</span>}

                <label htmlFor="name">Name</label>
                <input type="text" id="name" {...register('name', { required: 'Name is required' })} />
                {errors.name && <span>{errors.name.message}</span>}

                <label htmlFor="phone">Phone</label>
                <input type="text" id="phone" {...register('phone', { required: 'Phone is required' })} />
                {errors.phone && <span>{errors.phone.message}</span>}

                <label htmlFor="email">Email</label>
                <input type="text" id="email" {...register('email', { required: 'Email is required' })} />
                {errors.email && <span>{errors.email.message}</span>}

                <button type="button" onClick={() => setShowModal(false)}>Cancel</button>
                <button type="submit">Submit</button>
              </form>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Clients;

