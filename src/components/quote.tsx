import { useState } from "react";
import { Button } from "./buttons";

var quotes = require("../quotes.json");
var colors = require("../colors.json");

export function Quote(props: any) {
  const [quote, setQuote] = useState(quotes.quotes[0]);
  const [color, setColor] = useState(colors.colors[0]);
  const [fadeOut, setFadeOut] = useState(false);

  function handleClick() {
    let randomQuote = Math.floor(Math.random() * quotes.quotes.length);
    let randomColor = Math.floor(Math.random() * colors.colors.length);
    setFadeOut(true);
    setTimeout(() => {
      setColor(colors.colors[randomColor]);
      setFadeOut(false);
      setQuote(quotes.quotes[randomQuote]);
    }, 500);
  }

  return (
    <main
      className={`mainContainer flex-auto justify-center justify-items-center items-center`}
      style={{ backgroundColor: color }}
    >
      <div className="quoteContainer " id="quote-box">
        <div className="flex quotes">
          <p
            id="text"
            className={` ${fadeOut ? "fadeout" : ""} mainQuote transition`}
            style={{ color }}
          >
            <i className={` ${fadeOut ? "fadeout" : ""}  quoteIcon transition`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                style={{ fill: color }}
              >
                <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
              </svg>
            </i>
            {quote.quote}
          </p>
          <p
            id="author"
            className={` ${fadeOut ? "fadeout" : ""}  quoteAuthor transition`}
            style={{ color }}
          >
            - {quote.author}
          </p>
        </div>
        <div className="flex btns">
          <div className="btns ">
            <a
              style={{ backgroundColor: color }}
              className="iconBtn mr"
              id="tweet-quote"
              title="Post this quote on twitter!"
              target="_blank"
              href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22Winning%20isn%E2%80%99t%20everything%2C%20but%20wanting%20to%20win%20is.%22%20Vince%20Lombardi"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="twitter"
              >
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
              </svg>
            </a>

            <a
              style={{ backgroundColor: color }}
              className="iconBtn"
              id="tumblr-quote"
              title="Post this quote on tumblr!"
              target="_blank"
              href="https://www.tumblr.com/widgets/share/tool?posttype=quote&amp;tags=quotes,freecodecamp&amp;caption=%20Ancient%20Indian%20Proverb&amp;content=Certain%20things%20catch%20your%20eye%2C%20but%20pursue%20only%20those%20that%20capture%20the%20heart.&amp;canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&amp;shareSource=tumblr_share_button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="tmblr"
              >
                <path d="M309.8 480.3c-13.6 14.5-50 31.7-97.4 31.7-120.8 0-147-88.8-147-140.6v-144H17.9c-5.5 0-10-4.5-10-10v-68c0-7.2 4.5-13.6 11.3-16 62-21.8 81.5-76 84.3-117.1.8-11 6.5-16.3 16.1-16.3h70.9c5.5 0 10 4.5 10 10v115.2h83c5.5 0 10 4.4 10 9.9v81.7c0 5.5-4.5 10-10 10h-83.4V360c0 34.2 23.7 53.6 68 35.8 4.8-1.9 9-3.2 12.7-2.2 3.5.9 5.8 3.4 7.4 7.9l22 64.3c1.8 5 3.3 10.6-.4 14.5z" />
              </svg>
            </a>
          </div>
          <div className="quoteBtn btns ">
            <Button
              name="New Quote"
              color={color}
              onBtnClick={() => handleClick()}
            ></Button>
          </div>
        </div>
      </div>
    </main>
  );
}
