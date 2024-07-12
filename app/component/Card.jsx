const Card = () => {
  return (
    <div className="container cardContent">
      <div className="row mt-4">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                <i class="fa-solid fa-person me-2"></i>People
              </h5>
              <p className="card-text">
                Find a teacher, coach, or expert for your hobby interest in{" "}
                <br /> your locality. Find a partner, teammate, accompanist or{" "}
                <br /> collaborator.
              </p>
              <button href="#" className="btn btn-outline-primary">
                Connect
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                <i class="fa-solid fa-location-dot me-2"></i>Special title
                treatment
              </h5>
              <p className="card-text">
                Find a class, school, playground, auditorium, studio, shop or an
                event venue. Book a slot at venues that allow booking through
                hobbycue
              </p>
              <button href="#" className="btn btn-outline-primary">
                Meet up
              </button>
            </div>
          </div>
        </div>

        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                <i class="fa-solid fa-bag-shopping me-2"></i> Product
              </h5>
              <p className="card-text">
                Find equipment or supplies required for your hobby. Buy, rent or
                borrow from shops, online stores or from community members.
              </p>
              <button href="#" className="btn btn-outline-primary">
                Get it
              </button>
            </div>
          </div>
        </div>

        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                <i class="fa-solid fa-circle-check me-2"></i> Program
              </h5>
              <p className="card-text">
                Find equipment or supplies required for your hobby. Buy, rent or
                borrow from shops, online stores or from community members.
              </p>
              <button href="#" className="btn btn-outline-primary">
                Get it
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
