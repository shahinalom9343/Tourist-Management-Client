import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <nav>
        <h6 className="footer-title">Services</h6>

        <Link to="/" className="link link-hover">
          Home
        </Link>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <Link to="/about" className="link link-hover">
          About Us
        </Link>
        <Link to="/contact" className="link link-hover">
          Contact
        </Link>
        <a className="link link-hover">Jobs</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      <form>
        <h6 className="footer-title">Newsletter</h6>
        <fieldset className="">
          <label className="label">
            <span className="label-text">Enter your email address:</span>
          </label>
          <div className="md:join">
            <input
              type="text"
              placeholder="Enter your Email"
              className="input input-bordered"
            />
            <div>
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </div>
        </fieldset>
      </form>
    </footer>
  );
};

export default Footer;
