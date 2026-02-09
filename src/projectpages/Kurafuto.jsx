import Right_sidebar from '../components/right_sidebar';
import Left_sidebar from '../components/left_sidebar';
import Post from '../components/post';
import PostVid from '../components/postvid';
import pfp from "../assets/pfp.png";
import kurafuto from "../assets/kurafuto.jpg";
import minecraft from "../assets/minecraft.jpg";
import MDA from "../assets/MDA.jpg";
import blues from "../assets/Blues.png";
import crafting from "../assets/crafting.png";
import sp3_vid from "../assets/SP3_vid.mp4";
import ravil_and_ghens_updated from "../assets/ravil_and_ghens_updated.png";

export default function Kurafuto() {

  return (
    <div className="h-screen w-screen overflow-y-auto bg-amber-100 overflow-x-hidden">
        <div className="flex min-h-screen">
          <div className="w-1/4 bg-black sticky top-0 h-screen p-4 border-r border-r-gray-500">
            <Left_sidebar />
          </div>

          <div className="w-1/2 bg-black relative flex flex-col items-center p-4 space-y-10">
            <div className="mt-0 absolute left-40 top-30 bottom-0 w-0.5 bg-blue-500 z-0"></div>
            <div className="post bg-gray-500 w-6/7 h-16 rounded-2xl flex items-center justify-center">
              <p className = "text-black">Kurafuto</p>
            </div>

              <Post class = "Kurafuto : Starting"
              content = {`Kurafuto
                Studio Project 3
                Kurafuto is a 2D survival game inspired by Minecraft.
                Explore, craft, and survive through a dynamic day-night cycle in a world full of adventure`}
              postpic = {kurafuto} 
              link = "" />

              <Post class = "Kurafuto : Project Overview"
              content = {`#ProjectOverview

                Developed Kurafuto, a 2D survival PC game set in an apocalyptic world, inspired by core mechanics from Minecraft

                Designed the game loop around exploration, resource management, and progression toward defeating a final boss to complete the game

                Balanced survival pressure through interconnected systems such as crafting, hunger management, and a dynamic day–night cycle`}
              postpic = {minecraft} 
              link = "" />

              <Post class = "Kurafuto : Game Design & Ideation"
              content = {`#GameDesign # Ideation

                Designed and ideated the overall game structure, defining core mechanics, progression pacing, and player objectives

                Established survival-focused design pillars emphasising risk–reward decision making and long-term planning

                Scoped systems and content to maintain challenge while remaining approachable for new players`}
              postpic = {MDA} 
              link = "" />

              <Post class = "Kurafuto : Core System"
              content = {`#CoreSystem

                Implemented a crafting system allowing players to gather resources and create tools, equipment, and consumables

                Developed a dynamic day–night cycle that alters environmental visibility and enemy behaviour

                Implemented a hunger system that directly impacts player survivability and resource prioritisation

                Designed system interdependencies to ensure mechanics reinforced each other rather than existing in isolation`}
              postpic = {crafting} 
              link = "" />

              <Post class = "Kurafuto : AI & Enemy Behaviour"
              content = {`#AI #Enemy

                Programmed AI behaviours for hostile mobs, non-hostile creatures, and neutral entities

                Implemented enemy movement logic, detection systems, and attack patterns to support varied combat encounters

                Designed and implemented loot drop systems to reward combat and exploration

                Balanced enemy difficulty progression to scale with player advancement`}
              postpic = {blues} 
              link = "" />

              <Post class = "Kurafuto : Boss Design"
              content = {`#Boss

                Designed and implemented the final boss encounter as the culmination of the survival experience

                Developed unique combat behaviour patterns to distinguish the boss from standard enemies

                Tuned attack phases, timing windows, and damage values to create a challenging but fair encounter`}
              postpic = {ravil_and_ghens_updated} 
              link = "" />

              <Post class = "Kurafuto : Art & Assets"
              content = {`#Art #Assets

                Created original 2D sprite assets during personal development time to support the game’s visual identity

                Ensured visual consistency across environments, characters, and UI elements

                Balanced clarity and readability to support fast-paced survival gameplay
                
                Most assets in this thread is made by me!`}
              postpic = {""} 
              link = "" />

              <Post class = "Kurafuto : Development & Iteration"
              content = {`#Development #Iteration

                Iteratively tested gameplay systems to identify balance issues and refine player experience

                Adjusted AI parameters, resource availability, and combat pacing based on playtesting feedback

                Focused on stability, clarity, and overall cohesion across systems`}
              postpic = {""} 
              link = "" />

              <PostVid class = "Kurafuto : Outcome"
              content = {`#Outcome

                Successfully delivered a complete 2D survival experience with a clear progression path and end goal

                Demonstrated strong ownership across design, programming, AI, and art

                Showcased ability to build interconnected systems within a survival game framework`}
              video = {sp3_vid} 
              link = "" />

          </div>

          <div className="w-1/4 bg-black sticky top-0 h-screen p-4 border-l border-l-gray-500">
            <Right_sidebar/>
          </div>

        </div>
      </div>
  );
}