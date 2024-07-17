import Image from 'next/image'
import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className="mt-20">
      <h1 className="text-5xl font-bold text-center text-white">Skills</h1>
      <div className="grid grid-cols-5 gap-7 items-center mt-9">
        <Image
          src={"/img/python1.png"}
          alt='Python'
          width={150}
          height={100}
        />
        <Image
          src={"/img/flask.png"}
          alt='Flask'
          width={150}
          height={150}
        />
        <Image
          src={"/img/django.png"}
          alt='Django'
          width={150}
          height={150}
        />
        <Image
          src={"/img/java.png"}
          alt='Java'
          width={150}
          height={150}
        />
        <Image
          src={"/img/spring.png"}
          alt='Spring'
          width={150}
          height={150}
        />
        <Image
          src={"/img/html.png"}
          alt='HTML'
          width={150}
          height={150}
        />
        <Image
          src={"/img/css-3.png"}
          alt='CSS'
          width={150}
          height={150}
        />
        <Image
          src={"/img/javascript.png"}
          alt='JavaScript'
          width={150}
          height={150}
        />
        <Image
          src={"/img/typescript.png"}
          alt='TypeScript'
          width={150}
          height={150}
        />
        <Image
          src={"/img/react.png"}
          alt='React'
          width={150}
          height={150}
        />
        <Image
          src={"/img/nextjs.png"}
          alt='NextJS'
          width={150}
          height={150}
        />
        <Image
          src={"/img/bootstrapcss.png"}
          alt='Bootstrap CSS'
          width={150}
          height={150}
        />
        <Image
          src={"/img/mui.png"}
          alt='Material UI'
          width={150}
          height={150}
        />
        <Image
          src={"/img/antd.png"}
          alt='Ant Design'
          width={150}
          height={150}
        />
        <Image
          src={"/img/tailwindcss.png"}
          alt='Tailwind CSS'
          width={150}
          height={150}
        />
        <Image
          src={"/img/sql.png"}
          alt='SQL'
          width={150}
          height={150}
        />
        <Image
          src={"/img/postgresql.png"}
          alt='PostgreSQL'
          width={150}
          height={150}
        />
        <Image
          src={"/img/mysql.png"}
          alt='MySQL'
          width={150}
          height={150}
        />
        <Image
          src={"/img/oracledb.png"}
          alt='Oracle DB'
          width={150}
          height={150}
        />
        <Image
          src={"/img/mongodb.png"}
          alt='Mongo DB'
          width={150}
          height={150}
        />
        <Image
          src={"/img/git.png"}
          alt='Git'
          width={150}
          height={150}
        />
        <Image
          src={"/img/github.png"}
          alt='GitHub'
          width={150}
          height={150}
        />
        <Image
          src={"/img/notion.png"}
          alt='Notion'
          width={150}
          height={150}
        />
        <Image
          src={"/img/figma.png"}
          alt='Figma'
          width={150}
          height={150}
        />
      </div>
    </div>
  )
}

export default Skills