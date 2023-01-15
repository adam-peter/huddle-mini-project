function App() {
  return (
    <div className="m-12">
      <img className="w-4/12" src="./images/logo.svg" alt="logo" />
      <img
        className="my-16 mx-auto"
        src="./images/illustration-mockups.svg"
        alt="illustrations"
      />
      <h1 className="mx-12 mb-4 text-center font-sans text-4xl font-semibold tracking-wide text-white">
        Build The Community Your Fans Will Love
      </h1>
      <div className="mx-6 text-center text-2xl font-light text-white">
        Huddle re-imagines the way we build communities. You have a voice, but
        so does your audience. Create connections with your users as you engage
        in genuine discussion.
      </div>
      <button className="mx-auto mt-10 block rounded-full bg-white px-24 py-4 shadow-lg">
        Register
      </button>

      <footer className="my-10 flex justify-center gap-3 text-xl text-white">
        <a target="blank" href="https://facebook.com" className="relative h-10 w-10 border p-1 rounded-full">
          <i className="fa-brands fa-facebook-f absolute top-2 left-3"></i>
        </a>
        <a target="blank" href="https://twitter.com" className="relative h-10 w-10 border p-1 rounded-full">
          <i className="fa-brands fa-twitter absolute top-2 left-2"></i>
        </a>
        <a target="blank" href="https://instagram.com" className="relative h-10 w-10 border p-1 rounded-full">
          <i className="fa-brands fa-instagram absolute top-2 left-2"></i>
        </a>
      </footer>
    </div>
  );
}

export default App;
