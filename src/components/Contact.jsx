'use client'
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "./hoc";
import { slideIn } from "../utils/motion";
import { toast } from "react-hot-toast";
import { github, linkedin } from "../assets";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    console.log('Service ID: ', process.env.MAIL_PASS);
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill all the fields.");
      return;
    }
    setLoading(true);
    try {
    emailjs
      .send(
        process.env.SERVICE_ID,
        process.env.TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Purva Daga",
          from_email: form.email,
          to_email: "prvdaga@gmail.com",
          message: form.message,
        },
        process.env.PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          toast.success("Thanks for reaching out. I'll get back to you soon.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error('FAILED...', error);

          toast.error("Oops! Something went wrong. Please try again.");
        }
        
      );
    } catch (error) {
      setLoading(false);
      console.error('FAILED...', error);
      toast.error("Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 bg-opacity-80 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <div className="flex mt-6 gap-4">
          <a
            href="https://github.com/dagapurva3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={github.src}
              alt="GitHub"
              className="w-8 h-8"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/purva-daga/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedin.src}
              alt="LinkedIn"
              className="w-8 h-8"
            />
          </a>
        </div>
        <br>
        </br>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <div className="mt-6 p-4 border rounded-lg bg-black-200 shadow-md shadow-primary">
          
          <p className="text-secondary mb-2">
            <strong>University Email:</strong>{" "}
            <a
              href="mailto:p4daga@uwaterloo.ca"
              className="text-blue-400 underline hover:text-blue-300"
            >
              p4daga@uwaterloo.ca
            </a>
          </p>
          <p className="text-secondary">
            <strong>Personal Email:</strong>{" "}
            <a
              href="mailto:prvdaga@gmail.com"
              className="text-blue-400 underline hover:text-blue-300"
            >
              prvdaga@gmail.com
            </a>
          </p>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl hover:bg-purple-950 outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
