import Right_sidebar from '../components/right_sidebar';
import Left_sidebar from '../components/left_sidebar';
import Post from '../components/post';
import pfp from "../assets/pfp.png"

export default function Home() {

  return (
    <div className="h-screen w-screen overflow-y-auto overflow-x-hidden">
        <div className="flex min-h-screen">
          <div className="w-1/4 bg-black sticky top-0 h-screen p-4 border-r-gray-500 border-r">
            <Left_sidebar />
          </div>

          <div className="w-1/2 bg-black flex flex-col items-center p-4 space-y-10">
            <div className="post bg-gray-500 w-6/7 h-16 rounded-2xl flex items-center justify-center">
              <p className = "text-black">welc to my website ig</p>
            </div>

            <Post class = "Home : Intro"
            content = {`Hello I'm Sheng Heng!
              This thread covers a quick introduction about myself, as well as my interests,
              current focus and what drives me as an aspiring developer!`}
            postpic = {pfp} 
            link = "/introduction" />

            <Post class = "Home : About Me"
            content = {`Everyone has a story behind why they build things
              This is mine - how I started creating what I enjoy!
              (Thread 👇)`}
            postpic = {pfp} 
            link = "/profile" />

            <Post class = "Home : Experiences"
            content = {`Thought I'd share some of my experiences that helped shape how I work and think as a developer
              Featuring my hands-on experience, responsibilities and my takeaways from each role!
              (Thread 👇)`}
            postpic = {pfp} 
            link = "/experience" />

            <Post class = "Home : Education"
            content = {`"The day we stop learning is the day we die" - Michael Scott
              Here’s a look at my education journey — from major milestones to achievements and the experiences that pushed me to grow`}
            postpic = {pfp}
            link = "/academic" />

            <Post class = "Home : Projects"
            content = {`A collection of projects I've worked on, each representing a step in my growth as a developer
              View the thread below to see each project's ideas, processes, challenges and what I've learnt!`}
            postpic = {pfp} 
            link = "/project" />

          </div>

          <div className="w-1/4 bg-black sticky top-0 h-screen p-4 border-l-gray-500 border-l">
            <Right_sidebar/>
          </div>

        </div>
      </div>
  );
}