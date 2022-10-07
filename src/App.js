import axios from "axios";
import { useEffect, useState } from "react";
import XMLParser from "react-xml-parser";
import "./App.css";
import Pagination from "./components/Pagination";
import Rates from "./components/Rates";

function App() {
  const [rates, setRates] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [ratesPerPage] = useState(5);
  const [usersIp, setUsersIp] = useState([]);
  const [ip, setIP] = useState([]);

  useEffect(() => {
    axios.get("https://www.tcmb.gov.tr/kurlar/today.xml").then((res) => {
      setLoading(true);
      const jsonDataFromXml = new XMLParser().parseFromString(res.data);
      setRates(jsonDataFromXml.children);
      setLoading(false);
    });

    const getData = async () => {
      const res = await axios.get("https://geolocation-db.com/json/");
      ip.push(res.data.IPv4);
    };

    getData();

  }, [usersIp, ip]);

  const indexOfLastRate = currentPage * ratesPerPage;
  const indexOfFirstRate = indexOfLastRate - ratesPerPage;
  const currentRates = rates.slice(indexOfFirstRate, indexOfLastRate);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <Rates rates={currentRates} loading={loading} />
      <Pagination
        ratesPerPage={ratesPerPage}
        totalRates={rates.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
