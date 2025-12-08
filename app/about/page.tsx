import Header from "@/components/Header";
import SectionContainer from "@/components/SectionContainer";

export const metadata = {
  title: "About - Leo",
  description: "About me",
};

export default function AboutPage() {
  return (
    <div>
      <Header />
      <SectionContainer>
        <div className="py-8">
          <h1 className="text-4xl font-bold mb-4">About</h1>
          <p className="text-lg text-muted-foreground">
            Coming soon...
          </p>
        </div>
      </SectionContainer>
    </div>
  );
}
