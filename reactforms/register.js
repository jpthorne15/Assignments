import React, { Component } from "react";
class Register extends Component {
    render() {return (
        <form>
        <h2>Register</h2>
        First name:
        <br />
        <input type="text" name="fname" />
        <br />
        Last name:
        <br />
        <input type="text" name="lname" />
        <br />
        Email:
        <br />
        <input type="email" name="Email" />
        <br />
        Phone:
        <br />
        <input type="tel" name="pnumber" />
        <br />
        Age:
        <br />
        <input type="number" name="age" min="12" max="105" required />
        <br />
        Password:
        <br />
        <input type="password" name="Pwd" />
        <br />
        Confirm Password:
        <br />
        <input type="password" name="Pwd" />
        <br />
      </form>
    )
    }
}