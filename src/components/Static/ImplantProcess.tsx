import React from 'react';

const ProcessStep = ({ number, title, description, duration, image }) => (
  <div className="relative">
    <div className="flex items-center mb-4">
      <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
        {number}
      </div>
      <div className="ml-4">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-emerald-600">{duration}</p>
      </div>
    </div>
    <div className="ml-16">
      <div className="bg-white rounded-lg shadow-md p-6">
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
    {number < 5 && (
      <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-emerald-200" />
    )}
  </div>
);

export function ImplantProcess() {
  const steps = [
    {
      title: "Initial Consultation",
      description: "Your journey begins with a comprehensive examination using advanced 3D imaging technology. We'll discuss your goals, assess your oral health, and create a personalized treatment plan.",
      duration: "1-2 hours",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Preparation Phase",
      description: "If needed, we'll perform preliminary procedures such as bone grafting or tooth extraction. This ensures a strong foundation for your implant.",
      duration: "2-4 weeks healing",
      image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Implant Placement",
      description: "Using state-of-the-art surgical techniques, we'll place the titanium implant into your jawbone. This minimally invasive procedure is performed under local anesthesia.",
      duration: "3-6 months healing",
      image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Abutment Placement",
      description: "Once the implant has fully integrated with your bone, we'll attach the abutment - the connector piece that will hold your new crown.",
      duration: "2 weeks healing",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Crown Placement",
      description: "Finally, we'll attach your custom-made crown, perfectly matched to your natural teeth in color and shape. Your new smile is ready!",
      duration: "Complete",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Journey to a New Smile</h1>
            <p className="text-lg text-gray-600">Understanding the dental implant process is the first step toward your perfect smile. Here's what to expect:</p>
          </div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <ProcessStep
                key={index}
                number={index + 1}
                title={step.title}
                description={step.description}
                duration={step.duration}
                image={step.image}
              />
            ))}
          </div>

          <div className="mt-16 bg-emerald-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Important Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-emerald-800 mb-3">What to Expect</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Minimal discomfort during procedures</li>
                  <li>• Local anesthesia for your comfort</li>
                  <li>• Regular check-ups during healing</li>
                  <li>• Detailed aftercare instructions</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-emerald-800 mb-3">Success Rate</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 98% success rate for implants</li>
                  <li>• Lifetime warranty available</li>
                  <li>• Natural-looking results</li>
                  <li>• Long-lasting solution</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}