import Image from "next/image";
import './services.css';

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Web development is the process of building and maintaining websites, combining design, coding, and functionality to create seamless user experiences. It is divided into front-end and back-end development: front-end focuses on the visual and interactive aspects using HTML, CSS, and JavaScript, while back-end handles server-side operations like databases, APIs, and application logic. Responsive design ensures websites adapt to various devices, providing optimal viewing on desktops, tablets, and smartphones. Modern web development relies on frameworks like React, Angular, and Node.js, along with tools like Git, to streamline workflows and enhance collaboration. This dynamic field continues to evolve, integrating new technologies to deliver faster, more efficient, and user-centric web solutions.",
      image: "/services/web-development.png",
    },
    {
      title: "Mobile App Development",
      description: "Mobile application development involves creating software applications for smartphones and tablets, focusing on platforms like iOS and Android. Developers use programming languages such as Swift for iOS and Kotlin for Android, along with frameworks like Flutter and React Native for cross-platform solutions. The process includes designing user-friendly interfaces, ensuring smooth performance, and integrating features like push notifications and APIs. Testing and debugging are crucial to ensure apps are bug-free and provide a seamless user experience. With the growing demand for mobile solutions, this field continues to evolve, incorporating advanced technologies like AI, AR, and IoT to enhance functionality and engagement.",
      image: "/services/mobile-app-development.png",
    },
    {
      title: "UX Design",
      description: "UX design focuses on creating meaningful and user-friendly experiences by understanding user needs, behaviors, and pain points. It involves designing intuitive interfaces, ensuring seamless navigation, and enhancing usability to improve user satisfaction. UX designers use tools like wireframes, prototypes, and user testing to refine their designs and validate ideas. The goal is to balance aesthetics with functionality, making products both visually appealing and easy to use. By prioritizing user-centric approaches, UX design plays a crucial role in building engaging and effective digital experiences.",
      image: "/services/ux-design.png",
    },
    {
      title: "UI Design",
      description: "UI design focuses on creating visually appealing and interactive interfaces that enhance user engagement and usability. It involves designing elements like buttons, icons, typography, and color schemes to ensure a cohesive and aesthetically pleasing layout. UI designers use tools like Figma, Sketch, and Adobe XD to craft high-fidelity prototypes and mockups. The goal is to align the interface with the brand's identity while ensuring it is intuitive and easy to navigate. By combining creativity with functionality, UI design plays a key role in delivering seamless and enjoyable user experiences.",
      image: "/services/ui-design.png",
    },
    {
      title: "Testing and QA",
      description: "Testing and QA (Quality Assurance) ensure that software products meet the highest standards of functionality, performance, and reliability. It involves identifying bugs, errors, and inconsistencies through systematic testing processes like manual and automated testing. QA teams use tools like Selenium, JIRA, and TestRail to track issues and ensure smooth workflows. The goal is to deliver a polished, user-friendly product that aligns with client requirements and user expectations. By prioritizing thorough testing, QA plays a critical role in maintaining the quality and credibility of software applications.",
      image: "/services/testing-qa.png",
    },
    {
      title: "Software Development",
      description: "Software development is the process of designing, coding, testing, and maintaining applications to meet specific user or business needs. It involves using programming languages like Python, Java, or JavaScript, along with frameworks and tools to build efficient and scalable solutions. Developers follow methodologies like Agile or DevOps to streamline workflows and ensure collaboration. The goal is to create functional, user-friendly, and secure software that solves real-world problems. This ever-evolving field continues to innovate, integrating technologies like AI, cloud computing, and blockchain to deliver cutting-edge solutions.",
      image: "/services/software-development.png",
    },
    {
      title: "IT Outsourcing",
      description: "IT outsourcing involves hiring external service providers to handle technology-related tasks, such as software development, infrastructure management, or technical support. It allows businesses to access specialized skills, reduce costs, and focus on core operations while leveraging global expertise. Common outsourcing services include cloud computing, cybersecurity, and application maintenance. Effective communication and clear contracts are essential to ensure alignment with business goals and quality standards. By partnering with reliable vendors, IT outsourcing enables organizations to scale efficiently and stay competitive in a rapidly evolving digital landscape.",
      image: "/services/it-outsourcing.png",
    },
    {
      title: "Digital Transformation",
      description: "Digital transformation is the integration of digital technologies into all aspects of a business, fundamentally changing how it operates and delivers value to customers. It involves adopting tools like cloud computing, AI, and data analytics to streamline processes, enhance efficiency, and drive innovation. Businesses undergo this shift to stay competitive, improve customer experiences, and adapt to evolving market demands. Successful digital transformation requires a clear strategy, strong leadership, and a culture of continuous learning. By embracing this change, organizations can unlock new opportunities, optimize operations, and future-proof their growth in a technology-driven world.",
      image: "/services/digital-transformation.png",
    },
    {
      title: "Managed IT Services",
      description: "Managed IT services involve outsourcing the management and maintenance of a company's IT infrastructure to a specialized provider. These services include network monitoring, cybersecurity, data backup, cloud management, and technical support, ensuring smooth and secure operations. By partnering with a managed service provider (MSP), businesses can reduce downtime, improve efficiency, and focus on core activities while leveraging expert IT resources. Managed IT services are typically offered through subscription-based models, providing predictable costs and scalability. This approach helps organizations stay competitive, enhance productivity, and adapt to evolving technology trends without the need for an in-house IT team.",
      image: "/services/managed-it-services.png",
    },
    {
      title: "Application Services",
      description: "Application services are a set of software solutions and services that help organizations build, deploy, operate, and manage applications throughout their lifecycle. These services can range from custom application development and integration to application maintenance, modernization, and cloud migration.",
      image: "/services/application-services.png",
    },
    {
      title: "Data Analytics",
      description: "Data analytics is the process of examining raw data to draw useful conclusions. It involves inspecting, cleaning, transforming, and modeling data to discover meaningful patterns, trends, and insights that can inform business decisions and solve problems.",
      image: "/services/data-analytics.png",
    },
    {
      title: "Staffing Solution",
      description: "Staffing solutions are services that help businesses find, recruit, and hire qualified employees. These solutions can range from temporary staffing for short-term projects to permanent placement for long-term needs.",
      image: "/services/staffing-solution.png",
    },
    {
      title: "SaaS Development",
      description: "SaaS development is the process of creating and maintaining software applications that are delivered over the Internet on a subscription basis. SaaS applications are typically hosted in the cloud, and users can access them from anywhere with an internet connection.",
      image: "/services/saas-development.png",
    },
    {
      title: "IT Assessment",
      description: "IT assessment is a systematic process of evaluating an organization's IT infrastructure, systems, processes, and security posture to identify strengths, weaknesses, and areas for improvement. It helps organizations understand the current state of their IT environment and provides a roadmap for future investments and strategic planning.",
      image: "/services/it-assessment.png",
    },
  ]

  return (
    <div className="services-bg relative bg-gradient-to-b from-gray-800 to-gray-900">
      <main className="pt-4 min-h-screen">
        <section className="py-16 px-8 max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Our Services
          </h1>
          <p className="text-gray-300 text-center mb-12 text-lg max-w-3xl mx-auto">
            Comprehensive technology solutions to empower your business in the digital era.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group relative bg-gray-800 rounded-2xl p-6 border border-gray-700 transition-all duration-300 hover:bg-gray-700 hover:shadow-lg"
              >
                {/* Content */}
                <div className="relative">
                  <div className="w-full h-40 flex items-center justify-center mb-6">
                    <Image src={service.image} alt={service.title} width={256} height={144} className="rounded-lg object-cover" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-cyan-300 group-hover:text-cyan-200 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-200 group-hover:text-gray-100 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
} 