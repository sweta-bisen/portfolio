/* data.js — portfolio copy taken from Sweta Bisen-Dec25.pdf. */

export const portfolio = {
  name: "Sweta Bisen",
  role: "Data Scientist",
  email: "swetabisen09@gmail.com",
  location: "Pune",
  linkedin: "https://www.linkedin.com/in/swetabisen",
  resume: "/resume.pdf",
  portrait: "/portrait.jpg",
  headline: "Machine learning and generative AI",
  headlineAccent: "for healthcare, pharma, and finance.",
  stats: [
    { value: 3, suffix: "+", label: "Years in production" },
    { value: 5, suffix: "", label: "Systems shipped" },
    { value: 40, suffix: "%", label: "Less manual retraining" },
  ],
  /* The five agents named in the financial-analysis project. */
  workflow: {
    title: "Financial analysis system",
    summary: "Five agents, one review path.",
    steps: [
      { name: "Retrieve", detail: "Retrieval across source systems." },
      { name: "Plan", detail: "Planning the analysis." },
      { name: "Reason", detail: "Reasoning over what was retrieved." },
      { name: "Execute", detail: "Execution of the analysis." },
      { name: "Deliver", detail: "Delivery for review." },
    ],
  },
  about: [
    "I’m a data scientist with three years of experience in machine learning, deep learning, NLP, and generative AI. I design and deploy scalable systems on Azure and AWS, including large language models, retrieval-augmented generation, and agentic workflows with LangChain, LangFlow, CrewAI, and AutoGen.",
    "The production work has been in healthcare, pharma, and finance, where the goal is better automation, compliance, and decision-making. Day to day that means Python, PyTorch, TensorFlow, scikit-learn, PySpark, and FastAPI, plus dashboards in Streamlit and Power BI.",
  ],
  education: [
    {
      title: "M.Sc. in Chemistry",
      detail: "Rashtrasant Tukadoji Maharaj Nagpur University",
    },
    {
      title: "B.Sc. in PCM",
      detail: "Rashtrasant Tukadoji Maharaj Nagpur University",
    },
  ],
  skills: [
    { group: "Generative AI", items: ["LLMs", "RAG", "LangChain", "LangFlow", "CrewAI", "AutoGen"] },
    { group: "Machine Learning", items: ["scikit-learn", "PyTorch", "TensorFlow", "XGBoost", "NLP"] },
    { group: "Cloud & Data", items: ["Azure OpenAI", "Azure AI Search", "AWS", "SageMaker", "Bedrock"] },
    { group: "Deployment", items: ["Docker", "Kubernetes", "FastAPI", "Azure ML", "CI/CD"] },
  ],
  experience: [
    {
      dates: "Oct 2022 — Present",
      role: "Data Scientist",
      org: "Bluegem IT Solution Pvt.\u00a0Ltd.",
      points: [
        "Cut manual retraining work by 40% with automated deployment pipelines.",
        "Design and deploy models for regression, classification, and clustering with scikit-learn, TensorFlow, and PyTorch.",
        "Build RAG pipelines on Azure OpenAI, Azure AI Search, and FAISS, and agentic systems with LangChain and LangFlow.",
        "Ship ETL in PySpark and Apache Airflow, and applications with Docker, Kubernetes, FastAPI, and Azure ML.",
        "Deliver Streamlit dashboards and Power BI reports for stakeholders.",
      ],
    },
  ],
  projects: [
    {
      title: "Agentic RAG for Financial Analysis",
      result: "70% less review time · 93% task success",
      problem: "Analysts had been gathering and validating data across systems by hand.",
      built:
        "A five-agent system — retrieval, planning, reasoning, execution, and delivery — with LangChain and LangFlow on Amazon EKS, using hybrid search in Amazon OpenSearch.",
      tags: ["AWS", "LangChain", "LangFlow", "OpenSearch", "EKS"],
    },
    {
      title: "PharmaRAG",
      result: "70% faster drug-information lookup",
      problem: "Pharmacovigilance teams had been searching unstructured drug data by hand.",
      built:
        "An Azure RAG chatbot over FDA SPL and RxNorm with Document Intelligence, Azure AI Search, and GPT-4o, plus a Streamlit UI and FastAPI. Controls aligned to GxP, GVP, and HIPAA.",
      tags: ["Azure OpenAI", "Azure AI Search", "FastAPI", "Streamlit"],
    },
    {
      title: "Healthcare MCP Server",
      result: "70% faster interaction lookups",
      problem: "Clinicians had been waiting on structured healthcare data.",
      built:
        "A Model Context Protocol server that connects models to RxNorm, FAERS, ClinicalTrials.gov, and FHIR, with APIs for interactions, trial matching, and adverse-event summaries.",
      tags: ["Azure OpenAI", "FHIR", "MCP"],
    },
    {
      title: "Pharmacy Ops Assistant",
      result: "Recommendations from 5 minutes to about 30 seconds",
      problem: "Manual evaluation had been slowing patient service.",
      built:
        "Automated over-the-counter recommendations and copay estimates with LangChain and Azure OpenAI, checked contraindications through OpenFDA, and normalized drugs with RxNorm.",
      tags: ["LangChain", "Azure OpenAI", "OpenFDA", "RxNorm"],
    },
    {
      title: "Drug Interaction Checker",
      result: "18% of potential adverse events prevented in a pilot",
      problem: "Providers had no automated interaction checks.",
      built:
        "A real-time service against FHIR health records and DrugBank, with severity-ranked alerts and FDA citations, used in a telemedicine pilot.",
      tags: ["Azure", "FHIR", "DrugBank"],
    },
  ],
};

export const nav = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Stack" },
  { href: "#contact", label: "Contact" },
];
