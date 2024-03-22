'use client';
import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import * as yup from 'yup';
import {toast } from 'react-toastify';
import Link from 'next/link';
import GoogleMap from '@/components/GoogleMap';
const SweetAlert = dynamic(() => import('react-sweetalert2'), {
  ssr: false
})


export default function Contact() {

const headers = [
  { label: "Full Name", key: "name" },
  { label: "Email", key: "email" },
  { label: "Subject", key: "subject" },
  { label: "Message", key: "message" }
];

 const setFocus = (e)=>{
   e.target.parentElement.classList.add('form-group-focus');
 }

const removeFocus = (e)=>{
  if(e.target.value==''){
    e.target.parentElement.classList.remove('form-group-focus');
  }
}

  const [swalProps, setSwalProps] = useState({});

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });


  const formSchema = yup.object().shape({
    name: yup.string().required('Please enter your full name.'),
    email: yup.string().email('Please enter valid email address.').required('Please enter valid email address.'),
    subject: yup.string().required('Please enter appropriate subject'),
    message: yup.string().required("Please, leave me a message."),
    fullName: yup.string().test(fullName=>!fullName||fullName.length==0),
  })

    // Function which will validate the input data whenever submit button is clicked.

    async function handleSubmit() {
      formSchema
      .validate(formData, { abortEarly: false })
      .then(async (data) => {

      delete data['fullName'];

      await fetch("/api/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.values(data)),
      })
        .then((res) => res.json())
        .then((data) => setSwalProps({
          title: 'Thank you!',
          html: 'Your message successfully submitted.<br/> I will get back to you soon!',
          icon: "success",
          confirmButtonText:'Alright!',
          buttonsStyling:false,
          background: '#000',
          color:'#fff',
          show:true
        }));

    }).catch((err) => {
      err.errors.map((e,id)=>{
        toast.error(e, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          toastId: id,
          delay: id*500
          });
      });
});
}

  return (
    <PerfectScrollbar component="section" className='animated-section'>
      {/* <!-- Contact Subpage --> */}
      <div className="section-content">
        <div className="page-title">
          <h2>Contact</h2>
        </div>

        <div className="row">
          {/* <!-- Contact Info --> */}
          <div className="col-xs-12 col-sm-4">
            <div className="lm-info-block gray-default">
              <i className="lnr lnr-map-marker"></i>
              <h4>Madhya Pradesh, India</h4>
              <span className="lm-info-block-value"></span>
              <span className="lm-info-block-text"></span>
            </div>

            <div className="lm-info-block gray-default">
              <i className="lnr lnr-envelope"></i>
              <h4><Link style={{color:'#eee',lineBreak:'anywhere'}} href="mailto:deepak2.1dev@gmail.com">Deepak2.1Dev@gmail.com</Link></h4>
              <span className="lm-info-block-value"></span>
              <span className="lm-info-block-text"></span>
            </div>

            <div className="lm-info-block gray-default">
            <i className="fab fa-discord"></i>
              <h4>@mrdeepak01</h4>
              <span className="lm-info-block-value"></span>
              <span className="lm-info-block-text"></span>
            </div>


          </div>
          {/* <!-- End of Contact Info --> */}

          {/* <!-- Contact Form --> */}
          <div className="col-xs-12 col-sm-8">
            <GoogleMap src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7606398.718030274!2d74.74669580341225!3d21.426812847496244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39667381d35aea05%3A0xe0106b0d4e701c1e!2sMadhya%20Pradesh!5e0!3m2!1sen!2sin!4v1711050427398!5m2!1sen!2sin"/>
            <div className="block-title">
              <h3>How Can I <span>Help You?</span></h3>
            </div>
           
            <form id="contact_form" className="contact-form" onSubmit={(e)=>e.preventDefault()}>

              <div className="messages"></div>

              <div className="controls two-columns">
                <div className="fields clearfix">
                  <div className="left-column">
                    <div className="form-group form-group-with-icon">
                      
                      <input id="form_name" type="text" name="name" className="form-control" placeholder="" required="required" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} onFocus={(e)=>setFocus(e)} onBlur={(e)=>removeFocus(e)}/>
                      <label>Full Name</label>
                      <div className="form-control-border"></div>
                      <div className="help-block with-errors"></div>
                    </div>

                      <input type="hidden" name="full_name" placeholder="Full Name" value={formData.full_name} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}/>

                    <div className="form-group form-group-with-icon">
                      <input id="form_email" type="email" name="email" className="form-control" placeholder="" required="required" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} onFocus={(e)=>setFocus(e)} onBlur={(e)=>removeFocus(e)}/>
                      <label>Email Address</label>
                      <div className="form-control-border"></div>
                      
                      <div className="help-block with-errors"></div>
                    </div>

                    <div className="form-group form-group-with-icon">
                      <input id="form_subject" type="text" name="subject" className="form-control" placeholder="" required="required" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} onFocus={(e)=>setFocus(e)} onBlur={(e)=>removeFocus(e)}/>
                      <label>Subject</label>
                      <div className="form-control-border"></div>
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                  <div className="right-column">
                    <div className="form-group form-group-with-icon">
                      <textarea id="form_message" name="message" className="form-control" placeholder="" rows="7" required="required" onChange={(e) => setFormData({ ...formData, message: e.target.value })} onFocus={(e)=>setFocus(e)} onBlur={(e)=>removeFocus(e)}></textarea>
                      <label>Message</label>
                      <div className="form-control-border"></div>                     
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                </div>

                <div className="g-recaptcha" data-sitekey="6LdqmCAUAAAAAMMNEZvn6g4W5e0or2sZmAVpxVqI"></div>
                <input type="button" onClick={handleSubmit} className="button btn-send" value="Send message" />
              </div>
            </form>
          </div>
          {/* <!-- End of Contact Form --> */}
        </div>
        <SweetAlert {...swalProps} onConfirm={()=>setSwalProps()}/>
      </div>
      {/* <!-- End of Contact Subpage --> */}
    </PerfectScrollbar>
  )
}