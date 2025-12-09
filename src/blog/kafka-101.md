---
title: "Kafka 101: Topics, Partitions, Offsets, Producers, Consumers, Brokers, and More"
date: "2025-12-08"
author: "Varad A G"
banner: "../images/kafka-101.webp"
---

# Section 1 — Kafka Fundamentals (Consolidated)

This file consolidates the Session markdown files from `Section_1` into a single reference.

---

## Session 1: Kafka Topics, Partitions, and Offsets

# Kafka Topics, Partitions, and Offsets

## What is a Kafka Topic?

A **topic** is a named stream of records (messages) in Kafka. Think of it as a category or feed to which records are published. Multiple producers can send messages to the same topic, and multiple consumers can read from it.

### Topic Properties:
- **Name**: Unique identifier for the topic (e.g., `user-events`, `orders`)
- **Replication Factor**: Number of copies of the topic data across brokers (for fault tolerance)
  - Example: Replication factor of 3 means data is stored on 3 different brokers
- **Partitions**: Number of partitions the topic is divided into
- **Retention**: How long messages are kept before deletion (time-based or size-based)

### Example:

```
Topic: "user-clicks"
├── Partition 0
├── Partition 1
└── Partition 2
```

---

## What are Kafka Partitions?

A **partition** is a subdivision of a topic. Each topic can have multiple partitions, allowing Kafka to:
- **Scale horizontally**: Distribute data across multiple brokers
- **Increase throughput**: Multiple consumers can read from different partitions in parallel
- **Maintain order**: Messages within a partition are ordered, but order across partitions is not guaranteed

### Partition Properties:
- **Partition ID**: Numbered from 0 upwards (e.g., Partition 0, Partition 1, etc.)
- **Leader**: The broker responsible for handling reads and writes for this partition
- **Replicas**: Copies of the partition on other brokers for redundancy
- **In-Sync Replicas (ISR)**: Replicas that are fully synchronized with the leader
- **Log Segment**: Physical storage unit containing messages

### Key Characteristics:
- Each message in a partition is assigned a unique **offset** (see below)
- Messages are immutable once written

## What is a Kafka Offset?

An **offset** is a unique, sequential identifier assigned to each message within a partition. It represents the position of a message in a partition.

### Offset Properties:
- **Starting from 0**: The first message in a partition has offset 0, the next has offset 1, etc.
- **Partition-specific**: Offsets are unique only within a partition (different partitions have their own offset sequences)
- **Immutable**: Once assigned, an offset never changes
- **Monotonically increasing**: Offsets always increase in value

### Consumer Offset Tracking:
- Consumers keep track of which messages they've read by storing the **current offset**
- When a consumer restarts, it can resume from the last committed offset instead of starting from the beginning
- This allows for fault tolerance and idempotent message processing

### Example:

```
Partition 0:
├── Offset 0: {"user_id": 123, "action": "click"}
├── Offset 1: {"user_id": 456, "action": "view"}
├── Offset 2: {"user_id": 789, "action": "purchase"}
└── Offset 3: {"user_id": 123, "action": "logout"}

Partition 1:
├── Offset 0: {"user_id": 321, "action": "login"}
├── Offset 1: {"user_id": 654, "action": "add-to-cart"}
└── Offset 2: {"user_id": 321, "action": "checkout"}
```

---

## How They Work Together

- A producer sends a message to a topic (e.g., `user-events`)
- The message is routed to one of the topic's partitions (usually based on a key)
- The message is assigned an offset within that partition
- A consumer reads messages from a partition using offsets and commits progress as appropriate

---

## Summary Table

| Concept | Purpose | Uniqueness |
|---------|---------|-----------|
| **Topic** | Logical grouping of messages by category | Unique across Kafka cluster |
| **Partition** | Physical storage unit for scalability | Unique within a topic |
| **Offset** | Message position identifier | Unique within a partition |

## Key Takeaways for Beginners

1. **Topics** are like channels - organize messages by subject
2. **Partitions** are like shelves - split topics for parallel processing
3. **Offsets** are like row numbers - identify each message's position
4. Together, they enable Kafka's scalability, fault tolerance, and ordering guarantees

---

## Session 2: Kafka Producer and Serialization

# Session 2: Kafka Producer and Serialization

## Overview
This session covers the fundamentals of Apache Kafka producers, including their operation, message structure, and how messages are partitioned across topics.

## How Kafka Producers Work
Kafka producers are responsible for publishing records (messages) to Kafka topics. Key aspects include:

