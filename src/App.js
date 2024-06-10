import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Table from "./Components/Table";

function App() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({});
  const [appliedFilters, setAppliedFilters] = useState({});
  const itemsPerPage = 9;

  const buildQueryString = (filters) => {
    const query = Object.keys(filters)
      .map((key) => {
        const [field, operator] = key.split("_");
        return `filters[${field}][$${operator}]=${filters[key]}`;
      })
      .join("&");
    return query ? `?${query}` : "";
  };

  useEffect(() => {
    const endpoint = `http://3.223.98.72:1337/api/students${buildQueryString(
      appliedFilters
    )}`;

    axios
      .get(endpoint)
      .then((response) => {
        const students = response.data.data.map((item) => ({
          id: item.id,
          firstName: item.attributes.firstName || "-",
          lastName: item.attributes.lastName || "-",
          email: item.attributes.parentEmailId || "-",
          phone: item.attributes.parentContactNo || "-",
          // dob: item.attributes.dob,
          // yearGroup: calculateYearGroup(item.attributes.dob),

          // yearGroup: calculateYearGroup(item.attributes.dob),
          // yearGroup: item.attributes.yearGroup,
          // photo: item.attributes.photo
        }));
        setData(students);
        students.forEach((student) => console.log("This is DOB:", student.dob));
        // console.log("This is data from API line 39" ,data.id)
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
      });
  }, [appliedFilters]);

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const applyFilters = () => {
    setAppliedFilters(filters);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <header className="App-header">
        <h1 className="header">Students</h1>

        <div className="filter-container">
          <input
            type="text"
            name="firstName_contains"
            placeholder="Filter by First Name"
            onChange={handleFilterChange}
          />
          <input
            type="text"
            name="lastName_contains"
            placeholder="Filter by Last Name"
            onChange={handleFilterChange}
          />
          <input
            type="text"
            name="email_contains"
            placeholder="Filter by Email"
            onChange={handleFilterChange}
          />
          <button className="btn" onClick={applyFilters}>
            Apply Filters
          </button>
        </div>
        <Table
          data={currentItems}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          currentItems={currentItems}
        />
      </header>
    </div>
  );
}

export default App;
