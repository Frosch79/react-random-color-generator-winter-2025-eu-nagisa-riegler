export default function ColorText(props) {
  return (
    <div className={props.className} style={props.styleColor}>
      {'Generated Color: ' + props.color}
    </div>
  );
}
