import "../App.css";

export default function Button({ incr, count }) {
  
  return (
    <div className="button">
      <button
        onClick={() => {
          incr(count);
        }}
        type="button"
        class="btn btn-dark"
      >
        Click Me
      </button>
    </div>
  );
}