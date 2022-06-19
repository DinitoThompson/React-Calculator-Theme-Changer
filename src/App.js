/* eslint-disable no-eval */
import { useState } from "react";

function App() {
  const [calc, setCalc] = useState("");
  const [results, setResults] = useState("");
  const [operatorTheme, setOperatorTheme] = useState("");

  const [pageMode, setPageMode] = useState("Light");

  const operators = ["/", "*", "-", "+", "."];

  const deleteLast = () => {
    if (calc === "") {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  const updateCalc = (value) => {
    if (
      (operators.includes(value) && calc === "") ||
      (operators.includes(value) && operators.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);
    if (!operators.includes(value)) {
      setResults(eval(calc + value).toString());
    }
  };

  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return digits;
  };

  return (
    <div className={pageMode}>
      {/* Navbar */}
      <div className="header">
        <button
          onClick={() => setPageMode("Dark")}
          className="button__theme dark"
        >
          Dark
        </button>
        <p>Calculator Theme Changer</p>

        <button
          onClick={() => setPageMode("Light")}
          className="button__theme light"
        >
          Light
        </button>
      </div>

      {/* Calculator */}
      <div className="calculator">
        <div className="display">
          {results ? <span>({results})</span> : ""}
          &nbsp;
          {calc || "0"}
        </div>
        <div className="operators">
          <button onClick={() => updateCalc("/")} className={operatorTheme}>
            /
          </button>
          <button onClick={() => updateCalc("+")} className={operatorTheme}>
            +
          </button>
          <button onClick={() => updateCalc("-")} className={operatorTheme}>
            -
          </button>
          <button onClick={() => updateCalc("*")} className={operatorTheme}>
            *
          </button>
          <button onClick={deleteLast} className={operatorTheme}>
            DEL
          </button>
        </div>
        <div className="digits">
          {createDigits()}
          <button onClick={() => updateCalc("0")}>0</button>
          <button onClick={() => updateCalc(".")}>.</button>

          <button onClick={calculate}>=</button>
        </div>
      </div>

      {/* Color Controller */}
      <div className="color__controller">
        <button
          onClick={() => setOperatorTheme("aqua__theme")}
          className="button__aqua"
        >
          Aqua
        </button>
        <button
          onClick={() => setOperatorTheme("red__theme")}
          className="button__red"
        >
          Red
        </button>
        <button
          onClick={() => setOperatorTheme("purple__theme")}
          className="button__purple"
        >
          Purple
        </button>
        <button
          onClick={() => setOperatorTheme("green__theme")}
          className="button__green"
        >
          Green
        </button>
        <button
          onClick={() => setOperatorTheme("")}
          className="button__default"
        >
          Default Color
        </button>
      </div>
    </div>
  );
}

export default App;
