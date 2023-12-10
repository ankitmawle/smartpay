import { useRouter } from 'next/router'
 import  QRCode from "react-qr-code";
export default function Page() {
  const router = useRouter()
  const uri=()=>{var u=window.location.origin+"/pay/"+router.query.slug[0]+"/"+router.query.slug[1]+"/"+router.query.slug[2]+"/"+router.query.slug[3]+"/"; return u}
  return (
  <>
    <QRCode style={{ height: "auto", maxWidth: "100%", width: "100%" }} value={window.location.origin+"/pay/"+router.query.slug[0]+"/"+router.query.slug[1]+"/"+router.query.slug[2]+"/"+router.query.slug[3]+"/"}
      viewBox={`0 0 256 256`}
    />
  </>
    )
}