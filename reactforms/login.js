import React, {Component} from 'react'

class Login extends Component {
    render(){
        return (<form>
            <h2>LOGIN</h2>
            Username:
            <br/>
            <input type="text" name="username"/>
            <br/>
            Password:
            <br/>
            <input type="password" name="Pwd"/>
            <br/>
        </form>)
    }
}

export default Login