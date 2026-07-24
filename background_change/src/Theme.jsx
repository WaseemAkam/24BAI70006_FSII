function Theme({ darkMode }) {
  return (
    <div className="content">
      <h1>{darkMode ? "Dark Theme" : "Light Theme"}</h1>

      <p>
        This theme is received from the App component using Props.
      </p>
    </div>
  );
}

export default Theme;