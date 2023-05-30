export function Button({
  color,
  name,
  onBtnClick,
}: {
  color: any;
  name: any;
  onBtnClick: any;
}) {
  return (
    <button
      id="new-quote"
      style={{ backgroundColor: color }}
      className="quoteButton"
      onClick={onBtnClick}
    >
      {name}
    </button>
  );
}