- **Producer API**: Producers use the Kafka Producer API to send messages asynchronously or synchronously.
- **Serialization**: Messages are serialized into bytes before sending. Kafka supports various serializers (e.g., String, JSON, Avro).
- **Batching and Compression**: Producers batch messages for efficiency and can compress them (e.g., using GZIP or Snappy) to reduce network overhead.
- **Acknowledgements**: Producers can configure acknowledgment levels (acks) to ensure message durability:
    - `acks=0`: No acknowledgment (fire-and-forget).
    - `acks=1`: Leader acknowledgment.
    - `acks=all`: All in-sync replicas acknowledge.
- **Retries and Idempotence**: Producers handle retries on failures and support idempotent writes to prevent duplicates.

Example producer configuration in Java:
```java
Properties props = new Properties();
props.put("bootstrap.servers", "localhost:9092");
props.put("key.serializer", "org.apache.kafka.common.serialization.StringSerializer");
props.put("value.serializer", "org.apache.kafka.common.serialization.StringSerializer");
KafkaProducer<String, String> producer = new KafkaProducer<>(props);
```

## Message Structure in Kafka
Kafka messages are records with the following structure:

- **Key**: Optional byte array used for partitioning and ordering. Messages with the same key go to the same partition.
- **Value**: The actual message payload (byte array).
- **Timestamp**: Optional timestamp (e.g., creation time).
- **Headers**: Key-value pairs for metadata (introduced in Kafka 0.11).
- **Offset**: Assigned by Kafka upon storage (not part of the sent message).

Messages are immutable once stored.

## How Messages Go into Partitions
Partitions distribute messages across brokers for scalability and parallelism.

- **Partitioning Strategy**:
    - If a key is provided, the partition is determined by hashing the key (e.g., `partition = hash(key) % num_partitions`).
    - Without a key, messages are round-robin distributed.
    - Custom partitioners can be implemented for advanced logic.
- **Replication**: Each partition has replicas for fault tolerance. The leader handles writes, followers replicate.
- **Consumer Groups**: Consumers read from partitions, with each partition assigned to one consumer per group.

This ensures load balancing and ordered processing within partitions.

---

## Session 3: Consumers and Deserializers

# Session 3: Consumers and Deserializers in Kafka

## Consumers in Kafka

Kafka consumers are applications that read data from Kafka topics. They subscribe to topics and process messages in real-time or batch modes.

### Key Concepts
- **Consumer Groups**: A group of consumers that share the workload. Each partition is assigned to one consumer in the group for load balancing.
- **Offsets**: Track the position of the last read message in a partition. Consumers commit offsets to resume from where they left off.
- **Polling**: Consumers poll the Kafka broker for new messages using the `poll()` method.

### Example Consumer Code (Java)
```java
import org.apache.kafka.clients.consumer.ConsumerRecords;
import org.apache.kafka.clients.consumer.KafkaConsumer;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import java.util.Arrays;
import java.util.Properties;

Properties props = new Properties();
props.put("bootstrap.servers", "localhost:9092");
props.put("group.id", "test-group");
props.put("key.deserializer", "org.apache.kafka.common.serialization.StringDeserializer");
props.put("value.deserializer", "org.apache.kafka.common.serialization.StringDeserializer");

KafkaConsumer<String, String> consumer = new KafkaConsumer<>(props);
consumer.subscribe(Arrays.asList("my-topic"));

while (true) {
    ConsumerRecords<String, String> records = consumer.poll(100);
    for (ConsumerRecord<String, String> record : records) {
        System.out.printf("offset = %d, key = %s, value = %s%n", record.offset(), record.key(), record.value());
    }
}
```

## Deserializers in Kafka

Deserializers convert byte arrays from Kafka messages back into objects. They are configured on the consumer side for keys and values.

### Built-in Deserializers
- `StringDeserializer`: For string data.
- `IntegerDeserializer`: For integers.
- `ByteArrayDeserializer`: For raw bytes.

### Custom Deserializers
Implement the `Deserializer` interface for custom types, e.g., JSON or Avro.

### Example Custom Deserializer (Java)
```java
import org.apache.kafka.common.serialization.Deserializer;
import com.fasterxml.jackson.databind.ObjectMapper;

public class JsonDeserializer<T> implements Deserializer<T> {
    private final ObjectMapper mapper = new ObjectMapper();
    private Class<T> type;

    @Override
    public void configure(Map<String, ?> configs, boolean isKey) {
        this.type = (Class<T>) configs.get("value.type");
    }

    @Override
    public T deserialize(String topic, byte[] data) {
        try {
            return mapper.readValue(data, type);
        } catch (Exception e) {
            throw new RuntimeException("Error deserializing", e);
        }
    }
}
```

