import { faArrowRight, faFileCode, faHandBackFist, faLaptop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import asset2 from "../assets/asset 2.svg";
import asset3 from "../assets/asset 3.png";
import asset4 from "../assets/asset 4.png";
import asset5 from "../assets/asset 5.png";
import asset6 from "../assets/asset 6.png";
import asset7 from "../assets/asset 7.png";
import asset8 from "../assets/asset 8.png";
import asset9 from "../assets/asset 9.png";
import asset10 from "../assets/asset 10.png";
import asset11 from "../assets/asset 11.png";
import asset12 from "../assets/asset 12.png";
import asset13 from "../assets/asset 13.png";
import asset14 from "../assets/asset 14.png";
import asset15 from "../assets/asset 15.png";
import asset16 from "../assets/asset 16.png";
import asset17 from "../assets/asset 17.png";
import asset18 from "../assets/asset 18.png";
import asset19 from "../assets/asset 19.png";
import asset20 from "../assets/asset 20.png";
import asset21 from "../assets/asset 21.png";
import asset22 from "../assets/asset 22.png";
import asset23 from "../assets/asset 23.png";
import asset24 from "../assets/asset 24.png";
import asset25 from "../assets/asset 25.png";
import asset26 from "../assets/asset 26.png";
import React from "react";
import { useEffect, useRef } from "react";

const HeroComp = () => {
	
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);

  useEffect(() => {
    const initialTranslateLTR = -48 * 4;
    const initialTranslateRTL = 36 * 4;

    function setupIntersectionObserver(element, isLTR, speed) {
      if (!element) return;

      function scrollHandler() {
        const translateX =
          (window.innerHeight - element.getBoundingClientRect().top) * speed;

        let totalTranslate = isLTR
          ? translateX + initialTranslateLTR
          : -(translateX + initialTranslateRTL);

        element.style.transform = `translateX(${totalTranslate}px)`;
      }

      const intersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.addEventListener("scroll", scrollHandler);
          } else {
            window.removeEventListener("scroll", scrollHandler);
          }
        });
      });

      intersectionObserver.observe(element);

      // Cleanup for this element
      return () => {
        window.removeEventListener("scroll", scrollHandler);
        intersectionObserver.disconnect();
      };
    }

    // Setup observers for all three lines
    const cleanups = [
      setupIntersectionObserver(line1Ref.current, true, 0.15),
      setupIntersectionObserver(line2Ref.current, false, 0.15),
      setupIntersectionObserver(line3Ref.current, true, 0.15),
    ];

    // Cleanup when component unmounts
    return () => {
      cleanups.forEach((cleanup) => cleanup && cleanup());
    };
  }, []);


	return (
		<div>
			<main>
				<div id="hero" className="min-h-screen bg-linear-to-b from-purple-50 via-orange-50 to-transparent">
					{/* from-blue-400 to-purple-600 */}
					<div id="hero-container" className="max-w-4xl mx-auto px-6 pt-6 pb-32 flex flex-col sm:items-center sm:text-center sm:pt-12">
						{/* VERSION BOX */}
						<div
							id="version-text"
							className="my-6 flex gap-2 items-center border border-yellow-300 bg-yellow-50 rounded-lg px-3 py-1 w-fit shadow-md hover:shadow-lg hover:-translate-y-1 transition group">
							<div className="w-2 h-2 bg-yellow-400 rounded-full border border-yellow-600"></div>
							<p className="font-display font-mono text-yellow-600">
								v0.21.1: <span className="text-yellow-800">Find-in-page bug fixes</span>
							</p>
							<FontAwesomeIcon icon={faArrowRight} className="text-yellow-600 group-hover:translate-x-1 transition duration-300" />
						</div>

						<div id="hero-features" className="hidden sm:flex gap-8 my-6">
							<div className="flex justify-center items-center gap-2 text-gray-500">
								<FontAwesomeIcon icon={faFileCode} className="text-sm" />
								<p>Code Optional</p>
							</div>
							<div className="flex justify-center items-center gap-2 text-gray-500">
								<FontAwesomeIcon icon={faHandBackFist} className="text-sm" />
								<p>Drag & Drop Builder</p>
							</div>
							<div className="flex justify-center items-center gap-2 text-gray-500">
								<FontAwesomeIcon icon={faLaptop} className="text-sm" />
								<p>Windows, Mac, Linux</p>
							</div>
						</div>

						<h1 className="text-4xl font-semibold leading-snug mt-4 sm:text-7xl sm:leading-normal">Web app to desktop app in minutes</h1>
						<p className="text-xl mt-4 sm:text-2xl sm:mt-8 text-gray-800">Take your web app codebase and transform it into a cross platform desktop app with native functionality.</p>
						<div id="buttons-container" className="mt-12 flex flex-col sm:flex-row gap-4">
							<button className="bg-primary text-white font-semibold px-8 py-3 rounded-lg hover:opacity-90 ">Downlaod Now</button>
							<button className="bg-white font-semibold px-8 py-3 rounded-lg border border-gray-400 hover:border-gray-800">Read Docs</button>
						</div>
					</div>
				</div>

				<div id="companies-container" className="flex flex-col gap-8">
					<div id="companies-title" className="flex justify-center gap-2 ">
						<img className="translate-y-2" src={asset2} alt="" />
						<span>APPS POWERED BY TODESKTOP</span>
						<img className="translate-y-2 -scale-x-100" src={asset2} alt="" />
					</div>

					<div id="companies-lines-group" className="flex flex-col gap-4">
						<div id="line1" className="flex gap-4 w-screen -translate-x-48 transition-transform ease-linear" ref={line1Ref}>
							<div className="flex flex-col min-w-24 min-h-24 items-center justify-center rounded-xl border border-gray-300 md:min-w-32 md:min-h-32">
								<img className="h-12 w-12 md:h-16 md:w-16" src={asset3} alt="" />
								<span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
							</div>
							<div className="flex flex-col min-w-24 min-h-24 items-center justify-center rounded-xl border border-gray-300 md:min-w-32 md:min-h-32">
								<img className="h-12 w-12 md:h-16 md:w-16" src={asset4} alt="" />
								<span className="text-[12px] md:text-[16px] font-semibold">LifeAt</span>
							</div>
							<div className="flex flex-col min-w-24 min-h-24 items-center justify-center rounded-xl border border-gray-300 md:min-w-32 md:min-h-32">
								<img className="h-12 w-12 md:h-16 md:w-16" src={asset5} alt="" />
								<span className="text-[12px] md:text-[16px] font-semibold">Convy</span>
							</div>
							<div className="flex flex-col min-w-24 min-h-24 items-center justify-center rounded-xl border border-gray-300 md:min-w-32 md:min-h-32">
								<img className="h-12 w-12 md:h-16 md:w-16" src={asset6} alt="" />
								<span className="text-[12px] md:text-[16px] font-semibold">Morgen</span>
							</div>
							<div className="flex flex-col min-w-24 min-h-24 items-center justify-center rounded-xl border border-gray-300 md:min-w-32 md:min-h-32">
								<img className="h-12 w-12 md:h-16 md:w-16" src={asset7} alt="" />
								<span className="text-[12px] md:text-[16px] font-semibold">Campsite</span>
							</div>
							<div className="flex flex-col min-w-24 min-h-24 items-center justify-center rounded-xl border border-gray-300 md:min-w-32 md:min-h-32">
								<img className="h-12 w-12 md:h-16 md:w-16" src={asset8} alt="" />
								<span className="text-[12px] md:text-[16px] font-semibold">Rise</span>
							</div>
							<div className="flex flex-col min-w-24 min-h-24 items-center justify-center rounded-xl border border-gray-300 md:min-w-32 md:min-h-32">
								<img className="h-12 w-12 md:h-16 md:w-16" src={asset9} alt="" />
								<span className="text-[12px] md:text-[16px] font-semibold">ClickUp</span>
							</div>
							<div className="flex flex-col min-w-24 min-h-24 items-center justify-center rounded-xl border border-gray-300 md:min-w-32 md:min-h-32">
								<img className="h-12 w-12 md:h-16 md:w-16" src={asset10} alt="" />
								<span className="text-[12px] md:text-[16px] font-semibold">Notion</span>
							</div>
							<div className="flex flex-col min-w-24 min-h-24 items-center justify-center rounded-xl border border-gray-300 md:min-w-32 md:min-h-32">
								<img className="h-12 w-12 md:h-16 md:w-16" src={asset11} alt="" />
								<span className="text-[12px] md:text-[16px] font-semibold">Sunsama</span>
							</div>
							<div className="flex flex-col min-w-24 min-h-24 items-center justify-center rounded-xl border border-gray-300 md:min-w-32 md:min-h-32">
								<img className="h-12 w-12 md:h-16 md:w-16" src={asset12} alt="" />
								<span className="text-[12px] md:text-[16px] font-semibold">Beeper</span>
							</div>
							<div className="flex flex-col min-w-24 min-h-24 items-center justify-center rounded-xl border border-gray-300 md:min-w-32 md:min-h-32">
								<img className="h-12 w-12 md:h-16 md:w-16" src={asset13} alt="" />
								<span className="text-[12px] md:text-[16px] font-semibold">Cal</span>
							</div>
							<div className="flex flex-col min-w-24 min-h-24 items-center justify-center rounded-xl border border-gray-300 md:min-w-32 md:min-h-32">
								<img className="h-12 w-12 md:h-16 md:w-16" src={asset14} alt="" />
								<span className="text-[12px] md:text-[16px] font-semibold">Webstudio</span>
							</div>
						</div>
						<div id="line2" className="flex gap-4 w-screen -translate-x-36 transition-transform ease-linear" ref={line2Ref}>
							<div className="flex flex-col min-w-24 min-h-24 items-center justify-center rounded-xl border border-gray-300 md:min-w-32 md:min-h-32">
								<img className="h-12 w-12 md:h-16 md:w-16" src={asset15} alt="" />
								<span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
							</div>
							<div className="flex flex-col min-w-24 min-h-24 items-center justify-center rounded-xl border border-gray-300 md:min-w-32 md:min-h-32">
								<img className="h-12 w-12 md:h-16 md:w-16" src={asset16} alt="" />
								<span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
							</div>
							<div className="flex flex-col min-w-24 min-h-24 items-center justify-center rounded-xl border border-gray-300 md:min-w-32 md:min-h-32">
								<img className="h-12 w-12 md:h-16 md:w-16" src={asset17} alt="" />
								<span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
							</div>
							<div className="flex flex-col min-w-24 min-h-24 items-center justify-center rounded-xl border border-gray-300 md:min-w-32 md:min-h-32">
								<img className="h-12 w-12 md:h-16 md:w-16" src={asset18} alt="" />
								<span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
							</div>
							<div className="flex flex-col min-w-24 min-h-24 items-center justify-center rounded-xl border border-gray-300 md:min-w-32 md:min-h-32">
								<img className="h-12 w-12 md:h-16 md:w-16" src={asset19} alt="" />
								<span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
							</div>
							<div className="flex flex-col min-w-24 min-h-24 items-center justify-center rounded-xl border border-gray-300 md:min-w-32 md:min-h-32">
								<img className="h-12 w-12 md:h-16 md:w-16" src={asset20} alt="" />
								<span className="text-[12px] md:text-[16px] font-semibold">Moises</span>
							</div>
							<div className="flex flex-col min-w-24 min-h-24 items-center justify-center rounded-xl border border-gray-300 md:min-w-32 md:min-h-32">
								<img className="h-12 w-12 md:h-16 md:w-16" src={asset21} alt="" />
								<span className="text-[12px] md:text-[16px] font-semibold">Basedash</span>
							</div>
							<div className="flex flex-col min-w-24 min-h-24 items-center justify-center rounded-xl border border-gray-300 md:min-w-32 md:min-h-32">
								<img className="h-12 w-12 md:h-16 md:w-16" src={asset22} alt="" />
								<span className="text-[12px] md:text-[16px] font-semibold">Cursor</span>
							</div>
							<div className="flex flex-col min-w-24 min-h-24 items-center justify-center rounded-xl border border-gray-300 md:min-w-32 md:min-h-32">
								<img className="h-12 w-12 md:h-16 md:w-16" src={asset23} alt="" />
								<span className="text-[12px] md:text-[16px] font-semibold">Linear</span>
							</div>
							<div className="flex flex-col min-w-24 min-h-24 items-center justify-center rounded-xl border border-gray-300 md:min-w-32 md:min-h-32">
								<img className="h-12 w-12 md:h-16 md:w-16" src={asset24} alt="" />
								<span className="text-[12px] md:text-[16px] font-semibold">Voiceflow</span>
							</div>
							<div className="flex flex-col min-w-24 min-h-24 items-center justify-center rounded-xl border border-gray-300 md:min-w-32 md:min-h-32">
								<img className="h-12 w-12 md:h-16 md:w-16" src={asset25} alt="" />
								<span className="text-[12px] md:text-[16px] font-semibold">Kitemaker</span>
							</div>
							<div className="flex flex-col min-w-24 min-h-24 items-center justify-center rounded-xl border border-gray-300 md:min-w-32 md:min-h-32">
								<img className="h-12 w-12 md:h-16 md:w-16" src={asset26} alt="" />
								<span className="text-[12px] md:text-[16px] font-semibold">Cron</span>
							</div>
						</div>
						<div id="line3" className="flex md:hidden gap-4 w-screen -translate-x-48 transition-transform ease-linear" ref={line3Ref}>
							<div className="flex flex-col min-w-24 min-h-24 items-center justify-center rounded-xl border border-gray-300 md:min-w-32 md:min-h-32">
								<img className="h-12 w-12 md:h-16 md:w-16" src={asset4} alt="" />
								<span className="text-[12px] md:text-[16px] font-semibold">LifeAt</span>
							</div>
							<div className="flex flex-col min-w-24 min-h-24 items-center justify-center rounded-xl border border-gray-300 md:min-w-32 md:min-h-32">
								<img className="h-12 w-12 md:h-16 md:w-16" src={asset6} alt="" />
								<span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
							</div>
							<div className="flex flex-col min-w-24 min-h-24 items-center justify-center rounded-xl border border-gray-300 md:min-w-32 md:min-h-32">
								<img className="h-12 w-12 md:h-16 md:w-16" src={asset8} alt="" />
								<span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
							</div>
							<div className="flex flex-col min-w-24 min-h-24 items-center justify-center rounded-xl border border-gray-300 md:min-w-32 md:min-h-32">
								<img className="h-12 w-12 md:h-16 md:w-16" src={asset10} alt="" />
								<span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
							</div>
							<div className="flex flex-col min-w-24 min-h-24 items-center justify-center rounded-xl border border-gray-300 md:min-w-32 md:min-h-32">
								<img className="h-12 w-12 md:h-16 md:w-16" src={asset12} alt="" />
								<span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
							</div>
							<div className="flex flex-col min-w-24 min-h-24 items-center justify-center rounded-xl border border-gray-300 md:min-w-32 md:min-h-32">
								<img className="h-12 w-12 md:h-16 md:w-16" src={asset14} alt="" />
								<span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
							</div>
							<div className="flex flex-col min-w-24 min-h-24 items-center justify-center rounded-xl border border-gray-300 md:min-w-32 md:min-h-32">
								<img className="h-12 w-12 md:h-16 md:w-16" src={asset16} alt="" />
								<span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
							</div>
							<div className="flex flex-col min-w-24 min-h-24 items-center justify-center rounded-xl border border-gray-300 md:min-w-32 md:min-h-32">
								<img className="h-12 w-12 md:h-16 md:w-16" src={asset18} alt="" />
								<span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
							</div>
							<div className="flex flex-col min-w-24 min-h-24 items-center justify-center rounded-xl border border-gray-300 md:min-w-32 md:min-h-32">
								<img className="h-12 w-12 md:h-16 md:w-16" src={asset20} alt="" />
								<span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
							</div>
							<div className="flex flex-col min-w-24 min-h-24 items-center justify-center rounded-xl border border-gray-300 md:min-w-32 md:min-h-32">
								<img className="h-12 w-12 md:h-16 md:w-16" src={asset22} alt="" />
								<span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
							</div>
							<div className="flex flex-col min-w-24 min-h-24 items-center justify-center rounded-xl border border-gray-300 md:min-w-32 md:min-h-32">
								<img className="h-12 w-12 md:h-16 md:w-16" src={asset24} alt="" />
								<span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
							</div>
							<div className="flex flex-col min-w-24 min-h-24 items-center justify-center rounded-xl border border-gray-300 md:min-w-32 md:min-h-32">
								<img className="h-12 w-12 md:h-16 md:w-16" src={asset26} alt="" />
								<span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
							</div>
						</div>
					</div>
				</div>

				<div className="h-250"></div>
			</main>
		</div>
	);
};

export default HeroComp;
