import React from 'react';

const HeroSection = () => {
    const containerStyle = {
        backgroundImage: "url('https://images.unsplash.com/photo-1496096265110-f83ad7f96608?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
    };

    const blockStyle = {
        backdropFilter: "blur(6px) saturate(102%)",
        WebkitBackdropFilter: "blur(6px) saturate(102%)",
        backgroundColor: "rgba(255, 255, 255, 0.45)",
        borderRadius: "12px",
        border: "1px solid rgba(209, 213, 219, 0.3)"
    };

    return (
        <div className="App">
            <div lc-helper="background" className="container-fluid py-5 d-flex justify-content-center" style={containerStyle}>
                <div className="p-5 mb-4 lc-block col-xxl-7 col-lg-8 col-12" style={blockStyle}>
                    <div className="lc-block">
                        <h2 className="fw-bolder mb-4">Founded in 2017, Bluetick Consultants is a technology-driven firm that has made a significant impact in the Indian and US startup ecosystems.</h2>
                        <h4 className="lead mb-4">Transforming Enterprises with cutting-edge, scalable, privacy-focused Generative AI Solutions</h4>
                        <a className="btn btn-dark" href="https://www.bluetickconsultants.com/generative-ai.html" role="button">To know more about us</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection ;