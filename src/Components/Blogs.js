import React from 'react';
import image1 from '../images/blog-1.png';
import image2 from '../images/blog-2.png';
import image3 from '../images/blog-3.png';
import image4 from '../images/blog-4.png';

const Blogs = () => {
  return (
    <section className="bsb-blog-5 py-3 py-md-5 py-xl-8" id="blogs">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
            <h2 className="display-5 fs-8 strongly text-primary mb-4 mb-md-5 text-center">Explore and enjoy the blogs written by our passionate techies.</h2>
            <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark" />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          {/* Blog1 */}
          <div className="col-12 col-lg-6">
            <div className="card border bg-light p-3 mb-4">
              <article>
                <figure className="card-img-top mb-4 overflow-hidden bsb-overlay-hover">
                  <a href="https://www.bluetickconsultants.com/speaking-sql-turning-natural-language-into-database-dialogues.html">
                    <img className="img-fluid bsb-scale bsb-hover-scale-up" loading="lazy" src={image1} alt="Living" />
                  </a>
                </figure>
                <div className="card-body">
                  <ul className="entry-meta list-unstyled d-flex mb-3">
                    <li>
                      <a className="d-inline-flex px-2 py-1 m-1 link-primary text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-2 text-decoration-none fs-7" >Text-to-SQL</a>
                    </li>
                    <li>
                      <a className="d-inline-flex px-2 py-1 m-1 link-primary text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-2 text-decoration-none fs-7" >Open AI</a>
                    </li>
                    <li>
                      <a className="d-inline-flex px-2 py-1 m-1 link-primary text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-2 text-decoration-none fs-7" >GPT 3.5Turbo</a>
                    </li>
                  </ul>
                  <h2 className="card-title entry-title h4">
                    <a className="link-dark text-decoration-none" href="https://www.bluetickconsultants.com/speaking-sql-turning-natural-language-into-database-dialogues.html">Speaking SQL: Turning Natural Language into Database Dialogues</a>
                  </h2>
                  <p className="text-muted">
                    Bridging Language and Data in the Enterprise Sphere: In the realm of enterprise data
                    management, SQL databases have long stood as the backbone, housing vast quantities of
                    invaluable information. As enterprises increasingly lean on business intelligence (BI) tools to
                    extract insights from these data repositories, the quest for more intuitive and accessible
                    querying methods gains momentum. The emerging solution? Leveraging Large Language
                    Models (LLMs) to interact with SQL databases using natural language.
                  </p>
                </div>
              </article>
            </div>
          </div>
          {/* Blog2 */}
          <div className="col-12 col-lg-6">
            <div className="card border bg-light p-3 mb-4">
              <article>
                <figure className="card-img-top mb-4 overflow-hidden bsb-overlay-hover">
                  <a href="https://www.bluetickconsultants.com/beyond-basics-elevating-ai-with-reinforcement-learning-from-human-feedback.html">
                    <img className="img-fluid bsb-scale bsb-hover-scale-up" loading="lazy" src={image2} alt="Living" />
                  </a>
                </figure>
                <div className="card-body">
                  <ul className="entry-meta list-unstyled d-flex mb-3">
                    <li>
                      <a className="d-inline-flex px-2 py-1 m-1 link-primary text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-2 text-decoration-none fs-7" >Generative AI</a>
                    </li>
                    <li>
                      <a className="d-inline-flex px-2 py-1 m-1 link-primary text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-2 text-decoration-none fs-7" >Fine-Tuning</a>
                    </li>
                    <li>
                      <a className="d-inline-flex px-2 py-1 m-1 link-primary text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-2 text-decoration-none fs-7" >PEFT</a>
                    </li>
                  </ul>
                  <h2 className="card-title entry-title h4">
                    <a className="link-dark text-decoration-none" href="https://www.bluetickconsultants.com/beyond-basics-elevating-ai-with-reinforcement-learning-from-human-feedback.html">Beyond Basics: Elevating AI with Reinforcement Learning from Human Feedback</a>
                  </h2>
                  <p className="text-muted">
                    Reinforcement Learning from Human Feedback (RLHF) was arguably the key behind the
                    success of ChatGPT, marking a significant advancement in AI's ability to understand and
                    engage in human language. This method, vital for fine-tuning language models, addresses
                    the complexities and nuances of communication, ensuring AI interactions are natural and
                    intuitive. It navigates the challenges of training AI with diverse internet data, carefully guiding
                    models to avoid replicating inappropriate language or tones.
                  </p>
                </div>
              </article>
            </div>
          </div>
          {/* Blog3 */}
          <div className="col-12 col-lg-6">
            <div className="card border bg-light p-3 mb-4">
              <article>
                <figure className="card-img-top mb-4 overflow-hidden bsb-overlay-hover">
                  <a href="https://www.bluetickconsultants.com/the-fine-art-of-tuning-parameter-efficient-fine-tuning.html">
                    <img className="img-fluid bsb-scale bsb-hover-scale-up" loading="lazy" src={image3} alt="Living" />
                  </a>
                </figure>
                <div className="card-body">
                  <ul className="entry-meta list-unstyled d-flex mb-3">
                    <li>
                      <a className="d-inline-flex px-2 py-1 m-1 link-primary text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-2 text-decoration-none fs-7">Meta AI</a>
                    </li>
                    <li>
                      <a className="d-inline-flex px-2 py-1 m-1 link-primary text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-2 text-decoration-none fs-7">Llama-2</a>
                    </li>
                    <li>
                      <a className="d-inline-flex px-2 py-1 m-1 link-primary text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-2 text-decoration-none fs-7">Generative AI</a>
                    </li>
                  </ul>
                  <h2 className="card-title entry-title h4">
                    <a className="link-dark text-decoration-none" href="https://www.bluetickconsultants.com/the-fine-art-of-tuning-parameter-efficient-fine-tuning.html">The Fine Art of Tuning: Parameter-Efficient Fine-Tuning</a>
                  </h2>
                  <p className="text-muted">
                    Welcome to our exploration of the fascinating world of large language models! As many of
                    you are aware, the scale of these models has skyrocketed recently. Take, for instance,
                    GPT-4, which boasts a staggering 1.8 trillion parameters. The desire to fine-tune these
                    behemoths with custom datasets is growing, yet it poses significant challenges. Fine-tuning
                    requires adjusting countless parameters, which is time-consuming, and the GPU demands
                    are nothing short of immense.
                  </p>
                </div>
              </article>
            </div>
          </div>
          {/* Blog4 */}
          <div className="col-12 col-lg-6">
            <div className="card border bg-light p-3 mb-4">
              <article>
                <figure className="card-img-top mb-4 overflow-hidden bsb-overlay-hover">
                  <a href="https://www.bluetickconsultants.com/privaicy-matters-balancing-privacy-price-and-performance-in-in-house-llm-deployments.html">
                    <img className="img-fluid bsb-scale bsb-hover-scale-up" loading="lazy" src={image4} alt="Living" />
                  </a>
                </figure>
                <div className="card-body">
                  <ul className="entry-meta list-unstyled d-flex mb-3">
                    <li>
                      <a className="d-inline-flex px-2 py-1 m-1 link-primary text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-2 text-decoration-none fs-7">OpenAI Privacy</a>
                    </li>
                    <li>
                      <a className="d-inline-flex px-2 py-1 m-1 link-primary text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-2 text-decoration-none fs-7">Runpod</a>
                    </li>
                    <li>
                      <a className="d-inline-flex px-2 py-1 m-1 link-primary text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-2 text-decoration-none fs-7">opensourcellm</a>
                    </li>
                  </ul>
                  <h2 className="card-title entry-title h4">
                    <a className="link-dark text-decoration-none" href="https://www.bluetickconsultants.com/privaicy-matters-balancing-privacy-price-and-performance-in-in-house-llm-deployments.html">
                      Priv<span className="text-danger">AI</span>cy Matters: Balancing Privacy, Price, and Performance
                    </a>
                  </h2>
                  <p className="text-muted">
                    Welcome to our exploration of the fascinating world of large language models! As many of
                    you are aware, the scale of these models has skyrocketed recently. Take, for instance,
                    GPT-4, which boasts a staggering 1.8 trillion parameters. The desire to fine-tune these
                    behemoths with custom datasets is growing, yet it poses significant challenges. Fine-tuning
                    requires adjusting countless parameters, which is time-consuming, and the GPU demands
                    are nothing short of immense.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
