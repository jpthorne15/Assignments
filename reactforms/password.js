import React, { Component } from "react";

class Password extends Component {
    render() {
        return(
            <form>
                Forgot Password?
                <br/>
                <input type="text" name="Pwd Forgot" />
                <br/>
                <input type="submit" name="Submit"/>
            </form>
        );
    }
}