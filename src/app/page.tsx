'use client';
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [username, setUsername] = useState("");
  const router = useRouter();
  const adminUsername = "admin";
  const customerUsername = "cust";

  const handleLogin = () => {
    if (username === adminUsername) {
      router.push("/admin");
    } else if (username === customerUsername){
      router.push("/customer");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center m-auto h-screen gap-2">
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="rounded-full outline-2 px-3" placeholder="Username"></input>
      <input className="rounded-full outline-2 px-3" placeholder="Password"></input>
      <button onClick={handleLogin} className="">Login</button>
    </div>
  );
}
