export function VehicleCard() {
   return (
      <div className='h-fit w-full max-w-64 rounded-2xl border-2 border-indigo-400 bg-gradient-to-b from-black/70 to-indigo-800 p-4 text-white transition-all duration-500 hover:shadow-[0_0_15px_3px_rgba(99,102,241,0.5)]'>
         <div>
            <div>
               <div className='mb-4 w-fit rounded-xl border-2 px-4 py-2 text-sm font-black'>
                  <h2>ABC123</h2>
               </div>
               <h1 className='text-[18px] font-black'>Speedo</h1>
               <span className='text-xs'>Van</span>
            </div>
            <img
               src='https://docs.fivem.net/vehicles/speedo4.webp'
               className='my-2 h-[130px] w-[220px]'
            />
         </div>
         <button className='mt-4 w-full cursor-pointer rounded-lg bg-indigo-500 py-1.5 text-white transition-all duration-500 hover:bg-indigo-600'>
            Retirar
         </button>
      </div>
   );
}
