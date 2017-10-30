# Medifi: An end-to-end encrypted decentralized file sharing network for the secure transfer and easy use of medical records
Medifi is a Web and Android decentralized application (DApp) to share Medical Documents securely via NFC. It can potentially store any medical records securely. The medical documents are uploaded by your doctor or other medical professional who is already trusted by the user. On a high level, this application can be used to share sensitive medical documents in a secure and accessible way. The target audience includes anyone who needs ready access to their personal medical records.

[Demo Video](https://youtu.be/UZYsvTh0VKU)

# The Problem
In the United States, accessing one's own medical records can be a timely and frustrating process. It can take 30 days to gain access to medical records and often the request for access is denied [improperly](https://health.usnews.com/health-news/patient-advice/articles/2014/06/05/how-to-get-access-to-your-hospital-records). Even if access is gained it can be unreasonable to search through and manage the thick stack of papers. This is a process known for its incredibly inefficient and cumbersome process - there is clearly much room for improvement.
There have been attempts to digitize medical records and other similar sensitive data using traditional Web 1.0 and Web 2.0 technologies, but these have fallen short. For example, there have been [cases](http://medicaleconomics.modernmedicine.com/medical-economics/news/yes-staff-snooping-medical-records-privacy-breach) of staff abusing their adminstrational access to patient records. Traditional databases continue to be the subject of hacks as we have recently seen with the Equifax hack and the ransomware attacks plaguing unsecure databases. With a database acting as a single point of failure it seems this problem cannot be resolved unless a nontraditional approach to data storage is explored.

# The Solution & Medifi
Web 3.0 has brought with it a potential solution for the problem detailed above. Medifi's solution has leveraged these emerging technologies to create an end-to-end decentralized file sharing network. This means there is no longer a single point of failure for hackers to exploit. The data itself is secured using SHA256 in a Merkel DAG data structure and users can access the data using the hashes of the SHA256 encryption traced with the help of the Ethereum Blockchain and smart contracts. This means that data can be added and viewed with ease and be stored completely securely. Which means that you will no longer have to wait thirty days to access your own medical records and sharing your medical records with trusted sources will be easier and more secure than ever before.

# Installation and Requirements

1. An android mobile
2. Refer to [Embark Framework Docs](https://github.com/iurimatias/embark-framework)

# Tech Stack

1. [Embark Framework](https://github.com/iurimatias/embark-framework)
2. [IPFS](https://ipfs.io)
3. [Bootstrap](http://getbootstrap.com/)
4. [Solidity](https://github.com/ethereum/solidity)
5. [Web3JS](https://github.com/ethereum/web3.js/)

# Deployment Framework

OpenShift - planning on it.

# Collaborators

- Devin de Hueck
- Mahima Singh
- Kim Baum
- So Hyeong Lee
- Brandon Mac

# Misc.

### What is DApp?
Take it from the top answer on stackoverflow:

> DApp is an abbreviated form for decentralized application.

> A DApp has its backend code running on a decentralized peer-to-peer network. Contrast this with an app where the backend code is running on centralized servers.

> A DApp can have frontend code and user interfaces written in any language (just like an app) that can make calls to its backend. Furthermore, its frontend can be hosted on decentralized storage such as Swarm or IPFS.

> If an app=frontend+server, since Ethereum contracts are code that runs on the global Ethereum decentralized peer-to-peer network, then:

> DApp = frontend + contracts

## What is Ethereum?
[Check out the Wikipedia](https://en.wikipedia.org/wiki/Ethereum)

