const prevEvents = [
  {
    id: 6,
    title: "PARADOX 2K23",
    image_url:
      "https://res.cloudinary.com/dwwajleyo/image/upload/v1711589992/posters_and_assets/paradox_2k23_bh5zgb.jpg",
    registeration_link: null,
    start_date: "2023-04-15T09:30:00Z", // 2024-04-01T09:30:00Z
    end_date: "2023-04-16T22:00:00Z",
    type: "event",
    description:
      "Paradox is a globally acclaimed event that is organized before as well as during NIMBUS by Team.EXE the departmental team of Computer Science and Engineering of NIT Hamirpur. It is an online level based game where the participant looks for a word that is signified by an image/set of images. Hints are provided periodically to help with the process of thinking in the right direction. It has received more than 20,000 downloads from all over the world with 5000 downloads from US and UK.",
    description_link: null,
    isReversed: true,
    isFirstCard: true,
    year: 2023,
  },

  {
    id: 7,
    title: "GAME OF CODES",
    image_url:
      "https://res.cloudinary.com/dwwajleyo/image/upload/v1711589992/posters_and_assets/game_of_codes_u14t1y.jpg",
    registeration_link: null,
    start_date: "2023-04-15T14:00:00Z",
    end_date: "2023-04-15T16:00:00Z",
    type: "event",
    description:
      "Game Of Codes is an online competitive programming contest. This event consists of interesting coding problems which coders love to solve. It's a short coding contest of two and a half hours. Students from NITH, as well as from other institutions, are welcome to participate and win amazing prizes!!",
    description_link: null,
    isReversed: false,
    isFirstCard: false,
    year: 2023,
  },
  {
    id: 8,
    title: "TRADE AND CODE",
    image_url:
      "https://res.cloudinary.com/dwwajleyo/image/upload/v1711589992/posters_and_assets/trade_and_code_ykvzaj.jpg",
    registeration_link: null,
    start_date: "2023-04-15T21:30:00Z",
    end_date: "2023-04-15T23:00:00Z",
    type: "event",
    description:
      "Trade and Code brings a fun amalgamation of economics and coding. It is an event based on real-time trading and problem solving while managing your balance. Each team will be provided with a certain amount of virtual currency. They have to buy various components and libraries required to write a code (eg: loops, if-else statements, string library, classes, etc). The best coders and traders win exciting prizes!",
    description_link: null,
    isReversed: true,
    isFirstCard: false,
    year: 2023,
  },
];

const prevWorkshops = [
  {
    id: 9,
    title: "BUG HUNTING WORKSHOP",
    type: "workshop",
    image_url:
      "https://res.cloudinary.com/dwwajleyo/image/upload/v1711589993/posters_and_assets/bug_hunting_k612tn.jpg",
    start_date: "2023-03-19T10:00:00Z",

    end_date: "2023-03-19T13:00:00Z",

    type: "workshop",
    description:
      "Through this workshop, participants acquired the fundamentals of security vulnerabilities, with a focus on web-specific flaws, and got hands-on practice detecting bugs on real platforms.The information-gathering phase of ethical hacking, which can span anything from network infrastructure to employee contact information, was explained to the participants.",
    description_link: null,
    isReversed: true,
    isFirstCard: false,
    year: 2023,
  },
  {
    id: 10,
    title: "NFT CREATION WORKSHOP",
    type: "workshop",
    image_url:
      "https://res.cloudinary.com/dwwajleyo/image/upload/v1711589991/posters_and_assets/Nft_creation_sd6jmf.jpg",
    registeration_link: null,
    start_date: "2023-02-05T16:00:00Z",
    end_date: "2023-02-05T18:00:00Z",
    type: "workshop",
    description:
      "The goal of this session was to provide the students with a foundational understanding of blockchain technology and the decentralized technology world, as well as hands-on experience building NFTs on the Polygon network and putting their data on IPFS. The workshop covered the Polygon network, its characteristics, and how to deploy a smart contract to it in addition to smart contracts, their structure, and the many components that make up a smart contract",
    description_link: null,
    isReversed: false,
    isFirstCard: false,
    year: 2023,
  },
];


const currEvents = 
  [
    {
      description:
        "Paradox is a globally acclaimed event that is organized before as well as during NIMBUS by Team.EXE the departmental team of Computer Science and Engineering of NIT Hamirpur. It is an online level based game where the participant looks for a word that is signified by an image/set of images. Hints are provided periodically to help with the process of thinking in the right direction. It has received more than 20,000 downloads from all over the world with 5000 downloads from US and UK.",
      description_link:
        "https://res.cloudinary.com/dwwajleyo/image/upload/v1713005798/posters_and_assets/paradox-2_lvrbka.jpg",
      end_date: "2024-04-14T23:59:59",
      image_url:
        "https://res.cloudinary.com/dwwajleyo/image/upload/v1713005699/posters_and_assets/paaradoxx_oqphyo.jpg",
      isReversed: false,
      isUpcoming: true,
      key: "1",
      registeration_link: null,
      start_date: "2024-04-13T17:00:00",
      title: "Paradox 2k24",
      type: "event",
      year: 2024,
    },
    {
      description:
        "Coding Competition is an online competitive programming contest. This event presents a series of intriguing coding challenges that are sure to captivate any programmer's interest. This event will be conducted on codeforces platform and will be open for everyone. However, the event will be on site and conducted in online mode. Participants stand a chance to win exciting rewards! So, come and immerse yourself in this thrilling coding adventure. See the description to know about the rules of the Event.",
      description_link: null,
      end_date: "2024-04-11T19:20:00",
      image_url:
        "https://res.cloudinary.com/dwwajleyo/image/upload/v1712601007/posters_and_assets/coding-comp_ryy2zo.jpg",
      isReversed: true,
      isUpcoming: true,
      key: "3",
      leaderboardLink:
        "https://codeforces.com/contestInvitation/fd3e2d92cd3cf5d21e54d2731b1e867f9f1d54a5",
      registeration_link: null,
      start_date: "2024-04-11T17:05:00",
      title: "Coding Competition",
      type: "event",
      year: 2024,
    },
];
const currWorkshops = [
  {
    description:
      "This  backend workshop is a training session Which focused on the development and maintenance of the server-side of software applications. This workshop typically cover topics such as Backend technologies like node js , databases, API integration, security, and performance optimization. Participants learn how to create efficient and scalable backend systems to support frontend applications. By attending this backend workshop, developers can enhance their technical skills and stay up-to-date with the latest trends in backend development.",
    description_link: false,
    end_date: "2024-02-15T17:00:00",
    image_url:
      "https://res.cloudinary.com/dwwajleyo/image/upload/v1711589992/posters_and_assets/backend_workshop_ulo5ql.jpg",
    isGuest: true,
    isReversed: false,
    isUpcoming: false,
    key: "5",
    registeration_link: false,
    start_date: "2024-02-14T23:27:20",
    title: "Introduction to Backend",
    type: "workshop",
    year: 2024,
  },
];
export { prevEvents, prevWorkshops, currEvents, currWorkshops };
