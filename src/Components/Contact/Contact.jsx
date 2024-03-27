import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";


const Contact = () => {
  return (
    <div>
      <div className="hero bg-base-200 mt-12 mb-12">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl md:text-5xl font-bold">Contact Now!</h1>
            <p className="py-4">
                Reach out to us easily for any inquiries or assistance. Your satisfaction is our priority – We are here to help
            </p>
            <div className="flex gap-3 justify-center md:justify-start mt-5">
                <FaFacebook className="text-2xl"/>
                <FaSquareTwitter className="text-2xl"/>
                <FaLinkedin className="text-2xl"/>
            </div>
            <div className="pt-8">
            <button className="btn text-xl bg-green-500 font-bold hover:bg-green-600 text-white border-none w-full">
              Send Message
            </button>
            </div>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-green-500 hover:bg-green-600 text-white font-bold border-none">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
