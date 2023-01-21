export default function Title({ text }: { text: string }) {
  return (
    <div className="p-4 text-neutral-100 bg-neutral-700">
      <h1 className="text-2xl text-center font-bold">{text}</h1>
    </div>
  );
}
