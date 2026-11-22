import airbnbImg from '../assets/images/project_airbnb_prediction_1795347809835.jpg';
import fraudImg from '../assets/images/project_fraud_detection_1795347809507.jpg';
import carImg from '../assets/images/project_car_valuation_1795347808980.jpg';
import covidImg from '../assets/images/project_covid_analytics_1795347809481.jpg';

export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  badgeLabel: string;
  category: 'Machine Learning' | 'Data Analytics';
  summary: string;
  image: string;
  stack: string[];
  metrics: string[];
  overview: string;
  methodology: string[];
  githubUrl: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: 'Glowlogics Solutions' | 'Infosys Springboard' | 'IBM SkillsBuild' | 'Coursera Project Network';
  group: 'Infosys' | 'IBM' | 'Glowlogics & Coursera';
  issueDate: string;
  credentialNote: string;
  recipient: string;
  pdfUrl: string;
  downloadFilename: string;
  verifyUrl?: string;
}

export interface ResumeDocument {
  id: string;
  title: string;
  subtitle: string;
  focus: string;
  pdfUrl: string;
  previewImageUrl?: string;
  downloadFilename: string;
  highlights: string[];
}

export const PROFILE = {
  name: 'ANU M.',
  fullName: 'Anu Muthuraman',
  role: 'BCA STUDENT | ASPIRING DATA SCIENCE PROFESSIONAL',
  tagline: 'Turning data into insights and ideas into intelligent solutions.',
  portraitUrl: '/assets/aistudio/Professional_Cutout_Portrait_of_Indian_Woman_17ddf9cb.png',
  location: 'Bengaluru, Karnataka, India',
  email: 'anumuthuraman29@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/anum-2904-bcagraduate',
  githubUrl: 'https://github.com/anumuthuraman29-tech',
  primaryResumeUrl: '/assets/aistudio/Anu_M_RESUME_88f1a52e.pdf',
  primaryResumeFilename: 'Anu_M_Resume.pdf',
  heroSkillsLine: 'PYTHON  |  DATA SCIENCE  |  MACHINE LEARNING  |  GENERATIVE AI  |  DATA ANALYTICS',
  stats: [
    { value: '04+', label: 'PROJECTS COMPLETED' },
    { value: '01+', label: 'INTERNSHIP EXPERIENCE' },
    { value: '08+', label: 'CERTIFICATIONS' },
  ],
  education: {
    degree: 'BCA',
    fullDegree: 'Bachelor of Computer Applications (BCA)',
    college: 'RNS First Grade College (Autonomous), Bengaluru',
    cgpa: '9.04 / 10.0',
    semester: '5th Semester',
    graduation: 'April / May 2027',
  },
  languages: ['English', 'Kannada', 'Tamil'],
  aboutParagraphs: [
    'I am a final-year Bachelor of Computer Applications (BCA) student at RNS First Grade College (Autonomous), Bengaluru, maintaining a 9.04 / 10.0 CGPA with a focused commitment to Artificial Intelligence, Machine Learning, and Data Science.',
    'Through my Python & Data Science internship at Glowlogics Solutions and specialized coursework across Infosys Springboard, IBM SkillsBuild, and Coursera, I have built hands-on experience designing end-to-end preprocessing pipelines, handling imbalanced datasets with SMOTE, and benchmarking supervised and unsupervised learning models.',
    'Currently advancing my analytical practice with GenAI-assisted exploration, prompt engineering, and business storytelling through the Tata iQ Job Simulation, I aim to transform raw datasets into dependable, responsible, and measurable software solutions.',
  ],
};

export const WORK_PROCESS = [
  { step: '01', title: 'Discover', description: 'Understand problems & domain objectives' },
  { step: '02', title: 'Analyze', description: 'Explore data quality & distributions' },
  { step: '03', title: 'Develop', description: 'Build preprocessing & ML pipelines' },
  { step: '04', title: 'Evaluate', description: 'Validate results via Precision, Recall & RMSE' },
  { step: '05', title: 'Improve', description: 'Enhance performance & model robustness' },
];

