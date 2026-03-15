
const Signup = () => {
  return (
    <>
      <section className="bg-img1">
        <h2 className="htext">Sign Up</h2>
      </section>

      <section className="p-t-75">
        <div className="container flex justify-center">
          <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
            <h3 className="mtext mb-6 text-center">Create an Account</h3>

            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="sText block mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="sText block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="password" className="sText block mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Create a password"
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="sText block mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Confirm your password"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
              >
                Sign Up
              </button>
            </form>

            <p className="text-center text-sm mt-6">
              Already have an account?{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Login
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
