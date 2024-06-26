import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Common/Sidebar';
import Header from '../components/Common/Header'; 
import Footer from '../components/Common/Footer';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newProject, setNewProject] = useState({
    company: '',
    propertyName: '',
    location: '',
    claims: '',
    area: ''
  });

  useEffect(() => {
    // Mock fetch projects data
    const fetchProjects = async () => {
      // Here you can fetch data from an API
      const data = [
        // Sample data
        {
          company: 'Example Co.',
          propertyName: 'Example Property',
          location: '123 Example St',
          claims: '10',
          area: '100'
        }
      ];
      setProjects(data);
    };

    fetchProjects();
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setNewProject((prevProject) => ({
      ...prevProject,
      [id]: value
    }));
  };

  const handleAddProject = () => {
    setProjects((prevProjects) => [...prevProjects, newProject]);
    setShowModal(false);
    setNewProject({
      company: '',
      propertyName: '',
      location: '',
      claims: '',
      area: ''
    });
  };

  const handleDeleteProject = (index) => {
    setProjects((prevProjects) => prevProjects.filter((_, i) => i !== index));
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
          <h2>PROJECT MANAGEMENT</h2>
        </div>
        <button id="pmAddNewEntry" onClick={() => setShowModal(true)}>Add Project</button>
        <div className="clients-table">
          <div className="pm-table-container" id="pmsTableContainer">
            <div className="pm-table-row">
              <div className="pm-table-column pm-company pm-header">Company</div>
              <div className="pm-table-column pm-propertyName pm-header">Property Name</div>
              <div className="pm-table-column pm-location pm-header">Location</div>
              <div className="pm-table-column pm-claims pm-header">Claims</div>
              <div className="pm-table-column pm-area pm-header">Area (ha)</div>
              <div className="pm-table-column pm-edit pm-header">Edit</div>
              <div className="pm-table-column pm-header pm-add-entry">Delete</div>
            </div>
            {projects.map((project, index) => (
              <div className="pm-table-row" key={index}>
                <div className="pm-table-column pm-company">{project.company}</div>
                <div className="pm-table-column pm-propertyName">{project.propertyName}</div>
                <div className="pm-table-column pm-location">{project.location}</div>
                <div className="pm-table-column pm-claims">{project.claims}</div>
                <div className="pm-table-column pm-area">{project.area}</div>
                <div className="pm-table-column pm-edit">
                  <button>Edit</button>
                </div>
                <div className="pm-table-column pm-delete">
                  <button onClick={() => handleDeleteProject(index)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
          {showModal && (
            <div className="disable-modal" id="newProjectModal">
              <h1>Add Project Details</h1>
              <label htmlFor="newProjectCompany">Company</label>
              <input type="text" id="company" value={newProject.company} onChange={handleInputChange} />
              <label htmlFor="newProjectPropertyName">Property Name</label>
              <input type="text" id="propertyName" value={newProject.propertyName} onChange={handleInputChange} />
              <label htmlFor="newProjectLocation">Location</label>
              <input type="text" id="location" value={newProject.location} onChange={handleInputChange} />
              <label htmlFor="newProjectClaims">Claims</label>
              <input type="text" id="claims" value={newProject.claims} onChange={handleInputChange} />
              <label htmlFor="newProjectArea">Area (ha)</label>
              <input type="text" id="area" value={newProject.area} onChange={handleInputChange} />
              <button onClick={() => setShowModal(false)}>Cancel</button>
              <button onClick={handleAddProject}>Submit</button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Projects;
