import React from "react";
import asset0 from "../assets/asset 0.png";
import asset1 from "../assets/asset 1.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const NavbarComp = () => {
	function handleMenu() {
		const navDialog = document.getElementById("nav-dialog");
		navDialog.classList.toggle("hidden");
	}
	return (
		<div>
			<nav className="p-3 flex justify-between items-center bg-white">
				<a href="#" id="brand" className="flex gap-2 items-center">
					<img className="object-cover max-w-12 max-h-12" src={asset0} alt="kk" />
					<span className="text-lg font-medium font-display">Todesktop</span>
				</a>

				<div className="hidden lg:flex gap-12 items-center">
					<a href="#" className="font-medium hover:text-primary ">
						Pricing
					</a>
					<a href="#" className="font-medium hover:text-primary ">
						Docs
					</a>
					<a href="#" className="font-medium hover:text-primary ">
						Changelog
					</a>
					<a href="#" className="font-medium hover:text-primary ">
						Blogs
					</a>
					<a href="#" className="font-medium hover:text-primary ">
						Login
					</a>
				</div>

				<button className="hidden lg:flex gap-2 items-center border border-gray-400 rounded-lg hover:border-gray-600 px-6 py-2">
					<img src={asset1} alt="" />
					<span>Electron Developers</span>
					<FontAwesomeIcon icon={faArrowRight} />
				</button>

        <div className="lg:hidden min-[578px]:text-2xl text-cyan-500 font-EBGaramond-Regular rounded-sm shadow-md max-[381px]:p1 min-[382px]:p-3 hover:bg-gray-50 w-fit flex justify-center max-[577px]:text-[12px]">
          Welcome<span className="max-[366px]:hidden">&nbsp;to the house</span>
        </div>

        {/* max-[423px]:w-3/10 min-[424px]:w-5/10 */}

				<button className="p-2 lg:hidden" onClick={handleMenu}>
					<i className='<i class="fa-solid fa-bars"></i>'></i>
					<FontAwesomeIcon icon={faBars} className="text-gray-600" />
				</button>

        {/* Mobile Menu */}
				<div id="nav-dialog" className="hidden lg:hidden fixed bg-white inset-0">
					<div id="nav-bar" className="p-3 flex justify-between">
						<a href="#" id="brand" className="flex gap-2 items-center">
							<img className="object-cover max-w-12 max-h-12" src={asset0} alt="kk" />
							<span className="text-lg font-medium font-display">Todesktop</span>
						</a>
						<button className="p-2" onClick={handleMenu}>
							<i className='<i class="fa-solid fa-bars"></i>'></i>
							<FontAwesomeIcon icon={faXmark} className="text-gray-600" />
						</button>
					</div>

					<div className="mt-6 ">
						<a href="#" className="m-3 p-3 hover:bg-gray-50 block rounded-lg ">
							Pricing
						</a>
						<a href="#" className="m-3 p-3 hover:bg-gray-50 block rounded-lg ">
							Docs
						</a>
						<a href="#" className="m-3 p-3 hover:bg-gray-50 block rounded-lg ">
							Changelog
						</a>
						<a href="#" className="m-3 p-3 hover:bg-gray-50 block rounded-lg ">
							Blogs
						</a>
						<a href="#" className="m-3 p-3 hover:bg-gray-50 block rounded-lg ">
							Login
						</a>
					</div>

					<div className="h-px bg-gray-300"></div>

					<button className="flex gap-2 items-center rounded-lg hover:bg-gray-50 px-6 py-4 mt-6 m-3 w-full ">
						<img src={asset1} alt="" />
						<span>Electron Developers</span>
					</button>
				</div>
			</nav>
		</div>
	);
};

export default NavbarComp;
