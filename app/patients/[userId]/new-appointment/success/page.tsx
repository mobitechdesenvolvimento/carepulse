import Link from "next/link";
import React from "react";
import Image from "next/image";

const Success = () => {
  return (
    <div className="flex h-screen max-h-screen px-[5%]">
      <div className="success-img">
        <Link href="/">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="logo"
            className="h-10 w-fit"
          />
        </Link>

        <section className="flex flex-col items-center">
          <Image
            src="/assets/gifs/success.gif"
            height={300}
            width={280}
            alt="success"
          />
          <h2 className="header mb-6 max-w-[600px] text-center">
            Seu <span className="text-green-500">pedido de agendamento</span>{" "}
            foi enviado com sucesso!
          </h2>
          <p>Entraremos em contato em breve para confirmar.</p>
        </section>
      </div>
    </div>
  );
};

export default Success;
