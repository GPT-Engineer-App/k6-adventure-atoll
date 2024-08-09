import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Cat, Heart, Info, ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Progress } from "@/components/ui/progress";

const CatFact = ({ fact }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white p-4 rounded-lg shadow-md mb-4"
  >
    <p className="text-gray-800">{fact}</p>
  </motion.div>
);

const catImages = [
  "https://placekitten.com/800/600",
  "https://placekitten.com/801/600",
  "https://placekitten.com/802/600",
  "https://placekitten.com/803/600",
  "https://placekitten.com/804/600",
];

const quizQuestions = [
  {
    question: "What is a group of cats called?",
    options: ["A pride", "A clowder", "A pack", "A herd"],
    correctAnswer: "A clowder",
  },
  {
    question: "How many hours do cats typically sleep in a day?",
    options: ["8-10 hours", "12-14 hours", "16-20 hours", "22-23 hours"],
    correctAnswer: "16-20 hours",
  },
  {
    question: "Which of these is NOT a cat breed?",
    options: ["Siamese", "Persian", "Labrador", "Maine Coon"],
    correctAnswer: "Labrador",
  },
];

const Index = () => {
  const [catFacts, setCatFacts] = useState([
    "Cats sleep for about 70% of their lives.",
    "A group of cats is called a clowder.",
    "Cats have over 20 vocalizations, including the purr, meow, and chirp.",
  ]);
  const [currentQuizQuestion, setCurrentQuizQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const addCatFact = () => {
    const newFact = "Cats have a third eyelid called the nictitating membrane.";
    setCatFacts([...catFacts, newFact]);
  };

  const handleQuizAnswer = (selectedAnswer) => {
    if (selectedAnswer === quizQuestions[currentQuizQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuizQuestion < quizQuestions.length - 1) {
      setCurrentQuizQuestion(currentQuizQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuizQuestion(0);
    setScore(0);
    setQuizCompleted(false);
  };

  return (
    <div className="min-h-screen p-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-6xl font-bold mb-6 text-center text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Feline Fascination <Cat className="inline-block ml-2" />
        </motion.h1>
        
        <Carousel className="mb-8">
          <CarouselContent>
            {catImages.map((src, index) => (
              <CarouselItem key={index}>
                <img src={src} alt={`Cat ${index + 1}`} className="mx-auto object-cover w-full h-[500px] rounded-lg shadow-lg" />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <Tabs defaultValue="characteristics" className="mb-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="characteristics">Characteristics</TabsTrigger>
            <TabsTrigger value="breeds">Popular Breeds</TabsTrigger>
          </TabsList>
          <TabsContent value="characteristics">
            <Card>
              <CardHeader>
                <CardTitle>Characteristics of Cats</CardTitle>
                <CardDescription>What makes cats unique?</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Independent nature with a touch of affection</li>
                  <li>Excellent hunters with razor-sharp claws and teeth</li>
                  <li>Incredibly flexible bodies and lightning-quick reflexes</li>
                  <li>Superhero-level senses, especially hearing and night vision</li>
                  <li>Masters of communication through vocalizations, body language, and scent</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="breeds">
            <Card>
              <CardHeader>
                <CardTitle>Popular Cat Breeds</CardTitle>
                <CardDescription>Some well-known cat breeds around the world</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Siamese: The chatty socialites with striking blue eyes</li>
                  <li>Maine Coon: Gentle giants with luxurious fur and tufted ears</li>
                  <li>Persian: Regal beauties with pushed-in faces and flowing coats</li>
                  <li>Bengal: Mini leopards bringing the wild into your home</li>
                  <li>Scottish Fold: Adorable felines with unique folded ears</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Info className="mr-2" /> Fascinating Cat Facts
            </CardTitle>
          </CardHeader>
          <CardContent>
            {catFacts.map((fact, index) => (
              <CatFact key={index} fact={fact} />
            ))}
            <Button onClick={addCatFact} className="mt-4">
              <Heart className="mr-2 h-4 w-4" /> Add Cat Fact
            </Button>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Cat className="mr-2" /> Cat Quiz
            </CardTitle>
          </CardHeader>
          <CardContent>
            {!quizCompleted ? (
              <>
                <h3 className="text-lg font-semibold mb-4">
                  Question {currentQuizQuestion + 1} of {quizQuestions.length}
                </h3>
                <p className="mb-4">{quizQuestions[currentQuizQuestion].question}</p>
                <div className="space-y-2">
                  {quizQuestions[currentQuizQuestion].options.map((option, index) => (
                    <Button
                      key={index}
                      onClick={() => handleQuizAnswer(option)}
                      className="w-full justify-start"
                      variant="outline"
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Quiz Completed!</h3>
                <p className="text-xl mb-4">Your Score: {score} / {quizQuestions.length}</p>
                <Button onClick={resetQuiz}>Try Again</Button>
              </div>
            )}
            <Progress
              value={(currentQuizQuestion / quizQuestions.length) * 100}
              className="mt-4"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
