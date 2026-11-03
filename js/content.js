/* content.js — portfolio copy taken from Sweta Bisen-Dec25.pdf. */

window.PORTFOLIO = {
  name: "Sweta Bisen",
  role: "Data Scientist",
  tagline: "I build machine learning and generative AI systems for healthcare, pharma, and finance.",
  about: [
    "I’m a data scientist with three years of experience in machine learning, deep learning, NLP, and generative AI. I design and deploy scalable systems on Azure and AWS, including large language models, retrieval-augmented generation, and agentic workflows with LangChain, LangFlow, CrewAI, and AutoGen.",
    "The production work has been in healthcare, pharma, and finance, where the goal is better automation, compliance, and decision-making. Day to day that means Python, PyTorch, TensorFlow, scikit-learn, PySpark, and FastAPI, plus dashboards in Streamlit and Power BI."
  ],
  location: "Pune",
  phone: "+91 7219668301",
  phoneHref: "tel:+917219668301",
  education: [
    {
      title: "M.Sc. in Chemistry",
      detail: "Rashtrasant Tukadoji Maharaj Nagpur University"
    },
    {
      title: "B.Sc. in PCM",
      detail: "Rashtrasant Tukadoji Maharaj Nagpur University"
    }
  ],
  skills: [
    { group: "Generative AI", items: ["LLMs", "RAG", "LangChain", "LangFlow", "CrewAI", "AutoGen"] },
    { group: "Machine learning", items: ["scikit-learn", "PyTorch", "TensorFlow", "XGBoost", "NLP"] },
    { group: "Cloud", items: ["Azure OpenAI", "Azure AI Search", "AWS", "SageMaker", "Bedrock"] },
    { group: "Deployment", items: ["Docker", "Kubernetes", "FastAPI", "Azure ML", "CI/CD"] }
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
        "Deliver Streamlit dashboards and Power BI reports for stakeholders."
      ],
      tags: ["Python", "Azure", "AWS", "LangChain", "PyTorch", "TensorFlow", "RAG", "FastAPI"]
    }
  ],
  projects: [
    {
      title: "Agentic RAG for Financial Analysis",
      summary: "Cut review time by 70%, with 93% task success. Analysts had been gathering and validating data across systems by hand. Built a five-agent system — retrieval, planning, reasoning, execution, and delivery — with LangChain and LangFlow on Amazon EKS, using hybrid search in Amazon OpenSearch.",
      tags: ["AWS", "LangChain", "LangFlow", "OpenSearch", "EKS"]
    },
    {
      title: "PharmaRAG",
      summary: "Cut drug-information lookup time by 70%, with controls aligned to GxP, GVP, and HIPAA. Pharmacovigilance teams had been searching unstructured drug data by hand. Built an Azure RAG chatbot over FDA SPL and RxNorm with Document Intelligence, Azure AI Search, and GPT-4o, plus a Streamlit UI and FastAPI.",
      tags: ["Azure OpenAI", "Azure AI Search", "FastAPI", "Streamlit"]
    },
    {
      title: "Healthcare MCP Server",
      summary: "Made drug–drug interaction lookups 70% faster. Clinicians had been waiting on structured healthcare data. Built a Model Context Protocol server that connects models to RxNorm, FAERS, ClinicalTrials.gov, and FHIR, with APIs for interactions, trial matching, and adverse-event summaries.",
      tags: ["Azure OpenAI", "FHIR", "MCP"]
    },
    {
      title: "Pharmacy Ops Assistant",
      summary: "Cut over-the-counter recommendation time from five minutes to about 30 seconds. Manual evaluation had been slowing patient service. Automated recommendations and copay estimates with LangChain and Azure OpenAI, checked contraindications through OpenFDA, and normalized drugs with RxNorm.",
      tags: ["LangChain", "Azure OpenAI", "OpenFDA", "RxNorm"]
    },
    {
      title: "Drug Interaction Checker",
      summary: "Prevented 18% of potential adverse drug events in a telemedicine pilot. Providers had no automated interaction checks. Built a real-time service against FHIR health records and DrugBank, with severity-ranked alerts and FDA citations.",
      tags: ["Azure", "FHIR", "DrugBank"]
    }
  ],
  contact: [
    { label: "Email", icon: "email", href: "mailto:swetabisen09@gmail.com" },
    { label: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/in/swetabisen" }
  ],
  resume: {
    label: "View résumé",
    href: "Sweta%20Bisen-Dec25.pdf"
  }
};
