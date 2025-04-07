import React from "react";
import { useState } from "react";
import { sendContactForm } from "@src/lib/api";
import { useToast } from "@chakra-ui/react";

const FooterQueries = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isMessageSent, setIsMessageSent] = useState(false);
  const toast = useToast();
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const onSubmit = async () => {
    if (inputValue === "") return;
    setIsLoading(true);
    const values = { message: inputValue };
    try {
      await sendContactForm(values);
      // Clear form
      toast({
        title: "Query sent.",
        status: "success",
        duration: 2000,
        position: "top",
      });
      setInputValue("");
      setIsLoading(false);
      setIsMessageSent(true);
    } catch (error) {
      setIsLoading(false);
      toast({
        title: "Error! Please try again.",
        status: "error",
        duration: 2000,
        position: "top",
      });
      setInputValue("");
    }
  };

  return (
    <div className="font-aldrich flex flex-col justify-between items-end ml-2 ssm:items-center ssm:ml-0 ssm:mb-[25px]">
      <label className="text-[30px]">
        {" "}
        Any <span className="text-purpleSecondary">Queries</span>
      </label>
      <input
        value={inputValue}
        onChange={handleInputChange}
        type="text"
        placeholder={isMessageSent ? "Message Sent!" : "leave your thoughts..."}
        disabled={isMessageSent}
        className="p-2 w-[250px] h-[45px] rounded-[11px] bg-[#ffffff] mb-4 mt-2 text-black focus:outline-none caret-[#fa5fff] md:w-[200px] md:h-[40px] ssm:w-[250px]"
      />

      <button
        className={`rounded-[5px] border-2 border-[#ffffff] w-[100px] hover:bg-[#ffffff]  transition-all ease-in duration-150 py-[2px] ${
          isLoading ? "hidden" : ""
        } ${
          isMessageSent
            ? "cursor-not-allowed bg-[#ffffff] text-[#262F38] font-[600]"
            : "text-white hover:text-[#262F38]"
        }`}
        onClick={onSubmit}
      >
        {" "}
        <p className="text-[18px]">{isMessageSent ? "SENT" : "SEND"}</p>{" "}
      </button>
      <div className={`loader-after-submit ${isLoading ? "" : "hidden"}`}></div>
    </div>
  );
};

export default FooterQueries;
