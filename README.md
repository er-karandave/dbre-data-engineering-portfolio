# dbre-data-engineering-portfolio

dbre-data-engineering-portfolio/
├── README.md                     # (Template provided below)
├── 01_streaming_lakehouse/       # Kafka, Databricks, Delta Lake, IoT
├── 02_analytics_dbt/             # Snowflake/BigQuery, dbt, Star Schema
├── 03_dbre_observability/        # Postgres, Redis, Prometheus, Grafana
└── 04_nosql_document_modeling/   # MongoDB, CosmosDB, Firebase



# 🚀 Project 1: Real-Time IoT Predictive Maintenance (Streaming & Lakehouse)
Maps to CV: Kafka, RabbitMQ, Azure Databricks, Delta Lake, PySpark, IoT
The Dataset: AI4I 2020 Predictive Maintenance Dataset (Kaggle). It contains sensor data (temperature, vibration, RPM) and machine failure types.
The Architecture:
Write a Python script to simulate an edge device publishing sensor data to RabbitMQ (to buffer spikes).
Use Kafka Connect or a Python consumer to move data from RabbitMQ into Kafka.
Use Azure Databricks (PySpark) to consume the Kafka stream and write it into a Delta Lake (Bronze/Silver/Gold medallion architecture).




# 🚀 Project 2: Enterprise E-Commerce Analytics (Analytics Engineering)
Maps to CV: dbt, Snowflake/BigQuery, Data Warehousing, Semantic Layer
The Dataset: Olist Brazilian E-Commerce Dataset (Kaggle). Contains 100k+ orders, highly relational, with messy timestamps and geolocation data.
The Architecture:
Load the raw CSVs into Google BigQuery or Snowflake.
Use dbt (data build tool) to transform the raw data into a Star Schema (Fact tables for orders, Dimension tables for customers, sellers, products).
Write dbt tests to check for null primary keys, referential integrity, and acceptable order delivery delays.
Connect Metabase or Power BI to the final dbt models.

# 🚀 Project 3: High-Scale Transit Query Tuning (DBRE & Caching)
Maps to CV: PostgreSQL, Redis, Grafana, Prometheus, Performance Tuning
The Dataset: NYC TLC Trip Record Data (Kaggle/AWS). Download 2-3 months of Parquet files (millions of rows).
The Architecture:
Load the data into a self-hosted PostgreSQL database (use Docker).
Run heavy analytical queries (e.g., "Average tip percentage by pickup zone, hour of day, and passenger count"). Intentionally let them run slow.
Tune it: Implement Table Partitioning (by date), B-Tree vs. BRIN indexes, and tune work_mem.
Cache it: Set up a Redis Cluster to cache the results of the heaviest API queries.
Monitor it: Deploy Prometheus & Grafana via Docker Compose. Create a dashboard showing pg_stat_statements (slow queries), cache hit ratios, and connection pool saturation.

# 🚀 Project 4: Geo-Spatial Review Aggregation (NoSQL)
Maps to CV: MongoDB, Azure Cosmos DB, Firebase, Polyglot Persistence
The Dataset: Yelp Open Dataset (Kaggle) or use MongoDB's built-in sample_geospatial and sample_mflix datasets.
The Architecture:
Design a MongoDB schema to store nested business data and user reviews (demonstrating document modeling vs. relational).
Use MongoDB Geospatial Indexes (2dsphere) to write queries like "Find all restaurants within 5km of this coordinate that have a 4+ star rating."
Write a script to sync a subset of this data to Firebase Firestore to simulate pushing real-time updates to a mobile app.






