import React from 'react';
import { useState, useEffect, useRef } from 'react';
import './ContactForm.css';
import emailjs from '@emailjs/browser';



function ContactForm() {

    const form = useRef();
    const [messageSent, setMessageSent] = useState(false);

    const sendEmail = (e) => {
    e.preventDefault();

    // if (!validateForm()) return;
    // setIsSubmitting(true);

    emailjs.sendForm(
      'service_ygkfx7s',
      'template_d66swgn',
      form.current,
      'zFLZH29bRNDazrYni'
      ).then((result) => {
        setMessageSent(true);  
        console.log(result.text);
        console.log("message sent");
      }, (error) => {
          console.log(error.text);
          console.log("message in error");
      });

    // Simulate form submission
    // setTimeout(() => {
    //     setIsSubmitting(false);
    //     setMessageSent(true);
    //     setFormData({
    //         name: '',
    //         email: '',
    //         company: '',
    //         projectType: '',
    //         message: ''
    //     });
        
    //     // Hide success message after 8 seconds
    //     setTimeout(() => {
    //         setMessageSent(false);
    //     }, 8000);
    // }, 2000);
  };

    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     company: '',
    //     projectType: '',
    //     message: ''
    // });

    // const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);


    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData(prev => ({ ...prev, [name]: value }));
        
    //     // Clear error when user starts typing
    //     if (errors[name]) {
    //         setErrors(prev => ({ ...prev, [name]: '' }));
    //     }
    // };

    // const validateForm = () => {
    //     const newErrors = {};
        
    //     if (!formData.name.trim()) {
    //         newErrors.name = 'Name is required';
    //     }
        
    //     if (!formData.email.trim()) {
    //         newErrors.email = 'Email is required';
    //     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    //         newErrors.email = 'Please enter a valid email address';
    //     }
        
    //     if (!formData.message.trim()) {
    //         newErrors.message = 'Project details are required';
    //     }
        
    //     setErrors(newErrors);
    //     return Object.keys(newErrors).length === 0;
    // };

    // const handleSubmit = async (e) => {
        
    //     if (!validateForm()) return;
        
    //     setIsSubmitting(true);

    //     // Simulate form submission
    //     setTimeout(() => {
    //         setIsSubmitting(false);
    //         setMessageSent(true);
    //         setFormData({
    //             name: '',
    //             email: '',
    //             company: '',
    //             projectType: '',
    //             message: ''
    //         });
            
    //         // Hide success message after 8 seconds
    //         setTimeout(() => {
    //             setMessageSent(false);
    //         }, 8000);
    //     }, 2000);
    // };
  
  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-6">
        <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
            <input 
                type="text" 
                id="name" 
                name="user_name" 
                // value={formData.name}
                // onChange={handleInputChange}
                required
                // className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors ${
                //     errors.name ? 'border-red-500' : 'border-gray-300'
                // }`}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors`}
            />
            {/* {errors.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>} */}
        </div>
        
        <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
            <input 
                type="email" 
                id="email" 
                name="user_email" 
                // value={formData.email}
                // onChange={handleInputChange}
                required
                // className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors ${
                //     errors.email ? 'border-red-500' : 'border-gray-300'
                // }`}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors`}

            />
            {/* {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>} */}
        </div>
        
        {/* <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company</label>
            <input 
                type="text" 
                id="company" 
                name="company" 
                // value={formData.company}
                // onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
            />
        </div> */}
        
        {/* <div>
            <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
            <select 
                id="projectType" 
                name="projectType" 
                value={formData.projectType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
            >
                <option value="">Select project type</option>
                <option value="digital-transformation">Digital Transformation</option>
                <option value="system-implementation">System Implementation</option>
                <option value="process-improvement">Process Improvement</option>
                <option value="change-management">Change Management</option>
                <option value="other">Other</option>
            </select>
        </div> */}
        
        <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
            <textarea 
                type="text"
                id="message" 
                name="message" 
                rows="5" 
                // value={formData.message}
                // onChange={handleInputChange}
                required
                placeholder="Tell us about your project, goals, budget, and any specific requirements..."
                // className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors resize-none 
                //     ${errors.message ? 'border-red-500' : 'border-gray-300'}`
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors resize-none`
            }
            />
            {/* {errors.message && <div className="text-red-500 text-sm mt-1">{errors.message}</div>} */}
        </div>
        
        <button 
            type="submit" 
            value="Send"
            id="send"
            // disabled={isSubmitting}
            className="w-full bg-green-700 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-800 transition-colors flex items-center justify-center disabled:opacity-50"
        >
            {isSubmitting ? (
                <>
                    <span>Sending...</span>
                    <svg className="animate-spin ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                </>
            ) : (
                'Send Message'
            )}
            {/* Send Message */}
        </button>
        
        {messageSent && (
            <div className="bg-emerald-100 border border-emerald-400 text-emerald-700 px-4 py-3 rounded-lg">
                Thank you for reaching out, talk soon!
            </div>
        )}
    </form>
  );
}

export default ContactForm;