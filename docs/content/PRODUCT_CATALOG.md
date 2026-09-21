# Public Product Catalogue Authority

**Last reviewed: September 2026**

This document explains the public company-site catalogue in `src/productCatalog.ts`. Product repositories remain authoritative for implementation; this website owns the reviewed public summaries and the static product landing pages.

## Current public status

All six products are represented as **In development**. Public summaries are intentionally conservative and describe verified capability without turning future work into current claims.

| Product | Public company-site summary boundary |
|---|---|
| AgentGate | Governance for AI-agent actions, organization policy, approval routing, trusted identities, and controlled execution boundaries. |
| AutoPaylot | Financial-obligation organization, readiness decisions, read-only financial visibility patterns, and payment safety; real bank execution is not public capability. |
| Business Resource Scheduler | Constraint-based operational scheduling, feasibility, adaptive planning, and resource coordination. |
| EarnLogic | Governed compensation calculations, statements, audit evidence, calculation lineage, and planning intelligence. |
| FamilyOS | Family coordination, booking/calendar workflows, saved items, privacy-aware discovery, and parent-controlled access. |
| LegacyCI | Read-only database metadata, semantic lineage, pre-change impact analysis, evidence, and visible uncertainty. |

## Public landing-page authority

The Noitis company website now owns one static informational landing page for each product:

- `agentgate.html`
- `autopaylot.html`
- `business-resource-scheduler.html`
- `earnlogic.html`
- `familyos.html`
- `legacyci.html`

The product cards link only to these Noitis-owned pages. Operational application URLs are intentionally not configured in the company website while pre-production infrastructure is on hold.

The landing pages may explain verified product purpose, current capabilities, product value, and public safety boundaries. They must not expose customer data, demo tenants, product credentials, operational dashboards, private product repositories, or application scripts.

## Review rule

Change public catalogue or landing-page text when a product's verified implementation materially changes a public capability or safety boundary, a real application destination is separately approved for publication, or a factual/legal correction is required.

When a product change requires a catalogue update:

1. inspect the product repository that is authoritative for the claim;
2. update this document, `src/productCatalog.ts`, and the corresponding landing-page copy together;
3. keep operational application links unpublished until their environment is explicitly approved;
4. run `npm run check` and the browser smoke gate;
5. verify that no local/private development URL leaked into production output.
