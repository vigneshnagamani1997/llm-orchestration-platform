# llm-orchestration-platform

> AI-powered GitHub repository intelligence platform — semantic code search, AST-based analysis, RAG pipelines, and multi-agent orchestration. Runs fully local with Ollama and ChromaDB.

---

## What This Does

Most code search tools match keywords. This platform understands your codebase semantically — you ask questions in plain English, and it retrieves relevant code, explains architecture decisions, and orchestrates multiple AI agents to reason across your entire repository.

Built for engineers who want to query large codebases the way they'd talk to a senior teammate who's read every file.

---

## Architecture

```
┌─────────────────────────────────────────────────────────┐
│                     React Frontend                       │
│              (Chat UI + Search Interface)                │
└──────────────────────┬──────────────────────────────────┘
                       │ REST API
┌──────────────────────▼──────────────────────────────────┐
│                   Node.js Backend                        │
│         (API Gateway + Agent Orchestrator)               │
└────┬──────────────────┬──────────────────────┬──────────┘
     │                  │                      │
┌────▼─────┐   ┌────────▼────────┐   ┌────────▼────────┐
│  Ollama  │   │    ChromaDB     │   │   AST Parser    │
│  (LLM)   │   │ (Vector Store)  │   │ (Code Analysis) │
└──────────┘   └─────────────────┘   └─────────────────┘
```

**Data flow:**
1. Repository is ingested → AST parser extracts functions, classes, dependencies, and call graphs
2. Code chunks are embedded via Ollama and stored in ChromaDB
3. User query → semantic search retrieves relevant chunks
4. RAG pipeline constructs context-aware prompt
5. Multi-agent layer routes to specialized agents (code explainer, dependency analyst, search agent)
6. Response streamed back to the React UI

---

## Key Features

- **AST-based code analysis** — parses TypeScript/JavaScript syntax trees to extract functions, classes, imports, and inter-module relationships (not just raw text chunking)
- **Semantic search** — natural language queries against your entire codebase using vector similarity
- **RAG pipeline** — retrieval-augmented generation grounded in actual repo context, not hallucinated answers
- **Multi-agent orchestration** — specialized agents for different query types (architecture questions, function lookup, dependency tracing, autonomous code tasks)
- **Fully local** — runs on Ollama; no data leaves your machine
- **React frontend** — clean chat interface with source file references and code highlighting

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React, TypeScript |
| Backend | Node.js, TypeScript |
| LLM Runtime | Ollama |
| Vector Database | ChromaDB |
| Code Parsing | AST (TypeScript Compiler API) |
| Agent Framework | Custom multi-agent orchestration |
| Embeddings | Ollama embedding models |

---

## Getting Started

### Prerequisites

- Node.js 18+
- Python 3.10+
- [Ollama](https://ollama.ai) installed and running
- ChromaDB

### 1. Install Ollama and pull a model

```bash
# Install Ollama (macOS/Linux)
curl -fsSL https://ollama.ai/install.sh | sh

# Pull a model (llama3 recommended)
ollama pull llama3
ollama pull nomic-embed-text   # for embeddings
```

### 2. Install ChromaDB

```bash
pip install chromadb
```

### 3. Clone and install dependencies

```bash
git clone https://github.com/vigneshnagamani1997/llm-orchestration-platform.git
cd llm-orchestration-platform

# Backend
npm install

# Frontend
cd client && npm install
```

### 4. Configure environment

```bash
cp .env.example .env
```

```env
OLLAMA_BASE_URL=http://localhost:11434
OLLAMA_MODEL=llama3
CHROMA_HOST=localhost
CHROMA_PORT=8000
EMBED_MODEL=nomic-embed-text
PORT=3001
```

### 5. Start ChromaDB

```bash
chroma run --host localhost --port 8000
```

### 6. Start the platform

```bash
# Terminal 1 — Backend
npm run dev

# Terminal 2 — Frontend
cd client && npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## Ingesting a Repository

```bash
# Index a local repository
npm run ingest -- --path /path/to/your/repo

# Index a GitHub repo
npm run ingest -- --github https://github.com/owner/repo
```

The ingestion pipeline will:
- Parse all TypeScript/JavaScript files via AST
- Extract functions, classes, exports, and dependencies
- Chunk and embed code into ChromaDB
- Build a semantic index for retrieval

---

## Example Queries

Once a repo is indexed, you can ask:

```
"Where is the authentication middleware defined?"
"Which functions call the database connection pool?"
"Explain the data flow from the API endpoint to the database"
"Find all places where error handling is missing"
"What does the UserService depend on?"
```

---

## Agent Architecture

The platform uses a multi-agent orchestration layer with specialized agents:

| Agent | Responsibility |
|---|---|
| **Search Agent** | Semantic retrieval of relevant code chunks |
| **Code Explainer** | Explains function logic and intent |
| **Dependency Analyst** | Traces import graphs and call chains |
| **Autonomous Agent** | Multi-step reasoning across multiple files |

The orchestrator routes queries to the appropriate agent(s) and synthesizes responses when multiple agents are involved.

---

## Why This Exists

Built to solve a real problem at scale: navigating large, unfamiliar codebases quickly. Keyword search misses intent. LLMs without retrieval hallucinate. This platform combines AST-level code understanding with semantic retrieval to give accurate, grounded answers about any codebase.

---

## License

MIT
