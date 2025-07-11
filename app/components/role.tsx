import React, { useState, useEffect } from "react";

const TypingAnimation = () => {
  const [currentText, setCurrentText] = useState(0); // Index of the current text
  const [isDeleting, setIsDeleting] = useState(false); // Whether text is being deleted
  const [displayedText, setDisplayedText] = useState(""); // The text currently being displayed

  // Texts with main content and highlighted last word
  const texts = [
    { text: "Frontend Developer &", highlight: "Designer" },
    { text: "Backend Developer &", highlight: "AI Engineer" },
  ];

  useEffect(() => {
    const typingSpeed = 100; // Speed of typing (ms per character)
    const deletingSpeed = 50; // Speed of deleting (ms per character)
    const pauseTime = 2000; // Pause time before deleting starts or next text begins

    const handleTyping = () => {
      const fullText = texts[currentText].text + " " + texts[currentText].highlight;

      if (!isDeleting) {
        // Typing logic
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
        if (displayedText === fullText) {
          setTimeout(() => setIsDeleting(true), pauseTime); // Pause before deleting
        }
      } else {
        // Deleting logic
        setDisplayedText(fullText.slice(0, displayedText.length - 1));
        if (displayedText === "") {
          setIsDeleting(false);
          setCurrentText((prev) => (prev + 1) % texts.length); // Go to next text
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer); // Cleanup
  }, [displayedText, isDeleting, currentText, texts]);

  const splitIndex = displayedText.lastIndexOf(" "); // Find the last space to split text
  const mainText = displayedText.slice(0, splitIndex);
  const highlightedText = displayedText.slice(splitIndex + 1);

  return (
    <div className="relative h-12 text-lg md:text-xl lg:text-2xl text-gray-300 overflow-hidden">
      <h2 className="inline-block whitespace-nowrap overflow-hidden border-r-4 border-purple-600">
        {mainText}{" "}
        <span className="text-purple-400">{highlightedText}</span>
      </h2>
    </div>
  );
};

export default TypingAnimation;
