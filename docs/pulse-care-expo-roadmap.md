# Pulse Care (Expo Go) — Phase 0 to Phase 5 Product & Delivery Plan

## Vision
Build **Pulse Care** as a one-stop women’s menstrual health companion using **React Native + Expo Go**, combining period tracking, lifestyle logging (food, sleep, mood, hydration), preventive insights, and trusted remedies-oriented education.

> **Important health note:** The app should provide wellness guidance and risk-awareness signals, not medical diagnosis. For suspected PCOS/PCOD or severe symptoms, users should be guided to licensed clinicians.

---

## Core Product Goals
1. Help users understand cycle stages and body changes with clear, non-technical explanations.
2. Capture daily lifestyle signals that influence cycle health.
3. Generate personalized cycle + lifestyle insights and nudges.
4. Provide preventive education and behavior coaching for long-term hormonal health.
5. Support **Mother–Daughter linked accounts**, including profile-to-account conversion at adulthood.

---

## Why Expo Go (instead of Flutter)
- Faster onboarding for early teams and rapid prototyping.
- Strong React ecosystem for analytics, forms, and visualization.
- Easy device testing via Expo Go app.
- Managed workflow reduces native build complexity during MVP.

---

## User Roles
- **Primary User (Woman/Teen):** Tracks cycle, symptoms, lifestyle, and receives insights.
- **Mother/Guardian:** Can create and manage linked daughter profile(s), view permitted insights.
- **Daughter (Minor):** Has privacy-aware profile linked to guardian.
- **Independent Adult Account:** Daughter can convert to own account while preserving historical data.

---

## Product Phases (0 → 5)

## Phase 0 — Discovery, Safety, and Foundations (2–4 weeks)
### Outcomes
- Define problem scope, legal boundaries, and success metrics.
- Validate data model and health content framework.

### Deliverables
- User research with teens, mothers, young adults.
- Clinical advisory input for safe educational language.
- Privacy policy draft and consent architecture.
- Information architecture for tracking + insights + remedies content.
- Baseline analytics plan (activation, retention, logging completion).

### Exit Criteria
- Signed-off product requirements document (PRD).
- Approved content safety guidelines.
- MVP scope frozen for Phase 1.

---

## Phase 1 — MVP Tracking + Cycle Basics (4–6 weeks)
### Outcomes
- Launch first usable app with core tracking.

### Features
- Onboarding: age group, cycle length estimate, goals.
- Period logging: start/end dates, flow intensity.
- Daily logs: mood, sleep hours, water intake, activity.
- Calendar + next period prediction (basic rules).
- Stage education cards (Cycle stages 1–5 explained in simple language).
- Reminder notifications for logging and hydration.

### Tech (Expo MVP)
- Expo Router for navigation.
- React Query + local cache for fast form interactions.
- Secure auth (email/phone OTP) with role flags.
- Backend: Firebase/Supabase for auth + data.

### Exit Criteria
- Users can complete full daily logging in < 90 seconds.
- 7-day retention baseline established.
- Crash-free sessions > 98%.

---

## Phase 2 — Insight Engine v1 + Risk Awareness (6–8 weeks)
### Outcomes
- Convert raw logs into useful insights.

### Features
- Correlation insights:
  - Sleep vs pain/mood trends.
  - Water intake vs bloating/fatigue.
  - Food patterns vs cycle discomfort.
- Weekly and cycle summary reports.
- “Early risk awareness” score bands (low/moderate/high) with educational explanations.
- Rule-based preventive suggestions (sleep consistency, hydration goals, stress management).
- Exportable monthly summary PDF.

### Data Science / Rules
- Start with transparent rule-based models.
- Add confidence labels (“high confidence” only with sufficient data).
- Avoid medical diagnostic language.

### Exit Criteria
- At least 3 actionable insights per cycle for active users.
- Measured uplift in habit adherence (water/sleep logs).

---

## Phase 3 — Mother–Daughter Linked Profiles (6 weeks)
### Outcomes
- Family support model with robust privacy controls.

### Features
- Mother creates daughter profile with guardian consent flow.
- Permission matrix:
  - Shared: reminders, general cycle calendar, wellness score trend.
  - Private-by-default: sensitive notes/symptoms unless explicitly shared.
