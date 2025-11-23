import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { QuestionCard } from "@/components/QuestionCard";
import { ProgressBar } from "@/components/ProgressBar";
import { ResultsPage } from "@/components/ResultsPage";
import { questions } from "@/data/questions";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Index = () => {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedQuestions, setSelectedQuestions] = useState<typeof questions>([]);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([]);
  const [showResults, setShowResults] = useState(false);

  const selectRandomQuestions = () => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(60, questions.length));
  };

  const handleStart = () => {
    const selected = selectRandomQuestions();
    setSelectedQuestions(selected);
    setUserAnswers(new Array(selected.length).fill(null));
    setStarted(true);
  };

  const handleRestart = () => {
    setStarted(false);
    setCurrentQuestion(0);
    setSelectedQuestions([]);
    setUserAnswers([]);
    setShowResults(false);
  };

  const handleSelectAnswer = (answerIndex: number) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setUserAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < selectedQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleFinish = () => {
    setShowResults(true);
    window.scrollTo(0, 0);
  };

  const answeredCount = userAnswers.filter((answer) => answer !== null).length;

  if (showResults) {
    return (
      <div className="min-h-screen bg-background py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <ResultsPage
            questions={selectedQuestions}
            userAnswers={userAnswers}
            onRestart={handleRestart}
          />
        </div>
      </div>
    );
  }

  if (!started) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <Card className="max-w-2xl w-full p-8 md:p-12 text-center space-y-6">
          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Simulado de Conhecimentos
            </h1>
            <p className="text-lg text-muted-foreground">
              Teste seus conhecimentos com 60 perguntas
            </p>
          </div>

          <div className="space-y-4 text-left bg-muted/50 rounded-lg p-6">
            <h2 className="font-semibold text-lg text-foreground">
              Instruções:
            </h2>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>O simulado contém 60 questões de múltipla escolha</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Você pode navegar livremente entre as questões</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>É possível alterar suas respostas antes de finalizar</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>
                  Ao finalizar, você verá seu resultado e poderá revisar todas as
                  questões
                </span>
              </li>
            </ul>
          </div>

          <Button onClick={handleStart} size="lg" className="w-full md:w-auto">
            Iniciar Simulado
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <ProgressBar
          current={currentQuestion + 1}
          total={selectedQuestions.length}
        />

        <QuestionCard
          question={selectedQuestions[currentQuestion]}
          selectedAnswer={userAnswers[currentQuestion]}
          onSelectAnswer={handleSelectAnswer}
        />

        <div className="flex flex-col sm:flex-row gap-3 justify-between items-stretch sm:items-center">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="w-full sm:w-auto"
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Anterior
          </Button>

          <div className="text-center text-sm text-muted-foreground order-first sm:order-none">
            {answeredCount} de {selectedQuestions.length} respondidas
          </div>

          {currentQuestion < selectedQuestions.length - 1 ? (
            <Button onClick={handleNext} className="w-full sm:w-auto">
              Próxima
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button
              onClick={handleFinish}
              className="w-full sm:w-auto bg-success hover:bg-success/90"
            >
              Finalizar Simulado
            </Button>
          )}
        </div>

        <div className="grid grid-cols-10 gap-2 pt-4">
          {selectedQuestions.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentQuestion(index)}
              className={`aspect-square rounded-md text-xs font-medium transition-colors ${
                userAnswers[index] !== null
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              } ${
                currentQuestion === index
                  ? "ring-2 ring-primary ring-offset-2"
                  : ""
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
