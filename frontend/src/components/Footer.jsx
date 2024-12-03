const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex justify-center gap-6 mb-4">
          <a href="/about" className="hover:underline">
            About Us
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
          <a href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="hover:underline">
            Terms of Service
          </a>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Netflix. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
