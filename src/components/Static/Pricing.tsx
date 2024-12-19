import type { ReactNode } from 'react';
import { H1, H2, H3 } from '../Typography/Headings';
import { Paragraph } from '../Typography/Paragraph';

interface PriceCardProps {
  title: string;
  price: number | string;
  features: string[];
  popular?: boolean;
}

const PriceCard = ({ title, price, features, popular = false }: PriceCardProps) => (
  <div className={`bg-white rounded-xl shadow-lg p-8 ${popular ? 'border-2 border-emerald-500 relative' : ''}`}>
    {popular && (
      <Paragraph className="absolute top-0 right-0 bg-emerald-500 text-white px-4 py-1 rounded-bl-xl rounded-tr-xl text-sm font-medium">
        Most Popular
      </Paragraph>
    )}
    <H3 className="mb-4">{title}</H3>
    <div className="mb-6">
      <Paragraph className="text-4xl font-bold text-emerald-600">£{price}</Paragraph>
      {typeof price === 'number' && <Paragraph className="text-gray-500">/treatment</Paragraph>}
    </div>
    <ul className="space-y-3 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <svg className="w-5 h-5 text-emerald-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <Paragraph>{feature}</Paragraph>
        </li>
      ))}
    </ul>
    <button className={`w-full py-3 px-6 rounded-lg font-semibold ${
      popular 
        ? 'bg-emerald-600 text-white hover:bg-emerald-700' 
        : 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
    }`}>
      Book Appointment
    </button>
  </div>
);

export function Pricing() {
  const pricingPlans = [
    {
      title: "Basic Checkup",
      price: 100,
      features: [
        "Comprehensive Examination",
        "Digital X-rays",
        "Treatment Planning",
        "Cleaning & Polishing",
        "Oral Health Advice"
      ]
    },
    {
      title: "Complete Implant Package",
      price: "3,500+",
      features: [
        "Initial Consultation",
        "All Preparatory Procedures",
        "Implant Placement",
        "Crown Installation",
        "Follow-up Care",
        "Lifetime Warranty"
      ],
      popular: true
    },
    {
      title: "Cosmetic Package",
      price: 2500,
      features: [
        "Teeth Whitening",
        "Dental Veneers",
        "Smile Design",
        "3D Treatment Preview",
        "Aftercare Kit"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <H1 className="mb-4">Transparent Pricing for Quality Care</H1>
          <Paragraph className="text-lg text-gray-600">
            Choose the treatment plan that best suits your needs. All prices include premium care and materials.
          </Paragraph>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {pricingPlans.map((plan, index) => (
            <PriceCard key={index} {...plan} />
          ))}
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <H2 className="mb-6">Additional Services</H2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <H3 className="mb-4">Preventive Care</H3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <Paragraph>Regular Cleaning</Paragraph>
                  <Paragraph className="font-medium text-emerald-600">£80</Paragraph>
                </li>
                <li className="flex justify-between">
                  <Paragraph>Deep Cleaning</Paragraph>
                  <Paragraph className="font-medium text-emerald-600">£150</Paragraph>
                </li>
                <li className="flex justify-between">
                  <Paragraph>Fluoride Treatment</Paragraph>
                  <Paragraph className="font-medium text-emerald-600">£40</Paragraph>
                </li>
              </ul>
            </div>
            <div>
              <H3 className="mb-4">Restorative Care</H3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <Paragraph>Fillings</Paragraph>
                  <Paragraph className="font-medium text-emerald-600">£150+</Paragraph>
                </li>
                <li className="flex justify-between">
                  <Paragraph>Root Canal</Paragraph>
                  <Paragraph className="font-medium text-emerald-600">£800+</Paragraph>
                </li>
                <li className="flex justify-between">
                  <Paragraph>Crowns</Paragraph>
                  <Paragraph className="font-medium text-emerald-600">£1000+</Paragraph>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}