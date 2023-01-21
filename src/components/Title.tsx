export default function Title({
  text,
  alignment,
}: {
  text: string;
  alignment?: string;
}) {
  return (
    <div
      className={`p-4 text-${
        alignment ?? 'center'
      } text-neutral-100 bg-neutral-700`}
    >
      <h1 className="text-2xl self-center font-bold">{text}</h1>
    </div>
  );
}
