import './styles.css'

export default function Selecao({siglaPais, nomePais, grupoPais}) {
    // console.log(props);
    // props.siglaPais
    // props.nomePais
    // props.grupoPais
    // console.log(nomePais);
  return (
    <div>
        <span>{nomePais}</span>
        <span>{siglaPais}</span>
        <span>{grupoPais}</span>
    </div>
  )
}
