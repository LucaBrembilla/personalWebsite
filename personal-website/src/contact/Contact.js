// src/pages/Contact.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'; // Make sure to create this CSS file for styling

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Sending...');

        emailjs.send('service_08l3qxm', 'template_0wbqlcs', formData, '0FuscJw-8fYdpSFY1')
            .then((result) => {
                setStatus('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            }, (error) => {
                setStatus(`Error: ${error.text}`);
            });
    };

    return (
        <div className="contact-container">
            <header className="contact-header">
                <h1>Contact Me</h1>
                <p>You can reach me through the form below or via the contact details provided.</p>
            </header>

            <section className="contact-info">
                <h2>Contact Information</h2>
                <p><strong>Email:</strong> <a href="mailto:lucabremby00@gmail.com">lucabremby00@gmail.com</a></p>
                <p><strong>GitHub:</strong> <a href="https://github.com/LucaBrembilla" target="_blank" rel="noopener noreferrer">LucaBrembilla</a></p>
            </section>

            <section className="contact-form">
                <h2>Send a Message</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        required
                    ></textarea>

                    <button type="submit">Send Message</button>
                </form>
                {status && <p className="status-message">{status}</p>}
            </section>
        </div>
    );
};

export default Contact;