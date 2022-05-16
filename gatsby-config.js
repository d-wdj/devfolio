module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://d-wdj.com/`,
    // Your Name
    name: 'Dimitri Wirjowerdojo',
    // Main Site Title
    title: `Dimitri Wirjowerdojo | Bioinformatician`,
    // Description that goes under your name in main bio
    description: `Bioinformatics — High-Throughput Biology — Nanotechnology`,
    // Optional: Twitter account handle
    // author: `@rfitzio`,
    // Optional: Github account URL
    github: `https://github.com/d-wdj/`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/d-wdj/`,
    // Content of the About Me section
    about: `Hey! I am an interdiscplinary scientist in the making. From nanotechnology to high-throughput molecular biology and bioinformatics, I am interested in many things. I am inclined to a research-driven career, combining wet-lab, engineering, and computational approaches for understanding why one would think of puppies when specifically asked to not to think about them (other adorable animals are just as applicable).`,
    experience: [
      {
        name: 'BC Platforms (Singapore)',
        subtitle: 'Bioinformatician - APAC Customer Success | 2021 Sep - Present',
        description: 'On-boarding and assisting customers with BC Platforms lines of products. Pipeline building(DNAseq, RNAseq). Application installation on on-prem VM or cloud (Google Cloud, Microsoft Azure).',
        link: 'https://www.bcplatforms.com/',
      },
      {
        name: 'PT Prodia Widyahusada Tbk (Jakarta)',
        subtitle: 'Bioinformatics Scientist | Molecular Predictive and Diagnostics Lab | 2019 Feb - 2021 Sep',
        description: 'Pipeline investigation, development, and validation for high throughput molecular biology testing (Prodia Genomics), including DNA microarray for polygenic risk score disease risk estimation and NGS-based non-invasive prenatal testing of chromosomal aneuploidies.',
        link: 'https://www.prodia.co.id/en',
      },
      // {
      //   name: 'Hooli',
      //   description: 'Full-Stack Developer, May 2015 - December 2017',
      //   link: 'https://github.com/RyanFitzgerald/devfolio',
      // },
    ],
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Evaluation of Hypoxia-induced Astrocytic Commitment of Neuroepithelial Stem Cells',
        description:
        'Master\'s thesis project undertaken at the in vitro neural systems lab https://www.herlandlab.com/',
        link: 'https://github.com/d-wdj/thesis/blob/master/Abstract.md',
      },
      {
        name: 'Transcriptomic Analysis of Hepatocellular Carcinoma Progression',
        description:
        'A group project with the goal of investigating differentially expressed genes across 4 disease state progressions. Conducted at KTH Royal Institute of Technology',
        link: 'https://github.com/d-wdj/BB2491/wiki',
      },
      {
        name: 'Protein Secondary Structure Prediction using Supervised Machine Learning Methods',
        description:
        'Individual research project comparing support vector machine, decision tree, and random forest methods. Undertaken at Stockholm University.',
        link: 'https://github.com/d-wdj/KB8024',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Tech Stack',
        description:
          'Python, LaTeX, Bash, R, Git, Docker, Windows, macOS, Linux, Google Cloud, Microsoft Azure',
      },
      {
        name: 'Computational & Analytics',
        description: 'DNA genotyping, NGS analysis (DNAseq, RNAseq, long-read sequencing), Ligand docking',
      },
      {
        name: 'Laboratory Skills',
        description:
          'Cell culture (CHO, HEK293, AF-22 ltNES, U87), Immunocytochemistry, RNA extraction, RT-qPCR, Droplet microfluidics, gold nanoparticle synthesis',
      },
      {
        name: 'Topics of Interest',
        description:
          'Neuroscience, Connectomics, Neurodegeneration, Microfluidics, Material Science, Computational Biology, Bioinformatics, Machine Learning, Nanotechnology',
      },
      {
        name: 'Languages',
        description:
          'Indonesian, English, Swedish',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