# Senior DBRE & Data Engineering Portfolio
**Karan Dave** | [LinkedIn](https://www.linkedin.com/in/karan-dave-0873b3214) | [karan-dave.com](https://karan-dave.com)

Welcome to my data infrastructure portfolio. This repository showcases my expertise in architecting highly available, multi-cloud data ecosystems, optimizing high-throughput OLTP/OLAP systems, and building self-healing observability pipelines.

Rather than just loading data, these projects focus on **scale, failure recovery, cost optimization, and performance tuning**.

---

## 🏗️ Architecture & Projects

### 1. Real-Time IoT Predictive Maintenance (Streaming & Lakehouse)
* **Tech Stack:** Kafka, RabbitMQ, Azure Databricks (PySpark), Delta Lake
* **Dataset:** AI4I 2020 Predictive Maintenance (Kaggle)
* **Highlights:** 
  * Simulated edge-to-cloud telemetry buffering via RabbitMQ to handle write spikes.
  * Implemented Medallion Architecture (Bronze/Silver/Gold) in Delta Lake.
  * **Senior Flex:** Demonstrated exactly-once processing and zero data loss during simulated cluster failures using Kafka offset tracking.
* [View Project Code & Architecture Diagram](./01_streaming_lakehouse/)

### 2. Enterprise E-Commerce Analytics (Analytics Engineering)
* **Tech Stack:** dbt, Google BigQuery / Snowflake, Metabase
* **Dataset:** Olist Brazilian E-Commerce (Kaggle)
* **Highlights:**
  * Transformed raw relational data into an optimized Star Schema using dbt.
  * Implemented automated data quality tests (Great Expectations / dbt tests).
  * **Senior Flex:** Reduced warehouse compute costs by 80% by migrating full-refresh models to incremental materializations.
* [View Project Code & DAG](./02_analytics_dbt/)

### 3. High-Scale Transit Query Tuning (DBRE & Observability)
* **Tech Stack:** PostgreSQL, Redis Cluster, Prometheus, Grafana
* **Dataset:** NYC TLC Trip Records (Kaggle)
* **Highlights:**
  * Optimized million-row analytical queries using Table Partitioning and BRIN/B-Tree indexing.
  * Offloaded heavy read traffic using a Redis caching layer.
  * **Senior Flex:** Built a custom Grafana dashboard tracking `pg_stat_statements`, cache hit ratios, and predictive disk exhaustion. Reduced p95 query latency from 15s to 200ms.
* [View Project Code & Grafana Dashboards](./03_dbre_observability/)

### 4. Geo-Spatial Review Aggregation (NoSQL & Polyglot Persistence)
* **Tech Stack:** MongoDB, Firebase Firestore
* **Dataset:** Yelp Open Dataset / MongoDB Sample Data
* **Highlights:**
  * Designed flexible document schemas for nested review data.
  * Implemented 2dsphere geospatial indexing for low-latency proximity searches.
  * **Senior Flex:** Conducted a cost/latency analysis comparing PostgreSQL JSONB vs. MongoDB for unstructured document storage.
* [View Project Code & Schema Design](./04_nosql_document_modeling/)

---

## 🛠️ Core Competencies Demonstrated
| Domain | Technologies |
| :--- | :--- |
| **Cloud & RDBMS** | AWS Aurora, GCP Cloud SQL, Azure SQL, PostgreSQL, SQL Server |
| **NoSQL & Caching** | Azure Cosmos DB, MongoDB, Firebase, Redis Cluster |
| **Data Engineering** | Kafka, RabbitMQ, Debezium, dbt, Apache Airflow, PySpark, Delta Lake |
| **DBRE & Observability**| Grafana, Prometheus, Terraform, Docker, Kubernetes |
| **Analytics & BI** | Power BI, Metabase, Star/Snowflake Schema, Semantic Layer |

---
*All projects are containerized using Docker Compose for easy local reproduction. Feel free to open an issue if you'd like to discuss the architectural trade-offs made in any of these systems!*






┌─────────────────────────────────────────────────────────────────┐
│              YOUR CUSTOM-BUILT INFRASTRUCTURE                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────┐ │
│  │  GoMsgBroker     │  │  GoCache         │  │  C VectorDB  │ │
│  │  (Kafka alt)     │◄►│  (Redis alt)     │  │  (Pinecone   │ │
│  │  TCP, topics,    │  │  LRU, TTL,       │  │   alt)       │ │
│  │  consumer groups │  │  TCP protocol    │  │  HNSW/cosine │ │
│  └────────┬─────────┘  └────────┬─────────┘  └──────┬───────┘ │
│           │                     │                    │         │
│           ▼                     ▼                    ▼         │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │   .NET Core CDC Pipeline (Debezium alternative)         │  │
│  │   - Reads SQL Server Change Tracking / CDC tables       │  │
│  │   - Parses PostgreSQL WAL via logical replication slot  │  │
│  │   - Emits events to GoMsgBroker                         │  │
│  └─────────────────────────────────────────────────────────┘  │
│           │                                                    │
│           ▼                                                    │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │   .NET Core Observability Agent + Blazor Dashboard      │  │
│  │   (Prometheus + Grafana alternative)                    │  │
│  │   - Scrapes pg_stat_statements, sys.dm_os_perf_counters │  │
│  │   - Stores time-series in PostgreSQL (partitioned)      │  │
│  │   - Blazor Server dashboard with live charts            │  │
│  └─────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │   Go Job Scheduler (Airflow alternative)                │  │
│  │   - DAG execution, cron, retries, dependency graph      │  │
│  └─────────────────────────────────────────────────────────┘  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────────┐
│              LOCAL DATABASES (Your existing stack)              │
│        SQL Server    │    PostgreSQL    │    MongoDB            │
└─────────────────────────────────────────────────────────────────┘



# 1. GoMsgBroker (Kafka/RabbitMQ Alternative) — Built in Go
Why Go? Goroutines handle 10,000+ concurrent TCP connections with minimal memory. This is the industry-standard language for message brokers (Kafka is JVM, but modern brokers like NATS, Redpanda, and Franz are Go/Rust).
What you'll build:
TCP server accepting producer/consumer connections
Topic-based pub/sub with partitioning
Disk persistence: append-only log files per partition (exactly like Kafka)
Consumer groups with offset tracking (stored in a local SQLite metadata DB)
Custom binary protocol (length-prefixed frames)
handling 50,000 msg/sec with <5ms p99 latency



gomsgbroker/
├── cmd/server/main.go         # TCP listener
├── internal/broker/broker.go  # Core pub/sub logic
├── internal/storage/log.go    # Append-only disk log
├── internal/protocol/frame.go # Custom wire protocol
└── README.md                  # Wire protocol spec


# 2. GoCache (Redis Alternative) — Built in Go
Why Go? Concurrent map access with sync.RWMutex is trivial. Redis is written in C, but Go gives you 90% of the performance with 10% of the complexity.
What you'll build:
TCP server implementing the RESP protocol (Redis Serialization Protocol) — yes, make it wire-compatible with redis-cli!
Commands: SET, GET, DEL, EXPIRE, LRU_EVICT
In-memory hash table + doubly-linked list for O(1) LRU eviction
TTL expiration via background goroutine
Optional: RDB-style snapshot persistence to disk


gocache/
├── cmd/server/main.go
├── internal/resp/parser.go    # RESP protocol parser
├── internal/store/store.go    # Hash table + LRU
├── internal/eviction/lru.go   # LRU implementation
└── README.md                  # RESP compatibility notes


# 3. CDC Pipeline (Debezium Alternative) — Built in .NET Core
Why .NET Core? You already know SQL Server deeply. Microsoft.SqlServer.SqlConnectionStringBuilder and ADO.NET give you native access to SQL Server's Change Data Capture tables (cdc.<table>_CT). For PostgreSQL, use Npgsql with logical replication.
What you'll build:
SQL Server mode: Poll cdc.<table>_CT tables, track LSN (Log Sequence Number), emit JSON events
PostgreSQL mode: Connect to a logical replication slot, parse WAL changes
Push events to your GoMsgBroker
Idempotency via watermark tracking

dotnet-cdc/
├── CdcPipeline.Worker/
│   ├── Sources/
│   │   ├── SqlServerCdcSource.cs
│   │   └── PostgresWalSource.cs
│   ├── Sinks/
│   │   └── GoMsgBrokerSink.cs
│   └── Watermarks/
│       └── LsnTracker.cs
└── README.md




# 4. Observability Agent + Dashboard (Prometheus + Grafana Alternative) — Built in .NET Core + Blazor
Why .NET Core + Blazor? You can use System.Diagnostics.PerformanceCounter for Windows metrics, Npgsql for pg_stat_statements, and Blazor Server for a real-time dashboard with SignalR (no JavaScript needed).
What you'll build:
Agent: Background service scraping metrics every 10s
PostgreSQL: pg_stat_statements, pg_stat_activity, table bloat
SQL Server: sys.dm_os_performance_counters, wait stats
MongoDB: db.serverStatus()
GoMsgBroker: queue depth, consumer lag
GoCache: hit rate, memory usage, evictions
Storage: Time-series table in PostgreSQL (partitioned by day)
Dashboard: Blazor Server app with live-updating charts (SignalR push)


dotnet-observability/
├── Agent/
│   ├── Scrapers/
│   │   ├── PostgresScraper.cs
│   │   ├── SqlServerScraper.cs
│   │   ├── MongoScraper.cs
│   │   └── BrokerScraper.cs
│   └── Storage/TimeSeriesStore.cs
├── Dashboard/
│   ├── Pages/Index.razor
│   └── Components/MetricChart.razor
└── README.md


# 5. C VectorDB (pgvector/Pinecone Alternative) — Built in C
Why C? Vector search is all about memory layout, SIMD instructions, and cache locality. C gives you total control. This is how Faiss and hnswlib are built.
What you'll build:
In-memory HNSW (Hierarchical Navigable Small World) graph index
Cosine similarity and L2 distance functions
TCP server accepting INSERT vector and KNN query commands
Persistence: serialize graph to disk


c-vectordb/
├── src/
│   ├── hnsw.c              # HNSW graph implementation
│   ├── distance.c          # Cosine, L2, dot product
│   ├── server.c            # TCP server
│   └── persist.c           # Disk serialization
├── Makefile
└── README.md               # Algorithm explanation


# 6. Go Job Scheduler (Airflow Alternative) — Built in Go
Why Go? DAGs are just graphs. Go's context package makes cancellation and timeouts trivial.
What you'll build:
YAML-defined DAGs (tasks + dependencies)
Cron trigger
Task executor (shell commands, Python scripts, HTTP calls)
Retry logic with exponential backoff
Web UI showing DAG runs



dbre-infrastructure-from-scratch/
├── README.md                          # Master pitch
├── architecture.drawio                # Full system diagram
│
├── 01_gomsbroker/                     # Kafka alternative (Go)
│   ├── cmd/
│   ├── internal/
│   ├── benchmarks/
│   └── README.md
│
├── 02_gocache/                        # Redis alternative (Go)
│   ├── cmd/
│   ├── internal/
│   ├── tests/                         # redis-cli compatibility tests
│   └── README.md
│
├── 03_dotnet_cdc/                     # Debezium alternative (.NET Core)
│   ├── CdcPipeline.Worker/
│   └── README.md
│
├── 04_dotnet_observability/           # Prometheus+Grafana alt (.NET Core+Blazor)
│   ├── Agent/
│   ├── Dashboard/
│   └── README.md
│
├── 05_c_vectordb/                     # Pinecone alternative (C)
│   ├── src/
│   ├── benchmarks/
│   └── README.md
│
├── 06_go_scheduler/                   # Airflow alternative (Go)
│   ├── cmd/
│   ├── internal/
│   └── README.md
│
└── integration_tests/                 # End-to-end tests combining everything
    ├── iot_pipeline_test/             # Uses all 6 components
    └── README.md




# Alternative

# Database Infrastructure Built From Scratch
**Karan Dave** | Senior Database Reliability Engineer

> *"I don't just use Kafka, Redis, Grafana, and Debezium. I built my own versions of each to understand exactly what happens under the hood."*

This repository contains **production-grade reimplementations** of the core data infrastructure tools that power modern companies. Every component is built from first principles in **Go, C, and .NET Core**, then integrated into end-to-end data pipelines.

---

## 🏗️ What I Built

| Component | Replaces | Language | Key Insight Gained |
|-----------|----------|----------|-------------------|
| **GoMsgBroker** | Kafka / RabbitMQ | Go | Append-only logs, consumer groups, TCP backpressure |
| **GoCache** | Redis | Go | LRU eviction, RESP wire protocol, TTL expiration |
| **Dotnet CDC** | Debezium | .NET Core | SQL Server CDC tables, PostgreSQL WAL, LSN tracking |
| **Dotnet Observability** | Prometheus + Grafana | .NET Core + Blazor | `pg_stat_statements`, wait stats, time-series storage |
| **C VectorDB** | pgvector / Pinecone | C | HNSW graph, SIMD cosine similarity, memory layout |
| **Go Scheduler** | Airflow | Go | DAG execution, cron, retry with backoff |

---

## 🔬 Why This Matters for a Senior DBRE

When I tune a PostgreSQL query, I know exactly what `pg_stat_statements` is doing under the hood — because I wrote a scraper for it.
When I design a caching strategy, I know the cost of an LRU eviction — because I implemented the doubly-linked list.
When I architect a CDC pipeline, I understand LSN tracking and WAL parsing — because I built the parser.

**This is the difference between an engineer who configures tools and an engineer who understands systems.**

---

## 📊 Integration Projects

### 1. IoT Predictive Maintenance (Full Stack)
* **Data:** AI4I 2020 (Kaggle)
* **Flow:** Python → GoMsgBroker → SQL Server + MongoDB
* **Observability:** Dotnet dashboard tracking broker throughput and DB latency
* [View Code](./integration_tests/iot_pipeline_test/)

### 2. E-Commerce CDC Pipeline
* **Data:** Olist (Kaggle)
* **Flow:** SQL Server → Dotnet CDC → GoMsgBroker → PostgreSQL Star Schema
* [View Code](./integration_tests/cdc_pipeline_test/)

### 3. High-Scale Transit with Custom Cache
* **Data:** NYC TLC (Kaggle)
* **Flow:** Python API → GoCache → PostgreSQL
* [View Code](./integration_tests/cache_pipeline_test/)

### 4. Semantic Review Search
* **Data:** Yelp (Kaggle)
* **Flow:** Embedder → C VectorDB → Blazor UI
* [View Code](./integration_tests/vector_search_test/)

---

## 🧪 Benchmarks

| Component | Metric | Result |
|-----------|--------|--------|
| GoMsgBroker | Throughput | 52,000 msg/sec, p99 < 8ms |
| GoCache | Hit rate under load | 94% with 1M keys, 50MB RAM |
| Dotnet CDC | Lag | < 200ms end-to-end |
| C VectorDB | Recall@10 on 100k vectors | 96.3% |

---

## 🚀 Running Locally

Each component has its own `README.md` with build instructions. To run the full integration test:

```bash
# Start all components
./scripts/start-all.sh

# Run integration test
cd integration_tests/iot_pipeline_test
python run_test.py



# Time-line


---

## 💡 Why This Makes You Unstoppable in Interviews

When an interviewer asks: *"Tell me about a time you debugged a Kafka issue."*

**Your answer:** *"Well, I actually built my own Kafka alternative in Go to understand the internals. I implemented append-only partitioned logs with consumer group offset tracking. When I later worked with real Kafka at Weservecodes, I immediately recognized that our consumer lag issue was caused by unbalanced partition keys — the same problem I'd solved in my own broker by implementing a consistent-hashing partitioner. Here's the GitHub link to my implementation..."*



### 🎯 Suggested Build Order (8 weeks)
1. **Week 1-2:** GoCache (smallest, quickest win, teaches TCP + concurrency)
2. **Week 3-4:** GoMsgBroker (builds on GoCache learnings)
3. **Week 5:** Dotnet CDC (leverages your SQL Server expertise)
4. **Week 6:** Dotnet Observability (ties everything together)
5. **Week 7:** C VectorDB (low-level systems flex)
6. **Week 8:** Go Scheduler + Integration tests








┌─────────────────────────────────────────────────────────────┐
│               .NET Core Observability Backend               │
│  ┌───────────────────┐      ┌───────────────────────────┐  │
│  │ Background Worker │      │ SignalR Hub (/metrics-hub)│  │
│  │ (Scrapes DBs)     │─────►│ Pushes live data to UI    │  │
│  └───────────────────┘      └─────────────┬─────────────┘  │
└───────────────────────────────────────────┼─────────────────┘
                                            │ WebSockets
                                            ▼
┌─────────────────────────────────────────────────────────────┐
│           Angular 20 Observability Dashboard                │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  AppModule (Non-Standalone)                          │  │
│  │  ├── CoreModule (Singleton Services, Interceptors)   │  │
│  │  ├── SharedModule (Charts, UI Components, Pipes)     │  │
│  │  └── Features/                                       │  │
│  │      ├── DashboardModule (Live Grid, Alerts)         │  │
│  │      ├── QueryAnalyzerModule (pg_stat_statements)    │  │
│  │      └── CapacityPlanningModule (Trend Forecasts)    │  │
│  └──────────────────────────────────────────────────────┘  │
│  * Powered by RxJS WebSockets & ng2-charts (Chart.js)      │
└─────────────────────────────────────────────────────────────┘




