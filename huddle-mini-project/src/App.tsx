function App() {
  return (
    <div className="m-12">
      <img className="lg:w-2/12 w-3/12" src="./images/logo.svg" alt="logo" />
      <div className="md:flex">
        <img
          className="my-16 mx-auto md:w-1/2"
          src="./images/illustration-mockups.svg"
          alt="illustrations"
        />

        <div className="md:my-16">
          <h1 className="mx-12 mb-4 text-center font-headings text-3xl font-bold tracking-wide text-white lg:text-6xl ">
            Build The Community Your Fans Will Love
          </h1>
          <div className="mx-6 text-center text-xl font-light text-white lg:text-2xl">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </div>
          <button className="mx-auto mt-10 block rounded-full bg-white px-24 py-4 shadow-lg hover:bg-huddle-magenta hover:text-white">
            Register
          </button>
        </div>
      </div>

      <footer className="my-10 flex justify-center gap-3 text-xl text-white">
        <a
          target="blank"
          href="https://facebook.com"
          className="relative h-10 w-10 rounded-full border p-1"
        >
          <i className="fa-brands fa-facebook-f absolute top-2 left-3"></i>
        </a>
        <a
          target="blank"
          href="https://twitter.com"
          className="relative h-10 w-10 rounded-full border p-1"
        >
          <i className="fa-brands fa-twitter absolute top-2 left-2"></i>
        </a>
        <a
          target="blank"
          href="https://instagram.com"
          className="relative h-10 w-10 rounded-full border p-1"
        >
          <i className="fa-brands fa-instagram absolute top-2 left-2"></i>
        </a>
      </footer>
    </div>
  );
}

export default App;
