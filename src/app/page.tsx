"use client";
import Image from 'next/image';
import styles from './page.module.css';
import { Inter, Quicksand, Poppins, Space_Grotesk } from "next/font/google";
import { FaTwitter, FaInstagram, FaMediumM } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io5";
import { SiHashnode } from "react-icons/si";
import Link from 'next/link';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ["latin"] });
const quicksand = Quicksand({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["200", "400", "500", "700", "600"],
  subsets: ["latin"],
});
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

const industries = [
  "Technology",
  "Education",
  "Healthcare",
  "E-commerce",
  "Artificial Intelligence",
  "Wind Energy",
]

export default function Home() {

  const [industry, setIndustry] = useState(industries[0]);  

  useEffect(() => {
    const interval = setInterval(() => {
      setIndustry(industries[Math.floor(Math.random() * industries.length)]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        Kanish Bodhwani
      </div>
      <div className={styles.hey_card}>
        <h1>Hey there 👀</h1>
        <p style={poppins.style}> I&apos;m Kanish Bodhwani, a specialist in coding for both mobile and web applications, encompassing comprehensive design from the ground up. </p>
      </div>
      <div className={styles.blog_card}>
        <Image
          src="/images/think.jpg"
          alt="think"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className={styles.inside_content}>
          <p className={styles.article_block}>Article</p>
          <h2>
            <Link href={"https://kanishbodhwani.medium.com/think-observe-and-grow-prosper-6454a180ec56"}> 
              Think, Observe and Grow Prosper
            </Link>
          </h2>
        </div>
      </div>
      <div className={styles.me_card}>
        <Image
          src="/images/kanish.jpeg"
          alt="think"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className={styles.inside_content2}>
          <p style={poppins.style}> KANISH BODHWANI </p>
        </div>
      </div>
      <div className={styles.product_card}>
        <Image
          src="/images/ai.jpg"
          alt="think"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div>
          <p className={styles.article_block2}>Product</p>
          <h2>Empowering business communication and growth</h2>
          <p>
            An AI-powered platform that helps business people to excell in 
            saving time by providing features like email automation, AI powered bots and 
            many more. 
          </p>
          <Link href="https://synapse-ai.vercel.app/">
            <button className={styles.visit_site_button}>Visit Site</button>
          </Link>
        </div>
      </div>
      <div className={styles.social_card}>
        <Link href="mailto:bodhwanikanish@gmail.com">
          <MdEmail size={"2.3rem"} color="rgb(225, 225, 225)" style={{cursor: "pointer"}}/>
        </Link>
        <Link href="https://twitter.com/BodhwaniKanish">
          <FaTwitter size={"2rem"} color="rgb(225, 225, 225)" style={{cursor: "pointer"}}/>
        </Link>
        <Link href="https://www.linkedin.com/in/kanish-bodhwani/">
          <IoLogoLinkedin size={"2rem"} color="rgb(225, 225, 225)" style={{cursor: "pointer"}}/>
        </Link>
        <Link href="https://www.instagram.com/kanish_bodhwani/">
          <FaInstagram size={"2rem"} color="rgb(225, 225, 225)" style={{cursor: "pointer"}}/>
        </Link>
        <Link href="https://kanishbodhwani.medium.com/"> 
          <FaMediumM size={"2rem"} color="rgb(225, 225, 225)" style={{cursor: "pointer"}}/>
        </Link>
        <Link href="https://kanishbodhwani.hashnode.dev/">
          <SiHashnode size={"2rem"} color="rgb(225, 225, 225)" style={{cursor: "pointer"}}/>
        </Link>
      </div>
      <div className={styles.community_work}>
        <p>Industry Experience</p>
        <h2>
          Industries I&apos;ve worked with
        </h2>
        <div className={styles.industries}>
          <p style={poppins.style}> {industry} </p>
        </div>
      </div>
      <div className={styles.product_card2}>
        <Image 
          src="/images/snapbase.png"
          alt="snapbase"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div>
          <p className={styles.article_block2}>Product</p>
          <h2>Snapbase</h2>
          <p>
            Welcome to Snapbase, an innovative and anonymous social media platform designed exclusively for Generation Z. Our app offers a dynamic array of features, including groups, personalized feeds, and a secure space for sharing thoughts and ideas without inhibition.
          </p>
          <Link href="https://snapbase.app/">
            <button className={styles.visit_site_button}>Visit Site</button>
          </Link>
        </div>
        {/* <div className={styles.tablet}>
          <Image
            src="/images/Ipad.png"
            alt="snapbase"
            // layout='fill'
            // objectFit='cover'   
            fill
            priority
            sizes='100vw'
          />
        </div>
        <div className={styles.mobile}>
          <Image
            src="/images/iPhone.png"
            alt="main"
            // layout='fill'
            // objectFit='contain'
            fill
            priority
            sizes='100vw'
          />
        </div> */}
        
      </div>
      <div className={styles.me_card2}>
        <div className={styles.blob}></div>
        <div>
          <h2>Behind the blob</h2>
          <p>
            I&apos;m a 21-year-old developer based in India, passionate about creating solutions 
            that enhance people&apos;s daily lives. As a tech enthusiast, I enjoy exploring and 
            adopting new technologies. Currently pursuing my bachelor&apos;s in Computer Science, 
            I&apos;m a self-taught developer who thrives on continuous learning from online resources. 
            A quick learner and a dedicated team player, I find joy in collaborating with diverse individuals.
            <br />
            <br />
            Over the past few years, I have worked with various startups and
            communities and helped them in achiving their goals. I&apos;ve built many
            products that solves real world problems. I am involved in many open source communities like 
            Google Developer Student Clubs, Developer Student Clubs, Rocket chat, Alias, FOSS Overflow etc.
            <br />
            <br />
            I&apos;m currently working on a product called Snapbase. It&apos;s an anonymous social media platform
            for college students. It&apos;s a platform where students can share their thoughts and ideas
            without any fear. It&apos;s a platform where students can connect with other students and share
            their experiences with them. It&apos;s a platform where students can help each other in their
            day to day life. It&apos;s a platform where students can grow together.
            <br />
            <br />
            I&apos;ve also worked on a product called Synapse. It&apos;s an AI powered platform that helps
            business people to excell in saving time by providing features like email automation, AI powered bots and
            many more. I&apos;m also a writer and love to write about my experiences and thoughts. I&apos;ve written many articles
            on Medium and Hashnode. I&apos;m also a speaker and love to speak about my experiences and thoughts.
          </p>
        </div>
      </div>
      <Link href="https://pop-music.netlify.app/" className={styles.project_card}>
        <Image
          src="/images/popmusic.webp"
          alt="think"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className={styles.inside_content}>
          <p>Project</p>
          <h2 style={poppins.style}>POP MUSIC</h2>
          <p>
            A music dj kinda app with which you can make your own music beats.
          </p>
        </div>
      </Link>
      <Link href="https://slack-clone-49a96.web.app/" className={styles.project_card}>
        <Image
          src="/images/messaging.png"
          alt="messaging"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className={styles.inside_content}>
          <p>Project</p>
          <h2 style={poppins.style}>SLACK APP</h2>
          <p>
            A messaging app that helps you to connect with your friends and family 
            and share your thoughts with them.
          </p>
        </div>
      </Link>
      <Link href="https://falcons-80338.web.app/" className={styles.project_card}>
        <Image
          src="/images/falcons.png"
          alt="messaging"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className={styles.inside_content}>
          <p>Design Project</p>
          <h2 style={poppins.style}>FALCONS</h2>
          <p>
            A website for college community called falcons started by me and my friend to 
            help students in learning, growing and connecting with each other.
          </p>
        </div>
      </Link>
      <Link href="https://delightful-strudel-bccd8d.netlify.app/" className={styles.project_card2}>
        <Image
          src="/images/dashboard.png"
          alt="messaging"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className={styles.inside_content}>
          <p>Design Project</p>
          <h2 style={poppins.style}>DASHBOARD</h2>
          <p>
            A website for college community called falcons started by me and my friend to 
            help students in learning, growing and connecting with each other.
          </p>
        </div>
      </Link>
      <Link href="mailto:bodhwanikanish@gmail.com" className={styles.project_card}>
        <Image
          src="/images/falcons.png"
          alt="messaging"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className={styles.inside_content}>
          <h2 style={poppins.style}>Contact me</h2>
        </div>
      </Link>
    </main>
  )
}
