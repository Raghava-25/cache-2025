import { Link } from "react-router-dom";

const Footer = () => {
  return (
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
  );
};

export default Footer;