import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

import api from './Api'
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,CardColumns,
  CardSubtitle, CardBody, Container, Row, Col  } from 'reactstrap';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,
  NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu,
  DropdownItem } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)

    this.state = {
      dados: [{
        id: '',
        name: '',
        status: '',
        species: '',
        image: '',
        episode: [],
        }],
      infos: [{
        count: '',
        page: '',
        next: '',
        prev: '',
      }],
      isCarregando: false,
      activeIndex: props.initialIndex,
      isOpen:false,
    }
  }
  toggle(){
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  componentDidMount() {
    this.setState({ isCarregando: true})
    api.loadCharacters()
      .then(res=> {
        this.setState({
          dados: res.data.results.map((personagem)=>({
            id: personagem.id.toString(),
            name: personagem.name.toString() ,
            status: personagem.status.toString(),
            species: personagem.species.toString(),
            image: personagem.image.toString(),
            episode: personagem.episode.toString(),
          })), 
          isCarregando: false,
          })
        })                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
  }
  /*
  showEpisodes () {
   api.loadEpisode()
    .then(res => this.loadEpisode()) 
  }*/
  
  renderPersonagem(dados) {
    return ( 
      <Container>
        <Row>
          <Col xs="10" sm="10">
            <CardDeck>
              <Card body>
                <CardImg  src={dados.image} />
                <CardBody>
                  <CardTitle>Name: {dados.name}</CardTitle>
                  <CardText>ID: {dados.id}</CardText>
                  <CardText>Status: {dados.status}</CardText>
                  <CardText>Species: {dados.species}</CardText>
                 <Button>Episodes</Button>  
                </CardBody>
              </Card>
          </CardDeck>
        </Col>
      </Row>
    </Container>
    )
  }

  onSelectButton(index) {
    this.setState({
      activeIndex: index,
    });
  }

  render() {
    return (
      <div className="App">
        <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Thyago Andrade de Oliveira</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://github.com/ThyagOliveira/rick-and-morty">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      <div>
        
        </div>

        <CardColumns>
          { 
            this.state.isCarregando &&
            <span> Aguarde, carregando... </span>
          }
          { !this.state.isCarregando &&   
            <div> 
              {this.state.dados.map(this.renderPersonagem)}
               
            </div>
          }
        </CardColumns>
      </div>
      
    );

  }
}

export default App;
