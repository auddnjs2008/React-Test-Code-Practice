import React, { useEffect, useState } from "react";

const mockFetch = () =>
  new Promise((resolve) => {
    setTimeout(
      resolve([
        { id: "1", name: "Person1" },
        { id: "2", name: "Person2" },
      ]),
      100
    );
  });

const Fetch = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const loadResult = async () => {
      const fetchedResult = await mockFetch();
      setResult(fetchedResult);
      setLoading(false);
    };

    loadResult();
  }, []);

  return (
    <div>
      {loading && <div>Loading</div>}
      {result && (
        <ul>
          {result.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Fetch;
