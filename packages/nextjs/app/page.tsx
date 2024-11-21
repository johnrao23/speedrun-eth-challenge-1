import Image from "next/image";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex items-center flex-col flex-grow pt-10 light-mode-bg">
      <div className="px-5 w-[90%] md:w-[75%]">
        <h1 className="text-center mb-6">
          <span className="block text-2xl mb-2">MyCryptoProject</span>
          <span className="block text-4xl font-bold">Decentralized Staking</span>
        </h1>
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/hero.png"
            width="727"
            height="231"
            alt="challenge banner"
            className="rounded-xl border-4 border-primary"
          />
          <div className="max-w-4xl">
            <p className="text-center text-lg mt-8">
              🚀 Embarking on my crypto journey, I have built this app to explore the power of Ethereum. This project
              allows users to engage in a collaborative funding effort, demonstrating how decentralized applications can
              bring people together. If users work in harmony, funds are pooled into a smart contract. If not, everyone
              simply gets their funds back. Trust is placed in the code, not individuals.
            </p>
            <p className="text-center text-lg">
              🌟 The culmination of my learning is this Dapp, enabling users to send ether to a contract and stake under
              specific conditions. I have deployed it to a public webserver to share my progress. Check out all of my
              work on{" "}
              <a href="https://johnrao.com/" target="_blank" rel="noreferrer" className="underline">
                JohnRao.com
              </a>{" "}
              and join me on this exciting journey!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
