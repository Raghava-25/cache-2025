import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";

const organizers = [
  { name: "Abhivan Charan", role: "Event Coordinator" },
  { name: "Naga Durga", role: "Technical Lead" },
  { name: "Vinod", role: "Operations Head" },
  { name: "Murali", role: "Marketing Lead" },
  { name: "Raghava", role: "Development Lead" },
  { name: "Zaheer", role: "Design Head" },
  { name: "Kranth", role: "Logistics Coordinator" },
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
                <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">
                    {organizer.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
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