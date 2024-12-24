"use client";
import { DooglyTippingButton } from "@doogly/doogly-donate-component";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-4 bg-custom-background">
      <div className="text-4xl text-[#AF3BC9] mt-10">
        Gift Your favourite builders with Doogly
      </div>
      <Image
        src="/doogly-mascot.png"
        alt="Success"
        className="my-10 flex items-center justify-center"
        width={200}
        height={200}
      />
      <DooglyTippingButton
        buttonText="Tip"
        modalTitle="Support your favourite builders"
        config={{
          destinationChain: "optimism",
          destinationAddress: "0x3652eC40C4D8F3e804373455EF155777F250a6E2",
          receiverAddress: "feeasfc",
          destinationOutputTokenAddress:
            "0x7F5c764cBc14f9669B88837ca1490cCa17c31607",
        }}
        buttonClassName="text-white text-xl bg-[#AF3BC9]"
        modalStyles={{
          backgroundColor: "white",
          headingColor: "#AF3BC9",
          textColor: "#AF3BC9",
          buttonColor: "#AF3BC9",
        }}
      />
    </div>
  );
}
