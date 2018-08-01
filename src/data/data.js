import BeelineLogo from '../assets/Beeline/Beeline-PortfolioItemLogoA.svg';
import ecodialerLogo from '../assets/ecodialer/ecodialer-PortfolioItemLogoA.svg';
import EndlessAisleLogo from '../assets/EndlessAisle/Endless-Aisle-PortfolioItemLogoA.svg';
import WowVRLogo from '../assets/WowVR/WowVR-PortfolioItemLogoA.svg';
import PrequelMemesLogo from '../assets/PrequelMemes/PrequelMemes-PortfolioItemLogoA.svg';
import PatioBuilderLogo from '../assets/PatioBuilder/PatioBuilder-PortfolioItemLogoA.svg';
import PortfolioLogo from '../assets/Portfolio/Portfolio-PortfolioItemLogoA.svg';

//PM
import PrequelMemesKickOffImage1 from '../assets/PrequelMemes/PrequelMemes-KickOffImage1.svg';
import PrequelMemesKickOffImage2 from '../assets/PrequelMemes/PrequelMemes-KickOffImage2.svg';
import PrequelMemesDesignImage1 from '../assets/PrequelMemes/PrequelMemes-DesignImage2.svg';
import PrequelMemesDesignImage2 from '../assets/PrequelMemes/PrequelMemes-DesignImage1.svg';
import PrequelMemesDesignImage3 from '../assets/PrequelMemes/PrequelMemes-DesignImage3.png';
import PrequelMemesAnalyticsImage1 from '../assets/PrequelMemes/PrequelMemes-Analytics1.svg';

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

