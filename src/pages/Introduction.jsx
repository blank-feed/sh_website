import Right_sidebar from '../components/right_sidebar';
import Left_sidebar from '../components/left_sidebar';
import Post from '../components/post';
import gradsp from "../assets/gradSP.jpg";
import camera from "../assets/camera.jpg";

export default function Introduction() {

  return (
    <div className="h-screen w-screen overflow-y-auto bg-amber-100 overflow-x-hidden">
        <div className="flex min-h-screen">
          <div className="w-1/4 bg-black sticky top-0 h-screen p-4 border-r border-r-gray-500">
            <Left_sidebar />
          </div>

          <div className="w-1/2 bg-black relative flex flex-col items-center p-4 space-y-10">
            <div className="mt-0 absolute left-40 top-30 bottom-0 w-0.5 bg-blue-500 z-0"></div>
            <div className="post bg-gray-500 w-6/7 h-16 rounded-2xl flex items-center justify-center">
              <p className = "text-black">Introduction</p>
            </div>

            <Post class = "Introduction"
              content = {`Hello I'm Sheng Heng!
                I'm an aspiring developer who loves programming!
                I have strong interest in game development and interactive experiences`}
              postpic = {camera} 
              link = "" />

              <Post class = "Introduction"
              content = {`I enjoy turning ideas into something tangible, especially experiences that players can connect with and remember long after playing!`}
              postpic = {""} 
              link = "" />

              <Post class = "Introduction"
              content = {`Currently studying and preparing to pursue university education, while actively working on personal projects (like this website!)`}
              postpic = {""} 
              link = "" />

              <Post class = "Introduction"
              content = {`Always looking for opportunities to learn, collaborate, and grow, whether through university courses, internships, or creative projects!`}
              postpic = {gradsp} 
              link = "" />

          </div>

          <div className="w-1/4 bg-black sticky top-0 h-screen p-4 border-l border-l-gray-500">
            <Right_sidebar/>
          </div>

        </div>
      </div>
  );
}