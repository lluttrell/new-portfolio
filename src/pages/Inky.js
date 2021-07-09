import React from 'react';

import Layout from '../components/Layout';

const InkyPage = () => (
    <Layout fullMenu>
    <section id="wrapper">
        <header>
            <div className="inner">
                <h2>Inky.io</h2>
                <p>Web-based systems project</p>
            </div>
        </header>
        
        <div className="wrapper">
            <section>
                <div className="inner">
                    <section>
                        <h3 className="major">Overview</h3>
                        <p>Inky.io is a multiplayer pictionary-like game developed in the fall 2020 semster for web-based systems.</p>
                    </section>
                </div>
            </section>
        </div>
    </section>

</Layout>
);

export default InkyPage;