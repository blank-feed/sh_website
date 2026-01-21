import Right_sidebar from '../components/right_sidebar';
import Left_sidebar from '../components/left_sidebar';
import Post from '../components/post';
import ahcd from "../assets/ahcd.png";
import ahms from "../assets/ahms.jpg";
import ahs from "../assets/ahs.jpg";
import gjt from "../assets/gjt.jpg";
import enemy from "../assets/enemy.gif";
import ahc from "../assets/ahc.gif";

export default function Angelhunter() {

  return (
    <div className="h-screen w-screen overflow-y-auto bg-amber-100 overflow-x-hidden">
        <div className="flex min-h-screen">
          <div className="w-1/4 bg-black sticky top-0 h-screen p-4 border-r border-r-gray-500">
            <Left_sidebar />
          </div>

          <div className="w-1/2 bg-black relative flex flex-col items-center p-4 space-y-10">
            <div className="mt-0 absolute left-40 top-30 bottom-0 w-0.5 bg-blue-500 z-0"></div>
            <div className="post bg-gray-500 w-6/7 h-16 rounded-2xl flex items-center justify-center">
              <p className = "text-black">Angel Hunter</p>
            </div>

              <Post class = "Angelhunter : Starting"
              content = {`Angel Hunter
                H2 Games X NYP Game Jam 2023
                A 2D isometric roguelite mobile game.
                Hunt angels, collect bounties, roll the dice, and strategize your way through Angel Hunter’s dynamic combat`}
              postpic = {ahms} //starting screen
              link = "" />

              <Post class = "Angelhunter : Concept"
              content = {`#Concept #Design

                Designed and ideated a 2D isometric roguelite bounty hunter game tailored for hyper-casual mobile play

                Defined the core fantasy of playing as a bounty hunter navigating a hostile world filled with unpredictable enemies, hazards, and encounters

                Established clear design pillars focused on accessibility, replayability, and moment-to-moment decision making

                Scoped mechanics and systems to fit Game Jam constraints while maintaining depth and mechanical clarity
                
                (Protagonist & Enemy Concept Art 👇)`}
              postpic = {ahcd} //character design draft
              link = "" />

              <Post class = "Angelhunter : Gameplay"
              content = {`#Gameplay

                Designed swipe-based movement controls optimised for mobile devices, allowing players to navigate the grid intuitively

                Implemented contextual swipe interactions, enabling players to attack or interact when an enemy or object occupies an adjacent tile

                Balanced input simplicity with tactical positioning, ensuring each action carried meaningful risk and reward`}
              postpic = {ahc} //ss of gameplay
              link = "" />

              <Post class = "Angelhunter : Combat System"
              content = {`#CombatSystem

                Designed a dice-driven combat system inspired by Dungeons & Dragons, introducing controlled randomness into each encounter

                Implemented damage scaling based on dice roll outcomes, where higher rolls directly translate to increased damage

                Tuned combat pacing to feel fast and reactive while retaining the tension of probabilistic outcomes

                Used randomness as a tool to enhance replayability rather than unpredictability`}
              postpic = {ahs} // shopkeeper w dice
              link = "" />

              <Post class = "Angelhunter : AI & System"
              content = {`#AI #System

                Programmed enemy AI behaviours to support varied encounter patterns and challenge escalation

                Implemented decision logic for enemy movement, targeting, and attack timing within the grid-based system

                Designed and implemented a quest system to guide player progression and provide short-term objectives

                Built an inventory system allowing players to collect, manage, and utilise items during runs`}
              postpic = {enemy} //gif of enemy(?)
              link = "" />

              <Post class = "Angelhunter : Iteration & Workflow"
              content = {`#Iteration #Workflow

                Developed the project during Game Jam 2023, working under tight time constraints and rapid iteration cycles

                Prioritised fast prototyping and feature validation to ensure mechanics felt satisfying early

                Continuously refined gameplay based on internal playtests and team feedback`}
              postpic = {""}
              link = "" />

              <Post class = "Angelhunter : Collaboration & Delivery"
              content = {`#Collaboration #Delivery

                Collaborated closely with a small multidisciplinary team to deliver a complete, playable build within the jam timeline

                Communicated design intent clearly to align gameplay systems with overall vision

                Successfully shipped a functional 2D isometric roguelite demonstrating strong core mechanics and cohesive systems`}
              postpic = {gjt} //team pic
              link = "" />

          </div>

          <div className="w-1/4 bg-black sticky top-0 h-screen p-4 border-l border-l-gray-500">
            <Right_sidebar/>
          </div>

        </div>
      </div>
  );
}