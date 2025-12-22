import ScoreCircle from "./ScoreCircle"
import Image from "next/image"

const ResumeCard = ({ resume }: { resume: ResumeShowcase }) => {
    return (
        <div className="resume-card animate-in fade-in duration-1000">
            <div className="resume-card-header">

                <div className="flex flex-col gap-2">
                    <h2 className="text-black! font-bold wrap-break-words">{resume.jobTitle}</h2>
                    <h3 className="text-lg text-gray-500 wrap-break-words">{resume.companyName}</h3>
                </div>

                <div className="shrink-0">
                    <ScoreCircle score={resume.overallScore} />
                </div>

            </div>

            <div className="gradient-border overflow-hidden animate-in fade-in duration-1000">
                <div className="h-full w-full overflow-hidden">
                    <Image src={resume.imagePath} alt={'resume'} width={1280} height={720} className="w-full h-auto object-cover"/>
                </div>
            </div>
        </div>
    )
}

export default ResumeCard