import React, { useState } from 'react';
import { BsFillTriangleFill} from 'react-icons/bs'
import { CgShapeRhombus } from 'react-icons/cg'
import { AiOutlineClose } from 'react-icons/ai'

const RecibirPedido = () => {
  // opciones para el dropdown menu
  const [choices, setChoices] = useState([
    '001-Ashlee',
    '002-Carlos',
    '003-Kevin',
    '004-Michell',
  ]);
  // usestate para busqueda y visibilidad de menu
  const [searchQuery, setSearchQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  // leer el valor de la busqueda
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  // toggle para el menu
  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };
 // agregar persona a el menu de busqueda 
  const handleAddChoice = () => {
    if (searchQuery.trim() !== '') {
      setChoices([...choices, searchQuery]);
      setSearchQuery('');
      setShowDropdown(false);
    }
  };
  // filtrar para que las busqueda sea mas facil 
  const filteredChoices = choices.filter(choice =>
    choice.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    // gray page div
<div className="bg-custom-light-gray w-screen h-screen flex justify-end">
  <div className="bg-custom-gray h-screen w-1180 ">

{/* Divs de arriba */}
    <div className="flex justify-between">
      <div className="bg-custom-green w-240 h-50  rounded-br-lg border-2 border-black text-center">
        <h1 className="color text-white text-30">DD/MM/AAA</h1>
      </div>
      <div className="bg-custom-green w-240 h-50 rounded-bl-lg border-2 border-black text-center">
        <h1 className="color text-white text-30">folio:000001</h1>
      </div>
    </div>

{/* Divs de busqueda */}
    <div className="w-480 h-50 mt-10 mb-10 ml-10px flex">
      <div className='text-white text-30'>Cliente:</div>
      {/*  input funcional  */}
        <div className='flex flex-row'> 
            <div className="relative">
              <div className="relative flex flex-row">
                <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          className="w-240 h-50 rounded-l-md border-2 border-black focus:outline-none bg-custom-light-gray text-30"
                />
                < button
          onClick={handleDropdownToggle}
          className=" right-0 top-0 h-50 w-60 bg-custom-green text-white border-2 border-black flex justify-center items-center"
                >
          {/* {showDropdown ? 'Close' : 'Open'} */}
          {showDropdown ?  <BsFillTriangleFill size={30} /> : <BsFillTriangleFill className='transform rotate-180' size={30}/>}
              </button>
              <button
              onClick={handleAddChoice}
                className=" right-0 top-0 h-50 w-60 bg-custom-green text-white rounded-r-md border-2 border-black flex justify-center items-center"
              >
              <CgShapeRhombus size={35} />
              </button>
              </div>
              {showDropdown && (
                <ul className="w-240 bg-custom-light-gray border border-black shadow-md">
                  {filteredChoices.map((choice, index) => (
                  <li key={index} className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                  {choice}
                  </li>
                    ))}
                  </ul>
                      )}
                    </div> 
                {filteredChoices.length === 0 && (
            <div className='w-240 flex justify-center items-center'><h1 className=" font-medium text-red-600">Usuario No Encontrado</h1></div>
          )}
          </div>
           {/* fin de input funcional  */}
     </div>

{/* div de cuadro grid con borders */}
<div className='flex justify-center items-center flex-col'>
    <div className='h-16 w-1160 bg-custom-gray border-2 border-b-0 border-black flex items-center justify-evenly'>
      <h1 className='text-white text-30 ml-5'>Prenda:</h1>
          {/* input de prenda */}
        <div className='flex flex-row'> 
          <input
          type="text"
          className="w-220 h-50 rounded-l-md border-2 border-black focus:outline-none bg-custom-light-gray text-30"
          />
          <button
          className=" right-0 top-0 h-50 w-60 bg-custom-green text-white border-2 border-black flex justify-center items-center rounded-r-md"
          >
          <BsFillTriangleFill className='transform rotate-180' size={30}/>
          </button>
      </div> 
        {/* input de cantidad */}
      <h1 className='text-black text-30 '>Cantidad:</h1>
       
        <input
          type="text"
          className="w-120 h-50 rounded-md border-2 border-black focus:outline-none bg-custom-light-gray text-30"
        />
         <button
          className=" right-0 top-0 h-50 w-28 bg-custom-green text-white border-2 border-black flex justify-center items-center rounded-md"
        >
          <h1 className='text-white text-30 '>OK</h1>
        </button>
        <h1 className='text-white text-30 mr-5'>Total: $000.00</h1>
    </div> 
<div className='h-460 w-1160 border-t-2 border-b-2  border-black grid grid-cols-recibir'>
      <div className="bg-custom-light-gray border border-l-2 border-black">
        <div className=' bg-custom-gray h-60 w-270 flex justify-center items-center border-b-2 border-black'>
          <h1 className='text-white text-25'>Camisa-001</h1>
          </div>
      </div>
      <div className="bg-custom-light-gray border border-black">
        <div className=' bg-custom-gray h-60 w-270 flex justify-center items-center border-b-2 border-black'>
          <h1 className='text-white text-25'>2 Unids</h1>
          </div>
      </div>
      <div className="bg-custom-light-gray border border-black">
        <div className=' bg-custom-gray h-60 w-270 flex justify-center items-center border-b-2 border-black'>
          <h1 className='text-white text-25'>$100.00</h1>
          </div>
      </div>
      <div className="bg-custom-light-gray border border-black">
        <div className=' bg-custom-gray h-60 w-270 flex justify-center items-center border-b-2 border-black'>
          <h1 className='text-white text-25'>$200.00</h1>
          </div>
      </div>
      <div className="bg-custom-light-gray border border-r-2 border-black">
        <div className=' bg-custom-gray h-60 w-78 flex justify-center items-center border-b-2 border-black'>
          <AiOutlineClose className=" text-red-500" size={55}></AiOutlineClose>
          </div>
      </div>
      </div>
</div>
{/* botton al final de la pagina */}
<div className="flex justify-end mr-10px items-center">
          <button className="bg-custom-green w-240 h-50 mt-5 rounded-lg border-2 border-black text-center"><h1 className="color text-white text-30">Confirmar Pedido</h1></button>
        </div>
      </div>
      
    </div>
  );
};

export default RecibirPedido;