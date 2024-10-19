import BaseLayout from 'components/BaseLayout';
import Image from 'next/image';
import Link from 'next/link';

export default function EventsPerCityPage({ eventsPerCity, city }) {
  console.log(eventsPerCity);
  const events = eventsPerCity.map((ev) => (
    <Link key={ev.id} href={`/events/${city}/${ev.id}`} passHref>
      <a>
        <Image width={300} height={300} alt={ev.title} src={ev.image} />
        <h2> {ev.title} </h2>
        <p> {ev.description} </p>
      </a>
    </Link>
  ));
  return (
    <BaseLayout>
      <h1>Events in {city} </h1>
      <div>{events}</div>
    </BaseLayout>
  );
}

export async function getStaticPaths() {
  const { events_categories } = await import('../../../data/data.json');
  const allPaths = events_categories.map((el) => `/events/${el.id}`);
  //   const allPaths1 = events_categories.map((ev) => {
  //     return {
  //       params: {
  //         category: ev.id.toString()
  //       }
  //     };
  //   });
  //   console.log('allPaths1', allPaths1);
  return {
    paths: allPaths,
    fallback: false
  };
}

export async function getStaticProps(context) {
  const { allEvents } = await import('../../../data/data.json');
  console.log(context.params);
  const city = context.params.category;
  const eventsPerCity = allEvents.filter((event) => event.city.toLowerCase() === city);
  return {
    props: { eventsPerCity, city }
  };
}
