import Image from "next/image";

import { partners } from "./partners-data";
import { Fa42Group } from "react-icons/fa6";

const PartnersPage = () => {
  return (
    <main className="pt-32 ">
      <div className="">
        <h2 className="h2 text-center mb-8">Why Partner with Us?</h2>

        <TopSection />

        <SecondSection />

        <ThirdSection />

        <section className="bg-gray-100">
          <div className="lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4">
            <h2 className="h2 text-center mb-12">Our Partners</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-2">
              {partners.map((partner) => (
                <div key={partner.id} className="border rounded-md">
                  <div className="h-[120px] flex items-center justify-center">
                    <div className="relative w-full h-28 aspect-square">
                      <Image
                        src={partner.img}
                        alt={partner.img}
                        layout="fill"
                        objectFit="contain"
                        className="h-full w-full p-1"
                      />
                    </div>
                  </div>

                  <div className="p-2">
                    <p>{partner.msg}</p>
                  </div>

                  <div className="flex items-center justify-center mb-2">
                    <a
                      href={`https://${partner.link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-lime-400 hover:bg-white  text-black px-4 py-2 rounded-lg font-bold md:flex"
                    >
                      Find out more
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default PartnersPage;

const TopSection = () => {
  return (
    <section className="lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4">
      <div className="flex flex-col lg:flex-row lg:gap-x-[100px]">
        <div className="flex-1 order-1 lg:-order-1">
          <Image src="/2024/champ32.jpg" alt="" width={700} height={700} />
        </div>

        <div className="flex-1 flex flex-col justify-end">
          {/* <h2 className="title">{title}</h2> */}
          <p className="subtitle">
            Partnering with the Nairobi International Cup offers unique
            opportunities for brands looking to:
          </p>

          <div className="space-y-2">
            <Item
              title={"Boost Brand Visibility:"}
              subtitle={`Reach a wide and engaged audience across East Africa,
            including players, coaches, parents, schools, and community
            leaders.`}
            />

            <Item
              title={"Increase Brand Engagement: "}
              subtitle={`Leverage our expanding social media reach, grassroots engagement and event exposure to increase customer engagement and loyalty.`}
            />

            <Item
              title={"Create Social Impact:"}
              subtitle={`Support underrepresented communities, gender equality, and youth empowerment through sports, all while achieving your Corporate Social Responsibility (CSR) goals.`}
            />

            <Item
              title={"Drive Sales and Market Penetration:"}
              subtitle={`Showcase your products or services directly to families, youth and communities who are actively engaged in sports and healthy lifestyles.`}
            />

            <Item
              title={"Enhance Kenya's sporting position in the region:"}
              subtitle={`Kenya is a prime place and the East African hub, Nairobi International Cup is aiming to uplift the City and Country to the highest levels.`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const SecondSection = () => {
  return (
    <section className="bg-gray-100 lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4">
      <h2 className="h2 text-center mb-12">
        Impact Statistics from the 2024 Edition
      </h2>
      <div className="flex flex-col lg:flex-row lg:gap-x-[100px]">
        <div className="flex-1 flex flex-col justify-end">
          {/* <h2 className="title h4">Impact Statistics from the 2024 Edition:</h2> */}
          {/* <p className="subtitle">
              Partnering with the Nairobi International Cup offers unique
              opportunities for brands looking to:
            </p> */}

          <div className="space-y-2">
            <Item
              title={"Social Media Reach:"}
              subtitle={`The 2024 Edition of the Nairobi International Cup generated over 1.5 million impressions on social media platforms
            (Facebook, Instagram, and Twitter) during the tournament week, with engagement levels (likes, shares, and comments) exceeding 3150,000 interactions.`}
            />

            <Item
              title={"Media Coverage:"}
              subtitle={`The event attracted substantial media attention, with coverage by Citizen TV, KTN TV, NTV and KBC. Radio Stations like Radio Jumbo, Milele FM, Radio Maisha, Capital FM and featured in print media like The Standard, Taifa Leo, and Daily Nation, reaching an estimated audience of over 5 million people.`}
            />

            <Item
              title={"Underrepresented Communities:"}
              subtitle={`Over 30% of participants came from underrepresented communities, including economically disadvantaged regions and rural areas, reinforcing our commitment to inclusivity and youth empowerment.`}
            />
          </div>
        </div>

        <div className="flex-1 order-1 lg:order-1">
          <Image src="/2024/champ31.jpg" alt="" width={600} height={700} />
        </div>
      </div>
    </section>
  );
};

const ThirdSection = () => {
  return (
    <section className="lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4">
      <h2 className="h2 text-center mb-8">Join Us!</h2>
      <div className="flex flex-col lg:flex-row lg:gap-x-[30px] space-y-3">
        <p>
          We believe that together, we can create an unforgettable event that
          supports education, sports and development from where it all starts -
          at the grassroot level and foster community spirit.
        </p>

        <p>
          By partnering with the Nairobi International Cup, you align your brand
          with a future-focused initiative that leaves a positive and lasting
          impact on young athletes and the wider community. Let’s work together
          to make the Nairobi International Cup 2025 bigger and better.
        </p>

        <p>
          The game needs us, the community needs us, the future generation are
          looking up to us. The Nairobi International Cup is here for them. Join
          us and make it all possible for them to believe in the beauty of their
          dreams.
        </p>
      </div>
    </section>
  );
};

type ItemProps = {
  title: string;
  subtitle: string;
};

const Item = ({ title, subtitle }: ItemProps) => {
  return (
    <div className="flex mb-6 lg:mb-0">
      <div className="text-2xl mr-4 lg:text-3xl">
        <Fa42Group />
      </div>
      <div>
        <h4 className="text-base lg:text-lg font-semibold">{title}</h4>
        <p className="text-sm">{subtitle}</p>
      </div>
    </div>
  );
};
