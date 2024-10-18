import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [activeTab, setActiveTab] = useState(localStorage.getItem('activeTab') || 'groups');
  const [searchTerm, setSearchTerm] = useState('');
  const [user, setUser] = useState([]);
  const [group, setGroup] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(10); 
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);

  const url = "http://localhost:3000";

  useEffect(() => {
    const fetchList = async () => {
      try {
        const response = await axios.get(`${url}/api/userdetails`);
        const groupresponse = await axios.get(`${url}/api/groupdetails`);
        setUser(response.data);
        setGroup(groupresponse.data);
        setTotalItems(response.data.length); 
      } catch (err) {
        console.error('Error fetching users:', err);
      }
    };

    fetchList();
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    localStorage.setItem('activeTab', tab);
  };

  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsers = user.slice(indexOfFirstUser, indexOfLastUser);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredUsers = currentUsers.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value)); 
    setCurrentPage(1); 
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Select User Group Permissions</h1>
        <p className="mb-6">Choose which user groups and users have access to each feature.</p>

        <div className="flex justify-between items-center mb-8">
          <div className="flex space-x-4">
            <button
              className={`pb-2 ${activeTab === 'groups' ? 'border-b-2 border-white text-white' : 'text-gray-400'}`}
              onClick={() => handleTabChange('groups')}
            >
              User Groups
            </button>
            <button
              className={`pb-2 ${activeTab === 'users' ? 'border-b-2 border-white text-white' : 'text-gray-400'}`}
              onClick={() => handleTabChange('users')}
            >
              Users
            </button>
          </div>

          <div className="relative w-200 max-w-sm">
            <input
              type="text"
              placeholder={activeTab === 'groups' ? "Search User Groups" : "Search Users"}
              value={searchTerm}
              onChange={handleSearch}
              className="w-full p-2 pl-10 bg-gray-800 border border-gray-700 rounded-md text-white"
            />
          </div>
        </div>

        {activeTab === 'groups' && (
          <>
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-400 border-b border-gray-700">
                  <th className="py-3">User Group</th>
                  <th className="py-3 text-center">Service Pilot</th>
                  <th className="py-3 text-center">Document Search</th>
                </tr>
              </thead>
              <tbody>
                {group.map((item, index) => (
                  <tr key={index} className="border-b border-gray-700">
                    <td className="py-3">{item.userGroup}</td>
                    <td className="py-3 text-center">
                      <input
                        type="checkbox"
                        checked={item.servicePilot}
                        className="form-checkbox"
                        onChange={() => {}}
                      />
                    </td>
                    <td className="py-3 text-center">
                      <input
                        type="checkbox"
                        checked={item.documentSearch}
                        className="form-checkbox"
                        onChange={() => {}}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}

        {activeTab === 'users' && (
          <>
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-400 border-b border-gray-700">
                  <th className="py-3">Name</th>
                  <th className="py-3">User Group</th>
                  <th className="py-3 text-center">Service Pilot</th>
                  <th className="py-3 text-center">Document Search</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((item, index) => (
                  <tr key={index} className="border-b border-gray-700">
                    <td className="py-3">{item.name}</td>
                    <td className="py-3">{item.userGroup}</td>
                    <td className="py-3 text-center">
                      <input
                        type="checkbox"
                        checked={item.servicePilot}
                        className="form-checkbox"
                        onChange={() => {}}
                      />
                    </td>
                    <td className="py-3 text-center">
                      <input
                        type="checkbox"
                        checked={item.documentSearch}
                        className="form-checkbox"
                        onChange={() => {}}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}

        <div className="mt-6 flex justify-between items-end">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-400">Rows per page:</span>
            <select
              value={itemsPerPage}
              onChange={handleItemsPerPageChange} 
              className=" text-white text-sm p-1 rounded-md "
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={30}>30</option>
            </select>
          </div>

          <div className="text-sm text-gray-400">
            {indexOfFirstUser + 1}-{Math.min(indexOfLastUser, totalItems)} of {totalItems}
          </div>

          <div className="flex space-x-2">
            <button
              className="p-2 bg-gray-800 rounded"
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            >
              ‹
            </button>
            <button
              className="p-2 bg-gray-800 rounded"
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
