import Grid from "@/components/Grid";

export default function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>AIP Trio Challenge</h1>
      <Grid rows={5} cols={5} />
    </div>
  );
}
