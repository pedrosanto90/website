import CTAButtons from "@/components/ui/CTAButtons";

export default function CTASection({
  title,
  description,
}: Readonly<{
  title: string;
  description: string;
}>) {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center text-gray-900">
          <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
          <p className="text-lg text-gray-600 mt-4">{description}</p>
          <CTAButtons className="mt-8" />
        </div>
      </div>
    </section>
  );
}
