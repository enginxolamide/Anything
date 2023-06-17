export function CardContent({ heading, content }) {
  return (
    <div>
      <h2 className="heading">{heading}</h2>
      <p className="description">{content}</p>
    </div>
  );
}
