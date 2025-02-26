const Navbar = () => {
  return (
    <div className="bg-amber-100 flex justify-between shadow-xl font-semibold">
      <div className="flex justify-between gap-14">
        <div className="m-4 flex gap-1">
          <img
            className="w-8"
            src="https://cdn-icons-png.freepik.com/256/942/942748.png?semt=ais_hybrid"
            alt="title-icon"
          ></img>
          <h1>ElevateCV</h1>
        </div>
        <div className="flex gap-10 m-4">
          <p>Dashboard</p>
          <p>Template</p>
          <p>About</p>
        </div>
      </div>
      <p className="m-4">Login</p>
    </div>
  );
};

export default Navbar;
