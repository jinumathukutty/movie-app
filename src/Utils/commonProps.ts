export interface State {
  movieLoading: boolean;
  movieDetailsLoading: boolean;
  searchQuery: string | "";
  randomMovies: MovieBasic[];
  movie: MovieDetails | any;
}

export interface MovieBasic {
  TITLE?: string;
  YEAR?: number;
  IMDB_ID?: string;
  RANK: number;
  ACTORS: string;
  AKA: string;
  IMDB_URL: string;
  IMDB_IV: string;
  IMG_POSTER: string;
  photo_width: number;
  photo_height: number;
}
export interface MovieDetails {
  short: Short;
  imdbId: string;
  top: Top;
  main: Main;
  fake: Fake;
  storyLine: StoryLine;
}

export interface Short {
  "@context": string;
  "@type": string;
  url: string;
  name: string;
  description: string;
  genre: string[];
  datePublished: string;
  actor: Actor[];
  director: Director[];
  creator: Creator[];
  duration: string;
}

export interface Actor {
  "@type": string;
  url: string;
  name: string;
}

export interface Director {
  "@type": string;
  url: string;
  name: string;
}

export interface Creator {
  "@type": string;
  url: string;
  name?: string;
}

export interface Top {
  id: string;
  productionStatus: ProductionStatus;
  canHaveEpisodes: boolean;
  series: any;
  titleText: TitleText;
  titleType: TitleType;
  originalTitleText: OriginalTitleText;
  certificate: any;
  releaseYear: ReleaseYear;
  releaseDate: ReleaseDate;
  runtime: Runtime;
  canRate: CanRate;
  ratingsSummary: RatingsSummary;
  meterRanking: any;
  primaryImage: any;
  images: Images;
  videos: Videos;
  primaryVideos: PrimaryVideos;
  externalLinks: ExternalLinks;
  metacritic: any;
  keywords: Keywords;
  genres: Genres;
  plot: Plot;
  plotContributionLink: PlotContributionLink;
  credits: Credits;
  principalCredits: PrincipalCredit[];
  reviews: Reviews;
  criticReviewsTotal: CriticReviewsTotal;
  triviaTotal: TriviaTotal;
  engagementStatistics: any;
  subNavCredits: SubNavCredits;
  subNavReviews: SubNavReviews;
  subNavTrivia: SubNavTrivia;
  subNavFaqs: SubNavFaqs;
  subNavTopQuestions: SubNavTopQuestions;
  titleGenres: TitleGenres;
  meta: Meta;
  castPageTitle: CastPageTitle;
  creatorsPageTitle: any[];
  directorsPageTitle: DirectorsPageTitle[];
  countriesOfOrigin: CountriesOfOrigin;
  production: Production;
  featuredReviews: FeaturedReviews;
  __typename: string;
}

export interface ProductionStatus {
  currentProductionStage: CurrentProductionStage;
  productionStatusHistory: ProductionStatusHistory[];
  restriction: any;
  __typename: string;
}

export interface CurrentProductionStage {
  id: string;
  text: string;
  __typename: string;
}

export interface ProductionStatusHistory {
  status: Status;
  __typename: string;
}

export interface Status {
  id: string;
  text: string;
  __typename: string;
}

export interface TitleText {
  text: string;
  __typename: string;
}

export interface TitleType {
  displayableProperty: DisplayableProperty;
  text: string;
  id: string;
  isSeries: boolean;
  isEpisode: boolean;
  categories: Category[];
  canHaveEpisodes: boolean;
  __typename: string;
}

export interface DisplayableProperty {
  value: Value;
  __typename: string;
}

export interface Value {
  plainText: string;
  __typename: string;
}

export interface Category {
  value: string;
  __typename: string;
}

export interface OriginalTitleText {
  text: string;
  __typename: string;
}

export interface ReleaseYear {
  year: number;
  endYear: any;
  __typename: string;
}

export interface ReleaseDate {
  day: number;
  month: number;
  year: number;
  __typename: string;
}

export interface Runtime {
  seconds: number;
  displayableProperty: DisplayableProperty2;
  __typename: string;
}

export interface DisplayableProperty2 {
  value: Value2;
  __typename: string;
}

export interface Value2 {
  plainText: string;
  __typename: string;
}

export interface CanRate {
  isRatable: boolean;
  __typename: string;
}

export interface RatingsSummary {
  aggregateRating: any;
  voteCount: number;
  __typename: string;
}

