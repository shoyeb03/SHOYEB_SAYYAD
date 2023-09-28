import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { logos, socialMediaUrl } from "../Details";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { linkdein, github, instagram } = socialMediaUrl;
  const toggleClass = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="container mx-auto md:flex justify-between py-2 max-width">
      <div className="flex justify-between items-center py-2 md:py-10">
        <NavLink to="/">
          {/* <img className="w-14" src={logos.logogradient} alt="logo" /> */}
        </NavLink>
        <div onClick={toggleClass} className="cursor-pointer">
          <svg
            className="stroke-dark-heading dark:stroke-white md:hidden"
            width="25"
            height="20"
            viewBox="0 0 16 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.4375 1.3125H14.5625M1.4375 11.3125H14.5625H1.4375ZM1.4375 6.3125H14.5625H1.4375Z"
              strokeWidth="1.875"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <nav className={` ${!isOpen ? "hidden" : null} text-center md:flex justify-between`}>
        <ul className="dark:text-light-content font-medium md:flex items-center md:space-x-5 md:mr-10">
          <li className="pb-1 md:pb-0">
            <NavLink to="/" onClick={toggleClass}>
              Home
            </NavLink>
          </li>
          <li className="pb-1 md:pb-0">
            <NavLink to="/about" onClick={toggleClass}>
              About
            </NavLink>
          </li>
          <li className="pb-1 md:pb-0">
            <NavLink to="/technologies" onClick={toggleClass}>
              Technologies
            </NavLink>
          </li>
          <li className="pb-1 md:pb-0">
            <NavLink to="/projects" onClick={toggleClass}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={toggleClass}>
              Contact
            </NavLink>
          </li>
          {/* <li><a href="./Pavan_MG_Resume.pdf" download="" class="mt-5 md:mt-0 btn bg-greenbg text-green-text text-xs inline-block rounded-3xl px-3 py-1 min-w-fit">Download Resume</a></li> */}
        </ul>
        <ul className="flex justify-evenly items-center my-5 md:my-0 md:space-x-5 md:mr-5">
          <li>
            <a href={instagram} target="_blank" rel="noreferrer noopener" >
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIMAAACDCAMAAACZQ1hUAAAAY1BMVEX///8dHRsAAADKysrNzc3X19efn5/a2tobGxkYGBbp6ekPDwzz8/P8/Pzu7u7ExMRzc3MuLi1ERERqamllZWQFBQBXV1azs7OIiIh6enooKCePj4/g4OCrq6s1NTRdXVxLS0pBNFAvAAAElklEQVR4nO1a69aqIBBN8gZU6peYmpXv/5RHA+9oiGCts9i/vtXp6G4YZvZcDgcDAwMDAwMDA4P/GSfk2UcZ2B46qSBwvmV/BMiC/GW380YGTgYAhpY8IAYgczYwQCEhG97fAODwIkvhmANfAQXL8kF0lKPggi2HMAQErgyFFChjUANkMlZQSqEisdoSR9UUKhIrfQLl6nyhAYzW3Y5QvRnWuoQzGxbqmPMBszHNJ94KDhmXg1+9P7/e3WXcr3nFgxtY1hjizDsJvwp3grH/fAsxN7wB8dxx43Ag1h2J/4oDulscW4Kb8AMyPDXCtVjBoEZxnZoCCx/G6W/sVXDFD+hwmwR7+CeqJ9DYijiXy75OPjKoT0TP0xu5A+xTqESVs4SBdHLGoQ6Inqg95OCDjsItjD7GhyjsDs4Z+QSwBTmMckXnCw8iIqrqMPZoSY+eJceBXNnHqBQWFBAkTW6IB84lx8G32BEW+RpdRyLmfYXVPw05DuDOrDD28XkbVKG6uktNlrwPnibDwcfs95SCVgDlzQvi6gkkYeRJzxBSHHBIP3sIJnMSvlNCrcIaxwx7BpTi0FwKIuaO8MlO4IotSOif/ashx+E8ec4APoSwb+uUPSMALf/zRg4wpx+FPIes9YT1fD6tTi80HlwFp+4ce8FShgOmweEUTY8CAvx62AVCqLAfL0xjR/Pat+FgRMP2FW/iwH4XmhyFD/JHX6Je3HdR5uf0Gp3LmhKg3+hVKlIcaFEwzmIWxtNqwcXvsFCHtAvVxCxDuUo4OCMOoOQlc6esnSAP3fRJgwnw9HEACV+KnBJAPZV5j0YOIJn9r8nwi9o44LK1AgrSOHmlQauOTiXeg4OPG184pZWgwbiyfZQ2tJx+ZaGNQ1s/B7DVE9VfAfu0X6/r4tBEzlGLBLbSqR8VNXFo3hWMlKIPgokhNHHwMY19JzipHSD1iUvnEZo44Bf9DqdT1OTMpL0amjiwo0C8JMYkZCd3dHGgDwl4eoJ5hK2ZQ6OyuU07dhidktbDAT6pvWOepsHx+9/QszknvRwSLodkVw6vL9pBxB88zf7wC/diMT6w2kJ7fFiKk0zXa4+TC/nCouUQ0p4vWvkwzptwv7zZ6YfHjH6w9OuHGR1l7amjZvRk0wTeR09OdHW8v67+ifriQ521E4elelMbB/G6e8hBTd290H9w+/0H5FrTUQGgvrqx/7Dch0loH8azHwnm9HAV9WGE+lH+zPxKUT9qbV9uAEV9ubY/KTF/V9afXNun7ZtBVZ+27Vcna7cx1PWru759JNi3Z1DYt+/mFyj62vyim+Nckm/NcazvzLPscerZMtez5Dh8mG8W3hIKNfNNjXNeLDrn/YV5N3fuH6+e+8fT0Co+95/Zf0h33X+Y2QMhe+6BHDJuhqL7MOmHfZg0VrIPc/DInCbYtBeE1+wF/cJ+1OGiY08sX7lF+QP7cj+xNzh3N+QppJ9fybPE1/dIK5+Ivr5PW92OjKg4EIAz6b3iCl4GAJktYgQs8N6vXhWaOKj3zD/HxtmYqWDP/I1KOtlyKNTs2xsYGBgYGBgYGPws/gGlclHsKpKXOgAAAABJRU5ErkJggg==" alt=""  className="dark:fill-light-heading border-full fill-dark-heading"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none" 
                />
            </a>
          </li>
          <li>
            <a href={linkdein} target="_blank" rel="noreferrer noopener">
              <svg
                className="dark:fill-light-heading fill-dark-heading"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15 0.599976C7.04701 0.599976 0.600006 7.04698 0.600006 15C0.600006 22.953 7.04701 29.4 15 29.4C22.953 29.4 29.4 22.953 29.4 15C29.4 7.04698 22.953 0.599976 15 0.599976ZM11.475 20.9685H8.55901V11.5845H11.475V20.9685ZM9.99901 10.4325C9.07801 10.4325 8.48251 9.77997 8.48251 8.97297C8.48251 8.14948 9.09601 7.51648 10.0365 7.51648C10.977 7.51648 11.553 8.14948 11.571 8.97297C11.571 9.77997 10.977 10.4325 9.99901 10.4325ZM22.125 20.9685H19.209V15.768C19.209 14.5575 18.786 13.7355 17.7315 13.7355C16.926 13.7355 16.4475 14.292 16.236 14.8275C16.158 15.018 16.1385 15.288 16.1385 15.5565V20.967H13.221V14.577C13.221 13.4055 13.1835 12.426 13.1445 11.583H15.678L15.8115 12.8865H15.87C16.254 12.2745 17.1945 11.3715 18.768 11.3715C20.6865 11.3715 22.125 12.657 22.125 15.42V20.9685Z" />
              </svg>
            </a>
          </li>
          <li>
            <a href={github} target="_blank" rel="noreferrer noopener">
              <svg
                className="dark:fill-light-heading fill-dark-heading"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15 0C6.7125 0 0 6.7125 0 15C0 21.6375 4.29375 27.2437 10.2563 29.2313C11.0063 29.3625 11.2875 28.9125 11.2875 28.5188C11.2875 28.1625 11.2688 26.9813 11.2688 25.725C7.5 26.4188 6.525 24.8062 6.225 23.9625C6.05625 23.5312 5.325 22.2 4.6875 21.8438C4.1625 21.5625 3.4125 20.8687 4.66875 20.85C5.85 20.8313 6.69375 21.9375 6.975 22.3875C8.325 24.6562 10.4812 24.0187 11.3438 23.625C11.475 22.65 11.8688 21.9937 12.3 21.6187C8.9625 21.2437 5.475 19.95 5.475 14.2125C5.475 12.5813 6.05625 11.2313 7.0125 10.1813C6.8625 9.80625 6.3375 8.26875 7.1625 6.20625C7.1625 6.20625 8.41875 5.8125 11.2875 7.74375C12.4875 7.40625 13.7625 7.2375 15.0375 7.2375C16.3125 7.2375 17.5875 7.40625 18.7875 7.74375C21.6562 5.79375 22.9125 6.20625 22.9125 6.20625C23.7375 8.26875 23.2125 9.80625 23.0625 10.1813C24.0188 11.2313 24.6 12.5625 24.6 14.2125C24.6 19.9688 21.0938 21.2437 17.7563 21.6187C18.3 22.0875 18.7688 22.9875 18.7688 24.3937C18.7688 26.4 18.75 28.0125 18.75 28.5188C18.75 28.9125 19.0312 29.3813 19.7812 29.2313C22.759 28.2259 25.3465 26.3121 27.1796 23.7592C29.0127 21.2063 29.9991 18.1429 30 15C30 6.7125 23.2875 0 15 0Z"
                />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
