import BarraDeTarefas from '../../Layout/BarraDeTarefas'
import Pesquisa from '../../Layout/Pesquisa'

function Home(){
    return(
      <div>
        <BarraDeTarefas total={5} concluidas={0}/>
        <Pesquisa/>
      </div>
    );
}
//    

export default Home;