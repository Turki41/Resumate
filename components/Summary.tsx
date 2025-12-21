import ScoreBadge from "./ScoreBadge"
import ScoreGauge from "./ScoreGauge"

interface SummaryProps {
    feedback: Feedback
}

const Summary = ({ feedback }: SummaryProps) => {
    return (
        <div className="bg-white rounded-2xl shadow-md w-full">
            <div className="flex max-sm:flex-col items-center p-4 gap-8">
                <ScoreGauge score={feedback.overallScore} />

                <div className="flex flex-col gap-2">
                    <h2 className="font-bold">Your Overall Resume Score</h2>
                    <p className="text-gray-500">This score is calculated based on the variables listed below</p>
                </div>
            </div>

            <Category title='Tone & Style' score={feedback?.toneAndStyle?.score} />
            <Category title='Content' score={feedback?.content?.score} />
            <Category title='Structure' score={feedback?.structure?.score} />
            <Category title='Skills' score={feedback?.skills?.score} />
        </div>
    )
}

const Category = ({ title, score }: { title: string, score: number }) => {
    const textColor = (score: number) => {
        if (score > 70) return 'text-green-600'
        if (score > 49) return 'text-yellow-600'
        return 'text-red-600'
    }

    return (
        <div className="resume-summary">
            <div className="category">
                <div className="flex gap-2 items-center justify-center">
                    <p className="text-xl">{title}</p>
                    <ScoreBadge score={score}/>
                </div>
                <p className="text-xl">
                    <span className={`${textColor(score)}`}>{score}</span>/100
                </p>
            </div>
        </div>
    )
}

export default Summary