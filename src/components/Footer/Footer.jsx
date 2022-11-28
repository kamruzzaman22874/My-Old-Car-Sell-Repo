import React from 'react';

const Footer = () => {
    return (
      <section className='bg-neutral p-10'>
          <footer className="footer flex justify-between w-11/12 mx-auto  text-neutral-content">
        <div>
          <span className="footer-title">Services</span> 
          <a className="link link-hover">Tesla</a>
          <a className="link link-hover">Corolla</a>
          <a className="link link-hover">Pajeroo</a>
          <a className="link link-hover">Premio</a>
        </div> 
        <div>
          <span className="footer-title">Company</span> 
          <a className="link link-hover">Toyota</a>
          <a className="link link-hover">Marsidase</a>
          <a className="link link-hover">Land Cruiseer</a>
          <a className="link link-hover">Yamaha</a>
        </div> 
        <div>
          <span className="footer-title">Legal</span> 
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
      </section>
    );
};

export default Footer;