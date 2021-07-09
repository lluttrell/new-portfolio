import React from 'react';

import Layout from '../components/Layout';

import richjake from '../assets/images/rich_jake.jpg'
import ngvsimage from '../assets/images/m61.jpg'
import backflip from '../assets/images/backflip.jpg'
import keyboard from '../assets/images/keyboard.jpg'
import inky from '../assets/images/inky.png'

import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <div className="logo">
          <span className="icon fa-diamond"></span>
        </div>
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
      </div>
    </section>

    <section id="wrapper">
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <a href="/#" className="image">
            <img src={richjake} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Who am I?</h2>
            <p>
              I'm a recent graduate from the computer science program at the University of Calgary looking to start a career as a software developer. I also have a degree in physics and earth science from the University of Victoria. I have experience working in resource exploration, underground utility locating, and the ski industry.
            </p>
            <a href="/#" className="special">
              Learn more
            </a>
          </div>
        </div>
      </section>

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          <a href="/#" className="image">
            <img src={keyboard} alt="" />
          </a>
          <div className="content">
            <h2 className="major">What can I do?</h2>
            <p>
              I have a wide variety of experience in software development. Most of my experience so far has been building and deploying full-stack web applications. I know the front-end basics (HTML/CSS/Javascript) and have worked with frameworks such as React and Bootstrap. On the back-end I have built APIs written in both Javascript and Python. For databases I have experience with relational databases and noSQL databases. The languages I know best are Java, Javascript, Python, and C. I am also quite familier with linux.
            </p>
            <a href="/#" className="special">
              Learn more
            </a>
          </div>
        </div>
      </section>

      <section id="three" className="wrapper spotlight style3">
        <div className="inner">
          <a href="/#" className="image">
            <img src={backflip} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Other Interests</h2>
            <p>
              When I've got time to spare you can catch me participating in one of my many hobbies. Skiing, climbing, cooking, and travelling on my motorcycle are some of my favourites. I also enjoy a good coffee and the occasional craft beer. 
            </p>
            <a href="/#" className="special">
              Learn more
            </a>
          </div>
        </div>
      </section>

      <section id="four" className="wrapper alt style1">
        <div className="inner">
          <h2 className="major">Projects</h2>
          <p>
            Here are a few of the projects I've worked on recently.
          </p>
          <section className="features">
            <article>
              <a href="/#" className="image">
                <img src={ngvsimage} alt="" />
              </a>
              <h3 className="major">NGVS Map</h3>
              <p>
                NGVS Map is a web appication for astronomical data exploration and retrieval.
              </p>
              <a href="/Ngvs" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={inky} alt="" />
              </a>
              <h3 className="major">Inky.io</h3>
              <p>
                Inky.io is an online multiplayer pictionary-like game.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={inky} alt="" />
              </a>
              <h3 className="major">Alpine Reconnaissance</h3>
              <p>
                Alpine Reconnaissance is a protoype for a mobile AR rock climbing application.
              </p>
              <a href="/AlpineRec" className="special">
                Learn more
              </a>
            </article>
          </section>
          <ul className="actions">
            <li>
              <a href="http://www.github.com/lluttrell" className="button">
                Browse All on GitHub
              </a>
            </li>
          </ul>
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
