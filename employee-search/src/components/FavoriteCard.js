import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { FavoritesContext } from '../context/FavoritesContext';

const FavoriteCard = ({ employee, index, company }) => {
  const { name, dob, location, picture, login } = employee;
  const { removeFromFavorites } = useContext(FavoritesContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const openModal = (itemId) => {
    setSelectedItemId(itemId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItemId(null);
  };

  const confirmRemoveFromFavorites = () => {
    removeFromFavorites(selectedItemId);
    closeModal();
    toast.success('Favorite has been removed successfully!')
  };

  return (
    <div className="w-full shadow-lg rounded-lg relative">
      <div className="flex justify-center items-center p-4">
        <img src={picture.large} className="h-40 w-auto rounded-full" alt="Employee" />
      </div>
      <div className="p-5">
        <h4 className="text-xl font-semibold pb-2">{`${name.first} ${name.title} ${name.last}`}</h4>

        <p><strong>Age:</strong> {dob.age}</p>
        <h4 className="pt-4 pb-2 text-xl font-semibold">Locations</h4>
        <ul className="flex flex-wrap gap-2">
          <li><strong>City:</strong> {location.city},</li>
          <li><strong>Country:</strong> {location.country}</li>
        </ul>
        <div className="grid grid-cols-2 gap-4 pt-6">
          <Link to={`/employee/${company}/${index}`} className="btn">More Details</Link>
          <button type="button" className="btn btn-error text-white" onClick={() => openModal(login.uuid)}>Remove Favorite</button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-70">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h2 className="font-bold text-lg">Confirm Removal</h2>
            <p className="py-4">Are you sure you want to remove this employee from favorites?</p>
            <div className="flex justify-end space-x-4">
              <button className="btn" onClick={closeModal}>Cancel</button>
              <button className="btn btn-error text-white" onClick={confirmRemoveFromFavorites}>Yes, delete it!</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default FavoriteCard