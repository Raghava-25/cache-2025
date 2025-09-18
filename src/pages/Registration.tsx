import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Footer from "@/components/Footer";

const events = {
  technical: [
    { id: 'web-dev', name: 'Web Development Challenge', price: 200 },
    { id: 'poster', name: 'Poster Presentation', price: 100 },
    { id: 'tech-expo', name: 'Tech Expo', price: 300 },
    { id: 'pymaster', name: 'PyMaster Contest', price: 150 },
    { id: 'tech-quiz', name: 'Technical Quiz', price: 100 },
  ],
  nonTechnical: [
    { id: 'photography', name: 'Photography Contest', price: 150 },
    { id: 'free-fire', name: 'Free Fire Esports Championship', price: 200 },
    { id: 'drawing', name: 'Live Drawing', price: 100 },
    { id: 'bgmi', name: 'BGMI Esports Tournament', price: 250 },
    { id: 'meme-contest', name: 'Tech Meme Contest', price: 50 },
  ],
};

const Registration = () => {
  const { toast } = useToast();
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    roll_number: '',
    section: '',
  });
  const [selectedEvents, setSelectedEvents] = useState<Array<{id: string, name: string, price: number}>>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Pre-select event from URL parameter
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const eventParam = searchParams.get('event');
    if (eventParam) {
      const allEvents = [...events.technical, ...events.nonTechnical];
      const event = allEvents.find(e => e.id === eventParam);
      if (event) {
        setSelectedEvents([event]);
      }
    }
  }, [location]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleEventToggle = (event: {id: string, name: string, price: number}) => {
    setSelectedEvents(prev => 
      prev.find(e => e.id === event.id)
        ? prev.filter(e => e.id !== event.id)
        : [...prev, event]
    );
  };

  const getTotalAmount = () => {
    return selectedEvents.reduce((total, event) => total + event.price, 0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.college) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    if (selectedEvents.length === 0) {
      toast({
        title: "No events selected",
        description: "Please select at least one event to participate in.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      // Save registration to database
      const { error } = await supabase
        .from('registrations')
        .insert({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          college: formData.college,
          roll_number: formData.roll_number,
          section: formData.section,
          selected_events: selectedEvents,
          total_amount: getTotalAmount(),
        });

      if (error) throw error;

      toast({
        title: "Registration Successful! 🎉",
        description: `Welcome ${formData.name}! You've successfully registered for ${selectedEvents.length} event(s). Total: ₹${getTotalAmount()}`,
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        college: '',
        roll_number: '',
        section: '',
      });
      setSelectedEvents([]);
    } catch (error) {
      console.error('Registration error:', error);
      toast({
        title: "Registration Failed",
        description: "There was an error processing your registration. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl font-bold mb-4 text-gradient">
              Register for Cache 2025
            </h1>
            <p className="text-xl text-muted-foreground">
              Join us for the ultimate tech fest experience on Sep 17 & 18
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <Card className="card-gradient border-border animate-slide-up">
              <CardHeader>
                <CardTitle className="text-2xl text-gradient">Personal Information</CardTitle>
                <CardDescription>Please fill in your details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="college">College *</Label>
                    <Input
                      id="college"
                      name="college"
                      value={formData.college}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="roll_number">Roll Number *</Label>
                    <Input
                      id="roll_number"
                      name="roll_number"
                      value={formData.roll_number}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="section">Section *</Label>
                    <Input
                      id="section"
                      name="section"
                      value={formData.section}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Event Selection */}
            <Card className="card-gradient border-border animate-slide-up">
              <CardHeader>
                <CardTitle className="text-2xl text-gradient">Select Events</CardTitle>
                <CardDescription>Choose the events you want to participate in</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Technical Events */}
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">Technical Events</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                     {events.technical.map(event => (
                       <div key={event.id} className="flex items-center space-x-2 p-3 rounded-lg bg-muted/30">
                         <Checkbox
                           id={event.id}
                           checked={selectedEvents.find(e => e.id === event.id) !== undefined}
                           onCheckedChange={() => handleEventToggle(event)}
                         />
                         <Label htmlFor={event.id} className="flex-1 cursor-pointer">
                           {event.name}
                         </Label>
                         <span className="text-sm font-medium text-primary">₹{event.price}</span>
                       </div>
                     ))}
                  </div>
                </div>

                {/* Non-Technical Events */}
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-secondary">Non-Technical Events</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                     {events.nonTechnical.map(event => (
                       <div key={event.id} className="flex items-center space-x-2 p-3 rounded-lg bg-muted/30">
                         <Checkbox
                           id={event.id}
                           checked={selectedEvents.find(e => e.id === event.id) !== undefined}
                           onCheckedChange={() => handleEventToggle(event)}
                         />
                         <Label htmlFor={event.id} className="flex-1 cursor-pointer">
                           {event.name}
                         </Label>
                         <span className="text-sm font-medium text-secondary">₹{event.price}</span>
                       </div>
                     ))}
                  </div>
                </div>

                {/* Total Amount */}
                {selectedEvents.length > 0 && (
                  <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-medium">Total Amount:</span>
                      <span className="text-2xl font-bold text-primary">₹{getTotalAmount()}</span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Submit Button */}
            <div className="text-center">
              <Button
                type="submit"
                size="lg"
                disabled={isLoading}
                className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold px-8 py-3 pulse-glow"
              >
                {isLoading ? "Processing..." : "Register Now"}
              </Button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Registration;