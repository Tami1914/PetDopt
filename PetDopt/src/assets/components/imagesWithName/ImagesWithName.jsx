import animalImages from "../../services/animalImages/animalImages";
import "./ImagesWithName.css";

function ImagesWithNames() {
  return (
    <>
      <div className="animals-container">
        {
          animalImages.map((animalImage, index) => (
            <div className="image-list">
              <img key={index} src={`/images/${animalImage.fileName}`} alt="imagen" />
              <span>{animalImage.name}</span>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default ImagesWithNames;