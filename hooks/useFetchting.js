import { useState, useEffect } from "react";
import axios from "axios";

export const useCombineData = (apiUrls, dataKeys) => {
  const [combinedData, setCombinedData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const responses = await Promise.all(apiUrls.map((url) => axios.get(url)));

      const combined = {};

      for (let i = 0; i < dataKeys.length; i++) {
        combined[dataKeys[i]] = responses[i].data;
      }

      setCombinedData(combined);
      setIsLoading(false);
    } catch (error) {
      setError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { combinedData, isLoading, error, refetchData: fetchData };
};

export const useGetData = (url) => {
  const [datas, setDatas] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setDatas(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { datas, isLoading, refetchData: fetchData };
};

export const usePostData = () => {
  const postData = async (url, values, option) => {
    try {
      const response = await axios.post(url, values, option);
      return response.data;
    } catch (error) {
      console.error("Error posting data:", error);
      throw error;
    }
  };

  return { postData };
};

export const usePutData = () => {
  const putData = async (url, id, values) => {
    try {
      const response = await axios.put(`${url}/${id}`, values);
      return response.data;
    } catch (error) {
      console.error("Error updating data:", error);
      throw error;
    }
  };

  return { putData };
};

export const useDeleteData = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  const deleteData = async (url, id) => {
    setIsDeleting(true);
    try {
      const response = await axios.delete(`${url}/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting data:", error);
      throw error;
    } finally {
      setIsDeleting(false);
    }
  };

  return { deleteData, isDeleting };
};
