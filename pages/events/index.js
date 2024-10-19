import BaseLayout from 'components/BaseLayout';
import Image from 'next/image';
import Link from 'next/link';
// import data from '../../data/data.json';

export default function AllEventsPage({ categories }) {
  console.log(categories);
  const eventsPerCityList = categories.map((cat) => (
    <Link href={`/events/${cat.id}`} key={cat.id}>
      <a className="w-1/3">
        <Image src={cat.image} alt={cat.title} width={200} height={100} />
        <h2>{cat.title}</h2>
      </a>
    </Link>
  ));

  return (
    <BaseLayout>
      <div className="w-full px-32">
        <h2 className="text-center uppercase text-base my-8">Zobacz eventy w Twoim mieście</h2>
        <div className="flex flex-row justify-between flex-wrap">{eventsPerCityList}</div>
      </div>
    </BaseLayout>
  );
}

export async function getStaticProps() {
  const data = await import('../../data/data.json');
  //   const res = await fetch('/data/data.json');
  const categories = data.events_categories;
  return {
    props: { categories }
  };
}
