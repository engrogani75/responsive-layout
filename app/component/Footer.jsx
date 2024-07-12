import Link from "next/link";

const Footer = () => {
  return (
    <div className="container footer">
      <div className="row">
        <div className="col-md-2">
          <h5>Hobbycue</h5>

          <ul className="list-unstyled">
            <li>
              <Link href="#">About Us</Link>
            </li>
            <li>
              {" "}
              <Link href="#">Our Services</Link>
            </li>
            <li>
              <Link href="#"> Work with Us</Link>
            </li>
            <li>
              <Link href="#"> FAQ</Link>
            </li>
            <li>
              {" "}
              <Link href="#"> Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="col-md-2">
          <h5>How Do I</h5>
          <ul className="list-unstyled">
            <li>
              <Link href="#">Sign Up</Link>
            </li>
            <li>
              {" "}
              <Link href="#">Add a Listing</Link>
            </li>
            <li>
              <Link href="#"> Claim Listing</Link>
            </li>
            <li>
              <Link href="#"> Post a Query</Link>
            </li>
            <li>
              {" "}
              <Link href="#"> Add a Blog Post</Link>
            </li>
            <li>
              {" "}
              <Link href="#"> Other Queries</Link>
            </li>
          </ul>
        </div>
        <div className="col-md-3">
          <h5>Quick Links</h5>
          <ul className="list-unstyled">
            <li>
              <Link href="#">Listings</Link>
            </li>
            <li>
              {" "}
              <Link href="#">Blog Posts</Link>
            </li>
            <li>
              <Link href="#"> Shop / Store</Link>
            </li>
            <li>
              <Link href="#"> Community</Link>
            </li>
          </ul>
        </div>
        <div className="col-md-5">
          <h5>Social Media</h5>

          <ul className="d-flex justify-content-between list-unstyled social-list mb-5">
            <li>
              <Link href="#">
                <i class="fa-brands fa-facebook-f"></i>
              </Link>
            </li>
            <li>
              {" "}
              <Link href="#">
                <i class="fa-brands fa-twitter"></i>
              </Link>
            </li>
            <li>
              <Link href="#">
                <i class="fa-brands fa-instagram"></i>
              </Link>
            </li>
            <li>
              <Link href="#">
                <i class="fa-brands fa-pinterest"></i>
              </Link>
            </li>
            <li>
              {" "}
              <Link href="#">
                <i class="fa-brands fa-google-plus-g"></i>
              </Link>
            </li>

            <li>
              {" "}
              <Link href="#">
                <i class="fa-brands fa-youtube"></i>
              </Link>
            </li>
          </ul>

          <form className="d-flex mt-5">
            <input
              className="form-control"
              type="invite"
              placeholder="Invite friend..."
              aria-label="invite"
            />
            <button className="btn btn-outline-success" type="submit">
              Invite Friend
            </button>
          </form>
        </div>
      </div>
      <div className="text-center item-center footer-bootom">
        <p>© Purple Cues Private Limite</p>
      </div>
    </div>
  );
};

export default Footer;