export interface Images {
  total: number;
  edges: any[];
  __typename: string;
}

export interface Videos {
  total: number;
  __typename: string;
}

export interface PrimaryVideos {
  edges: any[];
  __typename: string;
}

export interface ExternalLinks {
  total: number;
  __typename: string;
}

export interface Keywords {
  total: number;
  edges: any[];
  __typename: string;
}

export interface Genres {
  genres: Genre[];
  __typename: string;
}

export interface Genre {
  text: string;
  id: string;
  __typename: string;
}

export interface Plot {
  plotText: PlotText;
  language: Language;
  __typename: string;
}

export interface PlotText {
  plainText: string;
  __typename: string;
}

export interface Language {
  id: string;
  __typename: string;
}

export interface PlotContributionLink {
  url: string;
  __typename: string;
}

export interface Credits {
  total: number;
  __typename: string;
}

export interface PrincipalCredit {
  totalCredits: number;
  category: Category2;
  credits: Credit[];
  __typename: string;
}

export interface Category2 {
  text: string;
  id: string;
  __typename: string;
}

export interface Credit {
  name: Name;
  attributes: any;
  __typename: string;
}

export interface Name {
  nameText: NameText;
  id: string;
  __typename: string;
}

export interface NameText {
  text: string;
  __typename: string;
}

export interface Reviews {
  total: number;
  __typename: string;
}

export interface CriticReviewsTotal {
  total: number;
  __typename: string;
}

export interface TriviaTotal {
  total: number;
  __typename: string;
}

export interface SubNavCredits {
  total: number;
  __typename: string;
}

export interface SubNavReviews {
  total: number;
  __typename: string;
}

export interface SubNavTrivia {
  total: number;
  __typename: string;
}

export interface SubNavFaqs {
  total: number;
  __typename: string;
}

export interface SubNavTopQuestions {
  total: number;
  __typename: string;
}

export interface TitleGenres {
  genres: Genre2[];
  __typename: string;
}

export interface Genre2 {
  genre: Genre3;
  __typename: string;
}

export interface Genre3 {
  text: string;
  __typename: string;
}

export interface Meta {
  canonicalId: string;
  publicationStatus: string;
  __typename: string;
}

export interface CastPageTitle {
  edges: Edge[];
  __typename: string;
}

export interface Edge {
  node: Node;
  __typename: string;
}

export interface Node {
  name: Name2;
  __typename: string;
}

export interface Name2 {
  id: string;
  nameText: NameText2;
  __typename: string;
}

export interface NameText2 {
  text: string;
  __typename: string;
}

export interface DirectorsPageTitle {
  credits: Credit2[];
  __typename: string;
}

export interface Credit2 {
  name: Name3;
  __typename: string;
}

export interface Name3 {
  id: string;
  nameText: NameText3;
  __typename: string;
}

export interface NameText3 {
  text: string;
  __typename: string;
}

export interface CountriesOfOrigin {
  countries: Country[];
  __typename: string;
}

export interface Country {
  id: string;
  __typename: string;
}

export interface Production {
  edges: Edge2[];
  __typename: string;
}

export interface Edge2 {
  node: Node2;
  __typename: string;
}

export interface Node2 {
  company: Company;
  __typename: string;
}

export interface Company {
  id: string;
  companyText: CompanyText;
  __typename: string;
}

export interface CompanyText {
  text: string;
  __typename: string;
}

export interface FeaturedReviews {
  edges: any[];
  __typename: string;
}

