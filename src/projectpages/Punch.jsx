import Right_sidebar from '../components/right_sidebar';
import Left_sidebar from '../components/left_sidebar';
import Post from '../components/post';
import pfp from "../assets/pfp.png"

export default function Punch() {

  return (
    <div className="h-screen w-screen overflow-y-auto bg-amber-100 overflow-x-hidden">
        <div className="flex min-h-screen">
          <div className="w-1/4 bg-black sticky top-0 h-screen p-4 border-r border-r-gray-500">
            <Left_sidebar />
          </div>

          <div className="w-1/2 bg-black relative flex flex-col items-center p-4 space-y-10">
            <div className="mt-0 absolute left-40 top-30 bottom-0 w-0.5 bg-blue-500 z-0"></div>
            <div className="post bg-gray-500 w-6/7 h-16 rounded-2xl flex items-center justify-center">
              <p className = "text-black">Punch-Punch</p>
            </div>

              <Post class = "Punch : Starting"
              content = {`Punch-Punch
                ARISE @ NTU Internship Project
                Mobile game promoting at-home exercise for elderly users, making fitness engaging and accessible`}
              postpic = {pfp} 
              link = "" />

              <Post class = "Punch : Project Overview"
              content = {`#ProjectOverview

                Developed Punch-Punch, a 3D fitness-focused mobile game designed to encourage elderly users to stay active at home

                Structured gameplay around light physical movements, transforming exercise into an engaging and approachable game experience

                Designed multiple game modes to support both standing and seated play, ensuring inclusivity for users with varying mobility levels`}
              postpic = {pfp} 
              link = "" />

              <Post class = "Punch : Body Tracking & Input"
              content = {`#BodyTracking

                Implemented real-time body-tracking gameplay using iOS devices’ built-in motion and body-tracking capabilities

                Tracked player body movements and mapped them directly to in-game actions for intuitive interaction

                Synchronized the player’s hand movements to punching glove game objects, ensuring responsive and visually clear feedback`}
              postpic = {pfp} 
              link = "" />

              <Post class = "Punch : Gameplay"
              content = {`#Gameplay

                Implemented directional hit detection to verify successful punches based on correct movement and orientation

                Designed enemy interaction checks to validate intentional strikes rather than accidental movement

                Implemented dodge mechanics that detect leg-lift actions, allowing players to avoid enemy attacks through physical motion`}
              postpic = {pfp} 
              link = "" />

              <Post class = "Punch : Accessibility & UX Design"
              content = {`#Accessibility #UXDesign

                Designed gameplay systems with elderly users as the primary audience, prioritising clarity, comfort, and safety

                Tuned movement thresholds and detection sensitivity to reduce physical strain while maintaining engagement

                Implemented a seated gameplay mode for users unable to stand for extended periods

                Adjusted difficulty curves to ensure progression felt encouraging rather than punishing`}
              postpic = {pfp} 
              link = "" />

              <Post class = "Punch : Platform & Workflow Adaptation"
              content = {`#Platform #Workflow

                Adapted to iOS development workflows, learning to build and deploy Unity applications using Xcode

                Configured device permissions and motion input pipelines to support body-tracking features on iOS hardware

                Tested gameplay across devices to ensure consistent performance and input reliability`}
              postpic = {pfp} 
              link = "" />

              <Post class = "Punch : Outcome"
              content = {`#Outcome 

                Delivered a functional fitness-focused mobile game tailored for elderly users

                Successfully integrated body-tracking input into a Unity mobile experience

                Demonstrated the ability to design accessible, sensor-driven gameplay aligned with a specific target audience`}
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