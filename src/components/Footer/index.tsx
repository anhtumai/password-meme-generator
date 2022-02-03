function Footer() {
  return (
    <footer className="text-center text-white bg-emerald-600">
      <div className="py-4">
        <div className="">
          <p className="flex justify-center items-center">
            <span className="mr-4">Follow me</span>
            <a
              href="https://github.com/anhtumai"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github fa-2x"></i>
            </a>
          </p>
        </div>
      </div>

      <div
        className="text-center p-4"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.2)",
        }}
      >
        <span className="mr-2">Link to</span>
        <a
          className="inline-block px-3 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          href="https://github.com/anhtumai/password-meme-generator"
          target="_blank"
          rel="noreferrer"
        >
          Source code
        </a>
      </div>
    </footer>
  );
}

export default Footer;
