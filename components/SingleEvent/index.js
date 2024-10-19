import Image from 'next/image';

export default function SingleEvent({ data }) {
  console.log(data);
  console.log(data.image);
  return (
    <div>
      <h1> {data.title} </h1>
      {/* <Image width={300} height={300} alt={data.title} src={data.image} /> */}
      {data.image && <Image width={1000} height={500} alt={data.title} src={data.image} />}
      <p> {data.description} </p>
    </div>
  );
}
