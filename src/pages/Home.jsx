import Right_sidebar from '../components/right_sidebar';
import Left_sidebar from '../components/left_sidebar';
import Left_sidebar_bottom from '../components/left_sidebar_bottom';
import Post from '../components/post';
import japan from "../assets/japan.jpg";
import calibarn from "../assets/calibarn.jpg";
import gradcap from "../assets/gradcap.png";
import workin from "../assets/workin.jpg";
import parents from "../assets/parents.jpg";

export default function Home() {

  return (
    <div className="h-screen w-screen overflow-y-auto bg-black overflow-x-hidden">
        <div className="flex min-h-screen">
          <div className="w-1/4 bg-black sticky top-0 h-screen p-4 border-r border-r-gray-500">
            <Left_sidebar />
          </div>

          <div className="w-1/2 bg-black relative flex flex-1 flex-col items-center p-4 space-y-10">
            <div className="post bg-gray-500 w-6/7 h-16 rounded-2xl flex items-center justify-center">
              <p className = "text-black">welc to my website ig</p>
            </div>

            <Post class = "Home : Intro"
            content = {`Hello I'm Sheng Heng!
              This thread covers a quick introduction about myself, as well as my interests,
              current focus and what drives me as an aspiring developer!`}
            postpic = {japan} 
            link = "/introduction" />

            <Post class = "Home : About Me"
            content = {`Everyone has a story behind why they build things
              This is mine - how I started creating what I enjoy!
              (Thread 👇)`}
            postpic = {calibarn} 
            link = "/profile" />

            <Post class = "Home : Experiences"
            content = {`Thought I'd share some of my experiences that helped shape how I work and think as a developer
              Featuring my hands-on experience, responsibilities and my takeaways from each role!
              (Thread 👇)`}
            postpic = {parents} 
            link = "/experience" />

            <Post class = "Home : Education"
            content = {`"The day we stop learning is the day we die" - Michael Scott
              Here’s a look at my education journey — from major milestones to achievements and the experiences that pushed me to grow`}
            postpic = {gradcap}
            link = "/academic" />

            <Post class = "Home : Projects"
            content = {`A collection of projects I've worked on, each representing a step in my growth as a developer
              View the thread below to see each project's ideas, processes, challenges and what I've learnt!`}
            postpic = {workin} 
            link = "/project" />

          </div>

          <div className="hidden lg:block w-1/4 bg-black sticky top-0 h-screen p-4 border-l border-l-gray-500">
            <Right_sidebar/>
          </div>

          <div className="fixed bottom-0 left-0 w-full p-2 bg-black flex justify-around lg:hidden">
            {/* <Left_sidebar_bottom /> */}
          </div>

        </div>
      </div>
  );
}