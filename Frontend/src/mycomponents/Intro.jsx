export default function Intro(){
    return <div className="bg-black">
        <div className="text-sm ml-8 pl-9 p-1 text-white">Introduction</div>
        <div className="text-4xl ml-8 pl-9 p-2 text-white">Overview</div>
        <div className="text-white ml-8 pl-9 p-2">I'm a skilled software developer with experience in TypeScript and JavaScript, and expertise in frameworks like React, Node.js and Next.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!</div>
        <div className="flex justify-center">
            <button className="text-2xl p-2 flex justify-center text-white border-red border-2" onClick={()=>{
            }}>Check out my Resume</button>
        </div>
    </div>
}