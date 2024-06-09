import Image from "next/image";
import Link from "next/link";


export const metadata = {
  title: "About Us",
  description: "Ecommerce Site About Us Page",
};
function AboutPage() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold sm:text-4xl cursor-pointer transition-all duration-200 text-primary hover:text-teal-600">
            Ecommerce Site
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
            <Image
            fill
              alt=""
              src={"/2.png"}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="lg:py-16">
            <article className="space-y-4 text-gray-600">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
                eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae
                eius quidem quam repellat.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum explicabo quidem
                voluptatum voluptas illo accusantium ipsam quis, vel mollitia? Vel provident culpa
                dignissimos possimus, perferendis consectetur odit accusantium dolorem amet voluptates
                aliquid, ducimus tempore incidunt quas. Veritatis molestias tempora distinctio
                voluptates sint! Itaque quasi corrupti, sequi quo odit illum impedit!
              </p>
              <Link
                  href="/"
                  className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Get Started
              </Link>
            </article>
          </div>
        </div>
      </div>
  </section>
  )
}

export default AboutPage
