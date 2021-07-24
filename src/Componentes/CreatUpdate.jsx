import React, { Component } from 'react';
import {Button, Container, Form, Row } from 'react-bootstrap';
import LivrosService from '../Servicos/LivrosService';

class CreatUpdate extends Component {
    constructor (props){
        super(props);

        this.state={
            id_Livro: this.props.match.params.id_Livro,
            titulo: "",
            autor: "",
            genero: ""
        };
        this.changeTituloHandler = this.changeTituloHandler.bind(this);
        this.changeAutorHandler = this.changeAutorHandler.bind(this);
        this.changeGeneroHandler = this.changeGeneroHandler.bind(this);
        this.novaLivro = this.salvar.bind(this);
    }

    componentDidMount(){
        if(this.state.id_Livro == "_add"){
            return false;
        } else {
            return LivrosService.getLivroById(this.state.id_Livro).then(
                (res) => {
                    let livro = res.data;
                    this.setState({
                        titulo: livro.titulo,
                        autor: livro.autor,
                        genero: livro.genero});
                });
        }
    }

    changeTituloHandler(event){
        this.setState({titulo : event.target.value})
    }
    changeAutorHandler(event){
        this.setState({autor : event.target.value})
    }
    changeGeneroHandler(event){
        this.setState({genero : event.target.value})
    }

    cancelar(){
        this.props.history.push("/Livros");
    }

    salvar= (e) => {
        let Livro = {
            titulo : this.state.titulo,
            autor : this.state.autor,
            genero : this.state.genero
        }
        if(this.state.id_Livro == "_add"){
            Livro.id_Livro = "";
            LivrosService.criarLivro(Livro).then(
                (res)=>{
                    alert(res.data);
                }
            )
        } else {
            Livro.id_Livro = this.state.id_Livro;
            LivrosService.editarLivro(Livro).then(
               (res) =>{console.log(res.data)}
            );
        }
        this.props.history.push("/Livros")
    }


    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <h1>Cadasto de Livro</h1>
                </Row>
            <Form>
                <Form.Group controlId="formTitulo">
                    <Form.Control type="text" placeholder="Titulo" value={this.state.titulo} onChange={this.changeTituloHandler}/>
                    <Form.Text className= "text-muted">
                        Digite o titulo
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formAutor">
                    <Form.Control type="text" placeholder="Autor" value={this.state.autor} onChange={this.changeAutorHandler}/>
                    <Form.Text className= "text-muted">
                        Digite o Autor
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formGenero">
                    <Form.Control type="text" placeholder="Genero" value={this.state.genero} onChange={this.changeGeneroHandler}/>
                    <Form.Text className= "text-muted">
                        Digite o genero
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" onClick={this.cancelar.bind(this)}>Cancelar</Button>
                <a>   </a>
                <Button variant="success" onClick={this.salvar}>Cadastrar</Button>
                </Form>
            </Container>
        );
    }
}

export default CreatUpdate;