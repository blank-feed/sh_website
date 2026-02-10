import { useNavigate } from "react-router-dom";

export default function Leftsidebar_button({ to, label, icon }) {
  const navigate = useNavigate();

  return (
    <div className="mt-10 w-full flex justify-end">
      <div
        onClick={() => navigate(to)}
        className="
          h-12
          w-12 lg:w-55
          rounded-full cursor-pointer
          bg-gray-500 hover:bg-gray-600 transition
          flex items-center
          justify-center 
          px-0 lg:px-5
          gap-0 lg:gap-4
        "
      >
        <img src={icon} alt="icon" className="w-6 h-6" />

        <span className="
          hidden lg:inline text-lg font-bold text-black
        ">
          {label}
        </span>
      </div>
    </div>
  );
}
