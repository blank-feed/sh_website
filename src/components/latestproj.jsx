import { useNavigate } from 'react-router-dom';

export default function LatestProj({}) {
    const navigate = useNavigate();
  return (
        <div className="post bg-gray-500 w-3/4 h-96 rounded-2xl flex flex-col items-center mt-6 ml-6
            cursor-pointer hover:bg-gray-600 transition" onClick={() => navigate("/project")}>
              <h2 className = "text-xl mt-5 text-black text-bold">Latest Ongoing Project :</h2>
        </div>
  );
}