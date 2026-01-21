import Leftsidebar_button from '../components/leftsidebar_button';
import pfp from "../assets/pfp.png"

export default function Left_sidebar() {
  return (
    <div>
        <Leftsidebar_button to = "/" label = "Home" icon = {pfp} />
        <Leftsidebar_button to = "/profile" label = "About Me" icon = {pfp} />
        <Leftsidebar_button to = "/experience" label = "Experiences" icon = {pfp} />
        <Leftsidebar_button to = "/project" label = "Projects" icon = {pfp} />
    </div>
    );
}