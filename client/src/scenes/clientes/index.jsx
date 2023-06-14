import { BsFillTriangleFill} from 'react-icons/bs'
import { BsSearch, BsTrash } from 'react-icons/bs'
import { FiUserPlus } from 'react-icons/fi'
import { MdOutlineModeEditOutline } from 'react-icons/md'
const Clientes = () => {

  return (
<div className="bg-custom-light-gray  h-screen flex pl-260">
  <div className="bg-custom-gray h-screen w-1180 flex flex-col justify-center items-center ">
    {/* columns */}
    <div className='h-60 w-1160 bg-custom-gray border-2 border-b-0 border-black flex items-center justify-between'>
        
     <div className='flex flex-row ml-4'> 
            <div className="relative">
              <div className="relative flex flex-row">
                <input
          type="text"
          placeholder='ID'
          className="w-120 h-40 rounded-l-2xl focus:outline-none bg-custom-green placeholder-white text-20 text-white text-center"
                />
                < button
          className=" right-0 top-0 h-40 w-30 bg-custom-green text-whiteflex justify-center items-center rounded-r-2xl "
                >
         <BsFillTriangleFill className='transform rotate-180 text-custom-light-gray' size={20}/>
              </button>
              </div>
          </div>
          <input
          type="text"
          className="w-240 h-40 rounded-2xl ml-4 focus:outline-none bg-custom-light-gray text-30"
                />
    </div>
    <div className='flex flex-row'>
    <div className='h-60 w-60 bg-custom-green border-l-2 border-t-0 mt-one border-black flex justify-center items-center'><BsSearch className='transform rotate-90 text-white' size={45} /> </div>
     <div className='h-60 w-60 bg-custom-green border-l-2 border-t-0 mt-one border-black flex justify-center items-center'><FiUserPlus className=' text-white' size={45} /> </div>
    </div>
    
    </div>
    <div className='h-90 w-1160 border-2  border-black grid grid-cols-clientes'>

       <div className="bg-custom-light-gray border border-black">
         {/* first box */}
        <div className=' bg-custom-gray h-60 flex justify-center items-center border-b-2 border-black'>
          <h1 className='text-white text-25'>Fecha de registro</h1>
          </div>
            {/* second box */}
        <div className=' bg-custom-gray h-60 flex justify-center items-center border-b-2 border-black'>
          <h1 className='text-white text-20'>31/12/22</h1>
          </div>
      </div>

       <div className="bg-custom-light-gray border border-black">
            {/* first box */}
        <div className=' bg-custom-gray h-60 flex justify-center items-center border-b-2 border-black'>
          <h1 className='text-white text-25'>ID</h1>
          </div>
             {/* second box */}
        <div className=' bg-custom-gray h-60 flex justify-center items-center border-b-2 border-black'>
          <h1 className='text-white text-20'>001</h1>
          </div>
      </div>

        <div className="bg-custom-light-gray border border-black">
            {/* first box */}
        <div className=' bg-custom-gray h-60 flex justify-center items-center border-b-2 border-black'>
          <h1 className='text-white text-25'>Nombre</h1>
          </div>
             {/* second box */}
        <div className=' bg-custom-gray h-60 flex justify-center items-center border-b-2 border-black'>
          <h1 className='text-white text-20'>Monkey D. Luffy</h1>
          </div>
      </div>

        <div className="bg-custom-light-gray border border-black">
            {/* first box */}
        <div className=' bg-custom-gray h-60 flex justify-center items-center border-b-2 border-black'>
          <h1 className='text-white text-25'>Direccion</h1>
          </div>
             {/* second box */}
        <div className=' bg-custom-gray h-60 flex justify-center items-center border-b-2 border-black'>
          <h1 className='text-white text-20'>56 Manchester St.
Latrobe, PA 15650</h1>
          </div>
      </div>

        <div className="bg-custom-light-gray border border-black">
            {/* first box */}
        <div className=' bg-custom-gray h-60 flex justify-center items-center border-b-2 border-black'>
          <h1 className='text-white text-25'>Telefono</h1>
          </div>
             {/* second box */}
        <div className=' bg-custom-gray h-60 flex justify-center items-center border-b-2 border-black'>
          <h1 className='text-white text-20'> (619)-618-4827</h1>
          </div>
      </div>

         <div className="bg-custom-light-gray border border-black">
            {/* first box */}
        <div className=' bg-custom-gray h-60 flex justify-center items-center border-b-2 border-black'>
          </div>
             {/* second box */}
        <div className=' bg-custom-gray h-60 flex justify-center items-center border-b-2 border-black'>
         <div className="bg-custom-gray h-60 flex justify-center items-center border-b-2 border-black">

      <div className="w-70 h-60 border border-t-2 border-black flex justify-center items-center">
        <BsTrash className="text-red-500" size={30} />
      </div>
      <div className="w-70 h-60 border border-t-2 border-black flex justify-center items-center">
        <MdOutlineModeEditOutline className="text-yellow-500" size={30} />
      </div>
    </div>
          </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default Clientes;