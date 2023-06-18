import { useState, useEffect } from "react";
import axios from "axios";

const Usermap = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://poruwa-back.onrender.com/example"
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      {data.map((d) => (
        <div key={d._id}>{d.name}</div>
      ))}
    </div>
  );
};

export default Usermap;
