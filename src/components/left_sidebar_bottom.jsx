import Leftsidebar_button from './leftsidebar_button';
import pulse from "../assets/pulse.png";
import user from "../assets/user.png";
import briefcase from "../assets/briefcase.png";
import home from "../assets/home.png";

export default function Left_sidebar_bottom() {
  return (
    <div className="flex justify-around w-full">
        <Leftsidebar_button to = "/" label = "" icon = {home} />
        <Leftsidebar_button to = "/profile" label = "" icon = {user} />
        <Leftsidebar_button to = "/experience" label = "" icon = {briefcase} />
        <Leftsidebar_button to = "/project" label = "" icon = {pulse} />
    </div>
    );
}