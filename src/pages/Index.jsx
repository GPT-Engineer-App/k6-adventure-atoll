import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Cat, Heart, Info } from "lucide-react";

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

const Index = () => {
  const [catFacts, setCatFacts] = useState([
    "Cats sleep for about 70% of their lives.",
    "A group of cats is called a clowder.",
    "Cats have over 20 vocalizations, including the purr, meow, and chirp.",
  ]);

  const addCatFact = () => {
    const newFact = "Cats have a third eyelid called the nictitating membrane.";
    setCatFacts([...catFacts, newFact]);
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
        
        <motion.img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg" 
          alt="Cute cat" 
          className="mx-auto object-cover w-full h-[500px] rounded-lg mb-8 shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />

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
      </div>
    </div>
  );
};

export default Index;
