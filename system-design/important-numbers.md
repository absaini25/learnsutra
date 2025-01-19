# Important numbers for system design

## Characteristics of fundamental components

---

### **Key Metrics and Approximations**

#### **1. Latency**
Latency refers to the time taken to perform an operation. Knowing approximate latencies of different components helps in evaluating performance bottlenecks.

| **Operation**                    | **Approximate Latency**        |
|-----------------------------------|---------------------------------|
| L1 Cache Access                  | ~0.5 nanoseconds               |
| L2 Cache Access                  | ~7 nanoseconds                 |
| RAM Access                       | ~100 nanoseconds               |
| Disk I/O (SSD)                   | ~100 microseconds              |
| Disk I/O (HDD)                   | ~10 milliseconds               |
| Network Round Trip (Same Region) | ~0.5 milliseconds              |
| Network Round Trip (Different Region) | ~100 milliseconds         |

#### **2. Data Transfer Rates**
Understanding the speed at which data can be read or written helps in capacity planning and throughput estimation.

| **Medium**                       | **Transfer Rate**              |
|-----------------------------------|---------------------------------|
| L1 Cache                         | ~1 TB/s                        |
| RAM                              | ~25 GB/s                       |
| SSD                              | ~500 MB/s                      |
| HDD                              | ~200 MB/s                      |
| 1 Gbps Network                   | ~125 MB/s                      |
| 10 Gbps Network                  | ~1.25 GB/s                     |

#### **3. Storage Sizes**
Approximating storage needs is vital for designing databases, file systems, and other storage solutions.

| **Storage Metric**               | **Approximation**              |
|-----------------------------------|---------------------------------|
| Byte                             | 8 bits                         |
| KB (Kilobyte)                    | $ 10^3 $ bytes (1,000 bytes) |
| MB (Megabyte)                    | $ 10^6 $ bytes (1,000,000 bytes) |
| GB (Gigabyte)                    | $ 10^9 $ bytes               |
| TB (Terabyte)                    | $ 10^{12} $ bytes            |

#### **4. Network Metrics**
Networks play a critical role in distributed systems. These numbers help estimate bandwidth usage and response times.

| **Metric**                       | **Approximation**              |
|-----------------------------------|---------------------------------|
| Packet Size (TCP/UDP)            | ~1.5 KB                        |
| HTTP Request Size                | ~1 KB                          |
| HTTP Response (HTML)             | ~10 KB                         |
| HTTP Response (Image)            | ~100 KB                        |

---

### **How to Use These Numbers in System Design**

#### **1. Back-of-the-Envelope Calculations**
- **Example**: Estimating the read throughput of a cache.
    - L2 Cache Access: $ \sim 7 \text{ ns} $
    - Assume a high-speed network can send $ \sim 1 \text{ GB/s} $.
    - Combining these latencies gives an estimate of system responsiveness.

#### **2. Data Storage Planning**
- **Example**: Designing a photo storage service.
    - Assume 10 million users upload 5 MB photos daily.
    - Daily Storage Requirement: $ 10^7 \times 5 \, \text{MB} = 50 \, \text{TB} $.

#### **3. Network Bandwidth Estimation**
- **Example**: A chat application with 1 million users sending 50 messages per second.
    - Message Size: $ \sim 1 \, \text{KB} $
    - Total Data Transfer: $ 1 \times 10^6 \times 50 \times 1 \, \text{KB} = 50 \, \text{GB/s} $.

#### **4. Choosing the Right Technology**
- Use latency numbers to decide between:
    - In-memory caching for low-latency reads.
    - Disk-based storage for cheaper but slower reads.
- Use network and storage trade-offs to evaluate replication strategies.

---

### **Cheat Sheet for Quick Reference**

#### **Latency**
- **CPU Cycle**: $ \sim 0.3 \, \text{ns} $
- **L1 Cache**: $ \sim 0.5 \, \text{ns} $
- **RAM**: $ \sim 100 \, \text{ns} $
- **SSD Read**: $ \sim 100 \, \mu\text{s} $
- **HDD Seek**: $ \sim 10 \, \text{ms} $
- **Inter-Region Network RTT**: $ \sim 100 \, \text{ms} $

#### **Throughput**
- **RAM**: $ \sim 25 \, \text{GB/s} $
- **SSD**: $ \sim 500 \, \text{MB/s} $
- **HDD**: $ \sim 200 \, \text{MB/s} $
- **1 Gbps Network**: $ \sim 125 \, \text{MB/s} $

