import React, { useState, useEffect } from 'react';
import './list.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const List = ({url}) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      if (response.data.success) {
        setList(response.data.data); // Use the correct key for the list
      } else {
        toast.error(response.data.message || 'Failed to fetch the list.');
      }
    } catch (error) {
      console.error('Error fetching list:', error);
      toast.error('Error fetching list. Please try again.');
    }
  };


  // handle delete 

  const handleDelete = async (foodid) => {
    const response = await axios.post(`${url}/api/food/remove`, {id:foodid});
    if (response.data.success) {
      toast.success('Food Removed');
      await fetchList();
    } else {
      toast.error('faild to remove')
    }
  
  }

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className='list-item-table'>
      <p>List of Items</p>
      <div className="list-item-table-title">
        <b>Image</b>
        <b>Name</b>
        <b>Category</b>
        <b>Price</b>
        <b>Action</b>
      </div>

      {list.length > 0 ? (
        list.map((item, index) => (
          <div key={index} className='list-table-format'>
            <img src={`${url}/uploads/${item.image}`} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>${item.price}</p>
            <button
              onClick={() => handleDelete(item._id)}
              className="delete-btn"
            >
              Delete
            </button>
          </div>


        ))
      ) : (
        <p>No items found.</p>
      )}
    </div>
  );
};

export default List;
