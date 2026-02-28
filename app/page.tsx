"use client";
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Mail, Phone, ExternalLink, MapPin, Calendar, Building } from "lucide-react"
import Image from "next/image"

// Import images
const TravelLocalLogo = "/images/travellocal-logo.svg"
const MasslessLogo = "/images/massless-ltd-website-logo.webp"
const ZengentiLogo = "/images/logos/zengenti.png"
const DrpgLogo = "/images/logos/DRPG_40_AGENCY.svg"
const EKCSLogo = "/images/logos/ekcs.png"
const CodeyImage = "/images/codey-bitey-bugy.webp"

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
    [AT, "Cypress.js", ],
    [AT, "Puppeteer"],
    [AT, "Playwright"],
    [SS, "Perseverance"],
    [SS, "Autonomy"],
    [SS, "Friendliness"],
    [SS, "Enthusiasm"],
  ]);

  const colours: {[key: string]: string} = {
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
  }, {} as { [key: string]: { values: string[]; label: string; colour: string }})
  // Map.groupBy(skills, ([groupLabel, value]) => {
  //   return SKILL_LABELS.includes(groupLabel) ? {key: groupLabel} : {key: value}
  // })
  // console.log('groupedSkills:', groupedSkills)
  const styles = {
    paragraphA: "text-gray-700 leading-relaxed flex-grow",
    paragraphB: "text-gray-850 leading-relaxed flex-grow"
  }
  const workExperience = [
    {
      title: "Director / Lead Web Engineer",
      company: "MASSLESS LTD.",
      period: "May 2021 - Present (~5 years)",
      location: "Remote, UK",
      description:
        <>
          <p className={styles.paragraphA}>I collaborate closely with clients, primarily small independent startups,
            to bring their ideas to life.</p>
          <p className={styles.paragraphB}>Using my broad yet deep skill-set in programming and software engineering, I often utilise specific AI tools to enhance my work.</p>
          <p className={styles.paragraphA}>I solve problems daily, which results in engaging, visually immersive browser and web experiences tailored to their vision.</p>
          <p className={styles.paragraphB}>For example in 2020 I built <a href="https://kirkwhayman.com" target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4 mr-2" />
            https://kirkwhayman.com
          </a> which won 5+ SOTD (Site of the Day) awards on awwwards.com</p>
        </>,
      logo: MasslessLogo,
      logoAlt: "MASSLESS LTD. Logo",
      companyLink: "https://www.massless.ltd/",
      logoStyle: "max-w-full h-auto",
      width: 939 / 3,
      height: 119 / 3,
    },
    {
      title: "Front-end Engineer",
      company: "TravelLocal",
      period: "March 2023 - November 2023 (9 months)",
      location: "Remote",
      description: <>
        <p className={styles.paragraphA}>Working with Next.js, GraphQL, Storybook, amongst other technologies, I solved a multitude of problems as a Front-end engineer.</p>
        <p className={styles.paragraphB}>I drove development forward through solving innumerable tasks myself and communicating with relevant colleagues to get blocking tasks unblocked, and helped other engineers with their tasks.</p>
      </>,
      logo: TravelLocalLogo,
      logoAlt: "TravelLocal Logo",
      companyLink: "https://www.travellocal.com/",
      logoStyle: "w-full",
      width: 250,
      height: 250
    },
    {
      title: "Software Engineer",
      company: "DRPG",
      period: "October 2020 to August 2022 (1 year 11 months)",
      location: "Remote",
      description: <>
        <p className={styles.paragraphA}>I debugged and optimised a 3D web app, a winter wonderland celebrating 40 years of DRPG, taking the FPS (Frames Per Second) on smartphone devices from 2-3 FPS to 30-60 FPS. I also implemented animated falling snow flakes into the wintery scene, using Three.js Points.</p>
        <p className={styles.paragraphB}>I developed the Jaguar C-Type customiser tool as a static site written in React.js. Jaguar received customers for the C-Type continuation via the customiser app.</p>
      </>,
      logo: DrpgLogo,
      logoAlt: "DRPG Logo",
      companyLink: "https://www.drpgroup.com/",
      logoStyle: "w-full filter invert", // Apply invert filter
      width: 974 / 3,
      height: 188 / 3,
    },
    {
      title: "Frontend Developer",
      company: "Zengenti Ltd.",
      period: "April 2019 - April 2020 (1 year)",
      location: "In house - Ludlow countryside",
      description: <>
        <p className={styles.paragraphA}>Here I worked diligently in squads of designers and developers to produce a number of elegant yet functional websites for various UK based Universities and Councils.</p>
        <p className={styles.paragraphB}>I debugged and developed a number of React/Redux + Angular CMS based website codebases and improved the quality of the front-end codebases, taking care to ensure the UI worked properly for screen-readers and people with accessibility considerations such as people with colour-blindness.</p>
      </>,
      logo: ZengentiLogo,
      logoAlt: "Zengenti Ltd. Logo",
      companyLink: "https://zengenti.com/",
      logoStyle: "filter invert", // Apply invert filter
      width: 175 * 1.5,
      height: 55 * 1.5
    },
    {
      title: "Programmer",
      company: "Express KCS",
      period: "June 2018 - April 2019 (11 months)",
      location: "In house - Milton Keynes countryside",
      description: <>
        <p className={styles.paragraphA}>This was my first time working in a small team of designers and developers, where I also learnt how to use JIRA and Git for daily use.</p>
        <p className={styles.paragraphB}>I implemented a modular i18n solution into the React codebase, using Locize for translators, and wrote lots of mocha tests.</p>
      </>,
      logo: EKCSLogo,
      logoAlt: "Express KCS Logo",
      companyLink: "https://www.ekcs.co/",
      logoStyle: "",
      width: 250,
      height: 250
    },
    {
      title: "Sole trader - Freelance - HTML, CSS, JS Programmer.",
      company: "George O. E. Campbell",
      period: "2016 - June 2018 (2 years)",
      location: "Remote",
      description: (<>
        <p className={styles.paragraphA}>
          Around 2016 I started winning my first contracts, where I utilised my problem solving abilities and skills I had gained in HTML, CSS and JavaScript.
        </p>
        <p className={styles.paragraphB}>
          I found a nack for breaking requirements down, communicating effectively, and solving relevant problems.
        </p>
        <p className={styles.paragraphA}>
          I solved a wide variety of problems for over 15+ clients and strengthened my skills in web and mobile development.
        </p>
        <p className={styles.paragraphB}>
          My highlight experience was developing a Mind Mapping web application implementation for one of my clients, and optimising it so it worked responsively on smartphone, tablet, laptop and desktop devices.
        </p>
      </>),
      logo: BreakItImage, // No specific logo for freelance
      logoAlt: "Break the cube",
      companyLink: "https://kirkwhayman.com",
      logoStyle: "max-w-full h-auto",
      width: 250,
      height: 250
    },
  ]

  const education = [
    {
      institution: "Herefordshire, Ludlow and North Shropshire College (HLNSC), UK",
      qualification: "Studying Computing & Cyber Security",
      period: "2024 - 2025",
    },
    {
      institution: "University of Portsmouth (UoP), UK",
      qualification: "Diploma of Higher Education. Human Geography.",
      period: "2014 - 2017",
    },
    {
      institution: "Hereford Sixthform College, UK",
      qualification: "A Levels: English Language, Computing, Geography.",
      period: "2011 - 2013",
    },
  ]

  const hobbies = [
    "Wall climbing / bouldering",
    "Swimming, walking, bicycling",
    "Table tennis / ping pong",
    "Cooking tasty healthy meals",
    "Gaming (Counter Strike, TrackMania, GTA, Don't Starve, DayZ)",
    "Coding in free time",
    "Learning languages"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2 w-[120%]">George Oscar Eugene Campbell{"'"}s CV</h1>
              <p className="text-xl text-gray-600 mb-4">Adaptable, reliable problem solver</p>
              <p className="font-bold text-gray-900 mb-2">{"I'm a Software Engineer and Director at MASSLESS LTD. I solve problems an LLM can't ☕🧑‍💻."}</p>
              <p className="text-gray-700 max-w-2xl">
                {`Self-taught, although I've been learning on the job too! Highly motivated at overcoming problems that matter, and understanding the theory underlying the problems I face as an engineer and designer.`}
              </p>
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

      <main className="max-w-4xl mx-auto px-6 py-8 space-y-8">
        {/* Technical Skills */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
              Technical Skills
            </CardTitle>
            <CardDescription className="pl-[18px]">Best at front-end, capable of back-end</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="flex flex-wrap gap-2 pl-[20px]">
              {Object.entries(groupedSkills).map(([skillLabel, { values, colour = "" }]) => {
                return <li key={skillLabel} className="list-outside list-disc">
                <h3 className="font-bold bg-stone-150 inline-block">{skillLabel}</h3>
                {values.map(skill => {
                return <Badge key={skill} variant="secondary" className={"m-1 text-sm "+colour}>
                  {skill}
                </Badge>
              })}
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
                  {job.logo && (
                    <div className="print:hidden flex-shrink-0 w-full md:w-1/3 flex justify-center md:justify-end items-center">
                      <a href={job.companyLink} target="_blank" rel="noopener noreferrer">
                        <Image
                          src={job.logo || "/placeholder.svg"}
                          alt={job.logoAlt}
                          width={job.width}
                          height={job.height}
                          className={`max-h-[175px] w-auto object-contain ${job.logoStyle}`}
                        />
                      </a>
                    </div>
                  )}
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
              <div className="flex justify-center items-center">
                <a
                  href="https://learn-with-ai-two.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  <Image
                    src={CodeyImage || "/placeholder.svg"}
                    className="max-w-full h-auto rounded-xl shadow-lg"
                    alt="Codey the code challenge generator bot"
                    width={250}
                    height={250}
                  />
                </a>
              </div>
            </div>
            <Separator className="my-4" />
            <p className="text-gray-700">
              In my free time you{"'"}ll often find me either going for a walk outside, or indoors coding. I also created{" "}
              <strong><a href="https://learn-with-ai-two.vercel.app" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Bytey the AI challenge generator</a></strong>, found at <ExternalLink className="h-4 w-4 float-left" /><span><a href="https://learn-with-ai-two.vercel.app" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://learn-with-ai-two.vercel.app</a></span>
            </p>
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