export const SKILL_GROUPS = [
  {
    title: 'Programming & Core',
    items: ['Python', 'SQL', 'C', 'HTML / CSS / JavaScript', 'Linear Algebra', 'Probability & Statistics'],
  },
  {
    title: 'Machine Learning & Modeling',
    items: [
      'Scikit-learn',
      'LightGBM',
      'Naive Bayes',
      'Decision Trees',
      'Logistic Regression',
      'K-Means Clustering',
      'Regression Modeling',
      'TensorFlow & PyTorch (Basics)',
    ],
  },
  {
    title: 'Generative AI & NLP',
    items: [
      'OpenAI GPT Models',
      'Prompt Engineering',
      'Large Language Models (LLMs)',
      'AI-First Software Engineering',
      'Google AI Studio',
      'ChatGPT',
    ],
  },
  {
    title: 'Data Pipelines & Analytics',
    items: [
      'Pandas & NumPy',
      'Missing-value Imputation',
      'SMOTE (imbalanced-learn)',
      'StandardScaler & RobustScaler',
      'Matplotlib, Seaborn & Missingno',
      'Tableau & Microsoft Excel',
    ],
  },
  {
    title: 'Evaluation & Engineering Tools',
    items: [
      'Confusion Matrix',
      'Precision, Recall & F1-Score',
      'MAE, MSE, RMSE & R² Score',
      'ROC-AUC',
      'Git & GitHub',
      'VS Code',
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'airbnb-price-prediction',
    index: '01',
    title: 'AIRBNB PRICE PREDICTION',
    badgeLabel: 'Major Project',
    category: 'Machine Learning',
    summary: 'Predicting listing prices using LightGBM, Scikit-learn, and automated feature imputation.',
    image: airbnbImg,
    stack: ['Python', 'LightGBM', 'Scikit-learn', 'Pandas', 'Missingno'],
    metrics: ['RMSE', 'R² Score', 'Cross-Validation'],
    overview:
      'Formulated an end-to-end supervised regression system to predict Airbnb listing prices from heterogeneous property, location, and availability features. Designed an automated preprocessing workflow to resolve sparse fields and maintain prediction consistency.',
    methodology: [
      'Profiled dataset missingness with Missingno and implemented structured missing-value imputation.',
      'Applied categorical encoding and feature scaling routines prior to model training.',
      'Trained and benchmarked LightGBM and Scikit-learn regression models against RMSE and R² metrics.',
    ],
    githubUrl: 'https://github.com/anumuthuraman29-tech',
  },
  {
    id: 'credit-card-fraud-detection',
    index: '02',
    title: 'CREDIT CARD FRAUD DETECTION',
    badgeLabel: 'Classification Pipeline',
    category: 'Machine Learning',
    summary: 'Detecting fraudulent transactions with Naive Bayes, Decision Trees, Logistic Regression & SMOTE.',
    image: fraudImg,
    stack: ['Python', 'Scikit-learn', 'SMOTE', 'NumPy', 'Pandas'],
    metrics: ['Precision', 'Recall', 'F1-Score', 'ROC-AUC', 'Confusion Matrix'],
    overview:
      'Developed and compared supervised classification pipelines to identify fraudulent credit card transactions under severe real-world class imbalance, prioritizing high fraud recall without overwhelming false positives.',
    methodology: [
      'Addressed extreme minority-class skew using SMOTE (imbalanced-learn) resampling on training splits.',
      'Trained and benchmarked Naive Bayes, Decision Tree, and Logistic Regression classifiers.',
      'Evaluated detection trade-offs with Confusion Matrix, Precision, Recall, F1-Score, and ROC-AUC.',
    ],
    githubUrl: 'https://github.com/anumuthuraman29-tech',
  },
  {
    id: 'car-price-prediction',
    index: '03',
    title: 'CAR PRICE PREDICTION',
    badgeLabel: 'Regression Estimator',
    category: 'Machine Learning',
    summary: 'Estimating vehicle market valuations from multi-variate features using regression modeling.',
    image: carImg,
    stack: ['Python', 'Scikit-learn', 'Pandas', 'StandardScaler', 'RobustScaler'],
    metrics: ['MAE', 'MSE', 'RMSE', 'R² Score'],
    overview:
      'Built a multi-variate regression estimator to forecast vehicle market prices from structured automotive features while managing skewed numerical ranges and outliers.',
    methodology: [
      'Cleaned raw vehicle listings and engineered numeric and categorical encodings (Label/One-Hot).',
      'Normalized numerical attributes using StandardScaler and RobustScaler to suppress outlier distortion.',
      'Validated generalization accuracy across MAE, MSE, RMSE, and R² regression metrics.',
    ],
    githubUrl: 'https://github.com/anumuthuraman29-tech',
  },
  {
    id: 'covid-19-dataset-analysis',
    index: '04',
    title: 'COVID-19 DATASET ANALYSIS',
    badgeLabel: 'Exploratory Data Analysis',
    category: 'Data Analytics',
    summary: 'Academic exploratory data analysis surfacing epidemiological distributions and temporal trends.',
    image: covidImg,
    stack: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    metrics: ['Data Profiling', 'Trend Analysis', 'Visual Storytelling'],
    overview:
      'Executed a structured exploratory data analysis (EDA) study on COVID-19 dataset records to clean incomplete observations, aggregate key indicators, and visualize statistical trends clearly.',
    methodology: [
      'Audited schema integrity, nulls, and data types across multi-column epidemiological records.',
      'Computed comparative aggregations and summary statistics in Pandas and NumPy.',
      'Designed clear analytical plots in Matplotlib and Seaborn to communicate distribution insights.',
    ],
    githubUrl: 'https://github.com/anumuthuraman29-tech',
  },
];

export const INTERNSHIPS = [
  {
    id: 'glowlogics-intern',
    index: '01',
    role: 'Python & Data Science Intern',
    organization: 'Glowlogics Solutions',
    period: 'Nov 2024 – Nov 2025',
    credentialId: 'DS25-GL03-C080',
    certificatePdf: '/assets/aistudio/Data_Science_43d9aa10.pdf',
    highlights: [
      'Engineered scalable data processing pipelines and exploratory data analysis (EDA) workflows using Python, Pandas, NumPy, and Scikit-learn.',
      'Constructed data cleaning and transformation routines including missing-value imputation, outlier management, categorical encoding, and StandardScaler / RobustScaler normalization.',
      'Evaluated model performance using rigorous cross-validation and standard metrics (Precision, Recall, F1-Score, RMSE) to systematically optimize prediction accuracy.',
      'Maintained version control via Git/GitHub and authored technical documentation and model evaluation summaries.',
    ],
  },
  {
    id: 'tata-iq-simulation',
    index: '02',
    role: 'GenAI-Powered No-Code Analytics',
    organization: 'Tata iQ Job Simulation',
    period: 'In Progress (2026)',
    credentialId: 'Job Simulation Track',
    highlights: [
      'Practicing applied tasks simulating an AI transformation consultant delivering business-aligned analytics.',
      'Exploring GenAI-supported predictive modeling, data exploration, and structured data quality assessment.',
      'Building clear executive business storytelling, recommendation design, and responsible/fair automation frameworks.',
    ],
  },
];

export const CERTIFICATES: CertificateItem[] = [
  {
    id: 'glowlogics-ds',
    title: 'Advanced Certification in Data Science',
    issuer: 'Glowlogics Solutions',
    group: 'Glowlogics & Coursera',
    issueDate: '27 Nov 2025',
    credentialNote: 'Certificate ID: DS25-GL03-C080',
    recipient: 'Anu M',
    pdfUrl: '/assets/aistudio/Data_Science_43d9aa10.pdf',
    downloadFilename: 'Anu_M_Glowlogics_Data_Science_Certificate.pdf',
  },
  {
    id: 'infosys-gen-models',
    title: 'Generative Models for Developers',
    issuer: 'Infosys Springboard',
    group: 'Infosys',
    issueDate: '02 Feb 2025',
    credentialNote: 'Infosys Springboard Course Completion',
    recipient: 'ANU MUTHURAMAN',
    pdfUrl: '/assets/aistudio/Generative_models_for_developers_0531392f.pdf',
    downloadFilename: 'Anu_M_Infosys_Generative_Models_for_Developers.pdf',
    verifyUrl: 'https://verify.onwingspan.com',
  },
  {
    id: 'infosys-ai-first',
    title: 'AI-first Software Engineering',
    issuer: 'Infosys Springboard',
    group: 'Infosys',
    issueDate: '30 Jan 2025',
    credentialNote: 'Infosys Springboard Course Completion',
    recipient: 'ANU MUTHURAMAN',
    pdfUrl: '/assets/aistudio/AI-first_Software_Engineering_21304d53.pdf',
    downloadFilename: 'Anu_M_Infosys_AI_First_Software_Engineering.pdf',
    verifyUrl: 'https://verify.onwingspan.com',
  },
  {
    id: 'infosys-prompt-eng',
    title: 'Prompt Engineering',
    issuer: 'Infosys Springboard',
    group: 'Infosys',
    issueDate: '30 Jan 2025',
    credentialNote: 'Infosys Springboard Course Completion',
    recipient: 'ANU MUTHURAMAN',
    pdfUrl: '/assets/aistudio/Prompt_Engineering_fb894e3e.pdf',
    downloadFilename: 'Anu_M_Infosys_Prompt_Engineering.pdf',
    verifyUrl: 'https://verify.onwingspan.com',
  },
  {
    id: 'infosys-gpt',
    title: 'Introduction to OpenAI GPT Models',
    issuer: 'Infosys Springboard',
    group: 'Infosys',
    issueDate: '29 Jan 2025',
    credentialNote: 'Infosys Springboard Course Completion',
    recipient: 'ANU MUTHURAMAN',
    pdfUrl: '/assets/aistudio/Introduction_to_OpenAI_GPT_Models_24d0b223.pdf',
    downloadFilename: 'Anu_M_Infosys_OpenAI_GPT_Models.pdf',
    verifyUrl: 'https://verify.onwingspan.com',
  },
  {
    id: 'ibm-ai-literacy',
    title: 'AI Literacy',
    issuer: 'IBM SkillsBuild',
    group: 'IBM',
    issueDate: '30 Sep 2026',
    credentialNote: 'Credly Digital Credential',
    recipient: 'ANU M',
    pdfUrl: '/assets/aistudio/AILiteracy_a2b3db63.pdf',
    downloadFilename: 'Anu_M_IBM_AI_Literacy.pdf',
    verifyUrl: 'https://www.credly.com/go/PTXAmiQc',
  },
  {
    id: 'ibm-data-fundamentals',
    title: 'Data Fundamentals',
    issuer: 'IBM SkillsBuild',
    group: 'IBM',
    issueDate: '29 Sep 2026',
    credentialNote: 'Credly Digital Badge',
    recipient: 'ANU M',
    pdfUrl: '/assets/aistudio/Data_Fundamentals_f27a360e.pdf',
    downloadFilename: 'Anu_M_IBM_Data_Fundamentals.pdf',
    verifyUrl: 'https://www.credly.com/badges/146ee1d0-60d8-49cb-96e7-1a13600a741a',
  },
  {
    id: 'coursera-excel',
    title: 'Introduction to Data Analysis using Microsoft Excel',
    issuer: 'Coursera Project Network',
    group: 'Glowlogics & Coursera',
    issueDate: '13 Jun 2025',
    credentialNote: 'Project ID: QZ123S337X98',
    recipient: 'Anu M',
    pdfUrl: '/assets/aistudio/Coursera_QZ123S337X98_04fdbff4.pdf',
    downloadFilename: 'Anu_M_Coursera_Excel_Data_Analysis.pdf',
    verifyUrl: 'https://coursera.org/verify/QZ123S337X98',
  },
];

export const RESUME_DOCUMENTS: ResumeDocument[] = [
  {
    id: 'data-science-resume',
    title: 'Python & Data Science Intern Resume',
    subtitle: 'Primary Resume',
    focus: 'Data preprocessing, EDA workflows, academic ML prototypes & evaluation metrics.',
    pdfUrl: '/assets/aistudio/Anu_M_RESUME_88f1a52e.pdf',
    previewImageUrl: '/assets/previews/Anu_M_RESUME_88f1a52e.png',
    downloadFilename: 'Anu_M_Resume.pdf',
    highlights: [
      'CGPA: 9.04 / 10.0 · RNS First Grade College (Autonomous), Bengaluru',
      'Python & Data Science Intern — Glowlogics Solutions (DS25-GL03-C080)',
      'Academic Projects: Airbnb Price Prediction, Credit Card Fraud Detection, Car Price Prediction & COVID-19 Dataset Analysis',
    ],
  },
  {
    id: 'ai-ml-resume',
    title: 'AI & Machine Learning Engineer Resume',
    subtitle: 'ML & GenAI Edition',
    focus: 'Supervised/unsupervised ML, LightGBM, SMOTE pipelines, Infosys GenAI certs & Glowlogics internship.',
    pdfUrl: '/assets/aistudio/Anu_M_RESUME_AI_3b1b51e1.pdf',
    previewImageUrl: '/assets/previews/Anu_M_RESUME_AI_3b1b51e1.png',
    downloadFilename: 'Anu_M_AI_ML_Engineer_Resume.pdf',
    highlights: [
      'CGPA: 9.04 / 10.0 · RNS First Grade College (Autonomous)',
      'Python & Data Science Intern — Glowlogics Solutions (DS25-GL03-C080)',
      'Airbnb Price Prediction, Credit Card Fraud Classifier & Vehicle Valuation Estimator',
    ],
  },
  {
    id: 'genai-analytics-resume',
    title: 'GenAI-Powered Data Analytics Resume',
    subtitle: 'Analytics & BI Focus',
    focus: 'GenAI-assisted research, Tableau visualization, Tata iQ simulation & multilingual communication.',
    pdfUrl: '/assets/aistudio/Anu_M_GenAI_Data_Analytics_Resume_b61c6df6.pdf',
    downloadFilename: 'Anu_M_GenAI_Data_Analytics_Resume.pdf',
    highlights: [
      'Tata iQ GenAI-Powered No-Code Analytics Job Simulation',
      'Tools: Google AI Studio, ChatGPT, Tableau',
      'Languages: English, Kannada, Tamil',
    ],
  },
  {
    id: 'genai-cover-letter',
    title: 'GenAI Data Analytics Cover Letter',
    subtitle: 'Application Statement',
    focus: 'Personal statement on responsible AI, data storytelling, and analytical readiness.',
    pdfUrl: '/assets/aistudio/Anu_M_GenAI_Data_Analytics_Cover_Letter_2e1e2ea9.pdf',
    downloadFilename: 'Anu_M_GenAI_Data_Analytics_Cover_Letter.pdf',
    highlights: [
      'Articulates motivation for GenAI-supported predictive analytics',
      'Highlights commitment to fairness and responsible automation',
      'Final-year BCA graduation timeline: June 2027',
    ],
  },
];
