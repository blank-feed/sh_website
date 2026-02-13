import Right_sidebar from '../components/right_sidebar';
import Left_sidebar from '../components/left_sidebar';
import Post from '../components/post';
import pfp from "../assets/pfp.png";
import ahms from "../assets/ahms.jpg";
import workin from "../assets/workin.jpg";
import boatjs from "../assets/boatjoystick.jpg";
import kurafuto from "../assets/kurafuto.jpg";

export default function Project() {

  return (
    <div className="h-screen w-screen overflow-y-auto bg-black overflow-x-hidden">
            <div className="flex min-h-screen">
              <div className="w-1/4 bg-black sticky top-0 h-screen p-4 border-r border-r-gray-500">
                <Left_sidebar />
              </div>
    
              <div className="w-1/2 bg-black relative flex flex-1 flex-col items-center p-4 space-y-10">
                <div className="absolute top-10 bottom-0 w-0.5 bg-blue-500 z-0 left-[17%]" ></div>
                <div className="post bg-gray-500 w-6/7 h-16 rounded-2xl flex items-center justify-center z-10">
                  <p className = "text-black">Projects</p>
            </div>

            <Post class = "Project : Starting"
              content = {`A collection of projects I've worked on, each representing a step in my growth as a developer
              
                View the thread below to see each project's ideas, processes, challenges and what I've learnt!`}
              postpic = {workin} 
              link = "" />

              <Post class = "Project : BoatSim"
              content = {`Boat Simulator
                Twin Disc Internship Project
                Built in Unity, Boat Simulator is a 3D experience that allows clients to interact with a multi-directional joystick and feel how the product performs—without needing a real boat`}
              postpic = {boatjs} 
              link = "/boat" />

              <Post class = "Project : Punch"
              content = {`Punch-Punch
                ARISE @ NTU Internship Project
                Mobile game promoting at-home exercise for elderly users, making fitness engaging and accessible`}
              postpic = {pfp} 
              link = "/punch" />

              <Post class = "Project : Threads"
              content = {`Project:[Threads]
                NYP Independent Work Project
                A 2D fantasy RPG
                Engage in turn-based, dice-driven combat in a world inspired by Baldur’s Gate 3 and Dungeons & Dragons`}
              postpic = {pfp} 
              link = "/threads" />

              <Post class = "Project : Ememotics"
              content = {`E-Memotics
                Final Year Project
                Collaborated with AK+ to create a 3D metaverse learning space in Unreal Engine 5, blending education with immersive virtual environments`}
              postpic = {pfp} 
              link = "/ememotics" />

              <Post class = "Project : Kurafuto"
              content = {`Kurafuto
                Studio Project 3
                Kurafuto is a 2D survival game inspired by Minecraft.
                Explore, craft, and survive through a dynamic day-night cycle in a world full of adventure`}
              postpic = {kurafuto} 
              link = "/kurafuto" />

              <Post class = "Project : Angel Hunter"
              content = {`Angel Hunter
                H2 Games X NYP Game Jam 2023
                A 2D isometric roguelite mobile game.
                Hunt angels, collect bounties, roll the dice, and strategize your way through Angel Hunter’s dynamic combat`}
              postpic = {ahms} 
              link = "/angelhunter" />

          </div>

          <div className="hidden lg:block w-1/4 bg-black sticky top-0 h-screen p-4 border-l border-l-gray-500">
            <Right_sidebar/>
          </div>

        </div>
      </div>
  );
}