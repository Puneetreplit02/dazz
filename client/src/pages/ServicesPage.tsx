import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Compass, GraduationCap, Briefcase, Users, Award } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import StructuredData, { localBusinessSchema } from "@/components/StructuredData";

const services = [
  {
    icon: Compass,
    title: "Career Guidance",
    description:
      "Personalized counseling to align education with career goals.",
  },
  {
    icon: GraduationCap,
    title: "Admission Consulting",
    description:
      "Guidance for enrolling in premium institutions across India and abroad.",
  },
  {
    icon: Briefcase,
    title: "Placement Support",
    description: "Strong job connections with top companies and industries.",
  },
  {
    icon: Users,
    title: "Recruitment & Training",
    description: "Helping organizations hire the right talent.",
  },
  {
    icon: Award,
    title: "Scholarship Guidance",
    description: "Assistance in securing financial aid.",
  },
];

const courses = [
  "Nursing (GNM & B.Sc.)",
  "Medical & Paramedical",
  "Pharma & Management",
  "Aviation & Hotel Management",
  "Law, B.Ed & D.El.Ed",
  "Computer Science & IT",
  "BA, B.Com, B.Sc",
  "MA, M.Com, M.Sc",
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen py-16 md:py-24">
      <SEOHead
        title="Study Abroad Services Siliguri | Career & Visa Guidance - Dazzling Academy"
        description="Complete study abroad services in Siliguri: career counseling, university admissions, IELTS/TOEFL prep, visa assistance. Trusted by 1000+ North Bengal students."
        keywords="study abroad services Siliguri, career counseling, visa assistance, IELTS coaching Siliguri, university admission help, overseas education Bagdogra"
        canonicalUrl="https://dazzlingacademy.com/services"
      />
      <StructuredData data={localBusinessSchema} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Complete Study Abroad Services for Siliguri Students
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We specialize in career counseling, university admissions, and study abroad placements for students from Siliguri, Bagdogra, Jalpaiguri, and North Bengal.
            Whether you are a high school student, graduate, or professional, we help you identify the best path to achieve your goals.
          </p>
        </motion.div>

        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Key Offerings for North Bengal Students
            </h2>
            <p className="text-muted-foreground">
              Available for students in Siliguri and surrounding areas including Bagdogra, Jalpaiguri, Darjeeling
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover-elevate transition-all duration-300 hover:scale-105">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Courses We Cover
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {courses.map((course, index) => (
                <motion.div
                  key={course}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{course}</span>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
