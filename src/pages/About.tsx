import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Users, Award } from "lucide-react";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-6 text-gradient">
            About Cache 2025
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience the future of technology at VSM College of Engineering's premier tech fest. 
            Cache 2025 brings together innovation, competition, and creativity in one spectacular event.
          </p>
        </div>

        {/* Event Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 animate-slide-up">
          <Card className="card-gradient border-border text-center">
            <CardContent className="pt-6">
              <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Event Dates</h3>
              <p className="text-muted-foreground">Sep 17 & 18, 2025</p>
            </CardContent>
          </Card>
          
          <Card className="card-gradient border-border text-center">
            <CardContent className="pt-6">
              <MapPin className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Venue</h3>
              <p className="text-muted-foreground">VSM College of Engineering</p>
            </CardContent>
          </Card>
          
          <Card className="card-gradient border-border text-center">
            <CardContent className="pt-6">
              <Users className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Participants</h3>
              <p className="text-muted-foreground">Students from All Colleges</p>
            </CardContent>
          </Card>
          
          <Card className="card-gradient border-border text-center">
            <CardContent className="pt-6">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Events</h3>
              <p className="text-muted-foreground">10+ Exciting Competitions</p>
            </CardContent>
          </Card>
        </div>

        {/* About the Fest */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <Card className="card-gradient border-border animate-slide-up">
            <CardHeader>
              <CardTitle className="text-2xl text-gradient">About Cache 2025</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Cache 2025 is VSM College of Engineering's flagship technology festival, designed to 
                celebrate innovation, creativity, and technical excellence. Our fest brings together 
                the brightest minds from across the region to compete, collaborate, and showcase 
                their talents.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From cutting-edge web development challenges to exciting esports tournaments, 
                Cache 2025 offers something for everyone. Join us for two days of intensive 
                competition, learning, and networking opportunities.
              </p>
            </CardContent>
          </Card>

          <Card className="card-gradient border-border animate-slide-up">
            <CardHeader>
              <CardTitle className="text-2xl text-gradient">What to Expect</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-semibold text-primary">Technical Competitions</h4>
                    <p className="text-muted-foreground">Web Development, Tech Expo, PyMaster Contest, and more</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-semibold text-secondary">Esports Tournaments</h4>
                    <p className="text-muted-foreground">Free Fire and BGMI championships with exciting prizes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-semibold text-accent">Creative Events</h4>
                    <p className="text-muted-foreground">Photography contests, live drawing, and tech meme competitions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-semibold text-primary">Networking Opportunities</h4>
                    <p className="text-muted-foreground">Connect with like-minded students and industry professionals</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* College Information */}
        <Card className="card-gradient border-border mb-12 animate-slide-up">
          <CardHeader>
            <CardTitle className="text-2xl text-gradient">About VSM College of Engineering</CardTitle>
            <CardDescription>Excellence in Technical Education Since 2009</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Founded in 2009 by the Ramachandrapuram Educational Society, VSM College of Engineering has 
              grown into one of the most reputed institutions in the Konaseema region. Affiliated with 
              JNTU Kakinada, the college was established to bridge the gap between industry needs and 
              academic excellence, focusing on innovation, research, and modern teaching methodologies.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With a commitment to producing graduates who can compete on a global scale, VSMCE continues 
              to adapt to the challenges of globalization and rapid technological change. The institution 
              strives to become a hub for technical and management education in Andhra Pradesh, known for 
              nurturing talent and delivering quality education.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="text-center p-3 bg-muted/20 rounded-lg">
                <div className="text-2xl font-bold text-primary">2009</div>
                <div className="text-sm text-muted-foreground">Established</div>
              </div>
              <div className="text-center p-3 bg-muted/20 rounded-lg">
                <div className="text-2xl font-bold text-secondary">5000+</div>
                <div className="text-sm text-muted-foreground">Students</div>
              </div>
              <div className="text-center p-3 bg-muted/20 rounded-lg">
                <div className="text-2xl font-bold text-accent">300+</div>
                <div className="text-sm text-muted-foreground">Faculty</div>
              </div>
              <div className="text-center p-3 bg-muted/20 rounded-lg">
                <div className="text-2xl font-bold text-primary">27k+</div>
                <div className="text-sm text-muted-foreground">Books</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center animate-slide-up">
          <Card className="card-gradient border-border p-8">
            <h2 className="text-3xl font-bold mb-4 text-gradient">
              Ready to Join Cache 2025?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Don't miss out on this incredible opportunity to showcase your skills, 
              learn from the best, and network with industry professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-gradient-primary hover:opacity-90 pulse-glow">
                <Link to="/registration">Register Now</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/events">View Events</Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;