export interface Main {
  id: string;
  wins: Wins;
  nominations: Nominations;
  prestigiousAwardSummary: any;
  ratingsSummary: RatingsSummary2;
  episodes: any;
  videos: Videos2;
  videoStrip: VideoStrip;
  titleMainImages: TitleMainImages;
  productionStatus: ProductionStatus2;
  primaryImage: any;
  imageUploadLink: ImageUploadLink;
  titleType: TitleType2;
  cast: Cast;
  creators: any[];
  directors: Director2[];
  writers: Writer[];
  isAdult: boolean;
  moreLikeThisTitles: MoreLikeThisTitles;
  triviaTotal: TriviaTotal2;
  trivia: Trivia;
  goofsTotal: GoofsTotal;
  goofs: Goofs;
  quotesTotal: QuotesTotal;
  quotes: Quotes;
  crazyCredits: CrazyCredits;
  alternateVersions: AlternateVersions;
  connections: Connections;
  soundtrack: Soundtrack;
  titleText: TitleText2;
  originalTitleText: OriginalTitleText2;
  releaseYear: ReleaseYear2;
  reviews: Reviews2;
  featuredReviews: FeaturedReviews2;
  canRate: CanRate2;
  iframeAddReviewLink: IframeAddReviewLink;
  topQuestions: TopQuestions;
  faqs: Faqs;
  releaseDate: ReleaseDate2;
  countriesOfOrigin: CountriesOfOrigin2;
  detailsExternalLinks: DetailsExternalLinks;
  spokenLanguages: SpokenLanguages;
  akas: Akas;
  filmingLocations: FilmingLocations;
  production: Production2;
  companies: Companies;
  productionBudget: any;
  lifetimeGross: any;
  openingWeekendGross: any;
  worldwideGross: any;
  technicalSpecifications: TechnicalSpecifications;
  runtime: Runtime2;
  series: any;
  canHaveEpisodes: boolean;
  contributionQuestions: ContributionQuestions;
  __typename: string;
}

export interface Wins {
  total: number;
  __typename: string;
}

export interface Nominations {
  total: number;
  __typename: string;
}

export interface RatingsSummary2 {
  topRanking: any;
  __typename: string;
}

export interface Videos2 {
  total: number;
  __typename: string;
}

export interface VideoStrip {
  edges: any[];
  __typename: string;
}

export interface TitleMainImages {
  total: number;
  edges: any[];
  __typename: string;
}

export interface ProductionStatus2 {
  currentProductionStage: CurrentProductionStage2;
  productionStatusHistory: ProductionStatusHistory2[];
  restriction: any;
  __typename: string;
}

export interface CurrentProductionStage2 {
  id: string;
  text: string;
  __typename: string;
}

export interface ProductionStatusHistory2 {
  status: Status2;
  __typename: string;
}

export interface Status2 {
  id: string;
  text: string;
  __typename: string;
}

export interface ImageUploadLink {
  url: string;
  __typename: string;
}

export interface TitleType2 {
  id: string;
  canHaveEpisodes: boolean;
  __typename: string;
}

export interface Cast {
  edges: Edge3[];
  __typename: string;
}

export interface Edge3 {
  node: Node3;
  __typename: string;
}

export interface Node3 {
  name: Name4;
  attributes: any;
  category: Category3;
  characters: any;
  episodeCredits: EpisodeCredits;
  __typename: string;
}

export interface Name4 {
  id: string;
  nameText: NameText4;
  primaryImage: any;
  __typename: string;
}

export interface NameText4 {
  text: string;
  __typename: string;
}

export interface Category3 {
  id: string;
  __typename: string;
}

export interface EpisodeCredits {
  total: number;
  yearRange: any;
  __typename: string;
}

export interface Director2 {
  totalCredits: number;
  category: Category4;
  credits: Credit3[];
  __typename: string;
}

export interface Category4 {
  text: string;
  __typename: string;
}

export interface Credit3 {
  name: Name5;
  attributes: any;
  __typename: string;
}

export interface Name5 {
  id: string;
  nameText: NameText5;
  __typename: string;
}

export interface NameText5 {
  text: string;
  __typename: string;
}

export interface Writer {
  totalCredits: number;
  category: Category5;
  credits: Credit4[];
  __typename: string;
}

export interface Category5 {
  text: string;
  __typename: string;
}

export interface Credit4 {
  name: Name6;
  attributes: any;
  __typename: string;
}

export interface Name6 {
  id: string;
  nameText: NameText6;
  __typename: string;
}

export interface NameText6 {
  text: string;
  __typename: string;
}

export interface MoreLikeThisTitles {
  edges: any[];
  __typename: string;
}

export interface TriviaTotal2 {
  total: number;
  __typename: string;
}

export interface Trivia {
  edges: any[];
  __typename: string;
}

export interface GoofsTotal {
  total: number;
  __typename: string;
}

export interface Goofs {
  edges: any[];
  __typename: string;
}

export interface QuotesTotal {
  total: number;
  __typename: string;
}

export interface Quotes {
  edges: any[];
  __typename: string;
}

export interface CrazyCredits {
  edges: any[];
  __typename: string;
}

export interface AlternateVersions {
  total: number;
  edges: any[];
  __typename: string;
}

