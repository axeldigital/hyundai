import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Tarjeta() {
    return (
        <Card>
            <Card.Img variant="top" src="https://www.seminuevos.hyundai.es/picserver1/userdata/1/19170/UqfXuhelB/i10-newest.png" />
            <Card.Body>
                <Card.Title>Hyundai i10</Card.Title>
                <h5>$559,900</h5>
                <Card.Text className="pb-0 carta">
                    <Row style={{margin: '0 0.5px'}}>
                        <Col className="pr-1 pl-0"><p><b>Año</b></p></Col>
                        <Col className="pr-0 pl-0"><p><b>2020</b></p></Col>
                    </Row>
                    <Row style={{margin: '0 0.5px'}}>
                        <Col className="pr-1 pl-0"><p><b>Modelo</b></p></Col>
                        <Col className="pr-0 pl-0"><p><b>Ioniq</b></p></Col>
                    </Row>
                    <Row style={{margin: '0 0.5px'}}>
                        <Col className="pr-1 pl-0"><p><b>Distribuidor</b></p></Col>
                        <Col className="pr-0 pl-0"><p><b>Satélite</b></p></Col>
                    </Row>
                    <Row style={{margin: '0 0.5px'}}>
                        <Col className="pr-1 pl-0"><p><b>Versión</b></p></Col>
                        <Col className="pr-0 pl-0"><p><b>HBR7</b></p></Col>
                    </Row>
                </Card.Text>
                <Link href="/auto">
                    <Button variant="primary">Llévatelo</Button>
                </Link>
                
            </Card.Body>
        </Card>
    )
}