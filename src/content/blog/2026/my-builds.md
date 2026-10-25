---

title: "My Builds"
author: "Prashant Bhushan"
pubDatetime: 2026-10-24T14:16:00+05:30
description: "A comprehensive deep dive into everything I'm building — from POS systems and procurement intelligence to gym management and financial ledgers."
tags: ["builds", "projects", "engineering", "opensource"]
draft: false
featured: true
---

Building software is how I learn, think, and explore ideas. I work across multiple disciplines—law and public policy on one side, full-stack systems and agentic AI on the other. Rather than keeping prototypes locked on local drives, I prefer building cohesive tools designed to solve operational challenges for real people and businesses.

Below is a detailed overview of what I am actively designing, engineering, and maintaining across my GitHub repositories.

---

### 1. RetailFlow (SHOP-ERP)

**Repository**: [github.com/prashantb2400/SHOP-ERP](https://github.com/prashantb2400/SHOP-ERP)

RetailFlow is an agency-grade, high-velocity Enterprise Resource Planning (ERP) and Point-of-Sale (POS) platform engineered for modern commercial stores, wholesale distributors, and multi-entity retail businesses. Built around a split-cockpit architectural paradigm, RetailFlow separates rapid catalog interactions from complex financial settlement. The left pane functions as a high-throughput transaction terminal supporting barcode scanning, rapid SKU lookup, party assignment, and multi-tender switching across Cash, UPI, credit ledgers, and card terminals. The right pane houses an industrial double-bezel settlement enclosure that recalculates dynamic GST breakdowns (CGST, SGST, IGST) in real time alongside freight, handling, and discretionary trade discounts.

Under the hood, RetailFlow operates on an offline-first architecture powered by client-side IndexedDB with seamless cloud synchronization via Supabase. Cashiers can continue generating legally compliant GST invoices, receipts, and itemized thermal printouts even during complete network outages, with background reconciliations firing immediately once connectivity is re-established. The system incorporates configurable thermal receipt layouts, multi-warehouse inventory tracking, and granular staff role-based access control. Beyond traditional point-of-sale functionality, RetailFlow features a native Model Context Protocol (MCP) server. This server exposes structured retail toolsets directly to AI agents, allowing LLMs to inspect live inventory levels, calculate inventory reorder thresholds, audit customer outstanding balances, and draft purchase orders autonomously through natural language commands. With an interface inspired by Linear and Stripe, complete with a keyboard-driven Command Palette (`Ctrl+K`), RetailFlow provides enterprise ERP capabilities in an agile, zero-friction package designed specifically for the demanding pace of real-world Indian commerce.

---

### 2. Tender-OS (GeM Procurement Intelligence)

**Repository**: [github.com/prashantb2400/Tender-OS](https://github.com/prashantb2400/Tender-OS)

Tender-OS is an autonomous government procurement decision intelligence and bid management system engineered specifically for government contractors, resellers, and MSME vendors participating on the Government e-Marketplace (GeM) and state e-tender portals. Focusing on a ₹5,00,000 working capital boundary in Jaunpur, Uttar Pradesh, the system eliminates the administrative overhead and financial risks that typically exclude independent businesses from public procurement. Tender-OS implements an automated missing-estimate recovery formula (multiplying unit baseline pricing by requisite quantity) to guarantee that zero-estimate or improperly formatted tender notifications are never missed during automated portal scraping cycles.

The platform provides a high-contrast executive command center split into five specialized workspaces. It features sticky territorial filters covering Eastern Uttar Pradesh districts, highlighting high-probability opportunities within reach of local logistics, backed by automated hourly scraping and multi-channel bid notifications delivered via Telegram. For technical compliance, Tender-OS constructs a five-column Golden Parameters Matrix matching OEM catalogue specifications with buyer bid criteria. Its financial engine builds a rigorous L1 landed cost waterfall, computing base equipment sourcing, freight overheads, statutory 2% GST TDS withholdings under Section 51 of the CGST Act, and NABL testing reserves to protect vendor margins. Crucially, Tender-OS incorporates an automated Additional Terms & Conditions (ATC) trap auditor. This auditor flags restrictive clauses, turnover barriers, or illegal brand preferences, and generates one-click legal grievance representations citing the Public Procurement Policy for MSEs Order 2012. By translating complex bureaucratic tenders into actionable plain-English guides, Tender-OS transforms public sector bidding into a systematic, repeatable enterprise.

---

### 3. GymERP (GYM-ERP-2)

**Repository**: [github.com/prashantb2400/GYM-ERP-2](https://github.com/prashantb2400/GYM-ERP-2)

GymERP is a full-stack, multi-tenant operations platform designed to digitize fitness centers, athletic clubs, and boutique gyms. Moving beyond fragile spreadsheet tracking, GymERP combines a centralized Next.js web dashboard with cross-platform desktop executables and native Android APKs built for management staff and unattended member kiosks. The platform streamlines the entire gym lifecycle, from initial member onboarding and biometric enrollment to automated recurring subscription billing and trainer shift scheduling.

At the hardware layer, GymERP interfaces directly with physical kiosk hardware to support multiple check-in modalities, including camera-based facial recognition, USB fingerprint scanners, and dynamic QR code authentication. When members enter the facility, the kiosk agent validates active membership status, detects overdue payment flags, and displays real-time attendance logs on a desktop sidebar monitor without requiring manual receptionist intervention. The system also triggers automated WhatsApp payment reminders when memberships approach expiration and handles biometric verification fallbacks during hardware outages. The backend system includes an intelligent workout and routine engine that enables trainers to prescribe personalized regimen schedules and monitor client progress metrics over time. For business administration, GymERP incorporates an integrated cash and expense ledger that tracks equipment maintenance costs, utility outlays, and staff payroll alongside incoming membership fees. Automated daemon services handle localized database backups to external USB drives, guaranteeing data resilience without costly enterprise cloud contracts. By unifying member self-service, physical access security, and administrative financials, GymERP delivers a robust, turnkey operational backbone for modern fitness businesses.

---

### 4. Bahi-Khata Modern (Expense-Tracker)

**Repository**: [github.com/prashantb2400/Expense-Tracker](https://github.com/prashantb2400/Expense-Tracker)

Bahi-Khata Modern is an intuitive digital ledger and expense tracking system conceived as a modern alternative to traditional paper khata notebooks and bloated corporate accounting tools. Created to address the practical financial tracking needs of individual builders, freelancers, and small Indian retail establishments, the application digitizes daily cash movements while preserving the mental model of dual-entry debit and credit bookkeeping (Jama and Naam). The user interface emphasizes rapid keyboard-first data entry, allowing users to log income, operating expenditures, and vendor receivables in seconds without navigating nested configuration menus.

The application organizes financial records across customizable account categories, providing instant visual indicators of net operating cash flow, pending payables, and outstanding customer credits. An interactive balance sheet recalculates in real time as entries are posted, giving operators immediate visibility into daily liquidity, monthly spending forecasts, and periodic expense trends. To facilitate tax accounting and regulatory compliance, Bahi-Khata Modern features one-click statement generation, producing clean, formatted PDF reports and Excel-compatible exports ready for GST filing or accountant handoff. It also supports password-protected ledger snapshots and encrypted local backups for enhanced privacy. Engineered with an offline-first philosophy using modern web technologies, the application operates as an installable Progressive Web App (PWA). All transaction logs are securely persisted locally on the client device, ensuring that sensitive financial ledgers remain responsive and accessible in low-bandwidth environments without dependence on third-party cloud connections. Bahi-Khata Modern bridges the gap between historical bookkeeping traditions and fast modern software design.
