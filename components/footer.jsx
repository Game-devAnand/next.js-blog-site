function Footer() {
  return (
    <footer className="bg-black text-white p-4 text-start pt-10 pb-15 flex flex-col items-center justify-center">
      {/* Add your footer content here */}
      <div className="flex flex-col space-y-2 items-center text-center">
        <p>© 2024 Your Blog Project. All rights reserved.</p>
        <a href="mailto:youremail@example.com" className="hover:underline">
          Contact Us
        </a>
        <ul className="flex space-x-4 text-sm">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Terms</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
