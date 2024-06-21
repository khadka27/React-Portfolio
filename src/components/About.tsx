

function About() {
  return (
    <div id="about" className=" id='about' min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="p-4 shadow-md flex justify-between items-center bg-gray-100 dark:bg-gray-800">
        <h1 className="text-2xl font-bold">About Me</h1>
      </header>
      <main className="p-8">
        <section   className=" max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Hello, I&apos;m [Your Name]
          </h2>
          <p className="mb-4">
            I&apos;m a passionate developer with a strong background in [Your
            Field]...
          </p>
          <h2 className="text-3xl font-bold mb-4">My Skills</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Skill 1</li>
            <li>Skill 2</li>
            <li>Skill 3</li>
          </ul>
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <p>
            Feel free to reach out via email at{" "}
            <a href="mailto:your.email@example.com" className="text-blue-500">
              your.email@example.com
            </a>
            .
          </p>
        </section>
      </main>
    </div>
  );
}
export default About;
