import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Dashboard(){
  return(
    <Container>
      <Row>
        <Col>
          <img src="/logo-hyundai.svg" alt="" title="" style={{width: '200px', padding: '10px'}} />
        </Col>
        <Col>
          <p style={{padding: '10px', textAlign: 'right'}}><small><b>USUARIO: </b> Gerardo Lopez Monreal</small></p>
        </Col>
      </Row>
    </Container>
  )
}