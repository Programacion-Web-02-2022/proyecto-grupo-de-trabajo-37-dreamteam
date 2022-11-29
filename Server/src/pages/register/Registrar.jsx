import React, {Component} from 'react'
import './registrarLog.css'
import Header from '../../components/Header'
import RegImg from '../../images/register.jpg'
import {Link} from 'react-router-dom'

export default class Registrar extends Component {

    constructor(props){
        super(props);
        this.state = {
            fname: "",
            lname: "",
            email: "",
            password: ""

        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        const{fname, lname, email, password} = this.state;
        console.log(fname, lname, email, password);
        fetch("https://api-deploy-production.up.railway.app/register", {
            method: "POST",
            crossDomain: true,
            headers:{
                "Content-Type": "application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body:JSON.stringify({
                fname,
                lname,
                email,
                password
            })
        })
            .then((res)=>res.json())
            .then((data)=> {
                console.log(data, "userRegister");
                if (data.status === "ok") {
                    alert("Usuario creado con éxito, dirigete a iniciar sesión");
                    window.localStorage.setItem("token", data.data);
                    window.location.href = "/log-in";
                  }
            });

    }
    render(){
        return (
            <>
                <Header title="A un paso de nuevas oportunidades" image={RegImg}>
                    Registrate en nuestra página para recibir todos nuestros servicios. ¡Es fácil!
        
                </Header>
                <div className='__container'>
                    <form onSubmit={this.handleSubmit}>
                        <h3>Crear un nuevo usuario</h3>
        
                        <div className="mb-3">
                        <label>Nombre</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Ej. Miguel Alfonso"
                            onChange={(e)=>this.setState({fname:e.target.value})}
                        />
                        </div>
        
                        <div className="mb-3">
                        <label>Apellido</label>
                        <input type="text" className="form-control" placeholder="Ej.Quinteros Rocio"
                        onChange={(e)=>this.setState({lname:e.target.value})} />
                        </div>
        
                        <div className="mb-3">
                        <label>Correo Electrónico</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Ej.x@uca.edu.sv"
                            onChange={(e)=>this.setState({email:e.target.value})}
                        />
                        </div>
        
                        <div className="mb-3">
                        <label>Contraseña</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Contraseña"
                            onChange={(e)=>this.setState({password:e.target.value})}
                        />
                        </div>
        
                        <div className="d-grid">
                        <button type="submit" className="btn lg">
                            Registrarse
                        </button>
                        <p className="forgot-password text-right">
                        ¿Ya tienes una cuenta? <Link to="/log-in" className='log-in-link'>Iniciar sesión</Link>
                        </p>
                        </div>
                    </form>      
                </div>
            </>
    
      )
  } 
  
}

