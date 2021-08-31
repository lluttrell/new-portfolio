import React from 'react';

import Layout from '../components/Layout';

const NgvsPage = () => (
    <Layout fullMenu>
        <section id="wrapper">
            <header>
                <div className="inner">
                    <h2>NGVS Map</h2>
                    <p>Summer 2020 Internship Project (NRC Herzberg)</p>
                </div>
            </header>
            
            <div className="wrapper">
                <section>
                    <div className="inner">
                        <section>
                            <h3 className="major">Overview</h3>
                            <p>I wrote a web application named NGVS Map to help astronomers retrieve data collected during the Next Generation Virgo Cluster Survey. The tool is a single page web application written in plain javascript. The main functionality of the tool is to allow astronomers to quickly locate and download FITS images (an astronomial image format) that are relevant to their interests. The tool also allows astronomers to access cataloged information about astronomical objects in the region. The application is centered around an interactive map of the virgo cluster.</p>
                            <p>The tool is currently live, however much of the data is still proprietary. This means many features of the application are disabled without a valid login. I have included a video to demonstrate the major features of the application.</p>
                            <div className="iframe-container">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/az8xXyMJn1A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </section>
                    </div>
                </section>
                <section>
                    <div className="inner">
                        <section>
                            <h3 className="major">Technologies</h3>
                            <p>The tool does not use any major front-end frameworks. It is almost entirely written in plain javascript. The application is made up of many "components" which are bundled using webpack. Some of the languages, libraries, and tools I used when creating the application are:</p>
                            <ul>
                                <li>Webpack</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Materialize CSS Framework</li>
                                <li>Javascript</li>
                                <li>Leaflet.js</li>
                                <li>Nginx (for serving the bundled application)</li>
                                <li>ADQL (Astronomy Data Query Language)</li>
                                <li>Jest (Limited testing coverage)</li>
                            </ul>
                            
                            <p>The CADC APIs often use an SQL-like language for data retreival called ADQL. This was an interesting challenge as I needed to write custom parsers to translate user input to ADQL queries.</p>

                        </section>
                    </div>
                </section>
            </div>
        </section>

    </Layout>
)

export default NgvsPage;