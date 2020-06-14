import React, { Component } from "react"
import Toast from '../toast/toast'
import CheckIcon from '../svgIcons/checkIcon'
import ErrorIcon from '../svgIcons/errorIcon'
import contactStyles from './contact.module.css'


export default class Contact extends Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        toastList: [],
    }

    handleInputChange = event => {
        const target = event.target
        const value = target.value
        const name = target.name

        this.setState({
          [name]: value,
        })
    }

    handleSubmit = event => {
        const id = Math.floor((Math.random() * 100) + 1)
        event.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                { 
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    email: this.state.email,
                    message: this.state.message,
                }
            )
        }
        fetch('https://getform.io/f/356d79e0-de69-48fa-9c60-ff0c95294681', requestOptions)
            .then(response => response)
            .then(this.setState(
                {
                    firstName: "",
                    lastName: "",
                    email: "",
                    message: "",
                    toastList: [{
                        id: id,
                        title: 'success',
                        description: 'Your message has been sent',
                        backgroundColor: '#deffdd',
                        border: '2px solid #85db85',
                        icon: CheckIcon
                    }]
                }
            ))
            .catch(error => {
                this.setState({
                    firstName: "",
                    lastName: "",
                    email: "",
                    message: "",
                    toastList: [{
                        id: id,
                        title: 'error',
                        description: 'There was an error sending your message. Please try again later.',
                        backgroundColor: '#ffd3d3',
                        border: '2px solid #ff5151',
                        icon: ErrorIcon
                    }]
                })
            })
    }

    render() {
        return (
            <div id="contact" className="section">
                <div className={contactStyles.contactSectionHeader}>
                    <h2>Want to collaborate? Get in touch!</h2>
                    <p>You can contact me at info@angelamaugey.com, or fill out the form</p>
                </div>
                <form id="ajaxForm" onSubmit={this.handleSubmit} action="https://getform.io/f/356d79e0-de69-48fa-9c60-ff0c95294681" method="POST">
                    <div className={contactStyles.formGroup}>
                        <div className={contactStyles.nameInputRow}>
                            <label>
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="First name"
                                    value={this.state.firstName}
                                    onChange={this.handleInputChange}
                                    className={contactStyles.contactFormInput}
                                />
                            </label>
                            <label>
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last name"
                                    value={this.state.lastName}
                                    onChange={this.handleInputChange}
                                    className={contactStyles.contactFormInput}
                                />
                            </label>
                        </div>
                    </div>
                    <div className={contactStyles.formGroup}>
                        <div className={contactStyles.emailInputRow}>
                            <label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={this.state.email}
                                    onChange={this.handleInputChange}
                                    className={contactStyles.contactFormInput}
                                />
                            </label>
                        </div>
                    </div>
                    <div className={contactStyles.formGroup}>
                        <label className={contactStyles.messageInputLabel}>
                            Message
                            <textarea
                                name="message"
                                value={this.state.message}
                                onChange={this.handleInputChange}
                                className={contactStyles.formMessageTextArea}
                            />
                        </label>
                    </div>
                    <Toast toastList={this.state.toastList} />
                    <div className={contactStyles.formFooter}>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
            
        )
    }
}
