
# Comparison of SonarQube vs axe-core for Accessibility Testing

This document provides a detailed comparison between SonarQube and axe-core for accessibility testing, including features, limitations, and recommended usage.


## Overview of Tools

### SonarQube
- Primary Role: Static code analysis for code quality, security, and maintainability.
- Accessibility Support:
  - Limited to HTML rules (approx. 14–21 rules in SonarHTML profile).
  - Detects issues like missing `lang` attribute, improper ARIA roles, and table descriptions.
- Integration:
  - No native support for Cypress/Playwright accessibility scans.
  - Can import ESLint issues (e.g., `eslint-plugin-jsx-a11y`) into SonarQube for reporting.
- Compliance: WCAG 2.1 AA commitment for Sonar products.

### axe-core
- Primary Role: Automated accessibility testing engine by Deque Systems.
- Features:
  - Extensive WCAG 2.x rule coverage (color contrast, ARIA roles, alt text, keyboard navigation).
  - Zero false-positive philosophy.
  - Customizable rules and tags.
- Integration:
  - Cypress: via `cypress-axe` plugin.
  - Playwright: via `@axe-core/playwright`.
- Compliance: WCAG 2.1/2.2, Section 508.



## Comparison Table

| Feature                          | SonarQube                              | axe-core (Cypress/Playwright)                |
|---------------------------------|----------------------------------------|----------------------------------------------|
| Testing Type                    | Static code analysis                  | Runtime DOM analysis                         |
| WCAG Coverage                   | Limited (14–21 HTML rules)            | Extensive (hundreds of rules)               |
| Dynamic Content                 | ❌ Cannot test rendered state          | ✅ Tests actual rendered DOM                 |
| Integration with CI/CD          | ✅ Native for code quality pipelines   | ✅ Easy via npm packages and test frameworks |
| Cypress Support                 | ❌ No direct support                   | ✅ `cypress-axe` plugin                      |
| Playwright Support              | ❌ No direct support                   | ✅ `@axe-core/playwright`                    |
| Customization                   | Limited (via ESLint imports)          | Full rule/tag customization                 |
| False Positives                 | Higher (static analysis limitations)  | Lower (DOM-based checks)                    |
| Best Use Case                   | Code quality + basic accessibility    | Comprehensive accessibility audits           |



## Limitations

### SonarQube
- Performs static analysis only; cannot analyze rendered DOM or dynamic states.
- Limited accessibility rules (14–21 HTML checks).
- Cannot detect runtime issues like modal dialogs or dynamic ARIA states.

### axe-core
- Runs only on rendered DOM (browser level), not on raw source code.
- Cannot perform static code analysis.
- Highly recommended to use with automation tools (Cypress/Playwright) for best results.
- Manual testing still needed for complete coverage.



## Resources and References
- SonarQube Accessibility Statement: https://www.sonarsource.com/accessibility/
- SonarQube Community Discussion: https://community.sonarsource.com/t/how-to-scan-accessibility-issues-using-sonarqube/17307
- ESLint Integration Guide: https://github.com/SonarSource/eslint-config-sonarqube
- axe-core WCAG Coverage: https://www.w3.org/WAI/standards-guidelines/act/implementations/axe-core/
- axe-core Rules List: https://dequeuniversity.com/rules/axe/html/4.8
- Cypress Accessibility Guide: https://docs.cypress.io/app/guides/accessibility-testing
- cypress-axe npm: https://www.npmjs.com/package/cypress-axe
- Playwright Accessibility Testing Guide: https://playwright.dev/docs/accessibility-testing
- @axe-core/playwright npm: https://www.npmjs.com/package/@axe-core/playwright
- axe-core GitHub: https://github.com/dequelabs/axe-core
- Limitations of Automated Accessibility Testing: https://www.arcinclusion.com/limitations-of-automated-accessibility-testing/
