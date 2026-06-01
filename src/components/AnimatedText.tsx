interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  highlightWords?: string[];
}

export default function AnimatedText({ text, className = "", highlightWords = [] }: AnimatedTextProps) {
  const words = text.split(" ");

  return (
    <div className={`flex flex-wrap justify-center ${className}`}>
      {words.map((word, index) => {
        const isHighlighted = highlightWords.some(hw => word.toLowerCase().includes(hw.toLowerCase()));
        return (
          <span
            key={index}
            style={{ marginRight: "0.25em" }}
            className={isHighlighted ? "text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-blue" : ""}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
}
