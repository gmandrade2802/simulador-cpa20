import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Question } from "@/data/questions";
import { QuestionCard } from "./QuestionCard";
import { Separator } from "@/components/ui/separator";

interface ResultsPageProps {
  questions: Question[];
  userAnswers: (number | null)[];
  onRestart: () => void;
}

export const ResultsPage = ({
  questions,
  userAnswers,
  onRestart,
}: ResultsPageProps) => {
  const correctCount = userAnswers.filter(
    (answer, index) => answer === questions[index].correctAnswer
  ).length;

  const incorrectCount = questions.length - correctCount;
  const percentage = ((correctCount / questions.length) * 100).toFixed(1);

  return (
    <div className="space-y-8">
      {/* Summary Card */}
      <Card className="p-8 text-center space-y-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Simulado Concluído!
          </h1>
          <p className="text-muted-foreground">
            Confira seu desempenho abaixo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="text-5xl font-bold text-primary">{percentage}%</div>
            <p className="text-sm text-muted-foreground">Aproveitamento</p>
          </div>

          <div className="space-y-2">
            <div className="text-5xl font-bold text-success">{correctCount}</div>
            <p className="text-sm text-muted-foreground">Questões Corretas</p>
          </div>

          <div className="space-y-2">
            <div className="text-5xl font-bold text-error">{incorrectCount}</div>
            <p className="text-sm text-muted-foreground">Questões Erradas</p>
          </div>
        </div>

        <Button onClick={onRestart} size="lg" className="w-full md:w-auto">
          Fazer Novo Simulado
        </Button>
      </Card>

      <Separator />

      {/* Review Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-foreground">
          Revisão das Questões
        </h2>
        <p className="text-muted-foreground">
          Revise todas as questões e suas respostas
        </p>
      </div>

      <div className="space-y-6">
        {questions.map((question, index) => (
          <div key={question.id} className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">
                Questão {index + 1}
              </h3>
              {userAnswers[index] === question.correctAnswer ? (
                <span className="text-success font-semibold flex items-center gap-1">
                  <span className="text-xl">✓</span> Correta
                </span>
              ) : (
                <span className="text-error font-semibold flex items-center gap-1">
                  <span className="text-xl">✗</span> Incorreta
                </span>
              )}
            </div>
            <QuestionCard
              question={question}
              selectedAnswer={null}
              onSelectAnswer={() => {}}
              isReviewMode={true}
              userAnswer={userAnswers[index]}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center pt-8">
        <Button onClick={onRestart} size="lg">
          Fazer Novo Simulado
        </Button>
      </div>
    </div>
  );
};
