import Card from '../card/card';
import { CardsDetail } from './cards-detail/cards-detail';
import { CreditCardSvg } from '../credit-card-svg/credit-card-svg';
import styles from './cards.module.scss';
import { useEffect, useState } from 'react';
import { useWallet } from '@/hooks/useWallet';
import { useSmartContract } from '@/hooks/useSmartContract';
import { AddressLike, ethers } from 'ethers';
import { IDeployedNetworkConstantJson, ISmartContractsConstantJson } from "@/types/smart-contract";
import deployment from "@/json/deployment.js";
import SmartPayABI from "@/json/SmartPay.js";

import SmartPayAccountABI from "@/json/SmartPayAccount.js";

interface CardsProps {
    className?: string;
}

export const Cards = ({ className }: CardsProps) => {
    
const [contractsData, setContractsData] = useState<ISmartContractsConstantJson>({});
    
    const [Email, setEmail] = useState("");
    
    const [URI, setURI] = useState("");
    const { getSmartContract, deployedNetworkData } = useSmartContract();
    const { walletConnectionStatus, switchNetwork, chainCurrent,walletAddress, ethersSigner, ethersProvider } = useWallet();
    const [isSending, setIsSending] = useState(false);
    const [accountDetails, setAccountDetails]= useState({accountAddress:'',accountEmail:''})
    const [error, setError] = useState("");

        // Switch chain on load
        useEffect(() => {
            if (chainCurrent?.id !== deployedNetworkData?.chainId) {
                switchNetwork && switchNetwork(deployedNetworkData?.chainId);
            }
        }, [chainCurrent, deployedNetworkData]);

        useEffect(() => {
            (async () => {
                const contractsDataNew = await import(`@/constants/smart-contracts-${process.env.NODE_ENV === "production" ? "production" : "development"}.json`);
                setContractsData(contractsDataNew);
            })();
        }, []);

        useEffect(() => {
           fetchWalletData();
        },[walletConnectionStatus]);

        const onSend = async () => {
            setError("");
            var chain=chainCurrent?chainCurrent.name:"polygonMumbai";
            const smartPayAddress = deployment[chain as keyof typeof deployment]
            const smartPayContract = new ethers.Contract(
                smartPayAddress,
                SmartPayABI,
                ethersSigner
            )

            console.log(chainCurrent?.name,smartPayAddress, smartPayContract)
            try {
                setIsSending(true);
    
                if (smartPayContract && walletConnectionStatus === "connected" && switchNetwork && deployedNetworkData) {
                    switchNetwork(deployedNetworkData.chainId);
                    
                    await (await smartPayContract.createSmartPayWallet(Email)).wait();
                    await fetchWalletData();

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

        const fetchWalletData =async () =>{
            
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

                const emailAcc= await smartContract.emailAccount();
                setAccountDetails({
                    accountAddress:walletAdd,
                    accountEmail:emailAcc,}
                )
            }
            else{
                console.log(smartPayContract,walletConnectionStatus)
            }
                
        }
    
    return (
        <Card className={className}>
            <Card.Title>Account</Card.Title>
            <Card.Content className={styles.content}>
                <div className={styles.creditCardSection}>
                    <CreditCardSvg
                        className={styles.creditCard}
                        logo="Smart Pay"
                        accountAddress=
                            {accountDetails.accountAddress?
                                    accountDetails.accountAddress:"Create your Account now"}
                        linkedEmail={accountDetails.accountEmail}
                    />
                </div>

                <div style={{ display:accountDetails.accountAddress?"none":"block"}}className={styles.details}>
                    <CardsDetail
                        label={walletConnectionStatus==="connected"?"Wallet Connected":"Please Connect your Wallet"}
                        emphasized
                    />
                    <CardsDetail
                        label={walletConnectionStatus==="connected"?"Enter your mail id to Create Account":"Waiting"}
                        trend="positive"
                    />
                    <form className={styles.sendMessage} onSubmit={(e) => {
                            e.preventDefault();
                            onSend();
                        }}>
                     <input className={styles.input} placeholder="Email" value={Email} onChange={(e) => setEmail(e.target.value)} disabled={isSending || walletConnectionStatus !="connected"} />
                     <button className={styles.btn} disabled={!Email || isSending} type="submit">&gt;</button>
                     </form>
                </div>

                
                <div style={{ display:accountDetails.accountAddress?"block":"none"}}className={styles.details}>

                    <CardsDetail
                        label={"Please enter the callback uri for payment integration"}
                        trend="positive"
                    />
                    <form className={styles.sendMessage} onSubmit={(e) => {
                            e.preventDefault();
                            onSend();
                        }}>
                     <input className={styles.input} placeholder="Callback URI" value={URI} onChange={(e) => setURI(e.target.value)} disabled={isSending || walletConnectionStatus !="connected"} />
                     <button className={styles.btn} disabled={!URI || isSending} type="submit">&gt;</button>
                     </form>
                </div>
            </Card.Content>
        </Card>
    );
};
