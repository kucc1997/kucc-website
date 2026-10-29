export type Photo = { src?: string; caption: string }
export type Announcement = { date: string; tag: 'upcoming' | 'notice' | 'result'; title: string; body: string }
export type CommunityEvent = { id: string; title: string; date: string; place: string; summary: string; photos: Photo[] }
export type CommunityContent = { announcements: Announcement[]; events: CommunityEvent[] }

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
// deterministic (no locale), so server and client always match
export const fmtDate = (iso: string) => {
  const [y, m, d] = iso.split('-').map(Number)
  return `${d} ${MONTHS[m - 1]} ${y}`
}

/**
 * Demo photos are placeholders. To use real ones, set `real: true` and drop files in
 * /public/communities/<slug>/<event-id>/01.jpg, 02.jpg, ... (one per caption, in order).
 */
function event(
  slug: string,
  e: Omit<CommunityEvent, 'photos'>,
  captions: string[],
  real = false,
): CommunityEvent {
  return {
    ...e,
    photos: captions.map((caption, i) => ({
      caption,
      src: real ? `/communities/${slug}/${e.id}/${String(i + 1).padStart(2, '0')}.jpg` : undefined,
    })),
  }
}

export const communityContent: Record<string, CommunityContent> = {
  documentation: {
    announcements: [
      { date: '2026-11-08', tag: 'upcoming', title: 'Research Paper Writing Sprint', body: 'A full-day sprint on structure, citations and LaTeX. Bring a draft or an idea.' },
      { date: '2026-10-19', tag: 'result', title: 'Docs Hackathon winners announced', body: 'Team Markdown Mavericks took first place for rewriting the KUCC onboarding guide.' },
      { date: '2026-09-30', tag: 'notice', title: 'Weekly writing circle moves to Thursdays', body: 'Same room, new day. We meet at 4 PM in the seminar hall.' },
    ],
    events: [
      event('documentation', { id: 'docs-hackathon-2026', title: 'Docs Hackathon 2026', date: '2026-10-12', place: 'Seminar Hall, KU', summary: 'Twelve teams rewrote real project documentation in six hours.' },
        ['Teams settling in', 'Mentor review round', 'Late-night editing', 'Winners on stage']),
      event('documentation', { id: 'latex-workshop', title: 'LaTeX Workshop', date: '2026-05-03', place: 'CS Lab 2', summary: 'From blank file to a formatted paper in one afternoon.' },
        ['Setup session', 'Live templates demo', 'Pair editing', 'Group photo']),
    ],
  },
  'machine-learning': {
    announcements: [
      { date: '2026-11-15', tag: 'upcoming', title: 'Kaggle Study Jam', body: 'Form teams of three and tackle a tabular competition together over two weekends.' },
      { date: '2026-10-22', tag: 'notice', title: 'GPU credits available', body: 'Active members can request cloud GPU credits for their projects through the form.' },
      { date: '2026-10-05', tag: 'result', title: 'Vision Project Demo Day recap', body: 'Five projects were demoed, from crop disease detection to sign language recognition.' },
    ],
    events: [
      event('machine-learning', { id: 'vision-demo-day', title: 'Vision Project Demo Day', date: '2026-10-04', place: 'Auditorium, KU', summary: 'Members showed what they built after a semester of computer vision.' },
        ['Live model demo', 'Poster corner', 'Q&A with judges', 'Team Leaf-Lens', 'Closing crowd']),
      event('machine-learning', { id: 'intro-to-ml', title: 'Intro to ML Bootcamp', date: '2026-03-14', place: 'CS Lab 1', summary: 'A hands-on day from linear regression to a first neural network.' },
        ['Whiteboard session', 'Notebook time', 'Debugging together', 'Certificates']),
    ],
  },
  'web-development': {
    announcements: [
      { date: '2026-11-02', tag: 'upcoming', title: 'Build a Landing Page in 3 Hours', body: 'Next.js and Tailwind, from empty folder to deployed site. Laptops required.' },
      { date: '2026-10-17', tag: 'result', title: 'KUCC site redesign is live', body: 'The new website was built by members of this community. Thanks to everyone who contributed.' },
      { date: '2026-09-25', tag: 'notice', title: 'Open source Fridays', body: 'Every Friday we pick a beginner-friendly issue and fix it together.' },
    ],
    events: [
      event('web-development', { id: 'frontend-day', title: 'Frontend Day', date: '2026-09-13', place: 'Lab Block, KU', summary: 'Talks and live coding on modern CSS, React and accessibility.' },
        ['Opening talk', 'Live coding', 'Accessibility clinic', 'Lunch break', 'Panel discussion']),
      event('web-development', { id: 'git-github-intro', title: 'Git & GitHub Intro', date: '2026-02-22', place: 'CS Lab 3', summary: 'First pull requests for over forty new members.' },
        ['Branching demo', 'First PRs', 'Mentors helping out']),
    ],
  },
  design: {
    announcements: [
      { date: '2026-11-10', tag: 'upcoming', title: 'Poster Design Night', body: 'Design the poster for KUCC Fest. The best one gets printed and displayed on campus.' },
      { date: '2026-10-14', tag: 'notice', title: 'Figma team workspace is open', body: 'Request an invite to share files and components with the rest of the community.' },
      { date: '2026-09-28', tag: 'result', title: 'Logo challenge results', body: 'The winning mark for the Cloud Community was chosen from 31 submissions.' },
    ],
    events: [
      event('design', { id: 'figma-sprint', title: 'Figma Sprint', date: '2026-08-30', place: 'Studio Room, KU', summary: 'Design an app screen from scratch, then present it in five minutes.' },
        ['Sketch phase', 'Wireframes on the wall', 'Critique round', 'Final pitches']),
      event('design', { id: 'type-and-color', title: 'Type & Color Workshop', date: '2026-04-11', place: 'Seminar Hall, KU', summary: 'Pairing typefaces and building palettes that work in light and dark.' },
        ['Specimen wall', 'Palette exercise', 'Show and tell']),
    ],
  },
  cloud: {
    announcements: [
      { date: '2026-11-20', tag: 'upcoming', title: 'Deploy Your First App on AWS', body: 'Free-tier friendly. We will walk through EC2, S3 and a simple CI pipeline.' },
      { date: '2026-10-25', tag: 'notice', title: 'Cloud practitioner study group', body: 'Meets twice a week. Share notes, mock exams and tips.' },
      { date: '2026-10-01', tag: 'result', title: 'Serverless Challenge winners', body: 'A lecture-notes summarizer built on Lambda took the top spot.' },
    ],
    events: [
      event('cloud', { id: 'serverless-challenge', title: 'Serverless Challenge', date: '2026-09-27', place: 'CS Lab 2', summary: 'Teams had one day to ship something useful without managing a single server.' },
        ['Kickoff briefing', 'Architecture sketches', 'Deploy time', 'Winning demo']),
      event('cloud', { id: 'docker-basics', title: 'Docker Basics', date: '2026-03-29', place: 'CS Lab 1', summary: 'Containers from zero: images, volumes and compose.' },
        ['Terminal session', 'Compose live demo', 'Q&A']),
    ],
  },
  'mobile-app-development': {
    announcements: [
      { date: '2026-11-12', tag: 'upcoming', title: 'Flutter Widget Marathon', body: 'Build one widget an hour for six hours. No experience needed.' },
      { date: '2026-10-20', tag: 'result', title: 'App Showcase 2026', body: 'Eight apps went live on Play Store internal testing this semester.' },
      { date: '2026-09-18', tag: 'notice', title: 'Test devices available', body: 'Borrow Android and iOS test devices from the club room for up to a week.' },
    ],
    events: [
      event('mobile-app-development', { id: 'app-showcase', title: 'App Showcase 2026', date: '2026-10-18', place: 'Auditorium, KU', summary: 'Members demoed apps built with Flutter and React Native.' },
        ['Stage demo', 'Hands-on corner', 'Team photo', 'Audience votes', 'Trophy moment']),
      event('mobile-app-development', { id: 'flutter-kickoff', title: 'Flutter Kickoff', date: '2026-02-08', place: 'CS Lab 3', summary: 'First app running on a real phone by the end of the session.' },
        ['Install party', 'Hot reload magic', 'Pair programming']),
    ],
  },
  'cybersecurity-networking': {
    announcements: [
      { date: '2026-11-18', tag: 'upcoming', title: 'Capture The Flag: Beginners Round', body: 'Web, crypto and forensics challenges. Teams of up to three.' },
      { date: '2026-10-23', tag: 'notice', title: 'Home lab sessions', body: 'Build a small network with VLANs and a firewall. Equipment is provided.' },
      { date: '2026-10-09', tag: 'result', title: 'CTF 2026 scoreboard is final', body: 'Congratulations to all 24 teams. Writeups are open for everyone to read.' },
    ],
    events: [
      event('cybersecurity-networking', { id: 'ctf-2026', title: 'KUCC CTF 2026', date: '2026-10-03', place: 'Lab Block, KU', summary: 'A six-hour capture the flag with challenges written by community members.' },
        ['Scoreboard on the wall', 'Teams at work', 'Hint desk', 'Award ceremony']),
      event('cybersecurity-networking', { id: 'wireshark-lab', title: 'Wireshark Lab', date: '2026-04-19', place: 'Network Lab', summary: 'Reading real traffic: handshakes, DNS and what a leak looks like.' },
        ['Packet capture demo', 'Lab exercise', 'Wrap-up']),
    ],
  },
}