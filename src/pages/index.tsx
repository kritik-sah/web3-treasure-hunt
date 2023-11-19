import Input from '@/components/Inputs'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Home() {
  const [claimable, setClaimable] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false,
  });

  const [disabledClaimBtn, setDisabledClaimBtn] = useState(false);
  const router = useRouter();

  const checkClaimable = () => {
    const claimableCheck = Object.values(claimable).some((item) => item === false);
    console.log("claimableCheck ==>", claimable)
    setDisabledClaimBtn(claimableCheck);
  };

  const updateClaimable = (num : number, value : boolean) => {
    setClaimable((prevClaimable) => ({ ...prevClaimable, [num]: value }));
  };

  useEffect(() => {
    checkClaimable();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [claimable]);
  

  const checkClaim = () => {
    router.push("/claim")
  }

  return (
    <main className='flex flex-col items-center px-4'>
      <div className="py-6 font-semibold w-full flex flex-col items-center">
        <h1>Secret Treasure</h1>
      </div>
      <div className="grid grid-cols-2 gap-4 max-w-sm">
        <Input number={1} correctValue="machine" update={updateClaimable} placeholder="*******" />
        <Input number={2} correctValue="drag" update={updateClaimable} placeholder="****" />
        <Input number={3} correctValue="swift" update={updateClaimable} placeholder="*****" />
        <Input number={4} correctValue="endorse" update={updateClaimable} placeholder="*******" />
        <Input number={5} correctValue="loading" update={updateClaimable} placeholder="*******" />
        <Input number={6} correctValue="canyon" update={updateClaimable} placeholder="******" />
        <Input number={7} correctValue="title" update={updateClaimable} placeholder="*****" />
        <Input number={8} correctValue="few" update={updateClaimable} placeholder="***" />
        <Input number={9} correctValue="ribbon" update={updateClaimable} placeholder="******" />
        <Input number={10} correctValue="fame" update={updateClaimable} placeholder="****" />
        <Input number={11} correctValue="residency" update={updateClaimable} placeholder="*********" />
        <Input number={12} correctValue="stairs" update={updateClaimable} placeholder="******" />
        
      </div>
      <div className="w-full p-4 fixed left-0 bottom-0">
        <button onClick={()=>checkClaim()} disabled={disabledClaimBtn} className='uppercase bg-zo-primary text-zo-stroke disabled:bg-zo-secondary p-4 w-full '>
          continue
        </button>
      </div>
    </main>
  )
}
