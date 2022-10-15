import React from 'react'
import './Footer.sass'
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'
export default function Footer(props) {
  // to add more social media handles of kucc, add them to the array below
  const socialHandles = [
    {
      icon: <FaYoutube color="red" />,
      link: 'https://www.youtube.com/channel/UChOg5n4TKmK-NHs8vM6Y7Rg',
    },
    {
      icon: <FaTwitter color="#0066FF" />,
      link: 'https://twitter.com/kucc1997',
    },
    {
      icon: <FaFacebook color="#0066FF" />,
      link: 'https://www.facebook.com/kucc1997',
    },
    {
      icon: <FaInstagram color="brown" />,
      link: 'https://www.instagram.com/kucc97/',
    },
    {
      icon: <FaLinkedin color="black" />,
      link: 'https://www.linkedin.com/school/kucc/',
    },
  ]
  // to add more section for redirect in footer, add in the array below
  const titles = [
    {
      title: 'KUCC',
      links: [
        { title: 'About Us', link: '/' },
        { title: 'Our Services', link: '/' },
        { title: 'Portfolio', link: '/' },
      ],
    },
    {
      title: 'Contacts',
      links: [
        { title: '8966546546', link: '/' },
        { title: 'kucc@ku.edu.np', link: '/' },
        { title: 'Dhulihel KU', link: '/' },
      ],
    },
  ]
  const joinUs = [
    { title: 'Careers', link: '/' },
    { title: 'Internship', link: '/' },
  ]

  return (
    <div className="Footer">
      {props.top ? (
        <div className="subscribeBar">
          <h3>Subscribe to our newsletter</h3>
          <div className="inputForm">
            <input type={'text'} placeholder="First name" />
            <input type={'email'} placeholder="Email address" />
            <button style={{ backgroundColor: '#090914' }}>Subscribe Now</button>
          </div>
        </div>
      ) : null}
      <div className="redirect">
        <div className="socialMedia">
          <img src={'kucc-logo.png'} alt="Logo" width={100} />
          <div className="socialHandles">
            {socialHandles.map((iteam) => {
              return (
                <div className="border" onClick={() => (window.location = iteam.link)}>
                  {iteam.icon}
                </div>
              )
            })}
          </div>
        </div>
        <div className="links">
          {titles.map((iteam) => {
            return (
              <div className="title">
                <h5>{iteam.title}</h5>
                {iteam.links.map((link) => {
                  return (
                    <Link to={link.link}>
                      <p>{link.title}</p>
                    </Link>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
      <div className="copyright">
        <p style={{ color: '#71717A' }}>
          © Copyright 2022, Kathmandu University Computer Club. All rights reserved.
        </p>
      </div>
    </div>
  )
}
