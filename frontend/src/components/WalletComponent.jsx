import { FC } from "react";
// import useCanvasWallet from "../Provider/CanvasWalletProvider";
import UserProfile from "./UserProfile"; // Ensure the correct path to UserProfile
import Campaigns from "./Cmapaigns"; // Import Campaigns component
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import {
  WalletDisconnectButton,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';

const WalletComponent = () => {
  // const { connectWallet, walletAddress, walletIcon, userInfo, content, signTransaction ,} =
  //   useCanvasWallet();

  const { connection } = useConnection();
  const wallet = useAnchorWallet();

  return (
    <div style={{width: "100%", display:"flex", justifyContent: "center"}}>
      {
        !wallet ? (<div style={{display: "flex", flexDirection: "column", alignItems:"center", justifyContent: "center"}}>
          <dotlottie-player src="https://lottie.host/50ced29f-5404-4fc8-8a8b-68bf2a714a14/JJ0z0rck4b.json" background="transparent" speed="1" style={{ height: "200px", with: "200px" }} loop autoplay></dotlottie-player>
          <WalletMultiButton />
        </div>)
          :
          (
              <div className="h" style={{ height: "550px", overflowY: "auto", width: "60%" }}>
                <Campaigns wallet={wallet} connection={connection} />
              </div>
          )}
    </div>
  );
};

export default WalletComponent;
