import React, { useState } from 'react';
import { MdOutlineModeEditOutline } from 'react-icons/md'
import { BsTrash } from 'react-icons/bs'
import { AiOutlineCheck } from 'react-icons/ai'


const EntregarPedido = () => {
 const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const handleDelete = () => {
    setMessage('Borrar user');
    setShowMessage(true);
  };

  const handleEdit = () => {
    setMessage('Editar user');
    setShowMessage(true);
  };

  const handleDelivery = () => {
    setMessage('Entregar pedido');
    setShowMessage(true);
  };

  const handleGoBack = () => {
    setMessage('');
    setShowMessage(false);
  };

  return (
<div className="bg-custom-light-gray  h-screen flex pl-260">
  <div className="bg-custom-gray h-screen w-1180 flex justify-center items-center ">
    {/* columns */}
    <div className='h-96 w-1160 border-2  border-black grid grid-cols-entrega'>

       <div className="bg-custom-light-gray border border-black">
         {/* first box */}
        <div className=' bg-custom-gray h-60 flex justify-center items-center border-b-2 border-black'>
          <h1 className='text-white text-25'>Folio</h1>
          </div>
            {/* second box */}
        <div className=' bg-custom-gray h-60 flex justify-center items-center border-b-2 border-black'>
          <h1 className='text-white text-20'>0001</h1>
          </div>
      </div>

        <div className="bg-custom-light-gray border border-black">
            {/* first box */}
        <div className=' bg-custom-gray h-60 flex justify-center items-center border-b-2 border-black'>
          <h1 className='text-white text-25'>ID</h1>
          </div>
             {/* second box */}
        <div className=' bg-custom-gray h-60 flex justify-center items-center border-b-2 border-black'>
          <h1 className='text-white text-20'>000</h1>
          </div>
      </div>

        <div className="bg-custom-light-gray border border-black">
            {/* first box */}
        <div className=' bg-custom-gray h-60 flex justify-center items-center border-b-2 border-black'>
          <h1 className='text-white text-25'>Nombre</h1>
          </div>
             {/* second box */}
        <div className=' bg-custom-gray h-60 flex justify-center items-center border-b-2 border-black'>
          <h1 className='text-white text-20'>Kevin Steve Meza Umayam</h1>
          </div>
      </div>

        <div className="bg-custom-light-gray border border-black">
            {/* first box */}
        <div className=' bg-custom-gray h-60 flex justify-center items-center border-b-2 border-black'>
          <h1 className='text-white text-25'>Descripcion</h1>
          </div>
             {/* second box */}
        <div className=' bg-custom-gray h-60 flex justify-center items-center border-b-2 border-black'>
          <h1 className='text-white text-20'>2-Camisa; 1-Pantalon</h1>
          </div>
      </div>

        <div className="bg-custom-light-gray border border-black">
            {/* first box */}
        <div className=' bg-custom-gray h-60 flex justify-center items-center border-b-2 border-black'>
          <h1 className='text-white text-25'>Importe</h1>
          </div>
             {/* second box */}
        <div className=' bg-custom-gray h-60 flex justify-center items-center border-b-2 border-black'>
          <h1 className='text-white text-20'>$1500.00</h1>
          </div>
      </div>

        <div className="bg-custom-light-gray border border-black">
            {/* first box */}
        <div className=' bg-custom-gray h-60 flex justify-center items-center border-b-2 border-black'>
          </div>
             {/* second box */}
      <div className="bg-custom-gray h-60 flex justify-center items-center border-b-2 border-black">
      <div className="w-50 h-60 border-r-2 border-black flex justify-center items-center">
        <BsTrash className="text-red-500" size={30} onClick={handleDelete} />
      </div>
      <div className="w-50 h-60 border-r-2 border-black flex justify-center items-center">
        <MdOutlineModeEditOutline className="text-yellow-500" size={30} onClick={handleEdit} />
      </div>
      <div className="w-50 h-60 border-r-2 border-black flex justify-center items-center">
        <AiOutlineCheck className="text-green-500" size={30} onClick={handleDelivery} />
      </div>

      {showMessage && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-black">
          <div className="bg-custom-gray p-6 rounded shadow flex flex-col justify-center items-center">
            <p className="text-center text-white">{message}</p>
            <button
              className="mt-4 px-4 py-2 bg-custom-green rounded"
              onClick={handleGoBack}
            >
              Go Back
            </button>
          </div>
        </div>
      )}
    </div>
      </div>

    </div>
  </div>
</div>
  );
};

export default EntregarPedido;