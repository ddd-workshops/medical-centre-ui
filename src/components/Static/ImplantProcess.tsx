import React from 'react';
import { H1, H2, H3 } from '../Typography/Headings';
import { Paragraph } from '../Typography/Paragraph';
import { ProcessStep, ProcessStepProps } from './ProcessStep';

type Step = Omit<ProcessStepProps, 'number'>;

export function ImplantProcess() {
  const steps: Step[] = [
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
            <H1 className="mb-4">Your Journey to a New Smile</H1>
            <Paragraph>Understanding the dental implant process is the first step toward your perfect smile. Here's what to expect:</Paragraph>
          </div>

          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              number={index + 1}
              {...step}
            />
          ))}

          <div className="mt-16 bg-emerald-50 rounded-xl p-8">
            <H2 className="mb-6">Important Information</H2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <H3 className="text-emerald-800 mb-3">What to Expect</H3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Minimal discomfort during procedures</li>
                  <li>• Local anesthesia for your comfort</li>
                  <li>• Regular check-ups during healing</li>
                  <li>• Detailed aftercare instructions</li>
                </ul>
              </div>
              <div>
                <H3 className="text-emerald-800 mb-3">Success Rate</H3>
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