import useSWR from 'swr';

function MyComponent() {
  const { data, error } = useSWR('/api/data', (url) => fetch(url).then((res) => res.json()));

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <h1>Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default MyComponent;