import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Package, Truck, Map, Boxes } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "International Shipping",
      description: "Worldwide delivery to over 200 countries with customs handling and documentation support.",
      features: ["Customs clearance", "Documentation", "Insurance coverage"]
    },
    {
      icon: Package,
      title: "Package Tracking",
      description: "Real-time tracking from pickup to delivery with detailed status updates and notifications.",
      features: ["Real-time updates", "SMS notifications", "Proof of delivery"]
    },
    {
      icon: Truck,
      title: "Express Delivery",
      description: "Fast and reliable express shipping options for urgent shipments and time-sensitive deliveries.",
      features: ["Same-day pickup", "Priority handling", "Guaranteed delivery"]
    },
    {
      icon: Boxes,
      title: "Freight Services",
      description: "Heavy and bulk shipment solutions with specialized handling for commercial customers.",
      features: ["Bulk shipping", "Specialized handling", "Competitive rates"]
    },
    {
      icon: Map,
      title: "Logistics Solutions",
      description: "End-to-end supply chain management and warehousing solutions for businesses of all sizes.",
      features: ["Supply chain management", "Warehousing", "Distribution"]
    },
    {
      icon: Package,
      title: "E-commerce Fulfillment",
      description: "Complete e-commerce shipping solutions with integrated order management and returns handling.",
      features: ["Order integration", "Returns management", "Multi-channel support"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Shipping Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive logistics solutions tailored to meet your shipping needs, 
            from small packages to large freight shipments.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="bg-gradient-hero w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full">Learn More</Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;