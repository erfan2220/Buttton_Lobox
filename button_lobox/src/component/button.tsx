import { useState } from "react";
import './button.css';
import graduation from "../../public/graduation.svg";
import science from "../../public/science.svg";
import paint from "../../public/paint.svg";
import sport from "../../public/sport.svg";
import games from "../../public/games.svg";
import health from "../../public/health.svg";

const Button = () => {
    const [open, setOpen] = useState(false);
    const [hover, setHover]=useState(false)
    const [title, setTitle]=useState("")
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
        setOpen(!open);
    };





    const dropdownItems = [
        { label: 'Education', icon: graduation },
        { label: 'Yeeeah Science?', icon: science },
        { label: 'Art', icon: paint },
        { label: 'Sport', icon: sport },
        { label: 'Games', icon: games },
        { label: 'Health', icon: health },
    ];

    return (
        <div className="maincontainer">
            <div className="dropdown" onClick={handleClick}>
                <h3>science</h3>
                <svg  transform={ isFlipped ? 'scale(-1 -1)' : 'scale(1 1)'}
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 330 330"
                      xml:space="preserve"
                      onClick={handleClick}
                      fill="#000"
                      width={20}

                >
                    <path id="XMLID_224_" d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394
                        l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393
                        C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z" />
                </svg>
            </div>

            {open && (
                <div className="dropdown-container-container">
                    <div className="dropdown-container">
                        {dropdownItems.map((item, index) => (
                            <div key={index} className="dropdown-item" onMouseEnter={() => {
                                setHover(true)
                                setTitle(item.label)
                            }
                            }
                                 onMouseLeave={() => setHover(false)}>
                                <div>
                                    <span>{item.label}</span>
                                    <img src={item.icon} alt={item.label} width={15}/>
                                </div>
                                {hover && (item.label === title) &&
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="15"
                                         fill="#747bff">
                                        <path
                                            d="M 42.875 8.625 C 42.84375 8.632813 42.8125 8.644531 42.78125 8.65625 C 42.519531 8.722656 42.292969 8.890625 42.15625 9.125 L 21.71875 40.8125 L 7.65625 28.125 C 7.410156 27.8125 7 27.675781 6.613281 27.777344 C 6.226563 27.878906 5.941406 28.203125 5.882813 28.597656 C 5.824219 28.992188 6.003906 29.382813 6.34375 29.59375 L 21.25 43.09375 C 21.46875 43.285156 21.761719 43.371094 22.050781 43.328125 C 22.339844 43.285156 22.59375 43.121094 22.75 42.875 L 43.84375 10.1875 C 44.074219 9.859375 44.085938 9.425781 43.875 9.085938 C 43.664063 8.746094 43.269531 8.566406 42.875 8.625 Z"/>
                                    </svg>}
                            </div>
                        ))}
                    </div>
                </div>
                    )}

                </div>
                );
            };

export default Button;
