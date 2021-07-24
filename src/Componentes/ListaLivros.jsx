import React, { Component } from 'react';
import { Container, Button, Row, Table, Col } from 'react-bootstrap';
import LivrosService from '../Servicos/LivrosService';

class ListaLivros extends Component {

    constructor (props){
        super(props);
        this.state = {
            livros : []
        }

        this.voltar = this.voltar.bind(this);
        this.excluir = this.excluir.bind(this);
        this.editar = this.editar.bind(this);
        this.novoLivro = this.novoLivro.bind(this);
    }

    componentDidMount(){
        this.getLivros();
    }

    getLivros(){
        LivrosService.getLivro().then(
            (resposta)=>
            this.setState({livros:resposta.data})
        );

    }

    voltar(){
        this.props.history.push("/");
    }

    excluir(id_Livro){
        LivrosService.deleteLivro(id_Livro).then(
            res => {alert(res.data);
            this.getLivros();}
        );
    }

    editar(id_Livro){
        this.props.history.push("/Livros/"+id_Livro)
    }

    novoLivro(){
        this.props.history.push("/Livros/_add");
    }

    render() {
        return (
            <Container>
                <Row>
                    <h1>Livros</h1>
                </Row>
                <Row>
                    <Button variant="link" onClick={this.voltar}>Voltar</Button>
                </Row>
                <Row>
                    <Table striped bordered hover sizer= "sm">
                        <thead>
                            <tr>
                                <th>
                                    Id
                                </th>
                                <th>
                                    Titulo
                                </th>
                                <th>
                                    Autor
                                </th>
                                <th>
                                    Genero
                                </th>
                                <th>
                                    Ações
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.livros.map(
                                    livro =>
                                    <tr key= {livro.id_Livro}>
                                        <td>
                                            {livro.id_Livro}
                                        </td>
                                        <td>
                                            {livro.titulo}
                                        </td>
                                        <td>
                                            {livro.autor}
                                        </td>
                                        <td>
                                            {livro.genero}
                                        </td>
                                        <td>
                                            <Button variant="warning" onClick={()=>this.editar(livro.id_Livro)}>Editar</Button>
                                            <Button variant="danger" onClick={()=>this.excluir(livro.id_Livro)}>Excluir</Button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </Table>
                </Row>
                <Row >
                    <Col>
                        <Button calssName="float-left" variant="link" onClick= {this.voltar} >Voltar</Button>
                    </Col>
                    <Col>
                        <Button className="float-right" variant="secondary" onClick = {this.novoLivro}>Novo Livro</Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ListaLivros;