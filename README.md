# 🌐 Decentralized Uptime Monitor

A blockchain-empowered, regionally-distributed uptime monitoring platform with real-time analytics and alerts.


----



## 🚀 Overview

Decentralized Uptime Monitor is a next-generation website monitoring system leveraging distributed nodes, blockchain technology (`Solana/web3.js`), and global geolocation to deliver highly accurate, tamper-resistant uptime metrics. By collecting data from nodes stationed in different regions and persisting proofs to Solana, the platform offers unparalleled transparency and reliability—greatly surpassing traditional, single-origin monitoring tools.


----



## 🧑‍💻 Tech Stack & Tools

| **Technology**      | **Description**                                                                          |
|----------------------|------------------------------------------------------------------------------------------|
| **Solana/web3.js**   | Blockchain integration for decentralized proofs, integrity, and transparency             |
| **Node.js**          | Backend runtime for monitoring and orchestration                                        |
| **Bun**              | Lightning-fast JavaScript runtime & package management                                  |
| **Express**          | Robust server-side framework for handling API/UI                                        |
| **Prisma**           | Type-safe ORM for interacting with PostgreSQL                                           |
| **PostgreSQL**       | Primary data store for system status, history, and configuration                        |
| **Redis**            | Fast memory cache and pub/sub message broker for real-time events                       |
| **WebSocket**        | Real-time, bidirectional communication for live dashboard and alerts                    |
| **Nodemailer**       | Email sending for alert notifications                                                   |
| **ip-api.com**       | Region/geolocation mapping from node IP addresses                                       |


----



## ✨ Features

- **Decentralized Monitoring**: Multi-region nodes coordinated via blockchain for trust and auditability.
- **Global Analytics**: Accurate region-by-region uptime, latency, and health metrics.
- **Blockchain Writes**: Uptime proofs and downtime evidence optionally logged to Solana.
- **Fast API & Dashboard**: Responsive Express-powered endpoints and UI.
- **Real-Time Alerts**: WebSocket integration for fast frontend updates and Nodemailer-powered email alerts.
- **Geolocation Intelligence**: Each node tags status with its true location (powered by `ip-api.com`).
- **Scalable**: Easily add more nodes to cover new regions and increase monitoring fidelity.
- **Modern Dev Processing**: Built, tested, and managed using `Bun`.


----



## 🏗 How It Works

1. **Node Agents**: Distributed `Node.js` services fetch target URLs, timestamp results, and query `ip-api.com` for current location.
2. **Aggregation & Validation**: Results are published via `Redis` and processed by the central coordinator.
3. **Data Storage**: All checks, statuses, and event logs flow into `PostgreSQL` via `Prisma ORM`.
4. **Blockchain Logging**: For proof, select status changes are written to Solana via `web3.js`.
5. **Validator Rewards:** Validators who successfully submit and validate accurate region-checks receive SOL token rewards directly to their Solana address.
6. **Live Dashboard**: Users experience real-time website health live via `WebSocket` updates.
7. **Alerting**: Failures/downtime trigger instant notifications to users (via email using `Nodemailer`).


----

## 💸 Validator Incentives and SOL Payments

- **Earning SOL:**  
  Validators are compensated in SOL tokens for their participation, based on the accuracy of their uptime/downtime reports and consensus with other node validators.
- **Payout Mechanism:**  
  Incentive distribution is automated and on-chain—validators periodically receive SOL payouts to their registered Solana addresses after their contributions are verified.
- **Join as a Validator:**  
  Anyone can run a node agent from any region, register a Solana address, and begin validating for rewards.
- **Transparency:**  
  All incentive transactions and validator proofs are viewable on [Solana Explorer](https://explorer.solana.com).


----


## 🛠️ Getting Started

### Prerequisites
- **Node.js** (v16+ recommended)  
- **Bun** (v1+)  
- **PostgreSQL server** (local or remote)  
- **Redis server**  
- **Solana wallet** and API key for blockchain interactions  
- *(Optional)* Docker, for containerized deployment  

### Installation

1. **Clone the repository**  
   ```bash
   git clone https://github.com/BAHUBALI2550/DecentUptime.git
   cd decent_uptime
   ````

2. **Install dependencies**
```bash
   bun install
   ```

3. **Configure environment variables**
Create a .env file in the project root (copy the provided .env.example if available):
```env
   # Server
PORT=3000

# PostgreSQL
DATABASE_URL=postgresql://user:password@localhost:5432/uptime_db

# Redis
REDIS_URL=redis://localhost:6379

# Email Notifications
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-app-password

# Geolocation API
IP_API_URL=http://ip-api.com/json/

# Solana / Blockchain
SOLANA_KEYPAIR_PATH=/path/to/keypair.json
SOLANA_RPC_URL=https://api.mainnet-beta.solana.com

# Node Location
NODE_REGION=us-east-1

   ```

4. **Run Database Migrations**
    ```bash
   bun prisma generate
   bun prisma migrate deploy
    # or
    bun prisma migrate dev

   ```

5. **Launch the application**
    ````bash
    bun start
    ```



## ⚡ Usage

- Register and configure monitoring targets in the web dashboard or via API.
- Deploy node agents in target world regions (physical, VPS, cloud, etc.).
- Monitor health, uptime, and region-specific latency in real-time via the dashboard.
- Subscribe to downtime alerts via email and dashboard notifications.
- Expand coverage by recruiting new node operators for geographic redundancy.


----



## 🌍 Contributing Nodes

Build, run, or extend node agents in new regions!  
See [`docs/NODE_SETUP.md`](docs/NODE_SETUP.md) for setup and requirements.


----



## 📚 Documentation

- [System Architecture](docs/architecture.md)
- [API Documentation](docs/api.md)
- [Node Setup Guide](docs/NODE_SETUP.md)
- [Solana Blockchain Logging](docs/solana_logging.md)


----



## 🤝 Contributing

We welcome contributions of all kinds!  
Please see [`CONTRIBUTING.md`](CONTRIBUTING.md) for guidelines on code style, testing, branching, and submitting PRs.


----



## 🛡️ License

This project is available under the **MIT License**.


----



## 🙏 Acknowledgements

A massive thanks to the creators and maintainers of the following tools, libraries, and services:

- [Solana](https://solana.com)
- [web3.js](https://github.com/solana-labs/solana-web3.js)
- [Node.js](https://nodejs.org)
- [Bun](https://bun.sh)
- [Prisma](https://www.prisma.io)
- [PostgreSQL](https://www.postgresql.org)
- [Redis](https://redis.io)
- [Nodemailer](https://nodemailer.com)
- [ip-api.com](https://ip-api.com)

Also, a special shoutout to open-source contributors & regional node operators worldwide!


----



For demos, bug reporting, or feature requests, please use the **Issues** tab or reach out via **Discussions**.
