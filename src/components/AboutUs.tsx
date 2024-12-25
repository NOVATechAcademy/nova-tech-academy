import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutUs: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="about-us-container">
      <h1 className="about-us-title">About NOVA Tech Academy</h1>
      <p className="about-us-intro">
        Welcome to <strong>NOVA Tech Academy</strong>, your gateway to a brighter future in the tech industry. At NOVA Tech Academy, we specialize in providing immersive, practical, and industry-focused training to individuals aspiring to launch their careers in technology. Our primary mission is to bridge the gap between potential and success by equipping our students with the technical expertise, problem-solving skills, and hands-on experience needed to thrive in the ever-evolving tech world.
      </p>

      <section className="about-us-section">
        <h2>Why Choose NOVA Tech Academy?</h2>
        <ul>
          <li>
            <strong>Comprehensive Curriculum:</strong>  
            We offer an intensive <strong>12-week Full-Stack Java Developer Bootcamp</strong>, tailored for aspiring software engineers and full-stack developers.  
            - Core concepts of front-end development, back-end programming, and database management.  
            - Hands-on experience with industry-standard tools and frameworks like Java, Spring Boot, React, and more.  
            - Collaborative projects that simulate real-world software development practices.
          </li>
          <li>
            <strong>Expert Instructors:</strong>  
            Our instructors are seasoned industry professionals with years of experience in software engineering and development. They bring their real-world expertise into the classroom, ensuring students learn from the best.
          </li>
          <li>
            <strong>Career Assistance:</strong>  
            At NOVA Tech Academy, our commitment to your success extends beyond the classroom. We provide:  
            - Personalized resume-building workshops.  
            - Mock interviews with industry professionals.  
            - Networking opportunities with hiring partners.
          </li>
          <li>
            <strong>Job Placement Support:</strong>  
            We are dedicated to helping our students secure rewarding roles as software engineers and full-stack developers. Our extensive network of industry contacts ensures that you are introduced to the best opportunities in the tech sector.
          </li>
        </ul>
      </section>

      <section className="about-us-section">
        <h2>What We Stand For</h2>
        <p>
          We believe in the power of education to transform lives. Our goal is to empower individuals with the knowledge and skills they need to achieve their dreams and contribute meaningfully to the tech industry. Whether you’re starting from scratch or looking to upskill, NOVA Tech Academy is here to guide you every step of the way.
        </p>
      </section>

      <section className="about-us-contact">
        <h2>Get In Touch</h2>
        <p>Have questions or need more information? Reach out to us:</p>
        <p><strong>Email:</strong> <a href="mailto:info@novaleadingtech.com">info@novaleadingtech.com</a></p>
        <p><strong>Phone:</strong> <a href="tel:+15715964143">571-596-4143</a></p>
        <button className="btn contact-us-button" onClick={() => navigate('/contact-us')}>
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default AboutUs;
