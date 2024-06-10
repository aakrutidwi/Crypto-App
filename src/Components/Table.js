import React from "react";
import Avatar from "./Avatar";
import "./Table.css";

const handleNull = (value) => {
  return value === null || value === undefined ? "-" : value;
};

const Table = ({ data, currentPage, setCurrentPage, currentItems }) => {
  if (!data || data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="table-container">
      <table className="styled-table">
        <thead>
          <tr>
            <th>Photo</th>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Year Group</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>
                <Avatar name={item.firstName} />
              </td>
              <td>{handleNull(item.id)}</td>
              <td>{handleNull(item.firstName)}</td>
              <td>{handleNull(item.lastName)}</td>
              <td>{handleNull(item.email)}</td>
              <td>{handleNull(item.phone)}</td>
              <td>{handleNull(item.yearGroup)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button
          className="btn-1"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &#8592;
        </button>
        <span> Page {currentPage} </span>
        <button
          className="btn-2"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentItems.length < 9}
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Table;
