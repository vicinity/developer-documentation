# **Testing Guidelines for Vicinity’s Web and Mobile Projects**

This document outlines testing guidelines to ensure high-quality, bug-free features for Vicinity’s web and mobile projects.

## **1. Branching, Testing, and Deployment Strategy (Web)**

### **Feature Branch Strategy**

- **Process:**

  - Create feature branches from `master` for new features or major changes.
  - Keep branches isolated until fully tested and approved.

- **Testing Phases:**

  1. **Unit Tests:** Validate isolated components.
  2. **Integration Tests:** Test interactions with Storyblok, WaivPay, and authentication.
  3. **E2E Tests:** Simulate user flows in staging.
  4. **Visual Regression Tests:** Check UI consistency with Percy.
  5. **Manual QA:** National Marketing reviews deployed changes.

- **Merge Approval:**
  - Code review by another developer for quality and standards.
  - CI confirms all automated tests (unit, E2E, linting) pass.
  - Marketing provides sign-off.
  - Merge into `master` after all approvals.

### **Production Deployment**

- **Steps:**

  1. Development leads and product owners confirm readiness.
  2. Merge to `master` and deploy to production.
  3. Tag the release with a semantic version (e.g. `v1.2.3`) for tracking.

- **Post-Deployment:**
  - Automate smoke tests (e.g. homepage load, key pages) to verify core functionality.
  - Monitor logs, analytics, and performance metrics for stability.

## **2. Unit Testing**

### **Overview**

- Unit tests validate individual functions, methods, or components in isolation.

### **Best Practices**

- **Tools:** Use Jest for JavaScript-based projects (or equivalent tools for other languages).
- **Coverage:** Aim for at least 80% code coverage, enforced through CI pipeline thresholds.
- **Mocking:** Mock external dependencies (e.g. Storyblok API, WaivPay) to isolate units under test.

## **3. Integration Testing**

### **Overview**

- Integration tests ensure that different system components (e.g. CMS, payment, authentication) work together seamlessly.

### **Best Practices**

- **Tools:** Use Jest for API integration tests and Playwright for UI-level integration tests.
- **Test Data:** Use programmatically created test content in the Test spaces and clean up after tests are completed.
- **Mocking:** Mock external services when testing internal integrations but use real services for critical path tests.

### **Scenarios**

- **API Integrations:**

  - Test interactions between backend services and external APIs (e.g. Storyblok, WaivPay, JRNI, Vivenu).
  - Validate API requests and responses, including headers, status codes, and payloads.

- **Authentication:**

  - Test email-based authentication using the Gmail API.
  - Test phone-based authentication using the Twilio API.

- **Payment Processing:**
  - Test payment flows via WaivPay, including successful and failed transactions.
  - Validate webhook handling for payment confirmations.

## **4. End-to-End (E2E) Testing**

### **Overview**

- E2E tests simulate real user journeys across the entire application.

### **Best Practices**

- **Tools:** Use Playwright for web and equivalent for mobile.
- **Test Data:** Apply strategies from the **Services and Test Content** section.

## **5. Visual Regression Testing**

### **Overview**

- Visual regression tests ensure no unintended UI changes occur.

### **Best Practices**

- **Tool:** Use Percy to capture and compare screenshots against baseline snapshots.
- **Integration:** Run Percy in the CI/CD pipeline for every pull request.
- **Management:** Update baselines after intentional UI changes and review differences manually.

## **6. Performance Testing**

### **Overview**

- Performance testing ensures the application meets speed and scalability requirements.

**Status:** Currently outsourced.

## **7. Penetration Testing**

### **Overview**

- Penetration testing protects sensitive data and ensures compliance, particularly for authentication and payments.

**Status:** Currently outsourced.

## **8. Mobile Testing**

### **Todo**

## **9. Services and Test Content**

If required, Vicinity will provide access to QA test environments for integration and E2E tests. This includes:

- **Storyblok**, **JRNI**, **Vivenu**, and **Waivpay**.

### **Storyblok Setup**

- Vicinity will clone the Chadstone production space into a "Test" space using the Storyblok dashboard.
- Irrelevant content (e.g. pages outside app-specific folders like website or mobile app) will be removed while retaining necessary folders and settings.
- Vicinity should document this process.

### **Service Test Data Creation and Cleanup**

- Programmatically create test content in the relevant service's QA space using their APIs.
- Delete test content after tests are completed to maintain a clean environment.

## **10. Authentication**

### **Email-Based Authentication**

- Vicinity will provide a Gmail address for testing.
- Use Gmail aliases (e.g. `testuser+test1@gmail.com`) for unique inboxes per test run.
- Fetch OTPs programmatically using the Gmail API.
- Clean up by unregistering test users via the Vicinity API after each test run.

**Note:** Refer to internal documentation for the Gmail API setup guide.

### **Phone-Based Authentication**

- Vicinity will provide a mobile phone number for testing.
- Use this number for SMS OTP delivery.
- Retrieve OTPs programmatically using the Twilio API.
- Clean up by unregistering test users via the Vicinity API after each test run.

**Note:** Refer to internal documentation for the Twilio API setup guide.

## **11. Backend APIs**

Use Vicinity's QA mediation layer / APIs for the majority of testing (excluding production smoke checks).
