import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Globe } from 'lucide-react';
import profileImage from '../../images/profile.jpeg';
import { useTheme } from '../../contexts/ThemeContext';

export function About() {
  const { currentTheme } = useTheme();
  const skills = [
    { 
      category: 'Frontend', 
      items: ['Angular', 'React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Material UI']
    },
    { 
      category: 'Backend', 
      items: ['.NET Core', 'WebAPI', 'MVC', 'C#', 'MS SQL', 'Entity Framework', 'REST APIs', 'Elastic Search', 'PostgreSQL']
    },
    { 
      category: 'DevOps & Tools', 
      items: ['Git', 'Docker', 'Agile/Scrum', 'JIRA', 'Visual Studio']
    }
  ];

  const courses = [
    {
      name: "Angular 8+",
      url: "https://www.udemy.com/course/the-complete-guide-to-angular-2/"
    },
    {
      name: "React JS",
      url: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
    },
    {
      name: "ASP.NET Core",
      url: "https://www.udemy.com/course/complete-aspnet-core-31-and-entity-framework-development/"
    },
    {
      name: "Node JS",
      url: "https://www.udemy.com/course/the-complete-nodejs-developer-course-2/"
    }
  ];

  const achievements = [
    {
      title: "AZ-204",
      description: "Microsoft Azure Developer Associate"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto py-8 px-4"
    >
      <div className="mb-12 text-center">
        <img
          src={profileImage}
          alt="Profile"
          style={{
            borderColor: currentTheme.colors.accent,
          }}
          className="w-32 h-32 rounded-full mx-auto mb-6 border-4"
        />
        <h1 className="text-4xl font-bold mb-4">🚀 Full Stack Developer 🌐</h1>
        <p className="text-xl mb-6 text-gray-400">
          Angular, React, and .NET Core
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/uttamribadiya16"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/uttam-ribadiya-73156b132/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:uttamribadiya163098@gmail.com"
            className="text-gray-400 hover:text-white"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">💼 Professional Summary</h2>
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            Result-driven Full-Stack Developer with 5+ Years of Experience in
            Angular, React, .NET Core, MVC, WebAPI, and MS SQL.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Proven ability to design, develop, and deliver high-quality web
              applications using cutting-edge technologies.
            </li>
            <li>
              Extensive experience with Angular 8 or React, .NET Core, MVC,
              WebAPI, and MS SQL.
            </li>
            <li>
              Strong understanding of object-oriented programming, design
              patterns, and software development principles.
            </li>
            <li>
              Experience with Agile methodologies and continuous
              integration/continuous delivery (CI/CD).
            </li>
            <li>Excellent problem-solving and analytical skills.</li>
            <li>Ability to work independently and as part of a team.</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">🔧 Technical Summary</h2>
        <div className="space-y-2 text-gray-300">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Built and maintained a distributed microservices architecture.
            </li>
            <li>
              Maintained the architecture and ensured that it met the needs of
              the system.
            </li>
            <li>
              Reviewed code to ensure that it met quality standards and adhered
              to best practices.
            </li>
            <li>
              Mentored junior developers to help them improve their coding
              skills and become more proficient in best practices.
            </li>
            <li>
              Led a team of developers to successfully complete a significant
              software project.
            </li>
            <li>
              Successfully coordinated the efforts of the team and ensured that
              the project met the requirements of the client.
            </li>
            <li>
              Developed a web application that was modular and single-page,
              using Angular and React.
            </li>
            <li>
              Incorporated responsive design principles to ensure that the
              application was accessible on a variety of devices.
            </li>
            <li>
              Restructured legacy code to improve its reliability, scalability,
              and maintainability.
            </li>
            <li>
              Improved the code by removing duplication, making it more modular,
              and simplifying the overall structure.
            </li>
            <li>
              Improved database performance through query optimization and
              indexing.
            </li>
            <li>
              Developed an authentication system using the JWT tokens for secure
              user access.
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">🛠️ Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-[#2d2d2d] rounded-lg p-6">
              <h3
                style={{
                  color: currentTheme.colors.accent,
                }}
                className="text-xl font-semibold mb-4"
              >
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-[#363636] rounded-full text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">💼 Work Experience</h2>

        <div className="bg-[#2d2d2d] rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold">Technical Lead I</h3>
          <p style={{ color: currentTheme.colors.accent }}>Maruti Techlabs</p>
          <p className="text-gray-400 text-sm mb-3">October 2024 - Present</p>
          <p className="text-gray-300 text-sm">
            Led a development team, overseeing end-to-end project execution from
            requirement analysis to delivery. Architected and implemented
            scalable solutions across backend systems, APIs, and microservices.
            Facilitated code reviews, optimized system performance, and ensured
            adherence to best practices. Actively engaged with clients to gather
            business requirements and translate them into technical solutions.
            Mentored team members, fostering skill development and promoting
            collaboration.
          </p>
        </div>

        <div className="bg-[#2d2d2d] rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold">Senior Software Engineer II</h3>
          <p style={{ color: currentTheme.colors.accent }}>Maruti Techlabs</p>
          <p className="text-gray-400 text-sm mb-3">
            January 2023 - September 2024
          </p>
          <p className="text-gray-300 text-sm">
            Led feature development and system optimization in both backend and
            frontend components. Managed complex data migrations, API
            enhancements, and performance tuning. Actively collaborated with
            stakeholders to align technical solutions with business goals.
            Guided junior team members and contributed to architectural
            decisions.
          </p>
        </div>

        <div className="bg-[#2d2d2d] rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold">Senior Software Engineer I</h3>
          <p style={{ color: currentTheme.colors.accent }}>Maruti Techlabs</p>
          <p className="text-gray-400 text-sm mb-3">
            January 2022 - December 2022
          </p>
          <p className="text-gray-300 text-sm">
            Worked across backend development, frontend adjustments, and data
            migrations ensuring consistency and integrity. Conducted end-to-end
            feature analysis considering both technical and business
            perspectives. Collaborated with cross-functional teams to resolve
            challenges. Provided UI mockups to clients and mentored junior
            developers.
          </p>
        </div>

        <div className="bg-[#2d2d2d] rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold">Junior Software Engineer</h3>
          <p style={{ color: currentTheme.colors.accent }}>Maruti Techlabs</p>
          <p className="text-gray-400 text-sm mb-3">
            July 2020 - December 2021
          </p>
          <p className="text-gray-300 text-sm">
            Focused on backend development and frontend enhancements. Designed
            REST APIs, RabbitMQ events, and client UI mockups. Documented
            features for team clarity and client reference. Emphasized business
            requirement understanding and implemented asynchronous processing
            using message brokers to improve system efficiency.
          </p>
        </div>

        <div className="bg-[#2d2d2d] rounded-lg p-6">
          <h3 className="text-xl font-semibold">Software Engineer Intern</h3>
          <p style={{ color: currentTheme.colors.accent }}>Maruti Techlabs</p>
          <p className="text-gray-400 text-sm mb-3">
            December 2019 - June 2020
          </p>
          <p className="text-gray-300 text-sm">
            Gained hands-on experience with .NET Core, JavaScript, jQuery,
            asynchronous programming, Entity Framework Core, and REST APIs.
            Contributed to API development and integration in an Agile
            environment. Supported event-driven architecture using RabbitMQ and
            performed small-scale data migrations.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">🎓 Education</h2>
        <div className="bg-[#2d2d2d] rounded-lg p-6">
          <h3 className="text-xl font-semibold">
            Bachelor of Engineering in Computer Engineering
          </h3>
          <p
            style={{
              color: currentTheme.colors.accent,
            }}
          >
            Marwadi University
          </p>
          <p className="text-gray-400">2016 - 2020</p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">
          📚 Courses and Certificates
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {courses.map((course, index) => (
            <a
              key={index}
              href={course.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2d2d2d] rounded-lg p-6 hover:bg-[#363636] transition-colors"
            >
              <h3
                style={{
                  color: currentTheme.colors.accent,
                }}
                className="text-xl font-semibold"
              >
                {course.name}
              </h3>
              <p className="text-gray-400 text-sm mt-2">View Certificate →</p>
            </a>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">🏆 Achievements</h2>
        <div className="space-y-4">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-[#2d2d2d] rounded-lg p-6">
              <h3
                style={{
                  color: currentTheme.colors.accent,
                }}
                className="text-xl font-semibold"
              >
                {achievement.title}
              </h3>
              <p className="text-gray-300 mt-2">{achievement.description}</p>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}