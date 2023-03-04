import React from "react";
import "../styles/Goals.css";
import exampleImage1 from "../assets/svg/goal.png";
import exampleImage2 from "../assets/svg/trophy.png";
import exampleImage3 from "../assets/svg/laptop.png";
import exampleImage4 from "../assets/svg/heart.png";
import exampleImage5 from "../assets/svg/question.png";

interface Photo {
  id: number;
  image: string;
  title: string;
}

const photos: Photo[] = [
  { id: 1, title: "Goal 1", image: exampleImage1 },
  { id: 2, title: "Goal 2", image: exampleImage2 },
  { id: 3, title: "Goal 3", image: exampleImage3 },
  { id: 4, title: "Goal 4", image: exampleImage4 },
  { id: 5, title: "Goal 5", image: exampleImage5 },
];

const Goals: React.FC = () => {
  return (
    <div className="goals">
      <ul className="goals__list">
        {photos.map((photo) => (
          <li key={photo.id} className="goals__item">
            <img
              className="goals__item-image"
              src={photo.image}
              alt={photo.title}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Goals;
