const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center text-sm py-4 mt-auto shadow-inner">
      <p className="text-gray-600">
        &copy; {new Date().getFullYear()} ResQnode. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;