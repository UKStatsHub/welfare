# UK Welfare Statistics Dashboard

A comprehensive, auto-updating dashboard of UK welfare statistics compiled from official government sources. This project is an exact clone/adaptation of the [UKStatsHub/police](https://github.com/UKStatsHub/police) project, adapted for welfare statistics.

**Live Site:** https://ukstatshub.github.io/welfare/

## Features

- **Daily Data Updates:** Automated GitHub Actions workflow fetches fresh data at 02:00 UTC daily
- **GOV.UK Design System:** Pixel-close to official government styling with WCAG AA accessibility
- **Comprehensive Coverage:** All major UK welfare statistics in one place
- **Fully Sourced:** Every statistic links directly to its official source

## Statistics Covered

### Benefits & Support
- **Universal Credit** - Caseloads, conditionality, regional breakdowns
- **PIP (Personal Independence Payment)** - By condition, age, region
- **DLA (Disability Living Allowance)** - Legacy disability benefit
- **ESA (Employment and Support Allowance)** - Working-age incapacity benefit
- **Carer's Allowance** - Support for unpaid carers
- **State Pension** - Recipients and expenditure
- **Child Benefit** - Families and children covered

### Asylum & Immigration
- **Section 95 Support** - Cash and accommodation support
- **Section 4 Support** - Non-cash support
- **Contingency Hotels** - Temporary accommodation
- **Unaccompanied Children** - Under-18s in care

### Social Care
- **Adult Social Care** - Long-term support recipients
- **By Support Type** - Community, residential, nursing
- **Workforce Statistics** - Vacancies and turnover

### Poverty & Housing
- **HBAI Poverty Statistics** - Relative and absolute poverty
- **Destitution Estimates** - Joseph Rowntree Foundation data
- **Food Bank Usage** - Trussell Trust and independent
- **Homelessness** - Temporary accommodation, rough sleeping

### Devolved Nations
- **Scotland** - ADP, Scottish Child Payment, Carer's Allowance Supplement
- **Wales** - Discretionary Assistance Fund
- **Northern Ireland** - Devolved administration notes

## Technology Stack

- **Framework:** Next.js 14+ with App Router
- **Styling:** Tailwind CSS with GOV.UK Design System colours
- **Components:** shadcn/ui (New York style)
- **Charts:** Recharts
- **Runtime:** Bun
- **Deployment:** GitHub Pages (static export)

## Project Structure

```
├── .github/workflows/
│   └── daily-update.yml     # Automated data fetching
├── scripts/
│   └── fetch-data.ts        # Data fetching script
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Main dashboard
│   │   └── globals.css      # GOV.UK styles
│   ├── components/
│   │   └── dashboard/       # Dashboard components
│   │       ├── Header.tsx
│   │       ├── Footer.tsx
│   │       ├── StatCard.tsx
│   │       ├── ChartCard.tsx
│   │       ├── BreakdownTable.tsx
│   │       └── ...
│   ├── data/                # Generated data files
│   │   ├── headline.ts
│   │   ├── universalCredit.ts
│   │   └── ...
│   └── types/
│       └── welfare.ts       # TypeScript interfaces
├── tailwind.config.ts       # GOV.UK colour palette
├── next.config.ts           # Static export config
└── package.json
```

## Getting Started

### Prerequisites

- Bun runtime
- Node.js 18+

### Installation

```bash
# Clone the repository
git clone https://github.com/UKStatsHub/welfare.git
cd welfare

# Install dependencies
bun install

# Run development server
bun run dev
```

### Building for Production

```bash
# Fetch latest data
bun run fetch

# Build static site
bun run build

# Output will be in ./out directory
```

## Data Sources

### Government (Primary)

| Source | Data |
|--------|------|
| [DWP Statistics](https://www.gov.uk/government/organisations/department-for-work-pensions/about/statistics) | UC, PIP, DLA, ESA, Carer's Allowance, State Pension |
| [Stat-Xplore](https://stat-xplore.dwp.gov.uk/) | Interactive DWP data explorer |
| [Home Office](https://www.gov.uk/government/statistical-data-sets/immigration-system-statistics-data-tables) | Asylum support statistics |
| [ONS](https://www.ons.gov.uk/) | Disability, poverty, employment data |
| [DHSC](https://www.gov.uk/government/collections/adult-social-care-statistics) | Adult social care |
| [HMRC](https://www.gov.uk/government/collections/child-benefit-statistics) | Child Benefit |
| [DLUHC](https://www.gov.uk/government/collections/homelessness-statistics) | Homelessness |
| [Social Security Scotland](https://www.socialsecurity.gov.scot/about-statistics) | Devolved Scottish benefits |

### Independent Analysis

- Joseph Rowntree Foundation (poverty, destitution)
- Trussell Trust (food bank data)
- Institute for Fiscal Studies
- Resolution Foundation
- House of Commons Library

## Automation

The dashboard automatically updates via GitHub Actions:

1. **Schedule:** Runs daily at 02:00 UTC
2. **Process:**
   - Fetches latest data from all sources
   - Generates TypeScript data files
   - Builds static site
   - Deploys to GitHub Pages
3. **Fallback:** If fetch fails, builds with existing data

## Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

- **Code:** MIT License
- **Data:** Crown Copyright - Released under Open Government Licence v3.0

## Acknowledgements

- Based on [UKStatsHub/police](https://github.com/UKStatsHub/police) template
- GOV.UK Design System for styling guidelines
- All official data providers

---

**Maintained by [UK Statistics Hub](https://github.com/UKStatsHub)**
