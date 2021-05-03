export default function RowCampanaCoche({modelo, imagen}) {
  return (
    <tr>
      <td className="align-middle">
        <img src={imagen} alt="hyndai seminuevos" title="hyundai seminuevos" style={{width: '200px'}} />
      </td>
      <td className="align-middle">{modelo}</td>
      <td className="align-middle">Lorem ipsum dolor</td>
      <td className="align-middle">Pellentesque ut ornare libero....</td>
      <td className="align-middle">
        <span className="lnr lnr-cross"></span>
      </td>
    </tr>
  )
}