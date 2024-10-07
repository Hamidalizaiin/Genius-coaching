import { Link, useParams } from "react-router-dom";

const Courses = () => {
    const courseList = [
        {
            id: 1,
            title: "Coaching for Prep1 to 12 Students",
            description: "Foundational coaching to help students in Prep1 to 12 excel in academics and personal development.",
            link: "/courses/coaching"
        },
        {
            id: 2,
            title: "Web Development",
            description: "Learn to build and maintain websites with HTML, CSS, JavaScript, and popular frameworks like React.",
            link: "/courses/webdev"
        },
        {
            id: 3,
            title: "MS Office Suite",
            description: "Master essential tools in the MS Office Suite, including Word, Excel, and PowerPoint, for professional use.",
            link: "/courses/office"
        }
    ];

    return (
        <section className="courses-section py-16  ">
            <div className="container mx-auto px-4 my-12 ">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Courses</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courseList.map(course => (
                        <div key={course.id} className="border-2 bg-white shadow-zinc-400 shadow-lg rounded-lg p-6">
                            <h3 className="text-2xl font-semibold mb-4 text-gray-800">{course.title}</h3>
                            <p className="text-gray-600 mb-6 text-sm sm:text-base">{course.description}</p>
                            <Link to={course.link} className="transition-all ease-linear bg-black text-white py-2 px-4 rounded hover:bg-white hover:text-black border-2 border-black duration-300">
                                Enroll Now
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Courses;
