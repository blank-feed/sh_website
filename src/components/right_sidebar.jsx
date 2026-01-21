import ResumeSection from "../components/resumesect";
import LatestProj from "../components/latestproj";
import ContactSection from "../components/contactsect";

export default function Right_sidebar() {
  return (
    <div>
        <ResumeSection />
        <LatestProj />
        <ContactSection/>
    </div>
    );
}