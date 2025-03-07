import Hello from "./components/Hello";


export default function Home() {
  console.log("What am I? -- SERVER/CLIENT")
  
  return (
    <>
      <h1 className="text-2xl font-bold">Hello this is first next js app!</h1>
      <Hello />
    </>
    
  );
}
