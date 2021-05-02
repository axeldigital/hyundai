export default function RowTabla() {
  const alerta = () => {
    alert('Mensaje')
  }
  return (
    <tr>
      <td className="text-center">
        <img src="/iconos/envelope-solid.svg" alt="hyndai seminuevos" title="hyundai seminuevos" onClick={alerta} />
      </td>
      <td>Mayo 2021</td>
      <td>Lorem ipsum dolor</td>
      <td>Pellentesque ut ornare libero....</td>
      <td className="text-center">sds</td>
    </tr>
  )
}