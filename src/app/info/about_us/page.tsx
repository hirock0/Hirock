
import Style from './about.module.css'
import Descriptions from './about_us_descriptions/Descriptions'
import { Bitter } from 'next/font/google'
import AllPerson from './allPerson/AllPerson'
const bitter = Bitter({
  weight:["400","400"],
  subsets:["latin"]
})

const seeMoreBox: any = {
  WebkitLineClamp: "2",
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  display: "-webkit-box",
};

const About_Us = () => {

  // const allProjects = props.item;
  // const [seeMore, setSeemore] = useState(false);
  // const [seemoreBtn, setSeeMoreBtn] = useState(false);
  // const ref: any = useRef(null);
  // const onSeeBtn = () => {
  //   if (ref.current) {
  //     setSeeMoreBtn(ref.current.scrollHeight !== ref.current.clientHeight);
  //   }
  // };

  // useEffect(() => {
  //   onSeeBtn();
  // }, [])


  return (
    <main id={Style.main} className= {`${bitter.className} `}>
        <section className=''>
          {/* top-section */}
            <div id={Style.topSection} className=" pt-20  pr-10 pl-10 ">
                 <div className="">
                   <h1 className=' font-semibold max-sm:text-4xl text-center pt-10 text-6xl'>
                     Welcome to Introduce OurSelf
                    </h1>
                </div>
                <div className={`${Style.introcard_1} mt-5 flex justify-end `}>
                    <div  className=" w-96 lg:w-96 max-sm:w-full">
                      <h1 className=' text-center mt-2 text-xl'>
                       Frontend
                      </h1>
                      <p className=' sm:text-sm md:text-base'>
                        A frontend developer is a professional who specializes in creating the visual and interactive elements of a website or web application. They use languages like HTML, CSS, and JavaScript to build the user interface (UI) that users see and interact with directly. Frontend developers ensure that the design is responsive, accessible, and provides a seamless user experience across different devices and browsers. They often collaborate with designers, backend developers, and other team members to integrate visual designs with functional aspects, optimize performance, and enhance the overall usability of the digital product.
                      </p>
                    </div>
                </div>
                <div className={`${Style.introcard_2} mt-5 flex `}>
                    <div className="  w-96 lg:w-96  max-sm:w-full">
                        <h1 className=' text-center mt-2 text-xl'>
                          Frontend
                        </h1>
                        <p className=' sm:text-sm md:text-base'>
                         A backend developer is a professional responsible for building and maintaining the server-side logic, databases, and application programming interfaces (APIs) that power the functionality of websites and web applications. They use server-side languages like Python, Java, Ruby, and PHP to develop the core computational logic and integration points that process user requests, manage data storage, and ensure smooth, efficient communication between the frontend and backend systems. Backend developers focus on optimizing performance, ensuring security, and enabling scalability of applications, often collaborating closely with frontend developers and other team members to deliver a cohesive, high-performing digital product.
                        </p>
                    </div>
                </div>
            </div>
          {/* top-section */}
        </section>
        <section className='pr-5 pl-5'>
        {/* TEXT-1-START */}
            <div id="commonAnimation" className=" flex items-center justify-center mb-5 mt-5 w-full">
              <div className=" p-5 rounded-md  max-sm:text-sm sm:w-4/5 md:w-3/5">
                <h1  className=' text-center text-xl font-semibold underline underline-offset-4'>About Us</h1>
                    <Descriptions/>
              </div>
            </div>
          {/* TEXT-1-END */}

          {/* Persons_Section_start */}
              <div className=" mb-5">
                  <h1 className=' text-2xl pb-5 underline underline-offset-4 text-center'>Our Team</h1>
                  <AllPerson/>
          </div>

          {/* Persons_Section_end*/}

          </section>

    </main>
  )
}

export default About_Us