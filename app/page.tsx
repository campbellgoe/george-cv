"use client";
import { MatterCanvas } from "@/components/matter/canvas";
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import AutoLinkText from "@/lib/AutoLinkText";
// import { Separator } from "@/components/ui/separator"
import { Mail, Phone, ExternalLink, MapPin, Calendar, Building } from "lucide-react"
import Image from "next/image"

// Import images
const MasslessLogo = "/images/massless-ltd-website-logo.webp"
const ZengentiLogo = "/images/logos/zengenti.png"
const DrpgLogo = "/images/logos/DRPG_40_AGENCY.svg"
const EKCSLogo = "/images/logos/ekcs.png"
// const CodeyImage = "/images/codey-bitey-bugy.webp"

const BreakItImage = "/images/breakit-webgl.png"

export default function CVWebsite() {
  // const [isPrint, setIsPrint] = useState(false)
  // console.log('isPrint', isPrint)
  // useEffect(() => {
  //   if(typeof window != 'undefined'){
  //   setIsPrint(window?.matchMedia('print').matches)
  //   }
  // }, [])
  const FE = "Front-End"
  const FS = "Full-Stack"
  const BE = "Back-End"
  const FW = "Frameworks + Libraries"
  const LANG = "Languages"
  const CLI = "CLIs"
  const OS = "Operating Systems"
  const SS = "Soft Skills"
  const AT = "Automated Testing"
  const skillsListItems = [
    "HTML, CSS, JavaScript, TypeScript, Rust, Python, GraphQL, SQL, Pug, EJS",
"Windows, Linux, Ubuntu, Mint, MacOS ",
"React.js, Next.js, React Native, Three.js, react-three-fiber",
"Node.js, Express.js, Deno, Bun, Vite, MongoDB, Mongoose, DocumentDB, DynamoDB, Docker, Github Actions, CI/CD",
"UI/UX Design",
"Tailwindcss, (framer) motion, WebAPIs, Accessibility, Bevy",
"Websockets, Socket.IO",
"Cyber Security",
"AWS (A wide range of experience with these services), Azure (only with TTS)",
"Bash scripting, Terminal, Powershell, CLIs, Command Prompt  ",
"Mocha, Jest, Bun, React Testing Framework, Cypress.js, Puppeteer, Playwright",
"Locize, i18n + l10n",
"NGINX",
"Spanish",
"Perseverance, Autonomy, Friendliness, Enthusiasm, Communication, Leadership, Empathy, Directness",

  ]
  // const SKILL_LABELS = [FE, FS, BE, SS, AT]
  const skills = ([
    [
      FW,
      "React.js"
    ],
    // {label: FE,
    //   value: "React.js"},
    [
      FW, "Three.js"
    ],
    [
      FW,
      "react-three-fiber"
    ],
    [BE, "Node.js"],
    [BE, "Deno"],
    [FW, "Next.js"],
    [LANG, "HTML"],
    [LANG, "CSS"],
    [LANG, "JavaScript"],
    [LANG, "TypeScript"],
    [LANG, "Rust"],
    [LANG, "Python"],
    [FE, "Tailwindcss"],
    [FE, "(framer) motion"],
    [FE, "WebAPIs"],
    [FE, "Accessibility"],
    [FS, "Cyber Security"],
    [BE, "MongoDB"],
    [BE, "Mongoose ORM"],
    [BE, "DocumentDB"],
    [FS, "Amplify"],
    [BE, "DynamoDB"],
    [FE, "Bevy"],
    [FE, "UI/UX Design"],
    [CLI, "Bash scripting"],
    [CLI, "Terminal"],
    [CLI, "Powershell"],
    [CLI, "CLIs"],
    [CLI, "Command Prompt"],
    [OS, "MS Windows"],
    [OS, "Linux ubuntu/mint"],
    [OS, "MacOS"],
    [FS, "AWS"],
    [BE, "DevOps"],
    [BE, "Docker"],
    [BE, "Github Actions"],
    [BE, "CI/CD"],
    [AT, "Mocha"],
    [AT, "Jest"],
    [AT, "Bun"],
    [AT, "Cypress.js",],
    [AT, "Puppeteer"],
    [AT, "Playwright"],
    [SS, "Perseverance"],
    [SS, "Autonomy"],
    [SS, "Friendliness"],
    [SS, "Enthusiasm"],
    [SS, "Communication"],
    [SS, "Leadership"],
    [SS, "Empathy"]
  ]);

  const colours: { [key: string]: string } = {
    // red
    [FE]: "bg-stone-100",

    // orange
    [FS]: "bg-stone-100",
    // yellow
    [BE]: "bg-stone-100",
    // green
    [SS]: "bg-stone-100",
    //blue
    [AT]: "bg-stone-100"
  }

  const groupedSkills = skills.reduce((acc, [Key, Value]) => {
    return {
      ...acc,
      [Key]: {
        label: Key,
        values: [...(acc?.[Key]?.values || []), Value],
        colour: colours[Key]
      }
    }
  }, {} as { [key: string]: { values: string[]; label: string; colour: string } })
  // Map.groupBy(skills, ([groupLabel, value]) => {
  //   return SKILL_LABELS.includes(groupLabel) ? {key: groupLabel} : {key: value}
  // })
  // console.log('groupedSkills:', groupedSkills)
  const styles = {
    paragraphA: "text-gray-700 leading-relaxed flex-grow",
    paragraphB: "text-gray-850 leading-relaxed flex-grow"
  }
  const masslessExperience = [`Managed and communicated professionally with 30+ start-ups and individual clients to deliver bespoke websites, web-apps and mobile apps (2016-2026).`,
`Architected and implemented cloud synchronization for a recent client using AWS Amplify (backend) and DynamoDB (database) with a React + Context API codebase. Integrated generative AI for automatic cyber security threat modeling utilising Vercel AI SDK - Threat Weaver (2025/26).`,
`Sole engineer from conception to launch of a bespoke 3D browser game containing an interactive, collidable environment - communicated with stakeholders and 3D digital artists - Stamp Quest Offshore (2024/25).`,
`Built campbellgoe/header_checker on GitHub - an open source Rust CLI application for determining missing or insecure HTTP headers as a cyber security tool (2024).`,
`Solo engineer for initial development of an award-winning portfolio website for Kirk Whayman, which secured 5+ SOTD (Site of the Day) awards on awwwards.com (2020).`,
`Worked closely with a client to build an offline capable Mind Mapping web-app in vanilla HTML, ES2015 JavaScript, and CSS, utilising DOM and 2d canvas. This included saving and loading of JSON.`]
const drpgExp = [
  `Optimized a performance-critical 3D web application (Winter Wonderland), increasing smartphone FPS from 2-3 to 30-60, and implemented a performant falling snow effect.`,
`Developed the Jaguar C-Type customizer tool, which directly resulted in customer leads for Jaguar.`,
`Drove development on a 3D virtual events and conferencing web-app, implementing video projections onto 3D surfaces for an immersive experience.`,
`Communicated professionally with colleagues and engaged in daily standups, sprint retrospectives, and monthly meetings as well as virtual events during the pandemic.`,
]
const zengentiExp = [
  `Worked in a cross-functional team (engineers and UI/UX designers) to deliver 6+ websites for UK councils and universities.`,
`Ensured UI accessibility and WCAG compliance for screen-readers and color-blindness considerations.`,
`Informally mentored a junior developer, proactively resolving technical challenges to increase their independence.`

]
const ekcsExp = [
  `Worked in-house mainly in React & Node.js to develop a media pipeline SaaS application.`,
`Implemented a modular i18n (internationalization) solution into the React codebase, utilizing Locize for translator workflow.`,
`Wrote extensive Mocha tests to ensure code quality and stability.`,
`Gained experience working in a small team, utilizing JIRA and Git for daily development.`,
]
  const workExperience = [
    {
      title: "Director + Software Engineer",
      company: "MASSLESS LTD.",
      period: "Freelancing since 2016. Founded MASSLESS LTD in May 2021.",
      location: "Remote, UK",
      description:
        <>
            <AutoLinkText text={masslessExperience} linkMap={{
              "Threat Weaver": "https://threatweaver.co.uk",
              "Stamp Quest Offshore": "https://stamp-quest-offshore.vercel.app",
              "campbellgoe/header_checker": "https://github.com/campbellgoe/header_checker",
              "Kirk Whayman": "https://kirkwhayman.com"

            }}/>

        </>,
      logos: [{
        logo: MasslessLogo,
        logoAlt: "MASSLESS LTD",
        companyLink: "https://www.massless.ltd/",
        logoStyle: "max-w-full h-auto",
        width: 939 / 3,
        height: 119 / 3,
      },
      {
        logo: BreakItImage,
        logoAlt: "Break the box",
        companyLink: "https://kirkwhayman.com",
        logoStyle: "max-w-full h-auto",
        width: 250,
        height: 250
      }]
    },
    {
      title: "Software Engineer",
      company: "DRPG",
      period: "October 2020 to August 2022 (1 year 11 months)",
      location: "Remote",
      description: <>
         <AutoLinkText text={drpgExp} linkMap={{
            }}/>
      </>,
      logos: [{
        logo: DrpgLogo,
        logoAlt: "DRPG Logo",
        companyLink: "https://www.drpgroup.com/",
        logoStyle: "w-full filter invert", // Apply invert filter
        width: 974 / 3,
        height: 188 / 3,
      }]
    },
    {
      title: "Frontend Developer",
      company: "Zengenti Ltd.",
      period: "April 2019 - April 2020 (1 year)",
      location: "In house - Ludlow countryside",
      description: <>
        <AutoLinkText text={zengentiExp} linkMap={{}}/>
      </>,
      logos: [{
        logo: ZengentiLogo,
        logoAlt: "Zengenti Ltd. Logo",
        companyLink: "https://zengenti.com/",
        logoStyle: "filter invert", // Apply invert filter
        width: 175 * 1.5,
        height: 55 * 1.5
      }]
    },
    {
      title: "Programmer",
      company: "Express KCS",
      period: "June 2018 - April 2019 (11 months)",
      location: "In house - Milton Keynes countryside",
      description: <>
       <AutoLinkText text={ekcsExp} linkMap={{}}/>
      </>,
      logos: [{
        logo: EKCSLogo,
        logoAlt: "Express KCS Logo",
        companyLink: "https://www.ekcs.co/",
        logoStyle: "",
        width: 250,
        height: 250
      }]
    },
  ]

  const education = [
    {
      institution: "Herefordshire, Ludlow and North Shropshire College (HLNSC), UK",
      qualification: "Studying Computing & Cyber Security",
      period: "2024 - 2025",
    },
    {
      institution: "North Lindsey College",
      qualification: "Level 2 Certificate in Understanding Mental Health First Aid & Mental Health Advocacy in the Workplace",
      period: "2022"
    },
    {
      institution: "University of Portsmouth (UoP), UK",
      qualification: "Diploma of Higher Education. Human Geography.",
      period: "2014 - 2017",
    },
    {
      institution: "Hereford Sixthform College, UK",
      qualification: "A Levels: English Language, Computing, Geography, General Studies.",
      period: "2011 - 2013",
    },
  ]

  const hobbies = [
    "Wall climbing & bouldering",
    "Visiting museums, castles & aquariums",
    "Swimming, walking & bicycling",
    "Badminton, table tennis & ping pong",
    "Cooking tasty & healthy meals",
    "Gaming (Counter Strike, TrackMania, GTA, Don't Starve, DayZ)",
    "Creative and business side projects",
    "Learning languages such as Spanish and Russian"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2 w-[120%]">George Oscar Eugene Campbell{"'"}s CV</h1> 
              <p className="text-xl text-gray-600 mb-4">{"Software engineer and director with 5+ years building award winning front-end heavy products for startups and engineering resilient and performant back-end and database integrations."}</p>
              <p className="font-bold text-gray-900 mb-2">{"I overcome problems an LLM and vibe coding can't."}</p>
            </div>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gray-500" />
                <a href="mailto:george.campbell@massless.ltd" className="text-blue-600 hover:underline">
                  george.campbell@massless.ltd
                </a>

              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gray-500" />
                <a href="mailto:campbell.goe@gmail.com" className="text-blue-600 hover:underline">
                  campbell.goe@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gray-500" />
                <span>+44 7947 192 035</span>
              </div>
              <div className="flex items-center gap-2">
                <ExternalLink className="h-4 w-4 text-gray-500" />
                <a
                  href="https://www.massless.ltd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  www.massless.ltd
                </a>
              </div>
              <div className="flex items-center gap-2">
                <ExternalLink className="h-4 w-4 text-gray-500" />
                <a
                  href="https://www.georgecampbell.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  www.georgecampbell.co.uk
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8 space-y-8">
        {/* Technical Skills */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
              Technical & Soft Skills
            </CardTitle>
            <CardDescription className="pl-[18px]"><p>I'm seeking to grow into a full-stack or a front-end role with the ability to contribute to back-end.</p><p>I have around 10 years work experience with JavaScript and 6 years with TypeScript, but would love the opportunity to write Python and/or Rust.</p></CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="gap-2 pl-[20px]">
              <MatterCanvas />
              {/* {Object.entries(groupedSkills).map(([skillLabel, { values, colour = "" }]) => { */}
              {skillsListItems.map((itemText) => {
                
                return <li key={itemText} className="list-outside list-disc">
                   {/* <Badge variant="secondary" className={"m-1 text-sm"}></Badge> */}
                   <h3 className="font-bold bg-stone-150 inline-block">
                    {itemText.split(", ").map((word, i, arr) => {
                    const colours = ["text-red-500", "text-orange-500", "text-yellow-500", "text-green-500", "text-blue-500", "text-cyan-500", "text-violet-500", ]
                    const colour = colours[i%colours.length]
                    return <span key={word+"-"+i} className={colour}>{word}{i < arr.length - 1 ? ", " : ""}</span>
})}</h3>
                </li>
               })}
            </ul>
          </CardContent>
        </Card>

        {/* Work Experience */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="h-2 w-2 bg-green-600 rounded-full"></div>
              Work History
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {workExperience.map((job, index) => (
              <div key={index} className="border-l-2 border-gray-200 pl-6 pb-6 last:pb-0">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">{job.title}</h3>
                    <div className="flex items-center gap-2 text-blue-600 font-medium">
                      <Building className="h-4 w-4" />
                      {job.company}
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 flex flex-col md:text-right">
                    {job.period && (
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {job.period}
                      </div>
                    )}
                    {job.location && (
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {job.location}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-row items-start gap-4">
                  {job.description}
                  <div className="flex flex-col gap-4 w-full md:w-1/3 justify-center md:justify-end items-center">
                    {job.logos.map(logo => (
                      <div key={logo.companyLink} className="print:hidden">
                        <a href={logo.companyLink} target="_blank" rel="noopener noreferrer">
                          <Image
                            src={logo.logo || "/placeholder.svg"}
                            alt={logo.logoAlt}
                            width={logo.width}
                            height={logo.height}
                            className={`max-h-[175px] w-auto object-contain ${logo.logoStyle}`}
                          />
                        </a>
                      </div>)
                    )}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Education */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="h-2 w-2 bg-purple-600 rounded-full"></div>
              Education
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="border-l-2 border-gray-200 pl-6 pb-4 last:pb-0">
                <h3 className="font-semibold text-gray-900">{edu.institution}</h3>
                <p className="text-gray-700">{edu.qualification}</p>
              </div>
            ))}
            <div className="border-l-2 border-gray-200 pl-6">
              <p className="text-gray-700">
                <strong>Notable GCSEs:</strong> Maths, English, Business Studies, Geography, and History
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Hobbies & About Me */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="h-2 w-2 bg-orange-600 rounded-full"></div>
              Hobbies & About Me
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                {hobbies.map((hobby, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-orange-400 rounded-full"></div>
                    <span className="text-gray-700">{hobby}</span>
                  </div>
                ))}
              </div>
            </div>
            
          </CardContent>
        </Card>

        {/* Contact CTA */}
        <Card className="print:hidden bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 s">
          <CardContent className="text-center py-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Let{"'"}s Work Together</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Interested in collaborating? I{"'"}m always open to discussing new opportunities and exciting projects. Feel
              free to reach out!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <a href="mailto:george.campbell@massless.ltd">
                  <Mail className="h-4 w-4 mr-2" />
                  Get In Touch
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://www.massless.ltd" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View My Work
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-4xl mx-auto px-6 py-8 text-center text-gray-600">
          <p>2026 George O. E. Campbell. </p>
        </div>
      </footer>
    </div>
  )
}
