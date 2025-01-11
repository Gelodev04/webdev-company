

function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-5 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-bold">WebCrafter</h1>
            <p className="text-gray-400">© 2023 WebCrafter. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#home" className="text-gray-400 hover:text-white">Home</a>
            <a href="#aboutus" className="text-gray-400 hover:text-white">About</a>
            <a href="#services" className="text-gray-400 hover:text-white">Services</a>
            <a href="#contact" className="text-gray-400 hover:text-white">Contact</a>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .733.592 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.312h3.587l-.467 3.622h-3.12v9.294h6.116c.733 0 1.325-.591 1.325-1.324v-21.351c0-.733-.592-1.325-1.325-1.325z"/>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.723-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .386.044.762.127 1.124-4.087-.205-7.713-2.164-10.141-5.144-.423.725-.666 1.562-.666 2.457 0 1.694.863 3.188 2.175 4.065-.802-.026-1.555-.246-2.213-.616v.062c0 2.366 1.684 4.342 3.918 4.788-.41.111-.843.171-1.287.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.6 3.417-1.68 1.319-3.809 2.105-6.115 2.105-.398 0-.79-.023-1.175-.068 2.179 1.397 4.768 2.212 7.548 2.212 9.057 0 14.01-7.507 14.01-14.01 0-.213-.005-.426-.014-.637.961-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.23 0h-20.46c-.974 0-1.77.796-1.77 1.77v20.459c0 .974.796 1.771 1.77 1.771h20.459c.974 0 1.771-.797 1.771-1.771v-20.459c0-.974-.797-1.77-1.771-1.77zm-14.769 20.452h-3.077v-10.769h3.077v10.769zm-1.538-12.308c-.987 0-1.788-.801-1.788-1.788s.801-1.788 1.788-1.788 1.788.801 1.788 1.788-.801 1.788-1.788 1.788zm13.846 12.308h-3.077v-5.385c0-1.282-.026-2.933-1.788-2.933-1.788 0-2.062 1.396-2.062 2.837v5.481h-3.077v-10.769h2.949v1.474h.042c.41-.776 1.41-1.595 2.903-1.595 3.102 0 3.677 2.042 3.677 4.697v6.193z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;