const portfolioItems = [
  {
    key: 0,
    title: 'RQ',
    description: 'Evolving customer follow-ups',
    image: RqLogo,
    link: 'RQ',
    headerBlurb: {
      blurbTitle: 'RQ',
      blurb:
        'Customer follow-ups are an integral component of doing business, but does anyone answer phone calls anymore? I was part of an ambitious project to redesign and evolve the customer follow-up experiece for the largest POS system in the wireless market.',
    },
    projectInfo: {
      client: 'iQmetrix',
      objective:
        'iQmetrix aimed to transform the customer follow-up experience with their enterprise POS platform RQ. An agile team was tasked to identify pain points and design a solution to increase the success of customer follow-ups for their clients.',
      timeline: '6 months',
      team: ['Product Manager', 'UX Designer (← me)', 'UX Researcher', '3-5 Developers', 'Business Analyst'],
      role:
        'I led the design of the customer follow-up experience between April 2017 and October 2017 until the project entered the detailed visual design phase.',
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
      images: [{ image: RqDesignImage1, caption: '' }, { image: RqDesignImage2, caption: '' }],
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
    key: 1,
    title: 'Endless Aisle',
    description: 'This is endless aisle',
    image: EndlessAisleLogo,
    link: 'EndlessAisle',
    headerBlurb: {
      blurbTitle: 'Endless Aisle',
      blurb:
        'In 2012, tapping a button to Uber across the city felt magical. By the start of 2016, this magic receded to a slew of disparate features that made the experience slow and complex to use. I was part of an ambitious project to redesign the Uber pickup experience for the fastest growing startup in history.',
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
      blurb:
        'In 2012, tapping a button to Uber across the city felt magical. By the start of 2016, this magic receded to a slew of disparate features that made the experience slow and complex to use. I was part of an ambitious project to redesign the Uber pickup experience for the fastest growing startup in history.',
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
      blurb:
        'In 2012, tapping a button to Uber across the city felt magical. By the start of 2016, this magic receded to a slew of disparate features that made the experience slow and complex to use. I was part of an ambitious project to redesign the Uber pickup experience for the fastest growing startup in history.',
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
      blurb:
        'A long time ago, in a subreddit far far away… The lack of original content being delivered to the outlying Star Wars communities has users in turmoil. Hoping to resolve the matter, I set out to create the ultimate tool to encourage content creation and bring balance to the subreddit of /r/PrequelMemes.',
    },
    projectInfo: {
      client: 'Fun :)',
      objective:
        'Aimed to simplify the creation process for making hilarious Star Wars memes. A small team of colleagues set out to create an web application that would enable Star Wars fans to easily create wacky concoctions and share them with the world.',
      timeline: '6 months',
      team: ['2 UX Designers (← me)', 'Front End Developer', 'Back End Developer (← me)', 'Build Tools (← me)'],
      role: 'I created the front end design, back end services, and build tools for the project.',
    },
    kickOff: {
      topText:
        'Before design started on the project needed consider some of the different use cases for the application. The best resource for determining this was to reach out directly to the reddit community for their input. Posts were made over a period of a few days investigating some of the pain points users had while creating content, I also investigated into some of the reasons why users might not create images. Key problems and possible solutions were put onto stickies and organized.',
      images: [
        { image: PrequelMemesKickOffImage1, caption: '' },
        { image: PrequelMemesKickOffImage2, caption: 'Fig.1 Research' },
      ],
      bottomText: '',
    },
    discovery: [
      {
        title: '1. IMAGE TROUBLE',
        blurb:
          'Users currently use Google image search to find movie screenshots. However, desired screenshots are often not found with this method or are unusable due to poor image quality.',
        image: RqDiscoveryImage1,
      },
      {
        title: '2. CONSUMERS',
        blurb:
          'Some users don’t actually wish to create content. Instead, they prefer to only view the content, laugh and sometimes share it within their social groups.',
        image: RqDiscoveryImage2,
      },
      {
        title: '3. UNDERSTANDING',
        blurb:
          'Creating content requires the skill of using a design application such as GIMP, this skill is a blocker for the users who want to create but lack the knowledge to.',
        image: RqDiscoveryImage3,
      },
      {
        title: '4. MOBILE',
        blurb:
          'Majority of users primarily use their mobile devices and lack the necessary apps for image editing and others just find it too frustrating to do on their mobile devices.',
        image: RqDiscoveryImage4,
      },
    ],
    design: {
      figma: 'http://www.google.ca/',
      topText:
        'Now that key problems had been identified it was now clear the perfect solution would be an image library that is easy to navigate, it had to have a good selection of high quality images, it would to allow users to perform basic editing such as adding text and combining images and most importantly it needed to be designed for mobile users first. A user journey map was also created to identify any addtional opportunites for improvement.',
      images: [
        { image: PrequelMemesDesignImage2, caption: '' },
        { image: PrequelMemesDesignImage1, caption: '' },
        { image: PrequelMemesDesignImage3, caption: 'Final User Flow' },
      ],
      bottomText:
        'The navigation of the library would be very important to the success of the application, with a large image library consisting of thousands of images across three movies it had to be easy to navigate. Wireframes were created and iterated upon to ensure the users would have a navigation style that would work with all of the sites different use cases.',
    },
    testing: {
      topText:
        'With a completed MVP we wanted to get real life data as soon as possible to validate our product design. Several iQmetrix clients were selected to participate in beta testing at 40 store locations across Canada and USA. The store staff we trained to think of the application as a customer relationship tool and not a marketing tool. This mindset would be crucial to growing relationships with customers through two way messaging. Staff were fast to adapt the application into their routines and began having conversations with customers on the very first day.',
      images: [{ image: PrequelMemesAnalyticsImage1, caption: '' }],
      bottomText: '',
    },
    takeaway: {
      topText:
        'During the test period the number of customer follow-ups completed via SMS were greatly more than the number voice call follow-ups. In addition to more follow-ups being completed, 45% of SMS follow-ups resulted in a conversation with the customer while voice calls only managed to generate a conversation 7% of the time. We discovered that as the reply ratio increased, the number of booked appointments also increased.',
      images: [{ image: RqTakeawayImage1, caption: '' }],
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
      blurb:
        'In 2012, tapping a button to Uber across the city felt magical. By the start of 2016, this magic receded to a slew of disparate features that made the experience slow and complex to use. I was part of an ambitious project to redesign the Uber pickup experience for the fastest growing startup in history.',
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
    description: 'This is Patio Builder',
    image: PatioBuilderLogo,
    link: 'PatioBuilder',
    headerBlurb: {
      blurbTitle: 'Beeline the man is bee',
      blurb:
        'In 2012, tapping a button to Uber across the city felt magical. By the start of 2016, this magic receded to a slew of disparate features that made the experience slow and complex to use. I was part of an ambitious project to redesign the Uber pickup experience for the fastest growing startup in history.',
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
    key: 7,
    title: 'Portfolio',
    description: 'This portfolio',
    image: PortfolioLogo,
    link: 'PatioBuilder',
    headerBlurb: {
      blurbTitle: 'Beeline the man is bee',
      blurb:
        'In 2012, tapping a button to Uber across the city felt magical. By the start of 2016, this magic receded to a slew of disparate features that made the experience slow and complex to use. I was part of an ambitious project to redesign the Uber pickup experience for the fastest growing startup in history.',
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
