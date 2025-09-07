import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Users, ChevronDown } from "lucide-react";
import heroImage from "@/assets/cache-2025-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <h1 className="hero-title mb-8 float-animation">
              Cache 2025
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              VSM College of Engineering's Premier Tech Festival
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 font-medium">
              September 17 & 18, 2025
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button size="lg" asChild className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold pulse-glow">
                <Link to="/registration">Register Now</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-primary/50 hover:bg-primary/10">
                <Link to="/events">View Events</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-muted-foreground" />
        </div>
      </section>

      {/* Event Info Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6 text-gradient">
              Join the Ultimate Tech Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Two days of innovation, competition, and networking at VSM College of Engineering
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-up">
            <Card className="card-gradient border-border hover:scale-105 smooth-transition">
              <CardContent className="pt-8 text-center">
                <Calendar className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-3 text-gradient">Event Dates</h3>
                <p className="text-lg text-muted-foreground mb-2">September 17 & 18</p>
                <p className="text-sm text-muted-foreground">Two full days of excitement</p>
              </CardContent>
            </Card>

            <Card className="card-gradient border-border hover:scale-105 smooth-transition">
              <CardContent className="pt-8 text-center">
                <MapPin className="w-16 h-16 text-secondary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-3 text-gradient">Venue</h3>
                <p className="text-lg text-muted-foreground mb-2">VSM College of Engineering</p>
                <p className="text-sm text-muted-foreground">Ramachandrapuram, Andhra Pradesh</p>
              </CardContent>
            </Card>

            <Card className="card-gradient border-border hover:scale-105 smooth-transition">
              <CardContent className="pt-8 text-center">
                <Users className="w-16 h-16 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-3 text-gradient">Open for All</h3>
                <p className="text-lg text-muted-foreground mb-2">Students from All Colleges</p>
                <p className="text-sm text-muted-foreground">Compete with the best minds</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6 text-gradient">
              Featured Events
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From technical challenges to creative competitions, we have something for everyone
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 animate-slide-up">
            <Card className="card-gradient border-border hover:scale-105 smooth-transition">
              <CardHeader>
                <CardTitle className="text-primary">Web Development</CardTitle>
                <CardDescription>Build innovative web applications</CardDescription>
              </CardHeader>
            </Card>

            <Card className="card-gradient border-border hover:scale-105 smooth-transition">
              <CardHeader>
                <CardTitle className="text-secondary">Esports Tournament</CardTitle>
                <CardDescription>BGMI & Free Fire championships</CardDescription>
              </CardHeader>
            </Card>

            <Card className="card-gradient border-border hover:scale-105 smooth-transition">
              <CardHeader>
                <CardTitle className="text-accent">Tech Expo</CardTitle>
                <CardDescription>Showcase your innovative projects</CardDescription>
              </CardHeader>
            </Card>

            <Card className="card-gradient border-border hover:scale-105 smooth-transition">
              <CardHeader>
                <CardTitle className="text-primary">Photography</CardTitle>
                <CardDescription>Capture tech through your lens</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center animate-slide-up">
            <Button size="lg" asChild variant="outline" className="border-primary/50 hover:bg-primary/10">
              <Link to="/events">View All Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4">
          <Card className="card-gradient border-border p-12 text-center animate-slide-up">
            <h2 className="text-4xl font-bold mb-6 text-gradient">
              Ready to Make Your Mark?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join Cache 2025 and be part of the most exciting tech fest in the region. 
              Register now and secure your spot!
            </p>
            <Button size="lg" asChild className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold pulse-glow">
              <Link to="/registration">Register for Cache 2025</Link>
            </Button>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-gradient">Cache 2025</h3>
              <p className="text-muted-foreground">
                VSM College of Engineering's premier tech festival bringing together innovation and competition.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Quick Links</h4>
              <div className="space-y-2">
                <Link to="/about" className="block text-muted-foreground hover:text-primary smooth-transition">About Us</Link>
                <Link to="/organizers" className="block text-muted-foreground hover:text-primary smooth-transition">Organizers</Link>
                <Link to="/registration" className="block text-muted-foreground hover:text-primary smooth-transition">Registration</Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Contact Us</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>karthik8179950933@gmail.com</p>
                <p>VSM College of Engineering</p>
                <p>Ramachandrapuram, Andhra Pradesh</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Developers</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>R Karthikeya (UptoMo)</p>
                <p>Raghava (Co-founder)</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 Cache 2025, VSM College of Engineering. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
