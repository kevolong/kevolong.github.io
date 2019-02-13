import weather1 from "../assets/images/previews/weathernow_logo.jpg";
import weather2 from "../assets/images/previews/weather_broken-clouds_cropped2.jpg";
import weather3 from "../assets/images/previews/weather_rain_cropped.jpg";
import weather4 from "../assets/images/previews/weather_clouds-night_cropped.jpg";
import weather5 from "../assets/images/previews/weather_haze-day_cropped.jpg";
import wiki1 from "../assets/images/previews/wiki_home_cropped.jpg";
import wiki2 from "../assets/images/previews/wiki_result_cropped.jpg";
import wiki3 from "../assets/images/previews/wiki_home_full_cropped.jpg";
import dViz1 from "../assets/images/previews/dViz_logo.jpg";
import dViz2 from "../assets/images/previews/dViz_bar_cropped.jpg";
import dViz3 from "../assets/images/previews/dViz_choropleth_cropped.jpg";
import dViz4 from "../assets/images/previews/dViz_scatter_cropped.jpg";
import dViz5 from "../assets/images/previews/dViz_treemap_cropped.jpg";
import punch1 from "../assets/images/previews/punchclock_cropped.jpg";
import punch2 from "../assets/images/previews/punchclock_top_cropped.jpg";
import punch3 from "../assets/images/previews/punchclock_mid_cropped.jpg";
import punch4 from "../assets/images/previews/punchclock_bottom_cropped.jpg";
import doc1 from "../assets/images/previews/jsDOC_alt.jpg";
import doc2 from "../assets/images/previews/jsDOC_desktop_cropped.jpg";
import doc3 from "../assets/images/previews/jsDOC_mobile_cropped.jpg";
import trivia1 from "../assets/images/previews/trivia-actually_title_white-bg.jpg";
import trivia2 from "../assets/images/previews/ta_question_2 cropped.jpg";
import trivia3 from "../assets/images/previews/ta_result_1_cropped.jpg";
import trivia4 from "../assets/images/previews/ta_answer_key_cropped.jpg";
import trivia5 from "../assets/images/previews/ta_info_cropped.jpg";
import trivia6 from "../assets/images/previews/ta_500_cropped.jpg";
import trivia7 from "../assets/images/previews/ta_admin_cropped.jpg";
import metimp1 from "../assets/images/previews/met-imp_logo.jpg";
import metimp2 from "../assets/images/previews/met-imp_home_cropped.jpg";
import metimp3 from "../assets/images/previews/met-imp_api_cropped.jpg";
import metimp4 from "../assets/images/previews/met-imp_routes_cropped.jpg";
import metimp5 from "../assets/images/previews/met-imp_test-browser_cropped.jpg";
import anon1 from "../assets/images/previews/anon_logo.jpg";
import anon2 from "../assets/images/previews/anon_home_cropped.jpg";
import anon3 from "../assets/images/previews/anon_board_cropped.jpg";
import anon4 from "../assets/images/previews/anon_rocket_thread_cropped.jpg";
import anon5 from "../assets/images/previews/anon_update_cropped.jpg";
import anon6 from "../assets/images/previews/anon_test_cropped.jpg";
import fscalc1 from "../assets/images/previews/fscalc_icon_cropped.jpg";
import fscalc2 from "../assets/images/previews/fscalc_footage_cropped.jpg";
import fscalc3 from "../assets/images/previews/fscalc_space_cropped.jpg";
import fscalc4 from "../assets/images/previews/fscalc_info_cropped.jpg";

/* Unused
import fscalc5 from "../assets/images/previews/fscalc_custom_cropped.jpg";
import quote1 from "../assets/images/previews/quote_logo_solo.jpg";
import quote2 from "../assets/images/previews/quote_purple_cropped.jpg";
import quote3 from "../assets/images/previews/quote_twitter_cropped.jpg";
import quote4 from "../assets/images/previews/quote_blue_cropped.jpg";
import quote5 from "../assets/images/previews/quote_black_cropped.jpg";
import drum1 from "../assets/images/previews/drum_machine_logo.jpg";
import drum2 from "../assets/images/previews/drum_machine_cropped.jpg";
import placeholder from "../assets/images/previews/placeholder.jpg";
*/

