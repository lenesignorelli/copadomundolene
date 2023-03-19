
import Selecao from './components/Selecao';
import './App.css';

const selecoes = [
  { nome: "Qatar", sigla: "QAT", grupo: "A"},
  { nome: "Equador", sigla: "ECU", grupo: "A"},
  { nome: "Senegal", sigla: "SEN", grupo: "A"},
  { nome: "Holanda", sigla: "NED", grupo: "A"},
  { nome: "Inglaterra", sigla: "ENG", grupo: "B"},
  { nome: "Irã", sigla: "IRN", grupo: "B"},
  { nome: "Estados Unidos", sigla: "USA", grupo: "B"},
  { nome: "País de Gales", sigla: "WAL", grupo: "B"},
  { nome: "Argentina", sigla: "ARG", grupo: "C"},
  { nome: "Arábia Saudita", sigla: "KSA", grupo: "C"},
  { nome: "México", sigla: "MEX", grupo: "C"},
  { nome: "Polônia", sigla: "POL", grupo: "C"},
  { nome: "França", sigla: "FRA", grupo: "D"},
  { nome: "Dinamarca", sigla: "DEN", grupo: "D"},
  { nome: "Tunísia", sigla: "TUN", grupo: "D"},
  { nome: "Austrália", sigla: "AUS", grupo: "D"},
  { nome: "Espanha", sigla: "ESP", grupo: "E"},
  { nome: "Alemanha", sigla: "GER", grupo: "E"},
  { nome: "Japão", sigla: "JPN", grupo: "E"},
  { nome: "Costa Rica", sigla: "CRC", grupo: "E"},
  { nome: "Bélgica", sigla: "BEL", grupo: "F"},
  { nome: "Canadá", sigla: "CAN", grupo: "F"},
  { nome: "Marrocos", sigla: "MAR", grupo: "F"},
  { nome: "Croácia", sigla: "CRO", grupo: "F"},
  { nome: "Brasil", sigla: "BRA", grupo: "G"},
  { nome: "Sérvia", sigla: "SRB", grupo: "G"},
  { nome: "Suíça", sigla: "SUI", grupo: "G"},
  { nome: "Camarões", sigla: "CMR", grupo: "G"},
  { nome: "Portugal", sigla: "POR", grupo: "H"},
  { nome: "Gana", sigla: "GHA", grupo: "H"},
  { nome: "Uruguai", sigla: "URU", grupo: "H"},
  { nome: "Coréia do Sul", sigla: "KOR", grupo: "H"}
  ]

function App() {
  return (
    <div className="App">
      <h1>Copa do Mundo 2022</h1>
      <div>
        {
          selecoes.map(paises => 
            <Selecao key={paises.sigla} nomePais={paises.nome}
                     siglaPais={paises.sigla} grupoPais={paises.grupo}/>)
        }
      </div>
    </div>
  );
}

export default App;
