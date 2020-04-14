import { useEffect, useState } from "react";
import axios from "axios";

const apiUrl = process.env.API_URL;

const useConfigurationData = () => {
  const [configData, setConfigData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/configuration`)
      .then(({ data }) => {
        setConfigData(data);
        setError("");
        setLoading(false);
      })
      .catch(e => {
        setConfigData([]);
        setError(e.message);
        setLoading(false);
      });
  }, []);

  return { data: configData, loading, error };
};

export default useConfigurationData;
