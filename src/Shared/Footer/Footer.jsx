const Footer = () => {
  return (
    <div className="pt-[6%]">
      <div className="flex justify-between px-20 pb-20">
        <div className="flex gap-40">
          <div>
            <p className="font-bold text-xl pb-5">Test Takers</p>
            <ul className="text-[#64686C] hover:text-[#9E0442] text-base font-light space-y-3">
              <li className="text-[#64686C] hover:text-[#9E0442]">
                <a>Find Your Test</a>
              </li>
              <li className="text-[#64686C] hover:text-[#9E0442]">
                <a>Test Taker Support</a>
              </li>
              <li className="text-[#64686C] hover:text-[#9E0442]">
                <a>Test Taker Resources</a>
              </li>
              <li className="text-[#64686C] hover:text-[#9E0442]">
                <a>
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>Test
                  Prep Store
                </a>
              </li>
            </ul>
            <p className="font-bold text-xl pb-5 pt-10">Knowledge Hub</p>
            <ul className="text-[#64686C] hover:text-[#9E0442] text-base font-light space-y-3">
              <li className="text-[#64686C] hover:text-[#9E0442]">
                <a>Blogs</a>
              </li>
              <li className="text-[#64686C] hover:text-[#9E0442]">
                <a>Resources</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-xl pb-5">Test Sponsors</p>
            <ul className="text-[#64686C] hover:text-[#9E0442] text-base font-light space-y-3">
              <li className="text-[#64686C] hover:text-[#9E0442]">
                <a>Test Delivery</a>
              </li>
              <li className="text-[#64686C] hover:text-[#9E0442]">
                <a>Test Development</a>
              </li>
              <li className="text-[#64686C] hover:text-[#9E0442]">
                <a>Test Security</a>
              </li>
              <li className="text-[#64686C] hover:text-[#9E0442]">
                <a>Grow Your Program</a>
              </li>
              <li className="text-[#64686C] hover:text-[#9E0442]">
                <a>Test Taker Experience</a>
              </li>
              <li className="text-[#64686C] hover:text-[#9E0442]">
                <a>Psi Programs</a>
              </li>
              <li className="text-[#64686C] hover:text-[#9E0442]">
                <a>Certification</a>
              </li>
              <li className="text-[#64686C] hover:text-[#9E0442]">
                <a>Licensure</a>
              </li>
              <li className="text-[#64686C] hover:text-[#9E0442]">
                <a>Higher Education</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-xl pb-5">About Psi</p>
            <ul className=" text-base font-light space-y-3"> 
              <li className="text-[#64686C] hover:text-[#9E0442]">
                <a>Customer Stories</a>
              </li>
              <li className="text-[#64686C] hover:text-[#9E0442]">
                <a>News & press Releases</a>
              </li>
              <li className="text-[#64686C] hover:text-[#9E0442]">
                <a>Events & Webinars</a>
              </li>
              <li className="text-[#64686C] hover:text-[#9E0442]">
                <a>Careers</a>
              </li>
              <li className="text-[#64686C] hover:text-[#9E0442]">
                <a>Our Team</a>
              </li>
              <li className="text-[#64686C] hover:text-[#9E0442]">
                <a>Office Locations</a>
              </li>
              <li className="text-[#64686C] hover:text-[#9E0442]">
                <a>Become a Test Center</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
            <div className="bg-[#002A4E] hover:bg-[#9E0442] text-white pt-32 pb-20 pl-12 pr-5">
                <h2 className="flex flex-row items-center gap-10 font-extrabold text-2xl">Get in touch<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none" className="text-yellow-500 hover:text-white w-[18px] h-[18px] flex flex-row"><path fillRule="evenodd" clipRule="evenodd" d="M27.1717 4H2.00015V0H34.0002V32H30.0002V6.82843L3.41436 33.4142L0.585938 30.5858L27.1717 4Z" fill="currentColor"></path></svg></h2>
                <p className="text-sm font-extralight pt-2">Whether you are test taker or test sponsor,<br></br> find answer to your questions.</p>
            </div>
            <p className="text-[#20262C] text-xl font-bold pt-6">Join our newsletter to stay tuned with the <br></br>latest insights.</p>
            <p className="text-[#33475b] text-base pt-2">Email<span className="text-red-500">*</span></p>
            <input type="text" placeholder="Enter Your Email" className="block bg-[#f5f8fa] border w-full px-2 py-2 rounded-sm border-[#c87872] focus:border-[rgba(82,168,236,0.8)] outline-none mb-10"/>
            <button className="bg-[#1424A1] hover:bg-[#9E0442] text-sm font-extrabold text-[#FFFFFF] pt-2 pr-5 pb-2 pl-5">Subscribe</button>
        </div>
      </div>
      <hr className="bg-[#64686C] h-[1px] border-0"></hr>
      <div className="flex justify-between px-20 items-center">
        <div className="flex items-center">
            <p className="mr-12">©2024 PSI Services LLC, All Rights Reserved.</p>
            <p className="mr-12">Follow Us</p>
            <span className="pl-4"><i className="fa-brands fa-x-twitter  rounded-full flex justify-center items-center w-[40px] h-[40px] bg-slate-200 hover:text-white hover:bg-[#9E0442]"></i></span>
            <span className="pl-4"><i className="fa-brands fa-linkedin-in  rounded-full flex justify-center items-center w-[40px] h-[40px] bg-slate-200 hover:text-white hover:bg-[#9E0442]"></i></span>
        </div>
        <div className="py-4">
            <img src="./public/footer.webp" alt="" />
            <div className="pt-5">
                <span className="border-r pr-5 text-[#002A4E] text-base hover:text-[#9E0442] font-medium">Privacy Policy</span>
                <span className="border-r pr-5 pl-5 text-base hover:text-[#9E0442] font-medium">Legal</span>
                <span className="pl-5 text-base hover:text-[#9E0442] font-medium">Cookies Policy</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
