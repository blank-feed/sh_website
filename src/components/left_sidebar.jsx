import Leftsidebar_button from '../components/leftsidebar_button';
import pulse from "../assets/pulse.png";
import user from "../assets/user.png";
import briefcase from "../assets/briefcase.png";
import home from "../assets/home.png";

export default function Left_sidebar() {
  return (
    <div>
        <Leftsidebar_button to = "/" label = "Home" icon = {home} />
        <Leftsidebar_button to = "/profile" label = "About Me" icon = {user} />
        <Leftsidebar_button to = "/experience" label = "Experiences" icon = {briefcase} />
        <Leftsidebar_button to = "/project" label = "Projects" icon = {pulse} />
    </div>
    );
}