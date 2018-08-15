import BeelineLogo from '../assets/Beeline/Beeline-PortfolioItemLogoA.svg';
import ecodialerLogo from '../assets/ecodialer/ecodialer-PortfolioItemLogoA.svg';
import EndlessAisleLogo from '../assets/EndlessAisle/Endless-Aisle-PortfolioItemLogoA.svg';
import WowVRLogo from '../assets/WowVR/WowVR-PortfolioItemLogoA.svg';
import PrequelMemesLogo from '../assets/PrequelMemes/PrequelMemes-PortfolioItemLogoA.svg';
import PortfolioLogo from '../assets/Portfolio/Portfolio-PortfolioItemLogoA.svg';

//PM
import PrequelMemesKickOffImage1 from '../assets/PrequelMemes/PrequelMemes-KickOffImage1.svg';
import PrequelMemesKickOffImage2 from '../assets/PrequelMemes/PrequelMemes-KickOffImage2.svg';
import PrequelMemesDesignImage1 from '../assets/PrequelMemes/PrequelMemes-DesignImage2.svg';
import PrequelMemesDesignImage2 from '../assets/PrequelMemes/PrequelMemes-DesignImage1.svg';
import PrequelMemesDesignImage3 from '../assets/PrequelMemes/PrequelMemes-DesignImage3.png';
import PrequelMemesAnalyticsImage1 from '../assets/PrequelMemes/PrequelMemes-Analytics2.svg';
import PrequelMemesTakeawayImage1 from '../assets/PrequelMemes/PrequelMemes-TakeawayImage1.jpg';
import PrequelMemesDiscoveryImage1 from '../assets/PrequelMemes/PrequelMemes-DiscoveryImage1.svg';
import PrequelMemesDiscoveryImage2 from '../assets/PrequelMemes/PrequelMemes-DiscoveryImage2.svg';
import PrequelMemesDiscoveryImage3 from '../assets/PrequelMemes/PrequelMemes-DiscoveryImage3.svg';
import PrequelMemesDiscoveryImage4 from '../assets/PrequelMemes/PrequelMemes-DiscoveryImage4.svg';

//RQ
import RqLogo from '../assets/Rq/RQ-PortfolioItemLogoA.svg';
import RqKickOffImage1 from '../assets/Rq/Rq-KickOffImage1.png';
import RqKickOffImage2 from '../assets/Rq/Rq-KickOffImage2.png';
import RqKickOffImage3 from '../assets/Rq/Rq-KickOffImage3.png';
import RqDiscoveryImage1 from '../assets/Rq/Rq-DiscoveryImage1.svg';
import RqDiscoveryImage2 from '../assets/Rq/Rq-DiscoveryImage2.svg';
import RqDiscoveryImage3 from '../assets/Rq/Rq-DiscoveryImage3.svg';
import RqDiscoveryImage4 from '../assets/Rq/Rq-DiscoveryImage4.svg';
import RqDesignImage1 from '../assets/Rq/Rq-DesignImage1.svg';
import RqDesignImage2 from '../assets/Rq/Rq-DesignImage2.svg';
import RqDesignImage3 from '../assets/Rq/Rq-DesignImage3.png';
import RqBetaImage1 from '../assets/Rq/Rq-BetaImage1.svg';
import RqTakeawayImage1 from '../assets/Rq/Rq-TakeawayImage1.svg';

