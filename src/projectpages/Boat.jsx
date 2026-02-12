import Right_sidebar from '../components/right_sidebar';
import Left_sidebar from '../components/left_sidebar';
import Post from '../components/post';
import pfp from "../assets/pfp.png"

export default function Boat() {

  return (
    <div className="h-screen w-screen overflow-y-auto bg-black overflow-x-hidden">
            <div className="flex min-h-screen">
              <div className="w-1/4 bg-black sticky top-0 h-screen p-4 border-r border-r-gray-500">
                <Left_sidebar />
              </div>
    
              <div className="w-1/2 bg-black relative flex flex-1 flex-col items-center p-4 space-y-10">
                <div className="absolute top-10 bottom-0 w-0.5 bg-blue-500 z-0 left-[17%]" ></div>
                <div className="post bg-gray-500 w-6/7 h-16 rounded-2xl flex items-center justify-center z-10">
                  <p className = "text-black">Boat Simulation</p>
            </div>

              <Post class = "Boat : Starting"
              content = {`Boat Simulator
                Twin Disc Internship Project
                Built in Unity, Boat Simulator is a 3D experience that allows clients to interact with a multi-directional joystick and feel how the product performs—without needing a real boat`}
              postpic = {pfp} 
              link = "" />

              <Post class = "Boat : Project Overview"
              content = {`#ProjectOverview

                Developed a 3D boat simulation in Unity3D to demonstrate the capabilities of the company’s multi-directional joystick

                The simulation allowed clients to experience boat maneuverability without needing a physical vessel, reducing logistical constraints and providing an immersive demonstration environment`}
              postpic = {pfp} 
              link = "" />

              <Post class = "Boat : Physics & Simulation"
              content = {`#Physics #Simulation

                Implemented realistic water physics, simulating drag, buoyancy, and resistance to create a responsive vessel experience

                Applied accurate physics to the boat’s propellers and thrusters, ensuring movement felt true-to-life under varying input conditions

                Integrated dynamic water effects to enhance immersion and provide visual feedback aligned with boat behavior`}
              postpic = {pfp} 
              link = "" />

              <Post class = "Boat : Hardware"
              content = {`#HardwareIntegration

                Connected the simulation to the multi-directional joystick, bridging hardware input to in-game mechanics

                Learned Arduino fundamentals to read, process, and map joystick data to Unity, enabling real-time interaction

                Tuned input response and control mapping for accuracy, ensuring smooth and predictable maneuvering`}
              postpic = {pfp} 
              link = "" />

              <Post class = "Boat : User Experience"
              content = {`#UserExperience

                Designed intuitive controls paired with realistic auditory feedback to improve immersion and usability

                Focused on making the simulation approachable for first-time users while maintaining technical fidelity

                Iteratively refined physics, visuals, and control responsiveness based on test sessions to ensure a polished demonstration`}
              postpic = {pfp} 
              link = "" />

              <Post class = "Boat : Testing & Iteration"
              content = {`#Testing #Iteration

                Conducted multiple rounds of testing to observe interactions and identify inconsistencies in boat behavior

                Adjusted physics coefficients, input scaling, and smoothing algorithms to improve realism and handling

                Focused on delivering a seamless experience for client demonstrations`}
              postpic = {pfp} 
              link = "" />

              <Post class = "Boat : Delivery & Outcome"
              content = {`#Delivery #Outcome

                Successfully delivered the project as a client-facing simulation tool, fully integrated with the joystick hardware

                Received positive feedback on realism, visual fidelity, and control responsiveness, highlighting the effectiveness of the simulation as a demonstration medium`}
              postpic = {pfp} 
              link = "" />

          </div>

          <div className="hidden lg:block w-1/4 bg-black sticky top-0 h-screen p-4 border-l border-l-gray-500">
            <Right_sidebar/>
          </div>

        </div>
      </div>
  );
}