import SplitText from "./SplitText";
export default function Belajar() {
  return (
    <div className="p-6 max-w-xl mx-auto bg-white shadow-lg rounded-xl border border-gray-200">
   <SplitText
        text="Hello, you!"
        delay={100}
        duration={0.6}
      />
    </div>
  );
}
