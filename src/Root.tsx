import { Link, Outlet } from "react-router-dom";
// import DevsUnifyLogo from "./assets/logo"
import OutlineDevsUnifyLogo from "./assets/logo-outline";

import DiscordIcon from "./assets/icons/discordIcon";
import GithubIcon from "./assets/icons/githubIcon";
import InstagramIcon from "./assets/icons/instagram";
import TelegramIcon from "./assets/icons/telegram";
import TwitterIcon from "./assets/icons/twitter";

const Navbar = () => {
  return (
    <div className="w-full bg-primary-dark px-[14.6435%] py-[12px] flex flex-row gap-[1.2%] items-center">
      <div className="flex flex-row items-center justify-between w-[200px] text-[24px] font-jetmono text-white">
        <OutlineDevsUnifyLogo />
        DevsUnify
      </div>
      <div className="flex-1">
        <ul className="flex justify-center gap-12 text-white font-k2d text-lg">
          <li>About</li>
          <li>Projects</li>
          <li>Events</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="px-4 py-2 bg-secondary-accent rounded-2xl text-white text-lg font-k2d">
        Join Us
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="w-full bg-primary-dark px-[14.6435%] py-[12px] flex flex-row gap-[1.2%] items-center justify-center">
      <ul className="flex flex-row gap-5">
        <li>
          <Link to='https://t.me/devsunify' target="_blank">
            <TelegramIcon color="white" height={24} />
          </Link>
        </li>
        <li>
          <Link to='https://discord.gg/nqWCAQ52uu' target="_blank">
            <DiscordIcon color="white" height={24} />
          </Link>
        </li>
        <li>
          <Link to='https://twitter.com/UnifyDevs' target="_blank">
            <TwitterIcon color="white" height={24} />
          </Link>
        </li>
        <li>
          <Link to='https://www.instagram.com/devsunify' target="_blank">
            <InstagramIcon color="white" height={24} />
          </Link>
        </li>
        <li>
          <Link to='https://github.com/devsunify' target="_blank">
            <GithubIcon color="white" height={24} />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default function Root() {
  return (
    <div className="flex flex-col w-screen h-screen fixed">
      <Navbar />
      <div className="flex-1 bg-secondary-dark">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
