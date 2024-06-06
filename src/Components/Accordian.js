import React from 'react';

const Accordian = ({title, answer}) => {

    const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className=''>

        <div className='border-2 border-indigo-600 py-2 px-6 rounded-lg mb-10'>

            <button onClick={() => setIsOpen(!isOpen)} className='flex justify-between w-full  '>
                <span className='text-blue-900 font-semibold'>{title}</span>
                {isOpen ? <span className='text-3xl text-blue-900'>-</span> : <span className='text-3xl text-blue-900'>+</span>}
            </button>

            <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'  }`}>
                <div className='overflow-hidden text-gray-500'>{answer}</div>
            </div>

        </div>

    </div>
  )
}

export default Accordian;