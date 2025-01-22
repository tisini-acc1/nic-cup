import { teams } from "./registered-teams";

const RegisteredTeamsPage = () => {
  return (
    <main className="pt-32 ">
      <div className="">
        <h2 className="h2 text-center mb-2">Explore 2025 Teams Entry List</h2>
        <h4 className="text-muted-foreground text-center font-playpen">
          Updated every 2 weeks
        </h4>

        <section className="lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4 space-y-8">
          {Object.entries(teams["2025"]).map((category, idx) => (
            <section key={idx} className="bg-gray-50 rounded-lg p-2">
              <header className="p-4">
                <h2>{category[0]}</h2>

                <span className="text-muted-foreground text-sm">
                  {category[1].length} team(s)
                </span>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-2">
                {category[1].map((item, idx) => (
                  <div
                    key={idx}
                    className="border rounded-lg p-3 bg-gray-100 text-sm font-playpen"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </section>
      </div>
    </main>
  );
};

export default RegisteredTeamsPage;