export interface Connections {
  edges: any[];
  __typename: string;
}

export interface Soundtrack {
  edges: any[];
  __typename: string;
}

export interface TitleText2 {
  text: string;
  __typename: string;
}

export interface OriginalTitleText2 {
  text: string;
  __typename: string;
}

export interface ReleaseYear2 {
  year: number;
  __typename: string;
}

export interface Reviews2 {
  total: number;
  __typename: string;
}

export interface FeaturedReviews2 {
  edges: any[];
  __typename: string;
}

export interface CanRate2 {
  isRatable: boolean;
  __typename: string;
}

export interface IframeAddReviewLink {
  url: string;
  __typename: string;
}

export interface TopQuestions {
  total: number;
  edges: any[];
  __typename: string;
}

export interface Faqs {
  total: number;
  edges: any[];
  __typename: string;
}

export interface ReleaseDate2 {
  day: number;
  month: number;
  year: number;
  country: Country2;
  __typename: string;
}

export interface Country2 {
  id: string;
  text: string;
  __typename: string;
}

export interface CountriesOfOrigin2 {
  countries: Country3[];
  __typename: string;
}

export interface Country3 {
  id: string;
  text: string;
  __typename: string;
}

export interface DetailsExternalLinks {
  edges: any[];
  total: number;
  __typename: string;
}

export interface SpokenLanguages {
  spokenLanguages: SpokenLanguage[];
  __typename: string;
}

export interface SpokenLanguage {
  id: string;
  text: string;
  __typename: string;
}

export interface Akas {
  edges: any[];
  __typename: string;
}

export interface FilmingLocations {
  edges: any[];
  total: number;
  __typename: string;
}

export interface Production2 {
  edges: Edge4[];
  __typename: string;
}

export interface Edge4 {
  node: Node4;
  __typename: string;
}

export interface Node4 {
  company: Company2;
  __typename: string;
}

export interface Company2 {
  id: string;
  companyText: CompanyText2;
  __typename: string;
}

export interface CompanyText2 {
  text: string;
  __typename: string;
}

export interface Companies {
  total: number;
  __typename: string;
}

export interface TechnicalSpecifications {
  soundMixes: SoundMixes;
  aspectRatios: AspectRatios;
  colorations: Colorations;
  __typename: string;
}

export interface SoundMixes {
  items: any[];
  __typename: string;
}

export interface AspectRatios {
  items: any[];
  __typename: string;
}

export interface Colorations {
  items: Item[];
  __typename: string;
}

export interface Item {
  conceptId: string;
  text: string;
  attributes: any[];
  __typename: string;
}

export interface Runtime2 {
  seconds: number;
  __typename: string;
}

export interface ContributionQuestions {
  contributionLink: ContributionLink;
  edges: any[];
  __typename: string;
}

export interface ContributionLink {
  url: string;
  __typename: string;
}

export interface Fake {
  "#TITLE": string;
  "#YEAR": number;
  "#IMDB_ID": string;
  "#RANK": number;
  "#ACTORS": string;
  "#AKA": string;
  "#IMDB_URL": string;
  "#IMDB_IV": string;
}

export interface StoryLine {
  id: string;
  summaries: Summaries;
  outlines: Outlines;
  synopses: Synopses;
  storylineKeywords: StorylineKeywords;
  taglines: Taglines;
  genres: Genres2;
  certificate: any;
  parentsGuide: ParentsGuide;
  __typename: string;
}

export interface Summaries {
  edges: Edge5[];
  __typename: string;
}

export interface Edge5 {
  node: Node5;
  __typename: string;
}

export interface Node5 {
  plotText: PlotText2;
  experimental_translatedPlotText: any;
  author: any;
  __typename: string;
}

export interface PlotText2 {
  plaidHtml: string;
  __typename: string;
}

export interface Outlines {
  edges: any[];
  __typename: string;
}

export interface Synopses {
  edges: any[];
  __typename: string;
}

export interface StorylineKeywords {
  edges: any[];
  total: number;
  __typename: string;
}

export interface Taglines {
  edges: any[];
  total: number;
  __typename: string;
}

export interface Genres2 {
  genres: Genre4[];
  __typename: string;
}

export interface Genre4 {
  id: string;
  text: string;
  __typename: string;
}

export interface ParentsGuide {
  guideItems: GuideItems;
  __typename: string;
}

export interface GuideItems {
  total: number;
  __typename: string;
}
