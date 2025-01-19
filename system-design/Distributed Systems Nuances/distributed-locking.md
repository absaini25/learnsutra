# Distributed locking via Redis

## Vanilla way 

## Using Redlock

Redlock improves on a **vanilla Redis-based locking mechanism** by addressing several key issues related to fault tolerance and correctness in distributed systems. Here’s how Redlock is better:

---

### 1. **Resilience to Single Point of Failure**
#### Vanilla Redis Lock:
- Relies on a single Redis instance to store the lock. If that instance fails, the lock's state is lost, and any process relying on it cannot safely determine the lock's status.

#### Redlock:
- Uses **multiple Redis instances** (typically 5, but configurable) across different nodes. A lock is acquired only if a majority of instances (e.g., 3 out of 5) agree that the lock is granted.
- This quorum-based approach ensures that even if a minority of Redis instances fail, the lock mechanism remains operational.

---

### 2. **Reduced Risk of Split-Brain**
#### Vanilla Redis Lock:
- In the event of network partitions or Redis instance failures, there’s a higher chance of multiple processes acquiring the same lock (a "split-brain" situation).

#### Redlock:
- By requiring a quorum (majority) of Redis nodes to acquire or release a lock, Redlock minimizes the chance of two processes thinking they hold the same lock simultaneously.

---

### 3. **Improved Clock Drift Tolerance**
#### Vanilla Redis Lock:
- Relies heavily on the expiration time of a single Redis instance. If a server clock drifts (or the Redis server has performance delays), the lock expiration may not behave as expected.

#### Redlock:
- Distributes the lock acquisition and expiration decision across multiple instances, making it less sensitive to timing issues on a single node.
- The use of timestamps during lock acquisition helps ensure a process has a valid claim on the lock.

---

### 4. **Atomic Lock Acquisition**
#### Vanilla Redis Lock:
- Typically implemented using `SETNX` and `EXPIRE` commands. If these commands are not atomic (or are executed separately), there's a chance of inconsistency, such as failing to set an expiration time, leading to a "stuck lock."

#### Redlock:
- Ensures atomicity by using a carefully timed and consistent mechanism across multiple Redis instances. Locks are granted only if they are acquired within a specific time window on the majority of instances.

---

### 5. **Minimized Dependency on a Single Redis Instance**
#### Vanilla Redis Lock:
- Highly dependent on the availability, performance, and reliability of one Redis instance. If this instance becomes unavailable, the locking mechanism fails entirely.

#### Redlock:
- Spreads the lock across multiple Redis instances, reducing the dependency on any single node. Even with a partial outage, the system can still operate.

---

### 6. **Built-in Safety Features**
#### Vanilla Redis Lock:
- Lacks advanced failure recovery mechanisms. For example, if a lock holder crashes, it can be difficult to detect and recover the lock without custom logic.

#### Redlock:
- Includes safeguards such as:
    - Ensuring the lock expiration time is carefully chosen to avoid lingering locks.
    - Recovering from partial failures (e.g., if a lock is acquired on some Redis nodes but not all).

---

### Caveats of Redlock
While Redlock is better than vanilla implementations, it still has its **limitations**:
- **Timing Sensitivity**: Redlock relies on accurate clock synchronization across Redis instances.
- **Not Consensus-Based**: Unlike algorithms like Paxos or Raft, Redlock does not offer the same level of theoretical guarantees in highly fault-tolerant distributed systems.

---

## Martin Kleppman's concerns

The key point of contention between Martin Kleppmann and the authors of **Redlock** (a distributed locking algorithm implemented in Redis) lies in whether Redlock meets the safety guarantees required for distributed systems. This debate focuses on the algorithm's ability to function correctly under certain conditions, particularly in the presence of network partitions and failures.

Here are the major points of disagreement:

---

### 1. **Safety Guarantees**
Martin Kleppmann's criticism centers around whether Redlock satisfies the **mutual exclusion** property in a distributed environment. In distributed systems, mutual exclusion ensures that at most one process can hold a lock at any time. Kleppmann argues that Redlock may fail to guarantee this due to:

- **Clock Skew and Timing Assumptions**: Redlock assumes that the system clocks on different nodes are reasonably synchronized. However, in a distributed system, clocks can drift, and this drift can cause inconsistencies, such as locks expiring too early or late.

- **Race Conditions on Lock Renewal**: Redlock relies on clients renewing locks within a certain time frame. If a process with an expired lock doesn't release it promptly, another process may acquire it, leading to two processes believing they hold the lock simultaneously.

Kleppmann compares Redlock to more rigorously proven algorithms, like those based on **Paxos** or **Raft**, which are explicitly designed to handle such failure scenarios.

---

### 2. **Network Partitions**
Kleppmann emphasizes that during a **network partition**, where parts of the network are isolated from each other:

- Redlock may allow multiple nodes to acquire the same lock independently because the system cannot reconcile conflicting states between partitions.
- In cases where a process releases a lock after a partition ends, the distributed state may still violate mutual exclusion.

The authors of Redlock argue that these situations are unlikely in practice and that Redis is not designed to be a strict consensus system but rather a practical one for certain classes of applications.

---

### 3. **Use Cases and Assumptions**
The debate also highlights the intended use cases for distributed locks:

- **Redlock's Authors**: Argue that Redlock is sufficient for many real-world applications that tolerate some level of risk. They highlight its simplicity and practicality compared to consensus-based algorithms.

- **Martin Kleppmann**: Advocates for using consensus algorithms (like those used in **ZooKeeper** or **Etcd**) if strict guarantees of correctness and fault tolerance are required. He believes Redlock is unsuitable for scenarios where safety is critical (e.g., financial systems, resource allocation).

---

### Summary of Views
- **Martin Kleppmann**: Redlock does not meet the stringent safety guarantees needed for distributed locking in fault-tolerant systems.
- **Redlock Authors**: Redlock is pragmatic and fits many real-world applications where strict consensus-based algorithms might be overkill.

This debate reflects a broader trade-off between **simplicity and performance** versus **strict correctness** in distributed systems.