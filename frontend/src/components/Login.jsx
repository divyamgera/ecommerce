
const Login = () => {
  return (
    <>
     
      <section className="bg-img1">
        <h2 className="htext">Login</h2>
      </section>

      <section className="p-t-75">
        <div className="container flex justify-center">
          <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
            <h3 className="mtext mb-6 text-center">Welcome Back!</h3>

            <form className="space-y-5">
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
                  placeholder="Enter your password"
                />
              </div>

              <div className="flex justify-between items-center text-sm">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Remember Me
                </label>
                <a href="#" className="text-blue-500 hover:underline">
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
              >
                Login
              </button>
            </form>

            <p className="text-center text-sm mt-6">
              Don’t have an account?{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Register
              </a>
            </p>
          </div>
        </div>
      </section>

    </>
  );
};

export default Login;
