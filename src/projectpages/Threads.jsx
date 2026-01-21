import Right_sidebar from '../components/right_sidebar';
import Left_sidebar from '../components/left_sidebar';
import Post from '../components/post';
import pfp from "../assets/pfp.png"

export default function Threads() {

  return (
    <div className="h-screen w-screen overflow-y-auto bg-amber-100 overflow-x-hidden">
        <div className="flex min-h-screen">
          <div className="w-1/4 bg-black sticky top-0 h-screen p-4 border-r border-r-gray-500">
            <Left_sidebar />
          </div>

          <div className="w-1/2 bg-black relative flex flex-col items-center p-4 space-y-10">
            <div className="mt-0 absolute left-40 top-30 bottom-0 w-0.5 bg-blue-500 z-0"></div>
            <div className="post bg-gray-500 w-6/7 h-16 rounded-2xl flex items-center justify-center">
              <p className = "text-black">Project:[Threads]</p>
            </div>

              <Post class = "Threads : Starting"
              content = {`Project:[Threads]
                NYP Independent Work Project
                A 2D fantasy RPG
                Engage in turn-based, dice-driven combat in a world inspired by Baldur’s Gate 3 and Dungeons & Dragons`}
              postpic = {pfp} 
              link = "" />

              <Post class = "Threads : Project Overview"
              content = {`#ProjectOverview

                Developed Project:[Threads], a 2D fantasy RPG for PC where players choose from six distinct classes to help a king recover his stolen treasure

                Designed as an independent project, handling all aspects from gameplay design and AI programming to animation and visual assets

                Built the game loop around exploration, turn-based combat, and dice-driven mechanics inspired by Baldur’s Gate 3 and Dungeons & Dragons`}
              postpic = {pfp} 
              link = "" />

              <Post class = "Threads : Playable Characters"
              content = {`#Characters

                Introduced six playable characters, each with unique skills, passives, attributes, and playstyles

                Designed distinct class mechanics to encourage tactical decision-making and replayability

                Ensured each character’s abilities synergized with combat systems while remaining balanced across encounters`}
              postpic = {pfp} 
              link = "" />

              <Post class = "Threads : Combat System"
              content = {`#CombatSystem

                Implemented tile-based, turn-based combat mechanics, integrating dice rolls to determine damage and success probabilities

                Designed enemy AI behaviours tailored to each encounter, including the final boss, ensuring tactical but fair challenges

                Tuned combat pacing, action timing, and difficulty through iterative testing to maintain tension and player engagement`}
              postpic = {pfp} 
              link = "" />

              <Post class = "Threads : Storyline & World Building"
              content = {`#Storyline #WorldBuilding

                Crafted an explorable overworld connected to the narrative, providing players with multiple paths and strategic choices

                Incorporated branching routes and side objectives to enhance player agency and replayability

                Integrated environmental storytelling to reinforce narrative immersion`}
              postpic = {pfp} 
              link = "" />

              <Post class = "Threads : AI & Enemy Design"
              content = {`#AI #Enemy

                Developed AI systems for enemies with distinct roles, targeting priorities, and behaviour patterns

                Implemented encounter logic to make combat encounters dynamic, challenging, and engaging

                Designed boss AI to provide unique challenges while remaining beatable with strategic play`}
              postpic = {pfp} 
              link = "" />

              <Post class = "Threads : Iteration & Playtesting"
              content = {`#Playtesting #Iteration

                Conducted frequent playtests to validate combat flow, game balance, and character effectiveness

                Iteratively refined enemy stats, dice probabilities, and player abilities to ensure fair yet tactical gameplay

                Applied feedback to adjust difficulty curves, action pacing, and encounter design for an optimal experience`}
              postpic = {pfp} 
              link = "" />

              <Post class = "Threads : Outcome"
              content = {`#Outcome

                Successfully delivered a fully playable 2D RPG showcasing turn-based, dice-driven combat and strategic depth

                Demonstrated end-to-end project ownership, including design, programming, animation, and balancing

                Built a cohesive fantasy world with meaningful player choices, diverse characters, and challenging tactical combat`}
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