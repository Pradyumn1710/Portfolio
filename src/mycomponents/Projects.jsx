import {Button} from '../components/ui/button'

export default function Projects(){
    return <div>
        <Proj/>
    </div>
}
function Proj(){
    return <div className="flex justify-around">
        <div>
            <img src="" alt="project image" />
        </div>
        <div>
            <div>Title</div>
            <div>Description</div>
            <div className="flex justify-around">
                <Button>Visit Site</Button>
                <p>Source code</p>
            </div>
        </div>
    </div>
}