
import './App.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdPlay } from 'react-icons/io';
import { BiSolidMessageRounded } from 'react-icons/bi';

export default function App() {
  return (
    <>
      <div className="bi-message-rounded">
        <BiSolidMessageRounded className="message-icon" />
      </div>

      <div className="top-nav">
        <div>Customer Login</div>
        <div>Inugo CRM Login</div>
      </div>

      <nav>
        {/* <h1>digital55</h1> */}
        <img
          src="https://digital-55.com/wp-content/uploads/2021/12/digital-55_logo-bw-reverse.png"
          className="digital55-logo"
        />
        <GiHamburgerMenu className="burger-menu" />
        <div className="desktop-right-nav">
          <div>Services</div>
          <div>Works</div>
          <div>Company</div>
          <div>Contact</div>
        </div>
      </nav>

      <div className="main-wrapper">
        <main>
          <div className="main-top-div">
            <h2>
              Creative.<sup>01</sup>
            </h2>
            <h2>
              Marketing.<sup>02</sup>
            </h2>
            <h2>
              Technology.<sup>03</sup>
            </h2>
          </div>
          <IoMdPlay className="play" />
          <h3>
            We are <span className="photographers-text">photographers</span>
          </h3>
          <p className="lorem-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            repudiandae voluptate nobis a incidunt saepe, recusandae itaque esse
            vitae dolorum, molestiae quo expedita voluptatum laudantium aliquid
            commodi nostrum necessitatibus voluptates tempora vel error possimus
            officiis. Enim placeat, sequi a, beatae atque ex maiores odit ea
            pariatur earum optio. Illum, magni!
          </p>
          <button className="learn-more-btn">Learn more</button>
        </main>
      </div>
    </>
  );
}
