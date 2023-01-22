import Check from './svgs/Check';

export default function SubmitSuccess() {
  return (
    <>
      <div className="flex items-center justify-center gap-2 p-4 mt-3 rounded font-bold text-neutral-700 bg-neutral-100 sm:absolute sm:right-4 sm:bottom-8 sm:mt-0">
        Submitted Form Successfully!
        <Check />
      </div>
    </>
  );
}
