export default function TrPost({
  title,
  category,
  author,
  createdAt,
  index,
}) {
  return (
    <>
      <td>{index}</td>
      <td>{title}</td>
      <td>{category.title}</td>
      <td>{author.name}</td>
      <td>{createdAt}</td>
    </>
  );
}
