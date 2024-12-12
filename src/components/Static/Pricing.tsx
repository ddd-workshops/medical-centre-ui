import React from 'react';

const PriceCard = ({ title, price, features, popular = false }) => (
  <div className={`bg-white rounded-xl shadow-lg p-8 ${popular ? 'border-2 border-emerald-500 relative' : ''}`}>
    {popular && (
      <div className="absolute top-0 right-0 bg-emerald-500 text-white px-4 py-1 rounded-bl-xl rounded-tr-xl text-sm font-medium">
        Most Popular
      </div>
    )}
    <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
    <div className="mb-6">
      <span className="text-4xl font-bold text-emerald-600">£{price}</span>
      {typeof price === 'number' && <span className="text-gray-500">/treatment</span>}
    </div>
    <ul className="space-y-3 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-gray-600">
          <svg className="w-5 h-5 text-emerald-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          {feature}
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Transparent Pricing for Quality Care</h1>
          <p className="text-lg text-gray-600">Choose the treatment plan that best suits your needs. All prices include premium care and materials.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {pricingPlans.map((plan, index) => (
            <PriceCard key={index} {...plan} />
          ))}
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Preventive Care</h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="text-gray-600">Regular Cleaning</span>
                  <span className="font-medium text-emerald-600">£80</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Deep Cleaning</span>
                  <span className="font-medium text-emerald-600">£150</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Fluoride Treatment</span>
                  <span className="font-medium text-emerald-600">£40</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Restorative Care</h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="text-gray-600">Fillings</span>
                  <span className="font-medium text-emerald-600">£150+</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Root Canal</span>
                  <span className="font-medium text-emerald-600">£800+</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Crowns</span>
                  <span className="font-medium text-emerald-600">£1000+</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}