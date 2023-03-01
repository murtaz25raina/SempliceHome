import { useEffect, useState } from "react";
import Review1 from "../assets/review-img-1.png";
import Review2 from "../assets/review-img-2.png";
import Review3 from "../assets/review-img-3.png";
import Review4 from "../assets/review-img-4.png";
import Review5 from "../assets/review-img-5.png";
import "./reviews.css";

const FADE_INTERVAL_MS = 4000;
const WORD_CHANGE_INTERVAL_MS = FADE_INTERVAL_MS * 2;
const WORDS_TO_ANIMATE = [
  <div className="review-name-img-holder">
    <div>
      They weren't kidding when they said this is a designers' best kept secret.
      It's a powerful platform that helps you create your vision... And best of
      all, their support feels like family.
    </div>
    <div className="img-name-holder">
    <img src={Review1} alt="#"  style={{width:'80px',height:'80px',marginRight:'20px'}}/>
    <div className="name-desg-holder">
        <div className="name-review">Murtaz Raina</div>
        <div className="designation">Software Developer</div>
    </div>
    </div>
  </div>,
  <div className="review-name-img-holder">
    <div>
      Semplice is an easy & visual way to show my work. I love having so many
      options. When I get tired I can totally change my website without dealing
      with code.
    </div>
    <div className="img-name-holder">
    <img src={Review2}  alt="#" style={{width:'80px',height:'80px',marginRight:'20px'}} />
    <div className="name-desg-holder">
        <div className="name-review">Murtaz Raina</div>
        <div className="designation">Software Developer</div>
    </div>
    </div>
  </div>,
  <div className="review-name-img-holder">
    <div>
      One of the best and most vital design tools I've used in the past twenty
      years. Rarely does something so promising actually deliver—Semplice is a
      game-changer.
    </div>
    <div className="img-name-holder">
    <img src={Review3} alt="#" style={{width:'80px',height:'80px',marginRight:'20px'}} />
    <div className="name-desg-holder">
        <div className="name-review">Murtaz Raina</div>
        <div className="designation">Software Developer</div>
    </div>
    </div>
  </div>,
  <div className="review-name-img-holder">
    <div>
      I love that I can make changes and implement my designs and ideas very
      quickly with Semplice. This is the first time I haven't dreaded updating
      or managing my personal website in...forever.
    </div>
    <div className="img-name-holder">
    <img src={Review4} alt="#" style={{width:'80px',height:'80px',marginRight:'20px'}} />
    <div className="name-desg-holder">
        <div className="name-review">Murtaz Raina</div>
        <div className="designation">Software Developer</div>
    </div>
    </div>
  </div>,
  <div className="review-name-img-holder">
    <div>
      It was love at first sight with Semplice. I finally found a system
      designed specifically to make my portfolio. They have an incredible taste
      for design. If you are a designer... there is no better choice.
    </div>
    <div className="img-name-holder">
    <img src={Review5} alt="#" style={{width:'80px',height:'80px',marginRight:'20px'}}/>
    <div className="name-desg-holder">
        <div className="name-review">Murtaz Raina</div>
        <div className="designation">Software Developer</div>
    </div>
    </div>
  </div>,
];

export const Reviews = () => {
  const [fadeProp, setFadeProp] = useState({ fade: "fade-in" });
  const [wordOrder, setWordOrder] = useState(0);

  useEffect(() => {
    const fadeTimeout = setInterval(() => {
      fadeProp.fade === "fade-in"
        ? setFadeProp({ fade: "fade-out" })
        : setFadeProp({ fade: "fade-in" });
    }, FADE_INTERVAL_MS);

    return () => clearInterval(fadeTimeout);
  }, [fadeProp]);

  useEffect(() => {
    const wordTimeout = setInterval(() => {
      setWordOrder(
        (prevWordOrder) => (prevWordOrder + 1) % WORDS_TO_ANIMATE.length
      );
    }, WORD_CHANGE_INTERVAL_MS);

    return () => clearInterval(wordTimeout);
  }, []);

  return (
    <div className="review-container">
      <div className="review-text-container">
        <div className={fadeProp.fade}>{WORDS_TO_ANIMATE[wordOrder]}</div>
      </div>
    </div>
  );
};

export default Reviews;
