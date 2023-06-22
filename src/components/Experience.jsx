import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import nextjs from '../assets/nextjs.png'
import tailwind from '../assets/tailwind.png'
import php from '../assets/php.png'
import symfony from '../assets/symfony.png'
import python from '../assets/python.png'
import django from '../assets/django.png'
import sql from '../assets/sql.png'
import mysql from '../assets/mysql.png'
import postgres from '../assets/postgres.png'
import mongo from '../assets/mongo.png'

const Experience = () => {

    const tech = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },{
            id: 3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },{
            id: 4,
            src: reactImage,
            title: 'React',
            style: 'shadow-blue-600'
        },{
            id: 5,
            src: nextjs,
            title: 'NextJs',
            style: 'shadow-white'
        },{
            id: 6,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-blue-500'
        },{
            id: 7,
            src: php,
            title: 'PHP',
            style: 'shadow-blue-500'
        },{
            id: 8,
            src: symfony,
            title: 'Symfony',
            style: 'shadow-green-500'
        },{
            id: 9,
            src: python,
            title: 'Python',
            style: 'shadow-yellow-500'
        },{
            id: 10,
            src: django,
            title: 'Django',
            style: 'shadow-green-500'
        },{
            id: 11,
            src: sql,
            title: 'SQL Server',
            style: 'shadow-red-500'
        },{
            id: 12,
            src: mysql,
            title: 'MySql',
            style: 'shadow-blue-500'
        },{
            id: 13,
            src: postgres,
            title: 'Postgres',
            style: 'shadow-blue-500'
        },{
            id: 14,
            src: mongo,
            title: 'Mongo DB',
            style: 'shadow-green-500'
        },
    ]
    

  return (
    <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full h-screen text-white">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center h-full">
            <div>
                <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Experience</p>
                <p className="py-6">These are the technologies I've worked with</p>
            </div>
            <div className="w-full grid grid-cols-2 md:grid-col-5 sm:grid-cols-5 gap-4 text-center py-8 px-5 sm:px-0">
                {
                    tech.map((item) => (
                        <div key={item.id} className={`shadow-md w-15 sm:w-full hover:scale-105 duration-500 py-2 rounded-lg ${item.style}`}>
                            <img src={item.src} alt="" className="w-6 md:w-20 mx-auto"/>
                            <p className="mt-4">{item.title}</p>
                        </div>
                    ))
                    
                }
            </div>
        </div>
    </div>
  )
}

export default Experience