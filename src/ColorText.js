export default function ColorText(props) {
  return (
    <p className={props.className} style={props.styleColor}>
      {'Generated Color: ' + props.color}
    </p>
  );
}
