import React from 'react'

const Projects = () => {  
  return (
    <div id='projects' className="mt-20 text-center text-white">
        <h1 className="text-5xl font-bold">Projects</h1>
        <div className="grid grid-cols-4 gap-5 mt-5 p-5">
            <div className="flex flex-col justify-center items-center bg-white text-slate-600 p-2 rounded-xl shadow-xl gap-2">
                <p className="font-bold">Full Stack Todo App</p>
                <p className="text-start">I developed a simple full stack todo app with Spring Boot + React. This application basically helps users to note their daily tasks.</p>
                <hr />
                <div className="flex gap-7">
                    <a className="text-red-800" href="https://github.com/barisyenigun07/Full-Stack-Todo-App" target="_blank">Project Link</a>
                    <a className="text-red-800" href="https://www.youtube.com/watch?v=VHflMmd1BbQ" target="_blank">Demo Video Link</a>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center bg-white text-slate-600 p-2 rounded-xl shadow-xl gap-2">
                <p className="font-bold">Flask + Bootstrap Blog App</p>
                <p className="text-start">I developed a simple todo app with Flask + Bootstrap. In this application, users can publish their articles.</p>
                <hr />
                <div className="flex gap-7">
                    <a className="text-red-800" href="https://github.com/barisyenigun07/Flask-Blog-App" target="_blank">Project Link</a>
                    <a className="text-red-800" href="https://barisyenigun.pythonanywhere.com" target="_blank">App Link</a>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center bg-white text-slate-600 p-2 rounded-xl shadow-xl gap-2">
                <p className="font-bold">IYTEMLAK</p>
                <p className="text-start">I developed an advertisement app for IZTECH students about their housing and belongings problems with Spring Boot + React.</p>
                <hr />
                <div className="flex gap-7">
                    <a className="text-red-800" href="https://github.com/barisyenigun07/Undergraduate-Project" target="_blank">Project Link</a>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center bg-white text-slate-600 p-2 rounded-xl shadow-xl gap-2">
                <p className="font-bold">Jotter</p>
                <p className="text-start">I developed a blog app with Spring Boot + React. In this application, users can create their blog content via article, video or podcast.</p>
                <hr />
                <div className="flex gap-7">
                    <a className="text-red-800" href="https://github.com/barisyenigun07/BlogProject" target="_blank">Project Link</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects