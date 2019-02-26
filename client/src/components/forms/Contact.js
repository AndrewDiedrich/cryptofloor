import React, { Component } from 'react';

const Contact = props => {
    return (
        <div>
            <h1>LEAVE US A MESSAGE</h1>
            <form action="http://localhost:5000/api/contact" method="post">
                <input type="text" name="name"/>
                <input type="text" name="email"/>
                <input type="text" name="message"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Contact;

