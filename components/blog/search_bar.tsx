const BlogSearchBar = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="features-absolute blog-search">
            <div className="row justify-content-center">
              <div className="col-md-10">
                <div className="text-center subcribe-form">
                  <form style={{maxWidth: "800px"}}>
                    <input
                      type="text"
                      id="course"
                      name="name"
                      className="rounded-pill shadow-md bg-white"
                      placeholder="Search keywords..."
                    />
                    <button type="submit" className="btn btn-pills btn-primary">
                      Search
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSearchBar;
