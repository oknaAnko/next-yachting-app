import BaseLayout from 'components/BaseLayout';
import { useRouter } from 'next/router';

export default function Mem({ mem, mess }) {
  const router = useRouter();
  console.log(mess);
  console.log(mem);
  return (
    <BaseLayout>
      <section className="text-gray-600 body-font relative">
        <div>
          <h1>{mem.name}</h1>
          <img src={mem.url} alt={mem.name} />
        </div>
      </section>
      <button onClick={() => router.back()}>Go back</button>
    </BaseLayout>
  );
}

export async function getServerSideProps(context) {
  const response = await fetch('https://api.imgflip.com/get_memes');
  const { data, success } = await response.json();

  //   console.log(context);
  const { id } = context.params;

  const mem = data.memes.find((mem) => mem.id === id);
  if (!success) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      },
      props: { mess: 'sth wrong' }
    };
  }
  return {
    props: { mem }
  };
}
