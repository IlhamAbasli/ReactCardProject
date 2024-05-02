import "bulma/css/bulma.css";
import "./App.css";
import Course from "./assets/Course";
import Angular from "./assets/images/angular.jpg";
import Bootstrap5 from "./assets/images/bootstrap5.png";
import CSharp from "./assets/images/ccsharp.png";
import Komple from "./assets/images/kompleweb.jpg";

function App() {
  return (
    <div className="App">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Courses</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
        <div className="columns">
          <div className="column">

            <Course
              image={Angular}
              title="Angular"
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis quia quas ad perspiciatis unde molestias ipsam repellat odio magni architecto."
            />
          </div>
          <div className="column">
            <Course
              image={Bootstrap5}
              title="Bootstrap"
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis quia quas ad perspiciatis unde molestias ipsam repellat odio magni architecto."
            />
          </div>
          <div className="column">
            <Course
              image={CSharp}
              title="CSharp"
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis quia quas ad perspiciatis unde molestias ipsam repellat odio magni architecto."
            />
          </div>
          <div className="column">
            <Course
              image={Komple}
              title="Komple"
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis quia quas ad perspiciatis unde molestias ipsam repellat odio magni architecto."
            />
          </div>
        </div>
        </section>

      </div>
    </div>
  );
}

export default App;
