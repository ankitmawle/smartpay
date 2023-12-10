import { useRouter } from 'next/router'
import { useQRCode } from 'next-qrcode';
import { useEffect, useState } from 'react';
export default function Page() {
  const [uri,seturi]=useState("")
  useEffect(()=>{
    var u=window.location.origin+"/pay/"+router.query.slug[0]+"/"+router.query.slug[1]+"/"+router.query.slug[2]+"/"+router.query.slug[3]+"/";
    seturi(u);
  },[]);
  
  const { Canvas } = useQRCode();
  const router = useRouter()
  return (
  <>
      <Canvas
      text={uri}
      options={{
        errorCorrectionLevel: 'M',
        margin: 3,
        scale: 4,
        width: 200,
        color: {
          dark: '#010599FF',
          light: '#FFBF60FF',
        },
      }}
    />

  </>
    )
}