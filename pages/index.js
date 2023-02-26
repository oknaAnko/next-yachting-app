import BaseLayout from 'components/BaseLayout';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const data = [
    {
      id: 1,
      title: 'Formula 260 SS',
      category: 'rent',
      description:
        'This 260 SS has been meticulously maintained and is in excellent condition! We always keep it in dry storage when not in use. Its very clean, and ready for the summer!'
    }
  ];

  return (
    <BaseLayout>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Best Private Yacht Rentals
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Pick your favorite provider and search for all types of boat rentals near you,
              including sailing boats, motorboats, and luxury yachts.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {data.map((offer) => (
              <div key={offer.id} className="xl:w-1/4 md:w-1/2 p-4 cursor-pointer">
                <Link href={`/offers/${offer.id}`}>
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <Image
                      className="h-40 rounded w-full object-cover object-center mb-6"
                      src="/boat.jpg"
                      width={720}
                      height={400}
                      alt="content"
                    />
                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                      {offer.category}
                    </h3>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                      {offer.title}
                    </h2>
                    <p className="leading-relaxed text-base">
                      {offer.description.length > 100
                        ? offer.description.substring(0, 100) + '...'
                        : offer.description}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}