//PATIOBUILDER
import PatioBuilderLogo from '../assets/PatioBuilder/PatioBuilder-PortfolioItemLogoA.svg';
import PatioBuilderTakeAwayImage1 from '../assets/PatioBuilder/PatioBuilder-ImageBar.jpg';
import PatioBuilderKickOffImage1 from '../assets/PatioBuilder/PatioBuilder-KickOffImage1.svg';
import PatioBuilderKickOffImage2 from '../assets/PatioBuilder/PatioBuilder-KickOffImage2.svg';
import PatioBuilderDiscoveryImage2 from '../assets/PatioBuilder/PatioBulder-DiscoveryImage2-01.svg';
import PatioBuilderDesignImage1 from '../assets/PatioBuilder/PatioBuilder-DesignImage1.jpg';
import PatioBuilderDesignImage2 from '../assets/PatioBuilder/PatioBuilder-DesignImage2.jpg';
import PatioBuilderDesignImage3 from '../assets/PatioBuilder/PatioBuilder-DesignImage3.svg';
import PatioBuilderDesignImage4 from '../assets/PatioBuilder/PatioBuilder-DesignImage4.jpg';
import PatioBuilderDesignImage5 from '../assets/PatioBuilder/PatioBuilder-DesignImage5.jpg';
import PatioBuilderTakeawayImage1 from '../assets/PatioBuilder/PatioBuilder-TakeAwayImage1.jpg';
import PatioBuilderTakeawayImage2 from '../assets/PatioBuilder/PatioBuilder-TakeAwayImage2.jpg';

//WowVR
import WowVRDesignImage1 from '../assets/WowVR/WowVR-DesignImage1.png';
import WowVRDesignImage2 from '../assets/WowVR/WowVR-DesignImage2.jpg';

