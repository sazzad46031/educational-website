const Navbar = () => {
  return (
    <div className="fixed z-20 top-0 w-full bg-white">
      <div className="py-2 mx-80 flex items-center justify-between">
        <div>
            <img src="./public/psi-logo.svg" alt="" className="w-[197px] h-[60px" />      
        </div>
        <div>
        <div className="flex items-center gap-5 justify-end pb-1">
          <ul className="flex gap-5 uppercase text-xs text-[#1424A1] font-bold">
            <li>
              <a>Test Prep Store</a>
            </li>
            <li>
              <a>Become A Test Center</a>
            </li>
            <li>
              <a>Careers</a>
            </li>
          </ul>
          <span className="hover:bg-[#9E0442] hover:text-[#FFFFFF] p-2">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <div>
            <select
              className="border border-[#666666] px-4 py-2"
              name="options"
              id="options"
            >
              <option value="APAC">APAC</option>
              <option value="Americas">Americas</option>
              <option value="EMEA">EMEA</option>
            </select>
          </div>
        </div>
        <div className="flex gap-7 justify-end items-center">
            <ul className="flex gap-7 text-lg hover:text-[#9E0442] font-medium text-[#20262C">
                <li><a>Test Takers<i className="fa-solid fa-plus pl-2 text-xs"></i></a></li>
                <li><a>Test Sponsors<i className="fa-solid fa-plus pl-2 text-xs"></i></a></li>
                <li><a>About<i className="fa-solid fa-plus pl-2 text-xs"></i></a></li>
                <li><a>Knowledge Hub<i className="fa-solid fa-plus pl-2 text-xs"></i></a></li>
            </ul>
            <button className="bg-[#1424A1] hover:bg-[#9E0442] text-sm font-extrabold text-[#FFFFFF] pt-2 pr-5 pb-2 pl-5">Contact Us</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
