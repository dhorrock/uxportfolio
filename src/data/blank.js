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
import PrequelMemesAnalyticsImage1 from '../assets/PrequelMemes/PrequelMemes-Analytics1.svg';
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
import RqBetaImage1 from '../assets/Rq/Rq-BetaImage1.svg';
import RqTakeawayImage1 from '../assets/Rq/Rq-TakeawayImage1.svg';

//PATIOBUILDER
import PatioBuilderLogo from '../assets/PatioBuilder/PatioBuilder-PortfolioItemLogoA.svg';
import PatioBuilderTakeAwayImage1 from '../assets/PatioBuilder/PatioBuilder-ImageBar.jpg';
import PatioBuilderKickOffImage1 from '../assets/PatioBuilder/PatioBuilder-KickOffImage1.svg';
import PatioBuilderKickOffImage2 from '../assets/PatioBuilder/PatioBuilder-KickOffImage2.jpg';

const portfolioItems = [
  {
    key: 0,
    title: 'RQ',
    description: 'Description',
    image: RqLogo,
    link: 'RQ',
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
    key: 1,
    title: 'Endless Aisle',
    description: 'This is endless aisle',
    image: EndlessAisleLogo,
    link: 'EndlessAisle',
    headerBlurb: {
      blurbTitle: 'Endless Aisle',
      blurb: [
        'In 2012, tapping a button to Uber across the city felt magical. By the start of 2016, this magic receded to a slew of disparate features that made the experience slow and complex to use. I was part of an ambitious project to redesign the Uber pickup experience for the fastest growing startup in history.',
      ],
    },
    projectInfo: {
      client: 'Passion Project',
      objective:
        'VW aimed to transform technology within their enterprise. They established a digital labs in Berlin as an incubator for enabling lean mobile products that strengthened their community and brand.',
      timeline: '6-8 weeks Development',
      team: ['2 Product Designers', '1 Developer'],
      role: 'I did this and this and this and this and this.',
    },
    kickOff: {
      topText:
        'At the outset of the project we didn’t have a clear mission or specific goals for the pickup experience.Without pre-existing insights, I partnered with our researcher Shruti to explore how Riders were getting around.',
      images: ['http://via.placeholder.com/3000x1500'],
      bottomText: 'Bottom text',
    },
    design: {
      topText:
        'At the outset of the project we didn’t have a clear mission or specific goals for the pickup experience.Without pre-existing insights, I partnered with our researcher Shruti to explore how Riders were getting around.',
      images: ['http://via.placeholder.com/3000x1500'],
      bottomText: '',
    },
    testing: {
      topText:
        'At the outset of the project we didn’t have a clear mission or specific goals for the pickup experience.Without pre-existing insights, I partnered with our researcher Shruti to explore how Riders were getting around.',
      images: ['http://via.placeholder.com/3000x1500'],
      bottomText: '',
    },
    takeaway: {
      topText:
        'At the outset of the project we didn’t have a clear mission or specific goals for the pickup experience.Without pre-existing insights, I partnered with our researcher Shruti to explore how Riders were getting around.',
      images: ['http://via.placeholder.com/3000x1500'],
      bottomText: 'Batman',
    },
  },
  {
    key: 2,
    title: 'Beeline',
    description: 'This is beeline',
    image: BeelineLogo,
    link: 'Beeline',
    headerBlurb: {
      blurbTitle: 'Beeline the man is bee',
      blurb: [
        'In 2012, tapping a button to Uber across the city felt magical. By the start of 2016, this magic receded to a slew of disparate features that made the experience slow and complex to use. I was part of an ambitious project to redesign the Uber pickup experience for the fastest growing startup in history.',
      ],
    },
    projectInfo: {
      client: 'Personal Project',
      objective:
        'VW aimed to transform technology within their enterprise. They established a digital labs in Berlin as an incubator for enabling lean mobile products that strengthened their community and brand.',
      timeline: '6-8 weeks Development',
      team: ['2 Product Designers', '1 Developer'],
      role: 'I did this and this and this and this and this.',
    },
    kickOff: {
      topText:
        'At the outset of the project we didn’t have a clear mission or specific goals for the pickup experience.Without pre-existing insights, I partnered with our researcher Shruti to explore how Riders were getting around.',
      images: ['http://via.placeholder.com/3000x1500'],
      bottomText: 'Bottom text',
    },
    design: {
      topText:
        'At the outset of the project we didn’t have a clear mission or specific goals for the pickup experience.Without pre-existing insights, I partnered with our researcher Shruti to explore how Riders were getting around.',
      images: ['http://via.placeholder.com/3000x1500'],
      bottomText: '',
    },
    testing: {
      topText:
        'At the outset of the project we didn’t have a clear mission or specific goals for the pickup experience.Without pre-existing insights, I partnered with our researcher Shruti to explore how Riders were getting around.',
      images: ['http://via.placeholder.com/3000x1500'],
      bottomText: '',
    },
    takeaway: {
      topText:
        'At the outset of the project we didn’t have a clear mission or specific goals for the pickup experience.Without pre-existing insights, I partnered with our researcher Shruti to explore how Riders were getting around.',
      images: ['http://via.placeholder.com/3000x1500'],
      bottomText: 'Batman',
    },
  },
  {
    key: 3,
    title: 'ecodialer',
    description: 'This is ecodialer',
    image: ecodialerLogo,
    link: 'ecodialer',
    headerBlurb: {
      blurbTitle: 'Beeline the man is bee',
      blurb: [
        'In 2012, tapping a button to Uber across the city felt magical. By the start of 2016, this magic receded to a slew of disparate features that made the experience slow and complex to use. I was part of an ambitious project to redesign the Uber pickup experience for the fastest growing startup in history.',
      ],
    },
    projectInfo: {
      client: 'Passion Project',
      objective:
        'VW aimed to transform technology within their enterprise. They established a digital labs in Berlin as an incubator for enabling lean mobile products that strengthened their community and brand.',
      timeline: '6-8 weeks Development',
      team: ['2 Product Designers', '1 Developer'],
      role: 'I did this and this and this and this and this.',
    },
    kickOff: {
      topText:
        'At the outset of the project we didn’t have a clear mission or specific goals for the pickup experience.Without pre-existing insights, I partnered with our researcher Shruti to explore how Riders were getting around.',
      images: ['http://via.placeholder.com/3000x1500'],
      bottomText: 'Bottom text',
    },
    design: {
      topText:
        'At the outset of the project we didn’t have a clear mission or specific goals for the pickup experience.Without pre-existing insights, I partnered with our researcher Shruti to explore how Riders were getting around.',
      images: ['http://via.placeholder.com/3000x1500'],
      bottomText: '',
    },
    testing: {
      topText:
        'At the outset of the project we didn’t have a clear mission or specific goals for the pickup experience.Without pre-existing insights, I partnered with our researcher Shruti to explore how Riders were getting around.',
      images: ['http://via.placeholder.com/3000x1500'],
      bottomText: '',
    },
    takeaway: {
      topText:
        'At the outset of the project we didn’t have a clear mission or specific goals for the pickup experience.Without pre-existing insights, I partnered with our researcher Shruti to explore how Riders were getting around.',
      images: ['http://via.placeholder.com/3000x1500'],
      bottomText: 'Batman',
    },
  },
  {
    key: 4,
    title: 'Prequel Memes',
    description: 'Now this is podracing',
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
      client: 'r/PrequelMemes',
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
        'Google Analytics are currently being utilized to monitor user behaviour and user engagement. Since launch the application has a Bounce Rate of 0.95% with an average user session duration of 3:18. This is very encouraging and positive reception. However the analytic data also indicates a low amount of return users (9.3%). This will be the focus of the project over the coming months. ',
      images: [{ image: PrequelMemesAnalyticsImage1, caption: '' }],
      bottomText: '',
    },
    takeaway: {
      topText:
        'Analysis, research, and interviews with the users of the reddit Star Wars community proved to be valuable asset in creating this web application. At the time of writing this 2,964 memes have been created and shared across a variety of social media platforms. Since the launch of prequelmemes.com, the Reddit Star Wars community has promoted it as the official content tool for its users. Prequel Memes continues to help users around the planet in their quest to create hilarious Star Wars memes.',
      images: [{ image: PrequelMemesTakeawayImage1, caption: '' }],
      bottomText: '',
    },
  },
  {
    key: 5,
    title: 'WowVR',
    description: 'This is WowVR',
    image: WowVRLogo,
    link: 'WowVR',
    headerBlurb: {
      blurbTitle: 'Beeline the man is bee',
      blurb: [
        'In 2012, tapping a button to Uber across the city felt magical. By the start of 2016, this magic receded to a slew of disparate features that made the experience slow and complex to use. I was part of an ambitious project to redesign the Uber pickup experience for the fastest growing startup in history.',
      ],
    },
    projectInfo: {
      client: 'Passion Project',
      objective:
        'VW aimed to transform technology within their enterprise. They established a digital labs in Berlin as an incubator for enabling lean mobile products that strengthened their community and brand.',
      timeline: '6-8 weeks Development',
      team: ['2 Product Designers', '1 Developer'],
      role: 'I did this and this and this and this and this.',
    },
    kickOff: {
      topText:
        'At the outset of the project we didn’t have a clear mission or specific goals for the pickup experience.Without pre-existing insights, I partnered with our researcher Shruti to explore how Riders were getting around.',
      images: ['http://via.placeholder.com/3000x1500'],
      bottomText: 'Bottom text',
    },
    design: {
      topText:
        'At the outset of the project we didn’t have a clear mission or specific goals for the pickup experience.Without pre-existing insights, I partnered with our researcher Shruti to explore how Riders were getting around.',
      images: ['http://via.placeholder.com/3000x1500'],
      bottomText: '',
    },
    testing: {
      topText:
        'At the outset of the project we didn’t have a clear mission or specific goals for the pickup experience.Without pre-existing insights, I partnered with our researcher Shruti to explore how Riders were getting around.',
      images: ['http://via.placeholder.com/3000x1500'],
      bottomText: '',
    },
    takeaway: {
      topText:
        'At the outset of the project we didn’t have a clear mission or specific goals for the pickup experience.Without pre-existing insights, I partnered with our researcher Shruti to explore how Riders were getting around.',
      images: ['http://via.placeholder.com/3000x1500'],
      bottomText: 'Batman',
    },
  },
  {
    key: 6,
    title: 'Patio Builder',
    description: 'Now this is podracing',
    image: PatioBuilderLogo,
    link: 'PatioBuilder',
    headerBlurb: {
      blurbTitle: 'Patio Builder',
      blurb: [
        "As Canadian Tire's selection of outdoor living products grew, they faced the challenge of simply not having sufficient space in their stores to display every item. I was part of an innovative team to deliver an award winning solution for one of Canada's most sucessful brands.",
      ],
    },
    projectInfo: {
      client: 'Canadian Tire',
      objective:
        'Faced with the challenge of simply not having sufficient space to display their vast selection of Outdoor Living products in their stores. The challenge was to design a solution that would give customers access to browse, interact with, and purchase every Outdoor Living product Canadian Tire has to offer.',
      timeline: '12 months',
      team: ['1 UX Designer (← me)', '4 Unity Developers', '2 Business Analysts', 'Project Manager'],
      role:
        'I created frameworks and prototypes to share the vision, design principles and content strategy. This helped to solidify ideas, gain alignment and drive decision making. I executed journeys, wireframes, prototypes and final design specs.',
      link: 'http://www.prequelmemes.com',
    },
    kickOff: {
      topText:
        'I spearheaded a research plan to gain deeper qualitative insight into the Outdoor Living shopping pain‐points and to look for opportunities to evolve the experience. Over a two‐week period I ran a diary study and usability testing. We also used this time to test the viability of future concepts.To disseminate the research learnings, I created a customer journey map.This allowed me to communicate the severity of the pain‐points and facilitate conversations about the areas we wanted to fix.',
      images: [{ image: PatioBuilderKickOffImage1, caption: '' }],
      bottomText:
        'The map highlighted how broken the Library‐Digital Music Store model was and created a deeper empathy amongst the team. This research was a major breakthrough for our team and allowed us to focus our energy on creating the right experience, this time.',
    },
    discovery: [
      {
        title: '1. WONT PURCHASE CANT SEE',
        blurb: 'I want to see what I buy.',
        image: PrequelMemesDiscoveryImage1,
      },
      {
        title: '2. COMBOS IMPORTANT',
        blurb: 'How things go together are very important for me.',
        image: PrequelMemesDiscoveryImage2,
      },
      {
        title: '3. PROBLEM WITH VISUALIZATION',
        blurb: 'I struggle picturing what products will look like together.',
        image: PrequelMemesDiscoveryImage3,
      },
      {
        title: '4. UNKOWN',
        blurb: 'Four',
        image: PrequelMemesDiscoveryImage4,
      },
    ],
    design: {
      topText: 'Test',
      images: [{ image: PrequelMemesDesignImage2, caption: '' }],
      bottomText: 'Bottom',
    },
    testing: {
      topText: 'Top ',
      images: [{ image: PrequelMemesAnalyticsImage1, caption: '' }],
      bottomText: 'Bottom',
    },
    takeaway: {
      topText: 'Top',
      images: [{ image: PatioBuilderTakeAwayImage1, caption: '' }],
      bottomText: 'Bottom',
    },
  },
  {
    key: 7,
    title: 'Portfolio',
    description: 'This portfolio',
    image: PortfolioLogo,
    link: 'PatioBuilder',
    headerBlurb: {
      blurbTitle: 'Beeline the man is bee',
      blurb: [
        'In 2012, tapping a button to Uber across the city felt magical. By the start of 2016, this magic receded to a slew of disparate features that made the experience slow and complex to use. I was part of an ambitious project to redesign the Uber pickup experience for the fastest growing startup in history.',
      ],
    },
    projectInfo: {
      client: 'Passion Project',
      objective:
        'VW aimed to transform technology within their enterprise. They established a digital labs in Berlin as an incubator for enabling lean mobile products that strengthened their community and brand.',
      timeline: '6-8 weeks Development',
      team: ['2 Product Designers', '1 Developer'],
      role: 'I did this and this and this and this and this.',
    },
    kickOff: {
      topText:
        'At the outset of the project we didn’t have a clear mission or specific goals for the pickup experience.Without pre-existing insights, I partnered with our researcher Shruti to explore how Riders were getting around.',
      images: ['http://via.placeholder.com/3000x1500'],
      bottomText: 'Bottom text',
    },
    design: {
      topText:
        'At the outset of the project we didn’t have a clear mission or specific goals for the pickup experience.Without pre-existing insights, I partnered with our researcher Shruti to explore how Riders were getting around.',
      images: ['http://via.placeholder.com/3000x1500'],
      bottomText: '',
    },
    testing: {
      topText:
        'At the outset of the project we didn’t have a clear mission or specific goals for the pickup experience.Without pre-existing insights, I partnered with our researcher Shruti to explore how Riders were getting around.',
      images: ['http://via.placeholder.com/3000x1500'],
      bottomText: '',
    },
    takeaway: {
      topText:
        'At the outset of the project we didn’t have a clear mission or specific goals for the pickup experience.Without pre-existing insights, I partnered with our researcher Shruti to explore how Riders were getting around.',
      images: ['http://via.placeholder.com/3000x1500'],
      bottomText: 'Batman',
    },
  },
];

export default portfolioItems;
