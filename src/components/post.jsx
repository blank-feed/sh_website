import { useNavigate } from "react-router-dom";
import pfp from "../assets/pfp.png"

export default function Post({ content, postpic, link }) {
  const navigate = useNavigate();
  const username = "shengheng";
  const PFP = pfp

  const isClickable = Boolean(link);

  return (
    <div
      className={`
        post bg-gray-500 w-3/4 rounded-2xl p-4 z-10
        ${isClickable ? "cursor-pointer hover:bg-gray-600 transition" : ""}
      `}
      onClick={isClickable ? () => navigate(link) : undefined}
    >
      <div className="flex items-start">
        <img
          src={PFP}
          alt="pfp"
          className="w-12 h-12 rounded-full object-cover"
        />

        <div className="ml-4 flex-1">
          <p className="text-gray-375">
            <span className="font-bold text-lg">{username}</span> @sheng_da_heng
          </p>

          <p className="mt-1 text-gray-375 whitespace-pre-line">
            {content}
          </p>

          {postpic && (
            <img
              src={postpic}
              alt="post"
              className="mt-3 max-w-md rounded-xl object-cover"
            />
          )}
        </div>
      </div>
    </div>
  );
}