- Safe communications prompts (“Talk to your daughter about…” guidance).
- Multiple child profiles per guardian account.

### Conversion Flow (Minor → Adult)
- Daughter receives account upgrade prompt at configured adult age threshold.
- Verifies identity and sets independent credentials.
- Data migration:
  - Historical logs retained.
  - Guardian access reduced/removed based on consent.
  - Audit trail preserved.

### Exit Criteria
- Zero-loss data migration in test scenarios.
- Consent and access logs verifiable.

---

## Phase 4 — Personalization + Preventive Programs (8–10 weeks)
### Outcomes
- Shift from tracking app to personalized wellness coach.

### Features
- Personalized routines by cycle stage (nutrition, movement, hydration, sleep).
- Symptom-specific plans (e.g., cramps, fatigue, mood swings).
- Habit streaks and goal plans (“14-day hydration reset”).
- In-app content hub: articles, short videos, checklists.
- Localized language support and culturally relevant nutrition suggestions.

### Intelligence Upgrades
- Adaptive recommendations based on adherence and outcomes.
- Explainable recommendation cards (“Why this suggestion?”).

### Exit Criteria
- Improvement in self-reported symptom management.
- Increase in 30-day retention and program completion rates.

---

## Phase 5 — Scale, Clinical Integrations, and Ecosystem (ongoing)
### Outcomes
- Build long-term platform with trusted partnerships.

### Features
- Teleconsultation integrations (where legally permissible).
- Lab report upload and timeline tracking.
- Smart wearable integrations (sleep/activity).
- Community-safe forums and moderated expert sessions.
- Regional compliance hardening and enterprise partnerships.

### Business/Platform
- Freemium + premium coaching modules.
- B2B partnerships (schools, colleges, women’s health programs).
- Population-level anonymized trend dashboards (strict consent and de-identification).

### Exit Criteria
- Regulatory readiness in target markets.
- Sustainable unit economics with healthy retention cohorts.

---

## Cycle Stage Model (User-facing: Stage 1 to Stage 5)
1. **Stage 1: Menstrual Phase** — bleeding days, rest and replenishment focus.
2. **Stage 2: Follicular Phase** — energy building, balanced nutrition and activity.
3. **Stage 3: Ovulatory Phase** — peak energy window, hydration and recovery emphasis.
4. **Stage 4: Luteal Early** — stabilize sleep, reduce inflammation-supportive habits.
5. **Stage 5: Luteal Late / PMS Window** — mood support, lower-intensity routines, symptom preparedness.

---

## Suggested Expo App Architecture
- **Frontend:** React Native (Expo), TypeScript.
- **Navigation:** Expo Router.
- **State/Data:** React Query + Zustand (UI state) + offline cache.
- **Backend:** Supabase or Firebase (Auth, Postgres/Firestore, storage, functions).
- **Notifications:** Expo Notifications.
- **Analytics:** PostHog/Firebase Analytics.
- **Content Management:** Headless CMS for health education content.
- **Security:** Encryption at rest, secure token handling, role-based access control.

---

## KPI Framework by Phase
- **Activation:** onboarding completion, first 7 logs.
- **Engagement:** daily logging rate, reminders acted upon.
- **Outcome Proxy:** symptom trend improvement, lifestyle adherence.
- **Trust & Safety:** consent acceptance, privacy setting usage, safety-content views.
- **Retention:** D7, D30, D90 cohort retention.

---

## Non-Negotiable Guardrails
1. No diagnosis claims for PCOS/PCOD.
2. Clear emergency escalation guidance for severe symptoms.
3. Guardian–minor privacy controls with explicit consent records.
4. Plain-language insights with explainability.
5. Inclusive design (age, language, literacy levels).

---

## Execution Checklist (first 60 days)
- Finalize PRD, consent policy, and risk language.
- Build Expo MVP screens + logging flows.
- Ship prediction + stage education cards.
- Add insight engine v1 with rule-based nudges.
- Start pilot with limited cohort and iterate weekly.

This roadmap gives a practical path from idea to scalable women’s health platform while staying safe, trustworthy, and implementable in **Expo Go**.
