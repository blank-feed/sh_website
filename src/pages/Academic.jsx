import Right_sidebar from '../components/right_sidebar';
import Left_sidebar from '../components/left_sidebar';
import Post from '../components/post';
import pfp from "../assets/pfp.png"

export default function Academic() {

  return (
    <div className="h-screen w-screen overflow-y-auto bg-amber-100 overflow-x-hidden">
        <div className="flex min-h-screen">
          <div className="w-1/4 bg-black sticky top-0 h-screen p-4 border-r border-r-gray-500">
            <Left_sidebar />
          </div>

          <div className="w-1/2 bg-black relative flex flex-col items-center p-4 space-y-10">
            <div className="mt-0 absolute left-40 top-30 bottom-0 w-0.5 bg-blue-500 z-0"></div>
            <div className="post bg-gray-500 w-6/7 h-16 rounded-2xl flex items-center justify-center">
              <p className = "text-black">Academic & Achievements</p>
            </div>

            <Post class = "Academic : Starting"
              content = {`"The day we stop learning is the day we die" - Michael Scott
              Here’s a look at my education journey — from major milestones to achievements and the experiences that pushed me to grow`}
              postpic = {pfp} 
              link = "" />

              <Post class = "Academic : NYP"
              content = {`Diploma in Game Development and Technology
                Nanyang Polytechnic — School of Design and Media
                2021 - 2024
                Focused on developing, creating and ideating games`}
              postpic = {pfp} 
              link = "" />

              <Post class = "Academic : BVSS"
              content = {`GCE 'O'-Level Graduate
                Bukit View Secondary School
                2017 - 2020
                Took up Computing as an 'O'-Level subject, which marked the start of my programming journey`}
              postpic = {pfp} 
              link = "" />

              <Post class = "Achievement : GameJam"
              content = {`H2 Games x NYP Game Jam 2023
                9th October 2023 - 13th October 2023
                Collaborated in a team of 5 to develop a mobile game - Angel Hunter
                Led the development side of the team
                Learnt to manage team workload realistically and avoid over scoping`}
              postpic = {pfp} 
              link = "" />
 
              <Post class = "Achievement : BIS"
              content = {`Bowling Is Science Academy
                2021 - 2023
                Spent 3 years honing my skills in bowling under BIS, aiming for Singapore's National Team
                Competed in multiple national-level competitions, including :
                • Centre of Excellence Challenge (2021)
                • National Age Group (2022 - Under 18 Category)
                • 52nd Singapore Nationals & 7th National Youth Challenge
                  (2022 - Under 18 Category)`}
              postpic = {pfp} 
              link = "" />

              <Post class = "Achievement : NYBC"
              content = {`National Youth Business Challenge 2017
                Certificate of Achievement
                NYBC taught me how to turn eco-friendly ideas into customer-focused concepts and pitch them effectively`}
              postpic = {pfp} 
              link = "" />

              <Post class = "Achievement : SJWP"
              content = {`Singapore Junior Water Prize 2018
                Certificate of Participation
                Collaborated with teammates in the Singapore Junior Water Prize to design a modular concept aimed at reducing water evaporation`}
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