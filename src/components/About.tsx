import AboutMeTable from "./AboutMeTable";
import ShootingStar from "./ShootingStar";

function About() {
  return (
    <div
      id="about"
      className=" id='about' min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
    >
      <ShootingStar />
      <div className=" p-4 shadow-md flex justify-between items-center bg-gray-100 dark:bg-gray-800"></div>
      <main className="p-8">
        <section className=" max-w-4xl mx-auto">
          <AboutMeTable />
        </section>
      </main>
    </div>
  );
}
export default About;
