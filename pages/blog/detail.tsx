import Layout from '@/components/layout';
import Heading from '@/components/widgets/heading';

const BlogDetail = () => {
  const breadcrumbs = [
    {
      name: 'Pandion',
      path: '/',
      active: false,
    },
    {
      name: 'Bài Viết',
      path: '/',
      active: true,
    },
  ];

  return (
    <Layout>
      <Heading title="Bài Viết" breadcrumbs={breadcrumbs} />

      <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card blog blog-detail border-0 shadow rounded">
                <img
                  src="/images/real/p1.jpg"
                  className="img-fluid rounded-top"
                  alt=""
                />
                <div className="card-body content">
                  <h6>
                    <i className="mdi mdi-tag text-primary me-1"></i>
                    <a href="#" className="text-primary">
                      Software
                    </a>
                    ,{' '}
                    <a href="#" className="text-primary">
                      Application
                    </a>
                  </h6>
                  <p className="text-muted mt-3">
                    The most well-known dummy text is the 'Lorem Ipsum', which
                    is said to have originated in the 16th century. Lorem Ipsum
                    is composed in a pseudo-Latin language which more or less
                    corresponds to 'proper' Latin. It contains a series of real
                    Latin words. This ancient dummy text is also
                    incomprehensible, but it imitates the rhythm of most
                    European languages in Latin script.{' '}
                  </p>
                  <blockquote className="blockquote mt-3 p-3">
                    <p className="text-muted mb-0 fst-italic">
                      " There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. "
                    </p>
                  </blockquote>
                  <p className="text-muted">
                    The advantage of its Latin origin and the relative
                    meaninglessness of Lorum Ipsum is that the text does not
                    attract attention to itself or distract the viewer's
                    attention from the layout.
                  </p>
                  <div className="post-meta mt-3">
                    <ul className="list-unstyled mb-0">
                      <li className="list-inline-item me-2 mb-0">
                        <a href="#" className="text-muted like">
                          <i className="uil uil-heart me-1"></i>33
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="text-muted comments">
                          <i className="uil uil-comment me-1"></i>08
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* <div className="card shadow rounded border-0 mt-4">
                <div className="card-body">
                  <h5 className="card-title mb-0">Comments :</h5>

                  <ul className="media-list list-unstyled mb-0">
                    <li className="mt-4">
                      <div className="d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                          <a className="pe-3" href="#">
                            <img
                              src="images/client/01.jpg"
                              className="img-fluid avatar avatar-md-sm rounded-circle shadow"
                              alt="img"
                            />
                          </a>
                          <div className="commentor-detail">
                            <h6 className="mb-0">
                              <a
                                href="#"
                                className="text-dark media-heading"
                              >
                                Lorenzo Peterson
                              </a>
                            </h6>
                            <small className="text-muted">
                              15th August, 2019 at 01:25 pm
                            </small>
                          </div>
                        </div>
                        <a href="#" className="text-muted">
                          <i className="mdi mdi-reply"></i> Reply
                        </a>
                      </div>
                      <div className="mt-3">
                        <p className="text-muted fst-italic p-3 bg-light rounded">
                          " There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour "
                        </p>
                      </div>
                    </li>

                    <li className="mt-4">
                      <div className="d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                          <a className="pe-3" href="#">
                            <img
                              src="images/client/02.jpg"
                              className="img-fluid avatar avatar-md-sm rounded-circle shadow"
                              alt="img"
                            />
                          </a>
                          <div className="commentor-detail">
                            <h6 className="mb-0">
                              <a
                                href="#"
                                className="media-heading text-dark"
                              >
                                Tammy Camacho
                              </a>
                            </h6>
                            <small className="text-muted">
                              15th August, 2019 at 05:44 pm
                            </small>
                          </div>
                        </div>
                        <a href="#" className="text-muted">
                          <i className="mdi mdi-reply"></i> Reply
                        </a>
                      </div>
                      <div className="mt-3">
                        <p className="text-muted fst-italic p-3 bg-light rounded">
                          " There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour "
                        </p>
                      </div>
                    </li>

                    <li className="mt-4">
                      <div className="d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                          <a className="pe-3" href="#">
                            <img
                              src="images/client/03.jpg"
                              className="img-fluid avatar avatar-md-sm rounded-circle shadow"
                              alt="img"
                            />
                          </a>
                          <div className="commentor-detail">
                            <h6 className="mb-0">
                              <a
                                href="#"
                                className="media-heading text-dark"
                              >
                                Tammy Camacho
                              </a>
                            </h6>
                            <small className="text-muted">
                              16th August, 2019 at 03:44 pm
                            </small>
                          </div>
                        </div>
                        <a href="#" className="text-muted">
                          <i className="mdi mdi-reply"></i> Reply
                        </a>
                      </div>
                      <div className="mt-3">
                        <p className="text-muted fst-italic p-3 bg-light rounded">
                          " There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour "
                        </p>
                      </div>

                      <ul className="list-unstyled ps-4 ps-md-5 sub-comment">
                        <li className="mt-4">
                          <div className="d-flex justify-content-between">
                            <div className="d-flex align-items-center">
                              <a className="pe-3" href="#">
                                <img
                                  src="images/client/01.jpg"
                                  className="img-fluid avatar avatar-md-sm rounded-circle shadow"
                                  alt="img"
                                />
                              </a>
                              <div className="commentor-detail">
                                <h6 className="mb-0">
                                  <a
                                    href="#"
                                    className="text-dark media-heading"
                                  >
                                    Lorenzo Peterson
                                  </a>
                                </h6>
                                <small className="text-muted">
                                  17th August, 2019 at 01:25 pm
                                </small>
                              </div>
                            </div>
                            <a href="#" className="text-muted">
                              <i className="mdi mdi-reply"></i> Reply
                            </a>
                          </div>
                          <div className="mt-3">
                            <p className="text-muted fst-italic p-3 bg-light rounded">
                              " There are many variations of passages of Lorem
                              Ipsum available, but the majority have suffered
                              alteration in some form, by injected humour "
                            </p>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div> */}

              {/* <div className="card shadow rounded border-0 mt-4">
                            <div className="card-body">
                                <h5 className="card-title mb-0">Leave A Comment :</h5>

                                <form className="mt-3">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="mb-3">
                                                <label className="form-label">Your Comment</label>
                                                <div className="form-icon position-relative">
                                                    <i data-feather="message-circle" className="fea icon-sm icons"></i>
                                                    <textarea id="message" placeholder="Your Comment" rows="5" name="message" className="form-control ps-5" required={}></textarea>
                                                </div>
                                            </div>
                                        </div>
    
                                        <div className="col-lg-6">
                                            <div className="mb-3">
                                                <label className="form-label">Name <span className="text-danger">*</span></label>
                                                <div className="form-icon position-relative">
                                                    <i data-feather="user" className="fea icon-sm icons"></i>
                                                    <input id="name" name="name" type="text" placeholder="Name" className="form-control ps-5" required={} />
                                                </div>
                                            </div>
                                        </div>
    
                                        <div className="col-lg-6">
                                            <div className="mb-3">
                                                <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                                <div className="form-icon position-relative">
                                                    <i data-feather="mail" className="fea icon-sm icons"></i>
                                                    <input id="email" type="email" placeholder="Email" name="email" className="form-control ps-5" required={}>
                                                </div>
                                            </div>
                                        </div>
    
                                        <div className="col-md-12">
                                            <div className="send d-grid">
                                                <button type="submit" className="btn btn-primary">Send Message</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div> */}

              <div className="card shadow rounded border-0 mt-4">
                <div className="card-body">
                  <h5 className="card-title mb-0">Related Posts :</h5>

                  <div className="row">
                    <div className="col-lg-6 mt-4 pt-2">
                      <div className="card blog rounded border-0 shadow">
                        <div className="position-relative">
                          <img
                            src="/images/real/p2.jpg"
                            className="card-img-top rounded-top"
                            alt="..."
                          />
                          <div className="overlay rounded-top bg-dark"></div>
                        </div>
                        <div className="card-body content">
                          <h5>
                            <a href="#" className="card-title title text-dark">
                              Design your apps in your own way
                            </a>
                          </h5>
                          <div className="post-meta d-flex justify-content-between mt-3">
                            <ul className="list-unstyled mb-0">
                              <li className="list-inline-item me-2 mb-0">
                                <a href="#" className="text-muted like">
                                  <i className="uil uil-heart me-1"></i>33
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a href="#" className="text-muted comments">
                                  <i className="uil uil-comment me-1"></i>08
                                </a>
                              </li>
                            </ul>
                            <a
                              href="page-blog-detail.html"
                              className="text-muted readmore"
                            >
                              Read More{' '}
                              <i className="uil uil-angle-right-b align-middle"></i>
                            </a>
                          </div>
                        </div>
                        <div className="author">
                          <small className="text-light user d-block">
                            <i className="uil uil-user"></i> Calvin Carlo
                          </small>
                          <small className="text-light date">
                            <i className="uil uil-calendar-alt"></i> 13th
                            August, 2019
                          </small>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 mt-4 pt-2">
                      <div className="card blog rounded border-0 shadow">
                        <div className="position-relative">
                          <img
                            src="/images/real/p3.jpg"
                            className="card-img-top rounded-top"
                            alt="..."
                          />
                          <div className="overlay rounded-top bg-dark"></div>
                        </div>
                        <div className="card-body content">
                          <h5>
                            <a href="#" className="card-title title text-dark">
                              How apps is changing the IT world
                            </a>
                          </h5>
                          <div className="post-meta d-flex justify-content-between mt-3">
                            <ul className="list-unstyled mb-0">
                              <li className="list-inline-item me-2 mb-0">
                                <a href="#" className="text-muted like">
                                  <i className="uil uil-heart me-1"></i>33
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a href="#" className="text-muted comments">
                                  <i className="uil uil-comment me-1"></i>08
                                </a>
                              </li>
                            </ul>
                            <a
                              href="page-blog-detail.html"
                              className="text-muted readmore"
                            >
                              Read More{' '}
                              <i className="uil uil-angle-right-b align-middle"></i>
                            </a>
                          </div>
                        </div>
                        <div className="author">
                          <small className="text-light user d-block">
                            <i className="uil uil-user"></i> Calvin Carlo
                          </small>
                          <small className="text-light date">
                            <i className="uil uil-calendar-alt"></i> 13th
                            August, 2019
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogDetail;
