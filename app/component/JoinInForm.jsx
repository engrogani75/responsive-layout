import Link from "next/link";

const JoinInForm = () => {
  return (
    <div className="col-md-5 form-container">
      <Link href={"./signIn"} className="me-4 signIn joinIn">
        Sign In
      </Link>
      <Link href={"./joinIn"} className="joinIn">
        Join In
      </Link>

      <div className="d-flex flex-column">
        <button className="btn btn-outline-primary btn-block mt-4 d-flex justify-content-evenly">
          <svg
            className="me-3"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.44827 8.00005C3.44827 7.48043 3.53452 6.98218 3.68865 6.51493L0.992398 4.45605C0.466898 5.52293 0.170898 6.72518 0.170898 8.00005C0.170898 9.27393 0.466648 10.4753 0.991273 11.5416L3.68602 9.47868C3.5334 9.01355 3.44827 8.51718 3.44827 8.00005Z"
              fill="#FBBC05"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.18206 3.27275C9.31094 3.27275 10.3306 3.67275 11.1317 4.32725L13.4622 2C12.0421 0.763625 10.2213 0 8.18206 0C5.01606 0 2.29506 1.8105 0.992188 4.456L3.68831 6.51487C4.30956 4.62912 6.08044 3.27275 8.18206 3.27275Z"
              fill="#EA4335"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.18206 12.7274C6.08056 12.7274 4.30969 11.371 3.68844 9.48523L0.992188 11.5437C2.29506 14.1896 5.01606 16.0001 8.18206 16.0001C10.1361 16.0001 12.0017 15.3062 13.4018 14.0062L10.8426 12.0277C10.1204 12.4826 9.21106 12.7274 8.18206 12.7274Z"
              fill="#34A853"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.8293 8.00022C15.8293 7.52747 15.7564 7.01834 15.6471 6.54572H8.18213V9.63659H12.4791C12.2643 10.6905 11.6795 11.5006 10.8426 12.0278L13.4019 14.0063C14.8726 12.6413 15.8293 10.6078 15.8293 8.00022Z"
              fill="#4285F4"
            />
          </svg>
          Continue with Google
        </button>
        <button className="btn btn-outline-primary btn-block mt-4 d-flex justify-content-evenly">
          <i class="fa-brands fa-facebook"></i> Continue with Facebook
        </button>
      </div>
      <div>
        <p className="text-center mt-4 connect">Or connect with</p>
      </div>

      <form>
        <input type="email" className="form-control mb-4" placeholder="Email" />
        <input
          type="password"
          className="form-control"
          placeholder="Password"
        />

        <p>
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </p>

        <button
          type="submit"
          className="btn btn-outline-primary mt-4 btn-block continue"
        >
          Agree and Continue
        </button>
      </form>
    </div>
  );
};

export default JoinInForm;