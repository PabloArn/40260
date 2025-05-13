document.addEventListener("DOMContentLoaded", () => {
  const ejemplo = document.getElementById("demo");

  const Picture = (id) => {
    return `
      <figure>
        <img src="https://picsum.photos/id/${id}/200/200" alt="Random Picture ${id}">
        <figcaption>Picture ID: ${id}</figcaption>
      </figure>
    `;
  };

  const renderPictures = () => {
    let content = "Hola<br>"; // Mensaje inicial
    content += Picture(1);
    content += Picture(2);
    content += Picture(3);
    ejemplo.innerHTML = content;
  };

  renderPictures();
});