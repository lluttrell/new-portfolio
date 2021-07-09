import React from 'react';

import Layout from '../components/Layout';

const AlpineRec = () => (
    <Layout fullMenu>
    <section id="wrapper">
        <header>
            <div className="inner">
                <h2>Alpine Reconnaissance</h2>
                <p>HCI Term Project</p>
            </div>
        </header>
        
        <div className="wrapper">
            <section>
                <div className="inner">
                    <section>
                        <h3 className="major">Overview</h3>
                        <p>Alpine Reconnassance is a high-fidelity prototype for a modile augmented-reality rock climbing application. We created the prototype in five stages during the fall 2020 semester.</p>
                        <p>The five stages took us all the way from stakeholder identification and brianstorming, to creating and refining our high-fidelity prototype.</p>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/az8xXyMJn1A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </section>
                </div>
            </section>
        </div>
    </section>

</Layout>
);

export default AlpineRec;