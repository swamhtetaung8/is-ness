import Container from "@/components/is-ness/container";
import MainHeading from "@/components/is-ness/text/mainHeading";
import Image from "next/image";
import React from "react";

const BankQR = () => {
  return (
    <Container includePaddingBlock className="space-y-[32px]">
      <MainHeading>
        Thank you for purchasing from us.
        <br className="xl:hidden" /> You can pay here. 👇🏻
      </MainHeading>
      <div className="flex items-center justify-center">
        <div className="w-[400px] h-[400px] xl:w-[500px] xl:h-[500px] relative">
          <Image
            src="/bank-qr/qrcode.jpg"
            fill
            alt="bank qr code"
            className="object-contain"
          />
        </div>
      </div>
    </Container>
  );
};

export default BankQR;
