// Welfare Statistics Types

export interface StatCard {
  id: string;
  title: string;
  value: number | string;
  unit?: string;
  change?: number;
  changeDirection?: 'up' | 'down' | 'neutral';
  changeLabel?: string;
  description?: string;
  source: DataSource;
  lastUpdated: string;
  link?: string;
}

export interface ChartDataPoint {
  date: string;
  value: number;
  label?: string;
}

export interface ChartCard {
  id: string;
  title: string;
  description?: string;
  data: ChartDataPoint[];
  chartType: 'line' | 'bar' | 'area' | 'pie';
  source: DataSource;
  lastUpdated: string;
  yAxisLabel?: string;
  xAxisLabel?: string;
}

export interface DataSource {
  name: string;
  url: string;
  releaseDate: string;
  nextRelease?: string;
}

export interface BreakdownItem {
  category: string;
  value: number;
  percentage?: number;
  change?: number;
}

export interface BreakdownData {
  dimension: string;
  items: BreakdownItem[];
  source: DataSource;
  lastUpdated: string;
}

export interface WelfareSection {
  id: string;
  title: string;
  description?: string;
  stats: StatCard[];
  charts?: ChartCard[];
  breakdowns?: BreakdownData[];
  sources: DataSource[];
}

export interface RegionalData {
  region: string;
  code?: string;
  value: number;
  percentage?: number;
  rank?: number;
}

export interface WelfareData {
  lastUpdated: string;
  headlineStats: StatCard[];
  sections: WelfareSection[];
  quickLinks: QuickLink[];
  methodology: MethodologySection;
}

export interface QuickLink {
  title: string;
  url: string;
  description: string;
  icon: string;
}

export interface MethodologySection {
  title: string;
  content: string;
  definitions: TermDefinition[];
  dataQualityNotes: string[];
}

export interface TermDefinition {
  term: string;
  definition: string;
}

// Specific data types for different welfare categories

export interface UniversalCreditData {
  totalCaseload: number;
  changeYoY: number;
  byRegion: RegionalData[];
  byAge: BreakdownItem[];
  byGender: BreakdownItem[];
  byConditionality: BreakdownItem[];
  byEmploymentStatus: BreakdownItem[];
  expenditure: number;
  averageAward: number;
  timeSeries: ChartDataPoint[];
}

export interface DisabilityBenefitsData {
  pip: {
    totalCaseload: number;
    newClaims: number;
    byCondition: BreakdownItem[];
    byAge: BreakdownItem[];
    byRegion: RegionalData[];
    clearances: number;
    averageAward: number;
    timeSeries: ChartDataPoint[];
  };
  dla: {
    totalCaseload: number;
    byAge: BreakdownItem[];
    byRegion: RegionalData[];
  };
  esa: {
    totalCaseload: number;
    byType: BreakdownItem[];
    byCondition: BreakdownItem[];
    timeSeries: ChartDataPoint[];
  };
  adp: {
    totalCaseload: number;
    description: string;
  };
}

export interface AsylumSupportData {
  section95: {
    inPayment: number;
    inAccommodation: number;
    byNationality: BreakdownItem[];
    byAccommodationType: BreakdownItem[];
    dailyAllowance: number;
  };
  section4: {
    totalCaseload: number;
    byNationality: BreakdownItem[];
  };
  hotels: {
    totalInHotels: number;
    byRegion: RegionalData[];
    averageStay: number;
    dailyCost: number;
  };
  unaccompaniedChildren: {
    total: number;
    byAge: BreakdownItem[];
    byNationality: BreakdownItem[];
  };
  timeSeries: ChartDataPoint[];
}

export interface AdultSocialCareData {
  totalRecipients: number;
  bySupportType: BreakdownItem[];
  byAge: BreakdownItem[];
  byPrimarySupportReason: BreakdownItem[];
  byRegion: RegionalData[];
  expenditure: number;
  timeSeries: ChartDataPoint[];
}

export interface PovertyData {
  relativePovertyBeforeHousingCosts: number;
  relativePovertyAfterHousingCosts: number;
  absolutePovertyBeforeHousingCosts: number;
  absolutePovertyAfterHousingCosts: number;
  childrenInPoverty: number;
  pensionersInPoverty: number;
  workingAgePoverty: number;
  byRegion: RegionalData[];
  byHouseholdType: BreakdownItem[];
  byEthnicity: BreakdownItem[];
  byDisabilityStatus: BreakdownItem[];
  destitutionEstimate: number;
  timeSeries: ChartDataPoint[];
}

export interface HomelessnessData {
  totalHouseholds: number;
  inTemporaryAccommodation: number;
  roughSleeping: number;
  byReason: BreakdownItem[];
  byRegion: RegionalData[];
  preventionDuty: number;
  reliefDuty: number;
  timeSeries: ChartDataPoint[];
}

export interface HousingBenefitData {
  totalCaseload: number;
  byRegion: RegionalData[];
  averageAward: number;
  timeSeries: ChartDataPoint[];
}

export interface ChildBenefitData {
  totalCaseload: number;
  childrenCovered: number;
  byRegion: RegionalData[];
  averageAward: number;
  timeSeries: ChartDataPoint[];
}

export interface StatePensionData {
  totalRecipients: number;
  newStatePension: number;
  basicStatePension: number;
  averageWeeklyAmount: number;
  byAge: BreakdownItem[];
  byGender: BreakdownItem[];
  expenditure: number;
  timeSeries: ChartDataPoint[];
}

export interface CarersData {
  carersAllowance: {
    totalCaseload: number;
    byAge: BreakdownItem[];
    byGender: BreakdownItem[];
    averageAward: number;
  };
  carerElement: {
    total: number;
    averageAward: number;
  };
  unpaidCarersEstimate: number;
  timeSeries: ChartDataPoint[];
}

export interface DevolvedNationsData {
  scotland: {
    adp: number;
    carerAllowanceSupplement: number;
    bestStartGrants: number;
    scottishChildPayment: number;
  };
  wales: {
    notes: string;
  };
  northernIreland: {
    notes: string;
  };
}

export interface NHSWelfareOverlapData {
  mentalHealth: {
    claimantsWithMHCondition: number;
    asPercentage: number;
  };
  longTermSick: {
    economicallyInactive: number;
    onESAorUC: number;
  };
}

// API Response types for data fetching

export interface DWPStatXploreResponse {
  metadata: {
    title: string;
    uri: string;
    version: string;
  };
  measures: {
    dimension: string;
    values: number[];
    attributes: string[];
  }[];
}

export interface HomeOfficeAsylumResponse {
  metadata: {
    title: string;
    releaseDate: string;
    nextRelease: string;
  };
  tables: {
    id: string;
    title: string;
    data: Record<string, unknown>[];
  }[];
}

export interface ONSResponse {
  description: {
    title: string;
    releaseDate: string;
  };
  months: {
    date: string;
    value: string;
    label: string;
  }[];
}

// Scraping utility types

export interface ScrapedTable {
  title: string;
  headers: string[];
  rows: (string | number)[][];
  source: string;
}

export interface FetchResult {
  success: boolean;
  data?: unknown;
  error?: string;
  timestamp: string;
  source: string;
}
