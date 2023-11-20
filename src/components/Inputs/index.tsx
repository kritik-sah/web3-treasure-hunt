import React, { useEffect, useState } from "react";

interface InputProps {
  number: number;
  correctValue: string;
  placeholder: string;
  update: (num: number, value: boolean) => void;
}

const Input: React.FC<InputProps> = ({ number, correctValue, placeholder,update}) => {
  const [input, setInput] = useState("");
  useEffect(() => {
    if(input?.toLowerCase() === correctValue){
      update(number , true);
    }else{
      update(number , false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input])
  return (
    <div className={`border ${input ? input.toLowerCase() === correctValue ? "border-zo-green" : "border-red-500" : "border-zo-stroke" } bg-zo-stroke p-2 text-zo-primary flex items-center gap-2 justify-start w-ful`}>
      <span>{number}</span>
      <input
        type="text"
        className="bg-zo-stroke p-2 text-zo-primary w-full focus:outline-none"
        placeholder={placeholder}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

export default Input;
