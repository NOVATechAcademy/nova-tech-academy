import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import emailjs from '@emailjs/browser';

const Apply: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    middleName: '',
    dateOfBirth: '',
    gender: '',
    isUSCitizen: '',
    authorizedToWork: '',
    email: '',
    phone: '',
    paymentPlan: '',
    educationLevel: '',
    codingExperience: '',
    employmentStatus: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const nextStep = () => setStep(step + 1);
  const previousStep = () => setStep(step - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Generate Excel sheet
    const worksheet = XLSX.utils.json_to_sheet([formData]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Application');
    const excelFile = XLSX.write(workbook, { bookType: 'xlsx', type: 'base64' });

    // Send Excel file via EmailJS
    emailjs
      .send(
        'novaleadingtech',
        'template_4aaj0uq',
        {
          excel_file: excelFile,
        },
        'jnkxiSDK6lXbN2X26'
      )
      .then(
        () => alert('Application submitted successfully!'),
        () => alert('Failed to submit the application.')
      );
  };

  return (
    <div className="container">
      <h1>Apply to NOVA Tech Academy</h1>

      {/* Step Indicator */}
      <div className="step-indicator">
        {[1, 2, 3].map((stepNumber) => (
          <div
            key={stepNumber}
            className={`step ${step === stepNumber ? 'active' : step > stepNumber ? 'completed' : ''}`}
          >
            {stepNumber}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div>
            <h2>About You</h2>
            <div className="form-group">
              <label>First Name</label>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Middle Name</label>
              <input type="text" name="middleName" value={formData.middleName} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Date of Birth</label>
              <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Gender</label>
              <input type="text" name="gender" value={formData.gender} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Are you a US Citizen?</label>
              <select name="isUSCitizen" value={formData.isUSCitizen} onChange={handleChange} required>
                <option value="">Select...</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            {formData.isUSCitizen === 'No' && (
              <div className="form-group">
                <label>Are you authorized to work in the US without sponsorship?</label>
                <select name="authorizedToWork" value={formData.authorizedToWork} onChange={handleChange} required>
                  <option value="">Select...</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            )}
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>
            <button type="button" onClick={nextStep}>
              Next
            </button>
          </div>
        )}
        {step === 2 && (
          <div>
            <h2>Program Options</h2>
            <div className="form-group">
              <label>How do you plan to pay?</label>
              <select name="paymentPlan" value={formData.paymentPlan} onChange={handleChange} required>
                <option value="">Select...</option>
                <option value="Full Payment Upfront">Full Payment Upfront</option>
                <option value="Payment Installments After Placement in Job">Payment Installments After Placement in Job</option>
              </select>
            </div>
            <button type="button" onClick={previousStep}>
              Previous
            </button>
            <button type="button" onClick={nextStep}>
              Next
            </button>
          </div>
        )}
        {step === 3 && (
          <div>
            <h2>Background</h2>
            <div className="form-group">
              <label>What is your highest level of education?</label>
              <select name="educationLevel" value={formData.educationLevel} onChange={handleChange} required>
                <option value="">Select...</option>
                <option value="Bachelor's">Bachelor's</option>
                <option value="High School Diploma">High School Diploma</option>
                <option value="Master's">Master's</option>
              </select>
            </div>
            <div className="form-group">
              <label>What is your level of experience in coding?</label>
              <select name="codingExperience" value={formData.codingExperience} onChange={handleChange} required>
                <option value="">Select...</option>
                <option value="No prior experience">No prior experience</option>
                <option value="Have some experience">Have some experience</option>
                <option value="Have college degree in Computer Science or related fields">
                  Have college degree in Computer Science or related fields
                </option>
              </select>
            </div>
            <div className="form-group">
              <label>What is your current employment status?</label>
              <select name="employmentStatus" value={formData.employmentStatus} onChange={handleChange} required>
                <option value="">Select...</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Not Employed">Not Employed</option>
                <option value="Student">Student</option>
              </select>
            </div>
            <button type="button" onClick={previousStep}>
              Previous
            </button>
            <button type="submit">Submit</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Apply;
