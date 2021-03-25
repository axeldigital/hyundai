import Link from 'next/link';
import Layout from '../components/layout';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Filtros from '../components/filtros';

export default function Condiciones(){
  return(
    <Layout>
      <Container className="categorias">
        <Row>
          <Col className="menu detalle">
            <hr/>
            <h1>Condiciones</h1>
            <hr/>
            <p style={{ textAlign: 'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu nisi odio. Aliquam vitae purus diam. Pellentesque dignissim vestibulum lectus, vel consectetur diam dignissim et. Morbi eget ullamcorper mi. Duis vel posuere nibh, et aliquam nulla. Donec placerat metus id viverra euismod. Praesent mi ligula, euismod a lobortis sodales, aliquam sed metus. Vestibulum ut pretium enim. Ut sed lectus at risus iaculis pulvinar nec molestie purus. Sed viverra eros quis finibus lobortis. Proin vel arcu neque. Fusce vitae sollicitudin lorem. Etiam varius arcu dui, in pretium erat tincidunt ut. Ut sit amet nisi in risus tempor sollicitudin.<br/><br/>Mauris egestas, erat in accumsan luctus, tortor odio luctus odio, eget dictum dolor lorem quis massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc mollis tristique libero in dignissim. Aliquam erat volutpat. Maecenas interdum malesuada tellus, non gravida leo iaculis ut. Aenean luctus, ante consequat ornare iaculis, nulla justo aliquet eros, sed tincidunt lacus metus id nunc. Nullam lorem risus, aliquam vel faucibus eget, cursus eget quam. Integer quis lacus ipsum. Vivamus vehicula orci eget magna venenatis tempor. Vestibulum id iaculis velit, in viverra nunc. Quisque est ex, feugiat et nulla sed, varius consequat urna. Sed volutpat iaculis mi, ac dictum eros ornare quis. Phasellus consectetur iaculis est. Mauris efficitur ullamcorper feugiat. Curabitur feugiat nisi risus, non volutpat justo ornare sit amet.<br/><br/>Suspendisse vel lacus vitae mauris euismod finibus. Phasellus pellentesque, sapien in commodo porttitor, justo quam aliquet quam, eu ullamcorper lorem tortor eget quam. Nam in lacus metus. Nullam vestibulum gravida tellus sit amet fermentum. Integer iaculis sodales tincidunt. Vivamus velit elit, aliquet ac viverra eu, dapibus in ipsum. Etiam faucibus cursus massa id faucibus. Nulla facilisi. Donec dapibus mi id sagittis ultrices. Nullam placerat hendrerit aliquet. Suspendisse eget quam faucibus, sagittis nisl in, porttitor magna. Sed convallis fringilla arcu dictum porta. Pellentesque euismod ante vitae elit elementum, ut aliquam velit euismod. Pellentesque imperdiet vel est at cursus. Morbi ultricies volutpat mollis.<br/><br/>Cras arcu dui, pretium vel ipsum non, aliquet imperdiet turpis. Sed euismod ultricies mauris id eleifend. Nam pretium, sem id tristique bibendum, neque eros cursus enim, dignissim pulvinar lectus lacus et velit. Ut at orci a ante pharetra ullamcorper. Pellentesque vel nunc lacinia, tempor massa sit amet, congue sem. Vivamus eget pretium lacus. Phasellus eu nisi consectetur, laoreet turpis a, vestibulum est. Ut interdum porta pharetra. Suspendisse potenti. Sed quis semper nibh. Donec volutpat, enim eu ornare euismod, urna quam vulputate erat, id consectetur magna libero hendrerit magna.</p>
            <hr/>
          </Col>
        </Row>
        
      </Container>
      
    </Layout>
  )
}