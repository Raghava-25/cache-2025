import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Code, Palette, Gamepad2, Camera, Trophy } from "lucide-react";
import eventBg from "@/assets/event-card-bg.jpg";
import Footer from "@/components/Footer";

const technicalEvents = [
  {
    id: "web-dev",
    title: "Web Development Challenge",
    description: "Build innovative web applications using modern frameworks and showcase your frontend and backend skills.",
    icon: Code,
    price: 200
  },
  {
    id: "poster",
    title: "Poster Presentation",
    description: "Present your research and technical projects through creative and informative poster presentations.",
    icon: Palette,
    price: 100
  },
  {
    id: "tech-expo",
    title: "Tech Expo",
    description: "Demonstrate your innovative projects and technical solutions to a panel of industry experts.",
    icon: Trophy,
    price: 300
  },
  {
    id: "pymaster",
    title: "PyMaster Contest",
    description: "Test your Python programming skills with challenging algorithms and data structure problems.",
    icon: Code,
    price: 150
  },
  {
    id: "tech-quiz",
    title: "Technical Quiz",
    description: "Challenge your knowledge across various technical domains including programming, AI, and emerging technologies.",
    icon: Trophy,
    price: 100
  }
];

const nonTechnicalEvents = [
  {
    id: "photography",
    title: "Photography Contest",
    description: "Capture the essence of technology and innovation through your lens in this creative photography competition.",
    icon: Camera,
    price: 150
  },
  {
    id: "free-fire",
    title: "Free Fire Esports Championship",
    description: "Battle royale excitement awaits! Compete with teams from across colleges in this intense gaming tournament.",
    icon: Gamepad2,
    price: 200
  },
  {
    id: "drawing",
    title: "Live Drawing",
    description: "Express your artistic skills in this live drawing competition with tech-themed creative challenges.",
    icon: Palette,
    price: 100
  },
  {
    id: "bgmi",
    title: "BGMI Esports Tournament",
    description: "Join the ultimate mobile gaming championship and prove your tactical skills in BGMI battles.",
    icon: Gamepad2,
    price: 250
  },
  {
    id: "meme-contest",
    title: "Tech Meme Contest",
    description: "Create hilarious and relatable tech memes that capture the spirit of programming and technology culture.",
    icon: Palette,
    price: 50
  }
];

const EventCard = ({ event, category }: { event: any; category: 'technical' | 'nonTechnical' }) => {
  const IconComponent = event.icon;
  const categoryColor = category === 'technical' ? 'primary' : 'secondary';
  
  return (
    <Card className="group card-gradient border-border hover:scale-105 smooth-transition overflow-hidden">
      <div 
        className="h-48 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${eventBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          <IconComponent className={`w-8 h-8 text-${categoryColor}`} />
        </div>
        <div className="absolute top-4 right-4">
          <Badge variant="secondary" className="bg-card/90">
            ₹{event.price}
          </Badge>
        </div>
      </div>
      
      <CardHeader>
        <CardTitle className="text-xl group-hover:text-gradient smooth-transition">
          {event.title}
        </CardTitle>
        <CardDescription>
          {event.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <Button 
          asChild 
          className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground"
        >
          <Link to={`/registration?event=${event.id}`}>
            Register
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

const Events = () => {
  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-6 text-gradient">
            Cache 2025 Events
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose from our exciting lineup of technical and non-technical events. 
            Each competition is designed to challenge your skills and showcase your talents.
          </p>
        </div>

        {/* Technical Events */}
        <section className="mb-16 animate-slide-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-primary">
              Technical Events
            </h2>
            <p className="text-lg text-muted-foreground">
              Test your programming, development, and technical presentation skills
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technicalEvents.map((event) => (
              <EventCard 
                key={event.id} 
                event={event} 
                category="technical"
              />
            ))}
          </div>
        </section>

        {/* Non-Technical Events */}
        <section className="mb-16 animate-slide-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-secondary">
              Non-Technical Events
            </h2>
            <p className="text-lg text-muted-foreground">
              Showcase your creativity, gaming skills, and artistic talents
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nonTechnicalEvents.map((event) => (
              <EventCard 
                key={event.id} 
                event={event} 
                category="nonTechnical"
              />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center animate-slide-up">
          <Card className="card-gradient border-border p-8">
            <h2 className="text-3xl font-bold mb-4 text-gradient">
              Ready to Compete?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Register for multiple events and maximize your chances of winning. 
              Early registration gets you the best rates!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-gradient-primary hover:opacity-90 pulse-glow">
                <Link to="/registration">Register for Events</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events;