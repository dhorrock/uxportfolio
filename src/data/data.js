import BeelineLogo from '../assets/Beeline/Beeline-PortfolioItemLogo.svg';
import ecodialerLogo from '../assets/ecodialer/ecodialer-PortfolioItemLogo.svg';
import EndlessAisleLogo from '../assets/EndlessAisle/Endless-Aisle-PortfolioItemLogo.svg';
//RQ CONTENT
import RqLogo from '../assets/Rq/Rq-PortfolioItemLogo.svg';
import RqKickOffImage1 from '../assets/Rq/Rq-KickOffImage1.png';
import RqKickOffImage2 from '../assets/Rq/Rq-KickOffImage2.png';
import RqKickOffImage3 from '../assets/Rq/Rq-KickOffImage3.png';
import RqDiscoveryImage1 from '../assets/Rq/Rq-DiscoveryImage1.svg';
import RqDiscoveryImage2 from '../assets/Rq/Rq-DiscoveryImage2.svg';
import RqDiscoveryImage3 from '../assets/Rq/Rq-DiscoveryImage3.svg';
import RqDiscoveryImage4 from '../assets/Rq/Rq-DiscoveryImage4.svg';

const portfolioItems = [
  {
    key: 0,
    title: 'RQ',
    description: 'Evolving customer followup calls.',
    image: RqLogo,
    link: 'RQ',
    headerBlurb: {
      blurbTitle: 'Ring..ring?',
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
        "At the outset of the project we didn't know much about the specific goals of a successful customer follow-up experience. Without pre-existing insights, I partnered with our UX researcher to explore what customers thought about follow-ups from retailers. Together we conducted a Google Design sprint over a period of five days to answer critical business questions through design, prototyping and testing ideas with customers. ",
      images: [
        { image: RqKickOffImage1, caption: 'Fig.1 Customer Follow-up Research' },
        { image: RqKickOffImage2, caption: 'Fig.2 Storyboarding' },
        { image: RqKickOffImage3, caption: 'Fig.3 Key Learnings' },
      ],
      bottomText: '',
    },
    discovery: [
      {
        title: 'Agitation',
        blurb:
          'Phone calls were not a method of communication that our testers positively associate with brand interaction. Instead, they viewed unsolicited business calls to be nothing more than pestering from telemarketers. It was not so much that the testers felt dislike for the phone. They still spent time talking, but they prefer to do it with their family and close friends.',
        image: RqDiscoveryImage1,
      },
      {
        title: 'Remembering',
        blurb:
          'Phone conversations can be difficult to recall. “Was the address 113 or 131?” Hours after a phone conversation, details like these tend to slip away. But with SMS, everyone has a readily retrievable transcript of the conversation. An individual can go back and see that the address is 113. There’s less pressure on the recipient to remember everything.',
        image: RqDiscoveryImage2,
      },
      {
        title: 'Stress',
        blurb:
          'Text messages are less stressful than phone calls. Phone calls may require the person to come up with answers on the spot or remember specific questions he or she wanted to ask. By contrast, a text message gives the recipient time to think and respond on his or her own time. It’s a more organized experience that involves less overall pressure.',
        image: RqDiscoveryImage3,
      },
      {
        title: 'Sensitive information',
        blurb:
          'Sharing personal or sensitive information on a phone call is a concern. Finding the privacy to share sensitive information also isn’t always possible. But with SMS, an individual is able to silently send this information without announcing it the world around them.',
        image: RqDiscoveryImage4,
      },
    ],
    design: {
      figma: 'http://www.google.ca/',
      topText: 'Before I could jump into designing, it was important to define ',
      images: [{ image: 'http://via.placeholder.com/3000x1500', caption: 'caption' }],
      bottomText: '',
    },
    testing: {
      topText:
        'This text has not been completed yet This text has not been completed yet This text has not been completed yet This text has not been completed yet This text has not been completed yet This text has not been completed yet',
      images: [{ image: 'http://via.placeholder.com/3000x1500', caption: 'caption' }],
      bottomText: '',
    },
    takeaway: {
      topText:
        'This text has not been completed yet This text has not been completed yet This text has not been completed yet This text has not been completed yet This text has not been completed yet This text has not been completed yet',
      images: [],
      bottomText: 'Batman',
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
    title: 'Prequel memes',
    description: 'This is Prequel memes',
    image: '',
    link: 'PrequelMemes',
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
    key: 5,
    title: 'WowVR',
    description: 'This is WowVR',
    image: '',
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
    image: '',
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
