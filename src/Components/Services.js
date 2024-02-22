import React from 'react';
import remote from '../images/remote.png';

const Services = () => {
  return (
    <section className="bsb-service-7 py-3 py-xl-8" id="services">
      <div className="container">
            <h2 className="fs-8 mb-2  py-4 strongly text-center  display-3 text-primary">What We Offer</h2>
            <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="container-fluid bg-light border shadow">
              <div className="row">

                {/* Service 1 */}
                <div className="col-6 col-md-3 p-0">
                  <div className="card border-0 bg-transparent">
                    <div className="card-body text-center p-5">
                      <img src={remote} alt="Service" className="img-fluid mb-4" />
                      <h4 className="fw-bold mb-4">Explore AI Opportunities for Your Enterprise
                      </h4>
                      <p className="mb-4 fw-bold text-secondary">Unlock the potential of generative AI by identifying tailored opportunities for integration within
                        your organization, ensuring a strategic and efficient approach to AI implementation.</p>
                    </div>
                  </div>
                </div>
                {/* Service 2 */}

                <div className="col-6 col-md-3 p-0 border-top border-bottom border-start border-end">
                  <div className="card border-0 bg-transparent">
                    <div className="card-body text-center p-5">
                      <img src={remote} alt="Service" className="img-fluid mb-4" />
                      <h4 className="fw-bold mb-4">Design AI Trust Layer
                      </h4>
                      <p className="mb-4 fw-bold text-secondary">Prioritize data security and build trust in generative AI applications with a dedicated trust
                        layer, emphasizing privacy-focused solutions that safeguard both organizational and
                        customer data.</p>
                    </div>
                  </div>
                </div>

                {/* Service 3 */}
                <div className="col-6 col-md-3 p-0 border-top border-bottom border-start border-end">
                  <div className="card border-0 bg-transparent">
                    <div className="card-body text-center p-5">
                      <img src={remote} alt="Service" className="img-fluid mb-4" />
                      <h4 className="fw-bold mb-4">Scalability Focused Solutions
                      </h4>
                      <p className="mb-4 fw-bold text-secondary">Streamline and optimize business processes with comprehensive workflow automation,
                        ensuring seamless integration of AI technologies from inception to execution for increased
                        efficiency and productivity.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Service 4 */}
                <div className="col-6 col-md-3 p-0 border-top border-bottom border-start border-end">
                  <div className="card border-0 bg-transparent">
                    <div className="card-body text-center p-5">
                      <img src={remote} alt="Service" className="img-fluid mb-4" />
                      <h4 className="fw-bold mb-4">End to end Workflow automation</h4>
                      <p className="mb-4 fw-bold text-secondary">Implement cutting-edge, scalable generative AI solutions that not only meet current
                        organizational needs but also adapt and grow with the evolving demands of your enterprise,
                        providing a future-proof approach to AI integration.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
