import "./styles/Pagination.css";

export default function Pagination({ start, setStart, total, size }) {
  const prev = () => {
    setStart(start - size);
  };
  const next = () => {
    setStart(start + size);
  };
  return (
    <div className="pagination-container">
      <button className="btn" disabled={start === 0} onClick={prev}>
        Prev
      </button>
      <button className="btn" disabled={start + size >= total} onClick={next}>
        Next
      </button>
    </div>
  );
}
