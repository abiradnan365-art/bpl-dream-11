import bgShadow from "../assets/bg-shadow.png";
import Flogo from "../assets/logo-footer.png"
function Footer() {
  return (
    <footer className="relative mt-32 bg-[#050817] text-white">

      {/* Newsletter */}
      <div className="absolute left-1/2 -top-24 w-[90%] max-w-5xl -translate-x-1/2">

        <div
          className="rounded-xl px-6 py-8 bg-white"
          style={{
            backgroundImage: `url(${bgShadow})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >

          <div className="text-center">

            <h2 className="text-xl font-bold text-black">
              Subscribe to our Newsletter
            </h2>

            <p className="mt-2 text-xs text-gray-600">
              Get the latest updates and news right in your inbox!
            </p>

            <div className="mx-auto mt-4 flex max-w-sm">

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full text-black rounded-l-md border border-gray-200 px-3 py-2 text-xs outline-none"
              />

              <button
                className="rounded-r-md bg-gradient-to-r from-yellow-400 to-pink-400 px-4 py-2 text-xs font-semibold text-black"
              >
                Subscribe
              </button>

            </div>

          </div>

        </div>
      </div>


      {/* Main Footer */}
      <div className="mx-auto max-w-6xl px-6 pb-8 pt-28">

        {/* Logo */}
        <div className="mb-8 flex justify-center">

          <img
            src={Flogo}
            alt="Cricket"
            className="h-20 w-20 object-contain"
          />

        </div>


        {/* Footer Columns */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">

          {/* About Us */}
          <div>

            <h3 className="mb-3 text-sm font-semibold">
              About Us
            </h3>

            <p className="max-w-xs text-xs leading-5 text-gray-400">
              We are a passionate team dedicated to providing the best
              services to our customers.
            </p>

          </div>


          {/* Quick Links */}
          <div>

            <h3 className="mb-3 text-sm font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-2 text-xs text-gray-400">

              <li>
                <a href="#" className="hover:text-white">
                  • Home
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  • Services
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  • About
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  • Contact
                </a>
              </li>

            </ul>

          </div>


          {/* Subscribe */}
          <div>

            <h3 className="mb-3 text-sm font-semibold">
              Subscribe
            </h3>

            <p className="mb-3 max-w-xs text-xs leading-5 text-gray-400">
              Subscribe to our newsletter for the latest updates.
            </p>

            <div className="flex max-w-sm">

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-l-md px-3 py-2 text-xs text-gray-700 outline-none"
              />

              <button className="rounded-r-md bg-gradient-to-r from-yellow-400 to-pink-400 px-4 py-2 text-xs font-semibold text-black">
                Subscribe
              </button>

            </div>

          </div>

        </div>

      </div>


      {/* Copyright */}
      <div className="border-t border-gray-800 py-4 text-center">

        <p className="text-xs text-gray-500">
          ©2024 Your Company All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;