import AboutMeTable from "./AboutMeTable";
import ShootingStar from "./ShootingStar";

function About() {
  return (
    <div
      id="about"
      className=" id='about' min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
    >
      <ShootingStar />
      <main className="p-8">
        <section className=" max-w-4xl mx-auto">
          <AboutMeTable />
        </section>
      </main>
    </div>
  );
}
export default About;
