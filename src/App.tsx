import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Reusable from "./components/Reusable";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Reusable
        title="Ditch the Script, Get Smart Support"
        description="Enif AI is more than a chatbot. It understands your business, products, and policies to deliver personalized solutions for each customer. (Highlights personalization and unique value proposition)"
        src="/ditch.png"
      />

      <Reusable
        title="Limited Chatbots, Limitless Enif"
        description="Traditional chatbots struggle with complex questions. Enif uses AI to analyze each situation and find the best solution, drawing from your knowledge base, customer data, and more."
        src="/limit.png"
      />

      <Reusable
        title="Smooth Handoff to Human Support"
        description="If Enif ever needs help, it seamlessly connects your customer to a live agent. You're always in control."
        src="/smooth.png"
      />

      <Reusable
        title="Train Enif Like a New Hire (It's Easy!)"
        description="Set up Enif in minutes, no coding required. Train it on your knowledge base, and it'll tackle inquiries like a pro in no time."
        src="/train.png"
        bg="#6D43E2"
      />
    </>
  );
}

export default App;
