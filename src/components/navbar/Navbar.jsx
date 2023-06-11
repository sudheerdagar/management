
const Navbar = () => {

  return (
    <nav className="flex items-center justify-between bg-gray-800 py-4 px-6">
      <div className="flex items-center">
        {/* <img src="logo.png" alt="Logo" className="h-8 w-8" /> */}
        <h1 className="text-white ml-2 text-lg font-semibold">MyApp</h1>
      </div>
      <div className="flex items-center justify-center gap-3">
        <a href="#" className="text-white hover:text-gray-200">
          Home
        </a>
        <a href="#" className="text-white hover:text-gray-200">
          About
        </a>
        <a href="#" className="text-white hover:text-gray-200">
          Contact
        </a>
      </div>
      <div className="relative">
        <button
          type="button"
          className="flex items-center focus:outline-none"
        >
          <img
            alt="Profile"
            className="h-8 w-8 rounded-full mr-2"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 12a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
        </button>
       
          <div className="absolute top-full right-0 mt-2 w-24 bg-white rounded-md shadow-lg">
          
              {/* <div className="py-2">
                <button
                  type="button"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Sign out
                </button>
              </div> */}
            
              {/* <div className="py-2">
               
                  <button
                    type="button"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Login in
                  </button>
               
                  <button
                    type="button"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Sign up
                  </button>
               
              </div> */}
      </div>
      </div>
    </nav>
  );
};

export default Navbar;