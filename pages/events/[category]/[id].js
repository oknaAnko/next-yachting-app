import BaseLayout from 'components/BaseLayout';
import SingleEvent from 'components/SingleEvent';

export default function SingleEventPage({ singleEventData }) {
  console.log(singleEventData);
  return (
    <BaseLayout>
      <SingleEvent data={singleEventData} />
    </BaseLayout>
  );
}

export async function getStaticPaths() {
  const data = await import('../../../data/data.json');
  const allEvents = data.allEvents;
  const allPaths = allEvents.map((path) => {
    return {
      params: {
        category: path.city,
        id: path.id
      }
    };
  });

  return {
    paths: allPaths,
    fallback: false
  };
}

export async function getStaticProps(context) {
  const eventId = context.params.id;

  const { allEvents } = await import('../../../data/data.json');
  const singleEventData = allEvents.find((event) => event.id === eventId);

  return {
    props: { singleEventData }
  };
}
