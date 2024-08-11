import Image from "next/image";
import { Fixture } from "../../../../../types/fixture";

export const FixtureCard = ({ fixture }: { fixture: Fixture }) => {
  const homeWin = fixture.home_score > fixture.away_score;
  const awayWin = fixture.away_score > fixture.home_score;

  return (
    <div className="m-1 border-b border-gray-300 rounded-md py-3 hover:bg-gray-300 cursor-pointer text-primary">
      <div className="grid grid-cols-12 gap-2 text-sm font-semibold">
        <div className="col-span-5 flex gap-1 lg:flex-col flex-row-reverse lg:justify-center items-center">
          <Image width={40} height={40} src={"/homeLogo.png"} alt="" />
          <div className=" text-gray-450 text-right">{fixture.team1_name}</div>
        </div>

        <div className="col-span-2 flex items-center justify-center">
          {fixture.game_status === "notstarted" ? (
            fixture.matchtime !== "" ? (
              <div>{fixture.matchtime}</div>
            ) : (
              <div className="animate-spin-slow">⌛</div>
            )
          ) : (
            <div
              className="flex flex-col items-center font-bold
            lg:text-3xl text-base"
            >
              <div className="flex">
                <div className={homeWin ? "text-gray-900" : "text-gray-500"}>
                  {fixture.home_score}
                </div>

                <div className="mx-1 md:mx-2">&ndash;</div>

                <div className={awayWin ? "text-gray-900" : "text-gray-500"}>
                  {fixture.away_score}
                </div>
              </div>
              <div className="text-xs">
                {fixture.game_status === "ended"
                  ? "FT"
                  : fixture.minute == "45" &&
                    fixture.game_moment == "secondhalf"
                  ? "HT"
                  : fixture.minute}
              </div>
            </div>
          )}
        </div>

        <div className="col-span-5 flex gap-1 lg:flex-col flex-row lg:justify-center items-center">
          <Image width={40} height={40} src={"/awayLogo.png"} alt="" />
          <div>{fixture.team2_name}</div>
        </div>
      </div>
    </div>
  );
};
