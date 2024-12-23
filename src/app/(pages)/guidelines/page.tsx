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
            Age verification will be a continuous process and will continue even
            during the tournament days.
          </p>
          <h3 className="text-xl font-semibold text-gray-600 mt-6 mb-2">
            Pre-Tournament Process
          </h3>
          <ul className="list-decimal pl-5 text-gray-600 space-y-2">
            <li>
              All documents should be uploaded alongside the player during
              Player Registration.
            </li>
            <li>
              All Nairobi based teams will be vetted during July and the
              preceding days in August at their training grounds.
            </li>
            <li>
              All Teams based outside Nairobi and Kenya will be vetted as they
              arrive in the city a day to kick off.
            </li>
            <li>
              Any player not present during pre tournament age verification
              process, can always be verified before He/She plays His or Her
              first game in the Tournament provided the player was listed on the
              Team Lists Submitted by the Club/Academy.
            </li>
          </ul>
          <h3 className="text-xl font-semibold text-gray-600 mt-6 mb-2">
            During Tournament
          </h3>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>
              All teams should be able to produce hard copies of birth
              verification documents, same as the one submitted during player
              registration
            </li>
          </ul>
          <h3 className="text-xl font-semibold text-gray-600 mt-6 mb-2">
            Eligibility
          </h3>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>
              All teams should submit their team lists with all players listed.
            </li>
            <li>
              Any new player who joins after team list submission should be
              cleared by the tournament before playing.
            </li>
            <li>
              Team Lists should include passport photos, full names and Date of
              Birth. No player who is not on the team lists will be allowed to
              play.
            </li>
            <li>
              In any case, you field a player not on the team lists, not
              verified and cleared by the Tournament, It will result in
              automatic disqualification.
            </li>
            <li>
              A player may represent the same Academy/Club or School in various
              age groups provided the player is:
            </li>
            <p>
              Within the age for the categories as per the tournament
              guidelines.
            </p>
            <p>
              The player is registered and listed on the team lists submitted of
              the age categories. Player should feature on all team lists the
              Club/Academy or School intends to play Him or Her.
            </p>
            <p>Verified and passed to play in those age categories.</p>
          </ul>

          <p className="text-gray-600 mt-4">
            Note: Age verification is a continuous process that will continue
            throughout the tournament. Nairobi International Cup does not and
            will not tolerate age cheating and forgery of documents. Any Team
            found guilty will be immediately disqualified from NaiCup2025 and
            reported to relevant authorities.
          </p>
        </section>
      </div>
    </main>
  );
};

export default GuidelinePage;
