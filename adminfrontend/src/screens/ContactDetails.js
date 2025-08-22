import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";

const ContactDetails = () => {
  const [data, setData] = useState([]);
  const [pending, setPending] = useState(true);

  const columns = [
    { name: "S. no.", selector: (row, index) => index + 1, sortable: true },
    { name: "Name", selector: (row) => row.name, sortable: true },
    { name: "Email", selector: (row) => row.email, sortable: true },
    { name: "Contact", selector: (row) => row.contact, sortable: true },
    { name: "Subject", selector: (row) => row.subject },
    { name: "Message", selector: (row) => row.message },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://hill-view-escape-second-backend.onrender.com/contact");
        setData(res.data);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      } finally {
        setPending(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ overflow: "hidden", border: "1px solid grey", padding: "10px", margin: "30px 20px 0 20px", borderRadius: "5px" }}>
      <div style={{}}>
        <DataTable
          title="Contact Submissions"
          columns={columns}
          data={data}
          pagination
          progressPending={pending}
          highlightOnHover
          striped
        />

      </div>

    </div>
  );
};

export default ContactDetails;
