import BaseLayout from 'components/BaseLayout';
import Link from 'next/link';

export default function Memes({ memes }) {
  console.log(memes);
  const memList = memes.map((mem) => (
    <li key={mem.id}>
      <Link href={`/memes/${mem.id}`}>
        <a>{mem.name}</a>
      </Link>
    </li>
  ));
  return (
    <BaseLayout>
      <ul>{memList}</ul>
    </BaseLayout>
  );
}

export const getServerSideProps = async () => {
  const response = await fetch('https://api.imgflip.com/get_memes');
  const res = await response.json();
  const { data, success } = res;
  const { memes } = data;

  if (!success) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    };
  }

  return {
    props: { memes }
  };
};
