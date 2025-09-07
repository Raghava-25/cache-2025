import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Footer from "@/components/Footer";

// Import profile images
import abhivanImage from "@/assets/organizers/abhivan-charan.jpg";
import nagaDurgaImage from "@/assets/organizers/naga-durga.jpg";
import vinodImage from "@/assets/organizers/vinod.jpg";
import muraliImage from "@/assets/organizers/murali.jpg";
import raghavaImage from "@/assets/organizers/raghava.jpg";
import zaheerImage from "@/assets/organizers/zaheer.jpg";
import kranthImage from "@/assets/organizers/kranth.jpg";

const organizers = [
  { name: "Abhivan Charan", role: "Event Coordinator", image: abhivanImage },
  { name: "Naga Durga", role: "Technical Lead", image: nagaDurgaImage },
  { name: "Vinod", role: "Operations Head", image: vinodImage },
  { name: "Murali", role: "Marketing Lead", image: muraliImage },
  { name: "Raghava", role: "Development Lead", image: raghavaImage },
  { name: "Zaheer", role: "Design Head", image: zaheerImage },
  { name: "Kranth", role: "Logistics Coordinator", image: kranthImage },
];

const Organizers = () => {
  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-6 text-gradient">
            Meet Our Organizers
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The dedicated team behind Cache 2025, working tirelessly to make this event 
            an unforgettable experience for all participants.
          </p>
        </div>

        {/* Organizers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 animate-slide-up">
          {organizers.map((organizer, index) => (
            <Card 
              key={organizer.name} 
              className="group card-gradient border-border hover:scale-105 smooth-transition text-center"
            >
              <CardContent className="pt-8 pb-6">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage 
                    src={organizer.image} 
                    alt={`${organizer.name} profile picture`}
                    className="object-cover"
                  />
                  <AvatarFallback className="bg-gradient-primary text-primary-foreground text-2xl font-bold">
                    {organizer.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold mb-2 group-hover:text-gradient smooth-transition">
                  {organizer.name}
                </h3>
                <p className="text-muted-foreground">
                  {organizer.role}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default Organizers;