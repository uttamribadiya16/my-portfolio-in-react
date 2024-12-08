import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import emailjs from 'emailjs-com'; // Import EmailJS library

export function Contact() {
  const { currentTheme } = useTheme();
  const [focusedElement, setFocusedElement] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false); // For showing loading state
  const [formStatus, setFormStatus] = useState(null); // To display success/error message
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Basic form validation
  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
    if (!formData.message) errors.message = 'Message is required';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission using EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return; // Don't submit if form is invalid

    setIsSubmitting(true);
    setFormStatus(null); // Reset the status

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message
    };

    // Send email using EmailJS
    emailjs
      .send(
        'service_votr04f', // Replace with your EmailJS service ID
        'template_x9rol9q', // Replace with your EmailJS template ID
        templateParams,
        'xrueenzoK6POysKEJ' // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          setFormStatus('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' }); // Clear form after submission
        },
        (error) => {
          console.error('Error sending message:', error);
          setFormStatus('Failed to send message. Please try again later.');
        }
      )
      .finally(() => {
        setIsSubmitting(false); // Set submitting to false after the process is complete
      });
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto py-8 px-4"
    >
      <h1 className="text-4xl font-bold text-white mb-8">Contact Me</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold text-white mb-4">Get in Touch</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-4 text-gray-300 text-sm sm:text-base">
              <Mail
                className="w-6 h-6 flex-shrink-0"
                style={{ color: currentTheme.colors.accent }}
              />
              <span className="truncate" title='uttamribadiya163098@gmail.com'>uttamribadiya163098@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4 text-gray-300">
              <Phone className="w-6 h-6" style={{ color: currentTheme.colors.accent }} />
              <span title='+91 74056 30123'>+91 74056 30123</span>
            </div>
            <div className="flex items-center space-x-4 text-gray-300">
              <MapPin className="w-6 h-6" style={{ color: currentTheme.colors.accent }} />
              <span title='Satellite, Ahmedabad, India'>Satellite, Ahmedabad, India</span>
            </div>
          </div>
        </motion.div>

        <motion.form 
          onSubmit={handleSubmit} // Form submission handler
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          <div>
            <label 
              htmlFor="name" 
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#2d2d2d] rounded-lg border text-white focus:outline-none"
              onFocus={() => setFocusedElement('name')}
              onBlur={() => setFocusedElement(null)}
              style={{
                borderColor: focusedElement === 'name' ? currentTheme.colors.accent : '#4b5563',
              }}
            />
            {formErrors.name && <p className="text-red-500 text-xs">{formErrors.name}</p>}
          </div>
          <div>
            <label 
              htmlFor="email" 
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#2d2d2d] rounded-lg border text-white focus:outline-none"
              onFocus={() => setFocusedElement('email')}
              onBlur={() => setFocusedElement(null)}
              style={{
                borderColor: focusedElement === 'email' ? currentTheme.colors.accent : '#4b5563',
              }}
            />
            {formErrors.email && <p className="text-red-500 text-xs">{formErrors.email}</p>}
          </div>
          <div>
            <label 
              htmlFor="message" 
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 bg-[#2d2d2d] rounded-lg border text-white focus:outline-none"
              onFocus={() => setFocusedElement('message')}
              onBlur={() => setFocusedElement(null)}
              style={{
                borderColor: focusedElement === 'message' ? currentTheme.colors.accent : '#4b5563',
              }}
            />
            {formErrors.message && <p className="text-red-500 text-xs">{formErrors.message}</p>}
          </div>
          <button
            type="submit"
            className={`w-full px-6 py-3 text-white rounded-lg font-medium transition-colors ${isSubmitting ? 'bg-gray-500' : ''}`}
            style={{
              backgroundColor: currentTheme.colors.accent,
            }}
            disabled={isSubmitting} // Disable button while submitting
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          
          {formStatus && (
            <div className={`mt-4 text-center ${formStatus.includes('success') ? 'text-green-500' : 'text-red-500'}`}>
              {formStatus}
            </div>
          )}
        </motion.form>
      </div>
    </motion.div>
  );
}