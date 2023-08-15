---
sidebar_position: 2
---

# Specifications

## Node Computer
Nodes are high-powered machines that rely on a CPU and a GPU for computation. The node computer runs 2 processes, `xxnetwork-chain` is a blockchain validator and `xxnetwork-cmix` handles cMix precomputation.

|            | Required                                                    | Notes or Examples                                          |
|------------|-------------------------------------------------------------|------------------------------------------------------------|
| CPU        | Capable of meeting a multithreaded PassMark score of 15,500 | Intel Core i9-9980HK, AMD Ryzen 7 2700x                    |
| GPU        | Currently Nvidia Turing and Ampere Supported                | GeForce RTX 2070 or RTX 3060 Ti or greater                 |
| RAM        | 16 GB DDR4                                                  | An upgrade path to 32 GB is recommended.                   |
| Storage    | 1 TB NVMe SSD                                               |                                                            |
| Bandwidth  | 100 Mbps upload / 100 Mbps download                         |                                                            |
| IP Address | Static IP or Dynamic DNS URL                                |                                                            |

## Gateway Computer
Gateways are low-powered machines that rely on a CPU for computation. The gateway computer runs 2 processes, `xxnetwork-chain` is a blockchain node and `xxnetwork-gateway` handles cMix realtime.

### Self Hosted 

|            | Required                                                    | Notes or Examples                                          |
|------------|-------------------------------------------------------------|------------------------------------------------------------|
| CPU        | Capable of meeting a multithreaded PassMark score of 7,000  | AMD Ryzen 3 2200G                                          |
| GPU        | N/A                           							   | 										                    |
| RAM        | 8 GB DDR4                                                   | An upgrade path to 16 GB is recommended.                   |
| Storage    | 500 GB SATA SSD                                             | NVMe preferred                                             |
| Bandwidth  | 100 Mbps upload / 100 Mbps download                         |                                                            |
| Latency    | 100 milliseconds or less between the Node and Gateway       |                                                            |
| IP Address | Static IP or Dynamic DNS URL                                |                                                            |

### VPS Hosted
The team is providing feedback from existing node runners about which VPS packages have been used as a gateway at commonly used providers. The following should meet the gateway requirements. Please research what is available in your geographic region before making any decisions.

| Host | Package |
|-----|-----|
| Amazon Web Service | c5.xlarge |
| Microsoft Azure | F4s v2 |
| Google Cloud | c2-standard-4 |
| TransIP | x8 + NVMe space |
| Hetzner | CPX31 + NVMe space |
| Contabo | VPS 700 or VPS M + NVMe space |