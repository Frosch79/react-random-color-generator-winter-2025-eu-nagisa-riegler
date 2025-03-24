export default function Button(props) {
  return (
    <button className={props.className} onClick={props.color}>
      Generate
    </button>
  );
}
