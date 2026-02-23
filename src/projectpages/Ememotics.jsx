import Right_sidebar from '../components/right_sidebar';
import Left_sidebar from '../components/left_sidebar';
import Post from '../components/post';
import PostVid from '../components/postvid';
import ememotics from "../assets/ememotics.jpg";
import sml from "../assets/SML.jpg";
import ue5 from "../assets/ue5.jpg";
import mobiro from "../assets/mobiro.jpg";
import puzzle from "../assets/puzzle.jpg";
import trailer from "../assets/EMemotics_Trailer.mp4";
import mobiroanimation from "../assets/mobiroanimation.gif";

export default function Ememotics() {

  return (
    <div className="h-screen w-screen overflow-y-auto bg-black overflow-x-hidden">
            <div className="flex min-h-screen">
              <div className="w-1/4 bg-black sticky top-0 h-screen p-4 border-r border-r-gray-500">
                <Left_sidebar />
              </div>
    
              <div className="w-1/2 bg-black relative flex flex-1 flex-col items-center p-4 space-y-10">
                <div className="absolute top-10 bottom-0 w-0.5 bg-blue-500 z-0 left-[17%]" ></div>
                <div className="post bg-gray-500 w-6/7 h-16 rounded-2xl flex items-center justify-center z-10">
                  <p className = "text-black">Ememotics</p>
            </div>

              <Post class = "Ememotics : Starting"
              content = {`E-Memotics
                Final Year Project
                Collaborated with AK+ to create a 3D metaverse learning space in Unreal Engine 5, blending education with immersive virtual environments`}
              postpic = {ememotics} 
              link = "" />

              <Post class = "Ememotics : Project Overview"
              content = {`#ProjectOverview

                Developed Ememotics, a client-requested 3D metaverse prototype in Unreal Engine 5 for AK+, designed as a shared virtual learning space

                Conceived as a foundational prototype for how the NYP School of Design and Media (SML) Metaverse Lab could be structured and integrated into AK+’s broader metaverse ecosystem

                Designed with the long-term vision of an open-world SML environment, using RPG-inspired elements to teach students skills and academic modules through exploration`}
              postpic = {sml} 
              link = "" />

              <Post class = "Ememotics : Engine & Technical Adaptation"
              content = {`#Adaptation

                Rapidly onboarded onto Unreal Engine 5 workflows while working on a live client project

                Adapted to a new engine and toolchain while meeting technical requirements, deadlines, and client expectations

                Applied UE5 systems such as Blueprints, animation retargeting, and physics-based interactions to support gameplay and learning mechanics`}
              postpic = {ue5} 
              link = "" />

              <Post class = "Ememotics : Gameplay System"
              content = {`#Gameplay

                Designed and implemented the player’s vehicle partner, Mobiro, serving both functional and experiential roles within the world

                Built a transformable vehicle-pet system that seamlessly switches between companion and traversal forms

                Ensured transitions were intuitive and responsive, supporting smooth exploration across the environment`}
              postpic = {mobiro} 
              link = "" />

              <Post class = "Ememotics : World Interaction"
              content = {`#Interaction

                Implemented interactive world elements to encourage engagement and experimentation

                Developed breakable environmental objects, such as destructible walls, to support dynamic level interaction

                Created movable platforms to introduce traversal challenges and spatial problem-solving

                Implemented water systems to enhance environmental realism and immersion`}
              postpic = {puzzle} 
              link = "" />

              <Post class = "Ememotics : Animation & Polish"
              content = {`#Animation #Polish

                Performed animation retargeting to adapt character and vehicle animations across different rigs

                Ensured animation transitions remained natural and cohesive within gameplay contexts

                Focused on maintaining visual clarity and responsiveness across all interactive elements`}
              postpic = {mobiroanimation} 
              link = "" />

              <Post class = "Ememotics : Interaction Design & Usability"
              content = {`#InteractionDesign #Usability

                Designed mechanics and interactions to support both free exploration and structured learning use cases

                Ensured usability remained accessible for students unfamiliar with game-like environments

                Balanced engagement-driven gameplay with educational intent`}
              postpic = {""} 
              link = "" />

              <PostVid class = "Ememotics : Collaboration & Client Alignment"
              content = {`#Collaboration #ClientAlignment

                Worked closely with the project team to align technical features with client goals and expectations

                Responded to client feedback iteratively, refining scope and mechanics to meet project requirements

                Successfully delivered a functional prototype demonstrating the feasibility of a shared virtual learning environment`}
              video = {trailer} 
              link = "" />

          </div>

          <div className="hidden lg:block w-1/4 bg-black sticky top-0 h-screen p-4 border-l border-l-gray-500">
            <Right_sidebar/>
          </div>

        </div>
      </div>
  );
}