#### **Storage**
- **1 KB**: $ 10^3 \, \text{B} $
- **1 MB**: $ 10^6 \, \text{B} $
- **1 GB**: $ 10^9 \, \text{B} $
- **1 TB**: $ 10^{12} \, \text{B} $

---
## Characteristics of available high level components

| **Component**       | **Key Metrics**                                                                 | **Numbers to Know**                                                                                                                                                                                                 | **When to Scale/Sharding Considerations**                                                                                                                                                                      | **Implications for System Design**                                                                                                                                                                                                                                    |
|----------------------|--------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Caching**          | **Memory, Latency, Throughput**                                                | - **Memory**: Up to 1TB on memory-optimized instances. </br> - **Latency**: Reads < 1ms (same region), Writes 1-2ms (cross-region). </br> - **Throughput**: > 100k requests/sec per instance.                          | - Dataset size > 1TB. </br> - Throughput exceeds 100k ops/sec. </br> - Latency < 0.5ms consistently.                                                                                                              | - Caching entire datasets eliminates the need for selective caching. </br> - Bottlenecks shift from memory size to throughput or network bandwidth. </br> - Simplifies caching strategies with a "cache everything" approach.                                                                                   |
| **Databases**        | **Storage, Latency, Throughput, Connections**                                 | - **Storage**: Up to 64 TiB (128 TiB in Aurora). </br> - **Latency**: Reads 1-5ms (cached), 5-30ms (disk). Writes 5-15ms. </br> - **Throughput**: Reads ~50k TPS, Writes 10-20k TPS.                                   | - Dataset size > 50 TiB. </br> - Write throughput consistently > 10k TPS. </br> - Backup windows become operationally impractical. </br> - Geographic replication needed.                                          | - Single-node databases handle most use cases without sharding. </br> - Premature sharding often unnecessary for systems under 50 TiB. </br> - Sharding decisions should be driven by data volume, backup limitations, or geographic distribution.                                                              |
| **Application Servers** | **CPU, Memory, Network Bandwidth**                                          | - **Connections**: > 100k concurrent connections. </br> - **CPU**: 8-64 cores. </br> - **Memory**: 64-512GB (up to 2TB for memory-optimized instances). </br> - **Network**: Up to 25 Gbps bandwidth.                  | - CPU utilization > 70%. </br> - Latency exceeds SLAs. </br> - Concurrent connections > 15k per instance. </br> - Network bandwidth nearing 20 Gbps.                                                              | - Focus on optimizing CPU usage; memory limits are rarely reached. </br> - In-memory caching and computations can leverage high memory availability. </br> - Cloud platforms enable rapid scaling with containerized apps (startup time 30-60 seconds).                                                            |
| **Message Queues**   | **Throughput, Latency, Storage**                                              | - **Throughput**: Up to 1M messages/sec per /broker. </br> - **Latency**: 1-5ms (in-region). </br> - **Message Size**: 1KB-10MB. </br> - **Storage**: Up to 50TB//broker (long retention possible).                      | - Throughput > 800k messages/sec. </br> - Partition count > 200k per cluster. </br> - Consistently growing consumer lag impacts real-time processing. </br> - Geographic redundancy required.                     | - Sub-5ms latency allows synchronous use in workflows. </br> - Retention enables event sourcing, real-time analytics, and data integration. </br> - High throughput and storage make message queues reliable data highways for scalable systems.                                                              |

### **Key Takeaways**

1.  **Caching**:

    -   Utilize memory-optimized instances to cache large datasets, eliminating the need for complex selective caching strategies.
    -   Throughput and network bandwidth often become bottlenecks before memory capacity does.
2.  **Databases**:

    -   Avoid premature sharding; modern databases handle massive datasets and transactions efficiently.
    -   Sharding should only be introduced when driven by specific needs like geographic distribution or operational constraints.
3.  **Application Servers**:

    -   Modern servers are capable of handling a vast number of concurrent connections, with CPU being the usual bottleneck.
    -   Leverage memory for local caching or session handling to improve performance, as memory limits are rarely reached.
4.  **Message Queues**:

    -   With sub-5ms latency and high throughput, queues can be integrated into synchronous workflows for reliable, scalable systems.
    -   Long-term storage capabilities make queues suitable for event sourcing and real-time analytics.
--- 
