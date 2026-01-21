import Right_sidebar from '../components/right_sidebar';
import Left_sidebar from '../components/left_sidebar';
import Post from '../components/post';
import pfp from "../assets/pfp.png"

export default function Experience() {

  return (
    <div className="h-screen w-screen overflow-y-auto bg-amber-100 overflow-x-hidden">
        <div className="flex min-h-screen">
          <div className="w-1/4 bg-black sticky top-0 h-screen p-4 border-r border-r-gray-500">
            <Left_sidebar />
          </div>

          <div className="w-1/2 bg-black relative flex flex-col items-center p-4 space-y-10">
            <div className="mt-0 absolute left-40 top-30 bottom-0 w-0.5 bg-blue-500 z-0"></div>
            <div className="post bg-gray-500 w-6/7 h-16 rounded-2xl flex items-center justify-center">
              <p className = "text-black">Experience</p>
            </div>

            

            <Post class = "Exp : Start"
              content = {`Thought I'd share some of my experiences that helped shape how I work and think as a developer
              Featuring my hands-on experience, responsibilities and my takeaways from each role!
              (Some comments below link to projects with further details!)`}
              postpic = {pfp} 
              link = "" />

              <Post class = "Exp : ARISE"
              content = {`Game Developer Intern
                Ageing Research Institute for Society and Education (NTU)
                May 2023 – Aug 2023

                Worked on a mobile game designed to encourage at-home physical activity for elderly users.

                I also participated in outreach sessions at old folks’ homes, engaging participants through interactive games, and helped collect feedback through online surveys.`}
              postpic = {pfp} 
              link = "" />

              <Post class = "Exp : TwinDisc"
              content = {`Application Engineer Intern
                Twin Disc
                Aug 2023 – Feb 2024
                
                Built a 3D boat simulation used to demonstrate product capabilities without a physical vessel.

                The simulation enabled realistic, multi-directional boat control via a 3-in-1 joystick and was used as an interactive tool during client presentations.`}
              postpic = {pfp} 
              link = "" />

              <Post class = "Exp : 2B Robotics"
              content = {`Assistant Teacher
                2B Robotics
                Apr 2024 – Sep 2024
                
                Assisted in teaching Lego Robotics classes, creating engaging and hands-on learning experiences for students.

                Guided students in developing problem-solving and logical thinking skills through interactive activities, while supporting lesson execution and tracking student progress.`}
              postpic = {pfp} 
              link = "" />

              <Post class = "Exp : PC Technician"
              content = {`PC Technician
                Self-Employed
                Jan 2025 – Current
                
                Provided on-site PC building, upgrading, and troubleshooting services for clients.

                Diagnosed and resolved both hardware and software issues efficiently, while advising clients on component compatibility, system upgrades, and optimisation.

                A key part of this role was communicating solutions clearly and tailoring recommendations to each client’s needs.`}
              postpic = {pfp} 
              link = "" />

              <Post class = "Exp : Military"
              content = {`SAFTI MI, GKS CSC
                Training Support Office
                Jul 2025 – Current
                
                In-charge of the unit’s IT Section.
                Worked directly with senior officers, managed all IT assets, and rolled out up to 100 laptops during high-priority events like course starts and graduations — fast and without downtime`}
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