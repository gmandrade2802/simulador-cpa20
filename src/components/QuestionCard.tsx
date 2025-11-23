import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Question } from "@/data/questions";
import { Badge } from "@/components/ui/badge";

interface QuestionCardProps {
  question: Question;
  selectedAnswer: number | null;
  onSelectAnswer: (answerIndex: number) => void;
  isReviewMode?: boolean;
  userAnswer?: number | null;
}

export const QuestionCard = ({
  question,
  selectedAnswer,
  onSelectAnswer,
  isReviewMode = false,
  userAnswer,
}: QuestionCardProps) => {
  const getOptionStyle = (index: number) => {
    if (!isReviewMode) {
      return selectedAnswer === index
        ? "border-primary bg-primary/10"
        : "border-border hover:border-primary/50";
    }

    // Review mode
    const isCorrect = index === question.correctAnswer;
    const isUserAnswer = index === userAnswer;

    if (isCorrect) {
      return "border-success bg-success/10";
    }

    if (isUserAnswer && !isCorrect) {
      return "border-error bg-error/10";
    }

    return "border-border opacity-60";
  };

  const getOptionIcon = (index: number) => {
    if (!isReviewMode) return null;

    const isCorrect = index === question.correctAnswer;
    const isUserAnswer = index === userAnswer;

    if (isCorrect) {
      return <span className="text-success font-bold">✓</span>;
    }

    if (isUserAnswer && !isCorrect) {
      return <span className="text-error font-bold">✗</span>;
    }

    return null;
  };

  return (
    <Card className="p-6 md:p-8">
      <div className="space-y-6">
        <div className="space-y-2">
          {question.category && (
            <Badge variant="secondary" className="mb-2">
              {question.category}
            </Badge>
          )}
          <h2 className="text-xl md:text-2xl font-semibold text-foreground">
            {question.question}
          </h2>
        </div>

        <div className="space-y-3">
          {question.options.map((option, index) => (
            <Button
              key={index}
              variant="outline"
              className={`w-full justify-between text-left h-auto py-4 px-5 transition-all ${getOptionStyle(
                index
              )}`}
              onClick={() => !isReviewMode && onSelectAnswer(index)}
              disabled={isReviewMode}
            >
              <span className="text-base">{option}</span>
              {getOptionIcon(index)}
            </Button>
          ))}
        </div>
      </div>
    </Card>
  );
};