const frontEndProjects = [
  {
    title: "fsCALC",
    pics: [fscalc1, fscalc2, fscalc3, fscalc4],
    desc:
      "Footage Size Calculator estimates how much space video footage will take, or how much footage can fit into a space.",
    skills: ["Angular", "Typescript", "HTML/SASS"],
    url: "https://footagecalc.com",
    code: "https://github.com/kevolong/fsCALC/tree/gh-pages/src"
  },
  {
    title: "Weather Now",
    pics: [weather1, weather2, weather3, weather4, weather5],
    desc:
      "Weather Now displays the current weather based on user's geolocation in Imperial or Metric. Background image based on weather conditions and time of day. Uses the OpenWeatherMap API.",
    skills: ["Javascript", "jQuery", "Bootstrap", "HTML/CSS"],
    url: "https://kevolong.github.io/WeatherNow/",
    code: "https://github.com/kevolong/WeatherNow"
  },

  {
    title: "Wikisearchia",
    pics: [wiki1, wiki2, wiki3],
    desc:
      "Wikisearchia connects with the Wikipedia API to bring the top ten results of a search or a random article.",
    skills: ["Javascript", "jQuery", "Bootstrap", "HTML/CSS"],
    url: "https://kevolong.github.io/Wikisearchia/",
    code: "https://github.com/kevolong/Wikisearchia"
  },
  {
    title: "dViz",
    pics: [dViz1, dViz2, dViz3, dViz4, dViz5],
    desc:
      "A collection of D3 data visualizations: choropleth, scatterplot, heatmap, treemaps, and a bar chart.",
    skills: ["D3", "Javascript", "jQuery", "HTML/CSS"],
    url: "https://kevolong.github.io/dViz/",
    code: "https://github.com/kevolong/dViz"
  },
  {
    title: "Punch Clocks",
    pics: [punch1, punch2, punch3, punch4],
    desc: "Punch Clocks is a sample product landing page. The guaranteed knockout of sleep!",
    skills: ["HTML/CSS"],
    url: "https://kevolong.github.io/PunchClocks/",
    code: "https://github.com/kevolong/PunchClocks"
  },
  {
    title: "jsDOC",
    pics: [doc1, doc2, doc3],
    desc: "Sample technical documentation with responsive navigation menu.",
    skills: ["HTML/SASS"],
    url: "https://kevolong.github.io/jsDOC/",
    code: "https://github.com/kevolong/jsDOC"
  }
];

const fullStackProjects = [
  {
    title: "Trivia Actually",
    pics: [trivia1, trivia2, trivia3, trivia4, trivia5, trivia6, trivia7],
    desc:
      "A Love Actually trivia game. 10 questions chosen at random from the server but balanced for difficulty. Scores and IPs are stored in a MongoDB for ranking and QA.",
    skills: ["React", "Node.js", "Express", "MongoDB", "Pug", "Mocha", "HTML/SASS"],
    url: "https://triviaactually.com",
    code: "https://github.com/kevolong/TriviaActually"
  },
  {
    title: "Metric/Imperial Converter",
    pics: [metimp1, metimp2, metimp3, metimp4, metimp5],
    desc:
      "Metric/Imperial Converter is a REST API with a front-end app that converts between popular metric and imperial units.",
    skills: ["Node.js", "Express", "jQuery", "Helmet", "Mocha/Chai/Zombie", "HTML/SASS"],
    url: "https://fcc-metimp-convert-kl.glitch.me/",
    code: "https://github.com/kevolong/Metric-Imperial-Convert"
  },
  {
    title: "AnonBoard",
    pics: [anon1, anon2, anon3, anon4, anon5, anon6],
    desc:
      "Anonymous message board allowing any user to start a new board or thread, reply, report, or delete their own entry with a password.",
    skills: [
      "Node.js",
      "Express",
      "MongoDB/Mongoose",
      "jQuery",
      "Helmet",
      "Mocha/Chai/Zombie",
      "Bootstrap",
      "HTML/SASS"
    ],
    url: "https://fcc-anonboard-kl.glitch.me/",
    code: "https://github.com/kevolong/AnonBoard"
  }
];

const featuredProject = fullStackProjects[0];

// eslint-disable-next-line
const unused = [
  {
    title: "Pomodoro Clock",
    pics: [
      "../assets/images/previews/pomodoro_logo.jpg",
      "../assets/images/previews/pomodoro_home_cropped.jpg",
      "../assets/images/previews/pomodoro_modal_cropped.jpg"
    ],
    desc:
      "Pomodoro Clock lets users set custom work and break sessions for their pomodoro technique, alerting by sound when it's time to switch.",
    skills: ["React", "Javascript", "Bootstrap", "HTML/CSS"],
    url: "https://kevolong.github.io/PomClock/"
  },
  {
    title: "DigDrum",
    //pics: [drum1, drum2],
    desc: "A digital drum-machine the user can play with using keyboard or mouse.",
    skills: ["React", "Javascript", "Bootstrap", "HTML/CSS"],
    url: "https://kevolong.github.io/DigDrum/"
  },
  {
    title: "Random Quote Machine",
    //pics: [quote1, quote2, quote3, quote4, quote5],
    desc:
      "Endless random quote generator with dynamic color themes that allows users to easily share on social media. Connects with Talaikis Quotes API.",
    skills: ["Javascript", "jQuery", "Bootstrap", "HTML/CSS"],
    url: "https://kevolong.github.io/RandomQuote/"
  }
];

export { frontEndProjects, fullStackProjects, featuredProject };
