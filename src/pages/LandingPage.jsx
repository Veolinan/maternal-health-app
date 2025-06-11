// src/pages/LandingPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-800">
      {/* Header */}
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">HealthFlag</h1>
          <Link
            to="/login"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Login
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 text-center px-6">
        <h2 className="text-4xl font-bold mb-4 text-blue-700">Empowering Early Detection & Maternal Triage</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-600">
          HealthFlag is a digital triage and alert system developed during the <span className="font-semibold">Kakuma Innovation Mission in May 2025</span>, a collaboration between the <span className="font-semibold">Kenya Red Cross Society</span> and the <span className="font-semibold">University of Texas</span>.
          It aims to streamline healthcare delivery in resource-constrained environments like Kakuma and Kalobeyei, where doctor-to-patient ratios are high, and expectant mothers often lack access to smartphones, transport, or emergency care.
        </p>
      </section>

      {/* How It Works */}
      <section className="bg-blue-50 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-blue-700">How It Works</h3>
            <p className="text-gray-700 mb-4">
              HealthFlag offers rapid digital triage through a simple questionnaire filled out by healthcare workers or patients. The system evaluates responses using medical flag logic to assess <strong>symptom severity</strong>, <strong>maternal risk</strong>, and <strong>age vulnerability</strong>. 
              Key benefits include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Quick identification of high-risk expectant mothers for urgent follow-up.</li>
              <li>Flags conditions before they escalate, helping clinicians intervene early.</li>
              <li>Minimizes unnecessary hospital visits, reducing congestion and wait times.</li>
              <li>Connects patients with medical officers even when ambulance services or digital devices are unavailable.</li>
              <li>Supports data tracking and medical record storage in secure, centralized dashboards.</li>
            </ul>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1603386329225-868f9fbf7af1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Medical Triage"
              className="rounded shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Conditions Covered */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-blue-700 mb-4">Conditions Evaluated in Expectant Mothers</h3>
          <p className="text-gray-700 mb-6">
            HealthFlag targets life-threatening maternal health issues common in low-resource clinics and refugee settlements. These include:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-left">
            <div className="bg-white rounded shadow p-4">
              <h4 className="font-semibold text-blue-600">Anemia in Pregnancy</h4>
              <p className="text-sm text-gray-600">Monitors symptoms like fatigue, pallor, and dizziness common in iron-deficiency anemia.</p>
            </div>
            <div className="bg-white rounded shadow p-4">
              <h4 className="font-semibold text-blue-600">Preeclampsia & Hypertension</h4>
              <p className="text-sm text-gray-600">Checks for high blood pressure, headaches, and visual disturbances.</p>
            </div>
            <div className="bg-white rounded shadow p-4">
              <h4 className="font-semibold text-blue-600">Postpartum Hemorrhage (PPH)</h4>
              <p className="text-sm text-gray-600">Identifies early signs of excessive bleeding during or after childbirth.</p>
            </div>
            <div className="bg-white rounded shadow p-4">
              <h4 className="font-semibold text-blue-600">Maternal Infections</h4>
              <p className="text-sm text-gray-600">Flags UTIs, sepsis, and mastitis that pose risks to mother and baby.</p>
            </div>
            <div className="bg-white rounded shadow p-4">
              <h4 className="font-semibold text-blue-600">Mental Health (PPD, Anxiety)</h4>
              <p className="text-sm text-gray-600">Screens for signs of depression and anxiety during and after pregnancy.</p>
            </div>
            <div className="bg-white rounded shadow p-4">
              <h4 className="font-semibold text-blue-600">Gestational Diabetes</h4>
              <p className="text-sm text-gray-600">Assesses thirst, urination frequency, and sugar-related symptoms.</p>
            </div>
            <div className="bg-white rounded shadow p-4">
              <h4 className="font-semibold text-blue-600">Obstructed or Prolonged Labor</h4>
              <p className="text-sm text-gray-600">Identifies risk factors early to refer patients for delivery support.</p>
            </div>
            <div className="bg-white rounded shadow p-4">
              <h4 className="font-semibold text-blue-600">Placental Abruption</h4>
              <p className="text-sm text-gray-600">Captures bleeding or abdominal pain suggestive of placental issues.</p>
            </div>
            <div className="bg-white rounded shadow p-4">
              <h4 className="font-semibold text-blue-600">Preterm Birth Risk</h4>
              <p className="text-sm text-gray-600">Flags early contractions, cramping, or prior history of early deliveries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 text-center bg-blue-600 text-white px-6">
        <h3 className="text-3xl font-bold mb-4">Ready to begin?</h3>
        <p className="mb-6 text-lg">
          Login to access the HealthFlag dashboard and begin supporting early maternal triage in your clinic or community.
        </p>
        <Link
          to="/login"
          className="inline-block bg-white text-blue-600 px-6 py-3 rounded font-semibold shadow hover:bg-gray-100 transition"
        >
          Login
        </Link>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500 bg-white border-t">
        © {new Date().getFullYear()} HealthFlag • Built with ❤️ in IOMe 001 Mombasa • Powered by KRCS & UT
      </footer>
    </div>
  );
}