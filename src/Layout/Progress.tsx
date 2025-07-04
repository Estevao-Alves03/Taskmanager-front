import {useTasksStore} from '../Zustand/Store/TaksStore'


function Progresso() {
 
  const {total, concluidas} = useTasksStore()
  const pendentes = total - concluidas;

  return (
    <div className='mx-auto mt-6 mb-6'>
      <div className='grid grid-cols-3 gap-4 '>
        <div  className=' w-full p-6 rounded-md border border-gray-300 shadow-sm'>
            <h2 className='text-lg text-gray-600'>Total de tarefas</h2>
            <p className='text-black font-bold text-xl'>{total}</p> 
        </div>
         <div  className='w-full p-6 rounded-md border border-gray-300 shadow-sm'>
            <h2 className='text-lg text-gray-600'>Concluidas</h2>
            <p className='text-emerald-600 font-bold text-xl'>{concluidas}</p>
        </div>
          <div className=' w-full p-6 rounded-md border border-gray-300 shadow-sm'>
            <h2 className='text-lg text-gray-600'>Pendendes</h2>
            <p className='text-orange-600 font-bold text-xl'>{pendentes}</p>
        </div>
      </div>
    </div>
  )
}

export default Progresso