Use in consumer config: `props.put("value.deserializer", "com.example.JsonDeserializer");`

---

## Session 4: Consumers and Consumer Groups

# Insights on Kafka Consumers and Consumer Groups

## Consumers and Consumer Groups
In Apache Kafka, a **Consumer Group** is a logical grouping of consumer instances that work together to consume messages from one or more topics. Each consumer in the group is assigned specific partitions from the subscribed topics. This allows for load balancing and parallel processing:

- **Partition Assignment**: Partitions are distributed among consumers in the group. If there are more partitions than consumers, some consumers handle multiple partitions. If there are more consumers than partitions, some consumers remain idle.
- **Rebalancing**: When consumers join or leave the group, partitions are reassigned automatically to maintain balance.
- **Use Case**: Consumer groups enable scalability and fault tolerance, as multiple instances can process data concurrently.

## Multiple Consumers Reading from the Same Partition in the Same Group
No, in the same consumer group, only **one consumer** can read from a specific partition at a time. This ensures that each message in the partition is processed by exactly one consumer in the group, preventing duplicate processing.

## Multiple Consumer Groups for the Same Topic
Yes, multiple consumer groups can subscribe to the **same topic**. Each group maintains its own offset and processes messages independently:

- **Independent Processing**: Different groups can consume from the same partitions without interfering with each other. For example, one group might process data for analytics, while another handles real-time alerts.
- **Partition Access**: Groups can access all partitions of the topic, but each group's consumers are assigned partitions separately. This allows for scenarios where different applications need the same data.

## Delivery Semantics: At Least Once, At Most Once, and Exactly Once
Kafka provides different delivery guarantees to handle message processing reliability:

- **At Least Once**: Ensures messages are delivered and processed at least once, but duplicates may occur (e.g., due to retries after failures). Achieved by committing offsets after processing.
- **At Most Once**: Ensures messages are delivered at most once, but some may be lost (e.g., if processing fails before committing). Achieved by committing offsets before processing.
- **Exactly Once**: Ensures each message is delivered and processed exactly once, with no duplicates or losses. This is more complex and often requires idempotent producers/consumers or transactional APIs (introduced in Kafka 0.11+ for producer-side exactly-once, and evolving for end-to-end).

---

## Session 5: Brokers and Topics

# Session 5: Brokers and Topics in Kafka

## Brokers in a Kafka Cluster
Brokers are the core servers in a Kafka cluster that handle message storage, replication, and serving client requests. Each broker is identified by a unique ID and manages topic partitions.

## How Clients Connect to Brokers
Clients (producers and consumers) connect to the Kafka cluster via a list of broker addresses. They don't need to know all brokers upfront; instead, they use a **bootstrap server** to discover the full cluster topology.

## What is a Bootstrap Server?
A bootstrap server is an initial broker address (e.g., `localhost:9092`) provided in client configurations. It acts as an entry point for clients to connect to the cluster. Once connected, the bootstrap server provides metadata about other brokers, topics, and partitions, allowing clients to route requests dynamically.

## How Bootstrap Servers Enable Horizontal Scalability
Bootstrap servers facilitate horizontal scalability by allowing the cluster to grow without changing client configurations. Clients connect to any bootstrap server, which shares the latest cluster metadata. This means:
- New brokers can be added seamlessly.
- Clients automatically discover and utilize additional brokers for load balancing and fault tolerance.
- The cluster can scale out by distributing partitions across brokers without client-side updates.

## How One Broker Knows About Other Brokers and Topic Partitions
Brokers maintain cluster metadata through ZooKeeper (or KRaft in newer versions). Each broker registers itself and subscribes to changes in the cluster state. This includes:
- List of all brokers and their states.
- Topic-partition assignments and replicas.
- When a broker joins or leaves, ZooKeeper notifies all brokers, ensuring they update their internal maps. Clients query this metadata from any broker to stay informed.

---

## Session 6: Topic Replication

# Topic Replication

## Replication Factor
The replication factor is the number of copies of each partition that are maintained across the Kafka cluster. For example, a replication factor of 3 means each partition has three replicas distributed across different brokers for fault tolerance and high availability.