const portfolioItems = [
  {
    key: 0,
    title: 'RQ',
    description: 'Evolving customer follow-ups',
    image: RqLogo,
    link: 'RQ',
    headerBlurb: {
      blurbTitle: 'RQ',
      blurb: [
        'Customer follow-ups are an integral component of doing business, but does anyone answer phone calls anymore? I was part of an ambitious project to re-design and evolve the customer follow-up experiece for the largest POS system in the wireless market.',
      ],
    },
    projectInfo: {
      client: 'iQmetrix',
      objective:
        'iQmetrix aimed to transform the customer follow-up experience with their enterprise POS platform RQ. An agile team was tasked to identify pain points and design a solution to increase the success of customer follow-ups for their clients.',
      timeline: '6 months',
      team: ['Product Manager', 'UX Designer (← me)', 'UX Researcher', '3-5 Developers', 'Business Analyst'],
      role:
        'I led the design of the customer follow-up experience between April 2017 and October 2017 until the project entered the detailed visual design phase.',
      link: 'https://www.iqmetrix.com/products/rq',
    },
    kickOff: {
      topText:
        "At the outset of the project we didn't know much about the specific goals of a successful customer follow-up experience. Without pre-existing insights, I partnered with our UX researcher to explore what customers thought about receiving follow-ups from retailers. Together we conducted a Google Design sprint over a period of five days to answer critical business questions through design, prototyping and testing ideas with customers.",
      images: [
        { image: RqKickOffImage1, caption: 'Fig.1 Customer Follow-up Research' },
        { image: RqKickOffImage2, caption: 'Fig.2 Storyboarding' },
        { image: RqKickOffImage3, caption: 'Fig.3 Key Learnings' },
      ],
      bottomText: '',
    },
    discovery: [
      {
        title: '1. PHONE AGITATION',
        blurb:
          'Phone calls were not a method of communication that our testers positively associate with brand interaction. Instead, they viewed unsolicited business calls to be nothing more than pestering from telemarketers. It was not so much that the testers felt dislike for the phone. They still spent time talking, but they prefer to do it with their family and close friends.',
        image: RqDiscoveryImage1,
      },
      {
        title: '2. EASY REMEMBERING',
        blurb:
          'Phone conversations can be difficult to recall. “Was the address 113 or 131?” Hours after a phone conversation, details like these tend to slip away. But with SMS, everyone has a readily retrievable transcript of the conversation. An individual can go back and see that the address is 113. There’s less pressure on the recipient to remember everything.',
        image: RqDiscoveryImage2,
      },
      {
        title: '3. TIME TO RESPOND',
        blurb:
          'Text messages are less demanding than phone calls. Phone calls may require the person to come up with answers on the spot or remember specific questions he or she wanted to ask. By contrast, a text message gives the recipient time to think and respond on his or her own time. It’s a more organized experience that involves less overall pressure.',
        image: RqDiscoveryImage3,
      },
      {
        title: '4. SHYNESS & ANXIETY',
        blurb:
          'For many the idea of speaking to a stranger during a follow-up wasn’t something that they felt comfortable doing. Whether it was a fear of judgement or a social anxiety, many store employees put off doing follow-up calls because of how awkward it made them feel. But with SMS, the individual is able to have the same conversations without experiencing the anxieties or pressures that they associated with doing voice call follow-ups.',
        image: RqDiscoveryImage4,
      },
    ],
    design: {
      figma: 'http://www.google.ca/',
      topText:
        'By identifying the tensions of conducting customer follow-ups via voice calls, it became clear that a messaging system could ideally alleviate these tensions and make it easier for both customers and retailers to communicate with each other. We decided to test this concept with a prototype that would provide the option of conducting customer follow-ups via messaging or by voice.',
      images: [
        { image: RqDesignImage1, caption: 'Wireframes' },
        { image: RqDesignImage2, caption: 'Desktop' },
        { image: RqDesignImage3, caption: 'Mobile' },
      ],
      bottomText:
        "In order to validate our ideas, a MVP prototype would be created and tested in stores to gather real-world insights. To get this prototype made quickly I decided to use Google's Material Design design components, enabling the front-end to come together much faster than a custom UI. ",
    },
    testing: {
      topText:
        'With a completed MVP we wanted to get real life data as soon as possible to validate our product design. Several iQmetrix clients were selected to participate in beta testing at 40 store locations across Canada and USA. The store staff we trained to think of the application as a customer relationship tool and not a marketing tool. This mindset would be crucial to growing relationships with customers through two way messaging. Staff were fast to adapt the application into their routines and began having conversations with customers on the very first day.',
      images: [{ image: RqBetaImage1, caption: '' }],
      bottomText:
        'The analytics, usability testing, and user feedback from these locations guided the design process as they tested the application for nearly 6 months. During this test period we released features and enhancements on a weekly cycle, enabling me to iterate my designs frequently.',
    },
    takeaway: {
      topText:
        'During the test period the number of customer follow-ups completed via SMS were greatly more than the number voice call follow-ups. In addition to more follow-ups being completed, 45% of SMS follow-ups resulted in a conversation with the customer while voice calls only managed to generate a conversation 7% of the time. We discovered that as the reply ratio increased, the number of booked appointments also increased.',
      images: [{ image: RqTakeawayImage1, caption: '' }],
      bottomText: '',
    },
  },
  {
    key: 4,
    title: 'Prequel Memes',
    description: 'Increasing user participation',
    image: PrequelMemesLogo,
    link: 'PrequelMemes',
    headerBlurb: {
      blurbTitle: 'Prequel Memes',
      blurb: [
        'A long time ago, in a subreddit far far away…',
        ' The lack of original content being delivered to the outlying Star Wars communities has users in turmoil. Hoping to resolve the matter, I set out to create the ultimate tool to encourage content creation and bring balance to the subreddit of /r/PrequelMemes.',
      ],
    },
    projectInfo: {
      client: 'r/PrequelMemes Community',
      objective:
        'The aim was to simplify the creation process for making hilarious Star Wars memes. I teamed up with a small team of colleagues to create an web application that would enable Star Wars fans to easily create wacky concoctions and share them with the world.',
      timeline: '6 months',
      team: ['2 UX Designers (← me)', 'Front End Developer', 'Back End Developer (← me)', 'Build Tools (← me)'],
      role: 'I designed the Front End, Developed Back End and build tools for the project.',
      link: 'http://www.prequelmemes.com',
    },
    kickOff: {
      topText:
        'Before design could start we needed to consider the different use cases for the application. The best resource for this was to reach out directly to the reddit community for their input. Posts were made over a period of a few days investigating the pain points users had while creating content. I also investigated reasons why users might not create images at all.',
      images: [{ image: PrequelMemesKickOffImage1, caption: '' }, { image: PrequelMemesKickOffImage2, caption: '' }],
      bottomText: 'All of the key problems and some possible solutions were put onto stickies and then organized.',
    },
    discovery: [
      {
        title: '1. IMAGE FRUSTRATION',
        blurb:
          'Users currently use Google image search to find movie screenshots. However desired screenshots are rarely found with this method or are unusable due to poor image quality.',
        image: PrequelMemesDiscoveryImage1,
      },
      {
        title: '2. HAPPY SPECTATORS',
        blurb:
          'Some users don’t actually wish to create content. Instead they want to view the content, laugh, and share it within their social groups.',
        image: PrequelMemesDiscoveryImage2,
      },
      {
        title: '3. A LITTLE LOST',
        blurb:
          "Creating content requires the knowledge of using a design application such as GIMP. These skills and tools are blockers for the users who want to create but simply don't know how to get started.",
        image: PrequelMemesDiscoveryImage3,
      },
      {
        title: '4. MOBILE ANNOYANCES',
        blurb:
          'The majority of users were primarily using their mobile devices to browse the subreddit. Many did not have the necessary apps for image editing on the mobile devices and others found it too frustrating to even attempt editing images with their mobile devices.',
        image: PrequelMemesDiscoveryImage4,
      },
    ],
    design: {
      figma: 'http://www.google.ca/',
      topText:
        'With our discoveries in mind, it was now clear that the solution would be a new kind of image library. It would need to be easy to navigate. It would to have a good selection of high quality images. It would need to allow users to perform basic editing such as adding text and combining images. Perhaps most importantly, it needed to be designed for mobile users first. A user journey map was also created to identify any addtional opportunites for improvement.',
      images: [
        { image: PrequelMemesDesignImage2, caption: '' },
        { image: PrequelMemesDesignImage1, caption: '' },
        { image: PrequelMemesDesignImage3, caption: '' },
      ],
      bottomText:
        'The navigation of the library would be very important to the success of the application. The large image library would consist of thousands of images across three movies—it had to be easy to navigate. We created and iterated on wireframes to create a navigation style that would support all identified use cases.',
    },
    testing: {
      topText:
        'Google Analytics are currently being utilized to monitor user behaviour and user engagement. Since launch the application has a Bounce Rate of 0.52% with an average user session duration of 2:03. This is very encouraging and positive reception. However the analytic data also indicates a low amount of return users (6.7%). This will be the focus of the project over the coming months. ',
      images: [{ image: PrequelMemesAnalyticsImage1, caption: 'August 7 - August 13 2018' }],
      bottomText: '',
    },
    takeaway: {
      topText:
        'Analysis, research, and interviews with the users of the reddit Star Wars community proved to be valuable asset in creating this web application. At the time of writing this more than 3,000 memes have been created and shared across a variety of social media platforms. Since the launch of prequelmemes.com, the Reddit Star Wars community has promoted it as the official content tool for its users. Prequel Memes continues to help users around the planet in their quest to create hilarious Star Wars memes.',
      images: [{ image: PrequelMemesTakeawayImage1, caption: '' }],
      bottomText: '',
    },
  },
  {
    key: 6,
    title: 'Patio Builder',
    description: 'Maximizing small spaces',
    image: PatioBuilderLogo,
    link: 'PatioBuilder',
    headerBlurb: {
      blurbTitle: 'Patio Builder',
      blurb: [
        "As Canadian Tire's selection of outdoor living products grew, they faced the challenge of simply not having sufficient space in their stores seasonal departments to display every item. I was part of a team to deliver an innovate industry first solution for one of Canada's most iconic brands.",
      ],
    },
    projectInfo: {
      client: 'Canadian Tire',
      objective:
        'Faced with the challenge of simply not having sufficient space to display their vast selection of Outdoor Living products in their stores. The challenge was to design a solution that would give customers access to browse, interact with, and purchase every Outdoor Living product Canadian Tire has to offer.',
      timeline: '12 months',
      team: ['1 UX Designer (← me)', '4 Unity Developers', '2 Business Analysts', 'Project Manager'],
      role:
        'I created frameworks and prototypes to share the vision, design principles and content strategy. This helped to solidify ideas, gain alignment and drive decision making. I executed research, journeys, wireframes, prototypes and final design specs.',
      link: 'http://www.prequelmemes.com',
    },
    kickOff: {
      topText:
        'I spearheaded a research plan to gain deeper insight into the pain‐points to look for opportunities to evolve the shopping experience. Over a two‐week period I conducted customer interviews and usability testing. We also used this time to test the viability of future concepts.To disseminate the research learnings, I created a customer journey map.This allowed me to communicate the severity of the pain‐points and facilitate conversations about the areas we wanted to fix.',
      images: [{ image: PatioBuilderKickOffImage1, caption: ' ' }, { image: PatioBuilderKickOffImage2, caption: ' ' }],
      bottomText:
        'The map highlighted the problems customers were having and created a deeper empathy amongst the team. This research was a major breakthrough for our team and allowed us to focus our energy on creating the right experience. ',
    },
    discovery: [
      {
        title: '1. BOXED UP',
        blurb:
          'Customers want to see what a patio product looks like before they purchase it. They want to inspect things such as color, build quality, and size. However many products are not displayed in store and remain boxed on shelves.',
        image: RqDiscoveryImage1,
      },
      {
        title: '2. VISUALIZATION',
        blurb:
          'Many customers find it difficult to visualize which products compliment each other without being able to experiment. These customers prefer to shop in stores that allow them to physically mix and match products.',
        image: RqDiscoveryImage3,
      },
      {
        title: '3. C-C-COMBO MAKERS',
        blurb:
          'Customers enjoy creating combinations of different types of products building their own sets and giving their backyards a personal style/touch.',
        image: PatioBuilderDiscoveryImage2,
      },
      {
        title: '4. HIDE & SEEK',
        blurb: 'Customers feel they are very likely to overlook patio products from not knowing where to look.',
        image: RqDiscoveryImage4,
      },
    ],
    design: {
      topText:
        'With the pain-points in our minds, we began brainstorming and designing a variety of digital experiences that could solve these problems for our customers. During these brainstorming sessions an innovative and ambitious solution came up to use two emerging technologies 4K and VR. We proposed a solution where customers could browse and interact with all Canadian Tire’s patio products in a virtual 3D backyard. It would allow customers to design their own custom product combinations with every Outdoor Living product that Canadian Tire had to offer and then explore a photo-realistic rendering of the products and designs with virtual reality.',
      images: [
        { image: PatioBuilderDesignImage2, caption: 'Brainstorming Sessions' },
        { image: PatioBuilderDesignImage1, caption: 'Outdoor Living Product Catalogue' },
      ],
      bottomText:
        "This would require all of Canadian Tires's Outdoor living products to be modelled and textured in 3D so they could be implemented into the Unity3D game engine.",
    },
    testing: {
      topText:
        'Throughout the design process an extra focus was given to accessibility as the experience would utilize a 85” wide touch screen mounted in a chassis that placed the the top of the screen approximately 72” from the ground. For this reason it was decided that the UI elements should be designed to occupy the lower portion of the screen allowing them to be accessible by all users. I created low fidelity wireframes and interactive prototypes to conduct usability testing that I used to guide and validate design decisions. ',
      images: [
        { image: PatioBuilderDesignImage3, caption: 'Wireframes' },
        { image: PatioBuilderDesignImage4, caption: 'Final Design' },
        {
          image: PatioBuilderDesignImage5,
          caption:
            'Realtime rendered screenshot from the Canadian Tire Patio Builder  experience (Unity3D game engine)',
        },
      ],
      bottomText:
        'Initally the user experience gave users a selction of three different static camera perspectives that they could view their patio designs from. However in usability testing it was discovered this design was limiting for users who spent time creating a patio design. They wanted to be able to explore the space and their selected products. To address this a heads-up-display(HUD) was included in the design to drive the in-game movement system, giving users fully responsive controls to explore their digital backyard designs with a virtual joystick. ',
    },
    takeaway: {
      topText:
        'Patio Builder was rolled-out in May of 2015 and was positively recieved by Canadian Tire customers. The Patio Builder’s combination of functionality and simplicity provides customers with the tools to create backyard experiences in a few simple steps. The experience launched with a host of ready-made backyard designs which can be personalized by adding BBQs, tables, fireplaces and seating arrangements. Patio Builder also included curated media content on product knowledge, design inspiration, and current design trends in outdoor furniture. ',
      images: [
        { image: PatioBuilderTakeawayImage1, caption: 'Store roll-out' },
        { image: PatioBuilderTakeawayImage2, caption: 'Me & Patio Builder (Hamming it up)' },
      ],
      bottomText: '',
    },
  },
  {
    key: 5,
    title: 'WowVR',
    description: 'The fast follow',
    image: WowVRLogo,
    link: 'WowVR',
    headerBlurb: {
      blurbTitle: 'WoW VR',
      blurb: [
        "Whilst the hype and the success of Patio Builder was at it's peak, I was part of a fast-follow project tasked with the re-design and optimization of the in-store experience for mobile devices.",
      ],
    },
    projectInfo: {
      client: 'Canadian Tire',
      objective:
        'The objective of this project was to re-design and port of the in-store Patio Builder to Android and iOS devices.',
      timeline: '3 months',
      team: ['4 Unity Developers', 'UX Designer (← me)', 'Business Analyst'],
      role: 'I was responsible for the re-design of the Patio Builder for mobile devices.',
      link: 'https://play.google.com/store/apps/details?id=com.canadiantire.wowvr&hl=en_CA',
    },
    kickOff: {
      topText: 'Kick off Text',
      images: [{ image: 'http://via.placeholder.com/3000x1500', caption: '' }],
      bottomText: '',
    },
    discovery: [
      {
        title: '1.',
        blurb: 'Discovery text.',
        image: 'http://via.placeholder.com/300x300',
      },
      {
        title: '2.',
        blurb: 'Discovery text.',
        image: 'http://via.placeholder.com/300x300',
      },
      {
        title: '3.',
        blurb: 'Discovery text.',
        image: 'http://via.placeholder.com/300x300',
      },
      {
        title: '4.',
        blurb: 'Discovery text.',
        image: 'http://via.placeholder.com/300x300',
      },
    ],
    design: {
      figma: 'http://www.google.ca/',
      topText:
        "Low-fidelity wireframes and interactive prototypes were created to conduct usability testing with a small group of Canadian Tire customers. I created a short interview script and scheduled a small group of people to be interviewed over a short period of two days. Participants of the interviews were rewarded with Canadian Tire gift cards for their time. The feedback from these test sessions were key in ensuring the app was easy to use by Canadian Tire's wide age demographic.",
      images: [{ image: WowVRDesignImage1, caption: 'Wireframes' }, { image: WowVRDesignImage2, caption: 'Finals' }],
      bottomText:
        'Due to the mobile app being developed in a single codebase in Unity3D, this meant the app would only be able to follow one design standard; Material or iOS. Analytics for the Canadian Tire Retail App were checked to determine the more popular device platform. We verified that the Android platform was more popular with CTR users and went forward ensuring Google Material Design guidlines were followed.',
    },
    testing: {
      topText: 'Testing Text',
      images: [{ image: 'http://via.placeholder.com/3000x1500', caption: 'image' }],
      bottomText: 'Testing Text',
    },
    takeaway: {
      topText: 'Takeaway Text',
      images: [{ image: 'http://via.placeholder.com/3000x1500', caption: 'image' }],
      bottomText: 'Take Away Text',
    },
  },
  {
    key: 0,
    title: 'Endless Aisle',
    description: '*Coming Soon*',
    image: EndlessAisleLogo,
    link: 'ComingSoon',
    headerBlurb: {
      blurbTitle: 'Endless Aisle',
      blurb: ['Header text'],
    },
    projectInfo: {
      client: 'Client',
      objective: 'Objective',
      timeline: 'X months',
      team: ['Team member', 'Team member (← me)', 'Team member', 'Team member', 'Team member'],
      role: 'My Role',
      link: 'https://www.google.ca',
    },
    kickOff: {
      topText: 'Kick off Text',
      images: [{ image: 'http://via.placeholder.com/3000x1500', caption: 'Image' }],
      bottomText: '',
    },
    discovery: [
      {
        title: '1.',
        blurb: 'Discovery text.',
        image: 'http://via.placeholder.com/300x300',
      },
      {
        title: '2.',
        blurb: 'Discovery text.',
        image: 'http://via.placeholder.com/300x300',
      },
      {
        title: '3.',
        blurb: 'Discovery text.',
        image: 'http://via.placeholder.com/300x300',
      },
      {
        title: '4.',
        blurb: 'Discovery text.',
        image: 'http://via.placeholder.com/300x300',
      },
    ],
    design: {
      figma: 'http://www.google.ca/',
      topText: 'Design Text',
      images: [{ image: 'http://via.placeholder.com/3000x1500', caption: 'image' }],
      bottomText: 'Design Text ',
    },
    testing: {
      topText: 'Testing Text',
      images: [{ image: 'http://via.placeholder.com/3000x1500', caption: 'image' }],
      bottomText: 'Testing Text',
    },
    takeaway: {
      topText: 'Takeaway Text',
      images: [{ image: 'http://via.placeholder.com/3000x1500', caption: 'image' }],
      bottomText: 'Take Away Text',
    },
  },
  {
    key: 2,
    title: 'Beeline',
    description: '*Coming Soon*',
    image: BeelineLogo,
    link: 'ComingSoon',
    headerBlurb: {
      blurbTitle: 'Title',
      blurb: ['Header text'],
    },
    projectInfo: {
      client: 'Client',
      objective: 'Objective',
      timeline: 'X months',
      team: ['Team member', 'Team member (← me)', 'Team member', 'Team member', 'Team member'],
      role: 'My Role',
      link: 'https://www.google.ca',
    },
    kickOff: {
      topText: 'Kick off Text',
      images: [{ image: 'http://via.placeholder.com/3000x1500', caption: 'Image' }],
      bottomText: '',
    },
    discovery: [
      {
        title: '1.',
        blurb: 'Discovery text.',
        image: 'http://via.placeholder.com/300x300',
      },
      {
        title: '2.',
        blurb: 'Discovery text.',
        image: 'http://via.placeholder.com/300x300',
      },
      {
        title: '3.',
        blurb: 'Discovery text.',
        image: 'http://via.placeholder.com/300x300',
      },
      {
        title: '4.',
        blurb: 'Discovery text.',
        image: 'http://via.placeholder.com/300x300',
      },
    ],
    design: {
      figma: 'http://www.google.ca/',
      topText: 'Design Text',
      images: [{ image: 'http://via.placeholder.com/3000x1500', caption: 'image' }],
      bottomText: 'Design Text ',
    },
    testing: {
      topText: 'Testing Text',
      images: [{ image: 'http://via.placeholder.com/3000x1500', caption: 'image' }],
      bottomText: 'Testing Text',
    },
    takeaway: {
      topText: 'Takeaway Text',
      images: [{ image: 'http://via.placeholder.com/3000x1500', caption: 'image' }],
      bottomText: 'Take Away Text',
    },
  },
  {
    key: 3,
    title: 'ecodialer',
    description: '*Coming Soon*',
    image: ecodialerLogo,
    link: 'ComingSoon',
    headerBlurb: {
      blurbTitle: 'Title',
      blurb: ['Header text'],
    },
    projectInfo: {
      client: 'Client',
      objective: 'Objective',
      timeline: 'X months',
      team: ['Team member', 'Team member (← me)', 'Team member', 'Team member', 'Team member'],
      role: 'My Role',
      link: 'https://www.google.ca',
    },
    kickOff: {
      topText: 'Kick off Text',
      images: [{ image: 'http://via.placeholder.com/3000x1500', caption: 'Image' }],
      bottomText: '',
    },
    discovery: [
      {
        title: '1.',
        blurb: 'Discovery text.',
        image: 'http://via.placeholder.com/300x300',
      },
      {
        title: '2.',
        blurb: 'Discovery text.',
        image: 'http://via.placeholder.com/300x300',
      },
      {
        title: '3.',
        blurb: 'Discovery text.',
        image: 'http://via.placeholder.com/300x300',
      },
      {
        title: '4.',
        blurb: 'Discovery text.',
        image: 'http://via.placeholder.com/300x300',
      },
    ],
    design: {
      figma: 'http://www.google.ca/',
      topText: 'Design Text',
      images: [{ image: 'http://via.placeholder.com/3000x1500', caption: 'image' }],
      bottomText: 'Design Text ',
    },
    testing: {
      topText: 'Testing Text',
      images: [{ image: 'http://via.placeholder.com/3000x1500', caption: 'image' }],
      bottomText: 'Testing Text',
    },
    takeaway: {
      topText: 'Takeaway Text',
      images: [{ image: 'http://via.placeholder.com/3000x1500', caption: 'image' }],
      bottomText: 'Take Away Text',
    },
  },
  {
    key: 7,
    title: 'Portfolio',
    description: '*Coming Soon*',
    image: PortfolioLogo,
    link: 'ComingSoon',
    headerBlurb: {
      blurbTitle: 'Title',
      blurb: ['Header text'],
    },
    projectInfo: {
      client: 'Client',
      objective: 'Objective',
      timeline: 'X months',
      team: ['Team member', 'Team member (← me)', 'Team member', 'Team member', 'Team member'],
      role: 'My Role',
      link: 'https://www.google.ca',
    },
    kickOff: {
      topText: 'Kick off Text',
      images: [{ image: 'http://via.placeholder.com/3000x1500', caption: 'Image' }],
      bottomText: '',
    },
    discovery: [
      {
        title: '1.',
        blurb: 'Discovery text.',
        image: 'http://via.placeholder.com/300x300',
      },
      {
        title: '2.',
        blurb: 'Discovery text.',
        image: 'http://via.placeholder.com/300x300',
      },
      {
        title: '3.',
        blurb: 'Discovery text.',
        image: 'http://via.placeholder.com/300x300',
      },
      {
        title: '4.',
        blurb: 'Discovery text.',
        image: 'http://via.placeholder.com/300x300',
      },
    ],
    design: {
      figma: 'http://www.google.ca/',
      topText: 'Design Text',
      images: [{ image: 'http://via.placeholder.com/3000x1500', caption: 'image' }],
      bottomText: 'Design Text ',
    },
    testing: {
      topText: 'Testing Text',
      images: [{ image: 'http://via.placeholder.com/3000x1500', caption: 'image' }],
      bottomText: 'Testing Text',
    },
    takeaway: {
      topText: 'Takeaway Text',
      images: [{ image: 'http://via.placeholder.com/3000x1500', caption: 'image' }],
      bottomText: 'Take Away Text',
    },
  },
];

export default portfolioItems;
