import gmail from "../assets/gmail.png";
import linkedin from "../assets/linkedin.png";

export default function ContactSection() {
  return (
    <div
      className="post bg-gray-500 w-3/4 h-36 
                 rounded-2xl flex flex-col items-center mt-6 ml-6"
    >
      <p className="text-black text-xl mt-4 font-bold">
        CONTACT ME
      </p>

      <div className="flex-1 w-full flex justify-center items-center mt-4 gap-12">
        <a href="https://mail.google.com/mail/?view=cm&to=shenghengpf84@gmail.com" target="_blank" rel="noopener noreferrer">
          <img
            src={gmail}
            alt="Email"
            className="w-12 h-12 hover:opacity-80 transition-opacity"
          />
        </a>

        <a href="https://www.linkedin.com/in/ang-sheng-heng-68763b259/" target="_blank" rel="noopener noreferrer">
          <img
            src={linkedin}
            alt="LinkedIn"
            className="w-12 h-12 hover:opacity-80 transition-opacity"
          />
        </a>
      </div>
    </div>
  );
}
