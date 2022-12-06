import BlogHero from '@/components/blog/hero';
import BlogSearchBar from '@/components/blog/search_bar';
import Layout from '@/components/layout';
import Link from 'next/link';

const HomeBlog = () => {
  return (
    <Layout>
      <BlogHero />
      <section className="section">
        <BlogSearchBar />
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-6">
              <div className="row">
                <div className="col-lg-6 col-md-12 mb-4 pb-2">
                  <div className="card blog rounded border-0 shadow">
                    <div className="position-relative">
                      <img
                        src="/images/real/p1.jpg"
                        className="card-img-top rounded-top"
                        alt="..."
                      />
                      <div className="overlay rounded-top bg-dark"></div>
                    </div>
                    <div className="card-body content">
                      <h5>
                        <Link
                          href="/blog/detail"
                          className="card-title title text-dark"
                        >
                          Design your apps in your own way
                        </Link>
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
                        <i className="uil uil-calendar-alt"></i> 13th August,
                        2019
                      </small>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12 mb-4 pb-2">
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
                        <i className="uil uil-calendar-alt"></i> 13th August,
                        2019
                      </small>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12 mb-4 pb-2">
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
                          Smartest Applications for Business
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
                        <i className="uil uil-calendar-alt"></i> 13th August,
                        2019
                      </small>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12 mb-4 pb-2">
                  <div className="card blog rounded border-0 shadow">
                    <div className="position-relative">
                      <img
                        src="/images/real/p4.jpg"
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
                        <i className="uil uil-calendar-alt"></i> 13th August,
                        2019
                      </small>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12 mb-4 pb-2">
                  <div className="card blog rounded border-0 shadow">
                    <div className="position-relative">
                      <img
                        src="/images/real/p5.jpg"
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
                        <i className="uil uil-calendar-alt"></i> 13th August,
                        2019
                      </small>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12 mb-4 pb-2">
                  <div className="card blog rounded border-0 shadow">
                    <div className="position-relative">
                      <img
                        src="/images/real/p6.jpg"
                        className="card-img-top rounded-top"
                        alt="..."
                      />
                      <div className="overlay rounded-top bg-dark"></div>
                    </div>
                    <div className="card-body content">
                      <h5>
                        <a href="#" className="card-title title text-dark">
                          Smartest Applications for Business
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
                        <i className="uil uil-calendar-alt"></i> 13th August,
                        2019
                      </small>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <ul className="pagination justify-content-center mb-0">
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Previous">
                        Prev
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Next">
                        Next
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="card border-0 sidebar sticky-bar rounded shadow">
                <div className="card-body">
                  <div className="widget mb-4 pb-2">
                    <h5 className="widget-title">Categories</h5>
                    <ul className="list-unstyled mt-4 mb-0 blog-categories">
                      <li>
                        <a href="#">Finance</a>{' '}
                        <span className="float-end">13</span>
                      </li>
                      <li>
                        <a href="#">Business</a>{' '}
                        <span className="float-end">09</span>
                      </li>
                      <li>
                        <a href="#">Blog</a>{' '}
                        <span className="float-end">18</span>
                      </li>
                      <li>
                        <a href="#">Corporate</a>{' '}
                        <span className="float-end">20</span>
                      </li>
                      <li>
                        <a href="#">Investment</a>{' '}
                        <span className="float-end">22</span>
                      </li>
                    </ul>
                  </div>

                  <div className="widget mb-4 pb-2">
                    <h5 className="widget-title">Recent Post</h5>
                    <div className="mt-4">
                      <div className="clearfix post-recent">
                        <div className="post-recent-thumb float-start">
                          {' '}
                          <a href="#">
                            {' '}
                            <img
                              alt="img"
                              src="/images/real/1.jpg"
                              className="img-fluid rounded"
                            />
                          </a>
                        </div>
                        <div className="post-recent-content float-start">
                          <a href="#">Consultant Business</a>
                          <span className="text-muted mt-2">
                            15th June, 2019
                          </span>
                        </div>
                      </div>
                      <div className="clearfix post-recent">
                        <div className="post-recent-thumb float-start">
                          {' '}
                          <a href="#">
                            {' '}
                            <img
                              alt="img"
                              src="/images/real/2.jpg"
                              className="img-fluid rounded"
                            />
                          </a>
                        </div>
                        <div className="post-recent-content float-start">
                          <a href="#">Look On The Glorious Balance</a>{' '}
                          <span className="text-muted mt-2">
                            15th June, 2019
                          </span>
                        </div>
                      </div>
                      <div className="clearfix post-recent">
                        <div className="post-recent-thumb float-start">
                          {' '}
                          <a href="#">
                            {' '}
                            <img
                              alt="img"
                              src="/images/real/3.jpg"
                              className="img-fluid rounded"
                            />
                          </a>
                        </div>
                        <div className="post-recent-content float-start">
                          <a href="#">Research Financial.</a>{' '}
                          <span className="text-muted mt-2">
                            15th June, 2019
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="widget mb-4 pb-2">
                    <h5 className="widget-title">Tags Cloud</h5>
                    <div className="tagcloud mt-4">
                      <a href="#" className="rounded">
                        Business
                      </a>
                      <a href="#" className="rounded">
                        Finance
                      </a>
                      <a href="#" className="rounded">
                        Marketing
                      </a>
                      <a href="#" className="rounded">
                        Fashion
                      </a>
                      <a href="#" className="rounded">
                        Bride
                      </a>
                      <a href="#" className="rounded">
                        Lifestyle
                      </a>
                      <a href="#" className="rounded">
                        Travel
                      </a>
                      <a href="#" className="rounded">
                        Beauty
                      </a>
                      <a href="#" className="rounded">
                        Video
                      </a>
                      <a href="#" className="rounded">
                        Audio
                      </a>
                    </div>
                  </div>

                  {/* <div className="widget">
                    <h5 className="widget-title">Follow us</h5>
                    <ul className="list-unstyled social-icon mb-0 mt-4">
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i
                            data-feather="facebook"
                            className="fea icon-sm fea-social"
                          ></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i
                            data-feather="instagram"
                            className="fea icon-sm fea-social"
                          ></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i
                            data-feather="twitter"
                            className="fea icon-sm fea-social"
                          ></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i
                            data-feather="linkedin"
                            className="fea icon-sm fea-social"
                          ></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i
                            data-feather="github"
                            className="fea icon-sm fea-social"
                          ></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i
                            data-feather="youtube"
                            className="fea icon-sm fea-social"
                          ></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i
                            data-feather="gitlab"
                            className="fea icon-sm fea-social"
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomeBlog;
