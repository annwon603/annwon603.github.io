import React from "react";

const codeColors = {
    "C++" : "bg-["
}



const ProjectCard = ({imgURL, title, description, codeStack}) => {
    return(
        <div>
            <div
                className="h-52 md:h-72" 
                style={{background: `url(${imgURL})`, backgroundSize: "cover"}}
                ></div>
            <div className="text-white">
                <h5>(title)</h5>
                <p>(description)</p>
            </div>
            {/*Button */}
            <div className="flex-row gap-2 mt-4">
                {codeStack.map((code,index) => (
                    <span key={index} className="bg-amber-50 border-2 rounded-2xl border-black">
                        {code}
                    </span>
                ))}

            </div>   
        </div>
    )
}

export default ProjectCard;