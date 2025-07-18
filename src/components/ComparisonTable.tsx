import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";

const ComparisonTable = () => {
  const features = [
    {
      feature: "Built for Fashion Industry",
      manual: false,
      adobe: false,
      reach: true,
      reachNote: "✓"
    },
    {
      feature: "Preloaded Libraries",
      manual: false,
      adobe: false,
      reach: true,
      reachNote: "Extensive libraries"
    },
    {
      feature: "Collaboration Tools",
      manual: false,
      adobe: "Limited",
      reach: true,
      reachNote: "Seamless collaboration"
    },
    {
      feature: "AI-Powered Design Tools",
      manual: false,
      adobe: "Limited",
      reach: true,
      reachNote: "Advanced AI capabilities"
    },
    {
      feature: "Speed of Design",
      manual: "Slow",
      adobe: "Moderate",
      reach: "SuperFast",
      reachNote: ""
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Why Designers Choose <span className="text-primary">REACH</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            When compared to manual methods or general-purpose graphic design software like Adobe Illustrator, 
            REACH CAD stands out as the ultimate choice for fashion professionals.
          </p>
        </div>

        <Card className="overflow-hidden shadow-card">
          <CardHeader className="bg-muted/50">
            <div className="grid grid-cols-4 gap-4 text-center">
              <CardTitle className="text-sm font-semibold text-muted-foreground">
                FEATURE
              </CardTitle>
              <CardTitle className="text-sm font-semibold text-muted-foreground">
                MANUAL METHODS
              </CardTitle>
              <CardTitle className="text-sm font-semibold text-muted-foreground">
                ADOBE ILLUSTRATOR
              </CardTitle>
              <CardTitle className="text-sm font-semibold text-primary">
                REACH FASHION STUDIO
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            {features.map((row, index) => (
              <div key={index} className="grid grid-cols-4 gap-4 border-b border-border last:border-b-0">
                <div className="p-4 font-medium text-foreground bg-muted/20">
                  {row.feature}
                </div>
                <div className="p-4 text-center">
                  {typeof row.manual === 'boolean' ? (
                    row.manual ? (
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                    )
                  ) : (
                    <Badge variant="outline" className="text-orange-600 border-orange-600">
                      {row.manual}
                    </Badge>
                  )}
                </div>
                <div className="p-4 text-center">
                  {typeof row.adobe === 'boolean' ? (
                    row.adobe ? (
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                    )
                  ) : (
                    <Badge variant="outline" className="text-yellow-600 border-yellow-600">
                      {row.adobe}
                    </Badge>
                  )}
                </div>
                <div className="p-4 text-center bg-accent/20">
                  {typeof row.reach === 'boolean' ? (
                    row.reach ? (
                      <div className="flex items-center justify-center gap-2">
                        <Check className="h-5 w-5 text-green-600" />
                        {row.reachNote && (
                          <span className="text-sm text-primary font-medium">
                            {row.reachNote}
                          </span>
                        )}
                      </div>
                    ) : (
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                    )
                  ) : (
                    <Badge className="bg-primary text-primary-foreground">
                      {row.reach}
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ComparisonTable;