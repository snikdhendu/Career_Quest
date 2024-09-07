import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "./Icons"

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Expert Mentors",
    description:
      "Connect with experienced professionals who provide personalized career advice and guidance to help you excel in your field.",
  },
  {
    icon: <MapIcon />,
    title: "Vibrant Community",
    description:
      "Join a supportive network of like-minded individuals, where you can share experiences, learn, and grow together.",
  },
  {
    icon: <PlaneIcon />,
    title: "AI Career Counselor",
    description:
      "Leverage our AI-driven career counselor to receive tailored recommendations, job insights, and learning paths based on your goals.",
  },
  {
    icon: <GiftIcon />,
    title: "Interactive Sessions",
    description:
      "Participate in engaging workshops and sessions to enhance your skills, guided by experts and personalized for your needs.",
  },
];


export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        How It{" "}
        <span className="relative inline-block">
          <span className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text px-4 text-textmain">
            Works
          </span>
          <img
            src="/headline-curve.svg"
            alt=""
            className="block mx-auto mt-2"
          />
        </span>
        Step-by-Step Guide
      </h2>


      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
        dolor pariatur sit!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center ">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
