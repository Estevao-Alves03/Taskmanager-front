import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='bg-blue-800 text-white p-6'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to='/'>
           <h1 className='text-3xl font-bold'>Meu Gerenciador</h1>
        </Link>
        <div className='space-x-4'> 
            <Link to='/Login' className='text-xl font-semibold'>Login</Link>
            <Link to='/Cadastro' className='text-xl font-semibold'>Cadastro</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;