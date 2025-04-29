import { useState } from "react";
import { episodeList } from "./data"; //get static data from json file

export default function App() {
  // TODO
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState();

  function EpisodeDetails() {
    if (!selectedEpisode) {
      return (
        <section className="details">
          <h2>Dark Echoes</h2>
          <p>Select an Episode for Details:</p>
        </section>
      );
    }

    return (
      <section className="details">
        <h2>{selectedEpisode.title}</h2>
        <p>Episode ID: {selectedEpisode.id}</p>
        <p>Description: {selectedEpisode.description}</p>
      </section>
    );
  }

  function Season() {
    return (
    <section className="season">
      <h2>Season 1</h2>
      <ul className="season">
        {episodes.map((episode) => (
          <li key={episode.id} onClick={() => setSelectedEpisode(episode)}>
            {episode.title}
          </li>
        ))}
      </ul>
    </section>
    );
  }

  return (
    <>
    <header>
      <h1>Dark Echoes</h1>
    </header>
    <main>
      <Season />
      <EpisodeDetails />
    </main>
    </>
  );
}
