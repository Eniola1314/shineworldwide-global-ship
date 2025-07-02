import { Globe, Package, Truck, Map } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-accent p-2 rounded-lg">
                <Globe className="h-6 w-6 text-accent-foreground" />
              </div>
              <span className="text-xl font-bold">Shineworldwidelogistics</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Your trusted partner for reliable, fast, and secure international shipping solutions to all countries worldwide.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">International Shipping</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Express Delivery</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Freight Services</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Package Tracking</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Logistics Solutions</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">Track Your Package</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Shipping Calculator</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contact Support</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Report Issues</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3 text-primary-foreground/80">
              <p>📧 info@shineworldwidelogistics.com</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>🕒 24/7 Customer Support</p>
              <p>🌍 Available in 200+ Countries</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60">
              © 2024 Shineworldwidelogistics. All rights reserved.
            </p>
            <div className="flex space-x-6 text-primary-foreground/60">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-accent transition-colors">Shipping Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;