## Partition Replication Across Brokers
Partitions are replicated across multiple brokers in the cluster. When a topic is created with a replication factor greater than 1, Kafka automatically assigns replicas to different brokers. This ensures that if one broker fails, the data remains accessible from other replicas.

## Leader Partition
Each partition has one replica designated as the **leader**. The leader handles all read and write requests for that partition. Producers and consumers interact primarily with the leader to ensure consistency.

## In-Sync Replicas (ISR)
In-sync replicas (ISR) are the replicas that are fully caught up with the leader partition. They are eligible to become the new leader if the current leader fails. The ISR set is dynamically maintained by the controller broker, and replicas can be added or removed based on their lag.

## Consumer Reading from Leader
Consumers read data from the leader partition, similar to how producers write to it. This ensures that consumers always get the latest data, as the leader is the source of truth.

## Consumer Reading from Replicas (Newer Versions)
In newer versions of Kafka (starting from 2.4), consumers can read from follower replicas instead of the leader to reduce network latency and costs. This feature, known as "follower fetching," allows consumers to fetch data from the closest replica, minimizing network hops and improving performance, especially in geo-distributed clusters.

---

## Session 7: Publisher Acks

<div class="note">
  <div class="note-title">Note</div>
  <div class="note-content">
    This section explains the different types of acknowledgments (acks) in a Publisher (e.g., Kafka Producer) and when to use each: 0, 1, and all.
  </div>
</div>

- **acks=0**: The producer does not wait for any acknowledgment from the broker. This provides the lowest latency
  but offers no guarantee of message delivery. If the broker fails, the message may be lost.

- **acks=1**: The producer waits for acknowledgment from the leader broker only. This ensures the message is written
  to the leader but not necessarily replicated. It's a balance between performance and durability.

- **acks=all**: The producer waits for acknowledgment from all in-sync replicas. This provides the highest durability
  and guarantees message availability even if some brokers fail. With n replicas, you can afford n-1 brokers to go down
  while still ensuring the message remains available for consumption.

### Real-World Examples:
- **acks=0**: Use in high-throughput, low-latency scenarios where message loss is acceptable, such as real-time
  logging or metrics collection where occasional data loss doesn't impact the system.

- **acks=1**: Suitable for applications requiring reasonable durability without sacrificing too much performance,
  like e-commerce order processing where you need confirmation that the order was received by the primary system.

- **acks=all**: Ideal for critical systems where message loss is unacceptable, such as financial transaction logs or
  healthcare data systems, ensuring data is replicated across multiple brokers for fault tolerance.

---

## Session 8: Zookeeper and KRaft

# Zookeeper in Kafka: Overview and KRaft Replacement

## What is Zookeeper?
Zookeeper is a distributed coordination service that manages configuration, naming, and synchronization for distributed systems like Apache Kafka. It acts as a centralized registry for metadata and ensures consistency across nodes.

## How Zookeeper Functions
- **Coordination**: Handles leader election, distributed locks, and consensus using the Zab protocol.
- **Metadata Storage**: Stores cluster state, including broker details, topics, partitions, and consumer offsets.
- **Fault Tolerance**: Runs as an ensemble (odd number of servers, e.g., 3 or 5) for high availability; uses majority voting for decisions.

## Organization of Servers, Brokers, Topics, and Partitions
- **Servers**: Zookeeper servers form the ensemble; they replicate data and elect a leader.
- **Brokers**: Kafka brokers (servers) register with Zookeeper for discovery and coordination. Zookeeper tracks broker health and assigns partitions.
- **Topics**: Logical channels for messages; metadata (e.g., partition count) is stored in Zookeeper.
- **Partitions**: Subdivisions of topics for parallelism and scalability. Zookeeper manages partition leadership and replicas across brokers, ensuring load balancing and fault tolerance.

## What is KRaft?
KRaft (Kafka Raft Metadata) is Kafka's built-in consensus protocol, replacing Zookeeper for metadata management. It uses Raft for leader election and log replication, eliminating the need for an external Zookeeper cluster.

## How KRaft is Replacing Zookeeper
- **Integration**: KRaft runs directly within Kafka brokers, simplifying deployment and reducing dependencies.
- **Benefits**: Improves performance (lower latency), scalability, and reliability by removing Zookeeper's overhead. Kafka 2.8+ supports KRaft in production; full replacement is ongoing, with Zookeeper deprecated in favor of KRaft for new setups.
- **Migration**: Existing clusters can migrate to KRaft via tools like the `kafka-storage` command, but it requires careful planning for zero-downtime transitions.
