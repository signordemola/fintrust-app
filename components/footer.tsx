import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-background/95 relative">
      <div className="absolute inset-0 bg-pattern-dots opacity-5"></div>
      <div className="relative container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <div className="flex items-center">
                <Image
                  src="/images/logo-100.png"
                  alt="FinTrust Credit Union"
                  width={60}
                  height={60}
                  className="h-14 md:h-16 lg:h-20 w-auto max-w-[320px] transition-all duration-300"
                />
              </div>
            </Link>
            <p className="text-muted-foreground text-sm">
              <span className="mb-2 block">
                Providing trusted financial services
              </span>
              <span>& personalized solutions since 1973.</span>
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary-500 transition-colors"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary-500 transition-colors"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary-500 transition-colors"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary-500 transition-colors"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="flex justify-between">
            <div>
              <h3 className="text-foreground font-semibold mb-4">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    className="text-muted-foreground hover:text-primary-500 transition-colors"
                    href="/about"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-muted-foreground hover:text-primary-500 transition-colors"
                    href="/contact"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-muted-foreground hover:text-primary-500 transition-colors"
                    href="#"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-muted-foreground hover:text-primary-500 transition-colors"
                    href="#"
                  >
                    Security
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-foreground font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:support@fintrustcu.com"
                    className="flex items-center text-muted-foreground hover:text-primary-500 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="h-5 w-5 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      ></path>
                    </svg>
                    support@fintrustcu.com
                  </a>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center text-muted-foreground hover:text-primary-500 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="h-5 w-5 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      ></path>
                    </svg>
                    Find a Branch
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="relative border-t border-border-color">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <svg
                width="40"
                height="40"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z"
                  fill="#123524"
                ></path>
                <path
                  d="M50 10L83.3 30V70L50 90L16.7 70V30L50 10Z"
                  fill="white"
                ></path>
                <text
                  x="50"
                  y="55"
                  textAnchor="middle"
                  fill="#123524"
                  fontSize="24"
                  fontWeight="bold"
                >
                  NCUA
                </text>
                <text
                  x="50"
                  y="70"
                  textAnchor="middle"
                  fill="#123524"
                  fontSize="12"
                >
                  INSURED
                </text>
              </svg>
              <div className="text-sm text-muted-foreground">
                <div>NCUA Insured</div>
                <div>Equal Housing Lender</div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-muted-foreground">
              <Link
                className="hover:text-primary-500 transition-colors"
                href="#"
              >
                Privacy Policy
              </Link>
              <Link
                className="hover:text-primary-500 transition-colors"
                href="#"
              >
                Terms of Service
              </Link>
              <Link
                className="hover:text-primary-500 transition-colors"
                href="#"
              >
                Accessibility
              </Link>
            </div>
            <div className="text-sm text-muted-foreground">
              © {year} FinTrust Credit Union
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
