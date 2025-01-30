const Footer = () => {
  return (
      <footer className="bg-orange-600 text-white py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Footer Content */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* About Section */}
                  <div>
                      <h3 className="text-lg font-bold mb-4">About Us</h3>
                      <p className="text-sm">
                          We are committed to delivering the best services for our customers. Thank you for choosing us for your journey.
                      </p>
                  </div>

                  {/* Navigation Links */}
                  <div>
                      <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                      <ul className="space-y-2">
                          <li>
                              <a href="/" className="hover:underline">
                                  Home
                              </a>
                          </li>
                          <li>
                              <a href="/about" className="hover:underline">
                                  About
                              </a>
                          </li>
                          <li>
                              <a href="/" className="hover:underline">
                                  Services
                              </a>
                          </li>
                          <li>
                              <a href="/contact" className="hover:underline">
                                  Contact
                              </a>
                          </li>
                      </ul>
                  </div>

                  {/* Social Media Links */}
                  <div>
                      <h3 className="text-lg font-bold mb-4">Follow Us</h3>
                      <div className="flex space-x-4">
                          <a
                              href="https://www.facebook.com/anurag.psingh11"
                              className="p-2 bg-white text-orange-600 rounded-full hover:bg-orange-500 hover:text-white transition"
                          >
                              <i className="fab fa-facebook-f"></i>
                          </a>
                          <a
                              href="https://x.com/Anuraag_Rajawat"
                              className="p-2 bg-white text-orange-600 rounded-full hover:bg-orange-500 hover:text-white transition"
                          >
                              <i className="fab fa-twitter"></i>
                          </a>
                          <a
                              href="https://instagram.com/anuragrajawat"
                              className="p-2 bg-white text-orange-600 rounded-full hover:bg-orange-500 hover:text-white transition"
                          >
                              <i className="fab fa-instagram"></i>
                          </a>
                          <a
                              href="https://linked.com/in/anuragrajawat"
                              className="p-2 bg-white text-orange-600 rounded-full hover:bg-orange-500 hover:text-white transition"
                          >
                              <i className="fab fa-linkedin-in"></i>
                          </a>
                      </div>
                  </div>
              </div>

              {/* Footer Bottom */}
              <div className="mt-10 border-t border-orange-500 pt-4 text-center">
                  <p className="text-sm">
                      © {new Date().getFullYear()} Food Panda. All rights reserved.
                  </p>
              </div>
          </div>
      </footer>
  );
};

export default Footer;
