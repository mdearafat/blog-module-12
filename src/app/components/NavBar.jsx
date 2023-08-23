const Header = () => {
  return (
    <header className="bg-white">
      <div className=" max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div>
            <h2 className="text-xl text-black">MyDailyUpdate</h2>
          </div>
          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-black text-md">
                <li>Home</li>
                <li>Blog</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
