import {
  Header,
  Footer,
  StatCard,
  ChartCard,
  BreakdownTable,
  QuickLinks,
  Hero,
  Section,
  MethodologySection,
} from '@/components/dashboard';

// Import data
import { headline } from '@/data/headline';
import { universalCredit } from '@/data/universalCredit';
import { pip } from '@/data/pip';
import { esa } from '@/data/esa';
import { dla } from '@/data/dla';
import { asylumSupport } from '@/data/asylumSupport';
import { adultSocialCare } from '@/data/adultSocialCare';
import { poverty } from '@/data/poverty';
import { homelessness } from '@/data/homelessness';
import { carers } from '@/data/carers';
import { statePension } from '@/data/statePension';
import { childBenefit } from '@/data/childBenefit';
import { devolvedNations } from '@/data/devolvedNations';
import { nhsWelfareOverlap } from '@/data/nhsWelfareOverlap';

export default function Home() {
  const quickLinks = [
    {
      title: 'DWP Statistics',
      url: 'https://www.gov.uk/government/organisations/department-for-work-pensions/about/statistics',
      description: 'Official DWP benefit statistics',
    },
    {
      title: 'Stat-Xplore',
      url: 'https://stat-xplore.dwp.gov.uk/',
      description: 'Interactive data exploration tool',
    },
    {
      title: 'ONS Data',
      url: 'https://www.ons.gov.uk/',
      description: 'Office for National Statistics',
    },
    {
      title: 'Home Office Stats',
      url: 'https://www.gov.uk/government/organisations/home-office/about/statistics',
      description: 'Immigration and asylum statistics',
    },
  ];

  return (
    <>
      <Header />
      
      <main id="main-content" className="flex-grow">
        <Hero
          title="UK Welfare Statistics"
          subtitle="Comprehensive statistics on UK welfare, benefits, asylum support, poverty, and social care. Data updated daily from official government sources."
          lastUpdated={headline.lastUpdated}
        />

        {/* Headline Statistics */}
        <section className="bg-white py-8 md:py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="border-l-4 border-l-gov-blue pl-4 mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gov-blue">
                Headline UK Welfare Statistics
              </h2>
              <p className="text-gov-grey-600 mt-2">
                Key figures showing the scale of welfare provision across the UK
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              <StatCard
                id="uc-total"
                title="Universal Credit Claimants"
                value={headline.universalCredit}
                change={universalCredit.changeYoY}
                changeDirection="up"
                source={universalCredit.source}
                lastUpdated={headline.lastUpdated}
              />
              <StatCard
                id="pip-total"
                title="PIP Recipients"
                value={headline.pipCaseload}
                change={pip.changeYoY}
                changeDirection="up"
                source={pip.source}
                lastUpdated={headline.lastUpdated}
              />
              <StatCard
                id="poverty-total"
                title="People in Poverty (AHC)"
                value={headline.peopleInPoverty}
                unit="million"
                description="After housing costs"
                source={poverty.source}
                lastUpdated={headline.lastUpdated}
              />
              <StatCard
                id="homelessness-total"
                title="Households in Temporary Accommodation"
                value={headline.householdsHomeless}
                change={38.5}
                changeDirection="up"
                changeLabel="YoY increase"
                source={homelessness.source}
                lastUpdated={headline.lastUpdated}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-4 md:mt-6">
              <StatCard
                id="asylum-total"
                title="Asylum Support Recipients"
                value={headline.asylumSupport}
                change={18.6}
                changeDirection="up"
                changeLabel="YoY increase"
                source={asylumSupport.source}
                lastUpdated={headline.lastUpdated}
              />
              <StatCard
                id="carers-total"
                title="Unpaid Carers"
                value={headline.unpaidCarers}
                unit="million"
                description="Census 2021 estimate"
                source={carers.source}
                lastUpdated={headline.lastUpdated}
              />
              <StatCard
                id="adult-social-care"
                title="Adult Social Care Recipients"
                value={adultSocialCare.totalRecipients}
                source={adultSocialCare.source}
                lastUpdated={headline.lastUpdated}
              />
              <StatCard
                id="annual-expenditure"
                title="Annual Welfare Expenditure"
                value="£295"
                unit="billion"
                description="Total UK welfare spending"
                source={{ name: 'DWP/ONS', url: 'https://www.gov.uk/government/organisations/department-for-work-pensions', releaseDate: '2024-25' }}
                lastUpdated={headline.lastUpdated}
              />
            </div>
          </div>
        </section>

        <QuickLinks links={quickLinks} />

        {/* Universal Credit Section */}
        <Section
          id="universal-credit"
          title="Universal Credit & Working-Age Benefits"
          description="Universal Credit is a means-tested benefit for working-age people. It replaces six legacy benefits and is now the primary working-age benefit in the UK."
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <ChartCard
              id="uc-trend"
              title="Universal Credit Caseload Trend"
              description="Monthly caseload since January 2019"
              data={universalCredit.timeSeries}
              chartType="line"
              source={universalCredit.source}
              lastUpdated={headline.lastUpdated}
              height={300}
            />
            <BreakdownTable
              title="Universal Credit by Conditionality"
              description="Claimants grouped by work-related requirements"
              dimension="Conditionality"
              items={[
                { category: 'Searching for work', value: universalCredit.searchWork, percentage: 28.2 },
                { category: 'Work preparation', value: universalCredit.workPreparation, percentage: 19.2 },
                { category: 'Working with requirements', value: universalCredit.workingWithRequirements, percentage: 6.7 },
                { category: 'No work requirements', value: universalCredit.noWorkRequirements, percentage: 43.5 },
                { category: 'Work focused interview', value: universalCredit.workFocusedInterview, percentage: 2.4 },
              ]}
              source={universalCredit.source}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <BreakdownTable
              title="Universal Credit by Age Group"
              dimension="Age"
              items={universalCredit.byAge}
              source={universalCredit.source}
              maxRows={6}
            />
            <BreakdownTable
              title="Universal Credit by Region"
              dimension="Region"
              items={universalCredit.byRegion.map(r => ({ category: r.region, value: r.value, percentage: r.percentage }))}
              source={universalCredit.source}
              maxRows={6}
            />
          </div>
        </Section>

        {/* Disability Benefits Section */}
        <Section
          id="disability-benefits"
          title="Disability & Special Needs Support"
          description="Personal Independence Payment (PIP), Disability Living Allowance (DLA), Employment and Support Allowance (ESA), and Adult Disability Payment (ADP) in Scotland provide support for people with disabilities and health conditions."
          className="bg-gov-grey-50"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-8">
            <StatCard
              id="pip-caseload"
              title="PIP Caseload"
              value={pip.totalCaseload}
              change={pip.changeYoY}
              changeDirection="up"
              source={pip.source}
              lastUpdated={headline.lastUpdated}
            />
            <StatCard
              id="dla-caseload"
              title="DLA Caseload"
              value={dla.totalCaseload}
              change={dla.changeYoY}
              changeDirection="down"
              source={dla.source}
              lastUpdated={headline.lastUpdated}
            />
            <StatCard
              id="esa-caseload"
              title="ESA Caseload"
              value={esa.totalCaseload}
              change={esa.changeYoY}
              changeDirection="down"
              description="Being replaced by UC"
              source={esa.source}
              lastUpdated={headline.lastUpdated}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <ChartCard
              id="pip-trend"
              title="PIP Caseload Growth"
              description="Annual PIP recipients since 2019"
              data={pip.timeSeries}
              chartType="area"
              source={pip.source}
              lastUpdated={headline.lastUpdated}
              height={280}
            />
            <BreakdownTable
              title="PIP by Main Health Condition"
              description="Primary disabling condition recorded"
              dimension="Condition"
              items={pip.byCondition}
              source={pip.source}
              maxRows={8}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <BreakdownTable
              title="ESA by Health Condition"
              dimension="Condition"
              items={esa.byCondition}
              source={esa.source}
            />
            <BreakdownTable
              title="PIP by Age Group"
              dimension="Age"
              items={pip.byAge}
              source={pip.source}
            />
          </div>
        </Section>

        {/* Asylum Support Section */}
        <Section
          id="asylum-support"
          title="Asylum & Refugee Support"
          description="Support provided to asylum seekers while their claims are processed, including Section 95 cash support, Section 4 support, and accommodation including hotels."
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
            <StatCard
              id="s95-payment"
              title="Section 95 In Payment"
              value={asylumSupport.section95.inPayment}
              source={asylumSupport.source}
              lastUpdated={headline.lastUpdated}
            />
            <StatCard
              id="s95-accommodation"
              title="In Asylum Accommodation"
              value={asylumSupport.section95.inAccommodation}
              source={asylumSupport.source}
              lastUpdated={headline.lastUpdated}
            />
            <StatCard
              id="hotels"
              title="In Contingency Hotels"
              value={asylumSupport.hotels.totalInHotels}
              description="Temporary accommodation"
              source={asylumSupport.source}
              lastUpdated={headline.lastUpdated}
            />
            <StatCard
              id="uac"
              title="Unaccompanied Children"
              value={asylumSupport.unaccompaniedChildren.total}
              source={asylumSupport.source}
              lastUpdated={headline.lastUpdated}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <ChartCard
              id="asylum-trend"
              title="Asylum Support Caseload Trend"
              description="Quarterly Section 95 recipients"
              data={asylumSupport.timeSeries}
              chartType="bar"
              source={asylumSupport.source}
              lastUpdated={headline.lastUpdated}
              height={280}
            />
            <BreakdownTable
              title="Section 95 by Nationality"
              description="Top nationalities receiving asylum support"
              dimension="Nationality"
              items={asylumSupport.section95.byNationality}
              source={asylumSupport.source}
              maxRows={8}
            />
          </div>

          <div className="bg-gov-grey-50 p-4 md:p-6 rounded">
            <h3 className="text-lg font-bold text-gov-blue mb-4">Daily Allowance Rates (Section 95)</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {Object.entries(asylumSupport.section95.dailyAllowance).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="text-2xl font-bold text-gov-blue">£{value}</div>
                  <div className="text-sm text-gov-grey-500 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-gov-grey-500 mt-4">
              Asylum seekers receive significantly less than UK benefit claimants - approximately £6.77 per day for a single adult.
            </p>
          </div>
        </Section>

        {/* Adult Social Care Section */}
        <Section
          id="adult-social-care"
          title="Elderly & Adult Social Care"
          description="Long-term support for older adults and working-age adults with care needs, provided by local authorities in England."
          className="bg-gov-grey-50"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
            <StatCard
              id="asc-recipients"
              title="Adult Social Care Recipients"
              value={adultSocialCare.totalRecipients}
              source={adultSocialCare.source}
              lastUpdated={headline.lastUpdated}
            />
            <StatCard
              id="asc-expenditure"
              title="Annual Expenditure"
              value="£22.1"
              unit="billion"
              source={adultSocialCare.source}
              lastUpdated={headline.lastUpdated}
            />
            <StatCard
              id="asc-workforce"
              title="Care Workforce Jobs"
              value={adultSocialCare.workforce.totalJobs}
              source={adultSocialCare.source}
              lastUpdated={headline.lastUpdated}
            />
            <StatCard
              id="asc-vacancies"
              title="Vacancy Rate"
              value={adultSocialCare.workforce.vacancyRate}
              unit="%"
              description="Staff vacancies in care sector"
              source={adultSocialCare.source}
              lastUpdated={headline.lastUpdated}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard
              id="asc-trend"
              title="Adult Social Care Recipients Trend"
              description="Annual recipients by financial year"
              data={adultSocialCare.timeSeries}
              chartType="line"
              source={adultSocialCare.source}
              lastUpdated={headline.lastUpdated}
              height={280}
            />
            <BreakdownTable
              title="By Primary Support Reason"
              dimension="Support Reason"
              items={adultSocialCare.byPrimarySupportReason}
              source={adultSocialCare.source}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <BreakdownTable
              title="By Support Type"
              dimension="Support Type"
              items={adultSocialCare.bySupportType}
              source={adultSocialCare.source}
            />
            <BreakdownTable
              title="By Age Group"
              dimension="Age"
              items={adultSocialCare.byAge}
              source={adultSocialCare.source}
            />
          </div>
        </Section>

        {/* Poverty Section */}
        <Section
          id="poverty"
          title="Poverty & Income Metrics"
          description="Official poverty statistics from the Households Below Average Income (HBAI) dataset, based on the Family Resources Survey. Measures relative and absolute poverty before and after housing costs."
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
            <StatCard
              id="poverty-ahc"
              title="Relative Poverty (AHC)"
              value={poverty.relativePovertyAHC}
              unit="million"
              description="After housing costs"
              source={poverty.source}
              lastUpdated={headline.lastUpdated}
            />
            <StatCard
              id="poverty-bhc"
              title="Relative Poverty (BHC)"
              value={poverty.relativePovertyBHC}
              unit="million"
              description="Before housing costs"
              source={poverty.source}
              lastUpdated={headline.lastUpdated}
            />
            <StatCard
              id="child-poverty"
              title="Children in Poverty"
              value={poverty.childrenInPoverty}
              unit="million"
              description="After housing costs"
              source={poverty.source}
              lastUpdated={headline.lastUpdated}
            />
            <StatCard
              id="destitution"
              title="Destitution"
              value={poverty.destitutionEstimate}
              unit="million people"
              description="JRF estimate 2023"
              source={{ name: 'Joseph Rowntree Foundation', url: 'https://www.jrf.org.uk/', releaseDate: '2023' }}
              lastUpdated={headline.lastUpdated}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <ChartCard
              id="poverty-trend"
              title="People in Relative Poverty (AHC)"
              description="Millions of people after housing costs"
              data={poverty.timeSeries}
              chartType="area"
              source={poverty.source}
              lastUpdated={headline.lastUpdated}
              height={280}
            />
            <BreakdownTable
              title="Poverty by Household Type (AHC)"
              dimension="Household Type"
              items={poverty.byHouseholdType.map(h => ({ category: h.category, value: h.value, percentage: h.value }))}
              source={poverty.source}
              showPercentage={false}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <BreakdownTable
              title="Poverty by Region (AHC %)"
              dimension="Region"
              items={poverty.byRegion.map(r => ({ category: r.region, value: r.value, percentage: r.value }))}
              source={poverty.source}
              showPercentage={false}
              maxRows={8}
            />
            <BreakdownTable
              title="Poverty by Ethnicity (AHC %)"
              dimension="Ethnicity"
              items={poverty.byEthnicity.map(e => ({ category: e.category, value: e.value, percentage: e.value }))}
              source={poverty.source}
              showPercentage={false}
            />
          </div>

          <div className="bg-gov-red/10 border border-gov-red/30 p-4 md:p-6 rounded mt-6">
            <h3 className="text-lg font-bold text-gov-red mb-4">Food Bank Use (Emergency Parcels)</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-gov-red">{poverty.foodBankUse.totalTrussellTrust}m</div>
                <div className="text-sm text-gov-grey-600">Trussell Trust (2023-24)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gov-red">{poverty.foodBankUse.independentFoodBanks}m</div>
                <div className="text-sm text-gov-grey-600">Independent Food Banks</div>
              </div>
            </div>
          </div>
        </Section>

        {/* Homelessness Section */}
        <Section
          id="homelessness"
          title="Housing & Homelessness"
          description="Statutory homelessness statistics from DLUHC showing households owed a duty under the Homelessness Reduction Act, and rough sleeping estimates."
          className="bg-gov-grey-50"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
            <StatCard
              id="homeless-ta"
              title="In Temporary Accommodation"
              value={homelessness.inTemporaryAccommodation}
              description="Households"
              source={homelessness.source}
              lastUpdated={headline.lastUpdated}
            />
            <StatCard
              id="rough-sleeping"
              title="Rough Sleeping"
              value={homelessness.roughSleeping}
              description="Snapshot estimate"
              source={homelessness.source}
              lastUpdated={headline.lastUpdated}
            />
            <StatCard
              id="prevention-duty"
              title="Prevention Duty Owed"
              value={homelessness.preventionDuty}
              source={homelessness.source}
              lastUpdated={headline.lastUpdated}
            />
            <StatCard
              id="relief-duty"
              title="Relief Duty Owed"
              value={homelessness.reliefDuty}
              source={homelessness.source}
              lastUpdated={headline.lastUpdated}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <ChartCard
              id="homeless-trend"
              title="Households in Temporary Accommodation"
              description="Quarterly totals since 2018"
              data={homelessness.timeSeries}
              chartType="bar"
              source={homelessness.source}
              lastUpdated={headline.lastUpdated}
              height={280}
            />
            <BreakdownTable
              title="Homelessness by Main Reason"
              dimension="Reason"
              items={homelessness.byReason}
              source={homelessness.source}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard
              id="rough-sleep-trend"
              title="Rough Sleeping Estimates"
              description="Annual snapshot counts"
              data={homelessness.roughSleepingTimeSeries}
              chartType="line"
              source={homelessness.source}
              lastUpdated={headline.lastUpdated}
              height={250}
            />
            <BreakdownTable
              title="Temporary Accommodation by Region"
              dimension="Region"
              items={homelessness.byRegion.map(r => ({ category: r.region, value: r.value, percentage: r.percentage }))}
              source={homelessness.source}
            />
          </div>
        </Section>

        {/* Carers Section */}
        <Section
          id="carers"
          title="Carers & Carer Support"
          description="Carer's Allowance recipients and estimates of unpaid carers from the Census."
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-8">
            <StatCard
              id="ca-caseload"
              title="Carer's Allowance Recipients"
              value={carers.carersAllowance.totalCaseload}
              change={carers.carersAllowance.changeYoY}
              changeDirection="up"
              source={carers.source}
              lastUpdated={headline.lastUpdated}
            />
            <StatCard
              id="unpaid-carers"
              title="Unpaid Carers"
              value={carers.unpaidCarersEstimate}
              unit="million"
              description="Census 2021 estimate"
              source={carers.source}
              lastUpdated={headline.lastUpdated}
            />
            <StatCard
              id="carer-element"
              title="UC Carer Element"
              value={carers.carerElementUC.total}
              description="Universal Credit carer element"
              source={carers.source}
              lastUpdated={headline.lastUpdated}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <BreakdownTable
              title="Carer's Allowance by Age"
              dimension="Age"
              items={carers.carersAllowance.byAge}
              source={carers.source}
            />
            <BreakdownTable
              title="Unpaid Carers by Hours Cared"
              dimension="Hours"
              items={carers.byHoursCared}
              source={carers.source}
            />
          </div>
        </Section>

        {/* State Pension & Child Benefit Section */}
        <Section
          id="pensions-benefits"
          title="State Pension & Child Benefit"
          description="State Pension recipients and expenditure, plus Child Benefit statistics from HMRC."
          className="bg-gov-grey-50"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
            <StatCard
              id="pension-recipients"
              title="State Pension Recipients"
              value={statePension.totalRecipients}
              unit="million"
              source={statePension.source}
              lastUpdated={headline.lastUpdated}
            />
            <StatCard
              id="pension-expenditure"
              title="State Pension Expenditure"
              value="£125"
              unit="billion"
              source={statePension.source}
              lastUpdated={headline.lastUpdated}
            />
            <StatCard
              id="child-benefit"
              title="Child Benefit Families"
              value={childBenefit.totalCaseload}
              unit="million"
              source={childBenefit.source}
              lastUpdated={headline.lastUpdated}
            />
            <StatCard
              id="children-covered"
              title="Children Covered"
              value={childBenefit.childrenCovered}
              unit="million"
              source={childBenefit.source}
              lastUpdated={headline.lastUpdated}
            />
          </div>
        </Section>

        {/* NHS Welfare Overlap Section */}
        <Section
          id="nhs-overlap"
          title="NHS & Welfare Overlaps"
          description="Statistics on the intersection between health conditions and welfare claims, including mental health and long-term sickness."
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
            <StatCard
              id="mh-claimants"
              title="PIP Mental Health Claimants"
              value={nhsWelfareOverlap.mentalHealth.pipClaimantsWithMHCondition}
              description="36.5% of PIP caseload"
              source={nhsWelfareOverlap.source}
              lastUpdated={headline.lastUpdated}
            />
            <StatCard
              id="lts-inactive"
              title="Long-Term Sick (Economically Inactive)"
              value={nhsWelfareOverlap.longTermSick.economicallyInactive}
              description="Not in work due to illness"
              source={nhsWelfareOverlap.source}
              lastUpdated={headline.lastUpdated}
            />
            <StatCard
              id="lts-on-benefits"
              title="Long-Term Sick on Benefits"
              value={nhsWelfareOverlap.longTermSick.receivingESAorUC}
              description="Receiving ESA or UC LCW"
              source={nhsWelfareOverlap.source}
              lastUpdated={headline.lastUpdated}
            />
          </div>

          <BreakdownTable
            title="Mental Health Benefit Claimants by Condition"
            dimension="Condition"
            items={nhsWelfareOverlap.byCondition}
            source={nhsWelfareOverlap.source}
            maxRows={6}
          />
        </Section>

        {/* Devolved Nations Section */}
        <Section
          id="devolved-nations"
          title="Devolved Nations"
          description="Welfare benefits that are devolved to Scotland, Wales, and Northern Ireland, with notes on variations."
          className="bg-gov-grey-50"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 border border-gov-grey-200">
              <h3 className="text-lg font-bold text-gov-blue mb-4">🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-2xl font-bold">{devolvedNations.scotland.adultDisabilityPayment.totalCaseload.toLocaleString()}</div>
                  <div className="text-sm text-gov-grey-500">Adult Disability Payment</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">{devolvedNations.scotland.scottishChildPayment.recipients.toLocaleString()}</div>
                  <div className="text-sm text-gov-grey-500">Scottish Child Payment</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">£{devolvedNations.scotland.carerAllowanceSupplement.biannualPayment}</div>
                  <div className="text-sm text-gov-grey-500">Carer's Allowance Supplement</div>
                </div>
              </div>
              <a
                href={devolvedNations.scotland.source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gov-blue hover:underline mt-4 block"
              >
                Social Security Scotland →
              </a>
            </div>

            <div className="bg-white p-6 border border-gov-grey-200">
              <h3 className="text-lg font-bold text-gov-blue mb-4">🏴󠁧󠁢󠁷󠁬󠁳󠁿 Wales</h3>
              <p className="text-sm text-gov-grey-600 mb-4">{devolvedNations.wales.notes}</p>
              <div className="space-y-4">
                <div>
                  <div className="text-2xl font-bold">{devolvedNations.wales.discretionaryAssistanceFund.totalAwards.toLocaleString()}</div>
                  <div className="text-sm text-gov-grey-500">Discretionary Assistance Fund awards</div>
                </div>
              </div>
              <a
                href={devolvedNations.wales.source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gov-blue hover:underline mt-4 block"
              >
                Welsh Government →
              </a>
            </div>

            <div className="bg-white p-6 border border-gov-grey-200">
              <h3 className="text-lg font-bold text-gov-blue mb-4">🇬🇧 Northern Ireland</h3>
              <p className="text-sm text-gov-grey-600 mb-4">{devolvedNations.northernIreland.notes}</p>
              <div className="space-y-4">
                <div>
                  <div className="text-2xl font-bold">{devolvedNations.northernIreland.universalCredit.caseload.toLocaleString()}</div>
                  <div className="text-sm text-gov-grey-500">Universal Credit claimants</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">{devolvedNations.northernIreland.employmentSupportAllowance.caseload.toLocaleString()}</div>
                  <div className="text-sm text-gov-grey-500">ESA claimants</div>
                </div>
              </div>
              <a
                href={devolvedNations.northernIreland.source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gov-blue hover:underline mt-4 block"
              >
                NI Dept for Communities →
              </a>
            </div>
          </div>
        </Section>

        <MethodologySection
          coverage="Most statistics cover Great Britain or the United Kingdom. Some datasets (e.g., adult social care) cover England only. Scottish devolved benefits are administered separately by Social Security Scotland. Check individual source links for specific geographic coverage."
        />
      </main>

      <Footer lastUpdated={headline.lastUpdated} />
    </>
  );
}
