import { AiOutlineCalendar} from 'react-icons/ai'
const Registros = () => {

  return (
<div className="bg-custom-light-gray  h-screen flex pl-260">
  <div className="bg-custom-light-gray h-screen w-1180 flex flex-col items-center ">
    {/* columns */}
    <div className='h-70 w-1160 bg-custom-gray border-2 border-black flex items-center justify-center mt-10px'>
         <div className=" flex flex-row">
                <input
          type="text"
          placeholder='Hoy'
          className="w-120 h-50 rounded-l-2xl focus:outline-none bg-custom-green placeholder-custom-light-gray text-20 text-white text-center border-2 border-black"
                />
                < button
          className=" right-0 top-0 h-50 w-40 bg-custom-green text-whiteflex justify-center items-center rounded-r-2xl border-2 border-black"
                >
         <AiOutlineCalendar className=' text-custom-light-gray' size={30}/>
              </button>
              </div>
    </div>
    <div className="h-85 w-1120 border-2 border-black m-auto rounded-xl grid grid-cols-registro">
{/* first box */}
      <div className="bg-custom-light-gray border border-black rounded-tl-lg rounded-bl-lg">
         
        <div className=' bg-custom-green h-50 flex justify-center items-center border-b-2 border-black rounded-tl-md'>
          <h1 className='text-custom-light-gray text-35'>Prendas</h1>
          </div>
            {/* second box */}

            <div className="flex flex-row h-9 rounded-bl-lg">
              {/* first */}
             <div className=' bg-custom-gray w-1/2 rounded-bl-md border-r-2 border-black flex justify-center items-center flex-col'>
          <div className="h-30 flex justify-center items-center">
          <span className='text-custom-light-gray text-35 text-center'>Notas Generadas</span>
          </div>
          
          <div className="w-180 h-180 flex items-center justify-center mt-10px">
              <div className="w-180 h-180 rounded-full border-8 border-custom-green bg-custom-gray flex items-center justify-center">
                  <span className="text-4xl font-medium text-custom-light-gray text-70 tracking-wider transform scale-y-125 font-outline-2  outline-black ">70</span>
              </div>
            </div>

          <div>
             <div className="h-320 mt-5 border-2 border-black m-auto rounded-xl grid grid-cols-registro-mini">
{/* derecha */}
               <div className="bg-custom-gray border border-black rounded-tl-md rounded-bl-md">
         {/* first box */}
        <div className=' bg-custom-green h-50 flex justify-center items-center border-b-2 border-black rounded-tl-md'>
          <h1 className='text-custom-light-gray text-20'>Descripcion</h1>
          </div>
            {/* second box */}
        <div className=' bg-custom-gray h-50 flex justify-center items-center border-b-2 border-black '>
          <h1 className='text-custom-light-gray text-20'>0001-camisa</h1>
          </div>
            {/* third box */}
        <div className=' bg-custom-gray h-50 flex justify-center items-center border-b-2 border-black '>
          <h1 className='text-custom-light-gray text-20'>0002-patalon</h1>
          </div>
      </div>
{/* izquierda */}
        <div className="bg-custom-gray border border-black rounded-tr-lg rounded-br-md">
            {/* first box */}
        <div className=' bg-custom-green h-50 flex justify-center items-center border-b-2 border-black rounded-tr-md'>
          <h1 className='text-custom-light-gray text-20'>Cantidad</h1>
          </div>
               {/* second box */}
        <div className=' bg-custom-gray h-50 flex justify-center items-center border-b-2 border-black '>
          <h1 className='text-custom-light-gray text-20'>25</h1>
          </div>
            {/* third box */}
        <div className=' bg-custom-gray h-50 flex justify-center items-center border-b-2 border-black '>
          <h1 className='text-custom-light-gray text-20'>40</h1>
          </div>
      </div>
             </div>
          </div>
          </div>
            {/* second */}
              <div className=' bg-custom-gray w-1/2  flex justify-center items-center flex-col'>
          <div className="h-30 flex justify-center items-center">
          <span className='text-custom-light-gray text-35 text-center'>Notas Generadas</span>
          </div>
          
          <div className="w-180 h-180 flex items-center justify-center mt-10px">
              <div className="w-180 h-180 rounded-full border-8 border-custom-green bg-custom-gray flex items-center justify-center">
                  <span className="text-4xl font-medium text-custom-light-gray text-70 tracking-wider transform scale-y-125 font-outline-2  outline-black ">45</span>
              </div>
            </div>

          <div>
             <div className="h-320 mt-5 border-2 border-black m-auto rounded-xl grid grid-cols-registro-mini">
{/* derecha */}
               <div className="bg-custom-gray border border-black rounded-tl-md rounded-bl-md">
         {/* first box */}
        <div className=' bg-custom-green h-50 flex justify-center items-center border-b-2 border-black rounded-tl-md'>
          <h1 className='text-custom-light-gray text-20'>Descripcion</h1>
          </div>
            {/* second box */}
        <div className=' bg-custom-gray h-50 flex justify-center items-center border-b-2 border-black '>
          <h1 className='text-custom-light-gray text-20'>0001-camisa</h1>
          </div>
            {/* third box */}
        <div className=' bg-custom-gray h-50 flex justify-center items-center border-b-2 border-black '>
          <h1 className='text-custom-light-gray text-20'>0002-patalon</h1>
          </div>
      </div>
{/* izquierda */}
        <div className="bg-custom-gray border border-black rounded-tr-lg rounded-br-md">
            {/* first box */}
        <div className=' bg-custom-green h-50 flex justify-center items-center border-b-2 border-black rounded-tr-md'>
          <h1 className='text-custom-light-gray text-20'>Cantidad</h1>
          </div>
               {/* second box */}
        <div className=' bg-custom-gray h-50 flex justify-center items-center border-b-2 border-black '>
          <h1 className='text-custom-light-gray text-20'>25</h1>
          </div>
            {/* third box */}
        <div className=' bg-custom-gray h-50 flex justify-center items-center border-b-2 border-black '>
          <h1 className='text-custom-light-gray text-20'>40</h1>
          </div>
      </div>
             </div>
          </div>
          </div>
</div>
      </div>



        {/* deracha */}
        <div className="bg-custom-gray border border-black rounded-tr-lg rounded-br-lg">
            {/* first box */}
        <div className=' bg-custom-gray h-1/2 flex justify-center items-center border-b-2 border-black rounded-tr-xl flex-col'>
          <div className="h-24 flex justify-center items-center">
          <span className='text-custom-light-gray text-35 break-words w-220 text-center'>Notas Generadas</span>
          </div>
          
          <div className="w-180 h-180 flex items-center justify-center mt-10px">
              <div className="w-180 h-180 rounded-full border-8 border-custom-green bg-custom-gray flex items-center justify-center">
                  <span className="text-4xl font-medium text-custom-light-gray text-70 tracking-wider transform scale-y-125 font-outline-2">40</span>
              </div>
            </div>

          </div>
             {/* second box */}
        <div className=' bg-custom-gray h-1/2 flex justify-center items-center border-b-2 border-black rounded-br-md flex-col'>
          <div className="h-24 flex justify-center items-center">
          <span className='text-custom-light-gray text-35 break-words w-220 text-center'>Notas Generadas</span>
          </div>
          
          <div className="w-180 h-180 flex items-center justify-center mt-10px">
              <div className="w-180 h-180 rounded-full border-8 border-custom-green bg-custom-gray flex items-center justify-center">
                  <span className="text-4xl font-medium text-custom-light-gray text-70 tracking-wider transform scale-y-125 font-outline-2">20</span>
              </div>
            </div>

          </div>
      </div>

    </div>
    </div>
    </div>
  );
};

export default Registros;