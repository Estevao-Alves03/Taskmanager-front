import React from 'react';


function Home(){
    return(
       <div className="flex justify-center items-center h-screen ">
            <div className="text-center border-4 border-slate-900 rounded-lg m-6 p-8">
                <h1 className="text-xl text-black font-bold mb-1">Bem vindo ao Gerenciador de Tarefas!</h1>
                <p className="text-balance text-blue-800 font-sans font-semibold">Deixando sua vida mais rápida e prática</p>
            </div>
       </div>
    );
}

export default Home;