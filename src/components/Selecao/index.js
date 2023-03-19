import PropTypes from 'prop-types';
import './styles.css'

function Selecao({siglaPais, nomePais, grupoPais}) {
    // console.log(props);
    // props.siglaPais
    // props.nomePais
    // props.grupoPais
    // console.log(nomePais);
  return (
    <div className='linha-selecao'>
        <span>{nomePais}</span>
        <span>{siglaPais}</span>
        <span>{grupoPais}</span>
    </div>
  )
}
Selecao.propTypes= {
    nomePais: PropTypes.string.isRequired,
    siglaPais: PropTypes.string.isRequired,
    grupoPais: PropTypes.string.isRequired
}

export default Selecao;