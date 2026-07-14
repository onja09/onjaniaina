import React from "react";

function FormWave() {
  const label1 = "Email",
    label2 = "Password";

  return (
    <div className="bloc-form bg-slate-400">
      <div className="container-form">
        <h1>Please Login</h1>
        <form>
          <div className="form-control">
            <input type="text" required />
            <label>
              {label1.split("").map((letter, idx) => (
                <span key={idx} style={{ transitionDelay: `${idx * 50}ms` }}>
                  {letter}
                </span>
              ))}
            </label>
          </div>
          <div className="form-control">
            <input type="password" required />
            <label>
              {label2.split("").map((letter, idx) => (
                <span key={idx} style={{ transitionDelay: `${idx * 50}ms` }}>
                  {letter}
                </span>
              ))}
            </label>
          </div>
          <button className="btn-form">Login</button>
          <p className="text-form">
            Don't have an account? <a href="#">Register</a>{" "}
          </p>
        </form>
      </div>
    </div>
  );
}

export default FormWave;
