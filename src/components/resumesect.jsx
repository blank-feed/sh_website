import file from "../assets/file.png";

export default function ResumeSection({}) {
    
  return (
        <div className="post bg-gray-500 w-3/4 h-36 
            rounded-2xl flex flex-col items-center mt-6 ml-6 
            cursor-pointer hover:bg-gray-600 transition" onClick={() => console.log("download resume")}>
            <p className = "text-black text-xl mt-4">
            Download my resume here!
            </p>
            <div className="flex-1 flex items-center">
                <img
                    src={file}
                    alt="download file"
                    className="w-8 h-8 object-contain"
                />
            </div>
        </div>
  );
}