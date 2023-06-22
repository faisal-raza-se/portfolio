import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        {/* Child 1 */}
        <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full">
            {/* Child 1 : 1 */}
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
            </div>
            {/* Child 1 : 2 */}
            <p className=" text-lg">
              As a Full Stack Developer, I am proficient in front-end technologies such as HTML, CSS, and 
              JavaScript. I have experience with popular front-end frameworks and libraries like React, 
              Angular, or Vue.js, which enable me to create dynamic and interactive user interfaces. I am 
              well-versed in responsive design principles to ensure optimal user experiences across 
              different devices and screen sizes.
            </p>
            <p className=" text-lg mt-2">
              On the back-end side, I have a strong command of server-side programming languages like 
              Node.js, Python, or Ruby, along with frameworks such as Express, Django, or Ruby on Rails. 
              I have expertise in working with databases, both relational (such as MySQL or PostgreSQL) 
              and NoSQL (such as MongoDB or Firebase), and can design and implement efficient data models 
              and database interactions.
            </p>

        </div>
    </div>
  )
}

export default About