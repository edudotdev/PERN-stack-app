import { useState, useEffect } from 'react';

const useCrud = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
      setError(null);
    } catch (error) {
      setError('Error al obtener los datos');
    } finally {
      setLoading(false);
    }
  };

  const getItem = async (id) => {
    try {
      const response = await fetch(`${url}/${id}`);
      const json = await response.json();
      setData(json);
      return json;
    } catch (error) {
      setError('Error al crear el item');
    }  finally {
      setLoading(false);
    }
  };

  const createItem = async (item) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
      });
      if (response.ok) {
        data.push(item)
        setData(data)
      }
    } catch (error) {
      setError('Error al crear el item');
    }
  };

  const updateItem = async (id, item) => {
    try {
      const response = await fetch(`${url}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
      });
      if (response.ok) {
        console.log('wiiiiii')
        fetchData();
      }
    } catch (error) {
      setError('Error al actualizar el item');
    }
  };

  const deleteItem = async (id) => {
    try {
      const response = await fetch(`${url}/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        const res = data.filter((item) => item.id !== id)
        setData(res)
      } else {
        setError('Error al eliminar el item');
      }
    } catch (error) {
      setError('Error al eliminar el item');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error, createItem, updateItem, deleteItem, getItem };
};

export default useCrud;
