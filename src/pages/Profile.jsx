import Right_sidebar from '../components/right_sidebar';
import Left_sidebar from '../components/left_sidebar';
import Post from '../components/post';
import calibarn from "../assets/calibarn.jpg";
import leafgreen from "../assets/leafgreen.jpg";
import python from "../assets/python.jpg";
import ptcg from "../assets/ptcg.jpg";


export default function Profile() {

  return (
    <div className="h-screen w-screen overflow-y-auto bg-amber-100 overflow-x-hidden">
        <div className="flex min-h-screen">
          <div className="w-1/4 bg-black sticky top-0 h-screen p-4 border-r border-r-gray-500">
            <Left_sidebar />
          </div>

          <div className="w-1/2 bg-black relative flex flex-col items-center p-4 space-y-10">
            <div className="mt-0 absolute left-40 top-30 bottom-0 w-0.5 bg-blue-500 z-0"></div>
            <div className="post bg-gray-500 w-6/7 h-16 rounded-2xl flex items-center justify-center">
              <p className = "text-black">About me!</p>
            </div>

            <Post class = "Abt Me : Starting"
              content = {`Everyone has a story behind why they build things
              This is mine - how I started creating what I enjoy!
              (Thread 👇)`}
              postpic = {calibarn} 
              link = "" />

              <Post class = "Abt Me : Origin Story"
              content = {`My first video game was Pokémon Leaf Green

                I started playing when I was 4, and it left a lasting impact on me. The sense of exploration and joy it gave me is something I still remember today
                
                I hope to one day create games that leave the same kind of unforgettable memories for future players`}
              postpic = {leafgreen} 
              link = "" />

              <Post class = "Abt Me : Getting into Tech"
              content = {`I picked up programming when I was 15, starting with Python
                
                That was when I realised I could combine my passion for games with technical skills - working towards becoming a developer who can actually bring ideas to life`}
              postpic = {python} 
              link = "" />

              <Post class = "Abt Me : How I think & Learn"
              content = {`I approach problems logically and stay open to different ways of solving them

                I’m comfortable learning from peers, researching online, or experimenting hands-on — doing is how I retain and truly understand new concepts

                When I hit challenges, I don’t give up. I step back, seek help if needed, and move forward stronger. Sometimes taking one step back really does lead to two steps forward.`}
              postpic = {""} 
              link = "" />

              <Post class = "Abt Me : Value & Mindset"
              content = {`I value continuous learning and curiosity.
                
                I believe there’s always something new to learn every day, and I enjoy exploring multiple solutions to the same problem
                
                I enjoy teamwork and collaborating with others, but I’m also confident working independently when needed`}
              postpic = {""} 
              link = "" />

              <Post class = "Abt Me : Outside of Coding"
              content = {`Outside of coding, I enjoy playing games — often analysing mechanics and systems for ideas I can use in future projects
                
                I also play competitive trading card games and am part of a local Pokémon TCG community
                
                I enjoy thinking ahead, finding the best “line” to win — much like debugging and problem-solving in code`}
              postpic = {ptcg} 
              link = "" />

          </div>

          <div className="w-1/4 bg-black sticky top-0 h-screen p-4 border-l border-l-gray-500">
            <Right_sidebar/>
          </div>

        </div>
      </div>
  );
}