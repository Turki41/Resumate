import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const ScoreBadge = ({ score }: { score: number }) => {
  const bgClass =
    score > 69
      ? "bg-badge-green"
      : score > 39
      ? "bg-badge-yellow"
      : "bg-badge-red";

  const textClass =
    score > 69
      ? "text-badge-green-text"
      : score > 39
      ? "text-badge-yellow-text"
      : "text-badge-red-text";

  return (
    <div
      className={`flex flex-row gap-1 items-center px-2 py-0.5 rounded-[96px] ${bgClass}`}
    >
      <img
        src={score > 69 ? "/icons/check.svg" : "/icons/warning.svg"}
        alt="score"
        className="size-4"
      />
      <p className={`text-sm font-medium ${textClass}`}>
        {score}/100
      </p>
    </div>
  );
};

const CategoryHeader = ({
  title,
  categoryScore,
}: {
  title: string;
  categoryScore: number;
}) => {
  return (
    <div className="flex flex-row gap-4 items-center py-2">
      <p className="text-2xl font-semibold">{title}</p>
      <ScoreBadge score={categoryScore} />
    </div>
  );
};

const CategoryContent = ({
  tips,
}: {
  tips: { type: "good" | "improve"; tip: string; explanation: string }[];
}) => {
  return (
    <div className="flex flex-col gap-4 items-center w-full">
      <div className="bg-gray-50 w-full rounded-lg px-5 py-4 grid grid-cols-2 gap-4">
        {tips.map((tip, index) => (
          <div className="flex flex-row gap-2 items-center" key={index}>
            <img
              src={
                tip.type === "good"
                  ? "/icons/check.svg"
                  : "/icons/warning.svg"
              }
              alt="score"
              className="size-5"
            />
            <p className="text-xl text-gray-500">{tip.tip}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4 w-full">
        {tips.map((tip, index) => {
          const containerClass =
            tip.type === "good"
              ? "bg-green-50 border border-green-200 text-green-700"
              : "bg-yellow-50 border border-yellow-200 text-yellow-700";

          return (
            <div
              key={index + tip.tip}
              className={`flex flex-col gap-2 rounded-2xl p-4 ${containerClass}`}
            >
              <div className="flex flex-row gap-2 items-center">
                <img
                  src={
                    tip.type === "good"
                      ? "/icons/check.svg"
                      : "/icons/warning.svg"
                  }
                  alt="score"
                  className="size-5"
                />
                <p className="text-xl font-semibold">{tip.tip}</p>
              </div>
              <p>{tip.explanation}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};


const Details = ({ feedback }: { feedback: Feedback }) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <CategoryHeader
              title="Tone & Style"
              categoryScore={feedback.toneAndStyle.score}
            />
          </AccordionTrigger>
          <AccordionContent>
            <CategoryContent tips={feedback.toneAndStyle.tips} />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            <CategoryHeader
              title="Content"
              categoryScore={feedback.content.score}
            />
          </AccordionTrigger>
          <AccordionContent>
            <CategoryContent tips={feedback.content.tips} />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger >
            <CategoryHeader
              title="Structure"
              categoryScore={feedback.structure.score}
            />
          </AccordionTrigger>
          <AccordionContent>
            <CategoryContent tips={feedback.structure.tips} />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger >
            <CategoryHeader
              title="Skills"
              categoryScore={feedback.skills.score}
            />
          </AccordionTrigger>
          <AccordionContent>
            <CategoryContent tips={feedback.skills.tips} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Details;