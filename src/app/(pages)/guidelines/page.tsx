import React from "react";

const GuidelinePage = () => {
  return (
    <main className="bg-gray-50 min-h-screen py-10 px-5">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-md p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Nairobi International Cup 2025 Registration
        </h1>

        {/* Registration Information and Procedure */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Registration Information and Procedure
          </h2>
          <p className="text-gray-600 mb-4">
            Registration for Nairobi International Cup 2025 is open until
            midnight June 30th, 2025.
          </p>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>
              To register your team, send your participation request to
              <a
                href="mailto:Admin@nairobiinternationalcup.co.ke"
                className="text-blue-600 underline ml-1"
              >
                admin@nairobiinternationalcup.co.ke{" "}
              </a>
              for approvals. You will be directed on to the next steps.
            </li>
            <li>
              Once approved, proceed to player registration and submit:
              <ul className="list-disc pl-5 space-y-1">
                <li>Passport-sized photos</li>
                <li>Birth Verification documents</li>
              </ul>
            </li>
            <li>
              Review the tournament information, rules, and terms & conditions
              before submitting.
            </li>
            <li>
              Ensure accurate indication of the age category for the 2025
              competition.
            </li>
            <li>
              Registration confirmation is contingent upon fee payment and
              approval email receipt.
            </li>
            <li>
              Payment options: Lipa na Mpesa, Bank Transfer (no cash payments).
            </li>
          </ul>
        </section>

        {/* Registration Fees */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Registration Fees
          </h2>
          <ul className="text-gray-600 space-y-2">
            <li>
              Kenyan Teams: <span className="font-bold">15,000 Kes</span>
            </li>
            <li>
              International Teams: <span className="font-bold">250 USD</span>
            </li>
          </ul>
        </section>

        {/* Age Control and Eligibility */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Age Control and Eligibility
          </h2>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">
            Age Verification
          </h3>
          <p className="text-gray-600 mb-4">
            We accept the following documents:
          </p>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Birth certificates for Kenyan Players</li>
            <li>Valid travel passport for International Players</li>
          </ul>
          <p className="text-gray-600 mt-4">
            Age verification will be a continuous process even during the
            tournament days.
          </p>

          <h3 className="text-xl font-semibold text-gray-600 mt-6 mb-2">
            Pre-Tournament Process
          </h3>
          <ul className="list-decimal pl-5 text-gray-600 space-y-2">
            <li>All documents must be uploaded during player registration.</li>
            <li>
              Nairobi-based teams will be vetted in July and early August at
              their training grounds.
            </li>
            <li>
              Teams outside Nairobi/Kenya will be vetted upon arrival, a day
              before kickoff.
            </li>
            <li>
              Players not present during pre-tournament verification can be
              verified before their first game.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-600 mt-6 mb-2">
            During Tournament
          </h3>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>
              Teams must produce hard copies of documents submitted during
              registration.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-600 mt-6 mb-2">
            Eligibility
          </h3>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>
              Submit team lists with all players listed, including photos,
              names, and birthdates.
            </li>
            <li>Clear new players with the tournament before they play.</li>
            <li>
              Players not on the team lists, unverified, or uncleared will
              result in team disqualification.
            </li>
            <li>
              A player cannot feature for two clubs in the same tournament; both
              clubs will be disqualified.
            </li>
          </ul>

          <p className="text-gray-600 mt-4">
            Note: Age verification is a continuous process throughout the
            tournament.
          </p>
        </section>
      </div>
    </main>
  );
};

export default GuidelinePage;
