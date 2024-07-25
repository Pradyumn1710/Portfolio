export default function Intro(){
    return (
        <div className="bg-black">
            <div className="text-sm ml-8 pl-9 pb-1 pt-1 text-white">Introduction</div>
            <div className="text-4xl ml-8 pl-9 pb-2 pt-2 text-white">Overview</div>
            <div className="text-white ml-11 pl-9 p-2 pb-3">
                "I am a <strong>full-stack developer</strong>, <strong>designer</strong>, and <strong>DevOps</strong> practitioner. Currently pursuing studies in AI/ML at the Indian Institute of Information Technology Nagpur, I specialize in TypeScript and JavaScript. Passionate about creating efficient and innovative solutions, I bring a blend of technical expertise and creative flair to every project."
            </div>
            <div className="ml-11 pl-9 pt-2 pb-4">
                <a href="https://amaranth-danica-10.tiiny.site">
                    <button className="text-2xl p-2 text-white border-white border-2 rounded-" onClick={() => {}}>Check out my Resume</button>
                </a>
            </div>
        </div>
    );
}