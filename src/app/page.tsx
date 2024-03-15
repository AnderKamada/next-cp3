
import CardFilm from "./Components/CardFilm/CardFilm";

export default function Home() {
  return (
   <main className="flex-auto">
     <section className="grid grid-cols-6 gap-x-7 gap-y-4">
      <CardFilm title="Bad boys" image="/badboys.webp" link="https://www.youtube.com/watch?v=Xm12NSa8jsM" />
      <CardFilm title="My Little Pony" image="/mylittleponey.jpg" link="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
      <CardFilm title="Pobres Criaturas" image="/poorthings.webp" link="https://www.youtube.com/watch?v=RlbR5N6veqw" />
      <CardFilm title = "Itaewon Class" image = "\Itaewonclass.jpg" link ="https://www.youtube.com/watch?v=NeaHNQJ1kCo"/>
      <CardFilm title = "Força G" image = "/forcag.webp" link ="https://www.youtube.com/watch?v=065fOp-PhAI"/>
      <CardFilm title = "One piece" image = "\onepiece.jpg" link ="https://www.youtube.com/watch?v=YC8SLpnxsL4"/>
      <CardFilm title = "Força G" image = "/forcag.webp" link ="https://www.youtube.com/watch?v=065fOp-PhAI"/>
      <CardFilm title="Pobres Criaturas" image="/poorthings.webp" link="https://www.youtube.com/watch?v=RlbR5N6veqw" />
      <CardFilm title="Bad boys" image="/badboys.webp" link="https://www.youtube.com/watch?v=Xm12NSa8jsM" />
      <CardFilm title = "Itaewon Class" image = "\Itaewonclass.jpg" link ="https://www.youtube.com/watch?v=NeaHNQJ1kCo"/>
      <CardFilm title="My Little Pony" image="/mylittleponey.jpg" link="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
      <CardFilm title="Bad boys" image="/badboys.webp" link="https://www.youtube.com/watch?v=Xm12NSa8jsM" />
      <CardFilm title = "Força G" image = "/forcag.webp" link ="https://www.youtube.com/watch?v=065fOp-PhAI"/>


     </section>
   </main>
  );
}