import Right_sidebar from '../components/right_sidebar';
import Left_sidebar from '../components/left_sidebar';
import Post from '../components/post';
import pfp from "../assets/pfp.png"

export default function Ememotics() {

  return (
    <div className="h-screen w-screen overflow-y-auto bg-amber-100 overflow-x-hidden">
        <div className="flex min-h-screen">
          <div className="w-1/4 bg-black sticky top-0 h-screen p-4 border-r border-r-gray-500">
            <Left_sidebar />
          </div>

          <div className="w-1/2 bg-black relative flex flex-col items-center p-4 space-y-10">
            <div className="mt-0 absolute left-40 top-30 bottom-0 w-0.5 bg-blue-500 z-0"></div>
            <div className="post bg-gray-500 w-6/7 h-16 rounded-2xl flex items-center justify-center">
              <p className = "text-black">Ememotics</p>
            </div>

              <Post class = "Ememotics : Starting"
              content = {`E-Memotics
                Final Year Project
                Collaborated with AK+ to create a 3D metaverse learning space in Unreal Engine 5, blending education with immersive virtual environments`}
              postpic = {pfp} 
              link = "" />

              <Post class = "Ememotics : Project Overview"
              content = {`#ProjectOverview

                Developed Ememotics, a client-requested 3D metaverse prototype in Unreal Engine 5 for AK+, designed as a shared virtual learning space

                Conceived as a foundational prototype for how the NYP School of Design and Media (SML) Metaverse Lab could be structured and integrated into AK+’s broader metaverse ecosystem

                Designed with the long-term vision of an open-world SML environment, using RPG-inspired elements to teach students skills and academic modules through exploration`}
              postpic = {pfp} 
              link = "" />

              <Post class = "Ememotics : Engine & Technical Adaptation"
              content = {`#Adaptation

                Rapidly onboarded onto Unreal Engine 5 workflows while working on a live client project

                Adapted to a new engine and toolchain while meeting technical requirements, deadlines, and client expectations

                Applied UE5 systems such as Blueprints, animation retargeting, and physics-based interactions to support gameplay and learning mechanics`}
              postpic = {pfp} 
              link = "" />

              <Post class = "Ememotics : Gameplay System"
              content = {`#Gameplay

                Designed and implemented the player’s vehicle partner, Mobiro, serving both functional and experiential roles within the world

                Built a transformable vehicle-pet system that seamlessly switches between companion and traversal forms

                Ensured transitions were intuitive and responsive, supporting smooth exploration across the environment`}
              postpic = {pfp} 
              link = "" />

              <Post class = "Ememotics : World Interaction"
              content = {`#Interaction

                Implemented interactive world elements to encourage engagement and experimentation

                Developed breakable environmental objects, such as destructible walls, to support dynamic level interaction

                Created movable platforms to introduce traversal challenges and spatial problem-solving

                Implemented water systems to enhance environmental realism and immersion`}
              postpic = {pfp} 
              link = "" />

              <Post class = "Ememotics : Animation & Polish"
              content = {`#Animation #Polish

                Performed animation retargeting to adapt character and vehicle animations across different rigs

                Ensured animation transitions remained natural and cohesive within gameplay contexts

                Focused on maintaining visual clarity and responsiveness across all interactive elements`}
              postpic = {pfp} 
              link = "" />

              <Post class = "Ememotics : Interaction Design & Usability"
              content = {`#InteractionDesign #Usability

                Designed mechanics and interactions to support both free exploration and structured learning use cases

                Ensured usability remained accessible for students unfamiliar with game-like environments

                Balanced engagement-driven gameplay with educational intent`}
              postpic = {pfp} 
              link = "" />

              <Post class = "Ememotics : Collaboration & Client Alignment"
              content = {`#Collaboration #ClientAlignment

                Worked closely with the project team to align technical features with client goals and expectations

                Responded to client feedback iteratively, refining scope and mechanics to meet project requirements

                Successfully delivered a functional prototype demonstrating the feasibility of a shared virtual learning environment`}
              postpic = {pfp} 
              link = "" />

          </div>

          <div className="w-1/4 bg-black sticky top-0 h-screen p-4 border-l border-l-gray-500">
            <Right_sidebar/>
          </div>

        </div>
      </div>
  );
}