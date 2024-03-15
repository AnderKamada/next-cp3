import CardFilm from "./Components/CardFilm/cardfilm";

export default function Home() {
  return (
   <main className="flex-auto">
      <section className="grid grid-cols-6 gap-x-7 gap-y-4">
      <CardFilm title="O segredo dos animais" image="/o_segredo_dos_animais.webp" link="https://www.youtube.com/watch?v=uYAyHhaZwYA" />
      <CardFilm title="Homem Aranha 3" image="/_HOMEM_ARANHA_3.jpg" link="https://www.youtube.com/watch?v=wPosLpgMtTY" />
      <CardFilm title="Gigantes de Aço" image="/real_steel.jpg" link="https://www.youtube.com/watch?v=SwfmV3nn6QA" />
      <CardFilm title = "Godzilla vs Kong" image = "/Godzilla_vs._Kong.jpg" link ="https://www.youtube.com/watch?v=kIET9yMABD8"/>
      <CardFilm title = "Estranho mundo de Jack" image = "/Mundo_de_Jack.webp" link ="https://www.youtube.com/watch?v=wr6N_hZyBCk"/>
      <CardFilm title="O segredo dos animais" image="/o_segredo_dos_animais.webp" link="https://www.youtube.com/watch?v=uYAyHhaZwYA" />
      <CardFilm title="Homem Aranha 3" image="/_HOMEM_ARANHA_3.jpg" link="https://www.youtube.com/watch?v=wPosLpgMtTY" />
      <CardFilm title="Gigantes de Aço" image="/real_steel.jpg" link="https://www.youtube.com/watch?v=SwfmV3nn6QA" />
      <CardFilm title = "Godzilla vs Kong" image = "/Godzilla_vs._Kong.jpg" link ="https://www.youtube.com/watch?v=kIET9yMABD8"/>
      <CardFilm title = "Estranho mundo de Jack" image = "/Mundo_de_Jack.webp" link ="https://www.youtube.com/watch?v=wr6N_hZyBCk"/>
    
        </section>
   </main>
  );
}
