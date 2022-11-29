import Header from '../../components/Header'
import LogImg from '../../images/log-in.jpg'
import React, { Component } from "react";


export default class LogIn extends Component  {
    constructor(props) {
        super(props);
        this.state = {
          email: "",
          password: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleSubmit(e) {
        e.preventDefault();
        const { email, password } = this.state;
        console.log(email, password);
        fetch("https://api-deploy-production.up.railway.app/login-user", {
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data, "userRegister");
            if (data.status === "ok") {
              alert("Sesión Iniciada Con Éxito");
              window.localStorage.setItem("token", data.data);
              window.location.href = "./userDetails";
            }
          });
      }
    render() {
        return (
            <>
                <Header title="Regresa donde lo dejaste" image={LogImg}>
                    ¡Gracias por utitlizar nuestros servicios!
        
                </Header>
                <div className='__container'>
                <form onSubmit={this.handleSubmit}>
                    <h3>Iniciar sesión</h3>
        
                    <div className="mb-3">
                    <label>Correo </label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Correo Electrónico"
                        onChange={(e) => this.setState({email: e.target.value})}
                    />
                    </div>
        
                    <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Contraseña"
                        onChange={(e) => this.setState({password: e.target.value})}
                    />
                    </div>
        
                    <div className="mb-3">
                    <div className="custom-control custom-checkbox">
                        <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                        />
                        <label className="custom-control-label" htmlFor="customCheck1">
                        Recordarme
                        </label>
                    </div>
                    </div>
        
                    <div className="d-grid">
                    <button type="submit" className="btn lg">
                        Iniciar sesión
                    </button>
                    </div>
                </form>
            </div>
            </>
        
        
          )

    }
  
}

