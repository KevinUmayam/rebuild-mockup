import React, { useState, useEffect, useRef } from 'react';

const RecibirPedido = () => {
   const [choices, setChoices] = useState([
    'Option 1',
    'Option 2'
  ]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleAddChoice = () => {
    if (searchQuery.trim() !== '') {
      setChoices([...choices, searchQuery]);
      setSearchQuery('');
      setShowDropdown(false);
    }
  };

  const filteredChoices = choices.filter(choice =>
    choice.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-custom-light-gray w-screen h-screen flex justify-end">
      <div className="bg-custom-gray h-screen w-1180 ">

        <div className="flex justify-between">
          <div className="bg-custom-green w-240 h-60  rounded-br-lg border-2 border-black text-center"><h1 className="color text-white text-30">DD/MM/AAA</h1></div>
          <div className="bg-custom-green w-240 h-60 rounded-bl-lg border-2 border-black text-center"><h1 className="color text-white text-30">folio:000001</h1></div>
        </div>

        <div className="w-480 h-60 flex">
        <div>Cliente:</div>
        <div>  
           <div className="relative">
      <div className="relative inline-block w-64">
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none"
          placeholder="Search..."
        />
        <button
          onClick={handleDropdownToggle}
          className="absolute right-0 top-0 h-full px-4 bg-green-500 text-white font-semibold rounded-md"
        >
          {showDropdown ? 'Close' : 'Open'}
        </button>
      </div>

      {showDropdown && (
        <ul className="mt-2 p-2 bg-white border border-gray-300 rounded-md shadow-md">
          {filteredChoices.map((choice, index) => (
            <li key={index} className="px-4 py-2 cursor-pointer hover:bg-gray-100">
              {choice}
            </li>
          ))}
          {filteredChoices.length === 0 && (
            <li className="px-4 py-2 text-gray-500">No matching options</li>
          )}
          <li className="px-4 py-2">
            <button
              onClick={handleAddChoice}
              className="text-green-500 hover:text-green-700"
            >
              Add "{searchQuery}"
            </button>
          </li>
        </ul>
      )}
    </div>
    </div>
    </div>
        <div></div>
      </div>
      </div>

  );
};

export default RecibirPedido;