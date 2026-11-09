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
