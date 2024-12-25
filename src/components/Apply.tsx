import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
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
  const [errors, setErrors] = useState<any>({});
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const validateFields = () => {
    const newErrors: any = {};

    if (step === 1) {
      if (!formData.firstName || formData.firstName.length > 50) {
        newErrors.firstName = 'Please enter a valid first name (max 50 characters).';
      }
      if (!formData.lastName || formData.lastName.length > 50) {
        newErrors.lastName = 'Please enter a valid last name (max 50 characters).';
      }
      if (formData.middleName && formData.middleName.length > 50) {
        newErrors.middleName = 'Middle name cannot exceed 50 characters.';
      }
      if (!formData.dateOfBirth) {
        newErrors.dateOfBirth = 'Please enter your date of birth in mm/dd/yyyy format.';
      }
      if (!formData.gender || formData.gender.length > 50) {
        newErrors.gender = 'Please enter your gender or write NA if you wish not to disclose (max 50 characters).';
      }
      if (!formData.isUSCitizen) {
        newErrors.isUSCitizen = 'Please select if you are a US citizen.';
      }
      if (formData.isUSCitizen === 'No' && !formData.authorizedToWork) {
        newErrors.authorizedToWork = 'Please specify if you are authorized to work without sponsorship.';
      }
    }

    if (step === 2) {
      if (!formData.paymentPlan) {
        newErrors.paymentPlan = 'Please select a payment plan.';
      }
    }

    if (step === 3) {
      if (!formData.educationLevel) {
        newErrors.educationLevel = 'Please select your highest level of education.';
      }
      if (!formData.codingExperience) {
        newErrors.codingExperience = 'Please select your level of experience in coding.';
      }
      if (!formData.employmentStatus) {
        newErrors.employmentStatus = 'Please select your employment status.';
      }
      if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address.';
      }
      if (!formData.phone || !/^\d{10}$/.test(formData.phone)) {
        newErrors.phone = 'Please enter a valid 10-digit phone number.';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateFields()) {
      setStep(step + 1);
    }
  };

  const previousStep = () => setStep(step - 1);

  const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text('NOVA Tech Academy Application', 20, 20);

    doc.setFontSize(12);
    Object.keys(formData).forEach((key, index) => {
      const value = formData[key as keyof typeof formData];
      doc.text(`${key}: ${value || 'N/A'}`, 20, 40 + index * 10);
    });

    return doc;
  };

  const generateExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet([formData]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Application');
    const excelFile = XLSX.write(workbook, { bookType: 'xlsx', type: 'base64' });

    return excelFile;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateFields()) return;

    try {
      // Generate PDF and Excel
      const pdf = generatePDF();
      const pdfBase64 = pdf.output('datauristring').split(',')[1];
      const excelBase64 = generateExcel();

      // Admin Email
      await emailjs.send(
        'novaleadingtech', // Replace with your service ID
        'template_lr0v7id', // Replace with your admin email template ID
        {
          pdf_file: `data:application/pdf;base64,${pdfBase64}`,
          excel_file: `data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,${excelBase64}`,
          file_name_pdf: 'application.pdf',
          file_name_excel: 'application.xlsx',
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
        },
        'jnkxiSDK6lXbN2X26' // Replace with your public key
      );

      // User Auto-Reply Email
      await emailjs.send(
        'novaleadingtech', // Replace with your service ID
        'template_zimvlsr', // Replace with your auto-reply email template ID
        {
          firstName: formData.firstName,
          email: formData.email,
        },
        'jnkxiSDK6lXbN2X26' // Replace with your public key
      );

      navigate('/success');
    } catch (error) {
      console.error('Failed to send emails:', error);
      navigate('/error');
    }
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Apply to NOVA Tech Academy</h1>

      <form onSubmit={handleSubmit} className="form">
        {step === 1 && (
          <div>
            <h2 className="form-subtitle">About You</h2>
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="form-input"
              />
              {errors.firstName && <p className="form-error">{errors.firstName}</p>}
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="form-input"
              />
              {errors.lastName && <p className="form-error">{errors.lastName}</p>}
            </div>
            <div className="form-group">
              <label>Middle Name</label>
              <input
                type="text"
                name="middleName"
                value={formData.middleName}
                onChange={handleChange}
                className="form-input"
              />
              {errors.middleName && <p className="form-error">{errors.middleName}</p>}
            </div>
            <div className="form-group">
              <label>Date of Birth</label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="form-input"
              />
              {errors.dateOfBirth && <p className="form-error">{errors.dateOfBirth}</p>}
            </div>
            <div className="form-group">
              <label>Gender</label>
              <input
                type="text"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="form-input"
              />
              {errors.gender && <p className="form-error">{errors.gender}</p>}
            </div>
            <div className="form-group">
              <label>Are you a US Citizen?</label>
              <select
                name="isUSCitizen"
                value={formData.isUSCitizen}
                onChange={handleChange}
                className="form-input"
              >
                <option value="">Select...</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              {errors.isUSCitizen && <p className="form-error">{errors.isUSCitizen}</p>}
            </div>
            {formData.isUSCitizen === 'No' && (
              <div className="form-group">
                <label>Are you authorized to work in the US without sponsorship?</label>
                <select
                  name="authorizedToWork"
                  value={formData.authorizedToWork}
                  onChange={handleChange}
                  className="form-input"
                >
                  <option value="">Select...</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                {errors.authorizedToWork && <p className="form-error">{errors.authorizedToWork}</p>}
              </div>
            )}
            <div className="form-buttons">
              <button type="button" onClick={nextStep} className="btn">
                Next
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="form-subtitle">Program Options</h2>
            <div className="form-group">
              <label>Payment Plan</label>
              <select
                name="paymentPlan"
                value={formData.paymentPlan}
                onChange={handleChange}
                className="form-input"
              >
                <option value="">Select...</option>
                <option value="Full Payment Upfront">Full Payment Upfront</option>
                <option value="Payment Installments After Placement in Job">
                  Payment Installments After Placement in Job
                </option>
              </select>
              {errors.paymentPlan && <p className="form-error">{errors.paymentPlan}</p>}
            </div>
            <div className="form-buttons">
              <button type="button" onClick={previousStep} className="btn">
                Previous
              </button>
              <button type="button" onClick={nextStep} className="btn">
                Next
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="form-subtitle">Background</h2>
            <div className="form-group">
              <label>What is your highest level of education?</label>
              <select
                name="educationLevel"
                value={formData.educationLevel}
                onChange={handleChange}
                className="form-input"
              >
                <option value="">Select...</option>
                <option value="Bachelor's">Bachelor's</option>
                <option value="High School Diploma">High School Diploma</option>
                <option value="Master's">Master's</option>
              </select>
              {errors.educationLevel && <p className="form-error">{errors.educationLevel}</p>}
            </div>
            <div className="form-group">
              <label>What is your level of experience in coding?</label>
              <select
                name="codingExperience"
                value={formData.codingExperience}
                onChange={handleChange}
                className="form-input"
              >
                <option value="">Select...</option>
                <option value="No prior experience">No prior experience</option>
                <option value="Have some experience">Have some experience</option>
                <option value="Have college degree in Computer Science or related fields">
                  Have college degree in Computer Science or related fields
                </option>
              </select>
              {errors.codingExperience && <p className="form-error">{errors.codingExperience}</p>}
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
              />
              {errors.email && <p className="form-error">{errors.email}</p>}
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-input"
              />
              {errors.phone && <p className="form-error">{errors.phone}</p>}
            </div>
            <div className="form-group">
              <label>What is your current employment status?</label>
              <select
                name="employmentStatus"
                value={formData.employmentStatus}
                onChange={handleChange}
                className="form-input"
              >
                <option value="">Select...</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Not Employed">Not Employed</option>
                <option value="Student">Student</option>
              </select>
              {errors.employmentStatus && <p className="form-error">{errors.employmentStatus}</p>}
            </div>
            <div className="form-buttons">
              <button type="button" onClick={previousStep} className="btn">
                Previous
              </button>
              <button type="submit" className="btn">
                Submit
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default Apply;
