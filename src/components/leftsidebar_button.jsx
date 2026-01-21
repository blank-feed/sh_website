import { useNavigate } from "react-router-dom";

export default function Leftsidebar_button({ to, label, icon }) {
  const navigate = useNavigate();

  return (
    <div className="mt-10 w-45/100 ml-auto">
      <div
        onClick={() => navigate(to)}
        className="bg-gray-500 hover:bg-gray-600 transition 
                   h-12 rounded-2xl flex items-center cursor-pointer px-4"
      >
        {icon && (
          <img src={icon} alt="icon" className="w-6 h-6 object-cover rounded-full" />
        )}

        <span className="text-xl font-bold ml-auto text-black">{label}</span>
      </div>
    </div>
  );
}
