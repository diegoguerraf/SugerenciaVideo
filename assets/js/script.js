const ReproductorVideos = (() => {
  const insertarVideo = (url, id) => {
    const iframe = document.getElementById(id);
    iframe.setAttribute("src", url);
  };

  const reproducirVideo = (url, id) => {
    insertarVideo(url, id);
  };

  return {
    reproducirVideo,
  };
})();

class Multimedia {
  constructor(url) {
    this.url = url;
  }

  setInicio() {
    return "Este método es para realizar un cambio en la URL del video";
  }
}

class Reproductor extends Multimedia {
  constructor(url, id) {
    super(url);
    this.id = id;
  }

  playMultimedia() {
    ReproductorVideos.reproducirVideo(this.url, this.id);
  }

  setInicio(tiempo) {
    const urlWithStartTime = `${this.url}?start=${tiempo}`;
    const iframe = document.getElementById(this.id);
    iframe.setAttribute("src", urlWithStartTime);
  }
}

const musicaReproductor = new Reproductor(
  "https://www.youtube.com/embed/ChKqrwa7Ylw",
  "musica"
);
const peliculaReproductor = new Reproductor(
  "https://www.youtube.com/embed/5PSNL1qE6VY",
  "peliculas"
);
const serieReproductor = new Reproductor(
  "https://www.youtube.com/embed/9rVKos-oGnQ",
  "series"
);

musicaReproductor.playMultimedia();
peliculaReproductor.playMultimedia();
serieReproductor.playMultimedia();

serieReproductor.setInicio(10);
