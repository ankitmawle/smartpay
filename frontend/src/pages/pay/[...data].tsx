import { useWallet } from '@/hooks/useWallet';
import SmartPayABI from '@/json/SmartPay';
import SmartPayAccountABI from '@/json/SmartPayAccount';
import deployment from '@/json/deployment';
import { ethers } from 'ethers';
import { useRouter } from 'next/router'
import { useState } from 'react';
 
export default function Page() {
    const [error, setError] = useState("");
    const { walletConnectionStatus, switchNetwork, chainCurrent,walletAddress, ethersSigner, ethersProvider } = useWallet();
  
    const send=async ()=>{
        setError("");

        var chain=chainCurrent?chainCurrent.name:"polygonMumbai";
        const smartPayAddress = deployment[chain as keyof typeof deployment]
        
        const smartPayContract = new ethers.Contract(
            smartPayAddress,
            SmartPayABI,
            ethersSigner
        )
        if (smartPayContract && (walletConnectionStatus === "connected"  ) ) {
            

            const walletAdd=await smartPayContract.smartAccounts(walletAddress); 
            
            const smartContract = new ethers.Contract(
                walletAdd,
                SmartPayAccountABI,
                ethersSigner
            )

        try {

            if (smartContract && walletConnectionStatus === "connected" ) {
                
                
                await (await smartContract.sendERC20(router.query.slug[0],router.query.slug[1],router.query.slug[2],router.query.slug[3])).wait();
                
            } else {

                throw Error();
            }
        } catch (e) {
            console.error(e);
            setError("Failed to create wallet");
        } finally {
            setIsSending(false);
        }
    }
  const router = useRouter()
  return (<><p>Sending total amount of {router.query.slug[2]} token with id {router.query.slug[1]} to user {router.query.slug[0]} </p>
  <br/> <button onClick={send}>Please Click here to initaite the transaction</button></>)
}