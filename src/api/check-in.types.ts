/* tslint:disable */

type Resolver<Result, Args = any> = (parent: any, args: Args, context: any, info: any) => Promise<Result> | Result;

/** Unique Ids from APIs */
export type UniqueId = any;

/** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
export type JsonData = any;
/** Common field for all products */
export interface ProductInterfaceANO {
  productId?: string | null;
  productClass?: string | null;
  productType?: string | null;
  code?: string | null;
  name?: string | null;
  prices?: (PriceANO | null)[] | null;
  displayPrice?: DisplayPriceANO | null;
}

export interface PriceInterfaceANO {
  amount?: number | null;
  currencyCode?: string | null;
}
/** Bank Of America link */
export interface Query {
  order?: OrderCOO | null;
  createOrderWithAncillaries?: OrderCOO | null;
  createOrder?: OrderCOO | null;
  orderV2?: OrderV2 | null;
  createOrderWithAncillariesV2?: OrderV2 | null;
  confirmGratisProducts?: OrderV2 | null;
  decryptedReservation?: DecryptedReservationCOO | null;
  encryptedReservation?: string | null;
  paymentOptionsV2?: PaymentOptionsV2 | null;
  payment?: Payment | null;
  ancillaries?: AncillariesANO | null;
  nba?: NbaANO | null;
  boaLink?: string | null;
  flightProduct?: FlightProductResponse | null;
  flightOffers?: FlightOfferResponse | null;
  offers?: (FlightOfferRowType | null)[] | null;
  relatedProducts?: RelatedProductsResponse | null;
  shoppingCartShopId?: FlightProductResponse | null;
  brandedFares?: BrandedFaresResponse | null;
  reservation?: Reservation | null;
  reservations?: Reservations | null;
  checkIn?: CIOCheckinInformationResult | null;
  boardingDocs?: BoardingDocumentsSentCIO | null;
  checkInReferenceData?: ReferenceDataWrapperCIO | null;
  checkTransferPassengerStatus?: CIOCheckTransferPassengerStatusResult | null;
  reservationFlightList?: ReservationFlightListResponse | null;
  getCheckDuplicate?: DuplicateClaimList | null;
  corporateContracts?: (CorporateContract | null)[] | null;
  corporateEnvironments?: CorporateEnvironmentWrapper | null;
  civility?: Civility | null;
  profiles?: (Profile | null)[] | null;
  uccrs?: Uccrs | null;
  uccr?: Uccr | null;
  dangerousGoods?: DangerousGoodsCIO | null;
  customer?: Customer | null;
  salutationOptions?: (Salutation | null)[] | null;
  account?: Account | null;
  destination?: Destination | null;
  flightStatus?: FlightStatus | null;
  inspireDestinationsV4?: InspireDestinationsV4 | null;
  inspireDestinations?: InspireDestinationsCOO | null;
  taxBreakdown?: TaxBreakdown | null;
  tripSummaryItinerary?: TripSummaryResponse | null;
  lowestOffers?: LowestOffersResponse | null;
  decryptedReservationV2?: DecryptedReservationOAO | null;
  encryptedReservationV2?: string | null;
  stations?: (Station | null)[] | null;
  referenceData?: ReferenceData | null;
  richContent?: (RichContentFlights | null)[] | null;
  seatmap?: SeatmapDetailsSMO | null;
  shoppingCart?: (ShoppingCartResult | null)[] | null;
  handoverCheckout?: HandoverCheckout | null;
  companions?: CompanionsList | null;
  travelDocuments?: (TravelDocument | null)[] | null;
  travelDocumentTypes?: (CodeNameCUO | null)[] | null;
  socialConnections?: SocialConnections | null;
  availablePaymentTypes?: (PaymentTypeCUO | null)[] | null;
  paymentMethods?: (PaymentMethodsCUO | null)[] | null;
  paymentPreferences?: (PaymentPreferenceCUO | null)[] | null;
  loyaltyPrograms?: (LoyaltyProgram | null)[] | null;
  communicationPublications?: CommunicationPublicationsCUO | null;
  flyingBlueBenefits?: FlyingBlueBenefits | null;
  flyingBlueDashboard?: FlyingBlueDashboard | null;
  flyingBlueTransactionHistory?: FlyingBlueTransactionHistory | null;
  flyingBlueContactDetails?: FlyingBlueContactDetails | null;
  contactCenter?: (ContactCenterPhone | null)[] | null;
  countries?: (Country | null)[] | null;
  states?: (State | null)[] | null;
}
/** Order describes the data involved in checkout */
export interface OrderCOO {
  orderId?: string | null /** Order id */;
  referenceFlightProduct?: ReferenceFlightProductCOO | null /** Reference Flight Product for check-in flow */;
  paidOptionList?: (PaidOptionCOO | null)[] | null /** Paid Option (ancillary product) list */;
  productList?: ProductListCOO | null /** Product list */;
  totalPrice?: PriceCOO | null /** Total price information */;
  payments?: (PaymentCOO | null)[] | null /** Overall payment data */;
  paymentPrice?: PriceCOO | null /** Payment price information */;
  currencyConversionSurcharge?: PriceCOO | null /** Currency conversion surcharge */;
  totalBookingFee?: PriceCOO | null /** Total booking fee information */;
  totalPaymentFee?: PriceCOO | null;
  channel?: string | null /** Order channel */;
  supportTimeFrame?: string | null /** Order support time */;
  residualValue?: PriceCOO | null;
  residualValueDocuments?: (ResidualValueDocumentCOO | null)[] | null;
  _warnings?: (GenericWarningCOO | null)[] | null /** Order API warningsMock array */;
  paymentOptions?: PaymentOptionsCOO | null /** PaymentOptions information */;
  passengerFields?: PassengerFieldsCOO | null /** PassengerFields information */;
  ticketConditions?: TicketConditionsCOO | null /** Conditions for one of the connections of the ticket */;
  cartProducts?: CartProductsCOO | null;
  offeredProducts?: OfferedProductsCOO | null /** ancillaries, in order api because it is combined with passenger detailsto decide to navigate to ancillaries (options) without an extra round trip */;
}
/** Reference Flight Product */
export interface ReferenceFlightProductCOO {
  status?: string | null /** Flight product status */;
  reservation?: FP_ReservationCOO | null /** Reservation information */;
}
/** Reservation */
export interface FP_ReservationCOO {
  bookingCode?: string | null /** bookingCode */;
  itinerary?: ItineraryCOO | null /** Itinerary information */;
  passengers?: (PassengerCOO | null)[] | null /** Passenger list */;
  passengerCount?: number | null /** Passenger count */;
}
/** Itinerary information */
export interface ItineraryCOO {
  type?: string | null /** One way, two way, or multiple destinations */;
  connections?: (ConnectionCOO | null)[] | null /** Connection list */;
  origin?: AirportCOO | null /** Origin airport information */;
  destination?: AirportCOO | null /** Destination airport information */;
  departureTime?: string | null /** Outbound departure time */;
  returnDepartureTime?: string | null /** Inbound departure time */;
  departureDate?: string | null /** Outbound departure date */;
  returnDepartureDate?: string | null /** Inbound departure date */;
  collapsedText?: string | null /** Text for additional information on the ticket */;
  ticketConditions?: TicketConditionsCOO | null /** Conditions for one of the connections of the ticket */;
}
/** Connection */
export interface ConnectionCOO {
  connectionId?: string | null /** Connection id */;
  segments?: (SegmentCOO | null)[] | null /** Segment list */;
  origin?: AirportCOO | null /** Origin airport information */;
  duration?: string | null /** Duration of one connection */;
  destination?: AirportCOO | null /** Destination airport information */;
}
/** Segment */
export interface SegmentCOO {
  segmentId?: string | null /** Segment id */;
  transferTime?: string | null /** transfer time in format e.g. 2h40 */;
  departFrom?: AirportCOO | null /** Departure airport information */;
  arriveOn?: AirportCOO | null /** Arrival airport information */;
  marketingFlight?: MarketingFlightCOO | null /** Marketing flight information */;
  fareBase?: S_FareFamilyCOO | null;
  remarks?: (S_RemarksCOO | null)[] | null;
  economyCabinOfferedForBusinessClass?:
    | boolean
    | null /** segment in a business class itinerary where there are no business class seats provided */;
}
/** Airport Information */
export interface AirportCOO {
  code?: string | null /** Airport code */;
  name?: string | null /** Airport name */;
  city?: CityCOO | null /** Airport city information */;
}
/** City */
export interface CityCOO {
  code?: string | null /** City code */;
  name?: string | null /** City name */;
  country?: CodeName | null /** Country code and name */;
}
/** General type for code and name fields */
export interface CodeName {
  code?: string | null /** Code */;
  name?: string | null /** Name */;
}
/** Marketing flight information */
export interface MarketingFlightCOO {
  number?: number | null /** Flight number */;
  carrier?: CodeName | null /** Flight carrier information */;
  numberOfStops?: number | null /** Number of stops */;
  sellingClass?: CodeName | null /** Flight class, e.g. Y indicates Economy(?) */;
  operatingFlight?: OperatingFlightCOO | null /** Operating flight information */;
}
/** Operating Flight */
export interface OperatingFlightCOO {
  number?: string | null /** Flight number */;
  carrier?: CodeName | null /** Carrier information */;
  departureDateLabel?: string | null /** Formatted departure date */;
  departureTimeLabel?: string | null /** Formatted Departure time */;
  departureDateTime?: string | null /** Departure time */;
  arrivalDateLabel?: string | null /** Formatted arrival date */;
  arrivalTimeLabel?: string | null /** Formatted Arrival time */;
  arrivalDateTime?: string | null /** Arrival time */;
  cabinClass?: CodeName | null /** Cabin class information */;
  equipment?: CodeName | null /** Equipment information */;
}
/** Connection Fare family info */
export interface S_FareFamilyCOO {
  name?: string | null /** Fare family title text */;
  code?: string | null /** Fare family title text */;
  description?: string | null /** Fare family commercial description text */;
}
/** segment remarks */
export interface S_RemarksCOO {
  remark?: string | null /** remark for the segment */;
}
/** Conditions for the connection of the ticket */
export interface TicketConditionsCOO {
  sameConditions?: boolean | null /** Shows if the conditions are the same for all connections */;
  connections?: (TC_ConditionCOO | null)[] | null /** Conditions for each connection */;
}
/** Conditions for the connection of the ticket */
export interface TC_ConditionCOO {
  origin?: AirportCOO | null /** Origin */;
  destination?: AirportCOO | null /** Destination */;
  fareFamily?: TC_FareFamilyCOO | null /** Fare family info */;
  tripText?: string | null /** Trip text */;
  travelClassText?: string | null /** Travel class text */;
  cancelCondition?: TC_CancelConditionCOO | null /** Cancel condition */;
  changeCondition?: TC_ChangeConditionCOO | null /** Change condition */;
  noShowCondition?: TC_GenericConditionInfoCOO | null /** No show condition */;
  goShowCondition?: TC_GenericConditionInfoCOO | null /** No show condition */;
  advancePurchaseCondition?: TC_GenericConditionInfoCOO | null /** No show condition */;
  maximumStayCondition?: TC_GenericConditionInfoCOO | null /** Maximum stay condition */;
  minimumStayCondition?: TC_GenericConditionInfoCOO | null /** Maximum stay condition */;
  skyPriorityCondition?: TC_GenericConditionInfoCOO | null /** Maximum stay condition */;
  iATACondition?: (TC_IATAConditionCOO | null)[] | null /** IATA condition */;
  baggageAllowance?: TC_BaggageAllowanceConditionCOO | null /** Baggage allowance condition */;
  flyingBlue?: TC_GenericConditionInfoCOO | null /** FlyingBlue condition */;
}
/** Fare family info */
export interface TC_FareFamilyCOO {
  title?: string | null /** Fare family title text */;
  commercialDescription?: string | null /** Fare family commercial description text */;
}
/** Conditions for cancel */
export interface TC_CancelConditionCOO {
  allowedBeforeDeparture?: boolean | null /** Is refund allowed before departure */;
  allowedAfterDeparture?: boolean | null /** Is refund allowed after departure */;
  commercialText?: string | null /** Cancel condition commercial text */;
  taxRefundText?: string | null /** Tax refund fare condition */;
  refundText?: string | null /** Refund fee fare condition */;
  beforeDepartureDetailsText?: string | null /** Cancel condition before departure details text */;
  afterDepartureDetailsText?: string | null /** Cancel condition after departure details text */;
  extraCostsText?: string | null /** Cancel condition extra cost text */;
}
/** Conditions for the change */
export interface TC_ChangeConditionCOO {
  allowedBeforeDeparture?: boolean | null /** Is change allowed before departure */;
  allowedAfterDeparture?: boolean | null /** Is change allowed after departure */;
  commercialText?: string | null /** Change condition commercial text */;
  beforeDepartureDetailsText?: string | null /** Change condition before departure details text */;
  afterDepartureDetailsText?: string | null /** Change condition after departure details text */;
  taxChangeText?: string | null /** Tax change fare condition */;
  feeAfterTaxText?: string | null /** After tax fee fare condition */;
  phoneAdminFeeText?: string | null /** Cancel condition before departure details text */;
}
/** Conditions for minimum stay */
export interface TC_GenericConditionInfoCOO {
  commercialText?: string | null /** Minimum stay condition commercial text */;
  detailsText?: string | null /** Minimum stay condition details text */;
}
/** Conditions for IATA */
export interface TC_IATAConditionCOO {
  title?: string | null /** IATA condition title */;
  text?: string | null /** IATA condition text */;
}
/** Conditions baggage allowance */
export interface TC_BaggageAllowanceConditionCOO {
  commercialText?: string | null /** Baggage allowance commercial text */;
  detailsText?: string | null /** Baggage allowance details text */;
  handBaggageDetailsText?: string | null /** Baggage allowance hand baggage */;
}
/** Passenger */
export interface PassengerCOO {
  passengerId?: string | null /** Passenger id */;
  label?: string | null /** Passenger label */;
  passengerType?: string | null /** Passenger type */;
  contactDetails?: ContactDetailsCOO | null /** Contact details type */;
  personalDetails?: PersonalDetailsCOO | null /** Personal Details */;
}
/** Contact Details */
export interface ContactDetailsCOO {
  label?: string | null /** label */;
  emailAddress?: string | null /** E-mail adress */;
  phoneNumberFirst?: string | null /** 1st/main phone number */;
  emailForCommercialUse?: boolean | null /** allows receiving commercial offers */;
}
/** Contact Details */
export interface PersonalDetailsCOO {
  label?: string | null /** label */;
  firstName?: string | null /** Firstname */;
  lastName?: string | null /** Lastname */;
  title?: string | null /** title */;
  ticketName?: string | null /** ticketname */;
  dateOfBirth?: string | null /** Date of birth */;
  frequentFlyerProgram?: string | null /** FF Program name */;
  frequentFlyerNumber?: string | null /** FF Program number */;
  skyBonusNumber?: string | null /** Sky bonus number */;
  contractName?: string | null /** DOCT contract name */;
  corporateAccountNumber?: string | null /** DOCT account number */;
}
/** Ancillary Product */
export interface PaidOptionCOO {
  name?: string | null /** Name of the ancillary product */;
  price?: PriceCOO | null /** Price of the ancillary product */;
}
/** Price */
export interface PriceCOO {
  amount?: number | null /** Price amount */;
  currencyCode?: string | null /** Price code */;
  name?: string | null /** Localized price string */;
}
/** Product List */
export interface ProductListCOO {
  seatProducts?: (SeatProductCOO | null)[] | null /** Seats information */;
  baggageProducts?: (BaggageProductCOO | null)[] | null /** Baggage information */;
  flightProduct?: FlightProductCOO | null /** Flight product information */;
  insuranceProduct?: InsuranceProductCOO | null /** Insurance product information */;
  mealProducts?: (MealProductCOO | null)[] | null /** list of meal products ordered for this reservation */;
  environmentalProducts?: (EnvironmentalProductCOO | null)[] | null;
  timeToThinkProduct?: TimeToThinkProductCOO | null;
}
/** Seat Product */
export interface SeatProductCOO {
  productTypeText?: string | null /** Product's type text */;
  price?: PriceCOO | null /** Seat price description */;
  oldPrice?: PriceCOO | null;
  segment?: SegmentCOO | null /** Segment Id only */;
  passenger?: PassengerCOO | null /** Passenger information */;
  status?: string | null /** Status code */;
  code?: string | null /** The Code */;
  name?: string | null /** Name of the class, e.g. "Economy" etc. */;
  seatNumber?: string | null /** Seat number as in airplane, e.g. 8A */;
}
/** Baggage Product */
export interface BaggageProductCOO {
  productTypeText?: string | null /** Product's type text */;
  price?: PriceCOO | null /** Baggage price description */;
  oldPrice?: PriceCOO | null /** Baggage old price description */;
  connection?: ConnectionCOO | null /** Connection Id only */;
  passenger?: PassengerCOO | null /** Passenger information */;
  status?: string | null /** Status code */;
  unit?: string | null /** Baggage unit */;
  baseAllowance?: number | null /** Base baggage allowance */;
  extraAllowance?: number | null /** Extra baggage allowance */;
  boughtAllowance?: number | null /** Bought baggage allowance */;
}
/** Flight Product */
export interface FlightProductCOO {
  status?: string | null /** Flight product status */;
  reservation?: FP_ReservationCOO | null /** Reservation information */;
  price?: PriceCOO | null /** Price of the flight product */;
  oldPrice?: PriceCOO | null /** Original price of the flight product */;
  tax?: PriceCOO | null /** Tax of the flight product */;
  fare?: PriceCOO | null /** Fare of the flight product */;
  pricesPerPassenger?: (PricesPerPassengerCOO | null)[] | null /** flight prices including fare and taxes per passenger */;
}
/** Prices including fare and taxes per passenger */
export interface PricesPerPassengerCOO {
  passengerType?: string | null /** ADULT / CHILD / INFANT */;
  totalPrice?: PriceCOO | null /** totalPrice */;
  fare?: PriceCOO | null /** fare price */;
  totalTaxes?: PriceCOO | null /** totalTaxes */;
  taxes?: (TaxCOO | null)[] | null /** flight taxes per passenger */;
}
/** Specification of a specific case of a specific type of tax */
export interface TaxCOO {
  code?: string | null /** Tax code, e.g. CJ for security charge */;
  name?: string | null /** Name of the tax code, e.g. security charge */;
  price?: PriceCOO | null /** Price of this tax */;
  costType?: string | null /** e.g. NON_AIRLINE_COSTS */;
}
/** Insurance Product */
export interface InsuranceProductCOO {
  type?: string | null /** Type of the insurance */;
  price?: PriceCOO | null /** Price of the insurance product */;
  status?: string | null /** Insurance status */;
}
/** Meal product */
export interface MealProductCOO {
  status?: string | null /** Status of the product, e.g QUOTED/ISSUED etc */;
  name?: string | null /** commercial name given to a meal of this type */;
  price?: PriceCOO | null /** price of this meal product */;
  oldPrice?: PriceCOO | null;
  segment?: MP_SegmentCOO | null /** segment to which this meal applies */;
  passenger?: MP_PassengerCOO | null /** passenger for which the meal was ordered */;
}
/** segment to which the meal product applies */
export interface MP_SegmentCOO {
  segmentId?: string | null /** identifier of the segment */;
  origin?: string | null /** city name of the origin of this flight */;
  destination?: string | null /** city name of the destination of this flight */;
}
/** Passenger for whom the meal product was ordered */
export interface MP_PassengerCOO {
  firstName?: string | null /** first name of the passenger for which the meal product was ordered */;
  lastName?: string | null /** last name of the passenger for which the meal product was ordered */;
  passengerId?: string | null;
}

export interface EnvironmentalProductCOO {
  productTypeText?: string | null /** Product's type text */;
  status?: string | null /** Status code */;
  segment?: SegmentCOO | null;
  co2Kg?: number | null;
  distanceKm?: number | null;
  fuelLiters?: number | null;
  passenger?: PassengerCOO | null;
  price?: PriceCOO | null;
  oldPrice?: PriceCOO | null;
}

export interface TimeToThinkProductCOO {
  price?: PriceCOO | null;
  status?: string | null;
  referenceId?: string | null;
  endDateTime?: string | null;
  endDateLabel?: string | null;
  endTimeLabel?: string | null;
  perPassenger?: boolean | null;
}
/** Overall payment data and details */
export interface PaymentCOO {
  status?: string | null /** Payment status (INVALID, UNUSED, Accepted, Approved) */;
  confirmed?: boolean | null /** indicator if there is already a confirmed payment */;
  inProgress?: boolean | null /** Indicator if a payment is on progress or not */;
  amountToPay?: PriceCOO | null /** Amount that needs to be paid */;
  paymentMethod?: PaymentMethodCOO | null /** Payment method */;
}
/** different (credit)card types */
export interface PaymentMethodCOO {
  code?: string | null /** payment type code */;
  name?: string | null /** payment type name */;
  additionalInfo?: string | null /** additional Info for payment */;
  imageReference?: LinkCOO | null /** Payment method icon href */;
  inputFields?: (InputFieldsCOO | null)[] | null /** inputFields for confirmation page */;
  ccNumber?: string | null /** obscured card number */;
  ccExpirationDate?: string | null /** card expiration date */;
  paymentFee?: PriceCOO | null /** fixed payment fee */;
  maximumPaymentFee?: PriceCOO | null /** maximum payment fee */;
  directPayment?: boolean | null /** is it direct payment */;
  dataCollectionPage?: boolean | null /** dataCollectionPage boolean to see if a DCP page is needed */;
  binInvalid?: boolean | null;
  allowedCurrencies?: (CodeName | null)[] | null /** the allowed currencies in case of MCP (Mult Currency Payment) */;
  value?: PriceCOO | null /** in case of using voucher this is the value of the voucher */;
  timeLimit?: TimeLimitCOO | null /** in case of using voucher this is the availability of the voucher */;
  _links?: AdditionalInfoLinksCOO | null /** additional link for some payment methods */;
}
/** different (credit)card types */
export interface LinkCOO {
  href?: string | null;
}
/** Input type for inputFields on payment/confirmation page */
export interface InputFieldsCOO {
  additionalInfo?: string | null /** additional info */;
  code?: string | null /** inputfield code */;
  mandatory?: boolean | null /** inputfield mandatory */;
  maxLength?: number | null /** maxLength input field */;
  minLength?: number | null /** minLength input field */;
  name?: string | null /** inputfield name */;
  readOnly?: boolean | null /** readOnly boolean */;
  regularExpression?: string | null /** regular expression pattern */;
  type?: string | null /** type of input field */;
  value?: string | null /** possible prefilled value of input */;
}
/** TimeLimit */
export interface TimeLimitCOO {
  timeLimit?: string | null /** Time limit for vouchers */;
}
/** additional Info Links */
export interface AdditionalInfoLinksCOO {
  additionalInfoUrl?: LinkCOO | null /** additionalInfoLinks */;
}

export interface ResidualValueDocumentCOO {
  documentNumber?: string | null;
  lastName?: string | null;
  type?: string | null;
  value?: PriceCOO | null;
}
/** Generic Warning Object */
export interface GenericWarningCOO {
  code?: string | null /** Error/warning code */;
  description?: string | null /** Description of the error/warning */;
  severity?: string | null /** Error/warning severity level */;
}
/** Provides payment options for POS (CC only for now) */
export interface PaymentOptionsCOO {
  _warnings?: (GenericWarningCOO | null)[] | null /** Order API warnings array */;
  paymentGroups?: (PaymentGroupCOO | null)[] | null /** PaymentGroups */;
  cyberSource?: CyberSourceCOO | null /** CyberSource input data for device 'fingerprint' security verification */;
  termsAndConditionsLinks?: (KeyValueCOO | null)[] | null /** Order API terms and condition links */;
}
/** Provides payment methods for POS (CC only for now) */
export interface PaymentGroupCOO {
  code?: string | null /** paymentOption Code */;
  name?: string | null /** paymentOption Name */;
  additionalInfo?: string | null /** paymentOption additionalInfo */;
  imageReference?: LinkCOO | null;
  paymentFee?: PriceCOO | null;
  inputFields?: (InputFieldsCOO | null)[] | null /** inputFields for confirmation page */;
  paymentMethods?: (PaymentMethodCOO | null)[] | null /** different payment methods */;
}
/** CyberSource input data for device 'fingerprint' security verification */
export interface CyberSourceCOO {
  orgId: string /** Organization Id */;
  merchantId: string /** Merchant Id */;
  sessionId: string /** Session Id */;
}
/** KeyValueCOO */
export interface KeyValueCOO {
  key?: string | null /** KeyValue key */;
  value?: string | null /** KeyValue value */;
}
/** Information aiding the construction of a form with passenger input fields */
export interface PassengerFieldsCOO {
  passengers?:
    | (PF_PassengerCOO | null)[]
    | null /** list of initialised passengers as a starting point for the id page passenger entry form */;
  inputFieldValueLists?: (CommonInputFieldValueListCOO | null)[] | null;
  locationSpecificTexts?: (string | null)[] | null /** location specific texts for some destinations */;
  customer?: PF_CustomerCOO | null;
}
/** Input type for a Passenger part of the id page entry form */
export interface PF_PassengerCOO {
  label?: string | null;
  passengerId?: string | null;
  passengerType?: string | null;
  personalDetails?: JsonData | null;
  contactDetails?: JsonData | null;
}

export interface CommonInputFieldValueListCOO {
  code?: string | null;
  inputFieldValues?: (CommonInputFieldValueListValuesCOO | null)[] | null;
}

export interface CommonInputFieldValueListValuesCOO {
  value?: string | null;
  name?: string | null;
}
/** Input type for the customer part of the id page entry form (i.e. the passenger data of a logged in customer) */
export interface PF_CustomerCOO {
  label?: string | null;
  passengerType?: string | null;
  personalDetails?: JsonData | null;
  contactDetails?: JsonData | null;
  customerProfileReferenceId?: string | null;
}

export interface CartProductsCOO {
  cart?: (CartProductCOO | null)[] | null;
}

export interface CartProductCOO {
  productClass?: string | null;
  code?: string | null;
  name?: string | null;
  productType?: string | null;
  insuranceOffers?: (InsuranceOfferThirdPartyAncillariesCOO | null)[] | null;
  productId?: string | null;
}

export interface InsuranceOfferThirdPartyAncillariesCOO {
  productId?: string | null /** required for posting a new product */;
  type?: string | null;
  code?: string | null;
  name?: string | null;
  productCode?: string | null;
  endDate?: string | null;
  startDate?: string | null;
  passengerId?: string | null;
  prices?: (PriceCOO | null)[] | null;
  insuranceTypeCode?: string | null;
  amountToInsure?: number | null;
  currencyCode?: string | null;
  description?: string | null;
  termsAndConditionsUrl?: string | null;
}
/** Offered Products information */
export interface OfferedProductsCOO {
  ancillaries?: (AncillariesCOO | null)[] | null;
  thirdPartyAncillaries?: (InsuranceThirdPartyAncillariesCOO | null)[] | null;
  carServiceThirdPartyAncillaries?: (CarServiceThirdPartyAncillariesCOO | null)[] | null;
  _errors?: (GenericWarningCOO | null)[] | null;
}
/** Ancillaries */
export interface AncillariesCOO {
  productClass?: string | null /** product class */;
  name?: string | null /** Ancillary type name */;
  code?: string | null /** Ancillary type code */;
  productType?: string | null /** Ancillary product type */;
  segment?: SegmentCOO | null /** flight segment */;
}

export interface InsuranceThirdPartyAncillariesCOO {
  productClass?: string | null;
  name?: string | null;
  productType?: string | null;
  insuranceOffers?: (InsuranceOfferThirdPartyAncillariesCOO | null)[] | null;
}

export interface CarServiceThirdPartyAncillariesCOO {
  productClass?: string | null;
  name?: string | null /** Ancillary type name */;
  code?: string | null /** Ancillary type code */;
  productType?: string | null /** Ancillary product type */;
  segment?: SegmentCOO | null /** flight segment */;
  deeplink?: string | null /** deeplink to third-party-ancillary */;
  widget?: (AncillaryWidgetCOO | null)[] | null /** widget link for different devices */;
}
/** Ancillary Widgets */
export interface AncillaryWidgetCOO {
  name?: string | null /** Widget device name */;
  href?: string | null /** Widgets img src */;
}

export interface OrderV2 {
  orderId?: string | null /** Order id */;
  referenceFlightProduct?: ReferenceFlightProductCOO | null /** Reference Flight Product for check-in flow */;
  paidOptionList?: (PaidOptionCOO | null)[] | null /** Paid Option (ancillary product) list */;
  productList?: ProductListCOO | null /** Product list */;
  totalPrice?: PriceCOO | null /** Total price information */;
  paymentPrice?: PriceCOO | null /** Payment price information */;
  currencyConversionSurcharge?: PriceCOO | null /** Currency conversion surcharge */;
  totalBookingFee?: PriceCOO | null /** Total booking fee information */;
  totalPaymentFee?: PriceCOO | null;
  termsAndConditions?: JsonData | null;
  channel?: string | null /** Order channel */;
  supportTimeFrame?: string | null /** Order support time */;
  residualValue?: PriceCOO | null;
  residualValueDocuments?: (ResidualValueDocumentCOO | null)[] | null;
  ticketConditions?: TicketConditionsCOO | null /** Conditions for one of the connections of the ticket */;
  _warnings?: (GenericWarningCOO | null)[] | null /** Order API warningsMock array */;
  passengerFields?: PassengerFieldsCOO | null /** PassengerFields information */;
  paymentOptionsV2?: PaymentOptionsV2 | null;
  payment?: Payment | null;
  cartProducts?: CartProductsCOO | null;
  offeredProducts?: OfferedProductsCOO | null /** ancillaries, in order api because it is combined with passenger detailsto decide to navigate to ancillaries (options) without an extra round trip */;
}

export interface PaymentOptionsV2 {
  payload?: JsonData | null;
}

export interface Payment {
  paymentStatus?: PaymentStatus | null;
  bankIdentificationNumber?: BankIdentificationNumber | null;
  confirmed?: boolean | null;
  credits?: Credits | null;
  currency?: Currency | null;
  discountCode?: DiscountCode | null;
  emailAddress?: string | null;
  miles?: Miles | null;
  partial?: boolean | null;
  inProgress?: boolean | null;
  unknown?: boolean | null;
  paymentGroup?: PaymentGroup | null;
  paymentMethod?: PaymentMethod | null;
  returnedAmount?: Money | null;
  vouchers?: (Voucher | null)[] | null;
  waitForFinalization?: boolean | null;
}

export interface BankIdentificationNumber {
  binNumber?: string | null;
  invalid?: boolean | null;
  reason?: string | null;
}

export interface Credits {
  label?: string | null;
  membership?: string | null;
  reason?: string | null;
  balance?: number | null;
  amount?: number | null;
  invalid?: boolean | null;
}

export interface Currency {
  currencyCode?: string | null;
  invalid?: boolean | null;
  reason?: string | null;
}

export interface DiscountCode {
  label?: string | null;
  code?: string | null;
  value?: Money | null;
  reason?: string | null;
  title?: string | null;
}

export interface Money {
  id?: string | null;
  amount?: number | null;
  currencyCode?: string | null;
}

export interface Miles {
  label?: string | null;
  membership?: string | null;
  balance?: number | null;
  amount?: number | null;
  invalid?: boolean | null;
  reason?: string | null;
}

export interface PaymentGroup {
  label?: string | null;
  code?: string | null;
  additionalInfo?: string | null;
  selected?: boolean | null;
  labelKey?: string | null;
  _links?: PaymentGroupLinks | null;
}

export interface PaymentGroupLinks {
  image?: HalLink | null;
}
/** generic link object: https://tools.ietf.org/html/draft-kelly-json-hal-08#section-5 */
export interface HalLink {
  href?: string | null;
  templated?: boolean | null;
  type?: string | null;
  deprecation?: string | null;
  name?: string | null;
  profile?: string | null;
  title?: string | null;
  hreflang?: string | null;
}

export interface PaymentMethod {
  additionalInfo?: string | null;
  allowedCurrencies?: JsonData | null;
  amount?: Money | null;
  billingDetails?: BillingDetails | null;
  code?: string | null;
  invalid?: boolean | null;
  label?: string | null;
  paymentDetails?: PaymentDetails | null;
  paymentFee?: PaymentFee | null;
  preferenceId?: string | null;
  timeLimit?: string | null;
  reason?: string | null;
  responseDetails?: ResponseDetails | null;
  saveAsPreference?: boolean | null;
  selected?: boolean | null;
  labelKey?: string | null;
  _links?: PaymentMethodLinks | null;
}

export interface BillingDetails {
  address?: string | null;
  addressTitle?: string | null;
  addressExtraInfo?: string | null;
  addressExtraInfoTitle?: string | null;
  city?: string | null;
  cityTitle?: string | null;
  country?: string | null;
  countryTitle?: string | null;
  county?: string | null;
  countyTitle?: string | null;
  emailAddress?: string | null;
  emailAddressTitle?: string | null;
  firstName?: string | null;
  firstNameTitle?: string | null;
  houseNumber?: string | null;
  houseNumberTitle?: string | null;
  phoneNumber?: string | null;
  phoneNumberTitle?: string | null;
  lastName?: string | null;
  lastNameTitle?: string | null;
  zipCode?: string | null;
  zipCodeTitle?: string | null;
  schema?: JsonData | null;
}

export interface PaymentDetails {
  bankCity?: string | null;
  bankCityTitle?: string | null;
  binNumber?: string | null;
  binNumberTitle?: string | null;
  creditCardNumber?: string | null;
  creditCardNumberTitle?: string | null;
  creditCardVerificationCode?: string | null;
  creditCardVerificationCodeTitle?: string | null;
  expiryDate?: string | null;
  expiryDateTitle?: string | null;
  fiscalNumber?: string | null;
  fiscalNumberTitle?: string | null;
  installments?: number | null;
  installmentsTitle?: string | null;
  maskedCardNumber?: string | null;
  maskedCardNumberTitle?: string | null;
  schema?: JsonData | null;
}

export interface PaymentFee {
  amount?: number | null;
  currencyCode?: string | null;
}

export interface ResponseDetails {
  bankAccountHolder?: string | null;
  bankAccountHolderTitle?: string | null;
  bankAccountNumber?: string | null;
  bankAccountNumberTitle?: string | null;
  bankAccountType?: string | null;
  bankName?: string | null;
  bankNameTitle?: string | null;
  bankCity?: string | null;
  bankCityNameTitle?: string | null;
  bankCountry?: string | null;
  bankCountryTitle?: string | null;
  bankSpecialId?: string | null;
  bankSwift?: string | null;
  bankSwiftTitle?: string | null;
  bankIban?: string | null;
  bankIbanTitle?: string | null;
  bankNetfifsc?: string | null;
  bankBillerId?: string | null;
  paymentReference?: string | null;
  paymentReferenceTitle?: string | null;
  customerPaymentReference?: string | null;
  schema?: JsonData | null;
}

export interface PaymentMethodLinks {
  image?: HalLink | null;
  additionalInfoUrl?: HalLink | null;
}

export interface Voucher {
  label: string;
  identity?: string | null;
  number?: string | null;
  title?: string | null;
  readOnly?: string | null;
  value?: Money | null;
  invalid?: boolean | null;
  reason?: string | null;
  maximumNumber?: number | null;
}

export interface DecryptedReservationCOO {
  pnr?: string | null;
  lastname?: string | null;
  conversationStateId?: string | null;
  orderId?: string | null;
  market?: string | null;
}

export interface AncillariesANO {
  shopId?: string | null;
  errors?: (AncillariesErrorsANO | null)[] | null;
  offers?: (AncillariesOfferANO | null)[] | null;
  passengers?: (AncillariesPassengerANO | null)[] | null;
  reservation?: ReservationANO | null;
  itinerary?: ItineraryANO | null;
  productPerks?: ProductPerksANO | null;
  baggageAllowance?: (BaggageAllowanceANO | null)[] | null;
  baggageOffers?: (BaggageOfferANO | null)[] | null;
  hertzCarOffer?: (HertzCarOffer | null)[] | null;
  tree4u?: Tree4uANO | null;
  cart?: CartANO | null;
}

export interface AncillariesErrorsANO {
  code?: string | null;
  description?: string | null;
  segment?: AncillariesErrorsSegmentANO | null;
}

export interface AncillariesErrorsSegmentANO {
  segmentId?: string | null;
}

export interface AncillariesOfferANO {
  productClass?: string | null;
  passengerId?: string | null;
  segmentId?: string | null;
}

export interface AncillariesPassengerANO {
  firstName?: string | null;
  lastName?: string | null;
  passengerId?: string | null;
  passengerType?: string | null;
  fullName?: string | null;
  displayMembership?: string | null;
  infant?: AncillariesPassengerANO | null;
}

export interface ReservationANO {
  bookingCode?: string | null;
}

export interface ItineraryANO {
  connections?: (ConnectionANO | null)[] | null;
  segments?: (SegmentANO | null)[] | null;
  segment?: SegmentANO | null;
  assignedSeats?: (AssignedSeatANO | null)[] | null;
  nba?: NbaANO | null;
}

export interface ConnectionANO {
  connectionId?: string | null;
  ordinal?: number | null;
  departureDateTime?: string | null;
  departureAirportCode?: string | null;
  departureLocationLong?: string | null;
  departureLocationShort?: string | null;
  departureCityName?: string | null;
  arrivalDateTime?: string | null;
  arrivalAirportCode?: string | null;
  arrivalLocationLong?: string | null;
  arrivalLocationShort?: string | null;
  arrivalCityName?: string | null;
  arrivalCountryName?: string | null;
  segments?: (SegmentANO | null)[] | null;
}

export interface SegmentANO {
  segmentId?: string | null;
  displayFlightNumber?: string | null;
  departureDateTime?: string | null;
  departureAirportCode?: string | null;
  departureLocationLong?: string | null;
  departureLocationShort?: string | null;
  arrivalDateTime?: string | null;
  arrivalAirportCode?: string | null;
  arrivalLocationLong?: string | null;
  arrivalLocationShort?: string | null;
}
/** PassengerFlightDetails from CheckinAPI */
export interface AssignedSeatANO {
  passengerId?: string | null;
  segmentId?: string | null;
  seatNumber?: string | null;
  cabinClassName?: string | null;
}

export interface NbaANO {
  product?: NbaProductANO | null;
  feedback?: NbaFeedbackANO | null;
}

export interface NbaProductANO extends ProductInterfaceANO {
  productId?: string | null;
  productClass?: string | null;
  productType?: string | null;
  code?: string | null;
  name?: string | null;
  prices?: (PriceANO | null)[] | null;
  displayPrice?: DisplayPriceANO | null;
  label?: string | null /** NBA specifics */;
  segments?: (SegmentANO | null)[] | null;
  href?: string | null;
  legendOrder?: string | null;
  numberOfAvailableProducts?: string | null;
  productPerks?: ProductPerksANO | null;
}

export interface PriceANO extends PriceInterfaceANO {
  amount?: number | null;
  basePriceAmount?: number | null;
  currencyCode?: string | null;
  description?: string | null;
}

export interface DisplayPriceANO extends PriceInterfaceANO {
  amount?: number | null;
  currencyCode?: string | null;
}

export interface ProductPerksANO {
  displayFlightNumber?: string | null;
  products?: (ProductANO | null)[] | null;
}

export interface ProductANO {
  name?: string | null;
  displayCode?: string | null;
  imageCode?: string | null;
  perks?: (PerkANO | null)[] | null;
  prices?: (PriceANO | null)[] | null;
  displayPrice?: DisplayPriceANO | null;
}

export interface PerkANO {
  code?: string | null;
  description?: string | null;
}

export interface NbaFeedbackANO {
  href?: string | null;
}

export interface BaggageAllowanceANO {
  connectionId?: string | null;
  passengerId?: string | null;
  unit?: string | null;
  handBaggageAllowance?: number | null;
  accessoryBaggageAllowance?: number | null;
  baseAllowance?: number | null;
  extraAllowance?: number | null;
  totalAllowance?: number | null;
}

export interface BaggageOfferANO {
  productId?: string | null;
  passengerId?: string | null;
  connectionId?: string | null;
  amount?: number | null;
  unit?: string | null;
  prices?: (PriceANO | null)[] | null;
  displayPrice?: DisplayPriceANO | null;
}

export interface HertzCarOffer {
  deeplink?: string | null /** deeplink to third-party-ancillary */;
  widget?: (AncillaryWidget | null)[] | null /** widget link for different devices */;
}
/** Ancillary Widgets */
export interface AncillaryWidget {
  name?: string | null /** Widget device name */;
  href?: string | null /** Widgets img src */;
}

export interface Tree4uANO {
  offers?: (Tree4uOfferANO | null)[] | null;
  currencyCode?: string | null;
  content?: Tree4uContentANO | null;
}

export interface Tree4uOfferANO {
  productId?: string | null;
  passengerId?: string | null;
}

export interface Tree4uContentANO {
  main?: Tree4uMainContentANO | null;
  more?: Tree4uMoreContentANO | null;
}

export interface Tree4uMainContentANO {
  title?: string | null;
  text?: string | null;
  imageUrl?: string | null;
  termsAndConditions?: string | null;
}

export interface Tree4uMoreContentANO {
  text?: string | null;
  imageUrl?: string | null;
  who?: Tree4uAdditionalContentWhoANO | null;
  projects?: Tree4uAdditionalContentProjectsANO | null;
  how?: Tree4uAdditionalContentHowANO | null;
  why?: Tree4uAdditionalContentWhyANO | null;
}

export interface Tree4uAdditionalContentWhoANO {
  title?: string | null;
  text?: string | null;
}

export interface Tree4uAdditionalContentProjectsANO {
  title?: string | null;
  examples?: (Tree4uAdditionalContentProjectsExamplesANO | null)[] | null;
}

export interface Tree4uAdditionalContentProjectsExamplesANO {
  text?: string | null;
}

export interface Tree4uAdditionalContentHowANO {
  title?: string | null;
  steps?: (Tree4uAdditionalContentHowStepsANO | null)[] | null;
}

export interface Tree4uAdditionalContentHowStepsANO {
  text?: string | null;
  imageUrl?: string | null;
}

export interface Tree4uAdditionalContentWhyANO {
  title?: string | null;
  text?: string | null;
}

export interface CartANO {
  summary?: (CartSummaryANO | null)[] | null;
  products?: (CartProductANO | null)[] | null;
}

export interface CartSummaryANO {
  type?: string | null;
  productClass?: string | null;
  count?: number | null;
  totalPrice?: PriceANO | null;
}

export interface SeatCartProductANO extends ProductInterfaceANO {
  productId?: string | null;
  productClass?: string | null;
  productType?: string | null;
  code?: string | null;
  name?: string | null;
  prices?: (PriceANO | null)[] | null;
  displayPrice?: DisplayPriceANO | null;
  passengerId?: string | null /** seat specifics */;
  sku?: string | null;
  segmentId?: string | null;
  seatNumber?: string | null;
}

export interface BaggageCartProductANO extends ProductInterfaceANO {
  productId?: string | null;
  productClass?: string | null;
  productType?: string | null;
  code?: string | null;
  name?: string | null;
  prices?: (PriceANO | null)[] | null;
  displayPrice?: DisplayPriceANO | null;
  passengerId?: string | null /** baggage specifics */;
  bagCount?: number | null;
  connectionId?: string | null;
  type?: string | null;
  unit?: string | null;
}

export interface EnvironmentalCartProductANO extends ProductInterfaceANO {
  productId?: string | null;
  productClass?: string | null;
  productType?: string | null;
  code?: string | null;
  name?: string | null;
  prices?: (PriceANO | null)[] | null;
  displayPrice?: DisplayPriceANO | null;
  passengerId?: string | null /** environmental specifics */;
}

export interface FlightProductResponse {
  id?: string | null;
}

export interface FlightOfferResponse {
  directOutBounds?: (FlightOfferRowType | null)[] | null;
  inDirectOutBounds?: (FlightOfferRowType | null)[] | null;
  directInBounds?: (FlightOfferRowType | null)[] | null;
  inDirectInBounds?: (FlightOfferRowType | null)[] | null;
}

export interface FlightOfferRowType {
  departureTime?: string | null;
  arrivalTime?: string | null;
  destinationCode?: string | null;
  originCode?: string | null;
  operatingFlight?: string | null;
  operatingFlightLogo?: string | null;
  operatingCarrier?: string | null;
  flightNumber?: string | null;
  uniqueKey?: string | null;
  duration?: number | null;
  flightProducts?: (FlightProductType | null)[] | null;
  isDirect?: boolean | null;
  segments?: (FlightOfferSegment | null)[] | null;
  transferStops?: string | null;
  flightDate?: string | null;
  dayChange?: number | null;
  dayChangeStr?: string | null;
  isLowestFare?: boolean | null;
  acvCode?: string | null;
  flightAmenityNumber?: string | null;
}

export interface FlightProductType {
  cabinClass?: string | null;
  displayPrice?: number | null;
  currency?: string | null;
  seatsLeft?: number | null;
  fareBasis?: string | null;
  isCorporateFare?: boolean | null;
  upsellsHateoasPath?: string | null;
  splitPrice?: number | null;
  totalPrice?: number | null;
  splitTaxDetails?: TaxDetails | null;
  totalTaxDetails?: TaxDetails | null;
}

export interface TaxDetails {
  totalPrice?: number | null;
  pricePerPassengerTypes?: (taxDetailsPricePerPassengerType | null)[] | null;
  currency?: string | null;
}

export interface taxDetailsPricePerPassengerType {
  passengerType?: string | null;
  taxes?: number | null;
}

export interface FlightOfferSegment {
  acvCode?: string | null;
  airportChangeWarning?: boolean | null;
  amenities?: (FlightOfferAmenity | null)[] | null;
  arrivalTime?: string | null;
  carrierName?: string | null;
  departureTime?: string | null;
  destination?: string | null;
  destinationAirport?: string | null;
  destinationCode?: string | null;
  duration?: number | null;
  equipmentCode?: string | null;
  equipmentName?: string | null;
  flightAmenityNumber?: string | null;
  flightNumber?: string | null;
  highestPriority?: boolean | null;
  marketingCarrier?: string | null;
  marketingFlightNumber?: string | null;
  operatingCarrier?: string | null;
  operatingCarrierLogo?: string | null;
  origin?: string | null;
  originAirport?: string | null;
  originCode?: string | null;
  ratingStatistics?: FlightOfferRatingStatistics | null;
  stopOvers?: (StopOver | null)[] | null;
  transferTime?: number | null;
}

export interface FlightOfferAmenity {
  code?: string | null;
  label?: string | null;
  imageUrl?: string | null;
  category?: string | null;
  detail?: string | null;
  flightAmenityNumber?: string | null;
  cabinClasses?: (string | null)[] | null;
}

export interface FlightOfferRatingStatistics {
  averageRating?: number | null;
  numberOfRatings?: number | null;
  ratingCategories?: (FlightOfferRatingCategory | null)[] | null;
}

export interface FlightOfferRatingCategory {
  level?: number | null;
  count?: number | null;
}

export interface StopOver {
  code?: string | null;
  name?: string | null;
}

export interface RelatedProductsResponse {
  timeToThinkProduct?: TimeToThinkProduct | null;
}

export interface TimeToThinkProduct {
  price?: TimeToThinkPrice | null;
  endDateTime?: string | null;
}

export interface TimeToThinkPrice {
  totalPrice?: number | null;
  currency?: string | null;
}

export interface BrandedFaresResponse {
  upsells?: (BrandedFare | null)[] | null;
  upsellPush?: (UpsellPushType | null)[] | null;
}

export interface BrandedFare {
  title?: string | null;
  totalPrice?: number | null;
  currency?: string | null;
  benefits?: (BrandedFareBenefit | null)[] | null;
  extraBenefits?: (BrandedFareBenefit | null)[] | null;
  passengerDetails?: (BrandedFarePassenger | null)[] | null;
  shoppingCartId?: string | null;
  cabin?: string | null;
  availableOffersHateoasPath?: string | null;
  lowestOffersHateoasLink?: string | null;
  code?: string | null;
  totalBookingFee?: number | null;
  locationSpecificRemarks?: (string | null)[] | null;
  splitPrice?: number | null;
  totalPriceReturn?: number | null;
  splitTaxDetails?: TaxDetails | null;
  returnTaxDetails?: TaxDetails | null;
  fareBasis?: string | null;
  segments?: (BrandedFareSegment | null)[] | null;
}

export interface BrandedFareBenefit {
  iconUrl?: string | null;
  benefitType?: string | null;
  text?: string | null;
  detailsText?: string | null;
  allowedBeforeDeparture?: boolean | null;
  allowedAfterDeparture?: boolean | null;
  beforeDepartureDetailsText?: string | null;
  afterDepartureDetailsText?: string | null;
  taxRefundText?: string | null;
  refundText?: string | null;
  extraCostsText?: string | null;
  phoneAdminFeeText?: string | null;
  feeAfterTaxText?: string | null;
  taxChangeText?: string | null;
  handBaggageDetailsText?: string | null;
  commercialText?: string | null;
  quantity?: number | null;
}

export interface BrandedFarePassenger {
  displayPrice?: number | null;
  passengerType?: string | null;
  totalPriceReturn?: number | null;
  totalPrice?: number | null;
}

export interface BrandedFareSegment {
  sellingClass?: string | null;
}

export interface UpsellPushType {
  cabin?: string | null;
  label?: string | null;
  imageUpsell?: string | null;
}

export interface Reservation {
  id?: string | null;
  refreshId?: string | null;
  contactDetails?: ContactDetails | null;
  itinerary?: Itinerary | null;
  passengers?: (Passenger | null)[] | null;
  ticketInfo?: TicketInfo | null;
  reservationResourceId?: string | null;
  invoiceUrl?: string | null;
}

export interface ContactDetails {
  emailAddress?: string | null;
}

export interface Itinerary {
  type?: string | null;
  connections?: (Connection | null)[] | null;
}

export interface Connection {
  originName?: string | null;
  originCode?: string | null;
  destinationAirportCode?: string | null;
  destinationCityCode?: string | null;
  destinationCityName?: string | null;
  connectionDepartureDate?: string | null;
  connectionArrivalDate?: string | null;
  segments?: (Segment | null)[] | null;
}

export interface Segment {
  id?: string | null;
  origin?: Location | null;
  destination?: Location | null;
  flight?: Flight | null;
  ancillaries?: SegmentAncillaries | null;
}

export interface Location {
  cityCode?: string | null;
  cityName?: string | null;
  airportName?: string | null;
  airportCode?: string | null;
}

export interface Flight {
  cabinClass?: string | null;
  carrierName?: string | null;
  carrierCode?: string | null;
  duration?: string | null;
  equipment?: CodeName | null;
  flightNumber?: string | null;
  haulType?: string | null;
  localScheduledDeparture?: string | null;
  localScheduledArrival?: string | null;
  scheduledDeparture?: string | null;
  scheduledArrival?: string | null;
  marketingAirlineCode?: string | null;
  marketingFlightNumber?: string | null;
  transferTime?: string | null;
  stops?: (Stop | null)[] | null;
}

export interface Stop {
  cityName?: string | null;
  countryName?: string | null;
  stopDuration?: string | null;
}

export interface SegmentAncillaries {
  seats?: (Seats | null)[] | null;
  baggage?: (Baggage | null)[] | null;
}

export interface Seats {
  seatClass?: string | null;
  seatNumbers?: (string | null)[] | null;
}

export interface Baggage {
  count?: number | null;
  type?: string | null;
}

export interface Passenger {
  firstName?: string | null;
  lastName?: string | null;
  tierLevelName?: string | null;
  type?: string | null;
}

export interface TicketInfo {
  bookingCode?: string | null;
  paymentMethod?: string | null;
  totalPrice?: (Price | null)[] | null;
  insurance?: Insurance | null;
}

export interface Price {
  amount?: number | null;
  currencyCode?: string | null;
}

export interface Insurance {
  name?: string | null;
  contractNumber?: string | null;
}

export interface Reservations {
  trips?: (Trip | null)[] | null;
}

export interface Trip {
  type?: string | null;
  bookingCode?: string | null;
  lastName?: string | null;
  departure?: Location | null;
  arrival?: Location | null;
  scheduledDeparture?: string | null;
  scheduledReturn?: string | null;
  nbrOfConnections?: string | null;
  historical?: boolean | null;
}
/** Checkin APIS object */
export interface CheckinInformationCIO {
  alternativeFlights?: AlternativeFlightsCIO | null /** Show the alternative flights if present */;
  checkInGroupId?: string | null /** Check-in group ID */;
  checkInGroupSpecifications?: CheckInGroupSpecificationsCIO | null /** Availablity of (un)select return flight */;
  connections?: (ConnectionsCIO | null)[] | null /** Check in connection type */;
  defaultContactDetails?: (ContactDetailsCIO | null)[] | null /** Reservations contact details */;
  documents?: (DocumentsCIO | null)[] | null /** Available documents for the checkin group */;
  errors?: (ErrorsCIO | null)[] | null /** errors type */;
  notifications?: (NotificationsCIO | null)[] | null /** show the notifications */;
  selectedForCheckinGroup?: (SelectedForCheckinGroupCIO | null)[] | null /** Selected check-in group type */;
  shopId?: string | null /** Shop ID */;
  termsAndConditions?: (TermsAndConditionsCIO | null)[] | null /** Terms and Conditions information type */;
  thirdPartyName?: string | null /** Name of third party */;
  thirdPartyRedirectLink?: string | null /** Redirect link of third party */;
  umnrMaxAge?: number | null /** Unaccompanied minor maximum age type */;
  _links?: LinksCIO | null /** various HATEOAS links available from checkin apis */;
}
/** Description of the alternative flights */
export interface AlternativeFlightsCIO {
  notifications?: (NotificationsCIO | null)[] | null /** show the notifications */;
  _links?: LinksCIO | null /** various HATEOAS links available from checkin apis */;
  connections?: (ConnectionsCIO | null)[] | null /** Check in connection type */;
  errors?: (ErrorsCIO | null)[] | null;
}
/** Description of the notifications */
export interface NotificationsCIO {
  name?: string | null /** showing the notifications */;
  text?: string | null;
  type?: string | null;
}
/** Various HATEOAS links available from checkin apis */
export interface LinksCIO {
  addContactDetails?: HrefCIO | null;
  alternativeFlightsForGoShow?: HrefCIO | null;
  checkin?: HrefCIO | null;
  delete?: HrefCIO | null;
  deliveryOptions?: HrefCIO | null;
  self?: HrefCIO | null;
  shop?: HrefCIO | null;
  update?: HrefCIO | null;
}
/** Various links available for HATEAOS */
export interface HrefCIO {
  href?: string | null;
}
/** Description of the connections */
export interface ConnectionsCIO {
  id?: string | null;
  ordinal?: number | null;
  duration?: string | null;
  segments?: (SegmentsCIO | null)[] | null;
  itinerary?: TypeCIO | null;
  availabilityType?: CodeNameCIO | null;
  alternativeConnections?: (AlternativeConnectionsCIO | null)[] | null;
}
/** Description of the segments */
export interface SegmentsCIO {
  ordinal?: number | null;
  type?: string | null;
  operatingFlightSegment?: OperatingFlightSegmentCIO | null;
  departure?: StationCIO | null;
  arrival?: StationCIO | null;
}
/** Description of the operating flight */
export interface OperatingFlightSegmentCIO {
  id?: string | null;
  boardingDateTime?: string | null;
  duration?: string | null;
  estimatedLocalArrivalDateTime?: string | null;
  estimatedLocalDepartureDateTime?: string | null;
  scheduledLocalArrivalDateTime?: string | null;
  scheduledLocalDepartureDateTime?: string | null;
  estimatedLocalArrivalDateTimeTimestamp?: number | null;
  estimatedLocalDepartureDateTimeTimestamp?: number | null;
  scheduledLocalArrivalDateTimeTimestamp?: number | null;
  scheduledLocalDepartureDateTimeTimestamp?: number | null;
  operatingFlight?: OperatingFlightCIO | null;
  transferTime?: string | null;
  departureStation?: NameCIO | null;
}
/** Simple generic object with number and carrier fields */
export interface OperatingFlightCIO {
  number?: string | null;
  carrier?: CodeNameCIO | null;
}
/** Simple generic object with code and name fields */
export interface CodeNameCIO {
  code?: string | null;
  name?: string | null;
}
/** Simple generic object with the name field */
export interface NameCIO {
  name?: string | null;
}
/** Description of the station */
export interface StationCIO {
  airport?: AirportCIO | null;
}
/** Description of the Airport */
export interface AirportCIO {
  IATACode?: string | null;
  code?: string | null;
  name?: string | null;
  city?: CityCIO | null;
}
/** Description of the city */
export interface CityCIO {
  IATACode?: string | null;
  code?: string | null;
  name?: string | null;
  country?: CodeNameCIO | null;
}
/** Simple generic object with the type field */
export interface TypeCIO {
  type?: string | null;
}
/** Description of the alternative connections */
export interface AlternativeConnectionsCIO {
  id?: string | null;
  ordinal?: number | null;
  duration?: string | null;
  segments?: (SegmentsCIO | null)[] | null;
  availabilityType?: CodeNameCIO | null;
}
/** Description of errors */
export interface ErrorsCIO {
  description?: string | null;
  severityLevel?: string | null;
  name?: string | null;
  errorInOutputPath?: string | null;
}
/** Description of the multiple connections */
export interface CheckInGroupSpecificationsCIO {
  hasAlternativeFlights?: boolean | null;
  hasGoShow?: boolean | null;
  hasMultipleConnections?: boolean | null;
  hasSSCOP?: boolean | null;
  isEligibleForCheckinGroup?: boolean | null;
  isRestricted?: boolean | null;
  isUMNR?: boolean | null;
  restrictedConnectionId?: string | null;
  errorDescription?: string | null;
}
/** Description of the contact details */
export interface ContactDetailsCIO {
  emailAddress?: EmailAddressCIO | null;
  phoneNumber?: PhoneNumberCIO | null;
}
/** Description of the contact details */
export interface EmailAddressCIO {
  newEmailAddress?: string | null;
  oldEmailAddress?: string | null;
  _links?: LinksCIO | null;
}
/** Description of phone numberCIO */
export interface PhoneNumberCIO {
  newPhoneNumber?: string | null;
  oldPhoneNumber?: string | null;
  type?: CodeNameCIO | null;
  _links?: LinksCIO | null;
}

export interface DocumentsCIO {
  type?: string | null;
  available?: (BoardingDocFormatCIO | null)[] | null;
  notification?: string | null;
  errors?: (ErrorsCIO | null)[] | null;
}
/** Simple generic object with type and deliveryAddresses fields */
export interface BoardingDocFormatCIO {
  type?: string | null;
  deliveryAddresses?: (TypeCIO | null)[] | null;
}
/** Description of the check-in group */
export interface SelectedForCheckinGroupCIO {
  checkinDocuments?: (CheckinDocumentCIO | null)[] | null;
  contactDetails?: (ContactDetailsCIO | null)[] | null;
  contactDetailsLinks?: LinksCIO | null;
  contactDetailsRequired?: boolean | null;
  dateOfBirth?: string | null;
  dateOfBirthOrAgeConfirmationRequired?: boolean | null;
  dateOfBirthTimestamp?: number | null;
  deselectForCheckinProhibited?: boolean | null;
  firstName?: string | null;
  gender?: CodeNameCIO | null;
  id?: string | null;
  infant?: InfantCIO | null;
  lastName?: string | null;
  memberships?: (MembershipsCIO | null)[] | null;
  passengerFlightDetails?: (PassengerFlightDetailsCIO | null)[] | null;
  reservation?: ReservationBookingCIO | null;
  title?: CodeNameCIO | null;
  type?: CodeNameCIO | null;
  umnr?: (UMNR | null)[] | null /** This part is coming from reservation module */;
  advancePassengerInformation?: AdvancePassengerInfoCIO | null /** Advance Passenger Information type */;
}
/** Description of the check-in group */
export interface CheckinDocumentCIO {
  boardingDoc?: BoardingDocCIO | null;
}
/** Object representing a boarding document (boarding pass or check-in confirmation) */
export interface BoardingDocCIO {
  type?: string | null;
  available?: (BoardingDocFormatCIO | null)[] | null;
  notification?: string | null;
}
/** Description of the infant group */
export interface InfantCIO {
  advancePassengerInformation?: AdvancePassengerInfoCIO | null;
  id?: string | null;
  dateOfBirthOrAgeConfirmationRequired?: boolean | null;
  dateOfBirth?: string | null;
  firstName?: string | null;
  gender?: CodeNameCIO | null;
  lastName?: string | null;
  title?: CodeNameCIO | null;
  type?: CodeNameCIO | null;
  passengerFlightDetails?: (PassengerFlightDetailsCIO | null)[] | null;
  reservation?: ReservationBookingCIO | null;
  deselectForCheckinProhibited?: boolean | null;
  checkinDocuments?: (CheckinDocumentCIO | null)[] | null;
}
/** Advance Passenger Info Output type */
export interface AdvancePassengerInfoCIO {
  nationality?: CodeNameCIO | null;
  advancePassengerInformationRequirements?: AdvancePassengerInformationRequirementsCIO | null;
  addresses?: (AdvancePassengerInfoAddressCIO | null)[] | null;
  apiDocuments?: (APISDocumentCIO | null)[] | null;
}
/** Advance Passenger Information Requirements Type */
export interface AdvancePassengerInformationRequirementsCIO {
  nationalityRequired?: boolean | null;
}
/** Advance Passenger Info Address Output type */
export interface AdvancePassengerInfoAddressCIO {
  type?: CodeNameCIO | null;
  city?: ValueRequiredCIO | null;
  postalCode?: ValueRequiredCIO | null;
  streetAndHouseNumber?: ValueRequiredCIO | null;
  stateOrProvince?: ValueRequiredCIO | null;
  country?: ValueRequiredCIO | null;
  applicableForCountry?: CodeNameRequiredCIO | null;
}
/** Simple generic object with a value field */
export interface ValueRequiredCIO {
  value?: string | null;
  required?: boolean | null;
}
/** Simple generic object with code and name fields */
export interface CodeNameRequiredCIO {
  code?: string | null;
  name?: string | null;
  required?: boolean | null;
}
/** APIS Document Type Output type */
export interface APISDocumentCIO {
  travelDocument?: TravelDocumentCIO | null;
}
/** Travel Document Output type */
export interface TravelDocumentCIO {
  type?: CodeNameCIO | null;
  expiryDate?: string | null;
  expiryDateTimestamp?: number | null;
  givenNames?: string | null;
  surname?: string | null;
  number?: string | null;
  countryOfIssue?: CodeNameCIO | null;
  sourceOfDataType?: string | null;
  apiDocumentRequirements?: APISDocumentRequirementsCIO | null;
  additionalApiDocuments?: (AdditionalAPIDocumentCIO | null)[] | null;
}
/** APIS Document Requirements Output type */
export interface APISDocumentRequirementsCIO {
  countryOfIssueRequired?: boolean | null;
  expiryDateRequired?: boolean | null;
  givenNamesRequired?: boolean | null;
  numberRequired?: boolean | null;
  surnameRequired?: boolean | null;
  mandatory?: boolean | null;
}
/** Additional Document Output type */
export interface AdditionalAPIDocumentCIO {
  supplementaryDocument?: SupplementaryDocumentCIO | null;
  travelDocument?: SupplementaryDocumentCIO | null;
}
/** Supplementary Document Output type */
export interface SupplementaryDocumentCIO {
  type?: CodeNameCIO | null;
  expiryDate?: string | null;
  expiryDateTimestamp?: number | null;
  givenNames?: string | null;
  surname?: string | null;
  number?: string | null;
  countryOfIssue?: CodeNameCIO | null;
  sourceOfDataType?: string | null;
  apiDocumentRequirements?: APISDocumentRequirementsCIO | null;
}
/** Description of the check-in group */
export interface PassengerFlightDetailsCIO {
  bookedCabinClass?: CodeNameCIO | null;
  checkinStatus?: string | null;
  classChange?: string | null;
  newFlightAfterDisruption?: boolean | null;
  operatingFlightSegmentId?: string | null;
  seatAssignments?: (SeatAssignmentCIO | null)[] | null;
  ticketCoupon?: TicketCouponCIO | null;
}
/** Seat Assignment Description */
export interface SeatAssignmentCIO {
  type?: string | null;
  seat?: SeatCIO | null;
}
/** Seat Description */
export interface SeatCIO {
  number?: string | null;
  cabinClass?: CodeNameCIO | null;
  row?: NumberCIO | null;
  column?: CodeCIO | null;
}
/** Simple generic object with the number field */
export interface NumberCIO {
  number?: number | null;
}
/** Simple generic object with the code field */
export interface CodeCIO {
  code?: string | null;
}
/** Description of the check-in group */
export interface TicketCouponCIO {
  number?: number | null;
  ticketBooklet?: TicketBookletCIO | null;
}
/** Ticket Booklet Description */
export interface TicketBookletCIO {
  number?: string | null;
  ticket?: TicketBookletDeliveryTypeCIO | null;
}
/** Simple generic object with the deliveryType field */
export interface TicketBookletDeliveryTypeCIO {
  deliveryType?: string | null;
}
/** Simple generic object with groupReservation and bookingCode fields */
export interface ReservationBookingCIO {
  groupReservation?: boolean | null;
  bookingCode?: string | null;
}
/** Description of the memberships */
export interface MembershipsCIO {
  frequentFlyerMembership?: FrequentFlyerMembershipCIO | null;
  flyingBlueMembership?: FlyingBlueMembershipCIO | null;
}
/** Description of the Frequent Flyer Membership */
export interface FrequentFlyerMembershipCIO {
  number?: string | null;
  loyaltyProgram?: NameLoyaltyCIO | null;
  loyaltyProgramLevel?: TierLevelCIO | null;
}
/** Description of the loyalty program */
export interface NameLoyaltyCIO {
  name?: string | null;
  loyaltyProgramOwner?: CodeCIO | null;
}
/** Description of the Loyalty Program Level */
export interface TierLevelCIO {
  tierLevel?: string | null;
}
/** Description of the Flying Blue Membership */
export interface FlyingBlueMembershipCIO {
  number?: string | null;
  loyaltyProgram?: NameLoyaltyCIO | null;
  loyaltyProgramLevel?: TierLevelCIO | null;
  typeDescription?: string | null;
}
/** Description of unaccompanied minor (UMNR). */
export interface UMNR {
  unaccompaniedMinorContact?: (UnaccompaniedMinorContact | null)[] | null;
  unaccompaniedMinorContactAddress?: (UnaccompaniedMinorContactAddress | null)[] | null;
  _links?: LinksReservation | null;
}
/** Description of unaccompanied minor contact. */
export interface UnaccompaniedMinorContact {
  contactType?: CodeNameReservation | null;
  firstName?: string | null;
  lastName?: string | null;
  gender?: CodeNameReservation | null;
  phoneNumber?: string | null;
  _links?: LinksReservation | null;
}
/** Simple generic object with code and name fields */
export interface CodeNameReservation {
  code?: string | null;
  name?: string | null;
}
/** Various HATEOAS links available from reservation apis */
export interface LinksReservation {
  addContactDetails?: HrefReservation | null;
  addUnaccompaniedMinorContact?: HrefReservation | null;
  addUnaccompaniedMinorContactAddress?: HrefReservation | null;
  handlingAdviseForUnaccompaniedMinor?: HrefReservation | null;
  delete?: HrefReservation | null;
  update?: HrefReservation | null;
}
/** Various links available for HATEAOS */
export interface HrefReservation {
  href?: string | null;
}
/** Description of unaccompanied minor contact address. */
export interface UnaccompaniedMinorContactAddress {
  city?: string | null;
  contactType?: CodeNameReservation | null;
  country?: CodeNameReservation | null;
  postalCode?: string | null;
  streetAndHouseNumber?: string | null;
  _links?: LinksReservation | null;
}
/** Terms And Conditions Description */
export interface TermsAndConditionsCIO {
  code?: string | null;
  confirmed?: boolean | null;
  text?: string | null;
  type?: string | null;
}

export interface CIOThirdPartyAirlineProblem {
  problem: CIOProblemType;
  thirdPartyName?: string | null;
  thirdPartyRedirectLink: string;
}

export interface CIOCheckInGroupIdProblem {
  problem: CIOProblemType;
  checkInGroupId: string;
}

export interface CIOLargeGroupProblem {
  problem: CIOProblemType;
  notifications?: (NotificationsCIO | null)[] | null;
}

export interface CIOInvalidParamsProblem {
  problem: CIOProblemType;
  notifications?: (NotificationsCIO | null)[] | null;
}
/** Send boarding documents */
export interface BoardingDocumentsSentCIO {
  success?: boolean | null /** Success */;
}
/** Reference data container for Check-in Groups */
export interface ReferenceDataWrapperCIO {
  referenceData?: ReferenceDataDetailsCIO | null;
}
/** Reference data for Check-in Groups */
export interface ReferenceDataDetailsCIO {
  countries?: (CountryCIO | null)[] | null;
  countriesOfIssue?: (CodeNameCIO | null)[] | null;
  genders?: (CodeNameCIO | null)[] | null;
  nationalities?: (CodeNameCIO | null)[] | null;
  passengerTypes?: (CodeNameCIO | null)[] | null;
  supplementaryDocumentTypes?: (CodeNameCIO | null)[] | null;
  titles?: (CodeNameCIO | null)[] | null;
  travelDocumentTypes?: (CodeNameCIO | null)[] | null;
  loyaltyPrograms?: (NameLoyaltyCIO | null)[] | null;
}
/** Country Output type */
export interface CountryCIO {
  code?: string | null;
  name?: string | null;
  statesOrProvinces?: (CodeNameCIO | null)[] | null;
}

export interface CIOTransferPassengerStatus {
  waitingTimeMs?: number | null;
  statusCheckUrl?: string | null;
  notifications?: (NotificationsCIO | null)[] | null;
}

export interface ReservationFlightList {
  segments?: (Segment | null)[] | null;
}

export interface APIWarnings {
  warnings?: (APIWarning | null)[] | null;
}

export interface APIWarning {
  code?: string | null;
  description?: string | null;
  name?: string | null;
}

export interface DuplicateClaimList {
  duplicateClaimList?: (Claim | null)[] | null;
}

export interface Claim {
  claimNumber?: string | null;
}

export interface CorporateContract {
  companyName?: string | null;
  contractId?: string | null;
  type?: string | null;
  restrictions?: (ContractRestriction | null)[] | null;
}

export interface ContractRestriction {
  maxNumberOfPaxPerBooking?: number | null;
}

export interface CorporateEnvironmentWrapper {
  corporateEnvironments?: (CorporateEnvironment | null)[] | null;
  corporateEnvironmentsAccess?: CorporateEnvironmentAccess | null;
}

export interface CorporateEnvironment {
  id?: string | null;
  label?: string | null;
  statusCode?: string | null;
  corporateName?: string | null;
  publishedCorporateContractId?: string | null;
  corporateGin?: string | null;
  uccrId?: string | null;
  permissions?: (CorporateEnvironmentPermission | null)[] | null;
}

export interface CorporateEnvironmentPermission {
  permissionCode?: string | null;
  granted?: boolean | null;
}

export interface CorporateEnvironmentAccess {
  isAccessGranted?: boolean | null;
  linkToAirfranceBooking?: string | null;
  linkToKlmBooking?: string | null;
}

export interface Civility {
  content?: CivilityContent | null;
}

export interface CivilityContent {
  MR?: string | null;
  MRS?: string | null;
  MS?: string | null;
}

export interface Profile {
  id?: string | null;
  label?: string | null;
  roleCode?: string | null;
  description?: string | null;
  current?: boolean | null;
  selectable?: boolean | null;
}

export interface Uccrs {
  users?: UccrsPaginationData | null;
  permissions?: (UccrPermission | null)[] | null;
}

export interface UccrsPaginationData {
  content?: (UccrsContent | null)[] | null;
  last?: boolean | null;
  totalPages?: number | null;
  totalElements?: number | null;
  numberOfElements?: number | null;
  first?: boolean | null;
  size?: number | null;
}

export interface UccrsContent {
  uccrId?: string | null;
  title?: string | null;
  lastName?: string | null;
  firstName?: string | null;
  email?: string | null;
  status?: string | null;
  highestRole?: HighestRole | null;
  profiles?: (Profile | null)[] | null;
  userProfileOnOrganizations?: (UserProfileOnOrganization | null)[] | null;
  invitation?: Invitation | null;
  userDeletion?: UserDeletion | null;
}

export interface HighestRole {
  code?: string | null;
  profileDescription?: string | null;
  profileLabel?: string | null;
}

export interface UserProfileOnOrganization {
  id?: string | null;
  organization?: Organization | null;
}

export interface Organization {
  id?: string | null;
  label?: string | null;
  description?: string | null;
}

export interface Invitation {
  status?: string | null;
  senderId?: string | null;
  token?: string | null;
  numberOfSends?: number | null;
  firstName?: string | null;
  lastName?: string | null;
}

export interface UserDeletion {
  canBeDeleted?: boolean | null;
  labelKey?: string | null;
}

export interface UccrPermission {
  permissionCode?: string | null;
  granted?: boolean | null;
}

export interface Uccr {
  content?: UccrContent | null;
  permissions?: (UccrPermission | null)[] | null;
}

export interface UccrContent {
  uccrId?: string | null;
  title?: string | null;
  lastName?: string | null;
  firstName?: string | null;
  email?: string | null;
  status?: string | null;
  highestRole?: HighestRole | null;
  profiles?: (Profile | null)[] | null;
  userProfileOnOrganizations?: (UserProfileOnOrganization | null)[] | null;
  invitation?: Invitation | null;
}
/** Description of the dangerous goods */
export interface DangerousGoodsCIO {
  title?: string | null;
  description?: string | null;
  linkText?: string | null;
  linkUrl?: string | null;
  items?: (DangerousGoodCIO | null)[] | null;
}
/** Description of a dangerous good */
export interface DangerousGoodCIO {
  imageAlt?: string | null;
  imageUrl?: string | null;
  shortDescription?: string | null;
  text?: string | null;
  allowedCheckinLuggage?: boolean | null;
  allowedHandLuggage?: boolean | null;
}
/** Customer type */
export interface Customer {
  id: number;
  accountEmailAddress?: string | null;
  businessAddressDeleteLink?: string | null;
  canAddHomeAddress?: boolean | null;
  restrictions?: RestrictionCUO | null;
  canUpdateBusinessAddress?: boolean | null;
  canUpdateEmailAddress?: boolean | null;
  canUpdateHomeAddress?: boolean | null;
  canAddBusinessAddress?: boolean | null;
  canUpdateAllIndividualFields?: boolean | null;
  communicationMedium?: CommunicationMedium | null;
  corporateDataList?: (CorporateData | null)[] | null;
  dateOfBirth?: string | null;
  flyingBlueStatus?: FlyingBlueStatus | null;
  familyName?: string | null;
  givenNames?: string | null;
  homeAddressDeleteLink?: string | null;
  membership?: Membership | null;
  preference?: CustomerPreference | null;
  salutation?: Salutation | null;
  timestamp?: number | null;
}
/** Restriction */
export interface RestrictionCUO {
  canUpdateSalutation?: boolean | null;
  canUpdateGivenNames?: boolean | null;
  canUpdateFamilyName?: boolean | null;
  canUpdateDateOfBirth?: boolean | null;
  canViewPaymentPreferences?: boolean | null;
}
/** Communication Medium type */
export interface CommunicationMedium {
  emailAccount?: EmailAccount | null;
  phones?: (Phone | null)[] | null;
  postalAddresses?: (PostalAddress | null)[] | null;
  _links?: CommunicationMediumLinks | null;
}
/** Email type */
export interface EmailAccount {
  address?: string | null;
  status?: EmailAccountStatus | null;
}
/** Email status type */
export interface EmailAccountStatus {
  code?: string | null;
}
/** Phone type */
export interface Phone {
  number?: string | null;
  type?: PhoneType | null;
  country?: PhoneCountry | null;
}
/** PhoneType type */
export interface PhoneType {
  code: string;
}
/** PhoneCountry type */
export interface PhoneCountry {
  phonePrefix?: string | null;
  code?: string | null;
}
/** PostalAddress type */
export interface PostalAddress {
  usageType?: PostalAddressType | null;
  company?: Company | null;
  streetHousenumber?: string | null;
  additionalInformation?: string | null;
  postalCode?: string | null;
  city?: string | null;
  country?: Country | null;
  _links?: PostalAddressLinks | null;
}
/** PostalAddressType type */
export interface PostalAddressType {
  code?: string | null;
}
/** Company type */
export interface Company {
  name?: string | null;
}
/** Country type */
export interface Country {
  title?: string | null;
  name: string;
  code?: string | null;
  phonePrefix?: string | null;
  stateOrProvince?: State | null;
}
/** State type */
export interface State {
  name: string;
  code?: string | null;
}
/** Postal Address Links type */
export interface PostalAddressLinks {
  delete?: Link | null;
  update?: Link | null;
}
/** Link type */
export interface Link {
  href?: string | null;
}
/** Communication Medium Links type */
export interface CommunicationMediumLinks {
  addAddress?: Link | null;
  addPhone?: Link | null;
}
/** CorporateData type */
export interface CorporateData {
  companyName?: string | null;
  highestRole?: CompanyHighestRole | null;
}
/** CompanyHighestRole type */
export interface CompanyHighestRole {
  name?: string | null;
  description?: string | null;
}
/** FlyingBlue Status */
export interface FlyingBlueStatus {
  name?: string | null;
  rank?: number | null;
  label?: string | null;
  currentTierLevel?: FlyingBlueTierLevel | null;
  nextTierLevel?: FlyingBlueTierLevel | null;
  benefits?: FlyingBlueLink | null;
}
/** FlyingBlue Status next tier-level */
export interface FlyingBlueTierLevel {
  tierLevel: string;
  tierLevelCode: string;
  label?: string | null;
  xpAmount?: number | null;
  currentTierAttributes?: (FlyingBlueTierDetails | null)[] | null;
  currentTierLevelXP?: FlyingBlueTierDetails | null;
  currentTierEndValidity?: FlyingBlueTierDetails | null;
  keepCurrentTierLevel?: FlyingBlueTierDetails | null;
  ultimateCounter?: FlyingBlueTierDetails | null;
  ultimateEndValidity?: FlyingBlueTierDetails | null;
  keepUltimate?: FlyingBlueTierDetails | null;
}
/** FlyingBlue Status tier level details */
export interface FlyingBlueTierDetails {
  label?: string | null;
  amount?: number | null;
  xpAmount?: number | null;
  date?: string | null;
  yearsCounter?: number | null;
  xpCounterUltimate?: number | null;
  threshold?: number | null;
  attributeCode?: string | null;
  attributeLabel?: string | null;
}
/** FlyingBlue Link */
export interface FlyingBlueLink {
  rel?: string | null;
  href?: string | null;
}
/** Membership type */
export interface Membership {
  contracts?: (Contracts | null)[] | null;
  bluebizMembership?: BluebizMembership | null;
  saphirMembership?: SaphirMembership | null;
  flyingBlueProfile?: FlyingBlueProfile | null;
}
/** Contracts type */
export interface Contracts {
  contractNumber?: string | null;
  contractName?: string | null;
  contractType?: string | null;
  contractSubType?: string | null;
  contractStartDate?: string | null;
  contractEndDate?: string | null;
  contractAlertType?: string | null;
  contractAlertDescription?: string | null;
}
/** BlueBiz Membership type */
export interface BluebizMembership {
  number: string;
}
/** Saphir Membership type */
export interface SaphirMembership {
  number: string;
}

export interface FlyingBlueProfile {
  level?: string | null;
  milesAmount?: number | null;
}
/** Customer Preference type */
export interface CustomerPreference {
  communicationPreference?: CommunicationPreference | null;
}
/** Communication Preference type */
export interface CommunicationPreference {
  postalAddressPreference?: PostalAddress | null;
}

export interface Salutation {
  code?: string | null;
  name?: string | null;
}
/** Account type */
export interface Account {
  familyName?: string | null;
  givenNames?: string | null;
  isFlyingBlue?: boolean | null;
  flyingBlueNumber?: string | null;
}

export interface Destination {
  iata?: string | null;
  label?: string | null;
  pictureUrl?: string | null;
  description?: string | null;
}

export interface FlightStatus {
  status?: string | null;
  statusTranslation?: string | null;
}
/** Inspire destinaitons API v4 */
export interface InspireDestinationsV4 {
  origin?: CodeLabel | null;
  destinations?: (DestinationDetails | null)[] | null;
}
/** CodeLabel info */
export interface CodeLabel {
  code?: string | null;
  label?: string | null;
}
/** Destination details */
export interface DestinationDetails {
  code?: string | null;
  label?: string | null;
  title?: string | null;
  picture?: DestinationPictureDetails | null;
  price?: DestinationPrice | null;
}
/** Destination Picture Details */
export interface DestinationPictureDetails {
  imageUrl?: string | null;
  imageCaption?: string | null;
  imageAccessibility?: string | null;
}
/** Destination price */
export interface DestinationPrice {
  amount?: number | null;
  currency?: string | null;
}
/** Inspire destinations */
export interface InspireDestinationsCOO {
  destinations?: (InspireDestinationCOO | null)[] | null;
}
/** Inspire destination info */
export interface InspireDestinationCOO {
  pictureUrl?: string | null;
}
/** Tax Breakdown */
export interface TaxBreakdown {
  pricePerPassengerTypes?: (pricePerPassengerType | null)[] | null;
  currency?: string | null;
}

export interface pricePerPassengerType {
  fare?: number | null;
  passengerType?: string | null;
  taxes?: (taxBreakdownTax | null)[] | null;
}

export interface taxBreakdownTax {
  code?: string | null;
  amount?: number | null;
  name?: string | null;
}

export interface TripSummaryItinerary {
  connections?: (FlightOfferRowType | null)[] | null;
  flightProducts?: (BrandedFare | null)[] | null;
  taxBreakdown?: TaxBreakdown | null;
}

export interface LowestOffersResponse {
  lowestOffers?: (LowestOffersFlightProduct | null)[] | null;
  disclaimer?: LowestOffersDisclaimer | null;
}

export interface LowestOffersFlightProduct {
  flightDate?: string | null;
  price?: number | null;
  currency?: string | null;
  noFlight?: boolean | null;
  availableOffersHateoasPath?: string | null;
  totalPrice?: number | null;
  splitPrice?: number | null;
}

export interface LowestOffersDisclaimer {
  displayPriceText?: string | null;
  totalPriceText?: string | null;
}

export interface DecryptedReservationOAO {
  pnr?: string | null;
  lastname?: string | null;
  conversationStateId?: string | null;
  orderId?: string | null;
  market?: string | null;
}

export interface Station {
  code?: string | null;
  name?: string | null;
  isOrigin?: boolean | null;
  isDestination?: boolean | null;
  country?: CodeName | null;
  airports?: (CodeName | null)[] | null;
}

export interface ReferenceData {
  passengerTypes?: (PassengerType | null)[] | null;
}

export interface PassengerType {
  code?: string | null;
  label?: string | null;
}

export interface RichContentFlights {
  code?: string | null;
  content?: (RichContent | null)[] | null;
}

export interface RichContent {
  cabinClass?: string | null;
  title?: string | null;
  description?: string | null;
  imageUrl?: string | null;
  videoUrl?: string | null;
}
/** ... */
export interface SeatmapDetailsSMO {
  carrierCode?: string | null;
  name?: string | null;
  type?: string | null;
  templateName?: string | null;
  decks?: (DeckDetailsSMO | null)[] | null;
}
/** ... */
export interface DeckDetailsSMO {
  name?: string | null;
  dimensions?: DimensionsDetailsSMO | null;
  cabins?: (CabinDetailsSMO | null)[] | null;
}
/** ... */
export interface DimensionsDetailsSMO {
  width?: number | null /** ... */;
  length?: number | null /** ... */;
}
/** ... */
export interface CabinDetailsSMO {
  cabinClass?: string | null;
  cabinName?: string | null;
  rows?: (RowDetailsSMO | null)[] | null;
}
/** ... */
export interface RowDetailsSMO {
  rowNumber?: number | null;
  positionInCabins?: (PositionInCabinsDetailsSMO | null)[] | null;
}
/** ... */
export interface PositionInCabinsDetailsSMO {
  positionInCabinType?: string | null;
  status?: string | null;
  displayCode?: string | null;
  displaySeatCode?: string | null;
  column?: ColumnDetailsSMO | null;
  characteristics?: (CharacteristicsDetailsSMO | null)[] | null;
  elementLocation?: ElementLocationDetailsSMO | null;
  imageName?: string | null;
  seatProduct?: ProductTypeSMO | null;
  occupiedByPassengerId?: string | null;
  seatDimension: SeatDimensionDetailsSMO;
  exitRowConditionsApply?: boolean | null;
  termsAndConditions?: string | null;
}
/** ... */
export interface ColumnDetailsSMO {
  columnCode?: string | null;
}
/** ... */
export interface CharacteristicsDetailsSMO {
  code?: string | null;
  characteristic?: string | null;
}
/** ... */
export interface ElementLocationDetailsSMO {
  x?: number | null;
  y?: number | null;
}
/** ... */
export interface ProductTypeSMO {
  productClass?: string | null;
  code?: string | null;
  name?: string | null;
  productType?: string | null;
  productId?: string | null;
  prices?: (PricesSMO | null)[] | null;
  segment?: SegmentTypeDetailsSMO | null;
  passenger?: PassengerTypeDetailsSHO | null;
  numberOfAvailableProducts?: number | null;
  rowNumber?: number | null;
  columnCode?: string | null;
  legendOrder?: number | null;
  link?: string | null;
}
/** ... */
export interface PricesSMO {
  amount?: number | null;
  currencyCode?: string | null;
  description?: string | null;
  discountPercentage?: number | null;
  milesAmount?: number | null;
  milesPercentage?: number | null;
  milesToBeEarned?: number | null;
  standardAmount?: number | null;
  type?: string | null;
}
/** ... */
export interface SegmentTypeDetailsSMO {
  segmentId?: number | null;
}
/** ... */
export interface PassengerTypeDetailsSHO {
  id?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  gender?: CodeNameSMO | null;
  title?: CodeNameSMO | null;
  seat?: SeatTypeSMO | null;
  ticketBooklet?: TicketBookletSHO | null;
  memberships?: (MembershipsSHO | null)[] | null;
  paxTypeCode?: string | null;
}
/** Simple generic object with code and name fields */
export interface CodeNameSMO {
  code?: string | null;
  name?: string | null;
}
/** Seat Description */
export interface SeatTypeSMO {
  number?: string | null;
  cabinClass?: CodeNameSMO | null;
  row?: NumberSeatSMO | null;
  column?: CodeSMO | null;
}
/** Simple generic object with the number field */
export interface NumberSeatSMO {
  number?: number | null;
}
/** Simple generic object with the code field */
export interface CodeSMO {
  code?: string | null;
}
/** Ticket Booklet Description */
export interface TicketBookletSHO {
  number?: string | null;
  ticket?: TicketBookletDeliverySHO | null;
}
/** Simple generic object with the deliveryType field */
export interface TicketBookletDeliverySHO {
  deliveryType?: string | null;
}
/** ... */
export interface MembershipsSHO {
  membershipType?: string | null;
  membershipNumber?: string | null;
  membershipLevel?: string | null;
}

export interface SeatDimensionDetailsSMO {
  length: number;
  width: number;
}
/** ... */
export interface BaggageTypeSCO {
  bagCount?: number | null;
  code?: string | null;
  connection?: ConnectionSCO | null;
  passenger?: PassengerSCO | null;
  prices?: (BaggageTypePriceSCO | null)[] | null;
  productClass?: string | null;
  productId?: string | null;
  productType?: string | null;
  type?: string | null;
  unit?: string | null;
}
/** ... */
export interface ConnectionSCO {
  connectionId?: number | null;
}

export interface PassengerSCO {
  passengerId?: string | null;
}
/** ... */
export interface BaggageTypePriceSCO {
  amount?: number | null;
  basePriceAmount?: number | null;
  currencyCode?: string | null;
  description?: string | null;
}
/** ... */
export interface SeatTypeSCO {
  code?: string | null;
  columnCode?: string | null;
  name?: string | null;
  passenger?: PassengerSCO | null;
  prices?: (PriceSCO | null)[] | null;
  productClass?: string | null;
  productId?: string | null;
  productType?: string | null;
  rowNumber?: number | null;
  segment?: SegmentSCO | null;
}
/** ... */
export interface PriceSCO {
  amount?: number | null;
  currencyCode?: string | null;
  description?: string | null;
}
/** ... */
export interface SegmentSCO {
  segmentId?: number | null;
}

export interface HandoverCheckout {
  bookingCode?: string | null;
  emailAddress?: string | null;
  lastName?: string | null;
  destination?: CodeName | null;
  shopId?: string | null;
  connections?: (FlightProductConnection | null)[] | null;
  productList?: ProductList | null;
  totalPrice?: TotalPrice | null;
  totalBookingFee?: TotalBookingFee | null;
  payments?: (PaymentHUB | null)[] | null;
}

export interface FlightProductConnection {
  segments?: (FlightProductSegment | null)[] | null;
}

export interface FlightProductSegment {
  fareBase?: string | null;
  cabinClass?: string | null;
  flightNumber?: string | null;
}

export interface ProductList {
  flightProduct?: FlightProduct | null;
  baggageProducts?: (AncillaryProduct | null)[] | null;
  seatProducts?: (AncillaryProduct | null)[] | null;
  mealProducts?: (AncillaryProduct | null)[] | null;
  insuranceProduct?: AncillaryProduct | null;
}

export interface FlightProduct {
  price: ProductPrice;
  status?: string | null;
  pricesPerPassenger?: (PricePerPassenger | null)[] | null;
}

export interface ProductPrice {
  amount?: number | null;
}

export interface PricePerPassenger {
  passengerType?: string | null;
  amount?: number | null;
  taxTotal?: number | null;
  taxes?: (Tax | null)[] | null;
}

export interface Tax {
  code?: string | null;
  amount?: number | null;
}

export interface AncillaryProduct {
  price: ProductPrice;
}

export interface TotalPrice {
  amount: number;
}

export interface TotalBookingFee {
  amount: number;
}

export interface PaymentHUB {
  paymentMethod?: PaymentMethodHUB | null;
  amountToPay?: AmountToPay | null;
  status?: string | null;
}

export interface PaymentMethodHUB {
  code?: string | null;
  translationCode?: string | null;
  name?: string | null;
  directPayment?: boolean | null;
  additionalInfo?: string | null;
  timeLimit?: TimeLimit | null;
  inputFields?: (InputField | null)[] | null;
  _links?: AdditionalInfoLink | null;
}

export interface TimeLimit {
  timeLimit?: string | null;
  timeLimitLabel?: string | null;
}

export interface InputField {
  code?: string | null;
  name?: string | null;
  value?: string | null;
}

export interface AdditionalInfoLink {
  additionalInfoUrl?: AdditionalInfoUrl | null;
}

export interface AdditionalInfoUrl {
  href?: string | null;
}

export interface AmountToPay {
  amount?: number | null;
  name?: string | null;
  currencyCode?: string | null;
}
/** CompanionsList */
export interface CompanionsList {
  companions?: (Companion | null)[] | null;
}
/** Companion */
export interface Companion {
  id?: string | null;
  salutation?: CodeNameCUO | null;
  givenNames?: string | null;
  familyName?: string | null;
  dateOfBirth?: string | null;
  loyaltyProgramPreference?: LoyaltyProgramPreference | null;
  emailAddress?: string | null;
}
/** Code && Name fields */
export interface CodeNameCUO {
  code?: string | null;
  name?: string | null;
}
/** Loyalty Program Preference */
export interface LoyaltyProgramPreference {
  code?: string | null;
  name?: string | null;
  membershipNumber?: string | null;
}
/** Travel Document type */
export interface TravelDocument {
  number?: string | null;
  type?: CodeNameCUO | null;
  dateOfBirth?: string | null;
  expiryDate?: string | null;
  givenNames?: string | null;
  surname?: string | null;
  countryOfIssue?: Country | null;
  nationality?: Country | null;
  gender?: CodeNameCUO | null;
  id?: number | null;
}
/** SocialConnections type */
export interface SocialConnections {
  socialConnections?: (SocialConnectionCUO | null)[] | null;
  hasSocialConnection?: boolean | null;
}
/** Social connections */
export interface SocialConnectionCUO {
  type?: string | null;
  screenName?: string | null;
  socialPhotoURL?: string | null;
  disconnectURI?: string | null;
}
/** Payment type */
export interface PaymentTypeCUO {
  code?: string | null;
  name?: string | null;
  paymentMethod?: PaymentMethodCUO | null;
}
/** Payment Method */
export interface PaymentMethodCUO {
  code?: string | null;
  name?: string | null;
}
/** Payment Methods */
export interface PaymentMethodsCUO {
  code?: string | null;
  name?: string | null;
  displayOrder?: string | null;
  dcpActivated?: boolean | null;
  paymentFields?: (PaymentFieldsCUO | null)[] | null;
  _links?: LinksCUO | null;
}
/** Payment Fields */
export interface PaymentFieldsCUO {
  code?: string | null;
  name?: string | null;
  displayOrder?: string | null;
  paymentFieldProperties?: (PaymentFieldPropertyCUO | null)[] | null;
}
/** Payment Field Property */
export interface PaymentFieldPropertyCUO {
  name?: string | null;
  value?: string | null;
}
/** Links */
export interface LinksCUO {
  addPaymentPreference?: AddPaymentPreferenceCUO | null;
}
/** Add Payment Preference */
export interface AddPaymentPreferenceCUO {
  href?: string | null;
}
/** Payment Preference */
export interface PaymentPreferenceCUO {
  paymentId?: string | null;
  preferred?: boolean | null;
  corporate?: boolean | null;
  paymentFields?: (PaymentFieldCUO | null)[] | null;
  paymentType?: PaymentTypeCUO | null;
}
/** Payment Field */
export interface PaymentFieldCUO {
  code?: string | null;
  value?: string | null;
}
/** Loyalty Program type */
export interface LoyaltyProgram {
  code?: string | null;
  name?: string | null;
}
/** Communication Subscriptions and Publication */
export interface CommunicationPublicationsCUO {
  flyingblue?: (CommunicationPublicationCUO | null)[] | null;
  sales?: CommunicationPublicationsSalesCUO | null;
  telemarketing?: (CommunicationPublicationCUO | null)[] | null;
  consents?: (Consents | null)[] | null;
}
/** Communication Publication */
export interface CommunicationPublicationCUO {
  name?: string | null;
  nameMarketLang?: string | null;
  meta?: PublicationMetaCUO | null;
  mandatoryOptin?: boolean | null;
  optin?: boolean | null;
}
/** Communication Subscriptions and Publication metadata */
export interface PublicationMetaCUO {
  code?: string | null;
  language?: string | null;
  mailingType?: string | null;
  market?: string | null;
  optInChangeOption?: string | null;
}
/** Communication Subscriptions and Publication */
export interface CommunicationPublicationsSalesCUO {
  klmNewsletters?: (CommunicationPublicationCUO | null)[] | null;
  newsletters?: (CommunicationPublicationCUO | null)[] | null;
  magazines?: (CommunicationPublicationCUO | null)[] | null;
  exotic?: (CommunicationPublicationCUO | null)[] | null;
}
/** Communication Preferences Consents */
export interface Consents {
  optin?: boolean | null;
  name?: string | null;
  meta?: ConsentMeta | null;
}
/** Communication Preferences Consents meta */
export interface ConsentMeta {
  code?: string | null;
  optInChangeOption?: string | null;
  description?: string | null;
}
/** FlyingBlue Benefits */
export interface FlyingBlueBenefits {
  fbLevel?: string | null;
  ultimate?: FlyingBlueUltimateStatus | null;
  status?: FlyingBlueStatus | null;
  platinumForLife?: FlyingBluePFLStatus | null;
  currentBenefits?: (FlyingBlueBenefit | null)[] | null;
  nextBenefits?: (FlyingBlueBenefit | null)[] | null;
}
/** FlyingBlue UltimateStatus */
export interface FlyingBlueUltimateStatus {
  rank?: number | null;
  label?: string | null;
  ultimateCounter?: FlyingBlueTierDetails | null;
  ultimateEndValidity?: FlyingBlueTierDetails | null;
  keepUltimate?: FlyingBlueTierDetails | null;
}
/** FlyingBlue Platinum for Life Status */
export interface FlyingBluePFLStatus {
  rank?: number | null;
  label?: string | null;
  description?: string | null;
  pflCounter?: FlyingBlueTierDetails | null;
  pflTarget?: FlyingBlueTierDetails | null;
}
/** FlyingBlue Benefit */
export interface FlyingBlueBenefit {
  priority?: number | null;
  label?: string | null;
  labelContent?: string | null;
  benefitsList?: (string | null)[] | null;
}
/** FlyingBlue Dashboard */
export interface FlyingBlueDashboard {
  individual?: FlyingBlueIndividual | null;
  fbLevel?: string | null;
  miles?: FlyingBlueMiles | null;
  xpCounters?: (FlyingBlueTransactionsXPCounter | null)[] | null;
  status?: FlyingBlueStatus | null;
  lastTransaction?: FlyingBlueLastTransaction | null;
  cardImage?: FlyingBlueCardImage | null;
}
/** FlyingBlue Individual */
export interface FlyingBlueIndividual {
  gin?: string | null;
  cin?: string | null;
}
/** FlyingBlue Miles */
export interface FlyingBlueMiles {
  rank?: number | null;
  label?: string | null;
  amount?: number | null;
}
/** FlyingBlue Transactions XP Counter */
export interface FlyingBlueTransactionsXPCounter {
  endOfQualifyingPeriod?: string | null;
  labelXP?: string | null;
  xpAmount?: number | null;
  ultimate?: boolean | null;
}
/** FlyingBlue Last Transaction */
export interface FlyingBlueLastTransaction {
  rank?: number | null;
  label?: string | null;
  date?: string | null;
  iconURL?: string | null;
  description?: string | null;
  milesAmount?: number | null;
  xpAmount?: number | null;
  labelMiles?: string | null;
  labelXP?: string | null;
}
/** FlyingBlue Card */
export interface FlyingBlueCardImage {
  href?: string | null;
  fbCardRecto?: string | null;
  fbCardVerso?: string | null;
}
/** FlyingBlue Transaction History */
export interface FlyingBlueTransactionHistory {
  milesAndXPCounter?: FlyingBlueTransactionsMilesAndXPCounter | null;
  milesValidities?: (FlyingBlueTransactionsMilesValidity | null)[] | null;
  transactions?: NewFlyingBlueTransactions | null;
}
/** FlyingBlue Transactions Miles and XP Counter */
export interface FlyingBlueTransactionsMilesAndXPCounter {
  labelMiles?: string | null;
  milesAmount?: number | null;
  xpCounters?: (FlyingBlueTransactionsXPCounter | null)[] | null;
}
/** FlyingBlue Transactions - Miles Validity */
export interface FlyingBlueTransactionsMilesValidity {
  details?: string | null;
  label?: string | null;
  milesAmount?: number | null;
  validityDate?: string | null;
  type?: string | null;
}
/** FlyingBlue Transactions */
export interface NewFlyingBlueTransactions {
  labelTransactions?: string | null;
  labelDetails?: string | null;
  moreTransactions?: FlyingBlueLink | null;
  transactionsList?: (NewFlyingBlueTransaction | null)[] | null;
}
/** FlyingBlue Transaction */
export interface NewFlyingBlueTransaction {
  activityDate?: string | null;
  ancillaryLabelCategory?: string | null;
  complementaryDescriptionData?: (string | null)[] | null;
  description?: string | null;
  details?: (FlyingBlueTransactionDetail | null)[] | null;
  finalDestination?: string | null;
  iconURL?: string | null;
  labelMiles?: string | null;
  labelXP?: string | null;
  milesAmount?: number | null;
  operationType?: string | null;
  subType?: string | null;
  transactionDate?: string | null;
  type?: string | null;
  xpAmount?: number | null;
  xpActivity?: (xpActivityList | null)[] | null;
}
/** FlyingBlue Transaction Detail */
export interface FlyingBlueTransactionDetail {
  activityDate?: string | null;
  ancillaryLabelCategory?: string | null;
  bookingClass?: string | null;
  complementaryDetailDescriptionData?: (string | null)[] | null;
  description?: string | null;
  destination?: string | null;
  iconURL?: string | null;
  labelMiles?: string | null;
  labelXP?: string | null;
  milesAmount?: number | null;
  origin?: string | null;
  subType?: string | null;
  transactionDate?: string | null;
  ultimateEligibility?: boolean | null;
  xpAmount?: number | null;
  xpActivityDetails?: (xpActivityDetailsList | null)[] | null;
}
/** FlyingBlue xpActivityDetailsList */
export interface xpActivityDetailsList {
  type?: string | null;
  amount?: number | null;
  amountLabel?: string | null;
}
/** FlyingBlue xpActivityList */
export interface xpActivityList {
  type?: string | null;
  amount?: number | null;
  amountLabel?: string | null;
}
/** FlyingBlue Contact Details */
export interface FlyingBlueContactDetails {
  fbLogoURL?: string | null;
}
/** Contact Center list */
export interface ContactCenterPhone {
  isFB: boolean;
  phoneSegment: string;
  phoneNumber: string;
  costTypeLabel: string;
  referenceTimezoneLabel: string;
  spokenLanguages?: (ContactCenterSpokenLanguage | null)[] | null;
}

export interface ContactCenterSpokenLanguage {
  languages?: (string | null)[] | null;
  openingDays?: (ContactCenterOpeningDays | null)[] | null;
}

export interface ContactCenterOpeningDays {
  days?: string | null;
  hours?: (ContactCenterOpeningHours | null)[] | null;
}

export interface ContactCenterOpeningHours {
  startTime?: string | null;
  endTime?: string | null;
}
/** Voucher Mutation Type */
export interface Mutation {
  updateCurrencyMutation?: OrderCOO | null;
  addInsurance?: OrderV2 | null;
  replaceInsurance?: OrderV2 | null;
  deleteInsurance?: OrderV2 | null;
  orderV2?: OrderV2 | null;
  postPassengerMutation?: PostPassengerMutationCOO | null;
  paymentMutation?: PaymentMutationCOO | null;
  resumePaymentMutation?: ResumePaymentMutationCOO | null;
  putBin?: PutBin | null;
  putCurrency?: CurrencyMutation | null;
  deleteCurrency?: CurrencyMutation | null;
  putMiles?: MilesMutation | null;
  deleteMiles?: MilesMutation | null;
  postPay?: PostPay | null;
  resumePaymentV2?: ResumePaymentV2 | null;
  putDiscountCode?: PutDiscountCode | null;
  deleteDiscountCode?: DeleteDiscountCode | null;
  postVouchers?: PostVouchers | null;
  deleteVoucher?: DeleteVoucher | null;
  deleteAllCartProducts?: (CartProductANO | null)[] | null;
  changeBaggage?: (CartProductANO | null)[] | null;
  changeEnvironmental?: (CartProductANO | null)[] | null;
  boaLink?: string | null;
  postReservationInvoice?: SuccessfullyPostedInvoice | null;
  saveUMNR?: UMNRSavedSuccessfully | null;
  checkInSavePassengerInfo?: CIOCheckinSavePassengerResult | null;
  checkInSavePassengerAPIS?: CIOCheckinSavePassengerResult | null;
  checkInSubmit?: CIOCheckinSavePassengerResult | null;
  checkIn?: CheckinInformationCIO | null;
  checkInAddPassenger?: CheckinInformationCIO | null;
  checkInTransferPassenger?: CIOTransferPassengerResult | null;
  addUser?: boolean | null;
  updateUser?: UserUpdateResponse | null;
  deleteUser?: boolean | null;
  deletePhoneNumber?: MutationCUO | null;
  deletePostalAddress?: MutationCUO | null;
  updateAll?: MutationCUO | null;
  postPassengerMutationV2?: PostPassengerMutationOAO | null;
  changeSeat?: ShoppingCartMutationResultSCO | null;
  updateCompanion?: CompanionsList | null;
  createCompanion?: CompanionsList | null;
  deleteCompanion?: CompanionsList | null;
  updateTravelDocument?: TravelDocumentMutationCUO | null;
  deleteTravelDocument?: TravelDocumentMutationCUO | null;
  deleteSocialConnection?: MutationCUO | null;
  changePaymentPreference?: ChangePPErrorCUO | null;
  checkSecurePaymentPreference?: ClientTransactionCUO | null;
  deletePaymentPreference?: PaymentPreferenceMutationCUO | null;
  saveSecurePaymentPreference?: CardPaymentPreferenceCUO | null;
  updateSubscriptions?: CommunicationPublicationsCUO | null;
  flyingBlueEnrolment?: FlyingBlueEnrolmentResult | null;
  flyingBlueUpgrade?: FlyingBlueEnrolmentResult | null;
}
/** Create Order Mutation Type */
export interface PostPassengerMutationCOO {
  patchPassenger?: PatchPassengerCOO | null;
  inputErrors?: (PassengerErrorCOO | null)[] | null /** validation errors array, empty in case of success */;
  _warnings?: (GenericWarningCOO | null)[] | null /** warnings array */;
  order?: OrderCOO | null;
}

export interface PatchPassengerCOO {
  _warnings?: (GenericWarningCOO | null)[] | null /** warnings array */;
}
/** Error received in attempting to post a passenger */
export interface PassengerErrorCOO {
  field?: string | null /** name of the field that is in error */;
  passengerIndex?: number | null /** zero based index pointing to the passenger in error */;
  sectionType?: string | null /** name of the passenger section (property) that is in error */;
}
/** Payment Mutation Type */
export interface PaymentMutationCOO {
  _links?: OrderLinksCOO | null /** Links section */;
  _warnings?: (GenericWarningCOO | null)[] | null /** Order API warnings array */;
  order?: OrderCOO | null;
  inputErrors?: (PaymentErrorCOO | null)[] | null;
}
/** Description of the links type */
export interface OrderLinksCOO {
  order?: OrderHrefCOO | null;
  shop?: OrderHrefCOO | null;
  redirectToBank?: OrderHrefCOO | null;
  getOrder?: OrderHrefCOO | null;
  getPaymentOptions?: OrderHrefCOO | null;
  paymentOptions?: OrderHrefCOO | null;
  resumePayment?: ResumePaymentHrefCOO | null;
}
/** Description of the href type */
export interface OrderHrefCOO {
  href?: string | null;
}
/** Description of the href type */
export interface ResumePaymentHrefCOO {
  href?: string | null;
  templated?: boolean | null;
}
/** Error received in attempting to post a passenger */
export interface PaymentErrorCOO {
  code?: string | null /** name of the field that is in error */;
  description?: string | null /** zero based index pointing to the passenger in error */;
}
/** Resume Payment Mutation Type */
export interface ResumePaymentMutationCOO {
  _links?: OrderLinksCOO | null /** Links section */;
  _warnings?: (GenericWarningCOO | null)[] | null /** Order API warnings array */;
}

export interface PutBin {
  payload?: JsonData | null;
  paymentOptionsV2?: PaymentOptionsV2 | null;
}

export interface CurrencyMutation {
  payload?: JsonData | null;
  paymentOptionsV2?: PaymentOptionsV2 | null;
  orderV2?: OrderV2 | null;
}

export interface MilesMutation {
  payload?: JsonData | null;
  paymentOptionsV2?: PaymentOptionsV2 | null;
}

export interface PostPay {
  payload?: JsonData | null;
  status?: PostPayStatus | null;
}

export interface ResumePaymentV2 {
  payload?: JsonData | null;
}

export interface PutDiscountCode {
  payload?: JsonData | null;
  paymentOptionsV2?: PaymentOptionsV2 | null;
  payment?: Payment | null;
}

export interface DeleteDiscountCode {
  payload?: JsonData | null;
  paymentOptionsV2?: PaymentOptionsV2 | null;
  payment?: Payment | null;
}

export interface PostVouchers {
  payload?: JsonData | null;
  payment?: Payment | null;
  paymentOptionsV2?: PaymentOptionsV2 | null;
}

export interface DeleteVoucher {
  payload?: JsonData | null;
  payment?: Payment | null;
  paymentOptionsV2?: PaymentOptionsV2 | null;
}

export interface SuccessfullyPostedInvoice {
  success: boolean;
}

export interface UMNRSavedSuccessfully {
  success: boolean;
}

export interface UserUpdateResponse {
  userProfileOnOrganizationId?: string | null;
}
/** Mutation Type */
export interface MutationCUO {
  errors?: (MutationErrorCUO | null)[] | null;
}
/** Error received in attempting to update something */
export interface MutationErrorCUO {
  code?: string | null;
  name?: string | null;
  errorInInputPath?: string | null;
}
/** Create Order Mutation Type */
export interface PostPassengerMutationOAO {
  patchPassenger?: PatchPassengerOAO | null;
  inputErrors?: (PassengerErrorOAO | null)[] | null /** validation errors array, empty in case of success */;
  _warnings?: (GenericWarningOAO | null)[] | null /** warnings array */;
  order?: OrderV2 | null;
}

export interface PatchPassengerOAO {
  _warnings?: (GenericWarningOAO | null)[] | null /** warnings array */;
}

export interface GenericWarningOAO {
  code?: string | null /** Error/warning code */;
  description?: string | null /** Description of the error/warning */;
  severity?: string | null /** Error/warning severity level */;
}
/** Error received in attempting to post a passenger */
export interface PassengerErrorOAO {
  field?: string | null /** name of the field that is in error */;
  passengerIndex?: number | null /** zero based index pointing to the passenger in error */;
  sectionType?: string | null /** name of the passenger section (property) that is in error */;
}
/** ... */
export interface ShoppingCartMutationResultSCO {
  shop?: ShoppingCartMutationResultShopSCO | null;
}
/** ... */
export interface ShoppingCartMutationResultShopSCO {
  _links?: LinksSCO | null;
  products?: (ProductTypeSCO | null)[] | null;
}
/** Links from shoppingcart */
export interface LinksSCO {
  checkout?: LinkSCO | null;
}
/** Link */
export interface LinkSCO {
  href?: string | null;
}
/** Travel document Mutation Type */
export interface TravelDocumentMutationCUO {
  errors?: (TravelDocumentMutationErrorCUO | null)[] | null;
}
/** Error received in attempting to add/update travel document */
export interface TravelDocumentMutationErrorCUO {
  code?: string | null;
  name?: string | null;
  errorInInputPath?: string | null;
}
/** Payment Preference Error */
export interface ChangePPErrorCUO {
  errors?: (ErrorCUO | null)[] | null;
}
/** Error received in attempting to change payment preference */
export interface ErrorCUO {
  code?: string | null;
  name?: string | null;
  errorInInputPath?: string | null;
}
/** Client Transaction */
export interface ClientTransactionCUO {
  transaction?: string | null;
}
/** Payment Preference Mutation Type */
export interface PaymentPreferenceMutationCUO {
  errors?: (PaymentPreferenceMutationErrorCUO | null)[] | null;
}
/** Error received in attempting to delete a payment preference */
export interface PaymentPreferenceMutationErrorCUO {
  code?: string | null;
  name?: string | null;
  errorInInputPath?: string | null;
}
/** Card Payment Preference */
export interface CardPaymentPreferenceCUO {
  clientTransactionId?: string | null;
  redirectURL?: string | null;
}

export interface FlyingBlueEnrolmentResponse {
  fbContractNumber?: number | null;
}

export interface FlyingBlueEnrolmentErrorResponse {
  errors?: (GenericWarningCOO | null)[] | null;
}

export interface AirportOAO {
  code?: string | null /** Airport code */;
  name?: string | null /** Airport name */;
  city?: CityCOO | null /** Airport city information */;
}

export interface Airport {
  city?: CodeName | null;
  code?: string | null;
  name?: string | null;
}

export interface SegmentOAO {
  segmentId?: string | null /** Segment id */;
  transferTime?: string | null /** transfer time in format e.g. 2h40 */;
  departFrom?: AirportCOO | null /** Departure airport information */;
  arriveOn?: AirportCOO | null /** Arrival airport information */;
  marketingFlight?: MarketingFlightCOO | null /** Marketing flight information */;
  fareBase?: S_FareFamilyCOO | null;
  remarks?: (S_RemarksCOO | null)[] | null;
}

export interface CreditCardNumber {
  title?: string | null;
}

export interface FirstName {
  title?: string | null;
}

export interface LastName {
  title?: string | null;
}

export interface Address {
  title?: string | null;
}

export interface City {
  title?: string | null;
}

export interface ZipCode {
  title?: string | null;
}

export interface Href {
  href?: string | null;
}

export interface Links {
  orderv2?: Href | null;
}

export interface CartProductsOAO {
  cart?: (CartProductOAO | null)[] | null;
}

export interface CartProductOAO {
  productClass?: string | null;
  code?: string | null;
  name?: string | null;
  productType?: string | null;
  insuranceOffers?: (InsuranceOfferThirdPartyAncillariesCOO | null)[] | null;
  productId?: string | null;
}

export interface OfferedProductsOAO {
  ancillaries?: (AncillariesCOO | null)[] | null;
  thirdPartyAncillaries?: (InsuranceThirdPartyAncillariesCOO | null)[] | null;
  carServiceThirdPartyAncillaries?: (CarServiceThirdPartyAncillariesCOO | null)[] | null;
  _errors?: (GenericWarningCOO | null)[] | null;
}

export interface InsuranceOfferThirdPartyAncillariesOAO {
  productId?: string | null /** required for posting a new product */;
  type?: string | null;
  code?: string | null;
  name?: string | null;
  productCode?: string | null;
  endDate?: string | null;
  startDate?: string | null;
  passengerId?: string | null;
  prices?: (PriceCOO | null)[] | null;
  insuranceTypeCode?: string | null;
  amountToInsure?: number | null;
  currencyCode?: string | null;
  description?: string | null;
  termsAndConditionsUrl?: string | null;
}
/** City */
export interface CityOAO {
  code?: string | null /** City code */;
  name?: string | null /** City name */;
  country?: CodeName | null /** Country code and name */;
}

export interface CommonInputFieldValueListValuesOAO {
  value?: string | null;
  name?: string | null;
}

export interface CommonInputFieldValueListOAO {
  code?: string | null;
  inputFieldValues?: (CommonInputFieldValueListValuesOAO | null)[] | null;
}
/** Input type for inputFields on payment/confirmation page */
export interface InputFieldsOAO {
  additionalInfo?: string | null /** additional info */;
  code?: string | null /** inputfield code */;
  mandatory?: boolean | null /** inputfield mandatory */;
  maxLength?: number | null /** maxLength input field */;
  minLength?: number | null /** minLength input field */;
  name?: string | null /** inputfield name */;
  readOnly?: boolean | null /** readOnly boolean */;
  regularExpression?: string | null /** regular expression pattern */;
  type?: string | null /** type of input field */;
  value?: string | null /** possible prefilled value of input */;
}
/** KeyValueOAO */
export interface KeyValueOAO {
  key?: string | null /** KeyValue key */;
  value?: string | null /** KeyValue value */;
}
/** different (credit)card types */
export interface LinkOAO {
  href?: string | null;
}
/** Description of the href type */
export interface OrderHrefOAO {
  href?: string | null;
}
/** Description of the links type */
export interface OrderLinksOAO {
  order?: OrderHrefOAO | null;
  shop?: OrderHrefOAO | null;
  redirectToBank?: OrderHrefOAO | null;
  getOrder?: OrderHrefOAO | null;
}
/** Price */
export interface PriceOAO {
  amount?: number | null /** Price amount */;
  currencyCode?: string | null /** Price code */;
  name?: string | null /** Localized price string */;
}
/** Baggage Product */
export interface BaggageProductOAO {
  productTypeText?: string | null /** Product's type text */;
  price?: PriceOAO | null /** Baggage price description */;
  oldPrice?: PriceOAO | null /** Baggage old price description */;
  connection?: ConnectionOAO | null /** Connection Id only */;
  passenger?: PassengerOAO | null /** Passenger information */;
  status?: string | null /** Status code */;
  unit?: string | null /** Baggage unit */;
  baseAllowance?: number | null /** Base baggage allowance */;
  extraAllowance?: number | null /** Extra baggage allowance */;
  boughtAllowance?: number | null /** Bought baggage allowance */;
}
/** Connection */
export interface ConnectionOAO {
  connectionId?: string | null /** Connection id */;
  segments?: (SegmentOAO | null)[] | null /** Segment list */;
  origin?: AirportOAO | null /** Origin airport information */;
  duration?: string | null /** Duration of one connection */;
  destination?: AirportOAO | null /** Destination airport information */;
}
/** Passenger */
export interface PassengerOAO {
  passengerId?: string | null /** Passenger id */;
  label?: string | null /** Passenger label */;
  passengerType?: string | null /** Passenger type */;
  contactDetails?: ContactDetailsOAO | null /** Contact details type */;
  personalDetails?: PersonalDetailsOAO | null /** Personal Details */;
}
/** Contact Details */
export interface ContactDetailsOAO {
  label?: string | null /** label */;
  emailAddress?: string | null /** E-mail adress */;
  phoneNumberFirst?: string | null /** 1st/main phone number */;
  emailForCommercialUse?: boolean | null /** allows receiving commercial offers */;
}
/** Contact Details */
export interface PersonalDetailsOAO {
  label?: string | null /** label */;
  firstName?: string | null /** Firstname */;
  lastName?: string | null /** Lastname */;
  title?: string | null /** title */;
  ticketName?: string | null /** ticketname */;
  dateOfBirth?: string | null /** Date of birth */;
  frequentFlyerProgram?: string | null /** FF Program name */;
  frequentFlyerNumber?: string | null /** FF Program number */;
  skyBonusNumber?: string | null /** Sky bonus number */;
  contractName?: string | null /** DOCT contract name */;
  corporateAccountNumber?: string | null /** DOCT account number */;
}
/** Flight Product */
export interface FlightProductOAO {
  status?: string | null /** Flight product status */;
  reservation?: FP_ReservationOAO | null /** Reservation information */;
  price?: PriceOAO | null /** Price of the flight product */;
  oldPrice?: PriceOAO | null /** Original price of the flight product */;
  tax?: PriceOAO | null /** Tax of the flight product */;
  fare?: PriceOAO | null /** Fare of the flight product */;
  pricesPerPassenger?: (PricesPerPassengerOAO | null)[] | null /** flight prices including fare and taxes per passenger */;
}
/** Reservation */
export interface FP_ReservationOAO {
  bookingCode?: string | null /** bookingCode */;
  itinerary?: ItineraryOAO | null /** Itinerary information */;
  passengers?: (PassengerOAO | null)[] | null /** Passenger list */;
  passengerCount?: number | null /** Passenger count */;
}
/** Itinerary information */
export interface ItineraryOAO {
  type?: string | null /** One way, two way, or multiple destinations */;
  connections?: (ConnectionOAO | null)[] | null /** Connection list */;
  origin?: AirportOAO | null /** Origin airport information */;
  destination?: AirportOAO | null /** Destination airport information */;
  departureTime?: string | null /** Outbound departure time */;
  returnDepartureTime?: string | null /** Inbound departure time */;
  departureDate?: string | null /** Outbound departure date */;
  returnDepartureDate?: string | null /** Inbound departure date */;
  collapsedText?: string | null /** Text for additional information on the ticket */;
  ticketConditions?: TicketConditionsOAO | null /** Conditions for one of the connections of the ticket */;
}
/** Conditions for the connection of the ticket */
export interface TicketConditionsOAO {
  sameConditions?: boolean | null /** Shows if the conditions are the same for all connections */;
  connections?: (TC_ConditionOAO | null)[] | null /** Conditions for each connection */;
}
/** Conditions for the connection of the ticket */
export interface TC_ConditionOAO {
  origin?: AirportOAO | null /** Origin */;
  destination?: AirportOAO | null /** Destination */;
  fareFamily?: TC_FareFamilyOAO | null /** Fare family info */;
  tripText?: string | null /** Trip text */;
  travelClassText?: string | null /** Travel class text */;
  cancelCondition?: TC_CancelConditionOAO | null /** Cancel condition */;
  changeCondition?: TC_ChangeConditionOAO | null /** Change condition */;
  noShowCondition?: TC_GenericConditionInfoOAO | null /** No show condition */;
  goShowCondition?: TC_GenericConditionInfoOAO | null /** No show condition */;
  advancePurchaseCondition?: TC_GenericConditionInfoOAO | null /** No show condition */;
  maximumStayCondition?: TC_GenericConditionInfoOAO | null /** Maximum stay condition */;
  minimumStayCondition?: TC_GenericConditionInfoOAO | null /** Maximum stay condition */;
  skyPriorityCondition?: TC_GenericConditionInfoOAO | null /** Maximum stay condition */;
  iATACondition?: (TC_IATAConditionOAO | null)[] | null /** IATA condition */;
  baggageAllowance?: TC_BaggageAllowanceConditionOAO | null /** Baggage allowance condition */;
  flyingBlue?: TC_GenericConditionInfoOAO | null /** FlyingBlue condition */;
}
/** Fare family info */
export interface TC_FareFamilyOAO {
  title?: string | null /** Fare family title text */;
  commercialDescription?: string | null /** Fare family commercial description text */;
}
/** Conditions for cancel */
export interface TC_CancelConditionOAO {
  allowedBeforeDeparture?: boolean | null /** Is refund allowed before departure */;
  allowedAfterDeparture?: boolean | null /** Is refund allowed after departure */;
  commercialText?: string | null /** Cancel condition commercial text */;
  taxRefundText?: string | null /** Tax refund fare condition */;
  refundText?: string | null /** Refund fee fare condition */;
  beforeDepartureDetailsText?: string | null /** Cancel condition before departure details text */;
  afterDepartureDetailsText?: string | null /** Cancel condition after departure details text */;
  extraCostsText?: string | null /** Cancel condition extra cost text */;
}
/** Conditions for the change */
export interface TC_ChangeConditionOAO {
  allowedBeforeDeparture?: boolean | null /** Is change allowed before departure */;
  allowedAfterDeparture?: boolean | null /** Is change allowed after departure */;
  commercialText?: string | null /** Change condition commercial text */;
  beforeDepartureDetailsText?: string | null /** Change condition before departure details text */;
  afterDepartureDetailsText?: string | null /** Change condition after departure details text */;
  taxChangeText?: string | null /** Tax change fare condition */;
  feeAfterTaxText?: string | null /** After tax fee fare condition */;
  phoneAdminFeeText?: string | null /** Cancel condition before departure details text */;
}
/** Conditions for minimum stay */
export interface TC_GenericConditionInfoOAO {
  commercialText?: string | null /** Minimum stay condition commercial text */;
  detailsText?: string | null /** Minimum stay condition details text */;
}
/** Conditions for IATA */
export interface TC_IATAConditionOAO {
  title?: string | null /** IATA condition title */;
  text?: string | null /** IATA condition text */;
}
/** Conditions baggage allowance */
export interface TC_BaggageAllowanceConditionOAO {
  commercialText?: string | null /** Baggage allowance commercial text */;
  detailsText?: string | null /** Baggage allowance details text */;
  handBaggageDetailsText?: string | null /** Baggage allowance hand baggage */;
}
/** Prices including fare and taxes per passenger */
export interface PricesPerPassengerOAO {
  passengerType?: string | null /** ADULT / CHILD / INFANT */;
  totalPrice?: PriceOAO | null /** totalPrice */;
  fare?: PriceOAO | null /** fare price */;
  totalTaxes?: PriceOAO | null /** totalTaxes */;
  taxes?: (TaxOAO | null)[] | null /** flight taxes per passenger */;
}
/** Specification of a specific case of a specific type of tax */
export interface TaxOAO {
  code?: string | null /** Tax code, e.g. CJ for security charge */;
  name?: string | null /** Name of the tax code, e.g. security charge */;
  price?: PriceOAO | null /** Price of this tax */;
  costType?: string | null /** e.g. NON_AIRLINE_COSTS */;
}
/** Insurance Product */
export interface InsuranceProductOAO {
  type?: string | null /** Type of the insurance */;
  price?: PriceOAO | null /** Price of the insurance product */;
  status?: string | null /** Insurance status */;
}
/** Meal product */
export interface MealProductOAO {
  status?: string | null /** Status of the product, e.g QUOTED/ISSUED etc */;
  name?: string | null /** commercial name given to a meal of this type */;
  price?: PriceOAO | null /** price of this meal product */;
  oldPrice?: PriceOAO | null;
  segment?: MP_SegmentOAO | null /** segment to which this meal applies */;
  passenger?: MP_PassengerOAO | null /** passenger for which the meal was ordered */;
}
/** segment to which the meal product applies */
export interface MP_SegmentOAO {
  segmentId?: string | null /** identifier of the segment */;
  origin?: string | null /** city name of the origin of this flight */;
  destination?: string | null /** city name of the destination of this flight */;
}
/** Passenger for whom the meal product was ordered */
export interface MP_PassengerOAO {
  firstName?: string | null /** first name of the passenger for which the meal product was ordered */;
  lastName?: string | null /** last name of the passenger for which the meal product was ordered */;
  passengerId?: string | null;
}
/** Ancillary Product */
export interface PaidOptionOAO {
  name?: string | null /** Name of the ancillary product */;
  price?: PriceOAO | null /** Price of the ancillary product */;
}
/** Product List */
export interface ProductListOAO {
  seatProducts?: (SeatProductOAO | null)[] | null /** Seats information */;
  baggageProducts?: (BaggageProductOAO | null)[] | null /** Baggage information */;
  flightProduct?: FlightProductOAO | null /** Flight product information */;
  insuranceProduct?: InsuranceProductOAO | null /** Insurance product information */;
  mealProducts?: (MealProductOAO | null)[] | null /** list of meal products ordered for this reservation */;
}
/** Seat Product */
export interface SeatProductOAO {
  productTypeText?: string | null /** Product's type text */;
  price?: PriceOAO | null /** Seat price description */;
  oldPrice?: PriceOAO | null;
  segment?: SegmentOAO | null /** Segment Id only */;
  passenger?: PassengerOAO | null /** Passenger information */;
  status?: string | null /** Status code */;
  code?: string | null /** The Code */;
  name?: string | null /** Name of the class, e.g. "Economy" etc. */;
  seatNumber?: string | null /** Seat number as in airplane, e.g. 8A */;
}
/** Reference Flight Product */
export interface ReferenceFlightProductOAO {
  status?: string | null /** Flight product status */;
  reservation?: FP_ReservationOAO | null /** Reservation information */;
}

export interface ResidualValueDocumentOAO {
  documentNumber?: string | null;
  lastName?: string | null;
  type?: string | null;
  value?: PriceOAO | null;
}
/** Information aiding the construction of a form with passenger input fields */
export interface PassengerFieldsOAO {
  passengers?:
    | (PF_PassengerOAO | null)[]
    | null /** list of initialised passengers as a starting point for the id page passenger entry form */;
  inputFieldValueLists?: (CommonInputFieldValueListOAO | null)[] | null;
  locationSpecificTexts?: (string | null)[] | null /** location specific texts for some destinations */;
  customer?: PF_CustomerOAO | null;
}
/** Input type for a Passenger part of the id page entry form */
export interface PF_PassengerOAO {
  label?: string | null;
  passengerId?: string | null;
  passengerType?: string | null;
  personalDetails?: JsonData | null;
  contactDetails?: JsonData | null;
}
/** Input type for the customer part of the id page entry form (i.e. the passenger data of a logged in customer) */
export interface PF_CustomerOAO {
  label?: string | null;
  passengerType?: string | null;
  personalDetails?: JsonData | null;
  contactDetails?: JsonData | null;
}
/** Simple generic object with the name field */
export interface NameSMO {
  name?: string | null;
}
/** Only the active segment of a seatmap */
export interface ActiveSegmentSHO {
  ordinal?: number | null;
  type?: string | null;
  operatingFlightSegment?: OperatingFlightSegmentSHO | null;
  departure?: StationSHO | null;
  arrival?: StationSHO | null;
}
/** Description of the operating flight */
export interface OperatingFlightSegmentSHO {
  id?: string | null;
  boardingDateTime?: string | null;
  duration?: string | null;
  estimatedLocalArrivalDateTime?: string | null;
  estimatedLocalDepartureDateTime?: string | null;
  scheduledLocalArrivalDateTime?: string | null;
  scheduledLocalDepartureDateTime?: string | null;
  estimatedLocalArrivalDateTimeTimestamp?: number | null;
  estimatedLocalDepartureDateTimeTimestamp?: number | null;
  scheduledLocalArrivalDateTimeTimestamp?: number | null;
  scheduledLocalDepartureDateTimeTimestamp?: number | null;
  operatingFlight?: OperatingFlightSHO | null;
  transferTime?: string | null;
  departureStation?: NameSMO | null;
}
/** Simple generic object with number and carrier fields */
export interface OperatingFlightSHO {
  number?: string | null;
  carrier?: CodeNameSMO | null;
}
/** Description of the station */
export interface StationSHO {
  airport?: AirportSHO | null;
}
/** Description of the Airport */
export interface AirportSHO {
  IATACode?: string | null;
  code?: string | null;
  name?: string | null;
  city?: CitySHO | null;
}
/** Description of the city */
export interface CitySHO {
  code?: string | null;
  name?: string | null;
  country?: CodeNameSMO | null;
}
/** Description of the connections */
export interface ConnectionsSHO {
  id?: string | null;
  ordinal?: number | null;
  duration?: string | null;
  segments?: (SegmentsSHO | null)[] | null;
}
/** Description of the segments */
export interface SegmentsSHO {
  ordinal?: number | null;
  type?: string | null;
  operatingFlightSegment?: OperatingFlightSegmentSHO | null;
  departure?: StationSHO | null;
  arrival?: StationSHO | null;
}
/** Description of the shop */
export interface ShopSHO {
  seatmap?: SeatmapDetailsSMO | null;
}
/** Bank Of America link */
export namespace QueryResolvers {
  export interface Resolvers {
    order?: OrderResolver;
    createOrderWithAncillaries?: CreateOrderWithAncillariesResolver;
    createOrder?: CreateOrderResolver;
    orderV2?: OrderV2Resolver;
    createOrderWithAncillariesV2?: CreateOrderWithAncillariesV2Resolver;
    confirmGratisProducts?: ConfirmGratisProductsResolver;
    decryptedReservation?: DecryptedReservationResolver;
    encryptedReservation?: EncryptedReservationResolver;
    paymentOptionsV2?: PaymentOptionsV2Resolver;
    payment?: PaymentResolver;
    ancillaries?: AncillariesResolver;
    nba?: NbaResolver;
    boaLink?: BoaLinkResolver;
    flightProduct?: FlightProductResolver;
    flightOffers?: FlightOffersResolver;
    offers?: OffersResolver;
    relatedProducts?: RelatedProductsResolver;
    shoppingCartShopId?: ShoppingCartShopIdResolver;
    brandedFares?: BrandedFaresResolver;
    reservation?: ReservationResolver;
    reservations?: ReservationsResolver;
    checkIn?: CheckInResolver;
    boardingDocs?: BoardingDocsResolver;
    checkInReferenceData?: CheckInReferenceDataResolver;
    checkTransferPassengerStatus?: CheckTransferPassengerStatusResolver;
    reservationFlightList?: ReservationFlightListResolver;
    getCheckDuplicate?: GetCheckDuplicateResolver;
    corporateContracts?: CorporateContractsResolver;
    corporateEnvironments?: CorporateEnvironmentsResolver;
    civility?: CivilityResolver;
    profiles?: ProfilesResolver;
    uccrs?: UccrsResolver;
    uccr?: UccrResolver;
    dangerousGoods?: DangerousGoodsResolver;
    customer?: CustomerResolver;
    salutationOptions?: SalutationOptionsResolver;
    account?: AccountResolver;
    destination?: DestinationResolver;
    flightStatus?: FlightStatusResolver;
    inspireDestinationsV4?: InspireDestinationsV4Resolver;
    inspireDestinations?: InspireDestinationsResolver;
    taxBreakdown?: TaxBreakdownResolver;
    tripSummaryItinerary?: TripSummaryItineraryResolver;
    lowestOffers?: LowestOffersResolver;
    decryptedReservationV2?: DecryptedReservationV2Resolver;
    encryptedReservationV2?: EncryptedReservationV2Resolver;
    stations?: StationsResolver;
    referenceData?: ReferenceDataResolver;
    richContent?: RichContentResolver;
    seatmap?: SeatmapResolver;
    shoppingCart?: ShoppingCartResolver;
    handoverCheckout?: HandoverCheckoutResolver;
    companions?: CompanionsResolver;
    travelDocuments?: TravelDocumentsResolver;
    travelDocumentTypes?: TravelDocumentTypesResolver;
    socialConnections?: SocialConnectionsResolver;
    availablePaymentTypes?: AvailablePaymentTypesResolver;
    paymentMethods?: PaymentMethodsResolver;
    paymentPreferences?: PaymentPreferencesResolver;
    loyaltyPrograms?: LoyaltyProgramsResolver;
    communicationPublications?: CommunicationPublicationsResolver;
    flyingBlueBenefits?: FlyingBlueBenefitsResolver;
    flyingBlueDashboard?: FlyingBlueDashboardResolver;
    flyingBlueTransactionHistory?: FlyingBlueTransactionHistoryResolver;
    flyingBlueContactDetails?: FlyingBlueContactDetailsResolver;
    contactCenter?: ContactCenterResolver;
    countries?: CountriesResolver;
    states?: StatesResolver;
  }

  export type OrderResolver = Resolver<OrderCOO | null, OrderArgs>;
  export interface OrderArgs {
    conversationStateId?: UniqueId | null;
    orderId?: UniqueId | null;
    name?: string | null;
    pnr?: string | null;
    currencyCode?: string | null;
    paymentMethodCode?: string | null;
  }

  export type CreateOrderWithAncillariesResolver = Resolver<OrderCOO | null, CreateOrderWithAncillariesArgs>;
  export interface CreateOrderWithAncillariesArgs {
    conversationStateId?: UniqueId | null;
  }

  export type CreateOrderResolver = Resolver<OrderCOO | null, CreateOrderArgs>;
  export interface CreateOrderArgs {
    conversationStateId?: UniqueId | null;
    pnr?: string | null;
    name?: string | null;
  }

  export type OrderV2Resolver = Resolver<OrderV2 | null, OrderV2Args>;
  export interface OrderV2Args {
    conversationStateId?: UniqueId | null;
    orderId?: UniqueId | null;
    name?: string | null;
    pnr?: string | null;
  }

  export type CreateOrderWithAncillariesV2Resolver = Resolver<OrderV2 | null, CreateOrderWithAncillariesV2Args>;
  export interface CreateOrderWithAncillariesV2Args {
    conversationStateId?: UniqueId | null;
  }

  export type ConfirmGratisProductsResolver = Resolver<OrderV2 | null, ConfirmGratisProductsArgs>;
  export interface ConfirmGratisProductsArgs {
    conversationStateId?: UniqueId | null;
  }

  export type DecryptedReservationResolver = Resolver<DecryptedReservationCOO | null, DecryptedReservationArgs>;
  export interface DecryptedReservationArgs {
    encryptedReservation?: string | null;
  }

  export type EncryptedReservationResolver = Resolver<string | null, EncryptedReservationArgs>;
  export interface EncryptedReservationArgs {
    market: string;
    bookingCode: string;
    lastName: string;
  }

  export type PaymentOptionsV2Resolver = Resolver<PaymentOptionsV2 | null, PaymentOptionsV2Args>;
  export interface PaymentOptionsV2Args {
    conversationStateId?: UniqueId | null;
    orderId: UniqueId;
    pnr?: string | null;
    name?: string | null;
  }

  export type PaymentResolver = Resolver<Payment | null, PaymentArgs>;
  export interface PaymentArgs {
    orderId: UniqueId;
    conversationStateId?: UniqueId | null;
    name?: string | null;
    pnr?: string | null;
  }

  export type AncillariesResolver = Resolver<AncillariesANO | null, AncillariesArgs>;
  export interface AncillariesArgs {
    shopId?: string | null;
  }

  export type NbaResolver = Resolver<NbaANO | null, NbaArgs>;
  export interface NbaArgs {
    resourceId: string;
  }

  export type BoaLinkResolver = Resolver<string | null>;
  export type FlightProductResolver = Resolver<FlightProductResponse | null, FlightProductArgs>;
  export interface FlightProductArgs {
    id?: string | null;
    flightProduct?: string | null;
  }

  export type FlightOffersResolver = Resolver<FlightOfferResponse | null, FlightOffersArgs>;
  export interface FlightOffersArgs {
    flightOfferRequest?: FlightOfferRequest | null;
    activeConnection?: number | null;
    metaSearch?: boolean | null;
  }

  export type OffersResolver = Resolver<(FlightOfferRowType | null)[] | null, OffersArgs>;
  export interface OffersArgs {
    flightOfferRequest?: FlightOfferRequest | null;
    activeConnection?: number | null;
    metaSearch?: boolean | null;
  }

  export type RelatedProductsResolver = Resolver<RelatedProductsResponse | null, RelatedProductsArgs>;
  export interface RelatedProductsArgs {
    flightOfferRequest?: FlightOfferRequest | null;
    activeConnection?: number | null;
    device?: string | null;
  }

  export type ShoppingCartShopIdResolver = Resolver<FlightProductResponse | null, ShoppingCartShopIdArgs>;
  export interface ShoppingCartShopIdArgs {
    flightOfferRequest?: FlightOfferRequest | null;
    activeConnection?: number | null;
    timeToThink?: boolean | null;
  }

  export type BrandedFaresResolver = Resolver<BrandedFaresResponse | null, BrandedFaresArgs>;
  export interface BrandedFaresArgs {
    upsellsUniqueKey?: string | null;
    flightAmenityNumber?: string | null;
    cabinClass?: string | null;
    activeConnection?: number | null;
    connectionsParam?: string | null;
    passengerString?: string | null;
  }

  export type ReservationResolver = Resolver<Reservation | null, ReservationArgs>;
  export interface ReservationArgs {
    bookingCode?: string | null;
    lastName?: string | null;
    id?: string | null;
  }

  export type ReservationsResolver = Resolver<Reservations | null>;
  export type CheckInResolver = Resolver<CIOCheckinInformationResult | null, CheckInArgs>;
  export interface CheckInArgs {
    ticketNumber?: string | null;
    airlineCode?: string | null;
    flightNumber?: string | null;
    checkInGroupId?: string | null;
    bookingCode?: string | null;
    departureStation?: string | null;
  }

  export type BoardingDocsResolver = Resolver<BoardingDocumentsSentCIO | null, BoardingDocsArgs>;
  export interface BoardingDocsArgs {
    checkInGroupId?: string | null;
    emailAddress?: string | null;
    passengers?: (BoardingDocPassengersCII | null)[] | null;
    documents?: (DocumentsCII | null)[] | null;
  }

  export type CheckInReferenceDataResolver = Resolver<ReferenceDataWrapperCIO | null, CheckInReferenceDataArgs>;
  export interface CheckInReferenceDataArgs {
    countryCode?: string | null;
  }

  export type CheckTransferPassengerStatusResolver = Resolver<
    CIOCheckTransferPassengerStatusResult | null,
    CheckTransferPassengerStatusArgs
  >;
  export interface CheckTransferPassengerStatusArgs {
    checkInGroupId?: string | null;
    checkStatusUrl?: string | null;
  }

  export type ReservationFlightListResolver = Resolver<ReservationFlightListResponse | null, ReservationFlightListArgs>;
  export interface ReservationFlightListArgs {
    gin?: boolean | null;
    bookingCode?: string | null;
    lastName?: string | null;
  }

  export type GetCheckDuplicateResolver = Resolver<DuplicateClaimList | null, GetCheckDuplicateArgs>;
  export interface GetCheckDuplicateArgs {
    firstName?: string | null;
    lastName?: string | null;
    category?: string | null;
    operatingAirlineCode?: string | null;
    operatingFlightNumber?: string | null;
    marketingAirlineCode?: string | null;
    marketingFlightNumber?: string | null;
    departureDate?: string | null;
  }

  export type CorporateContractsResolver = Resolver<(CorporateContract | null)[] | null>;
  export type CorporateEnvironmentsResolver = Resolver<CorporateEnvironmentWrapper | null>;
  export type CivilityResolver = Resolver<Civility | null>;
  export type ProfilesResolver = Resolver<(Profile | null)[] | null, ProfilesArgs>;
  export interface ProfilesArgs {
    ceId: number;
  }

  export type UccrsResolver = Resolver<Uccrs | null, UccrsArgs>;
  export interface UccrsArgs {
    ceId: number;
    page: number;
    size: number;
    sort?: string | null;
    direction?: string | null;
  }

  export type UccrResolver = Resolver<Uccr | null, UccrArgs>;
  export interface UccrArgs {
    ceId: number;
    id?: string | null;
  }

  export type DangerousGoodsResolver = Resolver<DangerousGoodsCIO | null>;
  export type CustomerResolver = Resolver<Customer | null, CustomerArgs>;
  export interface CustomerArgs {
    expand?: string | null;
  }

  export type SalutationOptionsResolver = Resolver<(Salutation | null)[] | null>;
  export type AccountResolver = Resolver<Account | null>;
  export type DestinationResolver = Resolver<Destination | null, DestinationArgs>;
  export interface DestinationArgs {
    iataCode?: string | null;
  }

  export type FlightStatusResolver = Resolver<FlightStatus | null, FlightStatusArgs>;
  export interface FlightStatusArgs {
    flightStatusInput?: FlightStatusInput | null;
  }

  export type InspireDestinationsV4Resolver = Resolver<InspireDestinationsV4 | null, InspireDestinationsV4Args>;
  export interface InspireDestinationsV4Args {
    gin?: string | null;
    cities?: string | null;
  }

  export type InspireDestinationsResolver = Resolver<InspireDestinationsCOO | null, InspireDestinationsArgs>;
  export interface InspireDestinationsArgs {
    cities: string;
  }

  export type TaxBreakdownResolver = Resolver<TaxBreakdown | null, TaxBreakdownArgs>;
  export interface TaxBreakdownArgs {
    flightOfferRequest?: FlightOfferRequest | null;
    activeConnection?: number | null;
  }

  export type TripSummaryItineraryResolver = Resolver<TripSummaryResponse | null, TripSummaryItineraryArgs>;
  export interface TripSummaryItineraryArgs {
    body?: ItineraryBody | null;
    metaSearch?: boolean | null;
  }

  export type LowestOffersResolver = Resolver<LowestOffersResponse | null, LowestOffersArgs>;
  export interface LowestOffersArgs {
    lowestOffersRequest?: LowestOffersRequest | null;
    activeConnection?: number | null;
    withEmptyDates?: boolean | null;
  }

  export type DecryptedReservationV2Resolver = Resolver<DecryptedReservationOAO | null, DecryptedReservationV2Args>;
  export interface DecryptedReservationV2Args {
    encryptedReservation?: string | null;
  }

  export type EncryptedReservationV2Resolver = Resolver<string | null, EncryptedReservationV2Args>;
  export interface EncryptedReservationV2Args {
    market: string;
    bookingCode: string;
    lastName: string;
  }

  export type StationsResolver = Resolver<(Station | null)[] | null>;
  export type ReferenceDataResolver = Resolver<ReferenceData | null, ReferenceDataArgs>;
  export interface ReferenceDataArgs {
    bookingFlow?: string | null;
  }

  export type RichContentResolver = Resolver<(RichContentFlights | null)[] | null, RichContentArgs>;
  export interface RichContentArgs {
    flights?: (string | null)[] | null;
  }

  export type SeatmapResolver = Resolver<SeatmapDetailsSMO | null, SeatmapArgs>;
  export interface SeatmapArgs {
    shopId: string;
    segmentId: string;
    passengerId: string;
  }

  export type ShoppingCartResolver = Resolver<(ShoppingCartResult | null)[] | null, ShoppingCartArgs>;
  export interface ShoppingCartArgs {
    shopCartUrl?: string | null;
    productClass?: string | null;
  }

  export type HandoverCheckoutResolver = Resolver<HandoverCheckout | null, HandoverCheckoutArgs>;
  export interface HandoverCheckoutArgs {
    ubc?: string | null;
  }

  export type CompanionsResolver = Resolver<CompanionsList | null>;
  export type TravelDocumentsResolver = Resolver<(TravelDocument | null)[] | null>;
  export type TravelDocumentTypesResolver = Resolver<(CodeNameCUO | null)[] | null>;
  export type SocialConnectionsResolver = Resolver<SocialConnections | null>;
  export type AvailablePaymentTypesResolver = Resolver<(PaymentTypeCUO | null)[] | null>;
  export type PaymentMethodsResolver = Resolver<(PaymentMethodsCUO | null)[] | null, PaymentMethodsArgs>;
  export interface PaymentMethodsArgs {
    paymentType?: string | null;
  }

  export type PaymentPreferencesResolver = Resolver<(PaymentPreferenceCUO | null)[] | null>;
  export type LoyaltyProgramsResolver = Resolver<(LoyaltyProgram | null)[] | null>;
  export type CommunicationPublicationsResolver = Resolver<CommunicationPublicationsCUO | null>;
  export type FlyingBlueBenefitsResolver = Resolver<FlyingBlueBenefits | null, FlyingBlueBenefitsArgs>;
  export interface FlyingBlueBenefitsArgs {
    fbNumber?: string | null;
  }

  export type FlyingBlueDashboardResolver = Resolver<FlyingBlueDashboard | null, FlyingBlueDashboardArgs>;
  export interface FlyingBlueDashboardArgs {
    fbNumber?: string | null;
  }

  export type FlyingBlueTransactionHistoryResolver = Resolver<FlyingBlueTransactionHistory | null, FlyingBlueTransactionHistoryArgs>;
  export interface FlyingBlueTransactionHistoryArgs {
    fbNumber?: string | null;
    size?: number | null;
    offset?: number | null;
  }

  export type FlyingBlueContactDetailsResolver = Resolver<FlyingBlueContactDetails | null, FlyingBlueContactDetailsArgs>;
  export interface FlyingBlueContactDetailsArgs {
    fbNumber?: string | null;
  }

  export type ContactCenterResolver = Resolver<(ContactCenterPhone | null)[] | null>;
  export type CountriesResolver = Resolver<(Country | null)[] | null>;
  export type StatesResolver = Resolver<(State | null)[] | null, StatesArgs>;
  export interface StatesArgs {
    countryCode?: string | null;
  }
}
/** Order describes the data involved in checkout */
export namespace OrderCOOResolvers {
  export interface Resolvers {
    orderId?: OrderIdResolver /** Order id */;
    referenceFlightProduct?: ReferenceFlightProductResolver /** Reference Flight Product for check-in flow */;
    paidOptionList?: PaidOptionListResolver /** Paid Option (ancillary product) list */;
    productList?: ProductListResolver /** Product list */;
    totalPrice?: TotalPriceResolver /** Total price information */;
    payments?: PaymentsResolver /** Overall payment data */;
    paymentPrice?: PaymentPriceResolver /** Payment price information */;
    currencyConversionSurcharge?: CurrencyConversionSurchargeResolver /** Currency conversion surcharge */;
    totalBookingFee?: TotalBookingFeeResolver /** Total booking fee information */;
    totalPaymentFee?: TotalPaymentFeeResolver;
    channel?: ChannelResolver /** Order channel */;
    supportTimeFrame?: SupportTimeFrameResolver /** Order support time */;
    residualValue?: ResidualValueResolver;
    residualValueDocuments?: ResidualValueDocumentsResolver;
    _warnings?: _warningsResolver /** Order API warningsMock array */;
    paymentOptions?: PaymentOptionsResolver /** PaymentOptions information */;
    passengerFields?: PassengerFieldsResolver /** PassengerFields information */;
    ticketConditions?: TicketConditionsResolver /** Conditions for one of the connections of the ticket */;
    cartProducts?: CartProductsResolver;
    offeredProducts?: OfferedProductsResolver /** ancillaries, in order api because it is combined with passenger detailsto decide to navigate to ancillaries (options) without an extra round trip */;
  }

  export type OrderIdResolver = Resolver<string | null>;
  export type ReferenceFlightProductResolver = Resolver<ReferenceFlightProductCOO | null>;
  export type PaidOptionListResolver = Resolver<(PaidOptionCOO | null)[] | null>;
  export type ProductListResolver = Resolver<ProductListCOO | null>;
  export type TotalPriceResolver = Resolver<PriceCOO | null>;
  export type PaymentsResolver = Resolver<(PaymentCOO | null)[] | null>;
  export type PaymentPriceResolver = Resolver<PriceCOO | null>;
  export type CurrencyConversionSurchargeResolver = Resolver<PriceCOO | null>;
  export type TotalBookingFeeResolver = Resolver<PriceCOO | null>;
  export type TotalPaymentFeeResolver = Resolver<PriceCOO | null>;
  export type ChannelResolver = Resolver<string | null>;
  export type SupportTimeFrameResolver = Resolver<string | null>;
  export type ResidualValueResolver = Resolver<PriceCOO | null>;
  export type ResidualValueDocumentsResolver = Resolver<(ResidualValueDocumentCOO | null)[] | null>;
  export type _warningsResolver = Resolver<(GenericWarningCOO | null)[] | null>;
  export type PaymentOptionsResolver = Resolver<PaymentOptionsCOO | null, PaymentOptionsArgs>;
  export interface PaymentOptionsArgs {
    conversationStateId?: UniqueId | null /** Conversation state id */;
    orderId?: UniqueId | null /** order id */;
    pnr?: string | null /** PNR(bookingcode) */;
    name?: string | null /** Booking name */;
  }

  export type PassengerFieldsResolver = Resolver<PassengerFieldsCOO | null, PassengerFieldsArgs>;
  export interface PassengerFieldsArgs {
    conversationStateId: UniqueId /** Conversation state id */;
  }

  export type TicketConditionsResolver = Resolver<TicketConditionsCOO | null>;
  export type CartProductsResolver = Resolver<CartProductsCOO | null, CartProductsArgs>;
  export interface CartProductsArgs {
    conversationStateId: UniqueId;
  }

  export type OfferedProductsResolver = Resolver<OfferedProductsCOO | null, OfferedProductsArgs>;
  export interface OfferedProductsArgs {
    conversationStateId: UniqueId /** Conversation state id */;
  }
}
/** Reference Flight Product */
export namespace ReferenceFlightProductCOOResolvers {
  export interface Resolvers {
    status?: StatusResolver /** Flight product status */;
    reservation?: ReservationResolver /** Reservation information */;
  }

  export type StatusResolver = Resolver<string | null>;
  export type ReservationResolver = Resolver<FP_ReservationCOO | null>;
}
/** Reservation */
export namespace FP_ReservationCOOResolvers {
  export interface Resolvers {
    bookingCode?: BookingCodeResolver /** bookingCode */;
    itinerary?: ItineraryResolver /** Itinerary information */;
    passengers?: PassengersResolver /** Passenger list */;
    passengerCount?: PassengerCountResolver /** Passenger count */;
  }

  export type BookingCodeResolver = Resolver<string | null>;
  export type ItineraryResolver = Resolver<ItineraryCOO | null>;
  export type PassengersResolver = Resolver<(PassengerCOO | null)[] | null>;
  export type PassengerCountResolver = Resolver<number | null>;
}
/** Itinerary information */
export namespace ItineraryCOOResolvers {
  export interface Resolvers {
    type?: TypeResolver /** One way, two way, or multiple destinations */;
    connections?: ConnectionsResolver /** Connection list */;
    origin?: OriginResolver /** Origin airport information */;
    destination?: DestinationResolver /** Destination airport information */;
    departureTime?: DepartureTimeResolver /** Outbound departure time */;
    returnDepartureTime?: ReturnDepartureTimeResolver /** Inbound departure time */;
    departureDate?: DepartureDateResolver /** Outbound departure date */;
    returnDepartureDate?: ReturnDepartureDateResolver /** Inbound departure date */;
    collapsedText?: CollapsedTextResolver /** Text for additional information on the ticket */;
    ticketConditions?: TicketConditionsResolver /** Conditions for one of the connections of the ticket */;
  }

  export type TypeResolver = Resolver<string | null>;
  export type ConnectionsResolver = Resolver<(ConnectionCOO | null)[] | null>;
  export type OriginResolver = Resolver<AirportCOO | null>;
  export type DestinationResolver = Resolver<AirportCOO | null>;
  export type DepartureTimeResolver = Resolver<string | null>;
  export type ReturnDepartureTimeResolver = Resolver<string | null>;
  export type DepartureDateResolver = Resolver<string | null>;
  export type ReturnDepartureDateResolver = Resolver<string | null>;
  export type CollapsedTextResolver = Resolver<string | null>;
  export type TicketConditionsResolver = Resolver<TicketConditionsCOO | null>;
}
/** Connection */
export namespace ConnectionCOOResolvers {
  export interface Resolvers {
    connectionId?: ConnectionIdResolver /** Connection id */;
    segments?: SegmentsResolver /** Segment list */;
    origin?: OriginResolver /** Origin airport information */;
    duration?: DurationResolver /** Duration of one connection */;
    destination?: DestinationResolver /** Destination airport information */;
  }

  export type ConnectionIdResolver = Resolver<string | null>;
  export type SegmentsResolver = Resolver<(SegmentCOO | null)[] | null>;
  export type OriginResolver = Resolver<AirportCOO | null>;
  export type DurationResolver = Resolver<string | null>;
  export type DestinationResolver = Resolver<AirportCOO | null>;
}
/** Segment */
export namespace SegmentCOOResolvers {
  export interface Resolvers {
    segmentId?: SegmentIdResolver /** Segment id */;
    transferTime?: TransferTimeResolver /** transfer time in format e.g. 2h40 */;
    departFrom?: DepartFromResolver /** Departure airport information */;
    arriveOn?: ArriveOnResolver /** Arrival airport information */;
    marketingFlight?: MarketingFlightResolver /** Marketing flight information */;
    fareBase?: FareBaseResolver;
    remarks?: RemarksResolver;
    economyCabinOfferedForBusinessClass?: EconomyCabinOfferedForBusinessClassResolver /** segment in a business class itinerary where there are no business class seats provided */;
  }

  export type SegmentIdResolver = Resolver<string | null>;
  export type TransferTimeResolver = Resolver<string | null>;
  export type DepartFromResolver = Resolver<AirportCOO | null>;
  export type ArriveOnResolver = Resolver<AirportCOO | null>;
  export type MarketingFlightResolver = Resolver<MarketingFlightCOO | null>;
  export type FareBaseResolver = Resolver<S_FareFamilyCOO | null>;
  export type RemarksResolver = Resolver<(S_RemarksCOO | null)[] | null>;
  export type EconomyCabinOfferedForBusinessClassResolver = Resolver<boolean | null>;
}
/** Airport Information */
export namespace AirportCOOResolvers {
  export interface Resolvers {
    code?: CodeResolver /** Airport code */;
    name?: NameResolver /** Airport name */;
    city?: CityResolver /** Airport city information */;
  }

  export type CodeResolver = Resolver<string | null>;
  export type NameResolver = Resolver<string | null>;
  export type CityResolver = Resolver<CityCOO | null>;
}
/** City */
export namespace CityCOOResolvers {
  export interface Resolvers {
    code?: CodeResolver /** City code */;
    name?: NameResolver /** City name */;
    country?: CountryResolver /** Country code and name */;
  }

  export type CodeResolver = Resolver<string | null>;
  export type NameResolver = Resolver<string | null>;
  export type CountryResolver = Resolver<CodeName | null>;
}
/** General type for code and name fields */
export namespace CodeNameResolvers {
  export interface Resolvers {
    code?: CodeResolver /** Code */;
    name?: NameResolver /** Name */;
  }

  export type CodeResolver = Resolver<string | null>;
  export type NameResolver = Resolver<string | null>;
}
/** Marketing flight information */
export namespace MarketingFlightCOOResolvers {
  export interface Resolvers {
    number?: NumberResolver /** Flight number */;
    carrier?: CarrierResolver /** Flight carrier information */;
    numberOfStops?: NumberOfStopsResolver /** Number of stops */;
    sellingClass?: SellingClassResolver /** Flight class, e.g. Y indicates Economy(?) */;
    operatingFlight?: OperatingFlightResolver /** Operating flight information */;
  }

  export type NumberResolver = Resolver<number | null>;
  export type CarrierResolver = Resolver<CodeName | null>;
  export type NumberOfStopsResolver = Resolver<number | null>;
  export type SellingClassResolver = Resolver<CodeName | null>;
  export type OperatingFlightResolver = Resolver<OperatingFlightCOO | null>;
}
/** Operating Flight */
export namespace OperatingFlightCOOResolvers {
  export interface Resolvers {
    number?: NumberResolver /** Flight number */;
    carrier?: CarrierResolver /** Carrier information */;
    departureDateLabel?: DepartureDateLabelResolver /** Formatted departure date */;
    departureTimeLabel?: DepartureTimeLabelResolver /** Formatted Departure time */;
    departureDateTime?: DepartureDateTimeResolver /** Departure time */;
    arrivalDateLabel?: ArrivalDateLabelResolver /** Formatted arrival date */;
    arrivalTimeLabel?: ArrivalTimeLabelResolver /** Formatted Arrival time */;
    arrivalDateTime?: ArrivalDateTimeResolver /** Arrival time */;
    cabinClass?: CabinClassResolver /** Cabin class information */;
    equipment?: EquipmentResolver /** Equipment information */;
  }

  export type NumberResolver = Resolver<string | null>;
  export type CarrierResolver = Resolver<CodeName | null>;
  export type DepartureDateLabelResolver = Resolver<string | null>;
  export type DepartureTimeLabelResolver = Resolver<string | null>;
  export type DepartureDateTimeResolver = Resolver<string | null>;
  export type ArrivalDateLabelResolver = Resolver<string | null>;
  export type ArrivalTimeLabelResolver = Resolver<string | null>;
  export type ArrivalDateTimeResolver = Resolver<string | null>;
  export type CabinClassResolver = Resolver<CodeName | null>;
  export type EquipmentResolver = Resolver<CodeName | null>;
}
/** Connection Fare family info */
export namespace S_FareFamilyCOOResolvers {
  export interface Resolvers {
    name?: NameResolver /** Fare family title text */;
    code?: CodeResolver /** Fare family title text */;
    description?: DescriptionResolver /** Fare family commercial description text */;
  }

  export type NameResolver = Resolver<string | null>;
  export type CodeResolver = Resolver<string | null>;
  export type DescriptionResolver = Resolver<string | null>;
}
/** segment remarks */
export namespace S_RemarksCOOResolvers {
  export interface Resolvers {
    remark?: RemarkResolver /** remark for the segment */;
  }

  export type RemarkResolver = Resolver<string | null>;
}
/** Conditions for the connection of the ticket */
export namespace TicketConditionsCOOResolvers {
  export interface Resolvers {
    sameConditions?: SameConditionsResolver /** Shows if the conditions are the same for all connections */;
    connections?: ConnectionsResolver /** Conditions for each connection */;
  }

  export type SameConditionsResolver = Resolver<boolean | null>;
  export type ConnectionsResolver = Resolver<(TC_ConditionCOO | null)[] | null>;
}
/** Conditions for the connection of the ticket */
export namespace TC_ConditionCOOResolvers {
  export interface Resolvers {
    origin?: OriginResolver /** Origin */;
    destination?: DestinationResolver /** Destination */;
    fareFamily?: FareFamilyResolver /** Fare family info */;
    tripText?: TripTextResolver /** Trip text */;
    travelClassText?: TravelClassTextResolver /** Travel class text */;
    cancelCondition?: CancelConditionResolver /** Cancel condition */;
    changeCondition?: ChangeConditionResolver /** Change condition */;
    noShowCondition?: NoShowConditionResolver /** No show condition */;
    goShowCondition?: GoShowConditionResolver /** No show condition */;
    advancePurchaseCondition?: AdvancePurchaseConditionResolver /** No show condition */;
    maximumStayCondition?: MaximumStayConditionResolver /** Maximum stay condition */;
    minimumStayCondition?: MinimumStayConditionResolver /** Maximum stay condition */;
    skyPriorityCondition?: SkyPriorityConditionResolver /** Maximum stay condition */;
    iATACondition?: IATAConditionResolver /** IATA condition */;
    baggageAllowance?: BaggageAllowanceResolver /** Baggage allowance condition */;
    flyingBlue?: FlyingBlueResolver /** FlyingBlue condition */;
  }

  export type OriginResolver = Resolver<AirportCOO | null>;
  export type DestinationResolver = Resolver<AirportCOO | null>;
  export type FareFamilyResolver = Resolver<TC_FareFamilyCOO | null>;
  export type TripTextResolver = Resolver<string | null>;
  export type TravelClassTextResolver = Resolver<string | null>;
  export type CancelConditionResolver = Resolver<TC_CancelConditionCOO | null>;
  export type ChangeConditionResolver = Resolver<TC_ChangeConditionCOO | null>;
  export type NoShowConditionResolver = Resolver<TC_GenericConditionInfoCOO | null>;
  export type GoShowConditionResolver = Resolver<TC_GenericConditionInfoCOO | null>;
  export type AdvancePurchaseConditionResolver = Resolver<TC_GenericConditionInfoCOO | null>;
  export type MaximumStayConditionResolver = Resolver<TC_GenericConditionInfoCOO | null>;
  export type MinimumStayConditionResolver = Resolver<TC_GenericConditionInfoCOO | null>;
  export type SkyPriorityConditionResolver = Resolver<TC_GenericConditionInfoCOO | null>;
  export type IATAConditionResolver = Resolver<(TC_IATAConditionCOO | null)[] | null>;
  export type BaggageAllowanceResolver = Resolver<TC_BaggageAllowanceConditionCOO | null>;
  export type FlyingBlueResolver = Resolver<TC_GenericConditionInfoCOO | null>;
}
/** Fare family info */
export namespace TC_FareFamilyCOOResolvers {
  export interface Resolvers {
    title?: TitleResolver /** Fare family title text */;
    commercialDescription?: CommercialDescriptionResolver /** Fare family commercial description text */;
  }

  export type TitleResolver = Resolver<string | null>;
  export type CommercialDescriptionResolver = Resolver<string | null>;
}
/** Conditions for cancel */
export namespace TC_CancelConditionCOOResolvers {
  export interface Resolvers {
    allowedBeforeDeparture?: AllowedBeforeDepartureResolver /** Is refund allowed before departure */;
    allowedAfterDeparture?: AllowedAfterDepartureResolver /** Is refund allowed after departure */;
    commercialText?: CommercialTextResolver /** Cancel condition commercial text */;
    taxRefundText?: TaxRefundTextResolver /** Tax refund fare condition */;
    refundText?: RefundTextResolver /** Refund fee fare condition */;
    beforeDepartureDetailsText?: BeforeDepartureDetailsTextResolver /** Cancel condition before departure details text */;
    afterDepartureDetailsText?: AfterDepartureDetailsTextResolver /** Cancel condition after departure details text */;
    extraCostsText?: ExtraCostsTextResolver /** Cancel condition extra cost text */;
  }

  export type AllowedBeforeDepartureResolver = Resolver<boolean | null>;
  export type AllowedAfterDepartureResolver = Resolver<boolean | null>;
  export type CommercialTextResolver = Resolver<string | null>;
  export type TaxRefundTextResolver = Resolver<string | null>;
  export type RefundTextResolver = Resolver<string | null>;
  export type BeforeDepartureDetailsTextResolver = Resolver<string | null>;
  export type AfterDepartureDetailsTextResolver = Resolver<string | null>;
  export type ExtraCostsTextResolver = Resolver<string | null>;
}
/** Conditions for the change */
export namespace TC_ChangeConditionCOOResolvers {
  export interface Resolvers {
    allowedBeforeDeparture?: AllowedBeforeDepartureResolver /** Is change allowed before departure */;
    allowedAfterDeparture?: AllowedAfterDepartureResolver /** Is change allowed after departure */;
    commercialText?: CommercialTextResolver /** Change condition commercial text */;
    beforeDepartureDetailsText?: BeforeDepartureDetailsTextResolver /** Change condition before departure details text */;
    afterDepartureDetailsText?: AfterDepartureDetailsTextResolver /** Change condition after departure details text */;
    taxChangeText?: TaxChangeTextResolver /** Tax change fare condition */;
    feeAfterTaxText?: FeeAfterTaxTextResolver /** After tax fee fare condition */;
    phoneAdminFeeText?: PhoneAdminFeeTextResolver /** Cancel condition before departure details text */;
  }

  export type AllowedBeforeDepartureResolver = Resolver<boolean | null>;
  export type AllowedAfterDepartureResolver = Resolver<boolean | null>;
  export type CommercialTextResolver = Resolver<string | null>;
  export type BeforeDepartureDetailsTextResolver = Resolver<string | null>;
  export type AfterDepartureDetailsTextResolver = Resolver<string | null>;
  export type TaxChangeTextResolver = Resolver<string | null>;
  export type FeeAfterTaxTextResolver = Resolver<string | null>;
  export type PhoneAdminFeeTextResolver = Resolver<string | null>;
}
/** Conditions for minimum stay */
export namespace TC_GenericConditionInfoCOOResolvers {
  export interface Resolvers {
    commercialText?: CommercialTextResolver /** Minimum stay condition commercial text */;
    detailsText?: DetailsTextResolver /** Minimum stay condition details text */;
  }

  export type CommercialTextResolver = Resolver<string | null>;
  export type DetailsTextResolver = Resolver<string | null>;
}
/** Conditions for IATA */
export namespace TC_IATAConditionCOOResolvers {
  export interface Resolvers {
    title?: TitleResolver /** IATA condition title */;
    text?: TextResolver /** IATA condition text */;
  }

  export type TitleResolver = Resolver<string | null>;
  export type TextResolver = Resolver<string | null>;
}
/** Conditions baggage allowance */
export namespace TC_BaggageAllowanceConditionCOOResolvers {
  export interface Resolvers {
    commercialText?: CommercialTextResolver /** Baggage allowance commercial text */;
    detailsText?: DetailsTextResolver /** Baggage allowance details text */;
    handBaggageDetailsText?: HandBaggageDetailsTextResolver /** Baggage allowance hand baggage */;
  }

  export type CommercialTextResolver = Resolver<string | null>;
  export type DetailsTextResolver = Resolver<string | null>;
  export type HandBaggageDetailsTextResolver = Resolver<string | null>;
}
/** Passenger */
export namespace PassengerCOOResolvers {
  export interface Resolvers {
    passengerId?: PassengerIdResolver /** Passenger id */;
    label?: LabelResolver /** Passenger label */;
    passengerType?: PassengerTypeResolver /** Passenger type */;
    contactDetails?: ContactDetailsResolver /** Contact details type */;
    personalDetails?: PersonalDetailsResolver /** Personal Details */;
  }

  export type PassengerIdResolver = Resolver<string | null>;
  export type LabelResolver = Resolver<string | null>;
  export type PassengerTypeResolver = Resolver<string | null>;
  export type ContactDetailsResolver = Resolver<ContactDetailsCOO | null>;
  export type PersonalDetailsResolver = Resolver<PersonalDetailsCOO | null>;
}
/** Contact Details */
export namespace ContactDetailsCOOResolvers {
  export interface Resolvers {
    label?: LabelResolver /** label */;
    emailAddress?: EmailAddressResolver /** E-mail adress */;
    phoneNumberFirst?: PhoneNumberFirstResolver /** 1st/main phone number */;
    emailForCommercialUse?: EmailForCommercialUseResolver /** allows receiving commercial offers */;
  }

  export type LabelResolver = Resolver<string | null>;
  export type EmailAddressResolver = Resolver<string | null>;
  export type PhoneNumberFirstResolver = Resolver<string | null>;
  export type EmailForCommercialUseResolver = Resolver<boolean | null>;
}
/** Contact Details */
export namespace PersonalDetailsCOOResolvers {
  export interface Resolvers {
    label?: LabelResolver /** label */;
    firstName?: FirstNameResolver /** Firstname */;
    lastName?: LastNameResolver /** Lastname */;
    title?: TitleResolver /** title */;
    ticketName?: TicketNameResolver /** ticketname */;
    dateOfBirth?: DateOfBirthResolver /** Date of birth */;
    frequentFlyerProgram?: FrequentFlyerProgramResolver /** FF Program name */;
    frequentFlyerNumber?: FrequentFlyerNumberResolver /** FF Program number */;
    skyBonusNumber?: SkyBonusNumberResolver /** Sky bonus number */;
    contractName?: ContractNameResolver /** DOCT contract name */;
    corporateAccountNumber?: CorporateAccountNumberResolver /** DOCT account number */;
  }

  export type LabelResolver = Resolver<string | null>;
  export type FirstNameResolver = Resolver<string | null>;
  export type LastNameResolver = Resolver<string | null>;
  export type TitleResolver = Resolver<string | null>;
  export type TicketNameResolver = Resolver<string | null>;
  export type DateOfBirthResolver = Resolver<string | null>;
  export type FrequentFlyerProgramResolver = Resolver<string | null>;
  export type FrequentFlyerNumberResolver = Resolver<string | null>;
  export type SkyBonusNumberResolver = Resolver<string | null>;
  export type ContractNameResolver = Resolver<string | null>;
  export type CorporateAccountNumberResolver = Resolver<string | null>;
}
/** Ancillary Product */
export namespace PaidOptionCOOResolvers {
  export interface Resolvers {
    name?: NameResolver /** Name of the ancillary product */;
    price?: PriceResolver /** Price of the ancillary product */;
  }

  export type NameResolver = Resolver<string | null>;
  export type PriceResolver = Resolver<PriceCOO | null>;
}
/** Price */
export namespace PriceCOOResolvers {
  export interface Resolvers {
    amount?: AmountResolver /** Price amount */;
    currencyCode?: CurrencyCodeResolver /** Price code */;
    name?: NameResolver /** Localized price string */;
  }

  export type AmountResolver = Resolver<number | null>;
  export type CurrencyCodeResolver = Resolver<string | null>;
  export type NameResolver = Resolver<string | null>;
}
/** Product List */
export namespace ProductListCOOResolvers {
  export interface Resolvers {
    seatProducts?: SeatProductsResolver /** Seats information */;
    baggageProducts?: BaggageProductsResolver /** Baggage information */;
    flightProduct?: FlightProductResolver /** Flight product information */;
    insuranceProduct?: InsuranceProductResolver /** Insurance product information */;
    mealProducts?: MealProductsResolver /** list of meal products ordered for this reservation */;
    environmentalProducts?: EnvironmentalProductsResolver;
    timeToThinkProduct?: TimeToThinkProductResolver;
  }

  export type SeatProductsResolver = Resolver<(SeatProductCOO | null)[] | null>;
  export type BaggageProductsResolver = Resolver<(BaggageProductCOO | null)[] | null>;
  export type FlightProductResolver = Resolver<FlightProductCOO | null>;
  export type InsuranceProductResolver = Resolver<InsuranceProductCOO | null>;
  export type MealProductsResolver = Resolver<(MealProductCOO | null)[] | null>;
  export type EnvironmentalProductsResolver = Resolver<(EnvironmentalProductCOO | null)[] | null>;
  export type TimeToThinkProductResolver = Resolver<TimeToThinkProductCOO | null>;
}
/** Seat Product */
export namespace SeatProductCOOResolvers {
  export interface Resolvers {
    productTypeText?: ProductTypeTextResolver /** Product's type text */;
    price?: PriceResolver /** Seat price description */;
    oldPrice?: OldPriceResolver;
    segment?: SegmentResolver /** Segment Id only */;
    passenger?: PassengerResolver /** Passenger information */;
    status?: StatusResolver /** Status code */;
    code?: CodeResolver /** The Code */;
    name?: NameResolver /** Name of the class, e.g. "Economy" etc. */;
    seatNumber?: SeatNumberResolver /** Seat number as in airplane, e.g. 8A */;
  }

  export type ProductTypeTextResolver = Resolver<string | null>;
  export type PriceResolver = Resolver<PriceCOO | null>;
  export type OldPriceResolver = Resolver<PriceCOO | null>;
  export type SegmentResolver = Resolver<SegmentCOO | null>;
  export type PassengerResolver = Resolver<PassengerCOO | null>;
  export type StatusResolver = Resolver<string | null>;
  export type CodeResolver = Resolver<string | null>;
  export type NameResolver = Resolver<string | null>;
  export type SeatNumberResolver = Resolver<string | null>;
}
/** Baggage Product */
export namespace BaggageProductCOOResolvers {
  export interface Resolvers {
    productTypeText?: ProductTypeTextResolver /** Product's type text */;
    price?: PriceResolver /** Baggage price description */;
    oldPrice?: OldPriceResolver /** Baggage old price description */;
    connection?: ConnectionResolver /** Connection Id only */;
    passenger?: PassengerResolver /** Passenger information */;
    status?: StatusResolver /** Status code */;
    unit?: UnitResolver /** Baggage unit */;
    baseAllowance?: BaseAllowanceResolver /** Base baggage allowance */;
    extraAllowance?: ExtraAllowanceResolver /** Extra baggage allowance */;
    boughtAllowance?: BoughtAllowanceResolver /** Bought baggage allowance */;
  }

  export type ProductTypeTextResolver = Resolver<string | null>;
  export type PriceResolver = Resolver<PriceCOO | null>;
  export type OldPriceResolver = Resolver<PriceCOO | null>;
  export type ConnectionResolver = Resolver<ConnectionCOO | null>;
  export type PassengerResolver = Resolver<PassengerCOO | null>;
  export type StatusResolver = Resolver<string | null>;
  export type UnitResolver = Resolver<string | null>;
  export type BaseAllowanceResolver = Resolver<number | null>;
  export type ExtraAllowanceResolver = Resolver<number | null>;
  export type BoughtAllowanceResolver = Resolver<number | null>;
}
/** Flight Product */
export namespace FlightProductCOOResolvers {
  export interface Resolvers {
    status?: StatusResolver /** Flight product status */;
    reservation?: ReservationResolver /** Reservation information */;
    price?: PriceResolver /** Price of the flight product */;
    oldPrice?: OldPriceResolver /** Original price of the flight product */;
    tax?: TaxResolver /** Tax of the flight product */;
    fare?: FareResolver /** Fare of the flight product */;
    pricesPerPassenger?: PricesPerPassengerResolver /** flight prices including fare and taxes per passenger */;
  }

  export type StatusResolver = Resolver<string | null>;
  export type ReservationResolver = Resolver<FP_ReservationCOO | null>;
  export type PriceResolver = Resolver<PriceCOO | null>;
  export type OldPriceResolver = Resolver<PriceCOO | null>;
  export type TaxResolver = Resolver<PriceCOO | null>;
  export type FareResolver = Resolver<PriceCOO | null>;
  export type PricesPerPassengerResolver = Resolver<(PricesPerPassengerCOO | null)[] | null>;
}
/** Prices including fare and taxes per passenger */
export namespace PricesPerPassengerCOOResolvers {
  export interface Resolvers {
    passengerType?: PassengerTypeResolver /** ADULT / CHILD / INFANT */;
    totalPrice?: TotalPriceResolver /** totalPrice */;
    fare?: FareResolver /** fare price */;
    totalTaxes?: TotalTaxesResolver /** totalTaxes */;
    taxes?: TaxesResolver /** flight taxes per passenger */;
  }

  export type PassengerTypeResolver = Resolver<string | null>;
  export type TotalPriceResolver = Resolver<PriceCOO | null>;
  export type FareResolver = Resolver<PriceCOO | null>;
  export type TotalTaxesResolver = Resolver<PriceCOO | null>;
  export type TaxesResolver = Resolver<(TaxCOO | null)[] | null>;
}
/** Specification of a specific case of a specific type of tax */
export namespace TaxCOOResolvers {
  export interface Resolvers {
    code?: CodeResolver /** Tax code, e.g. CJ for security charge */;
    name?: NameResolver /** Name of the tax code, e.g. security charge */;
    price?: PriceResolver /** Price of this tax */;
    costType?: CostTypeResolver /** e.g. NON_AIRLINE_COSTS */;
  }

  export type CodeResolver = Resolver<string | null>;
  export type NameResolver = Resolver<string | null>;
  export type PriceResolver = Resolver<PriceCOO | null>;
  export type CostTypeResolver = Resolver<string | null>;
}
/** Insurance Product */
export namespace InsuranceProductCOOResolvers {
  export interface Resolvers {
    type?: TypeResolver /** Type of the insurance */;
    price?: PriceResolver /** Price of the insurance product */;
    status?: StatusResolver /** Insurance status */;
  }

  export type TypeResolver = Resolver<string | null>;
  export type PriceResolver = Resolver<PriceCOO | null>;
  export type StatusResolver = Resolver<string | null>;
}
/** Meal product */
export namespace MealProductCOOResolvers {
  export interface Resolvers {
    status?: StatusResolver /** Status of the product, e.g QUOTED/ISSUED etc */;
    name?: NameResolver /** commercial name given to a meal of this type */;
    price?: PriceResolver /** price of this meal product */;
    oldPrice?: OldPriceResolver;
    segment?: SegmentResolver /** segment to which this meal applies */;
    passenger?: PassengerResolver /** passenger for which the meal was ordered */;
  }

  export type StatusResolver = Resolver<string | null>;
  export type NameResolver = Resolver<string | null>;
  export type PriceResolver = Resolver<PriceCOO | null>;
  export type OldPriceResolver = Resolver<PriceCOO | null>;
  export type SegmentResolver = Resolver<MP_SegmentCOO | null>;
  export type PassengerResolver = Resolver<MP_PassengerCOO | null>;
}
/** segment to which the meal product applies */
export namespace MP_SegmentCOOResolvers {
  export interface Resolvers {
    segmentId?: SegmentIdResolver /** identifier of the segment */;
    origin?: OriginResolver /** city name of the origin of this flight */;
    destination?: DestinationResolver /** city name of the destination of this flight */;
  }

  export type SegmentIdResolver = Resolver<string | null>;
  export type OriginResolver = Resolver<string | null>;
  export type DestinationResolver = Resolver<string | null>;
}
/** Passenger for whom the meal product was ordered */
export namespace MP_PassengerCOOResolvers {
  export interface Resolvers {
    firstName?: FirstNameResolver /** first name of the passenger for which the meal product was ordered */;
    lastName?: LastNameResolver /** last name of the passenger for which the meal product was ordered */;
    passengerId?: PassengerIdResolver;
  }

  export type FirstNameResolver = Resolver<string | null>;
  export type LastNameResolver = Resolver<string | null>;
  export type PassengerIdResolver = Resolver<string | null>;
}

export namespace EnvironmentalProductCOOResolvers {
  export interface Resolvers {
    productTypeText?: ProductTypeTextResolver /** Product's type text */;
    status?: StatusResolver /** Status code */;
    segment?: SegmentResolver;
    co2Kg?: Co2KgResolver;
    distanceKm?: DistanceKmResolver;
    fuelLiters?: FuelLitersResolver;
    passenger?: PassengerResolver;
    price?: PriceResolver;
    oldPrice?: OldPriceResolver;
  }

  export type ProductTypeTextResolver = Resolver<string | null>;
  export type StatusResolver = Resolver<string | null>;
  export type SegmentResolver = Resolver<SegmentCOO | null>;
  export type Co2KgResolver = Resolver<number | null>;
  export type DistanceKmResolver = Resolver<number | null>;
  export type FuelLitersResolver = Resolver<number | null>;
  export type PassengerResolver = Resolver<PassengerCOO | null>;
  export type PriceResolver = Resolver<PriceCOO | null>;
  export type OldPriceResolver = Resolver<PriceCOO | null>;
}

export namespace TimeToThinkProductCOOResolvers {
  export interface Resolvers {
    price?: PriceResolver;
    status?: StatusResolver;
    referenceId?: ReferenceIdResolver;
    endDateTime?: EndDateTimeResolver;
    endDateLabel?: EndDateLabelResolver;
    endTimeLabel?: EndTimeLabelResolver;
    perPassenger?: PerPassengerResolver;
  }

  export type PriceResolver = Resolver<PriceCOO | null>;
  export type StatusResolver = Resolver<string | null>;
  export type ReferenceIdResolver = Resolver<string | null>;
  export type EndDateTimeResolver = Resolver<string | null>;
  export type EndDateLabelResolver = Resolver<string | null>;
  export type EndTimeLabelResolver = Resolver<string | null>;
  export type PerPassengerResolver = Resolver<boolean | null>;
}
/** Overall payment data and details */
export namespace PaymentCOOResolvers {
  export interface Resolvers {
    status?: StatusResolver /** Payment status (INVALID, UNUSED, Accepted, Approved) */;
    confirmed?: ConfirmedResolver /** indicator if there is already a confirmed payment */;
    inProgress?: InProgressResolver /** Indicator if a payment is on progress or not */;
    amountToPay?: AmountToPayResolver /** Amount that needs to be paid */;
    paymentMethod?: PaymentMethodResolver /** Payment method */;
  }

  export type StatusResolver = Resolver<string | null>;
  export type ConfirmedResolver = Resolver<boolean | null>;
  export type InProgressResolver = Resolver<boolean | null>;
  export type AmountToPayResolver = Resolver<PriceCOO | null>;
  export type PaymentMethodResolver = Resolver<PaymentMethodCOO | null>;
}
/** different (credit)card types */
export namespace PaymentMethodCOOResolvers {
  export interface Resolvers {
    code?: CodeResolver /** payment type code */;
    name?: NameResolver /** payment type name */;
    additionalInfo?: AdditionalInfoResolver /** additional Info for payment */;
    imageReference?: ImageReferenceResolver /** Payment method icon href */;
    inputFields?: InputFieldsResolver /** inputFields for confirmation page */;
    ccNumber?: CcNumberResolver /** obscured card number */;
    ccExpirationDate?: CcExpirationDateResolver /** card expiration date */;
    paymentFee?: PaymentFeeResolver /** fixed payment fee */;
    maximumPaymentFee?: MaximumPaymentFeeResolver /** maximum payment fee */;
    directPayment?: DirectPaymentResolver /** is it direct payment */;
    dataCollectionPage?: DataCollectionPageResolver /** dataCollectionPage boolean to see if a DCP page is needed */;
    binInvalid?: BinInvalidResolver;
    allowedCurrencies?: AllowedCurrenciesResolver /** the allowed currencies in case of MCP (Mult Currency Payment) */;
    value?: ValueResolver /** in case of using voucher this is the value of the voucher */;
    timeLimit?: TimeLimitResolver /** in case of using voucher this is the availability of the voucher */;
    _links?: _linksResolver /** additional link for some payment methods */;
  }

  export type CodeResolver = Resolver<string | null>;
  export type NameResolver = Resolver<string | null>;
  export type AdditionalInfoResolver = Resolver<string | null>;
  export type ImageReferenceResolver = Resolver<LinkCOO | null>;
  export type InputFieldsResolver = Resolver<(InputFieldsCOO | null)[] | null>;
  export type CcNumberResolver = Resolver<string | null>;
  export type CcExpirationDateResolver = Resolver<string | null>;
  export type PaymentFeeResolver = Resolver<PriceCOO | null>;
  export type MaximumPaymentFeeResolver = Resolver<PriceCOO | null>;
  export type DirectPaymentResolver = Resolver<boolean | null>;
  export type DataCollectionPageResolver = Resolver<boolean | null>;
  export type BinInvalidResolver = Resolver<boolean | null>;
  export type AllowedCurrenciesResolver = Resolver<(CodeName | null)[] | null>;
  export type ValueResolver = Resolver<PriceCOO | null>;
  export type TimeLimitResolver = Resolver<TimeLimitCOO | null>;
  export type _linksResolver = Resolver<AdditionalInfoLinksCOO | null>;
}
/** different (credit)card types */
export namespace LinkCOOResolvers {
  export interface Resolvers {
    href?: HrefResolver;
  }

  export type HrefResolver = Resolver<string | null>;
}
/** Input type for inputFields on payment/confirmation page */
export namespace InputFieldsCOOResolvers {
  export interface Resolvers {
    additionalInfo?: AdditionalInfoResolver /** additional info */;
    code?: CodeResolver /** inputfield code */;
    mandatory?: MandatoryResolver /** inputfield mandatory */;
    maxLength?: MaxLengthResolver /** maxLength input field */;
    minLength?: MinLengthResolver /** minLength input field */;
    name?: NameResolver /** inputfield name */;
    readOnly?: ReadOnlyResolver /** readOnly boolean */;
    regularExpression?: RegularExpressionResolver /** regular expression pattern */;
    type?: TypeResolver /** type of input field */;
    value?: ValueResolver /** possible prefilled value of input */;
  }

  export type AdditionalInfoResolver = Resolver<string | null>;
  export type CodeResolver = Resolver<string | null>;
  export type MandatoryResolver = Resolver<boolean | null>;
  export type MaxLengthResolver = Resolver<number | null>;
  export type MinLengthResolver = Resolver<number | null>;
  export type NameResolver = Resolver<string | null>;
  export type ReadOnlyResolver = Resolver<boolean | null>;
  export type RegularExpressionResolver = Resolver<string | null>;
  export type TypeResolver = Resolver<string | null>;
  export type ValueResolver = Resolver<string | null>;
}
/** TimeLimit */
export namespace TimeLimitCOOResolvers {
  export interface Resolvers {
    timeLimit?: TimeLimitResolver /** Time limit for vouchers */;
  }

  export type TimeLimitResolver = Resolver<string | null>;
}
/** additional Info Links */
export namespace AdditionalInfoLinksCOOResolvers {
  export interface Resolvers {
    additionalInfoUrl?: AdditionalInfoUrlResolver /** additionalInfoLinks */;
  }

  export type AdditionalInfoUrlResolver = Resolver<LinkCOO | null>;
}

export namespace ResidualValueDocumentCOOResolvers {
  export interface Resolvers {
    documentNumber?: DocumentNumberResolver;
    lastName?: LastNameResolver;
    type?: TypeResolver;
    value?: ValueResolver;
  }

  export type DocumentNumberResolver = Resolver<string | null>;
  export type LastNameResolver = Resolver<string | null>;
  export type TypeResolver = Resolver<string | null>;
  export type ValueResolver = Resolver<PriceCOO | null>;
}
/** Generic Warning Object */
export namespace GenericWarningCOOResolvers {
  export interface Resolvers {
    code?: CodeResolver /** Error/warning code */;
    description?: DescriptionResolver /** Description of the error/warning */;
    severity?: SeverityResolver /** Error/warning severity level */;
  }

  export type CodeResolver = Resolver<string | null>;
  export type DescriptionResolver = Resolver<string | null>;
  export type SeverityResolver = Resolver<string | null>;
}
/** Provides payment options for POS (CC only for now) */
export namespace PaymentOptionsCOOResolvers {
  export interface Resolvers {
    _warnings?: _warningsResolver /** Order API warnings array */;
    paymentGroups?: PaymentGroupsResolver /** PaymentGroups */;
    cyberSource?: CyberSourceResolver /** CyberSource input data for device 'fingerprint' security verification */;
    termsAndConditionsLinks?: TermsAndConditionsLinksResolver /** Order API terms and condition links */;
  }

  export type _warningsResolver = Resolver<(GenericWarningCOO | null)[] | null>;
  export type PaymentGroupsResolver = Resolver<(PaymentGroupCOO | null)[] | null>;
  export type CyberSourceResolver = Resolver<CyberSourceCOO | null>;
  export type TermsAndConditionsLinksResolver = Resolver<(KeyValueCOO | null)[] | null>;
}
/** Provides payment methods for POS (CC only for now) */
export namespace PaymentGroupCOOResolvers {
  export interface Resolvers {
    code?: CodeResolver /** paymentOption Code */;
    name?: NameResolver /** paymentOption Name */;
    additionalInfo?: AdditionalInfoResolver /** paymentOption additionalInfo */;
    imageReference?: ImageReferenceResolver;
    paymentFee?: PaymentFeeResolver;
    inputFields?: InputFieldsResolver /** inputFields for confirmation page */;
    paymentMethods?: PaymentMethodsResolver /** different payment methods */;
  }

  export type CodeResolver = Resolver<string | null>;
  export type NameResolver = Resolver<string | null>;
  export type AdditionalInfoResolver = Resolver<string | null>;
  export type ImageReferenceResolver = Resolver<LinkCOO | null>;
  export type PaymentFeeResolver = Resolver<PriceCOO | null>;
  export type InputFieldsResolver = Resolver<(InputFieldsCOO | null)[] | null>;
  export type PaymentMethodsResolver = Resolver<(PaymentMethodCOO | null)[] | null>;
}
/** CyberSource input data for device 'fingerprint' security verification */
export namespace CyberSourceCOOResolvers {
  export interface Resolvers {
    orgId?: OrgIdResolver /** Organization Id */;
    merchantId?: MerchantIdResolver /** Merchant Id */;
    sessionId?: SessionIdResolver /** Session Id */;
  }

  export type OrgIdResolver = Resolver<string>;
  export type MerchantIdResolver = Resolver<string>;
  export type SessionIdResolver = Resolver<string>;
}
/** KeyValueCOO */
export namespace KeyValueCOOResolvers {
  export interface Resolvers {
    key?: KeyResolver /** KeyValue key */;
    value?: ValueResolver /** KeyValue value */;
  }

  export type KeyResolver = Resolver<string | null>;
  export type ValueResolver = Resolver<string | null>;
}
/** Information aiding the construction of a form with passenger input fields */
export namespace PassengerFieldsCOOResolvers {
  export interface Resolvers {
    passengers?: PassengersResolver /** list of initialised passengers as a starting point for the id page passenger entry form */;
    inputFieldValueLists?: InputFieldValueListsResolver;
    locationSpecificTexts?: LocationSpecificTextsResolver /** location specific texts for some destinations */;
    customer?: CustomerResolver;
  }

  export type PassengersResolver = Resolver<(PF_PassengerCOO | null)[] | null>;
  export type InputFieldValueListsResolver = Resolver<(CommonInputFieldValueListCOO | null)[] | null>;
  export type LocationSpecificTextsResolver = Resolver<(string | null)[] | null>;
  export type CustomerResolver = Resolver<PF_CustomerCOO | null>;
}
/** Input type for a Passenger part of the id page entry form */
export namespace PF_PassengerCOOResolvers {
  export interface Resolvers {
    label?: LabelResolver;
    passengerId?: PassengerIdResolver;
    passengerType?: PassengerTypeResolver;
    personalDetails?: PersonalDetailsResolver;
    contactDetails?: ContactDetailsResolver;
  }

  export type LabelResolver = Resolver<string | null>;
  export type PassengerIdResolver = Resolver<string | null>;
  export type PassengerTypeResolver = Resolver<string | null>;
  export type PersonalDetailsResolver = Resolver<JsonData | null>;
  export type ContactDetailsResolver = Resolver<JsonData | null>;
}

export namespace CommonInputFieldValueListCOOResolvers {
  export interface Resolvers {
    code?: CodeResolver;
    inputFieldValues?: InputFieldValuesResolver;
  }

  export type CodeResolver = Resolver<string | null>;
  export type InputFieldValuesResolver = Resolver<(CommonInputFieldValueListValuesCOO | null)[] | null>;
}

export namespace CommonInputFieldValueListValuesCOOResolvers {
  export interface Resolvers {
    value?: ValueResolver;
    name?: NameResolver;
  }

  export type ValueResolver = Resolver<string | null>;
  export type NameResolver = Resolver<string | null>;
}
/** Input type for the customer part of the id page entry form (i.e. the passenger data of a logged in customer) */
export namespace PF_CustomerCOOResolvers {
  export interface Resolvers {
    label?: LabelResolver;
    passengerType?: PassengerTypeResolver;
    personalDetails?: PersonalDetailsResolver;
    contactDetails?: ContactDetailsResolver;
    customerProfileReferenceId?: CustomerProfileReferenceIdResolver;
  }

  export type LabelResolver = Resolver<string | null>;
  export type PassengerTypeResolver = Resolver<string | null>;
  export type PersonalDetailsResolver = Resolver<JsonData | null>;
  export type ContactDetailsResolver = Resolver<JsonData | null>;
  export type CustomerProfileReferenceIdResolver = Resolver<string | null>;
}

export namespace CartProductsCOOResolvers {
  export interface Resolvers {
    cart?: CartResolver;
  }

  export type CartResolver = Resolver<(CartProductCOO | null)[] | null>;
}

export namespace CartProductCOOResolvers {
  export interface Resolvers {
    productClass?: ProductClassResolver;
    code?: CodeResolver;
    name?: NameResolver;
    productType?: ProductTypeResolver;
    insuranceOffers?: InsuranceOffersResolver;
    productId?: ProductIdResolver;
  }

  export type ProductClassResolver = Resolver<string | null>;
  export type CodeResolver = Resolver<string | null>;
  export type NameResolver = Resolver<string | null>;
  export type ProductTypeResolver = Resolver<string | null>;
  export type InsuranceOffersResolver = Resolver<(InsuranceOfferThirdPartyAncillariesCOO | null)[] | null>;
  export type ProductIdResolver = Resolver<string | null>;
}

export namespace InsuranceOfferThirdPartyAncillariesCOOResolvers {
  export interface Resolvers {
    productId?: ProductIdResolver /** required for posting a new product */;
    type?: TypeResolver;
    code?: CodeResolver;
    name?: NameResolver;
    productCode?: ProductCodeResolver;
    endDate?: EndDateResolver;
    startDate?: StartDateResolver;
    passengerId?: PassengerIdResolver;
    prices?: PricesResolver;
    insuranceTypeCode?: InsuranceTypeCodeResolver;
    amountToInsure?: AmountToInsureResolver;
    currencyCode?: CurrencyCodeResolver;
    description?: DescriptionResolver;
    termsAndConditionsUrl?: TermsAndConditionsUrlResolver;
  }

  export type ProductIdResolver = Resolver<string | null>;
  export type TypeResolver = Resolver<string | null>;
  export type CodeResolver = Resolver<string | null>;
  export type NameResolver = Resolver<string | null>;
  export type ProductCodeResolver = Resolver<string | null>;
  export type EndDateResolver = Resolver<string | null>;
  export type StartDateResolver = Resolver<string | null>;
  export type PassengerIdResolver = Resolver<string | null>;
  export type PricesResolver = Resolver<(PriceCOO | null)[] | null>;
  export type InsuranceTypeCodeResolver = Resolver<string | null>;
  export type AmountToInsureResolver = Resolver<number | null>;
  export type CurrencyCodeResolver = Resolver<string | null>;
  export type DescriptionResolver = Resolver<string | null>;
  export type TermsAndConditionsUrlResolver = Resolver<string | null>;
}
/** Offered Products information */
export namespace OfferedProductsCOOResolvers {
  export interface Resolvers {
    ancillaries?: AncillariesResolver;
    thirdPartyAncillaries?: ThirdPartyAncillariesResolver;
    carServiceThirdPartyAncillaries?: CarServiceThirdPartyAncillariesResolver;
    _errors?: _errorsResolver;
  }

  export type AncillariesResolver = Resolver<(AncillariesCOO | null)[] | null>;
  export type ThirdPartyAncillariesResolver = Resolver<(InsuranceThirdPartyAncillariesCOO | null)[] | null>;
  export type CarServiceThirdPartyAncillariesResolver = Resolver<(CarServiceThirdPartyAncillariesCOO | null)[] | null>;
  export type _errorsResolver = Resolver<(GenericWarningCOO | null)[] | null>;
}
/** Ancillaries */
export namespace AncillariesCOOResolvers {
  export interface Resolvers {
    productClass?: ProductClassResolver /** product class */;
    name?: NameResolver /** Ancillary type name */;
    code?: CodeResolver /** Ancillary type code */;
    productType?: ProductTypeResolver /** Ancillary product type */;
    segment?: SegmentResolver /** flight segment */;
  }

  export type ProductClassResolver = Resolver<string | null>;
  export type NameResolver = Resolver<string | null>;
  export type CodeResolver = Resolver<string | null>;
  export type ProductTypeResolver = Resolver<string | null>;
  export type SegmentResolver = Resolver<SegmentCOO | null>;
}

export namespace InsuranceThirdPartyAncillariesCOOResolvers {
  export interface Resolvers {
    productClass?: ProductClassResolver;
    name?: NameResolver;
    productType?: ProductTypeResolver;
    insuranceOffers?: InsuranceOffersResolver;
  }

  export type ProductClassResolver = Resolver<string | null>;
  export type NameResolver = Resolver<string | null>;
  export type ProductTypeResolver = Resolver<string | null>;
  export type InsuranceOffersResolver = Resolver<(InsuranceOfferThirdPartyAncillariesCOO | null)[] | null>;
}

export namespace CarServiceThirdPartyAncillariesCOOResolvers {
  export interface Resolvers {
    productClass?: ProductClassResolver;
    name?: NameResolver /** Ancillary type name */;
    code?: CodeResolver /** Ancillary type code */;
    productType?: ProductTypeResolver /** Ancillary product type */;
    segment?: SegmentResolver /** flight segment */;
    deeplink?: DeeplinkResolver /** deeplink to third-party-ancillary */;
    widget?: WidgetResolver /** widget link for different devices */;
  }

  export type ProductClassResolver = Resolver<string | null>;
  export type NameResolver = Resolver<string | null>;
  export type CodeResolver = Resolver<string | null>;
  export type ProductTypeResolver = Resolver<string | null>;
  export type SegmentResolver = Resolver<SegmentCOO | null>;
  export type DeeplinkResolver = Resolver<string | null>;
  export type WidgetResolver = Resolver<(AncillaryWidgetCOO | null)[] | null>;
}
/** Ancillary Widgets */
export namespace AncillaryWidgetCOOResolvers {
  export interface Resolvers {
    name?: NameResolver /** Widget device name */;
    href?: HrefResolver /** Widgets img src */;
  }

  export type NameResolver = Resolver<string | null>;
  export type HrefResolver = Resolver<string | null>;
}

export namespace OrderV2Resolvers {
  export interface Resolvers {
    orderId?: OrderIdResolver /** Order id */;
    referenceFlightProduct?: ReferenceFlightProductResolver /** Reference Flight Product for check-in flow */;
    paidOptionList?: PaidOptionListResolver /** Paid Option (ancillary product) list */;
    productList?: ProductListResolver /** Product list */;
    totalPrice?: TotalPriceResolver /** Total price information */;
    paymentPrice?: PaymentPriceResolver /** Payment price information */;
    currencyConversionSurcharge?: CurrencyConversionSurchargeResolver /** Currency conversion surcharge */;
    totalBookingFee?: TotalBookingFeeResolver /** Total booking fee information */;
    totalPaymentFee?: TotalPaymentFeeResolver;
    termsAndConditions?: TermsAndConditionsResolver;
    channel?: ChannelResolver /** Order channel */;
    supportTimeFrame?: SupportTimeFrameResolver /** Order support time */;
    residualValue?: ResidualValueResolver;
    residualValueDocuments?: ResidualValueDocumentsResolver;
    ticketConditions?: TicketConditionsResolver /** Conditions for one of the connections of the ticket */;
    _warnings?: _warningsResolver /** Order API warningsMock array */;
    passengerFields?: PassengerFieldsResolver /** PassengerFields information */;
    paymentOptionsV2?: PaymentOptionsV2Resolver;
    payment?: PaymentResolver;
    cartProducts?: CartProductsResolver;
    offeredProducts?: OfferedProductsResolver /** ancillaries, in order api because it is combined with passenger detailsto decide to navigate to ancillaries (options) without an extra round trip */;
  }

  export type OrderIdResolver = Resolver<string | null>;
  export type ReferenceFlightProductResolver = Resolver<ReferenceFlightProductCOO | null>;
  export type PaidOptionListResolver = Resolver<(PaidOptionCOO | null)[] | null>;
  export type ProductListResolver = Resolver<ProductListCOO | null>;
  export type TotalPriceResolver = Resolver<PriceCOO | null>;
  export type PaymentPriceResolver = Resolver<PriceCOO | null>;
  export type CurrencyConversionSurchargeResolver = Resolver<PriceCOO | null>;
  export type TotalBookingFeeResolver = Resolver<PriceCOO | null>;
  export type TotalPaymentFeeResolver = Resolver<PriceCOO | null>;
  export type TermsAndConditionsResolver = Resolver<JsonData | null>;
  export type ChannelResolver = Resolver<string | null>;
  export type SupportTimeFrameResolver = Resolver<string | null>;
  export type ResidualValueResolver = Resolver<PriceCOO | null>;
  export type ResidualValueDocumentsResolver = Resolver<(ResidualValueDocumentCOO | null)[] | null>;
  export type TicketConditionsResolver = Resolver<TicketConditionsCOO | null>;
  export type _warningsResolver = Resolver<(GenericWarningCOO | null)[] | null>;
  export type PassengerFieldsResolver = Resolver<PassengerFieldsCOO | null, PassengerFieldsArgs>;
  export interface PassengerFieldsArgs {
    conversationStateId: UniqueId /** Conversation state id */;
  }

  export type PaymentOptionsV2Resolver = Resolver<PaymentOptionsV2 | null, PaymentOptionsV2Args>;
  export interface PaymentOptionsV2Args {
    orderId?: UniqueId | null;
    conversationStateId?: UniqueId | null;
    pnr?: string | null;
    name?: string | null;
  }

  export type PaymentResolver = Resolver<Payment | null, PaymentArgs>;
  export interface PaymentArgs {
    orderId?: UniqueId | null;
    conversationStateId?: UniqueId | null;
    pnr?: string | null;
    name?: string | null;
  }

  export type CartProductsResolver = Resolver<CartProductsCOO | null, CartProductsArgs>;
  export interface CartProductsArgs {
    conversationStateId: UniqueId;
  }

  export type OfferedProductsResolver = Resolver<OfferedProductsCOO | null, OfferedProductsArgs>;
  export interface OfferedProductsArgs {
    conversationStateId: UniqueId;
  }
}

export namespace PaymentOptionsV2Resolvers {
  export interface Resolvers {
    payload?: PayloadResolver;
  }

  export type PayloadResolver = Resolver<JsonData | null>;
}

export namespace PaymentResolvers {
  export interface Resolvers {
    paymentStatus?: PaymentStatusResolver;
    bankIdentificationNumber?: BankIdentificationNumberResolver;
    confirmed?: ConfirmedResolver;
    credits?: CreditsResolver;
    currency?: CurrencyResolver;
    discountCode?: DiscountCodeResolver;
    emailAddress?: EmailAddressResolver;
    miles?: MilesResolver;
    partial?: PartialResolver;
    inProgress?: InProgressResolver;
    unknown?: UnknownResolver;
    paymentGroup?: PaymentGroupResolver;
    paymentMethod?: PaymentMethodResolver;
    returnedAmount?: ReturnedAmountResolver;
    vouchers?: VouchersResolver;
    waitForFinalization?: WaitForFinalizationResolver;
  }

  export type PaymentStatusResolver = Resolver<PaymentStatus | null>;
  export type BankIdentificationNumberResolver = Resolver<BankIdentificationNumber | null>;
  export type ConfirmedResolver = Resolver<boolean | null>;
  export type CreditsResolver = Resolver<Credits | null>;
  export type CurrencyResolver = Resolver<Currency | null>;
  export type DiscountCodeResolver = Resolver<DiscountCode | null>;
  export type EmailAddressResolver = Resolver<string | null>;
  export type MilesResolver = Resolver<Miles | null>;
  export type PartialResolver = Resolver<boolean | null>;
  export type InProgressResolver = Resolver<boolean | null>;
  export type UnknownResolver = Resolver<boolean | null>;
  export type PaymentGroupResolver = Resolver<PaymentGroup | null>;
  export type PaymentMethodResolver = Resolver<PaymentMethod | null>;
  export type ReturnedAmountResolver = Resolver<Money | null>;
  export type VouchersResolver = Resolver<(Voucher | null)[] | null>;
  export type WaitForFinalizationResolver = Resolver<boolean | null>;
}

export namespace BankIdentificationNumberResolvers {
  export interface Resolvers {
    binNumber?: BinNumberResolver;
    invalid?: InvalidResolver;
    reason?: ReasonResolver;
  }

  export type BinNumberResolver = Resolver<string | null>;
  export type InvalidResolver = Resolver<boolean | null>;
  export type ReasonResolver = Resolver<string | null>;
}

export namespace CreditsResolvers {
  export interface Resolvers {
    label?: LabelResolver;
    membership?: MembershipResolver;
    reason?: ReasonResolver;
    balance?: BalanceResolver;
    amount?: AmountResolver;
    invalid?: InvalidResolver;
  }

  export type LabelResolver = Resolver<string | null>;
  export type MembershipResolver = Resolver<string | null>;
  export type ReasonResolver = Resolver<string | null>;
  export type BalanceResolver = Resolver<number | null>;
  export type AmountResolver = Resolver<number | null>;
  export type InvalidResolver = Resolver<boolean | null>;
}

export namespace CurrencyResolvers {
  export interface Resolvers {
    currencyCode?: CurrencyCodeResolver;
    invalid?: InvalidResolver;
    reason?: ReasonResolver;
  }

  export type CurrencyCodeResolver = Resolver<string | null>;
  export type InvalidResolver = Resolver<boolean | null>;
  export type ReasonResolver = Resolver<string | null>;
}

export namespace DiscountCodeResolvers {
  export interface Resolvers {
    label?: LabelResolver;
    code?: CodeResolver;
    value?: ValueResolver;
    reason?: ReasonResolver;
    title?: TitleResolver;
  }

  export type LabelResolver = Resolver<string | null>;
  export type CodeResolver = Resolver<string | null>;
  export type ValueResolver = Resolver<Money | null>;
  export type ReasonResolver = Resolver<string | null>;
  export type TitleResolver = Resolver<string | null>;
}

export namespace MoneyResolvers {
  export interface Resolvers {
    id?: IdResolver;
    amount?: AmountResolver;
    currencyCode?: CurrencyCodeResolver;
  }

  export type IdResolver = Resolver<string | null>;
  export type AmountResolver = Resolver<number | null>;
  export type CurrencyCodeResolver = Resolver<string | null>;
}

export namespace MilesResolvers {
  export interface Resolvers {
    label?: LabelResolver;
    membership?: MembershipResolver;
    balance?: BalanceResolver;
    amount?: AmountResolver;
    invalid?: InvalidResolver;
    reason?: ReasonResolver;
  }

  export type LabelResolver = Resolver<string | null>;
  export type MembershipResolver = Resolver<string | null>;
  export type BalanceResolver = Resolver<number | null>;
  export type AmountResolver = Resolver<number | null>;
  export type InvalidResolver = Resolver<boolean | null>;
  export type ReasonResolver = Resolver<string | null>;
}

export namespace PaymentGroupResolvers {
  export interface Resolvers {
    label?: LabelResolver;
    code?: CodeResolver;
    additionalInfo?: AdditionalInfoResolver;
    selected?: SelectedResolver;
    labelKey?: LabelKeyResolver;
    _links?: _linksResolver;
  }

  export type LabelResolver = Resolver<string | null>;
  export type CodeResolver = Resolver<string | null>;
  export type AdditionalInfoResolver = Resolver<string | null>;
  export type SelectedResolver = Resolver<boolean | null>;
  export type LabelKeyResolver = Resolver<string | null>;
  export type _linksResolver = Resolver<PaymentGroupLinks | null>;
}

export namespace PaymentGroupLinksResolvers {
  export interface Resolvers {
    image?: ImageResolver;
  }

  export type ImageResolver = Resolver<HalLink | null>;
}
/** generic link object: https://tools.ietf.org/html/draft-kelly-json-hal-08#section-5 */
export namespace HalLinkResolvers {
  export interface Resolvers {
    href?: HrefResolver;
    templated?: TemplatedResolver;
    type?: TypeResolver;
    deprecation?: DeprecationResolver;
    name?: NameResolver;
    profile?: ProfileResolver;
    title?: TitleResolver;
    hreflang?: HreflangResolver;
  }

  export type HrefResolver = Resolver<string | null>;
  export type TemplatedResolver = Resolver<boolean | null>;
  export type TypeResolver = Resolver<string | null>;
  export type DeprecationResolver = Resolver<string | null>;
  export type NameResolver = Resolver<string | null>;
  export type ProfileResolver = Resolver<string | null>;
  export type TitleResolver = Resolver<string | null>;
  export type HreflangResolver = Resolver<string | null>;
}

export namespace PaymentMethodResolvers {
  export interface Resolvers {
    additionalInfo?: AdditionalInfoResolver;
    allowedCurrencies?: AllowedCurrenciesResolver;
    amount?: AmountResolver;
    billingDetails?: BillingDetailsResolver;
    code?: CodeResolver;
    invalid?: InvalidResolver;
    label?: LabelResolver;
    paymentDetails?: PaymentDetailsResolver;
    paymentFee?: PaymentFeeResolver;
    preferenceId?: PreferenceIdResolver;
    timeLimit?: TimeLimitResolver;
    reason?: ReasonResolver;
    responseDetails?: ResponseDetailsResolver;
    saveAsPreference?: SaveAsPreferenceResolver;
    selected?: SelectedResolver;
    labelKey?: LabelKeyResolver;
    _links?: _linksResolver;
  }

  export type AdditionalInfoResolver = Resolver<string | null>;
  export type AllowedCurrenciesResolver = Resolver<JsonData | null>;
  export type AmountResolver = Resolver<Money | null>;
  export type BillingDetailsResolver = Resolver<BillingDetails | null>;
  export type CodeResolver = Resolver<string | null>;
  export type InvalidResolver = Resolver<boolean | null>;
  export type LabelResolver = Resolver<string | null>;
  export type PaymentDetailsResolver = Resolver<PaymentDetails | null>;
  export type PaymentFeeResolver = Resolver<PaymentFee | null>;
  export type PreferenceIdResolver = Resolver<string | null>;
  export type TimeLimitResolver = Resolver<string | null>;
  export type ReasonResolver = Resolver<string | null>;
  export type ResponseDetailsResolver = Resolver<ResponseDetails | null>;
  export type SaveAsPreferenceResolver = Resolver<boolean | null>;
  export type SelectedResolver = Resolver<boolean | null>;
  export type LabelKeyResolver = Resolver<string | null>;
  export type _linksResolver = Resolver<PaymentMethodLinks | null>;
}

export namespace BillingDetailsResolvers {
  export interface Resolvers {
    address?: AddressResolver;
    addressTitle?: AddressTitleResolver;
    addressExtraInfo?: AddressExtraInfoResolver;
    addressExtraInfoTitle?: AddressExtraInfoTitleResolver;
    city?: CityResolver;
    cityTitle?: CityTitleResolver;
    country?: CountryResolver;
    countryTitle?: CountryTitleResolver;
    county?: CountyResolver;
    countyTitle?: CountyTitleResolver;
    emailAddress?: EmailAddressResolver;
    emailAddressTitle?: EmailAddressTitleResolver;
    firstName?: FirstNameResolver;
    firstNameTitle?: FirstNameTitleResolver;
    houseNumber?: HouseNumberResolver;
    houseNumberTitle?: HouseNumberTitleResolver;
    phoneNumber?: PhoneNumberResolver;
    phoneNumberTitle?: PhoneNumberTitleResolver;
    lastName?: LastNameResolver;
    lastNameTitle?: LastNameTitleResolver;
    zipCode?: ZipCodeResolver;
    zipCodeTitle?: ZipCodeTitleResolver;
    schema?: SchemaResolver;
  }

  export type AddressResolver = Resolver<string | null>;
  export type AddressTitleResolver = Resolver<string | null>;
  export type AddressExtraInfoResolver = Resolver<string | null>;
  export type AddressExtraInfoTitleResolver = Resolver<string | null>;
  export type CityResolver = Resolver<string | null>;
  export type CityTitleResolver = Resolver<string | null>;
  export type CountryResolver = Resolver<string | null>;
  export type CountryTitleResolver = Resolver<string | null>;
  export type CountyResolver = Resolver<string | null>;
  export type CountyTitleResolver = Resolver<string | null>;
  export type EmailAddressResolver = Resolver<string | null>;
  export type EmailAddressTitleResolver = Resolver<string | null>;
  export type FirstNameResolver = Resolver<string | null>;
  export type FirstNameTitleResolver = Resolver<string | null>;
  export type HouseNumberResolver = Resolver<string | null>;
  export type HouseNumberTitleResolver = Resolver<string | null>;
  export type PhoneNumberResolver = Resolver<string | null>;
  export type PhoneNumberTitleResolver = Resolver<string | null>;
  export type LastNameResolver = Resolver<string | null>;
  export type LastNameTitleResolver = Resolver<string | null>;
  export type ZipCodeResolver = Resolver<string | null>;
  export type ZipCodeTitleResolver = Resolver<string | null>;
  export type SchemaResolver = Resolver<JsonData | null>;
}

export namespace PaymentDetailsResolvers {
  export interface Resolvers {
    bankCity?: BankCityResolver;
    bankCityTitle?: BankCityTitleResolver;
    binNumber?: BinNumberResolver;
    binNumberTitle?: BinNumberTitleResolver;
    creditCardNumber?: CreditCardNumberResolver;
    creditCardNumberTitle?: CreditCardNumberTitleResolver;
    creditCardVerificationCode?: CreditCardVerificationCodeResolver;
    creditCardVerificationCodeTitle?: CreditCardVerificationCodeTitleResolver;
    expiryDate?: ExpiryDateResolver;
    expiryDateTitle?: ExpiryDateTitleResolver;
    fiscalNumber?: FiscalNumberResolver;
    fiscalNumberTitle?: FiscalNumberTitleResolver;
    installments?: InstallmentsResolver;
    installmentsTitle?: InstallmentsTitleResolver;
    maskedCardNumber?: MaskedCardNumberResolver;
    maskedCardNumberTitle?: MaskedCardNumberTitleResolver;
    schema?: SchemaResolver;
  }

  export type BankCityResolver = Resolver<string | null>;
  export type BankCityTitleResolver = Resolver<string | null>;
  export type BinNumberResolver = Resolver<string | null>;
  export type BinNumberTitleResolver = Resolver<string | null>;
  export type CreditCardNumberResolver = Resolver<string | null>;
  export type CreditCardNumberTitleResolver = Resolver<string | null>;
  export type CreditCardVerificationCodeResolver = Resolver<string | null>;
  export type CreditCardVerificationCodeTitleResolver = Resolver<string | null>;
  export type ExpiryDateResolver = Resolver<string | null>;
  export type ExpiryDateTitleResolver = Resolver<string | null>;
  export type FiscalNumberResolver = Resolver<string | null>;
  export type FiscalNumberTitleResolver = Resolver<string | null>;
  export type InstallmentsResolver = Resolver<number | null>;
  export type InstallmentsTitleResolver = Resolver<string | null>;
  export type MaskedCardNumberResolver = Resolver<string | null>;
  export type MaskedCardNumberTitleResolver = Resolver<string | null>;
  export type SchemaResolver = Resolver<JsonData | null>;
}

export namespace PaymentFeeResolvers {
  export interface Resolvers {
    amount?: AmountResolver;
    currencyCode?: CurrencyCodeResolver;
  }

  export type AmountResolver = Resolver<number | null>;
  export type CurrencyCodeResolver = Resolver<string | null>;
}

export namespace ResponseDetailsResolvers {
  export interface Resolvers {
    bankAccountHolder?: BankAccountHolderResolver;
    bankAccountHolderTitle?: BankAccountHolderTitleResolver;
    bankAccountNumber?: BankAccountNumberResolver;
    bankAccountNumberTitle?: BankAccountNumberTitleResolver;
    bankAccountType?: BankAccountTypeResolver;
    bankName?: BankNameResolver;
    bankNameTitle?: BankNameTitleResolver;
    bankCity?: BankCityResolver;
    bankCityNameTitle?: BankCityNameTitleResolver;
    bankCountry?: BankCountryResolver;
    bankCountryTitle?: BankCountryTitleResolver;
    bankSpecialId?: BankSpecialIdResolver;
    bankSwift?: BankSwiftResolver;
    bankSwiftTitle?: BankSwiftTitleResolver;
    bankIban?: BankIbanResolver;
    bankIbanTitle?: BankIbanTitleResolver;
    bankNetfifsc?: BankNetfifscResolver;
    bankBillerId?: BankBillerIdResolver;
    paymentReference?: PaymentReferenceResolver;
    paymentReferenceTitle?: PaymentReferenceTitleResolver;
    customerPaymentReference?: CustomerPaymentReferenceResolver;
    schema?: SchemaResolver;
  }

  export type BankAccountHolderResolver = Resolver<string | null>;
  export type BankAccountHolderTitleResolver = Resolver<string | null>;
  export type BankAccountNumberResolver = Resolver<string | null>;
  export type BankAccountNumberTitleResolver = Resolver<string | null>;
  export type BankAccountTypeResolver = Resolver<string | null>;
  export type BankNameResolver = Resolver<string | null>;
  export type BankNameTitleResolver = Resolver<string | null>;
  export type BankCityResolver = Resolver<string | null>;
  export type BankCityNameTitleResolver = Resolver<string | null>;
  export type BankCountryResolver = Resolver<string | null>;
  export type BankCountryTitleResolver = Resolver<string | null>;
  export type BankSpecialIdResolver = Resolver<string | null>;
  export type BankSwiftResolver = Resolver<string | null>;
  export type BankSwiftTitleResolver = Resolver<string | null>;
  export type BankIbanResolver = Resolver<string | null>;
  export type BankIbanTitleResolver = Resolver<string | null>;
  export type BankNetfifscResolver = Resolver<string | null>;
  export type BankBillerIdResolver = Resolver<string | null>;
  export type PaymentReferenceResolver = Resolver<string | null>;
  export type PaymentReferenceTitleResolver = Resolver<string | null>;
  export type CustomerPaymentReferenceResolver = Resolver<string | null>;
  export type SchemaResolver = Resolver<JsonData | null>;
}

export namespace PaymentMethodLinksResolvers {
  export interface Resolvers {
    image?: ImageResolver;
    additionalInfoUrl?: AdditionalInfoUrlResolver;
  }

  export type ImageResolver = Resolver<HalLink | null>;
  export type AdditionalInfoUrlResolver = Resolver<HalLink | null>;
}

export namespace VoucherResolvers {
  export interface Resolvers {
    label?: LabelResolver;
    identity?: IdentityResolver;
    number?: NumberResolver;
    title?: TitleResolver;
    readOnly?: ReadOnlyResolver;
    value?: ValueResolver;
    invalid?: InvalidResolver;
    reason?: ReasonResolver;
    maximumNumber?: MaximumNumberResolver;
  }

  export type LabelResolver = Resolver<string>;
  export type IdentityResolver = Resolver<string | null>;
  export type NumberResolver = Resolver<string | null>;
  export type TitleResolver = Resolver<string | null>;
  export type ReadOnlyResolver = Resolver<string | null>;
  export type ValueResolver = Resolver<Money | null>;
  export type InvalidResolver = Resolver<boolean | null>;
  export type ReasonResolver = Resolver<string | null>;
  export type MaximumNumberResolver = Resolver<number | null>;
}

export namespace DecryptedReservationCOOResolvers {
  export interface Resolvers {
    pnr?: PnrResolver;
    lastname?: LastnameResolver;
    conversationStateId?: ConversationStateIdResolver;
    orderId?: OrderIdResolver;
    market?: MarketResolver;
  }

  export type PnrResolver = Resolver<string | null>;
  export type LastnameResolver = Resolver<string | null>;
  export type ConversationStateIdResolver = Resolver<string | null>;
  export type OrderIdResolver = Resolver<string | null>;
  export type MarketResolver = Resolver<string | null>;
}

export namespace AncillariesANOResolvers {
  export interface Resolvers {
    shopId?: ShopIdResolver;
    errors?: ErrorsResolver;
    offers?: OffersResolver;
    passengers?: PassengersResolver;
    reservation?: ReservationResolver;
    itinerary?: ItineraryResolver;
    productPerks?: ProductPerksResolver;
    baggageAllowance?: BaggageAllowanceResolver;
    baggageOffers?: BaggageOffersResolver;
    hertzCarOffer?: HertzCarOfferResolver;
    tree4u?: Tree4uResolver;
    cart?: CartResolver;
  }

  export type ShopIdResolver = Resolver<string | null>;
  export type ErrorsResolver = Resolver<(AncillariesErrorsANO | null)[] | null>;
  export type OffersResolver = Resolver<(AncillariesOfferANO | null)[] | null>;
  export type PassengersResolver = Resolver<(AncillariesPassengerANO | null)[] | null>;
  export type ReservationResolver = Resolver<ReservationANO | null, ReservationArgs>;
  export interface ReservationArgs {
    reservationId?: string | null;
  }

  export type ItineraryResolver = Resolver<ItineraryANO | null, ItineraryArgs>;
  export interface ItineraryArgs {
    orderId?: string | null;
    checkinGroupId?: string | null;
    reservationId?: string | null;
  }

  export type ProductPerksResolver = Resolver<ProductPerksANO | null, ProductPerksArgs>;
  export interface ProductPerksArgs {
    segmentId: string;
    passengerId: string;
  }

  export type BaggageAllowanceResolver = Resolver<(BaggageAllowanceANO | null)[] | null>;
  export type BaggageOffersResolver = Resolver<(BaggageOfferANO | null)[] | null>;
  export type HertzCarOfferResolver = Resolver<(HertzCarOffer | null)[] | null>;
  export type Tree4uResolver = Resolver<Tree4uANO | null>;
  export type CartResolver = Resolver<CartANO | null>;
}

export namespace AncillariesErrorsANOResolvers {
  export interface Resolvers {
    code?: CodeResolver;
    description?: DescriptionResolver;
    segment?: SegmentResolver;
  }

  export type CodeResolver = Resolver<string | null>;
  export type DescriptionResolver = Resolver<string | null>;
  export type SegmentResolver = Resolver<AncillariesErrorsSegmentANO | null>;
}

export namespace AncillariesErrorsSegmentANOResolvers {
  export interface Resolvers {
    segmentId?: SegmentIdResolver;
  }

  export type SegmentIdResolver = Resolver<string | null>;
}

export namespace AncillariesOfferANOResolvers {
  export interface Resolvers {
    productClass?: ProductClassResolver;
    passengerId?: PassengerIdResolver;
    segmentId?: SegmentIdResolver;
  }

  export type ProductClassResolver = Resolver<string | null>;
  export type PassengerIdResolver = Resolver<string | null>;
  export type SegmentIdResolver = Resolver<string | null>;
}

export namespace AncillariesPassengerANOResolvers {
  export interface Resolvers {
    firstName?: FirstNameResolver;
    lastName?: LastNameResolver;
    passengerId?: PassengerIdResolver;
    passengerType?: PassengerTypeResolver;
    fullName?: FullNameResolver;
    displayMembership?: DisplayMembershipResolver;
    infant?: InfantResolver;
  }

  export type FirstNameResolver = Resolver<string | null>;
  export type LastNameResolver = Resolver<string | null>;
  export type PassengerIdResolver = Resolver<string | null>;
  export type PassengerTypeResolver = Resolver<string | null>;
  export type FullNameResolver = Resolver<string | null>;
  export type DisplayMembershipResolver = Resolver<string | null>;
  export type InfantResolver = Resolver<AncillariesPassengerANO | null>;
}

export namespace ReservationANOResolvers {
  export interface Resolvers {
    bookingCode?: BookingCodeResolver;
  }

  export type BookingCodeResolver = Resolver<string | null>;
}

export namespace ItineraryANOResolvers {
  export interface Resolvers {
    connections?: ConnectionsResolver;
    segments?: SegmentsResolver;
    segment?: SegmentResolver;
    assignedSeats?: AssignedSeatsResolver;
    nba?: NbaResolver;
  }

  export type ConnectionsResolver = Resolver<(ConnectionANO | null)[] | null>;
  export type SegmentsResolver = Resolver<(SegmentANO | null)[] | null>;
  export type SegmentResolver = Resolver<SegmentANO | null, SegmentArgs>;
  export interface SegmentArgs {
    segmentId?: string | null;
  }

  export type AssignedSeatsResolver = Resolver<(AssignedSeatANO | null)[] | null>;
  export type NbaResolver = Resolver<NbaANO | null>;
}

export namespace ConnectionANOResolvers {
  export interface Resolvers {
    connectionId?: ConnectionIdResolver;
    ordinal?: OrdinalResolver;
    departureDateTime?: DepartureDateTimeResolver;
    departureAirportCode?: DepartureAirportCodeResolver;
    departureLocationLong?: DepartureLocationLongResolver;
    departureLocationShort?: DepartureLocationShortResolver;
    departureCityName?: DepartureCityNameResolver;
    arrivalDateTime?: ArrivalDateTimeResolver;
    arrivalAirportCode?: ArrivalAirportCodeResolver;
    arrivalLocationLong?: ArrivalLocationLongResolver;
    arrivalLocationShort?: ArrivalLocationShortResolver;
    arrivalCityName?: ArrivalCityNameResolver;
    arrivalCountryName?: ArrivalCountryNameResolver;
    segments?: SegmentsResolver;
  }

  export type ConnectionIdResolver = Resolver<string | null>;
  export type OrdinalResolver = Resolver<number | null>;
  export type DepartureDateTimeResolver = Resolver<string | null>;
  export type DepartureAirportCodeResolver = Resolver<string | null>;
  export type DepartureLocationLongResolver = Resolver<string | null>;
  export type DepartureLocationShortResolver = Resolver<string | null>;
  export type DepartureCityNameResolver = Resolver<string | null>;
  export type ArrivalDateTimeResolver = Resolver<string | null>;
  export type ArrivalAirportCodeResolver = Resolver<string | null>;
  export type ArrivalLocationLongResolver = Resolver<string | null>;
  export type ArrivalLocationShortResolver = Resolver<string | null>;
  export type ArrivalCityNameResolver = Resolver<string | null>;
  export type ArrivalCountryNameResolver = Resolver<string | null>;
  export type SegmentsResolver = Resolver<(SegmentANO | null)[] | null>;
}

export namespace SegmentANOResolvers {
  export interface Resolvers {
    segmentId?: SegmentIdResolver;
    displayFlightNumber?: DisplayFlightNumberResolver;
    departureDateTime?: DepartureDateTimeResolver;
    departureAirportCode?: DepartureAirportCodeResolver;
    departureLocationLong?: DepartureLocationLongResolver;
    departureLocationShort?: DepartureLocationShortResolver;
    arrivalDateTime?: ArrivalDateTimeResolver;
    arrivalAirportCode?: ArrivalAirportCodeResolver;
    arrivalLocationLong?: ArrivalLocationLongResolver;
    arrivalLocationShort?: ArrivalLocationShortResolver;
  }

  export type SegmentIdResolver = Resolver<string | null>;
  export type DisplayFlightNumberResolver = Resolver<string | null>;
  export type DepartureDateTimeResolver = Resolver<string | null>;
  export type DepartureAirportCodeResolver = Resolver<string | null>;
  export type DepartureLocationLongResolver = Resolver<string | null>;
  export type DepartureLocationShortResolver = Resolver<string | null>;
  export type ArrivalDateTimeResolver = Resolver<string | null>;
  export type ArrivalAirportCodeResolver = Resolver<string | null>;
  export type ArrivalLocationLongResolver = Resolver<string | null>;
  export type ArrivalLocationShortResolver = Resolver<string | null>;
}
/** PassengerFlightDetails from CheckinAPI */
export namespace AssignedSeatANOResolvers {
  export interface Resolvers {
    passengerId?: PassengerIdResolver;
    segmentId?: SegmentIdResolver;
    seatNumber?: SeatNumberResolver;
    cabinClassName?: CabinClassNameResolver;
  }

  export type PassengerIdResolver = Resolver<string | null>;
  export type SegmentIdResolver = Resolver<string | null>;
  export type SeatNumberResolver = Resolver<string | null>;
  export type CabinClassNameResolver = Resolver<string | null>;
}

export namespace NbaANOResolvers {
  export interface Resolvers {
    product?: ProductResolver;
    feedback?: FeedbackResolver;
  }

  export type ProductResolver = Resolver<NbaProductANO | null>;
  export type FeedbackResolver = Resolver<NbaFeedbackANO | null>;
}

export namespace NbaProductANOResolvers {
  export interface Resolvers {
    productId?: ProductIdResolver;
    productClass?: ProductClassResolver;
    productType?: ProductTypeResolver;
    code?: CodeResolver;
    name?: NameResolver;
    prices?: PricesResolver;
    displayPrice?: DisplayPriceResolver;
    label?: LabelResolver /** NBA specifics */;
    segments?: SegmentsResolver;
    href?: HrefResolver;
    legendOrder?: LegendOrderResolver;
    numberOfAvailableProducts?: NumberOfAvailableProductsResolver;
    productPerks?: ProductPerksResolver;
  }

  export type ProductIdResolver = Resolver<string | null>;
  export type ProductClassResolver = Resolver<string | null>;
  export type ProductTypeResolver = Resolver<string | null>;
  export type CodeResolver = Resolver<string | null>;
  export type NameResolver = Resolver<string | null>;
  export type PricesResolver = Resolver<(PriceANO | null)[] | null>;
  export type DisplayPriceResolver = Resolver<DisplayPriceANO | null>;
  export type LabelResolver = Resolver<string | null>;
  export type SegmentsResolver = Resolver<(SegmentANO | null)[] | null>;
  export type HrefResolver = Resolver<string | null>;
  export type LegendOrderResolver = Resolver<string | null>;
  export type NumberOfAvailableProductsResolver = Resolver<string | null>;
  export type ProductPerksResolver = Resolver<ProductPerksANO | null, ProductPerksArgs>;
  export interface ProductPerksArgs {
    shopId?: string | null;
  }
}

export namespace PriceANOResolvers {
  export interface Resolvers {
    amount?: AmountResolver;
    basePriceAmount?: BasePriceAmountResolver;
    currencyCode?: CurrencyCodeResolver;
    description?: DescriptionResolver;
  }

  export type AmountResolver = Resolver<number | null>;
  export type BasePriceAmountResolver = Resolver<number | null>;
  export type CurrencyCodeResolver = Resolver<string | null>;
  export type DescriptionResolver = Resolver<string | null>;
}

export namespace DisplayPriceANOResolvers {
  export interface Resolvers {
    amount?: AmountResolver;
    currencyCode?: CurrencyCodeResolver;
  }

  export type AmountResolver = Resolver<number | null>;
  export type CurrencyCodeResolver = Resolver<string | null>;
}

export namespace ProductPerksANOResolvers {
  export interface Resolvers {
    displayFlightNumber?: DisplayFlightNumberResolver;
    products?: ProductsResolver;
  }

  export type DisplayFlightNumberResolver = Resolver<string | null>;
  export type ProductsResolver = Resolver<(ProductANO | null)[] | null>;
}

export namespace ProductANOResolvers {
  export interface Resolvers {
    name?: NameResolver;
    displayCode?: DisplayCodeResolver;
    imageCode?: ImageCodeResolver;
    perks?: PerksResolver;
    prices?: PricesResolver;
    displayPrice?: DisplayPriceResolver;
  }

  export type NameResolver = Resolver<string | null>;
  export type DisplayCodeResolver = Resolver<string | null>;
  export type ImageCodeResolver = Resolver<string | null>;
  export type PerksResolver = Resolver<(PerkANO | null)[] | null>;
  export type PricesResolver = Resolver<(PriceANO | null)[] | null>;
  export type DisplayPriceResolver = Resolver<DisplayPriceANO | null>;
}

export namespace PerkANOResolvers {
  export interface Resolvers {
    code?: CodeResolver;
    description?: DescriptionResolver;
  }

  export type CodeResolver = Resolver<string | null>;
  export type DescriptionResolver = Resolver<string | null>;
}

export namespace NbaFeedbackANOResolvers {
  export interface Resolvers {
    href?: HrefResolver;
  }

  export type HrefResolver = Resolver<string | null>;
}

export namespace BaggageAllowanceANOResolvers {
  export interface Resolvers {
    connectionId?: ConnectionIdResolver;
    passengerId?: PassengerIdResolver;
    unit?: UnitResolver;
    handBaggageAllowance?: HandBaggageAllowanceResolver;
    accessoryBaggageAllowance?: AccessoryBaggageAllowanceResolver;
    baseAllowance?: BaseAllowanceResolver;
    extraAllowance?: ExtraAllowanceResolver;
    totalAllowance?: TotalAllowanceResolver;
  }

  export type ConnectionIdResolver = Resolver<string | null>;
  export type PassengerIdResolver = Resolver<string | null>;
  export type UnitResolver = Resolver<string | null>;
  export type HandBaggageAllowanceResolver = Resolver<number | null>;
  export type AccessoryBaggageAllowanceResolver = Resolver<number | null>;
  export type BaseAllowanceResolver = Resolver<number | null>;
  export type ExtraAllowanceResolver = Resolver<number | null>;
  export type TotalAllowanceResolver = Resolver<number | null>;
}

export namespace BaggageOfferANOResolvers {
  export interface Resolvers {
    productId?: ProductIdResolver;
    passengerId?: PassengerIdResolver;
    connectionId?: ConnectionIdResolver;
    amount?: AmountResolver;
    unit?: UnitResolver;
    prices?: PricesResolver;
    displayPrice?: DisplayPriceResolver;
  }

  export type ProductIdResolver = Resolver<string | null>;
  export type PassengerIdResolver = Resolver<string | null>;
  export type ConnectionIdResolver = Resolver<string | null>;
  export type AmountResolver = Resolver<number | null>;
  export type UnitResolver = Resolver<string | null>;
  export type PricesResolver = Resolver<(PriceANO | null)[] | null>;
  export type DisplayPriceResolver = Resolver<DisplayPriceANO | null>;
}

export namespace HertzCarOfferResolvers {
  export interface Resolvers {
    deeplink?: DeeplinkResolver /** deeplink to third-party-ancillary */;
    widget?: WidgetResolver /** widget link for different devices */;
  }

  export type DeeplinkResolver = Resolver<string | null>;
  export type WidgetResolver = Resolver<(AncillaryWidget | null)[] | null>;
}
/** Ancillary Widgets */
export namespace AncillaryWidgetResolvers {
  export interface Resolvers {
    name?: NameResolver /** Widget device name */;
    href?: HrefResolver /** Widgets img src */;
  }

  export type NameResolver = Resolver<string | null>;
  export type HrefResolver = Resolver<string | null>;
}

export namespace Tree4uANOResolvers {
  export interface Resolvers {
    offers?: OffersResolver;
    currencyCode?: CurrencyCodeResolver;
    content?: ContentResolver;
  }

  export type OffersResolver = Resolver<(Tree4uOfferANO | null)[] | null>;
  export type CurrencyCodeResolver = Resolver<string | null>;
  export type ContentResolver = Resolver<Tree4uContentANO | null>;
}

export namespace Tree4uOfferANOResolvers {
  export interface Resolvers {
    productId?: ProductIdResolver;
    passengerId?: PassengerIdResolver;
  }

  export type ProductIdResolver = Resolver<string | null>;
  export type PassengerIdResolver = Resolver<string | null>;
}

export namespace Tree4uContentANOResolvers {
  export interface Resolvers {
    main?: MainResolver;
    more?: MoreResolver;
  }

  export type MainResolver = Resolver<Tree4uMainContentANO | null>;
  export type MoreResolver = Resolver<Tree4uMoreContentANO | null>;
}

export namespace Tree4uMainContentANOResolvers {
  export interface Resolvers {
    title?: TitleResolver;
    text?: TextResolver;
    imageUrl?: ImageUrlResolver;
    termsAndConditions?: TermsAndConditionsResolver;
  }

  export type TitleResolver = Resolver<string | null>;
  export type TextResolver = Resolver<string | null>;
  export type ImageUrlResolver = Resolver<string | null>;
  export type TermsAndConditionsResolver = Resolver<string | null>;
}

export namespace Tree4uMoreContentANOResolvers {
  export interface Resolvers {
    text?: TextResolver;
    imageUrl?: ImageUrlResolver;
    who?: WhoResolver;
    projects?: ProjectsResolver;
    how?: HowResolver;
    why?: WhyResolver;
  }

  export type TextResolver = Resolver<string | null>;
  export type ImageUrlResolver = Resolver<string | null>;
  export type WhoResolver = Resolver<Tree4uAdditionalContentWhoANO | null>;
  export type ProjectsResolver = Resolver<Tree4uAdditionalContentProjectsANO | null>;
  export type HowResolver = Resolver<Tree4uAdditionalContentHowANO | null>;
  export type WhyResolver = Resolver<Tree4uAdditionalContentWhyANO | null>;
}

export namespace Tree4uAdditionalContentWhoANOResolvers {
  export interface Resolvers {
    title?: TitleResolver;
    text?: TextResolver;
  }

  export type TitleResolver = Resolver<string | null>;
  export type TextResolver = Resolver<string | null>;
}

export namespace Tree4uAdditionalContentProjectsANOResolvers {
  export interface Resolvers {
    title?: TitleResolver;
    examples?: ExamplesResolver;
  }

  export type TitleResolver = Resolver<string | null>;
  export type ExamplesResolver = Resolver<(Tree4uAdditionalContentProjectsExamplesANO | null)[] | null>;
}

export namespace Tree4uAdditionalContentProjectsExamplesANOResolvers {
  export interface Resolvers {
    text?: TextResolver;
  }

  export type TextResolver = Resolver<string | null>;
}

export namespace Tree4uAdditionalContentHowANOResolvers {
  export interface Resolvers {
    title?: TitleResolver;
    steps?: StepsResolver;
  }

  export type TitleResolver = Resolver<string | null>;
  export type StepsResolver = Resolver<(Tree4uAdditionalContentHowStepsANO | null)[] | null>;
}

export namespace Tree4uAdditionalContentHowStepsANOResolvers {
  export interface Resolvers {
    text?: TextResolver;
    imageUrl?: ImageUrlResolver;
  }

  export type TextResolver = Resolver<string | null>;
  export type ImageUrlResolver = Resolver<string | null>;
}

export namespace Tree4uAdditionalContentWhyANOResolvers {
  export interface Resolvers {
    title?: TitleResolver;
    text?: TextResolver;
  }

  export type TitleResolver = Resolver<string | null>;
  export type TextResolver = Resolver<string | null>;
}

export namespace CartANOResolvers {
  export interface Resolvers {
    summary?: SummaryResolver;
    products?: ProductsResolver;
  }

  export type SummaryResolver = Resolver<(CartSummaryANO | null)[] | null>;
  export type ProductsResolver = Resolver<(CartProductANO | null)[] | null>;
}

export namespace CartSummaryANOResolvers {
  export interface Resolvers {
    type?: TypeResolver;
    productClass?: ProductClassResolver;
    count?: CountResolver;
    totalPrice?: TotalPriceResolver;
  }

  export type TypeResolver = Resolver<string | null>;
  export type ProductClassResolver = Resolver<string | null>;
  export type CountResolver = Resolver<number | null>;
  export type TotalPriceResolver = Resolver<PriceANO | null>;
}

export namespace SeatCartProductANOResolvers {
  export interface Resolvers {
    productId?: ProductIdResolver;
    productClass?: ProductClassResolver;
    productType?: ProductTypeResolver;
    code?: CodeResolver;
    name?: NameResolver;
    prices?: PricesResolver;
    displayPrice?: DisplayPriceResolver;
    passengerId?: PassengerIdResolver /** seat specifics */;
    sku?: SkuResolver;
    segmentId?: SegmentIdResolver;
    seatNumber?: SeatNumberResolver;
  }

  export type ProductIdResolver = Resolver<string | null>;
  export type ProductClassResolver = Resolver<string | null>;
  export type ProductTypeResolver = Resolver<string | null>;
  export type CodeResolver = Resolver<string | null>;
  export type NameResolver = Resolver<string | null>;
  export type PricesResolver = Resolver<(PriceANO | null)[] | null>;
  export type DisplayPriceResolver = Resolver<DisplayPriceANO | null>;
  export type PassengerIdResolver = Resolver<string | null>;
  export type SkuResolver = Resolver<string | null>;
  export type SegmentIdResolver = Resolver<string | null>;
  export type SeatNumberResolver = Resolver<string | null>;
}

export namespace BaggageCartProductANOResolvers {
  export interface Resolvers {
    productId?: ProductIdResolver;
    productClass?: ProductClassResolver;
    productType?: ProductTypeResolver;
    code?: CodeResolver;
    name?: NameResolver;
    prices?: PricesResolver;
    displayPrice?: DisplayPriceResolver;
    passengerId?: PassengerIdResolver /** baggage specifics */;
    bagCount?: BagCountResolver;
    connectionId?: ConnectionIdResolver;
    type?: TypeResolver;
    unit?: UnitResolver;
  }

  export type ProductIdResolver = Resolver<string | null>;
  export type ProductClassResolver = Resolver<string | null>;
  export type ProductTypeResolver = Resolver<string | null>;
  export type CodeResolver = Resolver<string | null>;
  export type NameResolver = Resolver<string | null>;
  export type PricesResolver = Resolver<(PriceANO | null)[] | null>;
  export type DisplayPriceResolver = Resolver<DisplayPriceANO | null>;
  export type PassengerIdResolver = Resolver<string | null>;
  export type BagCountResolver = Resolver<number | null>;
  export type ConnectionIdResolver = Resolver<string | null>;
  export type TypeResolver = Resolver<string | null>;
  export type UnitResolver = Resolver<string | null>;
}

export namespace EnvironmentalCartProductANOResolvers {
  export interface Resolvers {
    productId?: ProductIdResolver;
    productClass?: ProductClassResolver;
    productType?: ProductTypeResolver;
    code?: CodeResolver;
    name?: NameResolver;
    prices?: PricesResolver;
    displayPrice?: DisplayPriceResolver;
    passengerId?: PassengerIdResolver /** environmental specifics */;
  }

  export type ProductIdResolver = Resolver<string | null>;
  export type ProductClassResolver = Resolver<string | null>;
  export type ProductTypeResolver = Resolver<string | null>;
  export type CodeResolver = Resolver<string | null>;
  export type NameResolver = Resolver<string | null>;
  export type PricesResolver = Resolver<(PriceANO | null)[] | null>;
  export type DisplayPriceResolver = Resolver<DisplayPriceANO | null>;
  export type PassengerIdResolver = Resolver<string | null>;
}

export namespace FlightProductResponseResolvers {
  export interface Resolvers {
    id?: IdResolver;
  }

  export type IdResolver = Resolver<string | null>;
}

export namespace FlightOfferResponseResolvers {
  export interface Resolvers {
    directOutBounds?: DirectOutBoundsResolver;
    inDirectOutBounds?: InDirectOutBoundsResolver;
    directInBounds?: DirectInBoundsResolver;
    inDirectInBounds?: InDirectInBoundsResolver;
  }

  export type DirectOutBoundsResolver = Resolver<(FlightOfferRowType | null)[] | null>;
  export type InDirectOutBoundsResolver = Resolver<(FlightOfferRowType | null)[] | null>;
  export type DirectInBoundsResolver = Resolver<(FlightOfferRowType | null)[] | null>;
  export type InDirectInBoundsResolver = Resolver<(FlightOfferRowType | null)[] | null>;
}

export namespace FlightOfferRowTypeResolvers {
  export interface Resolvers {
    departureTime?: DepartureTimeResolver;
    arrivalTime?: ArrivalTimeResolver;
    destinationCode?: DestinationCodeResolver;
    originCode?: OriginCodeResolver;
    operatingFlight?: OperatingFlightResolver;
    operatingFlightLogo?: OperatingFlightLogoResolver;
    operatingCarrier?: OperatingCarrierResolver;
    flightNumber?: FlightNumberResolver;
    uniqueKey?: UniqueKeyResolver;
    duration?: DurationResolver;
    flightProducts?: FlightProductsResolver;
    isDirect?: IsDirectResolver;
    segments?: SegmentsResolver;
    transferStops?: TransferStopsResolver;
    flightDate?: FlightDateResolver;
    dayChange?: DayChangeResolver;
    dayChangeStr?: DayChangeStrResolver;
    isLowestFare?: IsLowestFareResolver;
    acvCode?: AcvCodeResolver;
    flightAmenityNumber?: FlightAmenityNumberResolver;
  }

  export type DepartureTimeResolver = Resolver<string | null>;
  export type ArrivalTimeResolver = Resolver<string | null>;
  export type DestinationCodeResolver = Resolver<string | null>;
  export type OriginCodeResolver = Resolver<string | null>;
  export type OperatingFlightResolver = Resolver<string | null>;
  export type OperatingFlightLogoResolver = Resolver<string | null>;
  export type OperatingCarrierResolver = Resolver<string | null>;
  export type FlightNumberResolver = Resolver<string | null>;
  export type UniqueKeyResolver = Resolver<string | null>;
  export type DurationResolver = Resolver<number | null>;
  export type FlightProductsResolver = Resolver<(FlightProductType | null)[] | null>;
  export type IsDirectResolver = Resolver<boolean | null>;
  export type SegmentsResolver = Resolver<(FlightOfferSegment | null)[] | null>;
  export type TransferStopsResolver = Resolver<string | null>;
  export type FlightDateResolver = Resolver<string | null>;
  export type DayChangeResolver = Resolver<number | null>;
  export type DayChangeStrResolver = Resolver<string | null>;
  export type IsLowestFareResolver = Resolver<boolean | null>;
  export type AcvCodeResolver = Resolver<string | null>;
  export type FlightAmenityNumberResolver = Resolver<string | null>;
}

export namespace FlightProductTypeResolvers {
  export interface Resolvers {
    cabinClass?: CabinClassResolver;
    displayPrice?: DisplayPriceResolver;
    currency?: CurrencyResolver;
    seatsLeft?: SeatsLeftResolver;
    fareBasis?: FareBasisResolver;
    isCorporateFare?: IsCorporateFareResolver;
    upsellsHateoasPath?: UpsellsHateoasPathResolver;
    splitPrice?: SplitPriceResolver;
    totalPrice?: TotalPriceResolver;
    splitTaxDetails?: SplitTaxDetailsResolver;
    totalTaxDetails?: TotalTaxDetailsResolver;
  }

  export type CabinClassResolver = Resolver<string | null>;
  export type DisplayPriceResolver = Resolver<number | null>;
  export type CurrencyResolver = Resolver<string | null>;
  export type SeatsLeftResolver = Resolver<number | null>;
  export type FareBasisResolver = Resolver<string | null>;
  export type IsCorporateFareResolver = Resolver<boolean | null>;
  export type UpsellsHateoasPathResolver = Resolver<string | null>;
  export type SplitPriceResolver = Resolver<number | null>;
  export type TotalPriceResolver = Resolver<number | null>;
  export type SplitTaxDetailsResolver = Resolver<TaxDetails | null>;
  export type TotalTaxDetailsResolver = Resolver<TaxDetails | null>;
}

export namespace TaxDetailsResolvers {
  export interface Resolvers {
    totalPrice?: TotalPriceResolver;
    pricePerPassengerTypes?: PricePerPassengerTypesResolver;
    currency?: CurrencyResolver;
  }

  export type TotalPriceResolver = Resolver<number | null>;
  export type PricePerPassengerTypesResolver = Resolver<(taxDetailsPricePerPassengerType | null)[] | null>;
  export type CurrencyResolver = Resolver<string | null>;
}

export namespace taxDetailsPricePerPassengerTypeResolvers {
  export interface Resolvers {
    passengerType?: PassengerTypeResolver;
    taxes?: TaxesResolver;
  }

  export type PassengerTypeResolver = Resolver<string | null>;
  export type TaxesResolver = Resolver<number | null>;
}

export namespace FlightOfferSegmentResolvers {
  export interface Resolvers {
    acvCode?: AcvCodeResolver;
    airportChangeWarning?: AirportChangeWarningResolver;
    amenities?: AmenitiesResolver;
    arrivalTime?: ArrivalTimeResolver;
    carrierName?: CarrierNameResolver;
    departureTime?: DepartureTimeResolver;
    destination?: DestinationResolver;
    destinationAirport?: DestinationAirportResolver;
    destinationCode?: DestinationCodeResolver;
    duration?: DurationResolver;
    equipmentCode?: EquipmentCodeResolver;
    equipmentName?: EquipmentNameResolver;
    flightAmenityNumber?: FlightAmenityNumberResolver;
    flightNumber?: FlightNumberResolver;
    highestPriority?: HighestPriorityResolver;
    marketingCarrier?: MarketingCarrierResolver;
    marketingFlightNumber?: MarketingFlightNumberResolver;
    operatingCarrier?: OperatingCarrierResolver;
    operatingCarrierLogo?: OperatingCarrierLogoResolver;
    origin?: OriginResolver;
    originAirport?: OriginAirportResolver;
    originCode?: OriginCodeResolver;
    ratingStatistics?: RatingStatisticsResolver;
    stopOvers?: StopOversResolver;
    transferTime?: TransferTimeResolver;
  }

  export type AcvCodeResolver = Resolver<string | null>;
  export type AirportChangeWarningResolver = Resolver<boolean | null>;
  export type AmenitiesResolver = Resolver<(FlightOfferAmenity | null)[] | null>;
  export type ArrivalTimeResolver = Resolver<string | null>;
  export type CarrierNameResolver = Resolver<string | null>;
  export type DepartureTimeResolver = Resolver<string | null>;
  export type DestinationResolver = Resolver<string | null>;
  export type DestinationAirportResolver = Resolver<string | null>;
  export type DestinationCodeResolver = Resolver<string | null>;
  export type DurationResolver = Resolver<number | null>;
  export type EquipmentCodeResolver = Resolver<string | null>;
  export type EquipmentNameResolver = Resolver<string | null>;
  export type FlightAmenityNumberResolver = Resolver<string | null>;
  export type FlightNumberResolver = Resolver<string | null>;
  export type HighestPriorityResolver = Resolver<boolean | null>;
  export type MarketingCarrierResolver = Resolver<string | null>;
  export type MarketingFlightNumberResolver = Resolver<string | null>;
  export type OperatingCarrierResolver = Resolver<string | null>;
  export type OperatingCarrierLogoResolver = Resolver<string | null>;
  export type OriginResolver = Resolver<string | null>;
  export type OriginAirportResolver = Resolver<string | null>;
  export type OriginCodeResolver = Resolver<string | null>;
  export type RatingStatisticsResolver = Resolver<FlightOfferRatingStatistics | null>;
  export type StopOversResolver = Resolver<(StopOver | null)[] | null>;
  export type TransferTimeResolver = Resolver<number | null>;
}

export namespace FlightOfferAmenityResolvers {
  export interface Resolvers {
    code?: CodeResolver;
    label?: LabelResolver;
    imageUrl?: ImageUrlResolver;
    category?: CategoryResolver;
    detail?: DetailResolver;
    flightAmenityNumber?: FlightAmenityNumberResolver;
    cabinClasses?: CabinClassesResolver;
  }

  export type CodeResolver = Resolver<string | null>;
  export type LabelResolver = Resolver<string | null>;
  export type ImageUrlResolver = Resolver<string | null>;
  export type CategoryResolver = Resolver<string | null>;
  export type DetailResolver = Resolver<string | null>;
  export type FlightAmenityNumberResolver = Resolver<string | null>;
  export type CabinClassesResolver = Resolver<(string | null)[] | null>;
}

export namespace FlightOfferRatingStatisticsResolvers {
  export interface Resolvers {
    averageRating?: AverageRatingResolver;
    numberOfRatings?: NumberOfRatingsResolver;
    ratingCategories?: RatingCategoriesResolver;
  }

  export type AverageRatingResolver = Resolver<number | null>;
  export type NumberOfRatingsResolver = Resolver<number | null>;
  export type RatingCategoriesResolver = Resolver<(FlightOfferRatingCategory | null)[] | null>;
}

export namespace FlightOfferRatingCategoryResolvers {
  export interface Resolvers {
    level?: LevelResolver;
    count?: CountResolver;
  }

  export type LevelResolver = Resolver<number | null>;
  export type CountResolver = Resolver<number | null>;
}

export namespace StopOverResolvers {
  export interface Resolvers {
    code?: CodeResolver;
    name?: NameResolver;
  }

  export type CodeResolver = Resolver<string | null>;
  export type NameResolver = Resolver<string | null>;
}

export namespace RelatedProductsResponseResolvers {
  export interface Resolvers {
    timeToThinkProduct?: TimeToThinkProductResolver;
  }

  export type TimeToThinkProductResolver = Resolver<TimeToThinkProduct | null>;
}

export namespace TimeToThinkProductResolvers {
  export interface Resolvers {
    price?: PriceResolver;
    endDateTime?: EndDateTimeResolver;
  }

  export type PriceResolver = Resolver<TimeToThinkPrice | null>;
  export type EndDateTimeResolver = Resolver<string | null>;
}

export namespace TimeToThinkPriceResolvers {
  export interface Resolvers {
    totalPrice?: TotalPriceResolver;
    currency?: CurrencyResolver;
  }

  export type TotalPriceResolver = Resolver<number | null>;
  export type CurrencyResolver = Resolver<string | null>;
}

export namespace BrandedFaresResponseResolvers {
  export interface Resolvers {
    upsells?: UpsellsResolver;
    upsellPush?: UpsellPushResolver;
  }

  export type UpsellsResolver = Resolver<(BrandedFare | null)[] | null>;
  export type UpsellPushResolver = Resolver<(UpsellPushType | null)[] | null>;
}

export namespace BrandedFareResolvers {
  export interface Resolvers {
    title?: TitleResolver;
    totalPrice?: TotalPriceResolver;
    currency?: CurrencyResolver;
    benefits?: BenefitsResolver;
    extraBenefits?: ExtraBenefitsResolver;
    passengerDetails?: PassengerDetailsResolver;
    shoppingCartId?: ShoppingCartIdResolver;
    cabin?: CabinResolver;
    availableOffersHateoasPath?: AvailableOffersHateoasPathResolver;
    lowestOffersHateoasLink?: LowestOffersHateoasLinkResolver;
    code?: CodeResolver;
    totalBookingFee?: TotalBookingFeeResolver;
    locationSpecificRemarks?: LocationSpecificRemarksResolver;
    splitPrice?: SplitPriceResolver;
    totalPriceReturn?: TotalPriceReturnResolver;
    splitTaxDetails?: SplitTaxDetailsResolver;
    returnTaxDetails?: ReturnTaxDetailsResolver;
    fareBasis?: FareBasisResolver;
    segments?: SegmentsResolver;
  }

  export type TitleResolver = Resolver<string | null>;
  export type TotalPriceResolver = Resolver<number | null>;
  export type CurrencyResolver = Resolver<string | null>;
  export type BenefitsResolver = Resolver<(BrandedFareBenefit | null)[] | null>;
  export type ExtraBenefitsResolver = Resolver<(BrandedFareBenefit | null)[] | null>;
  export type PassengerDetailsResolver = Resolver<(BrandedFarePassenger | null)[] | null>;
  export type ShoppingCartIdResolver = Resolver<string | null>;
  export type CabinResolver = Resolver<string | null>;
  export type AvailableOffersHateoasPathResolver = Resolver<string | null>;
  export type LowestOffersHateoasLinkResolver = Resolver<string | null>;
  export type CodeResolver = Resolver<string | null>;
  export type TotalBookingFeeResolver = Resolver<number | null>;
  export type LocationSpecificRemarksResolver = Resolver<(string | null)[] | null>;
  export type SplitPriceResolver = Resolver<number | null>;
  export type TotalPriceReturnResolver = Resolver<number | null>;
  export type SplitTaxDetailsResolver = Resolver<TaxDetails | null>;
  export type ReturnTaxDetailsResolver = Resolver<TaxDetails | null>;
  export type FareBasisResolver = Resolver<string | null>;
  export type SegmentsResolver = Resolver<(BrandedFareSegment | null)[] | null>;
}

export namespace BrandedFareBenefitResolvers {
  export interface Resolvers {
    iconUrl?: IconUrlResolver;
    benefitType?: BenefitTypeResolver;
    text?: TextResolver;
    detailsText?: DetailsTextResolver;
    allowedBeforeDeparture?: AllowedBeforeDepartureResolver;
    allowedAfterDeparture?: AllowedAfterDepartureResolver;
    beforeDepartureDetailsText?: BeforeDepartureDetailsTextResolver;
    afterDepartureDetailsText?: AfterDepartureDetailsTextResolver;
    taxRefundText?: TaxRefundTextResolver;
    refundText?: RefundTextResolver;
    extraCostsText?: ExtraCostsTextResolver;
    phoneAdminFeeText?: PhoneAdminFeeTextResolver;
    feeAfterTaxText?: FeeAfterTaxTextResolver;
    taxChangeText?: TaxChangeTextResolver;
    handBaggageDetailsText?: HandBaggageDetailsTextResolver;
    commercialText?: CommercialTextResolver;
    quantity?: QuantityResolver;
  }

  export type IconUrlResolver = Resolver<string | null>;
  export type BenefitTypeResolver = Resolver<string | null>;
  export type TextResolver = Resolver<string | null>;
  export type DetailsTextResolver = Resolver<string | null>;
  export type AllowedBeforeDepartureResolver = Resolver<boolean | null>;
  export type AllowedAfterDepartureResolver = Resolver<boolean | null>;
  export type BeforeDepartureDetailsTextResolver = Resolver<string | null>;
  export type AfterDepartureDetailsTextResolver = Resolver<string | null>;
  export type TaxRefundTextResolver = Resolver<string | null>;
  export type RefundTextResolver = Resolver<string | null>;
  export type ExtraCostsTextResolver = Resolver<string | null>;
  export type PhoneAdminFeeTextResolver = Resolver<string | null>;
  export type FeeAfterTaxTextResolver = Resolver<string | null>;
  export type TaxChangeTextResolver = Resolver<string | null>;
  export type HandBaggageDetailsTextResolver = Resolver<string | null>;
  export type CommercialTextResolver = Resolver<string | null>;
  export type QuantityResolver = Resolver<number | null>;
}

export namespace BrandedFarePassengerResolvers {
  export interface Resolvers {
    displayPrice?: DisplayPriceResolver;
    passengerType?: PassengerTypeResolver;
    totalPriceReturn?: TotalPriceReturnResolver;
    totalPrice?: TotalPriceResolver;
  }

  export type DisplayPriceResolver = Resolver<number | null>;
  export type PassengerTypeResolver = Resolver<string | null>;
  export type TotalPriceReturnResolver = Resolver<number | null>;
  export type TotalPriceResolver = Resolver<number | null>;
}

export namespace BrandedFareSegmentResolvers {
  export interface Resolvers {
    sellingClass?: SellingClassResolver;
  }

  export type SellingClassResolver = Resolver<string | null>;
}

export namespace UpsellPushTypeResolvers {
  export interface Resolvers {
    cabin?: CabinResolver;
    label?: LabelResolver;
    imageUpsell?: ImageUpsellResolver;
  }

  export type CabinResolver = Resolver<string | null>;
  export type LabelResolver = Resolver<string | null>;
  export type ImageUpsellResolver = Resolver<string | null>;
}

export namespace ReservationResolvers {
  export interface Resolvers {
    id?: IdResolver;
    refreshId?: RefreshIdResolver;
    contactDetails?: ContactDetailsResolver;
    itinerary?: ItineraryResolver;
    passengers?: PassengersResolver;
    ticketInfo?: TicketInfoResolver;
    reservationResourceId?: ReservationResourceIdResolver;
    invoiceUrl?: InvoiceUrlResolver;
  }

  export type IdResolver = Resolver<string | null>;
  export type RefreshIdResolver = Resolver<string | null>;
  export type ContactDetailsResolver = Resolver<ContactDetails | null>;
  export type ItineraryResolver = Resolver<Itinerary | null>;
  export type PassengersResolver = Resolver<(Passenger | null)[] | null>;
  export type TicketInfoResolver = Resolver<TicketInfo | null>;
  export type ReservationResourceIdResolver = Resolver<string | null>;
  export type InvoiceUrlResolver = Resolver<string | null>;
}

export namespace ContactDetailsResolvers {
  export interface Resolvers {
    emailAddress?: EmailAddressResolver;
  }

  export type EmailAddressResolver = Resolver<string | null>;
}

export namespace ItineraryResolvers {
  export interface Resolvers {
    type?: TypeResolver;
    connections?: ConnectionsResolver;
  }

  export type TypeResolver = Resolver<string | null>;
  export type ConnectionsResolver = Resolver<(Connection | null)[] | null>;
}

export namespace ConnectionResolvers {
  export interface Resolvers {
    originName?: OriginNameResolver;
    originCode?: OriginCodeResolver;
    destinationAirportCode?: DestinationAirportCodeResolver;
    destinationCityCode?: DestinationCityCodeResolver;
    destinationCityName?: DestinationCityNameResolver;
    connectionDepartureDate?: ConnectionDepartureDateResolver;
    connectionArrivalDate?: ConnectionArrivalDateResolver;
    segments?: SegmentsResolver;
  }

  export type OriginNameResolver = Resolver<string | null>;
  export type OriginCodeResolver = Resolver<string | null>;
  export type DestinationAirportCodeResolver = Resolver<string | null>;
  export type DestinationCityCodeResolver = Resolver<string | null>;
  export type DestinationCityNameResolver = Resolver<string | null>;
  export type ConnectionDepartureDateResolver = Resolver<string | null>;
  export type ConnectionArrivalDateResolver = Resolver<string | null>;
  export type SegmentsResolver = Resolver<(Segment | null)[] | null>;
}

export namespace SegmentResolvers {
  export interface Resolvers {
    id?: IdResolver;
    origin?: OriginResolver;
    destination?: DestinationResolver;
    flight?: FlightResolver;
    ancillaries?: AncillariesResolver;
  }

  export type IdResolver = Resolver<string | null>;
  export type OriginResolver = Resolver<Location | null>;
  export type DestinationResolver = Resolver<Location | null>;
  export type FlightResolver = Resolver<Flight | null>;
  export type AncillariesResolver = Resolver<SegmentAncillaries | null>;
}

export namespace LocationResolvers {
  export interface Resolvers {
    cityCode?: CityCodeResolver;
    cityName?: CityNameResolver;
    airportName?: AirportNameResolver;
    airportCode?: AirportCodeResolver;
  }

  export type CityCodeResolver = Resolver<string | null>;
  export type CityNameResolver = Resolver<string | null>;
  export type AirportNameResolver = Resolver<string | null>;
  export type AirportCodeResolver = Resolver<string | null>;
}

export namespace FlightResolvers {
  export interface Resolvers {
    cabinClass?: CabinClassResolver;
    carrierName?: CarrierNameResolver;
    carrierCode?: CarrierCodeResolver;
    duration?: DurationResolver;
    equipment?: EquipmentResolver;
    flightNumber?: FlightNumberResolver;
    haulType?: HaulTypeResolver;
    localScheduledDeparture?: LocalScheduledDepartureResolver;
    localScheduledArrival?: LocalScheduledArrivalResolver;
    scheduledDeparture?: ScheduledDepartureResolver;
    scheduledArrival?: ScheduledArrivalResolver;
    marketingAirlineCode?: MarketingAirlineCodeResolver;
    marketingFlightNumber?: MarketingFlightNumberResolver;
    transferTime?: TransferTimeResolver;
    stops?: StopsResolver;
  }

  export type CabinClassResolver = Resolver<string | null>;
  export type CarrierNameResolver = Resolver<string | null>;
  export type CarrierCodeResolver = Resolver<string | null>;
  export type DurationResolver = Resolver<string | null>;
  export type EquipmentResolver = Resolver<CodeName | null>;
  export type FlightNumberResolver = Resolver<string | null>;
  export type HaulTypeResolver = Resolver<string | null>;
  export type LocalScheduledDepartureResolver = Resolver<string | null>;
  export type LocalScheduledArrivalResolver = Resolver<string | null>;
  export type ScheduledDepartureResolver = Resolver<string | null>;
  export type ScheduledArrivalResolver = Resolver<string | null>;
  export type MarketingAirlineCodeResolver = Resolver<string | null>;
  export type MarketingFlightNumberResolver = Resolver<string | null>;
  export type TransferTimeResolver = Resolver<string | null>;
  export type StopsResolver = Resolver<(Stop | null)[] | null>;
}

export namespace StopResolvers {
  export interface Resolvers {
    cityName?: CityNameResolver;
    countryName?: CountryNameResolver;
    stopDuration?: StopDurationResolver;
  }

  export type CityNameResolver = Resolver<string | null>;
  export type CountryNameResolver = Resolver<string | null>;
  export type StopDurationResolver = Resolver<string | null>;
}

export namespace SegmentAncillariesResolvers {
  export interface Resolvers {
    seats?: SeatsResolver;
    baggage?: BaggageResolver;
  }

  export type SeatsResolver = Resolver<(Seats | null)[] | null>;
  export type BaggageResolver = Resolver<(Baggage | null)[] | null>;
}

export namespace SeatsResolvers {
  export interface Resolvers {
    seatClass?: SeatClassResolver;
    seatNumbers?: SeatNumbersResolver;
  }

  export type SeatClassResolver = Resolver<string | null>;
  export type SeatNumbersResolver = Resolver<(string | null)[] | null>;
}

export namespace BaggageResolvers {
  export interface Resolvers {
    count?: CountResolver;
    type?: TypeResolver;
  }

  export type CountResolver = Resolver<number | null>;
  export type TypeResolver = Resolver<string | null>;
}

export namespace PassengerResolvers {
  export interface Resolvers {
    firstName?: FirstNameResolver;
    lastName?: LastNameResolver;
    tierLevelName?: TierLevelNameResolver;
    type?: TypeResolver;
  }

  export type FirstNameResolver = Resolver<string | null>;
  export type LastNameResolver = Resolver<string | null>;
  export type TierLevelNameResolver = Resolver<string | null>;
  export type TypeResolver = Resolver<string | null>;
}

export namespace TicketInfoResolvers {
  export interface Resolvers {
    bookingCode?: BookingCodeResolver;
    paymentMethod?: PaymentMethodResolver;
    totalPrice?: TotalPriceResolver;
    insurance?: InsuranceResolver;
  }

  export type BookingCodeResolver = Resolver<string | null>;
  export type PaymentMethodResolver = Resolver<string | null>;
  export type TotalPriceResolver = Resolver<(Price | null)[] | null>;
  export type InsuranceResolver = Resolver<Insurance | null>;
}

export namespace PriceResolvers {
  export interface Resolvers {
    amount?: AmountResolver;
    currencyCode?: CurrencyCodeResolver;
  }

  export type AmountResolver = Resolver<number | null>;
  export type CurrencyCodeResolver = Resolver<string | null>;
}

export namespace InsuranceResolvers {
  export interface Resolvers {
    name?: NameResolver;
    contractNumber?: ContractNumberResolver;
  }

  export type NameResolver = Resolver<string | null>;
  export type ContractNumberResolver = Resolver<string | null>;
}

export namespace ReservationsResolvers {
  export interface Resolvers {
    trips?: TripsResolver;
  }

  export type TripsResolver = Resolver<(Trip | null)[] | null>;
}

export namespace TripResolvers {
  export interface Resolvers {
    type?: TypeResolver;
    bookingCode?: BookingCodeResolver;
    lastName?: LastNameResolver;
    departure?: DepartureResolver;
    arrival?: ArrivalResolver;
    scheduledDeparture?: ScheduledDepartureResolver;
    scheduledReturn?: ScheduledReturnResolver;
    nbrOfConnections?: NbrOfConnectionsResolver;
    historical?: HistoricalResolver;
  }

  export type TypeResolver = Resolver<string | null>;
  export type BookingCodeResolver = Resolver<string | null>;
  export type LastNameResolver = Resolver<string | null>;
  export type DepartureResolver = Resolver<Location | null>;
  export type ArrivalResolver = Resolver<Location | null>;
  export type ScheduledDepartureResolver = Resolver<string | null>;
  export type ScheduledReturnResolver = Resolver<string | null>;
  export type NbrOfConnectionsResolver = Resolver<string | null>;
  export type HistoricalResolver = Resolver<boolean | null>;
}
/** Checkin APIS object */
export namespace CheckinInformationCIOResolvers {
  export interface Resolvers {
    alternativeFlights?: AlternativeFlightsResolver /** Show the alternative flights if present */;
    checkInGroupId?: CheckInGroupIdResolver /** Check-in group ID */;
    checkInGroupSpecifications?: CheckInGroupSpecificationsResolver /** Availablity of (un)select return flight */;
    connections?: ConnectionsResolver /** Check in connection type */;
    defaultContactDetails?: DefaultContactDetailsResolver /** Reservations contact details */;
    documents?: DocumentsResolver /** Available documents for the checkin group */;
    errors?: ErrorsResolver /** errors type */;
    notifications?: NotificationsResolver /** show the notifications */;
    selectedForCheckinGroup?: SelectedForCheckinGroupResolver /** Selected check-in group type */;
    shopId?: ShopIdResolver /** Shop ID */;
    termsAndConditions?: TermsAndConditionsResolver /** Terms and Conditions information type */;
    thirdPartyName?: ThirdPartyNameResolver /** Name of third party */;
    thirdPartyRedirectLink?: ThirdPartyRedirectLinkResolver /** Redirect link of third party */;
    umnrMaxAge?: UmnrMaxAgeResolver /** Unaccompanied minor maximum age type */;
    _links?: _linksResolver /** various HATEOAS links available from checkin apis */;
  }

  export type AlternativeFlightsResolver = Resolver<AlternativeFlightsCIO | null>;
  export type CheckInGroupIdResolver = Resolver<string | null>;
  export type CheckInGroupSpecificationsResolver = Resolver<CheckInGroupSpecificationsCIO | null>;
  export type ConnectionsResolver = Resolver<(ConnectionsCIO | null)[] | null>;
  export type DefaultContactDetailsResolver = Resolver<(ContactDetailsCIO | null)[] | null>;
  export type DocumentsResolver = Resolver<(DocumentsCIO | null)[] | null>;
  export type ErrorsResolver = Resolver<(ErrorsCIO | null)[] | null>;
  export type NotificationsResolver = Resolver<(NotificationsCIO | null)[] | null>;
  export type SelectedForCheckinGroupResolver = Resolver<(SelectedForCheckinGroupCIO | null)[] | null>;
  export type ShopIdResolver = Resolver<string | null>;
  export type TermsAndConditionsResolver = Resolver<(TermsAndConditionsCIO | null)[] | null>;
  export type ThirdPartyNameResolver = Resolver<string | null>;
  export type ThirdPartyRedirectLinkResolver = Resolver<string | null>;
  export type UmnrMaxAgeResolver = Resolver<number | null>;
  export type _linksResolver = Resolver<LinksCIO | null>;
}
/** Description of the alternative flights */
export namespace AlternativeFlightsCIOResolvers {
  export interface Resolvers {
    notifications?: NotificationsResolver /** show the notifications */;
    _links?: _linksResolver /** various HATEOAS links available from checkin apis */;
    connections?: ConnectionsResolver /** Check in connection type */;
    errors?: ErrorsResolver;
  }

  export type NotificationsResolver = Resolver<(NotificationsCIO | null)[] | null>;
  export type _linksResolver = Resolver<LinksCIO | null>;
  export type ConnectionsResolver = Resolver<(ConnectionsCIO | null)[] | null>;
  export type ErrorsResolver = Resolver<(ErrorsCIO | null)[] | null>;
}
/** Description of the notifications */
export namespace NotificationsCIOResolvers {
  export interface Resolvers {
    name?: NameResolver /** showing the notifications */;
    text?: TextResolver;
    type?: TypeResolver;
  }

  export type NameResolver = Resolver<string | null>;
  export type TextResolver = Resolver<string | null>;
  export type TypeResolver = Resolver<string | null>;
}
/** Various HATEOAS links available from checkin apis */
export namespace LinksCIOResolvers {
  export interface Resolvers {
    addContactDetails?: AddContactDetailsResolver;
    alternativeFlightsForGoShow?: AlternativeFlightsForGoShowResolver;
    checkin?: CheckinResolver;
    delete?: DeleteResolver;
    deliveryOptions?: DeliveryOptionsResolver;
    self?: SelfResolver;
    shop?: ShopResolver;
    update?: UpdateResolver;
  }

  export type AddContactDetailsResolver = Resolver<HrefCIO | null>;
  export type AlternativeFlightsForGoShowResolver = Resolver<HrefCIO | null>;
  export type CheckinResolver = Resolver<HrefCIO | null>;
  export type DeleteResolver = Resolver<HrefCIO | null>;
  export type DeliveryOptionsResolver = Resolver<HrefCIO | null>;
  export type SelfResolver = Resolver<HrefCIO | null>;
  export type ShopResolver = Resolver<HrefCIO | null>;
  export type UpdateResolver = Resolver<HrefCIO | null>;
}
/** Various links available for HATEAOS */
export namespace HrefCIOResolvers {
  export interface Resolvers {
    href?: HrefResolver;
  }

  export type HrefResolver = Resolver<string | null>;
}
/** Description of the connections */
export namespace ConnectionsCIOResolvers {
  export interface Resolvers {
    id?: IdResolver;
    ordinal?: OrdinalResolver;
    duration?: DurationResolver;
    segments?: SegmentsResolver;
    itinerary?: ItineraryResolver;
    availabilityType?: AvailabilityTypeResolver;
    alternativeConnections?: AlternativeConnectionsResolver;
  }

  export type IdResolver = Resolver<string | null>;
  export type OrdinalResolver = Resolver<number | null>;
  export type DurationResolver = Resolver<string | null>;
  export type SegmentsResolver = Resolver<(SegmentsCIO | null)[] | null>;
  export type ItineraryResolver = Resolver<TypeCIO | null>;
  export type AvailabilityTypeResolver = Resolver<CodeNameCIO | null>;
  export type AlternativeConnectionsResolver = Resolver<(AlternativeConnectionsCIO | null)[] | null>;
}
/** Description of the segments */
export namespace SegmentsCIOResolvers {
  export interface Resolvers {
    ordinal?: OrdinalResolver;
    type?: TypeResolver;
    operatingFlightSegment?: OperatingFlightSegmentResolver;
    departure?: DepartureResolver;
    arrival?: ArrivalResolver;
  }

  export type OrdinalResolver = Resolver<number | null>;
  export type TypeResolver = Resolver<string | null>;
  export type OperatingFlightSegmentResolver = Resolver<OperatingFlightSegmentCIO | null>;
  export type DepartureResolver = Resolver<StationCIO | null>;
  export type ArrivalResolver = Resolver<StationCIO | null>;
}
/** Description of the operating flight */
export namespace OperatingFlightSegmentCIOResolvers {
  export interface Resolvers {
    id?: IdResolver;
    boardingDateTime?: BoardingDateTimeResolver;
    duration?: DurationResolver;
    estimatedLocalArrivalDateTime?: EstimatedLocalArrivalDateTimeResolver;
    estimatedLocalDepartureDateTime?: EstimatedLocalDepartureDateTimeResolver;
    scheduledLocalArrivalDateTime?: ScheduledLocalArrivalDateTimeResolver;
    scheduledLocalDepartureDateTime?: ScheduledLocalDepartureDateTimeResolver;
    estimatedLocalArrivalDateTimeTimestamp?: EstimatedLocalArrivalDateTimeTimestampResolver;
    estimatedLocalDepartureDateTimeTimestamp?: EstimatedLocalDepartureDateTimeTimestampResolver;
    scheduledLocalArrivalDateTimeTimestamp?: ScheduledLocalArrivalDateTimeTimestampResolver;
    scheduledLocalDepartureDateTimeTimestamp?: ScheduledLocalDepartureDateTimeTimestampResolver;
    operatingFlight?: OperatingFlightResolver;
    transferTime?: TransferTimeResolver;
    departureStation?: DepartureStationResolver;
  }

  export type IdResolver = Resolver<string | null>;
  export type BoardingDateTimeResolver = Resolver<string | null>;
  export type DurationResolver = Resolver<string | null>;
  export type EstimatedLocalArrivalDateTimeResolver = Resolver<string | null>;
  export type EstimatedLocalDepartureDateTimeResolver = Resolver<string | null>;
  export type ScheduledLocalArrivalDateTimeResolver = Resolver<string | null>;
  export type ScheduledLocalDepartureDateTimeResolver = Resolver<string | null>;
  export type EstimatedLocalArrivalDateTimeTimestampResolver = Resolver<number | null>;
  export type EstimatedLocalDepartureDateTimeTimestampResolver = Resolver<number | null>;
  export type ScheduledLocalArrivalDateTimeTimestampResolver = Resolver<number | null>;
  export type ScheduledLocalDepartureDateTimeTimestampResolver = Resolver<number | null>;
  export type OperatingFlightResolver = Resolver<OperatingFlightCIO | null>;
  export type TransferTimeResolver = Resolver<string | null>;
  export type DepartureStationResolver = Resolver<NameCIO | null>;
}
/** Simple generic object with number and carrier fields */
export namespace OperatingFlightCIOResolvers {
  export interface Resolvers {
    number?: NumberResolver;
    carrier?: CarrierResolver;
  }

  export type NumberResolver = Resolver<string | null>;
  export type CarrierResolver = Resolver<CodeNameCIO | null>;
}
/** Simple generic object with code and name fields */
export namespace CodeNameCIOResolvers {
  export interface Resolvers {
    code?: CodeResolver;
    name?: NameResolver;
  }

  export type CodeResolver = Resolver<string | null>;
  export type NameResolver = Resolver<string | null>;
}
/** Simple generic object with the name field */
export namespace NameCIOResolvers {
  export interface Resolvers {
    name?: NameResolver;
  }

  export type NameResolver = Resolver<string | null>;
}
/** Description of the station */
export namespace StationCIOResolvers {
  export interface Resolvers {
    airport?: AirportResolver;
  }

  export type AirportResolver = Resolver<AirportCIO | null>;
}
/** Description of the Airport */
export namespace AirportCIOResolvers {
  export interface Resolvers {
    IATACode?: IATACodeResolver;
    code?: CodeResolver;
    name?: NameResolver;
    city?: CityResolver;
  }

  export type IATACodeResolver = Resolver<string | null>;
  export type CodeResolver = Resolver<string | null>;
  export type NameResolver = Resolver<string | null>;
  export type CityResolver = Resolver<CityCIO | null>;
}
/** Description of the city */
export namespace CityCIOResolvers {
  export interface Resolvers {
    IATACode?: IATACodeResolver;
    code?: CodeResolver;
    name?: NameResolver;
    country?: CountryResolver;
  }

  export type IATACodeResolver = Resolver<string | null>;
  export type CodeResolver = Resolver<string | null>;
  export type NameResolver = Resolver<string | null>;
  export type CountryResolver = Resolver<CodeNameCIO | null>;
}
/** Simple generic object with the type field */
export namespace TypeCIOResolvers {
  export interface Resolvers {
    type?: TypeResolver;
  }

  export type TypeResolver = Resolver<string | null>;
}
/** Description of the alternative connections */
export namespace AlternativeConnectionsCIOResolvers {
  export interface Resolvers {
    id?: IdResolver;
    ordinal?: OrdinalResolver;
    duration?: DurationResolver;
    segments?: SegmentsResolver;
    availabilityType?: AvailabilityTypeResolver;
  }

  export type IdResolver = Resolver<string | null>;
  export type OrdinalResolver = Resolver<number | null>;
  export type DurationResolver = Resolver<string | null>;
  export type SegmentsResolver = Resolver<(SegmentsCIO | null)[] | null>;
  export type AvailabilityTypeResolver = Resolver<CodeNameCIO | null>;
}
/** Description of errors */
export namespace ErrorsCIOResolvers {
  export interface Resolvers {
    description?: DescriptionResolver;
    severityLevel?: SeverityLevelResolver;
    name?: NameResolver;
    errorInOutputPath?: ErrorInOutputPathResolver;
  }

  export type DescriptionResolver = Resolver<string | null>;
  export type SeverityLevelResolver = Resolver<string | null>;
  export type NameResolver = Resolver<string | null>;
  export type ErrorInOutputPathResolver = Resolver<string | null>;
}
/** Description of the multiple connections */
export namespace CheckInGroupSpecificationsCIOResolvers {
  export interface Resolvers {
    hasAlternativeFlights?: HasAlternativeFlightsResolver;
    hasGoShow?: HasGoShowResolver;
    hasMultipleConnections?: HasMultipleConnectionsResolver;
    hasSSCOP?: HasSSCOPResolver;
    isEligibleForCheckinGroup?: IsEligibleForCheckinGroupResolver;
    isRestricted?: IsRestrictedResolver;
    isUMNR?: IsUMNRResolver;
    restrictedConnectionId?: RestrictedConnectionIdResolver;
    errorDescription?: ErrorDescriptionResolver;
  }

  export type HasAlternativeFlightsResolver = Resolver<boolean | null>;
  export type HasGoShowResolver = Resolver<boolean | null>;
  export type HasMultipleConnectionsResolver = Resolver<boolean | null>;
  export type HasSSCOPResolver = Resolver<boolean | null>;
  export type IsEligibleForCheckinGroupResolver = Resolver<boolean | null>;
  export type IsRestrictedResolver = Resolver<boolean | null>;
  export type IsUMNRResolver = Resolver<boolean | null>;
  export type RestrictedConnectionIdResolver = Resolver<string | null>;
  export type ErrorDescriptionResolver = Resolver<string | null>;
}
/** Description of the contact details */
export namespace ContactDetailsCIOResolvers {
  export interface Resolvers {
    emailAddress?: EmailAddressResolver;
    phoneNumber?: PhoneNumberResolver;
  }

  export type EmailAddressResolver = Resolver<EmailAddressCIO | null>;
  export type PhoneNumberResolver = Resolver<PhoneNumberCIO | null>;
}
/** Description of the contact details */
export namespace EmailAddressCIOResolvers {
  export interface Resolvers {
    newEmailAddress?: NewEmailAddressResolver;
    oldEmailAddress?: OldEmailAddressResolver;
    _links?: _linksResolver;
  }

  export type NewEmailAddressResolver = Resolver<string | null>;
  export type OldEmailAddressResolver = Resolver<string | null>;
  export type _linksResolver = Resolver<LinksCIO | null>;
}
/** Description of phone numberCIO */
export namespace PhoneNumberCIOResolvers {
  export interface Resolvers {
    newPhoneNumber?: NewPhoneNumberResolver;
    oldPhoneNumber?: OldPhoneNumberResolver;
    type?: TypeResolver;
    _links?: _linksResolver;
  }

  export type NewPhoneNumberResolver = Resolver<string | null>;
  export type OldPhoneNumberResolver = Resolver<string | null>;
  export type TypeResolver = Resolver<CodeNameCIO | null>;
  export type _linksResolver = Resolver<LinksCIO | null>;
}

export namespace DocumentsCIOResolvers {
  export interface Resolvers {
    type?: TypeResolver;
    available?: AvailableResolver;
    notification?: NotificationResolver;
    errors?: ErrorsResolver;
  }

  export type TypeResolver = Resolver<string | null>;
  export type AvailableResolver = Resolver<(BoardingDocFormatCIO | null)[] | null>;
  export type NotificationResolver = Resolver<string | null>;
  export type ErrorsResolver = Resolver<(ErrorsCIO | null)[] | null>;
}
/** Simple generic object with type and deliveryAddresses fields */
export namespace BoardingDocFormatCIOResolvers {
  export interface Resolvers {
    type?: TypeResolver;
    deliveryAddresses?: DeliveryAddressesResolver;
  }

  export type TypeResolver = Resolver<string | null>;
  export type DeliveryAddressesResolver = Resolver<(TypeCIO | null)[] | null>;
}
/** Description of the check-in group */
export namespace SelectedForCheckinGroupCIOResolvers {
  export interface Resolvers {
    checkinDocuments?: CheckinDocumentsResolver;
    contactDetails?: ContactDetailsResolver;
    contactDetailsLinks?: ContactDetailsLinksResolver;
    contactDetailsRequired?: ContactDetailsRequiredResolver;
    dateOfBirth?: DateOfBirthResolver;
    dateOfBirthOrAgeConfirmationRequired?: DateOfBirthOrAgeConfirmationRequiredResolver;
    dateOfBirthTimestamp?: DateOfBirthTimestampResolver;
    deselectForCheckinProhibited?: DeselectForCheckinProhibitedResolver;
    firstName?: FirstNameResolver;
    gender?: GenderResolver;
    id?: IdResolver;
    infant?: InfantResolver;
    lastName?: LastNameResolver;
    memberships?: MembershipsResolver;
    passengerFlightDetails?: PassengerFlightDetailsResolver;
    reservation?: ReservationResolver;
    title?: TitleResolver;
    type?: TypeResolver;
    umnr?: UmnrResolver /** This part is coming from reservation module */;
    advancePassengerInformation?: AdvancePassengerInformationResolver /** Advance Passenger Information type */;
  }

  export type CheckinDocumentsResolver = Resolver<(CheckinDocumentCIO | null)[] | null>;
  export type ContactDetailsResolver = Resolver<(ContactDetailsCIO | null)[] | null>;
  export type ContactDetailsLinksResolver = Resolver<LinksCIO | null>;
  export type ContactDetailsRequiredResolver = Resolver<boolean | null>;
  export type DateOfBirthResolver = Resolver<string | null>;
  export type DateOfBirthOrAgeConfirmationRequiredResolver = Resolver<boolean | null>;
  export type DateOfBirthTimestampResolver = Resolver<number | null>;
  export type DeselectForCheckinProhibitedResolver = Resolver<boolean | null>;
  export type FirstNameResolver = Resolver<string | null>;
  export type GenderResolver = Resolver<CodeNameCIO | null>;
  export type IdResolver = Resolver<string | null>;
  export type InfantResolver = Resolver<InfantCIO | null>;
  export type LastNameResolver = Resolver<string | null>;
  export type MembershipsResolver = Resolver<(MembershipsCIO | null)[] | null>;
  export type PassengerFlightDetailsResolver = Resolver<(PassengerFlightDetailsCIO | null)[] | null>;
  export type ReservationResolver = Resolver<ReservationBookingCIO | null>;
  export type TitleResolver = Resolver<CodeNameCIO | null>;
  export type TypeResolver = Resolver<CodeNameCIO | null>;
  export type UmnrResolver = Resolver<(UMNR | null)[] | null>;
  export type AdvancePassengerInformationResolver = Resolver<AdvancePassengerInfoCIO | null>;
}
/** Description of the check-in group */
export namespace CheckinDocumentCIOResolvers {
  export interface Resolvers {
    boardingDoc?: BoardingDocResolver;
  }

  export type BoardingDocResolver = Resolver<BoardingDocCIO | null>;
}
/** Object representing a boarding document (boarding pass or check-in confirmation) */
export namespace BoardingDocCIOResolvers {
  export interface Resolvers {
    type?: TypeResolver;
    available?: AvailableResolver;
    notification?: NotificationResolver;
  }

  export type TypeResolver = Resolver<string | null>;
  export type AvailableResolver = Resolver<(BoardingDocFormatCIO | null)[] | null>;
  export type NotificationResolver = Resolver<string | null>;
}
/** Description of the infant group */
export namespace InfantCIOResolvers {
  export interface Resolvers {
    advancePassengerInformation?: AdvancePassengerInformationResolver;
    id?: IdResolver;
    dateOfBirthOrAgeConfirmationRequired?: DateOfBirthOrAgeConfirmationRequiredResolver;
    dateOfBirth?: DateOfBirthResolver;
    firstName?: FirstNameResolver;
    gender?: GenderResolver;
    lastName?: LastNameResolver;
    title?: TitleResolver;
    type?: TypeResolver;
    passengerFlightDetails?: PassengerFlightDetailsResolver;
    reservation?: ReservationResolver;
    deselectForCheckinProhibited?: DeselectForCheckinProhibitedResolver;
    checkinDocuments?: CheckinDocumentsResolver;
  }

  export type AdvancePassengerInformationResolver = Resolver<AdvancePassengerInfoCIO | null>;
  export type IdResolver = Resolver<string | null>;
  export type DateOfBirthOrAgeConfirmationRequiredResolver = Resolver<boolean | null>;
  export type DateOfBirthResolver = Resolver<string | null>;
  export type FirstNameResolver = Resolver<string | null>;
  export type GenderResolver = Resolver<CodeNameCIO | null>;
  export type LastNameResolver = Resolver<string | null>;
  export type TitleResolver = Resolver<CodeNameCIO | null>;
  export type TypeResolver = Resolver<CodeNameCIO | null>;
  export type PassengerFlightDetailsResolver = Resolver<(PassengerFlightDetailsCIO | null)[] | null>;
  export type ReservationResolver = Resolver<ReservationBookingCIO | null>;
  export type DeselectForCheckinProhibitedResolver = Resolver<boolean | null>;
  export type CheckinDocumentsResolver = Resolver<(CheckinDocumentCIO | null)[] | null>;
}
/** Advance Passenger Info Output type */
export namespace AdvancePassengerInfoCIOResolvers {
  export interface Resolvers {
    nationality?: NationalityResolver;
    advancePassengerInformationRequirements?: AdvancePassengerInformationRequirementsResolver;
    addresses?: AddressesResolver;
    apiDocuments?: ApiDocumentsResolver;
  }

  export type NationalityResolver = Resolver<CodeNameCIO | null>;
  export type AdvancePassengerInformationRequirementsResolver = Resolver<AdvancePassengerInformationRequirementsCIO | null>;
  export type AddressesResolver = Resolver<(AdvancePassengerInfoAddressCIO | null)[] | null>;
  export type ApiDocumentsResolver = Resolver<(APISDocumentCIO | null)[] | null>;
}
/** Advance Passenger Information Requirements Type */
export namespace AdvancePassengerInformationRequirementsCIOResolvers {
  export interface Resolvers {
    nationalityRequired?: NationalityRequiredResolver;
  }

  export type NationalityRequiredResolver = Resolver<boolean | null>;
}
/** Advance Passenger Info Address Output type */
export namespace AdvancePassengerInfoAddressCIOResolvers {
  export interface Resolvers {
    type?: TypeResolver;
    city?: CityResolver;
    postalCode?: PostalCodeResolver;
    streetAndHouseNumber?: StreetAndHouseNumberResolver;
    stateOrProvince?: StateOrProvinceResolver;
    country?: CountryResolver;
    applicableForCountry?: ApplicableForCountryResolver;
  }

  export type TypeResolver = Resolver<CodeNameCIO | null>;
  export type CityResolver = Resolver<ValueRequiredCIO | null>;
  export type PostalCodeResolver = Resolver<ValueRequiredCIO | null>;
  export type StreetAndHouseNumberResolver = Resolver<ValueRequiredCIO | null>;
  export type StateOrProvinceResolver = Resolver<ValueRequiredCIO | null>;
  export type CountryResolver = Resolver<ValueRequiredCIO | null>;
  export type ApplicableForCountryResolver = Resolver<CodeNameRequiredCIO | null>;
}
/** Simple generic object with a value field */
export namespace ValueRequiredCIOResolvers {
  export interface Resolvers {
    value?: ValueResolver;
    required?: RequiredResolver;
  }

  export type ValueResolver = Resolver<string | null>;
  export type RequiredResolver = Resolver<boolean | null>;
}
/** Simple generic object with code and name fields */
export namespace CodeNameRequiredCIOResolvers {
  export interface Resolvers {
    code?: CodeResolver;
    name?: NameResolver;
    required?: RequiredResolver;
  }

  export type CodeResolver = Resolver<string | null>;
  export type NameResolver = Resolver<string | null>;
  export type RequiredResolver = Resolver<boolean | null>;
}
/** APIS Document Type Output type */
export namespace APISDocumentCIOResolvers {
  export interface Resolvers {
    travelDocument?: TravelDocumentResolver;
  }

  export type TravelDocumentResolver = Resolver<TravelDocumentCIO | null>;
}
/** Travel Document Output type */
export namespace TravelDocumentCIOResolvers {
  export interface Resolvers {
    type?: TypeResolver;
    expiryDate?: ExpiryDateResolver;
    expiryDateTimestamp?: ExpiryDateTimestampResolver;
    givenNames?: GivenNamesResolver;
    surname?: SurnameResolver;
    number?: NumberResolver;
    countryOfIssue?: CountryOfIssueResolver;
    sourceOfDataType?: SourceOfDataTypeResolver;
    apiDocumentRequirements?: ApiDocumentRequirementsResolver;
    additionalApiDocuments?: AdditionalApiDocumentsResolver;
  }

  export type TypeResolver = Resolver<CodeNameCIO | null>;
  export type ExpiryDateResolver = Resolver<string | null>;
  export type ExpiryDateTimestampResolver = Resolver<number | null>;
  export type GivenNamesResolver = Resolver<string | null>;
  export type SurnameResolver = Resolver<string | null>;
  export type NumberResolver = Resolver<string | null>;
  export type CountryOfIssueResolver = Resolver<CodeNameCIO | null>;
  export type SourceOfDataTypeResolver = Resolver<string | null>;
  export type ApiDocumentRequirementsResolver = Resolver<APISDocumentRequirementsCIO | null>;
  export type AdditionalApiDocumentsResolver = Resolver<(AdditionalAPIDocumentCIO | null)[] | null>;
}
/** APIS Document Requirements Output type */
export namespace APISDocumentRequirementsCIOResolvers {
  export interface Resolvers {
    countryOfIssueRequired?: CountryOfIssueRequiredResolver;
    expiryDateRequired?: ExpiryDateRequiredResolver;
    givenNamesRequired?: GivenNamesRequiredResolver;
    numberRequired?: NumberRequiredResolver;
    surnameRequired?: SurnameRequiredResolver;
    mandatory?: MandatoryResolver;
  }

  export type CountryOfIssueRequiredResolver = Resolver<boolean | null>;
  export type ExpiryDateRequiredResolver = Resolver<boolean | null>;
  export type GivenNamesRequiredResolver = Resolver<boolean | null>;
  export type NumberRequiredResolver = Resolver<boolean | null>;
  export type SurnameRequiredResolver = Resolver<boolean | null>;
  export type MandatoryResolver = Resolver<boolean | null>;
}
/** Additional Document Output type */
export namespace AdditionalAPIDocumentCIOResolvers {
  export interface Resolvers {
    supplementaryDocument?: SupplementaryDocumentResolver;
    travelDocument?: TravelDocumentResolver;
  }

  export type SupplementaryDocumentResolver = Resolver<SupplementaryDocumentCIO | null>;
  export type TravelDocumentResolver = Resolver<SupplementaryDocumentCIO | null>;
}
/** Supplementary Document Output type */
export namespace SupplementaryDocumentCIOResolvers {
  export interface Resolvers {
    type?: TypeResolver;
    expiryDate?: ExpiryDateResolver;
    expiryDateTimestamp?: ExpiryDateTimestampResolver;
    givenNames?: GivenNamesResolver;
    surname?: SurnameResolver;
    number?: NumberResolver;
    countryOfIssue?: CountryOfIssueResolver;
    sourceOfDataType?: SourceOfDataTypeResolver;
    apiDocumentRequirements?: ApiDocumentRequirementsResolver;
  }

  export type TypeResolver = Resolver<CodeNameCIO | null>;
  export type ExpiryDateResolver = Resolver<string | null>;
  export type ExpiryDateTimestampResolver = Resolver<number | null>;
  export type GivenNamesResolver = Resolver<string | null>;
  export type SurnameResolver = Resolver<string | null>;
  export type NumberResolver = Resolver<string | null>;
  export type CountryOfIssueResolver = Resolver<CodeNameCIO | null>;
  export type SourceOfDataTypeResolver = Resolver<string | null>;
  export type ApiDocumentRequirementsResolver = Resolver<APISDocumentRequirementsCIO | null>;
}
/** Description of the check-in group */
export namespace PassengerFlightDetailsCIOResolvers {
  export interface Resolvers {
    bookedCabinClass?: BookedCabinClassResolver;
    checkinStatus?: CheckinStatusResolver;
    classChange?: ClassChangeResolver;
    newFlightAfterDisruption?: NewFlightAfterDisruptionResolver;
    operatingFlightSegmentId?: OperatingFlightSegmentIdResolver;
    seatAssignments?: SeatAssignmentsResolver;
    ticketCoupon?: TicketCouponResolver;
  }

  export type BookedCabinClassResolver = Resolver<CodeNameCIO | null>;
  export type CheckinStatusResolver = Resolver<string | null>;
  export type ClassChangeResolver = Resolver<string | null>;
  export type NewFlightAfterDisruptionResolver = Resolver<boolean | null>;
  export type OperatingFlightSegmentIdResolver = Resolver<string | null>;
  export type SeatAssignmentsResolver = Resolver<(SeatAssignmentCIO | null)[] | null>;
  export type TicketCouponResolver = Resolver<TicketCouponCIO | null>;
}
/** Seat Assignment Description */
export namespace SeatAssignmentCIOResolvers {
  export interface Resolvers {
    type?: TypeResolver;
    seat?: SeatResolver;
  }

  export type TypeResolver = Resolver<string | null>;
  export type SeatResolver = Resolver<SeatCIO | null>;
}
/** Seat Description */
export namespace SeatCIOResolvers {
  export interface Resolvers {
    number?: NumberResolver;
    cabinClass?: CabinClassResolver;
    row?: RowResolver;
    column?: ColumnResolver;
  }

  export type NumberResolver = Resolver<string | null>;
  export type CabinClassResolver = Resolver<CodeNameCIO | null>;
  export type RowResolver = Resolver<NumberCIO | null>;
  export type ColumnResolver = Resolver<CodeCIO | null>;
}
/** Simple generic object with the number field */
export namespace NumberCIOResolvers {
  export interface Resolvers {
    number?: NumberResolver;
  }

  export type NumberResolver = Resolver<number | null>;
}
/** Simple generic object with the code field */
export namespace CodeCIOResolvers {
  export interface Resolvers {
    code?: CodeResolver;
  }

  export type CodeResolver = Resolver<string | null>;
}
/** Description of the check-in group */
export namespace TicketCouponCIOResolvers {
  export interface Resolvers {
    number?: NumberResolver;
    ticketBooklet?: TicketBookletResolver;
  }

  export type NumberResolver = Resolver<number | null>;
  export type TicketBookletResolver = Resolver<TicketBookletCIO | null>;
}
/** Ticket Booklet Description */
export namespace TicketBookletCIOResolvers {
  export interface Resolvers {
    number?: NumberResolver;
    ticket?: TicketResolver;
  }

  export type NumberResolver = Resolver<string | null>;
  export type TicketResolver = Resolver<TicketBookletDeliveryTypeCIO | null>;
}
/** Simple generic object with the deliveryType field */
export namespace TicketBookletDeliveryTypeCIOResolvers {
  export interface Resolvers {
    deliveryType?: DeliveryTypeResolver;
  }

  export type DeliveryTypeResolver = Resolver<string | null>;
}
/** Simple generic object with groupReservation and bookingCode fields */
export namespace ReservationBookingCIOResolvers {
  export interface Resolvers {
    groupReservation?: GroupReservationResolver;
    bookingCode?: BookingCodeResolver;
  }

  export type GroupReservationResolver = Resolver<boolean | null>;
  export type BookingCodeResolver = Resolver<string | null>;
}
/** Description of the memberships */
export namespace MembershipsCIOResolvers {
  export interface Resolvers {
    frequentFlyerMembership?: FrequentFlyerMembershipResolver;
    flyingBlueMembership?: FlyingBlueMembershipResolver;
  }

  export type FrequentFlyerMembershipResolver = Resolver<FrequentFlyerMembershipCIO | null>;
  export type FlyingBlueMembershipResolver = Resolver<FlyingBlueMembershipCIO | null>;
}
/** Description of the Frequent Flyer Membership */
export namespace FrequentFlyerMembershipCIOResolvers {
  export interface Resolvers {
    number?: NumberResolver;
    loyaltyProgram?: LoyaltyProgramResolver;
    loyaltyProgramLevel?: LoyaltyProgramLevelResolver;
  }

  export type NumberResolver = Resolver<string | null>;
  export type LoyaltyProgramResolver = Resolver<NameLoyaltyCIO | null>;
  export type LoyaltyProgramLevelResolver = Resolver<TierLevelCIO | null>;
}
/** Description of the loyalty program */
export namespace NameLoyaltyCIOResolvers {
  export interface Resolvers {
    name?: NameResolver;
    loyaltyProgramOwner?: LoyaltyProgramOwnerResolver;
  }

  export type NameResolver = Resolver<string | null>;
  export type LoyaltyProgramOwnerResolver = Resolver<CodeCIO | null>;
}
/** Description of the Loyalty Program Level */
export namespace TierLevelCIOResolvers {
  export interface Resolvers {
    tierLevel?: TierLevelResolver;
  }

  export type TierLevelResolver = Resolver<string | null>;
}
/** Description of the Flying Blue Membership */
export namespace FlyingBlueMembershipCIOResolvers {
  export interface Resolvers {
    number?: NumberResolver;
    loyaltyProgram?: LoyaltyProgramResolver;
    loyaltyProgramLevel?: LoyaltyProgramLevelResolver;
    typeDescription?: TypeDescriptionResolver;
  }

  export type NumberResolver = Resolver<string | null>;
  export type LoyaltyProgramResolver = Resolver<NameLoyaltyCIO | null>;
  export type LoyaltyProgramLevelResolver = Resolver<TierLevelCIO | null>;
  export type TypeDescriptionResolver = Resolver<string | null>;
}
/** Description of unaccompanied minor (UMNR). */
export namespace UMNRResolvers {
  export interface Resolvers {
    unaccompaniedMinorContact?: UnaccompaniedMinorContactResolver;
    unaccompaniedMinorContactAddress?: UnaccompaniedMinorContactAddressResolver;
    _links?: _linksResolver;
  }

  export type UnaccompaniedMinorContactResolver = Resolver<(UnaccompaniedMinorContact | null)[] | null>;
  export type UnaccompaniedMinorContactAddressResolver = Resolver<(UnaccompaniedMinorContactAddress | null)[] | null>;
  export type _linksResolver = Resolver<LinksReservation | null>;
}
/** Description of unaccompanied minor contact. */
export namespace UnaccompaniedMinorContactResolvers {
  export interface Resolvers {
    contactType?: ContactTypeResolver;
    firstName?: FirstNameResolver;
    lastName?: LastNameResolver;
    gender?: GenderResolver;
    phoneNumber?: PhoneNumberResolver;
    _links?: _linksResolver;
  }

  export type ContactTypeResolver = Resolver<CodeNameReservation | null>;
  export type FirstNameResolver = Resolver<string | null>;
  export type LastNameResolver = Resolver<string | null>;
  export type GenderResolver = Resolver<CodeNameReservation | null>;
  export type PhoneNumberResolver = Resolver<string | null>;
  export type _linksResolver = Resolver<LinksReservation | null>;
}
/** Simple generic object with code and name fields */
export namespace CodeNameReservationResolvers {
  export interface Resolvers {
    code?: CodeResolver;
    name?: NameResolver;
  }

  export type CodeResolver = Resolver<string | null>;
  export type NameResolver = Resolver<string | null>;
}
/** Various HATEOAS links available from reservation apis */
export namespace LinksReservationResolvers {
  export interface Resolvers {
    addContactDetails?: AddContactDetailsResolver;
    addUnaccompaniedMinorContact?: AddUnaccompaniedMinorContactResolver;
    addUnaccompaniedMinorContactAddress?: AddUnaccompaniedMinorContactAddressResolver;
    handlingAdviseForUnaccompaniedMinor?: HandlingAdviseForUnaccompaniedMinorResolver;
    delete?: DeleteResolver;
    update?: UpdateResolver;
  }

  export type AddContactDetailsResolver = Resolver<HrefReservation | null>;
  export type AddUnaccompaniedMinorContactResolver = Resolver<HrefReservation | null>;
  export type AddUnaccompaniedMinorContactAddressResolver = Resolver<HrefReservation | null>;
  export type HandlingAdviseForUnaccompaniedMinorResolver = Resolver<HrefReservation | null>;
  export type DeleteResolver = Resolver<HrefReservation | null>;
  export type UpdateResolver = Resolver<HrefReservation | null>;
}
/** Various links available for HATEAOS */
export namespace HrefReservationResolvers {
  export interface Resolvers {
    href?: HrefResolver;
  }

  export type HrefResolver = Resolver<string | null>;
}
/** Description of unaccompanied minor contact address. */
export namespace UnaccompaniedMinorContactAddressResolvers {
  export interface Resolvers {
    city?: CityResolver;
    contactType?: ContactTypeResolver;
    country?: CountryResolver;
    postalCode?: PostalCodeResolver;
    streetAndHouseNumber?: StreetAndHouseNumberResolver;
    _links?: _linksResolver;
  }

  export type CityResolver = Resolver<string | null>;
  export type ContactTypeResolver = Resolver<CodeNameReservation | null>;
  export type CountryResolver = Resolver<CodeNameReservation | null>;
  export type PostalCodeResolver = Resolver<string | null>;
  export type StreetAndHouseNumberResolver = Resolver<string | null>;
  export type _linksResolver = Resolver<LinksReservation | null>;
}
/** Terms And Conditions Description */
export namespace TermsAndConditionsCIOResolvers {
  export interface Resolvers {
    code?: CodeResolver;
    confirmed?: ConfirmedResolver;
    text?: TextResolver;
    type?: TypeResolver;
  }

  export type CodeResolver = Resolver<string | null>;
  export type ConfirmedResolver = Resolver<boolean | null>;
  export type TextResolver = Resolver<string | null>;
  export type TypeResolver = Resolver<string | null>;
}

export namespace CIOThirdPartyAirlineProblemResolvers {
  export interface Resolvers {
    problem?: ProblemResolver;
    thirdPartyName?: ThirdPartyNameResolver;
    thirdPartyRedirectLink?: ThirdPartyRedirectLinkResolver;
  }

  export type ProblemResolver = Resolver<CIOProblemType>;
  export type ThirdPartyNameResolver = Resolver<string | null>;
  export type ThirdPartyRedirectLinkResolver = Resolver<string>;
}

export namespace CIOCheckInGroupIdProblemResolvers {
  export interface Resolvers {
    problem?: ProblemResolver;
    checkInGroupId?: CheckInGroupIdResolver;
  }

  export type ProblemResolver = Resolver<CIOProblemType>;
  export type CheckInGroupIdResolver = Resolver<string>;
}

export namespace CIOLargeGroupProblemResolvers {
  export interface Resolvers {
    problem?: ProblemResolver;
    notifications?: NotificationsResolver;
  }

  export type ProblemResolver = Resolver<CIOProblemType>;
  export type NotificationsResolver = Resolver<(NotificationsCIO | null)[] | null>;
}

export namespace CIOInvalidParamsProblemResolvers {
  export interface Resolvers {
    problem?: ProblemResolver;
    notifications?: NotificationsResolver;
  }

  export type ProblemResolver = Resolver<CIOProblemType>;
  export type NotificationsResolver = Resolver<(NotificationsCIO | null)[] | null>;
}
/** Send boarding documents */
export namespace BoardingDocumentsSentCIOResolvers {
  export interface Resolvers {
    success?: SuccessResolver /** Success */;
  }

  export type SuccessResolver = Resolver<boolean | null>;
}
/** Reference data container for Check-in Groups */
export namespace ReferenceDataWrapperCIOResolvers {
  export interface Resolvers {
    referenceData?: ReferenceDataResolver;
  }

  export type ReferenceDataResolver = Resolver<ReferenceDataDetailsCIO | null>;
}
/** Reference data for Check-in Groups */
export namespace ReferenceDataDetailsCIOResolvers {
  export interface Resolvers {
    countries?: CountriesResolver;
    countriesOfIssue?: CountriesOfIssueResolver;
    genders?: GendersResolver;
    nationalities?: NationalitiesResolver;
    passengerTypes?: PassengerTypesResolver;
    supplementaryDocumentTypes?: SupplementaryDocumentTypesResolver;
    titles?: TitlesResolver;
    travelDocumentTypes?: TravelDocumentTypesResolver;
    loyaltyPrograms?: LoyaltyProgramsResolver;
  }

  export type CountriesResolver = Resolver<(CountryCIO | null)[] | null>;
  export type CountriesOfIssueResolver = Resolver<(CodeNameCIO | null)[] | null>;
  export type GendersResolver = Resolver<(CodeNameCIO | null)[] | null>;
  export type NationalitiesResolver = Resolver<(CodeNameCIO | null)[] | null>;
  export type PassengerTypesResolver = Resolver<(CodeNameCIO | null)[] | null>;
  export type SupplementaryDocumentTypesResolver = Resolver<(CodeNameCIO | null)[] | null>;
  export type TitlesResolver = Resolver<(CodeNameCIO | null)[] | null>;
  export type TravelDocumentTypesResolver = Resolver<(CodeNameCIO | null)[] | null>;
  export type LoyaltyProgramsResolver = Resolver<(NameLoyaltyCIO | null)[] | null>;
}
/** Country Output type */
export namespace CountryCIOResolvers {
  export interface Resolvers {
    code?: CodeResolver;
    name?: NameResolver;
    statesOrProvinces?: StatesOrProvincesResolver;
  }

  export type CodeResolver = Resolver<string | null>;
  export type NameResolver = Resolver<string | null>;
  export type StatesOrProvincesResolver = Resolver<(CodeNameCIO | null)[] | null>;
}

export namespace CIOTransferPassengerStatusResolvers {
  export interface Resolvers {
    waitingTimeMs?: WaitingTimeMsResolver;
    statusCheckUrl?: StatusCheckUrlResolver;
    notifications?: NotificationsResolver;
  }

  export type WaitingTimeMsResolver = Resolver<number | null>;
  export type StatusCheckUrlResolver = Resolver<string | null>;
  export type NotificationsResolver = Resolver<(NotificationsCIO | null)[] | null>;
}

export namespace ReservationFlightListResolvers {
  export interface Resolvers {
    segments?: SegmentsResolver;
  }

  export type SegmentsResolver = Resolver<(Segment | null)[] | null>;
}

export namespace APIWarningsResolvers {
  export interface Resolvers {
    warnings?: WarningsResolver;
  }

  export type WarningsResolver = Resolver<(APIWarning | null)[] | null>;
}

export namespace APIWarningResolvers {
  export interface Resolvers {
    code?: CodeResolver;
    description?: DescriptionResolver;
    name?: NameResolver;
  }

  export type CodeResolver = Resolver<string | null>;
  export type DescriptionResolver = Resolver<string | null>;
  export type NameResolver = Resolver<string | null>;
}

export namespace DuplicateClaimListResolvers {
  export interface Resolvers {
    duplicateClaimList?: DuplicateClaimListResolver;
  }

  export type DuplicateClaimListResolver = Resolver<(Claim | null)[] | null>;
}

export namespace ClaimResolvers {
  export interface Resolvers {
    claimNumber?: ClaimNumberResolver;
  }

  export type ClaimNumberResolver = Resolver<string | null>;
}

export namespace CorporateContractResolvers {
  export interface Resolvers {
    companyName?: CompanyNameResolver;
    contractId?: ContractIdResolver;
    type?: TypeResolver;
    restrictions?: RestrictionsResolver;
  }

  export type CompanyNameResolver = Resolver<string | null>;
  export type ContractIdResolver = Resolver<string | null>;
  export type TypeResolver = Resolver<string | null>;
  export type RestrictionsResolver = Resolver<(ContractRestriction | null)[] | null>;
}

export namespace ContractRestrictionResolvers {
  export interface Resolvers {
    maxNumberOfPaxPerBooking?: MaxNumberOfPaxPerBookingResolver;
  }

  export type MaxNumberOfPaxPerBookingResolver = Resolver<number | null>;
}

export namespace CorporateEnvironmentWrapperResolvers {
  export interface Resolvers {
    corporateEnvironments?: CorporateEnvironmentsResolver;
    corporateEnvironmentsAccess?: CorporateEnvironmentsAccessResolver;
  }

  export type CorporateEnvironmentsResolver = Resolver<(CorporateEnvironment | null)[] | null>;
  export type CorporateEnvironmentsAccessResolver = Resolver<CorporateEnvironmentAccess | null>;
}

export namespace CorporateEnvironmentResolvers {
  export interface Resolvers {
    id?: IdResolver;
    label?: LabelResolver;
    statusCode?: StatusCodeResolver;
    corporateName?: CorporateNameResolver;
    publishedCorporateContractId?: PublishedCorporateContractIdResolver;
    corporateGin?: CorporateGinResolver;
    uccrId?: UccrIdResolver;
    permissions?: PermissionsResolver;
  }

  export type IdResolver = Resolver<string | null>;
  export type LabelResolver = Resolver<string | null>;
  export type StatusCodeResolver = Resolver<string | null>;
  export type CorporateNameResolver = Resolver<string | null>;
  export type PublishedCorporateContractIdResolver = Resolver<string | null>;
  export type CorporateGinResolver = Resolver<string | null>;
  export type UccrIdResolver = Resolver<string | null>;
  export type PermissionsResolver = Resolver<(CorporateEnvironmentPermission | null)[] | null>;
}

export namespace CorporateEnvironmentPermissionResolvers {
  export interface Resolvers {
    permissionCode?: PermissionCodeResolver;
    granted?: GrantedResolver;
  }

  export type PermissionCodeResolver = Resolver<string | null>;
  export type GrantedResolver = Resolver<boolean | null>;
}

export namespace CorporateEnvironmentAccessResolvers {
  export interface Resolvers {
    isAccessGranted?: IsAccessGrantedResolver;
    linkToAirfranceBooking?: LinkToAirfranceBookingResolver;
    linkToKlmBooking?: LinkToKlmBookingResolver;
  }

  export type IsAccessGrantedResolver = Resolver<boolean | null>;
  export type LinkToAirfranceBookingResolver = Resolver<string | null>;
  export type LinkToKlmBookingResolver = Resolver<string | null>;
}

export namespace CivilityResolvers {
  export interface Resolvers {
    content?: ContentResolver;
  }

  export type ContentResolver = Resolver<CivilityContent | null>;
}

export namespace CivilityContentResolvers {
  export interface Resolvers {
    MR?: MRResolver;
    MRS?: MRSResolver;
    MS?: MSResolver;
  }

  export type MRResolver = Resolver<string | null>;
  export type MRSResolver = Resolver<string | null>;
  export type MSResolver = Resolver<string | null>;
}

export namespace ProfileResolvers {
  export interface Resolvers {
    id?: IdResolver;
    label?: LabelResolver;
    roleCode?: RoleCodeResolver;
    description?: DescriptionResolver;
    current?: CurrentResolver;
    selectable?: SelectableResolver;
  }

  export type IdResolver = Resolver<string | null>;
  export type LabelResolver = Resolver<string | null>;
  export type RoleCodeResolver = Resolver<string | null>;
  export type DescriptionResolver = Resolver<string | null>;
  export type CurrentResolver = Resolver<boolean | null>;
  export type SelectableResolver = Resolver<boolean | null>;
}

export namespace UccrsResolvers {
  export interface Resolvers {
    users?: UsersResolver;
    permissions?: PermissionsResolver;
  }

  export type UsersResolver = Resolver<UccrsPaginationData | null>;
  export type PermissionsResolver = Resolver<(UccrPermission | null)[] | null>;
}

export namespace UccrsPaginationDataResolvers {
  export interface Resolvers {
    content?: ContentResolver;
    last?: LastResolver;
    totalPages?: TotalPagesResolver;
    totalElements?: TotalElementsResolver;
    numberOfElements?: NumberOfElementsResolver;
    first?: FirstResolver;
    size?: SizeResolver;
  }

  export type ContentResolver = Resolver<(UccrsContent | null)[] | null>;
  export type LastResolver = Resolver<boolean | null>;
  export type TotalPagesResolver = Resolver<number | null>;
  export type TotalElementsResolver = Resolver<number | null>;
  export type NumberOfElementsResolver = Resolver<number | null>;
  export type FirstResolver = Resolver<boolean | null>;
  export type SizeResolver = Resolver<number | null>;
}

export namespace UccrsContentResolvers {
  export interface Resolvers {
    uccrId?: UccrIdResolver;
    title?: TitleResolver;
    lastName?: LastNameResolver;
    firstName?: FirstNameResolver;
    email?: EmailResolver;
    status?: StatusResolver;
    highestRole?: HighestRoleResolver;
    profiles?: ProfilesResolver;
    userProfileOnOrganizations?: UserProfileOnOrganizationsResolver;
    invitation?: InvitationResolver;
    userDeletion?: UserDeletionResolver;
  }

  export type UccrIdResolver = Resolver<string | null>;
  export type TitleResolver = Resolver<string | null>;
  export type LastNameResolver = Resolver<string | null>;
  export type FirstNameResolver = Resolver<string | null>;
  export type EmailResolver = Resolver<string | null>;
  export type StatusResolver = Resolver<string | null>;
  export type HighestRoleResolver = Resolver<HighestRole | null>;
  export type ProfilesResolver = Resolver<(Profile | null)[] | null>;
  export type UserProfileOnOrganizationsResolver = Resolver<(UserProfileOnOrganization | null)[] | null>;
  export type InvitationResolver = Resolver<Invitation | null>;
  export type UserDeletionResolver = Resolver<UserDeletion | null>;
}

export namespace HighestRoleResolvers {
  export interface Resolvers {
    code?: CodeResolver;
    profileDescription?: ProfileDescriptionResolver;
    profileLabel?: ProfileLabelResolver;
  }

  export type CodeResolver = Resolver<string | null>;
  export type ProfileDescriptionResolver = Resolver<string | null>;
  export type ProfileLabelResolver = Resolver<string | null>;
}

export namespace UserProfileOnOrganizationResolvers {
  export interface Resolvers {
    id?: IdResolver;
    organization?: OrganizationResolver;
  }

  export type IdResolver = Resolver<string | null>;
  export type OrganizationResolver = Resolver<Organization | null>;
}

export namespace OrganizationResolvers {
  export interface Resolvers {
    id?: IdResolver;
    label?: LabelResolver;
    description?: DescriptionResolver;
  }

  export type IdResolver = Resolver<string | null>;
  export type LabelResolver = Resolver<string | null>;
  export type DescriptionResolver = Resolver<string | null>;
}

export namespace InvitationResolvers {
  export interface Resolvers {
    status?: StatusResolver;
    senderId?: SenderIdResolver;
    token?: TokenResolver;
    numberOfSends?: NumberOfSendsResolver;
    firstName?: FirstNameResolver;
    lastName?: LastNameResolver;
  }

  export type StatusResolver = Resolver<string | null>;
  export type SenderIdResolver = Resolver<string | null>;
  export type TokenResolver = Resolver<string | null>;
  export type NumberOfSendsResolver = Resolver<number | null>;
  export type FirstNameResolver = Resolver<string | null>;
  export type LastNameResolver = Resolver<string | null>;
}

export namespace UserDeletionResolvers {
  export interface Resolvers {
    canBeDeleted?: CanBeDeletedResolver;
    labelKey?: LabelKeyResolver;
  }

  export type CanBeDeletedResolver = Resolver<boolean | null>;
  export type LabelKeyResolver = Resolver<string | null>;
}

export namespace UccrPermissionResolvers {
  export interface Resolvers {
    permissionCode?: PermissionCodeResolver;
    granted?: GrantedResolver;
  }

  export type PermissionCodeResolver = Resolver<string | null>;
  export type GrantedResolver = Resolver<boolean | null>;
}

export namespace UccrResolvers {
  export interface Resolvers {
    content?: ContentResolver;
    permissions?: PermissionsResolver;
  }

  export type ContentResolver = Resolver<UccrContent | null>;
  export type PermissionsResolver = Resolver<(UccrPermission | null)[] | null>;
}

export namespace UccrContentResolvers {
  export interface Resolvers {
    uccrId?: UccrIdResolver;
    title?: TitleResolver;
    lastName?: LastNameResolver;
    firstName?: FirstNameResolver;
    email?: EmailResolver;
    status?: StatusResolver;
    highestRole?: HighestRoleResolver;
    profiles?: ProfilesResolver;
    userProfileOnOrganizations?: UserProfileOnOrganizationsResolver;
    invitation?: InvitationResolver;
  }

  export type UccrIdResolver = Resolver<string | null>;
  export type TitleResolver = Resolver<string | null>;
  export type LastNameResolver = Resolver<string | null>;
  export type FirstNameResolver = Resolver<string | null>;
  export type EmailResolver = Resolver<string | null>;
  export type StatusResolver = Resolver<string | null>;
  export type HighestRoleResolver = Resolver<HighestRole | null>;
  export type ProfilesResolver = Resolver<(Profile | null)[] | null>;
  export type UserProfileOnOrganizationsResolver = Resolver<(UserProfileOnOrganization | null)[] | null>;
  export type InvitationResolver = Resolver<Invitation | null>;
}
/** Description of the dangerous goods */
export namespace DangerousGoodsCIOResolvers {
  export interface Resolvers {
    title?: TitleResolver;
    description?: DescriptionResolver;
    linkText?: LinkTextResolver;
    linkUrl?: LinkUrlResolver;
    items?: ItemsResolver;
  }

  export type TitleResolver = Resolver<string | null>;
  export type DescriptionResolver = Resolver<string | null>;
  export type LinkTextResolver = Resolver<string | null>;
  export type LinkUrlResolver = Resolver<string | null>;
  export type ItemsResolver = Resolver<(DangerousGoodCIO | null)[] | null>;
}
/** Description of a dangerous good */
export namespace DangerousGoodCIOResolvers {
  export interface Resolvers {
    imageAlt?: ImageAltResolver;
    imageUrl?: ImageUrlResolver;
    shortDescription?: ShortDescriptionResolver;
    text?: TextResolver;
    allowedCheckinLuggage?: AllowedCheckinLuggageResolver;
    allowedHandLuggage?: AllowedHandLuggageResolver;
  }

  export type ImageAltResolver = Resolver<string | null>;
  export type ImageUrlResolver = Resolver<string | null>;
  export type ShortDescriptionResolver = Resolver<string | null>;
  export type TextResolver = Resolver<string | null>;
  export type AllowedCheckinLuggageResolver = Resolver<boolean | null>;
  export type AllowedHandLuggageResolver = Resolver<boolean | null>;
}
/** Customer type */
export namespace CustomerResolvers {
  export interface Resolvers {
    id?: IdResolver;
    accountEmailAddress?: AccountEmailAddressResolver;
    businessAddressDeleteLink?: BusinessAddressDeleteLinkResolver;
    canAddHomeAddress?: CanAddHomeAddressResolver;
    restrictions?: RestrictionsResolver;
    canUpdateBusinessAddress?: CanUpdateBusinessAddressResolver;
    canUpdateEmailAddress?: CanUpdateEmailAddressResolver;
    canUpdateHomeAddress?: CanUpdateHomeAddressResolver;
    canAddBusinessAddress?: CanAddBusinessAddressResolver;
    canUpdateAllIndividualFields?: CanUpdateAllIndividualFieldsResolver;
    communicationMedium?: CommunicationMediumResolver;
    corporateDataList?: CorporateDataListResolver;
    dateOfBirth?: DateOfBirthResolver;
    flyingBlueStatus?: FlyingBlueStatusResolver;
    familyName?: FamilyNameResolver;
    givenNames?: GivenNamesResolver;
    homeAddressDeleteLink?: HomeAddressDeleteLinkResolver;
    membership?: MembershipResolver;
    preference?: PreferenceResolver;
    salutation?: SalutationResolver;
    timestamp?: TimestampResolver;
  }

  export type IdResolver = Resolver<number>;
  export type AccountEmailAddressResolver = Resolver<string | null>;
  export type BusinessAddressDeleteLinkResolver = Resolver<string | null>;
  export type CanAddHomeAddressResolver = Resolver<boolean | null>;
  export type RestrictionsResolver = Resolver<RestrictionCUO | null>;
  export type CanUpdateBusinessAddressResolver = Resolver<boolean | null>;
  export type CanUpdateEmailAddressResolver = Resolver<boolean | null>;
  export type CanUpdateHomeAddressResolver = Resolver<boolean | null>;
  export type CanAddBusinessAddressResolver = Resolver<boolean | null>;
  export type CanUpdateAllIndividualFieldsResolver = Resolver<boolean | null>;
  export type CommunicationMediumResolver = Resolver<CommunicationMedium | null>;
  export type CorporateDataListResolver = Resolver<(CorporateData | null)[] | null>;
  export type DateOfBirthResolver = Resolver<string | null>;
  export type FlyingBlueStatusResolver = Resolver<FlyingBlueStatus | null>;
  export type FamilyNameResolver = Resolver<string | null>;
  export type GivenNamesResolver = Resolver<string | null>;
  export type HomeAddressDeleteLinkResolver = Resolver<string | null>;
  export type MembershipResolver = Resolver<Membership | null>;
  export type PreferenceResolver = Resolver<CustomerPreference | null>;
  export type SalutationResolver = Resolver<Salutation | null>;
  export type TimestampResolver = Resolver<number | null>;
}
/** Restriction */
export namespace RestrictionCUOResolvers {
  export interface Resolvers {
    canUpdateSalutation?: CanUpdateSalutationResolver;
    canUpdateGivenNames?: CanUpdateGivenNamesResolver;
    canUpdateFamilyName?: CanUpdateFamilyNameResolver;
    canUpdateDateOfBirth?: CanUpdateDateOfBirthResolver;
    canViewPaymentPreferences?: CanViewPaymentPreferencesResolver;
  }

  export type CanUpdateSalutationResolver = Resolver<boolean | null>;
  export type CanUpdateGivenNamesResolver = Resolver<boolean | null>;
  export type CanUpdateFamilyNameResolver = Resolver<boolean | null>;
  export type CanUpdateDateOfBirthResolver = Resolver<boolean | null>;
  export type CanViewPaymentPreferencesResolver = Resolver<boolean | null>;
}
/** Communication Medium type */
export namespace CommunicationMediumResolvers {
  export interface Resolvers {
    emailAccount?: EmailAccountResolver;
    phones?: PhonesResolver;
    postalAddresses?: PostalAddressesResolver;
    _links?: _linksResolver;
  }

  export type EmailAccountResolver = Resolver<EmailAccount | null>;
  export type PhonesResolver = Resolver<(Phone | null)[] | null>;
  export type PostalAddressesResolver = Resolver<(PostalAddress | null)[] | null>;
  export type _linksResolver = Resolver<CommunicationMediumLinks | null>;
}
/** Email type */
export namespace EmailAccountResolvers {
  export interface Resolvers {
    address?: AddressResolver;
    status?: StatusResolver;
  }

  export type AddressResolver = Resolver<string | null>;
  export type StatusResolver = Resolver<EmailAccountStatus | null>;
}
/** Email status type */
export namespace EmailAccountStatusResolvers {
  export interface Resolvers {
    code?: CodeResolver;
  }

  export type CodeResolver = Resolver<string | null>;
}
/** Phone type */
export namespace PhoneResolvers {
  export interface Resolvers {
    number?: NumberResolver;
    type?: TypeResolver;
    country?: CountryResolver;
  }

  export type NumberResolver = Resolver<string | null>;
  export type TypeResolver = Resolver<PhoneType | null>;
  export type CountryResolver = Resolver<PhoneCountry | null>;
}
/** PhoneType type */
export namespace PhoneTypeResolvers {
  export interface Resolvers {
    code?: CodeResolver;
  }

  export type CodeResolver = Resolver<string>;
}
/** PhoneCountry type */
export namespace PhoneCountryResolvers {
  export interface Resolvers {
    phonePrefix?: PhonePrefixResolver;
    code?: CodeResolver;
  }

  export type PhonePrefixResolver = Resolver<string | null>;
  export type CodeResolver = Resolver<string | null>;
}
/** PostalAddress type */
export namespace PostalAddressResolvers {
  export interface Resolvers {
    usageType?: UsageTypeResolver;
    company?: CompanyResolver;
    streetHousenumber?: StreetHousenumberResolver;
    additionalInformation?: AdditionalInformationResolver;
    postalCode?: PostalCodeResolver;
    city?: CityResolver;
    country?: CountryResolver;
    _links?: _linksResolver;
  }

  export type UsageTypeResolver = Resolver<PostalAddressType | null>;
  export type CompanyResolver = Resolver<Company | null>;
  export type StreetHousenumberResolver = Resolver<string | null>;
  export type AdditionalInformationResolver = Resolver<string | null>;
  export type PostalCodeResolver = Resolver<string | null>;
  export type CityResolver = Resolver<string | null>;
  export type CountryResolver = Resolver<Country | null>;
  export type _linksResolver = Resolver<PostalAddressLinks | null>;
}
/** PostalAddressType type */
export namespace PostalAddressTypeResolvers {
  export interface Resolvers {
    code?: CodeResolver;
  }

  export type CodeResolver = Resolver<string | null>;
}
/** Company type */
export namespace CompanyResolvers {
  export interface Resolvers {
    name?: NameResolver;
  }

  export type NameResolver = Resolver<string | null>;
}
/** Country type */
export namespace CountryResolvers {
  export interface Resolvers {
    title?: TitleResolver;
    name?: NameResolver;
    code?: CodeResolver;
    phonePrefix?: PhonePrefixResolver;
    stateOrProvince?: StateOrProvinceResolver;
  }

  export type TitleResolver = Resolver<string | null>;
  export type NameResolver = Resolver<string>;
  export type CodeResolver = Resolver<string | null>;
  export type PhonePrefixResolver = Resolver<string | null>;
  export type StateOrProvinceResolver = Resolver<State | null>;
}
/** State type */
export namespace StateResolvers {
  export interface Resolvers {
    name?: NameResolver;
    code?: CodeResolver;
  }

  export type NameResolver = Resolver<string>;
  export type CodeResolver = Resolver<string | null>;
}
/** Postal Address Links type */
export namespace PostalAddressLinksResolvers {
  export interface Resolvers {
    delete?: DeleteResolver;
    update?: UpdateResolver;
  }

  export type DeleteResolver = Resolver<Link | null>;
  export type UpdateResolver = Resolver<Link | null>;
}
/** Link type */
export namespace LinkResolvers {
  export interface Resolvers {
    href?: HrefResolver;
  }

  export type HrefResolver = Resolver<string | null>;
}
/** Communication Medium Links type */
export namespace CommunicationMediumLinksResolvers {
  export interface Resolvers {
    addAddress?: AddAddressResolver;
    addPhone?: AddPhoneResolver;
  }

  export type AddAddressResolver = Resolver<Link | null>;
  export type AddPhoneResolver = Resolver<Link | null>;
}
/** CorporateData type */
export namespace CorporateDataResolvers {
  export interface Resolvers {
    companyName?: CompanyNameResolver;
    highestRole?: HighestRoleResolver;
  }

  export type CompanyNameResolver = Resolver<string | null>;
  export type HighestRoleResolver = Resolver<CompanyHighestRole | null>;
}
/** CompanyHighestRole type */
export namespace CompanyHighestRoleResolvers {
  export interface Resolvers {
    name?: NameResolver;
    description?: DescriptionResolver;
  }

  export type NameResolver = Resolver<string | null>;
  export type DescriptionResolver = Resolver<string | null>;
}
/** FlyingBlue Status */
export namespace FlyingBlueStatusResolvers {
  export interface Resolvers {
    name?: NameResolver;
    rank?: RankResolver;
    label?: LabelResolver;
    currentTierLevel?: CurrentTierLevelResolver;
    nextTierLevel?: NextTierLevelResolver;
    benefits?: BenefitsResolver;
  }

  export type NameResolver = Resolver<string | null>;
  export type RankResolver = Resolver<number | null>;
  export type LabelResolver = Resolver<string | null>;
  export type CurrentTierLevelResolver = Resolver<FlyingBlueTierLevel | null>;
  export type NextTierLevelResolver = Resolver<FlyingBlueTierLevel | null>;
  export type BenefitsResolver = Resolver<FlyingBlueLink | null>;
}
/** FlyingBlue Status next tier-level */
export namespace FlyingBlueTierLevelResolvers {
  export interface Resolvers {
    tierLevel?: TierLevelResolver;
    tierLevelCode?: TierLevelCodeResolver;
    label?: LabelResolver;
    xpAmount?: XpAmountResolver;
    currentTierAttributes?: CurrentTierAttributesResolver;
    currentTierLevelXP?: CurrentTierLevelXPResolver;
    currentTierEndValidity?: CurrentTierEndValidityResolver;
    keepCurrentTierLevel?: KeepCurrentTierLevelResolver;
    ultimateCounter?: UltimateCounterResolver;
    ultimateEndValidity?: UltimateEndValidityResolver;
    keepUltimate?: KeepUltimateResolver;
  }

  export type TierLevelResolver = Resolver<string>;
  export type TierLevelCodeResolver = Resolver<string>;
  export type LabelResolver = Resolver<string | null>;
  export type XpAmountResolver = Resolver<number | null>;
  export type CurrentTierAttributesResolver = Resolver<(FlyingBlueTierDetails | null)[] | null>;
  export type CurrentTierLevelXPResolver = Resolver<FlyingBlueTierDetails | null>;
  export type CurrentTierEndValidityResolver = Resolver<FlyingBlueTierDetails | null>;
  export type KeepCurrentTierLevelResolver = Resolver<FlyingBlueTierDetails | null>;
  export type UltimateCounterResolver = Resolver<FlyingBlueTierDetails | null>;
  export type UltimateEndValidityResolver = Resolver<FlyingBlueTierDetails | null>;
  export type KeepUltimateResolver = Resolver<FlyingBlueTierDetails | null>;
}
/** FlyingBlue Status tier level details */
export namespace FlyingBlueTierDetailsResolvers {
  export interface Resolvers {
    label?: LabelResolver;
    amount?: AmountResolver;
    xpAmount?: XpAmountResolver;
    date?: DateResolver;
    yearsCounter?: YearsCounterResolver;
    xpCounterUltimate?: XpCounterUltimateResolver;
    threshold?: ThresholdResolver;
    attributeCode?: AttributeCodeResolver;
    attributeLabel?: AttributeLabelResolver;
  }

  export type LabelResolver = Resolver<string | null>;
  export type AmountResolver = Resolver<number | null>;
  export type XpAmountResolver = Resolver<number | null>;
  export type DateResolver = Resolver<string | null>;
  export type YearsCounterResolver = Resolver<number | null>;
  export type XpCounterUltimateResolver = Resolver<number | null>;
  export type ThresholdResolver = Resolver<number | null>;
  export type AttributeCodeResolver = Resolver<string | null>;
  export type AttributeLabelResolver = Resolver<string | null>;
}
/** FlyingBlue Link */
export namespace FlyingBlueLinkResolvers {
  export interface Resolvers {
    rel?: RelResolver;
    href?: HrefResolver;
  }

  export type RelResolver = Resolver<string | null>;
  export type HrefResolver = Resolver<string | null>;
}
/** Membership type */
export namespace MembershipResolvers {
  export interface Resolvers {
    contracts?: ContractsResolver;
    bluebizMembership?: BluebizMembershipResolver;
    saphirMembership?: SaphirMembershipResolver;
    flyingBlueProfile?: FlyingBlueProfileResolver;
  }

  export type ContractsResolver = Resolver<(Contracts | null)[] | null>;
  export type BluebizMembershipResolver = Resolver<BluebizMembership | null>;
  export type SaphirMembershipResolver = Resolver<SaphirMembership | null>;
  export type FlyingBlueProfileResolver = Resolver<FlyingBlueProfile | null>;
}
/** Contracts type */
export namespace ContractsResolvers {
  export interface Resolvers {
    contractNumber?: ContractNumberResolver;
    contractName?: ContractNameResolver;
    contractType?: ContractTypeResolver;
    contractSubType?: ContractSubTypeResolver;
    contractStartDate?: ContractStartDateResolver;
    contractEndDate?: ContractEndDateResolver;
    contractAlertType?: ContractAlertTypeResolver;
    contractAlertDescription?: ContractAlertDescriptionResolver;
  }

  export type ContractNumberResolver = Resolver<string | null>;
  export type ContractNameResolver = Resolver<string | null>;
  export type ContractTypeResolver = Resolver<string | null>;
  export type ContractSubTypeResolver = Resolver<string | null>;
  export type ContractStartDateResolver = Resolver<string | null>;
  export type ContractEndDateResolver = Resolver<string | null>;
  export type ContractAlertTypeResolver = Resolver<string | null>;
  export type ContractAlertDescriptionResolver = Resolver<string | null>;
}
/** BlueBiz Membership type */
export namespace BluebizMembershipResolvers {
  export interface Resolvers {
    number?: NumberResolver;
  }

  export type NumberResolver = Resolver<string>;
}
/** Saphir Membership type */
export namespace SaphirMembershipResolvers {
  export interface Resolvers {
    number?: NumberResolver;
  }

  export type NumberResolver = Resolver<string>;
}

export namespace FlyingBlueProfileResolvers {
  export interface Resolvers {
    level?: LevelResolver;
    milesAmount?: MilesAmountResolver;
  }

  export type LevelResolver = Resolver<string | null>;
  export type MilesAmountResolver = Resolver<number | null>;
}
/** Customer Preference type */
export namespace CustomerPreferenceResolvers {
  export interface Resolvers {
    communicationPreference?: CommunicationPreferenceResolver;
  }

  export type CommunicationPreferenceResolver = Resolver<CommunicationPreference | null>;
}
/** Communication Preference type */
export namespace CommunicationPreferenceResolvers {
  export interface Resolvers {
    postalAddressPreference?: PostalAddressPreferenceResolver;
  }

  export type PostalAddressPreferenceResolver = Resolver<PostalAddress | null>;
}

export namespace SalutationResolvers {
  export interface Resolvers {
    code?: CodeResolver;
    name?: NameResolver;
  }

  export type CodeResolver = Resolver<string | null>;
  export type NameResolver = Resolver<string | null>;
}
/** Account type */
export namespace AccountResolvers {
  export interface Resolvers {
    familyName?: FamilyNameResolver;
    givenNames?: GivenNamesResolver;
    isFlyingBlue?: IsFlyingBlueResolver;
    flyingBlueNumber?: FlyingBlueNumberResolver;
  }

  export type FamilyNameResolver = Resolver<string | null>;
  export type GivenNamesResolver = Resolver<string | null>;
  export type IsFlyingBlueResolver = Resolver<boolean | null>;
  export type FlyingBlueNumberResolver = Resolver<string | null>;
}

export namespace DestinationResolvers {
  export interface Resolvers {
    iata?: IataResolver;
    label?: LabelResolver;
    pictureUrl?: PictureUrlResolver;
    description?: DescriptionResolver;
  }

  export type IataResolver = Resolver<string | null>;
  export type LabelResolver = Resolver<string | null>;
  export type PictureUrlResolver = Resolver<string | null>;
  export type DescriptionResolver = Resolver<string | null>;
}

export namespace FlightStatusResolvers {
  export interface Resolvers {
    status?: StatusResolver;
    statusTranslation?: StatusTranslationResolver;
  }

  export type StatusResolver = Resolver<string | null>;
  export type StatusTranslationResolver = Resolver<string | null>;
}
/** Inspire destinaitons API v4 */
export namespace InspireDestinationsV4Resolvers {
  export interface Resolvers {
    origin?: OriginResolver;
    destinations?: DestinationsResolver;
  }

  export type OriginResolver = Resolver<CodeLabel | null>;
  export type DestinationsResolver = Resolver<(DestinationDetails | null)[] | null>;
}
/** CodeLabel info */
export namespace CodeLabelResolvers {
  export interface Resolvers {
    code?: CodeResolver;
    label?: LabelResolver;
  }

  export type CodeResolver = Resolver<string | null>;
  export type LabelResolver = Resolver<string | null>;
}
/** Destination details */
export namespace DestinationDetailsResolvers {
  export interface Resolvers {
    code?: CodeResolver;
    label?: LabelResolver;
    title?: TitleResolver;
    picture?: PictureResolver;
    price?: PriceResolver;
  }

  export type CodeResolver = Resolver<string | null>;
  export type LabelResolver = Resolver<string | null>;
  export type TitleResolver = Resolver<string | null>;
  export type PictureResolver = Resolver<DestinationPictureDetails | null>;
  export type PriceResolver = Resolver<DestinationPrice | null>;
}
/** Destination Picture Details */
export namespace DestinationPictureDetailsResolvers {
  export interface Resolvers {
    imageUrl?: ImageUrlResolver;
    imageCaption?: ImageCaptionResolver;
    imageAccessibility?: ImageAccessibilityResolver;
  }

  export type ImageUrlResolver = Resolver<string | null>;
  export type ImageCaptionResolver = Resolver<string | null>;
  export type ImageAccessibilityResolver = Resolver<string | null>;
}
/** Destination price */
export namespace DestinationPriceResolvers {
  export interface Resolvers {
    amount?: AmountResolver;
    currency?: CurrencyResolver;
  }

  export type AmountResolver = Resolver<number | null>;
  export type CurrencyResolver = Resolver<string | null>;
}
/** Inspire destinations */
export namespace InspireDestinationsCOOResolvers {
  export interface Resolvers {
    destinations?: DestinationsResolver;
  }

  export type DestinationsResolver = Resolver<(InspireDestinationCOO | null)[] | null>;
}
/** Inspire destination info */
export namespace InspireDestinationCOOResolvers {
  export interface Resolvers {
    pictureUrl?: PictureUrlResolver;
  }

  export type PictureUrlResolver = Resolver<string | null>;
}
/** Tax Breakdown */
export namespace TaxBreakdownResolvers {
  export interface Resolvers {
    pricePerPassengerTypes?: PricePerPassengerTypesResolver;
    currency?: CurrencyResolver;
  }

  export type PricePerPassengerTypesResolver = Resolver<(pricePerPassengerType | null)[] | null>;
  export type CurrencyResolver = Resolver<string | null>;
}

export namespace pricePerPassengerTypeResolvers {
  export interface Resolvers {
    fare?: FareResolver;
    passengerType?: PassengerTypeResolver;
    taxes?: TaxesResolver;
  }

  export type FareResolver = Resolver<number | null>;
  export type PassengerTypeResolver = Resolver<string | null>;
  export type TaxesResolver = Resolver<(taxBreakdownTax | null)[] | null>;
}

export namespace taxBreakdownTaxResolvers {
  export interface Resolvers {
    code?: CodeResolver;
    amount?: AmountResolver;
    name?: NameResolver;
  }

  export type CodeResolver = Resolver<string | null>;
  export type AmountResolver = Resolver<number | null>;
  export type NameResolver = Resolver<string | null>;
}

export namespace TripSummaryItineraryResolvers {
  export interface Resolvers {
    connections?: ConnectionsResolver;
    flightProducts?: FlightProductsResolver;
    taxBreakdown?: TaxBreakdownResolver;
  }

  export type ConnectionsResolver = Resolver<(FlightOfferRowType | null)[] | null>;
  export type FlightProductsResolver = Resolver<(BrandedFare | null)[] | null>;
  export type TaxBreakdownResolver = Resolver<TaxBreakdown | null>;
}

export namespace LowestOffersResponseResolvers {
  export interface Resolvers {
    lowestOffers?: LowestOffersResolver;
    disclaimer?: DisclaimerResolver;
  }

  export type LowestOffersResolver = Resolver<(LowestOffersFlightProduct | null)[] | null>;
  export type DisclaimerResolver = Resolver<LowestOffersDisclaimer | null>;
}

export namespace LowestOffersFlightProductResolvers {
  export interface Resolvers {
    flightDate?: FlightDateResolver;
    price?: PriceResolver;
    currency?: CurrencyResolver;
    noFlight?: NoFlightResolver;
    availableOffersHateoasPath?: AvailableOffersHateoasPathResolver;
    totalPrice?: TotalPriceResolver;
    splitPrice?: SplitPriceResolver;
  }

  export type FlightDateResolver = Resolver<string | null>;
  export type PriceResolver = Resolver<number | null>;
  export type CurrencyResolver = Resolver<string | null>;
  export type NoFlightResolver = Resolver<boolean | null>;
  export type AvailableOffersHateoasPathResolver = Resolver<string | null>;
  export type TotalPriceResolver = Resolver<number | null>;
  export type SplitPriceResolver = Resolver<number | null>;
}

export namespace LowestOffersDisclaimerResolvers {
  export interface Resolvers {
    displayPriceText?: DisplayPriceTextResolver;
    totalPriceText?: TotalPriceTextResolver;
  }

  export type DisplayPriceTextResolver = Resolver<string | null>;
  export type TotalPriceTextResolver = Resolver<string | null>;
}

export namespace DecryptedReservationOAOResolvers {
  export interface Resolvers {
    pnr?: PnrResolver;
    lastname?: LastnameResolver;
    conversationStateId?: ConversationStateIdResolver;
    orderId?: OrderIdResolver;
    market?: MarketResolver;
  }

  export type PnrResolver = Resolver<string | null>;
  export type LastnameResolver = Resolver<string | null>;
  export type ConversationStateIdResolver = Resolver<string | null>;
  export type OrderIdResolver = Resolver<string | null>;
  export type MarketResolver = Resolver<string | null>;
}

export namespace StationResolvers {
  export interface Resolvers {
    code?: CodeResolver;
    name?: NameResolver;
    isOrigin?: IsOriginResolver;
    isDestination?: IsDestinationResolver;
    country?: CountryResolver;
    airports?: AirportsResolver;
  }

  export type CodeResolver = Resolver<string | null>;
  export type NameResolver = Resolver<string | null>;
  export type IsOriginResolver = Resolver<boolean | null>;
  export type IsDestinationResolver = Resolver<boolean | null>;
  export type CountryResolver = Resolver<CodeName | null>;
  export type AirportsResolver = Resolver<(CodeName | null)[] | null>;
}

export namespace ReferenceDataResolvers {
  export interface Resolvers {
    passengerTypes?: PassengerTypesResolver;
  }

  export type PassengerTypesResolver = Resolver<(PassengerType | null)[] | null>;
}

export namespace PassengerTypeResolvers {
  export interface Resolvers {
    code?: CodeResolver;
    label?: LabelResolver;
  }

  export type CodeResolver = Resolver<string | null>;
  export type LabelResolver = Resolver<string | null>;
}

export namespace RichContentFlightsResolvers {
  export interface Resolvers {
    code?: CodeResolver;
    content?: ContentResolver;
  }

  export type CodeResolver = Resolver<string | null>;
  export type ContentResolver = Resolver<(RichContent | null)[] | null>;
}

export namespace RichContentResolvers {
  export interface Resolvers {
    cabinClass?: CabinClassResolver;
    title?: TitleResolver;
    description?: DescriptionResolver;
    imageUrl?: ImageUrlResolver;
    videoUrl?: VideoUrlResolver;
  }

  export type CabinClassResolver = Resolver<string | null>;
  export type TitleResolver = Resolver<string | null>;
  export type DescriptionResolver = Resolver<string | null>;
  export type ImageUrlResolver = Resolver<string | null>;
  export type VideoUrlResolver = Resolver<string | null>;
}
/** ... */
export namespace SeatmapDetailsSMOResolvers {
  export interface Resolvers {
    carrierCode?: CarrierCodeResolver;
    name?: NameResolver;
    type?: TypeResolver;
    templateName?: TemplateNameResolver;
    decks?: DecksResolver;
  }

  export type CarrierCodeResolver = Resolver<string | null>;
  export type NameResolver = Resolver<string | null>;
  export type TypeResolver = Resolver<string | null>;
  export type TemplateNameResolver = Resolver<string | null>;
  export type DecksResolver = Resolver<(DeckDetailsSMO | null)[] | null>;
}
/** ... */
export namespace DeckDetailsSMOResolvers {
  export interface Resolvers {
    name?: NameResolver;
    dimensions?: DimensionsResolver;
    cabins?: CabinsResolver;
  }

  export type NameResolver = Resolver<string | null>;
  export type DimensionsResolver = Resolver<DimensionsDetailsSMO | null>;
  export type CabinsResolver = Resolver<(CabinDetailsSMO | null)[] | null>;
}
/** ... */
export namespace DimensionsDetailsSMOResolvers {
  export interface Resolvers {
    width?: WidthResolver /** ... */;
    length?: LengthResolver /** ... */;
  }

  export type WidthResolver = Resolver<number | null>;
  export type LengthResolver = Resolver<number | null>;
}
/** ... */
export namespace CabinDetailsSMOResolvers {
  export interface Resolvers {
    cabinClass?: CabinClassResolver;
    cabinName?: CabinNameResolver;
    rows?: RowsResolver;
  }

  export type CabinClassResolver = Resolver<string | null>;
  export type CabinNameResolver = Resolver<string | null>;
  export type RowsResolver = Resolver<(RowDetailsSMO | null)[] | null>;
}
/** ... */
export namespace RowDetailsSMOResolvers {
  export interface Resolvers {
    rowNumber?: RowNumberResolver;
    positionInCabins?: PositionInCabinsResolver;
  }

  export type RowNumberResolver = Resolver<number | null>;
  export type PositionInCabinsResolver = Resolver<(PositionInCabinsDetailsSMO | null)[] | null>;
}
/** ... */
export namespace PositionInCabinsDetailsSMOResolvers {
  export interface Resolvers {
    positionInCabinType?: PositionInCabinTypeResolver;
    status?: StatusResolver;
    displayCode?: DisplayCodeResolver;
    displaySeatCode?: DisplaySeatCodeResolver;
    column?: ColumnResolver;
    characteristics?: CharacteristicsResolver;
    elementLocation?: ElementLocationResolver;
    imageName?: ImageNameResolver;
    seatProduct?: SeatProductResolver;
    occupiedByPassengerId?: OccupiedByPassengerIdResolver;
    seatDimension?: SeatDimensionResolver;
    exitRowConditionsApply?: ExitRowConditionsApplyResolver;
    termsAndConditions?: TermsAndConditionsResolver;
  }

  export type PositionInCabinTypeResolver = Resolver<string | null>;
  export type StatusResolver = Resolver<string | null>;
  export type DisplayCodeResolver = Resolver<string | null>;
  export type DisplaySeatCodeResolver = Resolver<string | null>;
  export type ColumnResolver = Resolver<ColumnDetailsSMO | null>;
  export type CharacteristicsResolver = Resolver<(CharacteristicsDetailsSMO | null)[] | null>;
  export type ElementLocationResolver = Resolver<ElementLocationDetailsSMO | null>;
  export type ImageNameResolver = Resolver<string | null>;
  export type SeatProductResolver = Resolver<ProductTypeSMO | null>;
  export type OccupiedByPassengerIdResolver = Resolver<string | null>;
  export type SeatDimensionResolver = Resolver<SeatDimensionDetailsSMO>;
  export type ExitRowConditionsApplyResolver = Resolver<boolean | null>;
  export type TermsAndConditionsResolver = Resolver<string | null>;
}
/** ... */
export namespace ColumnDetailsSMOResolvers {
  export interface Resolvers {
    columnCode?: ColumnCodeResolver;
  }

  export type ColumnCodeResolver = Resolver<string | null>;
}
/** ... */
export namespace CharacteristicsDetailsSMOResolvers {
  export interface Resolvers {
    code?: CodeResolver;
    characteristic?: CharacteristicResolver;
  }

  export type CodeResolver = Resolver<string | null>;
  export type CharacteristicResolver = Resolver<string | null>;
}
/** ... */
export namespace ElementLocationDetailsSMOResolvers {
  export interface Resolvers {
    x?: XResolver;
    y?: YResolver;
  }

  export type XResolver = Resolver<number | null>;
  export type YResolver = Resolver<number | null>;
}
/** ... */
export namespace ProductTypeSMOResolvers {
  export interface Resolvers {
    productClass?: ProductClassResolver;
    code?: CodeResolver;
    name?: NameResolver;
    productType?: ProductTypeResolver;
    productId?: ProductIdResolver;
    prices?: PricesResolver;
    segment?: SegmentResolver;
    passenger?: PassengerResolver;
    numberOfAvailableProducts?: NumberOfAvailableProductsResolver;
    rowNumber?: RowNumberResolver;
    columnCode?: ColumnCodeResolver;
    legendOrder?: LegendOrderResolver;
    link?: LinkResolver;
  }

  export type ProductClassResolver = Resolver<string | null>;
  export type CodeResolver = Resolver<string | null>;
  export type NameResolver = Resolver<string | null>;
  export type ProductTypeResolver = Resolver<string | null>;
  export type ProductIdResolver = Resolver<string | null>;
  export type PricesResolver = Resolver<(PricesSMO | null)[] | null>;
  export type SegmentResolver = Resolver<SegmentTypeDetailsSMO | null>;
  export type PassengerResolver = Resolver<PassengerTypeDetailsSHO | null>;
  export type NumberOfAvailableProductsResolver = Resolver<number | null>;
  export type RowNumberResolver = Resolver<number | null>;
  export type ColumnCodeResolver = Resolver<string | null>;
  export type LegendOrderResolver = Resolver<number | null>;
  export type LinkResolver = Resolver<string | null>;
}
/** ... */
export namespace PricesSMOResolvers {
  export interface Resolvers {
    amount?: AmountResolver;
    currencyCode?: CurrencyCodeResolver;
    description?: DescriptionResolver;
    discountPercentage?: DiscountPercentageResolver;
    milesAmount?: MilesAmountResolver;
    milesPercentage?: MilesPercentageResolver;
    milesToBeEarned?: MilesToBeEarnedResolver;
    standardAmount?: StandardAmountResolver;
    type?: TypeResolver;
  }

  export type AmountResolver = Resolver<number | null>;
  export type CurrencyCodeResolver = Resolver<string | null>;
  export type DescriptionResolver = Resolver<string | null>;
  export type DiscountPercentageResolver = Resolver<number | null>;
  export type MilesAmountResolver = Resolver<number | null>;
  export type MilesPercentageResolver = Resolver<number | null>;
  export type MilesToBeEarnedResolver = Resolver<number | null>;
  export type StandardAmountResolver = Resolver<number | null>;
  export type TypeResolver = Resolver<string | null>;
}
/** ... */
export namespace SegmentTypeDetailsSMOResolvers {
  export interface Resolvers {
    segmentId?: SegmentIdResolver;
  }

  export type SegmentIdResolver = Resolver<number | null>;
}
/** ... */
export namespace PassengerTypeDetailsSHOResolvers {
  export interface Resolvers {
    id?: IdResolver;
    firstName?: FirstNameResolver;
    lastName?: LastNameResolver;
    gender?: GenderResolver;
    title?: TitleResolver;
    seat?: SeatResolver;
    ticketBooklet?: TicketBookletResolver;
    memberships?: MembershipsResolver;
    paxTypeCode?: PaxTypeCodeResolver;
  }

  export type IdResolver = Resolver<string | null>;
  export type FirstNameResolver = Resolver<string | null>;
  export type LastNameResolver = Resolver<string | null>;
  export type GenderResolver = Resolver<CodeNameSMO | null>;
  export type TitleResolver = Resolver<CodeNameSMO | null>;
  export type SeatResolver = Resolver<SeatTypeSMO | null>;
  export type TicketBookletResolver = Resolver<TicketBookletSHO | null>;
  export type MembershipsResolver = Resolver<(MembershipsSHO | null)[] | null>;
  export type PaxTypeCodeResolver = Resolver<string | null>;
}
/** Simple generic object with code and name fields */
export namespace CodeNameSMOResolvers {
  export interface Resolvers {
    code?: CodeResolver;
    name?: NameResolver;
  }

  export type CodeResolver = Resolver<string | null>;
  export type NameResolver = Resolver<string | null>;
}
/** Seat Description */
export namespace SeatTypeSMOResolvers {
  export interface Resolvers {
    number?: NumberResolver;
    cabinClass?: CabinClassResolver;
    row?: RowResolver;
    column?: ColumnResolver;
  }

  export type NumberResolver = Resolver<string | null>;
  export type CabinClassResolver = Resolver<CodeNameSMO | null>;
  export type RowResolver = Resolver<NumberSeatSMO | null>;
  export type ColumnResolver = Resolver<CodeSMO | null>;
}
/** Simple generic object with the number field */
export namespace NumberSeatSMOResolvers {
  export interface Resolvers {
    number?: NumberResolver;
  }

  export type NumberResolver = Resolver<number | null>;
}
/** Simple generic object with the code field */
export namespace CodeSMOResolvers {
  export interface Resolvers {
    code?: CodeResolver;
  }

  export type CodeResolver = Resolver<string | null>;
}
/** Ticket Booklet Description */
export namespace TicketBookletSHOResolvers {
  export interface Resolvers {
    number?: NumberResolver;
    ticket?: TicketResolver;
  }

  export type NumberResolver = Resolver<string | null>;
  export type TicketResolver = Resolver<TicketBookletDeliverySHO | null>;
}
/** Simple generic object with the deliveryType field */
export namespace TicketBookletDeliverySHOResolvers {
  export interface Resolvers {
    deliveryType?: DeliveryTypeResolver;
  }

  export type DeliveryTypeResolver = Resolver<string | null>;
}
/** ... */
export namespace MembershipsSHOResolvers {
  export interface Resolvers {
    membershipType?: MembershipTypeResolver;
    membershipNumber?: MembershipNumberResolver;
    membershipLevel?: MembershipLevelResolver;
  }

  export type MembershipTypeResolver = Resolver<string | null>;
  export type MembershipNumberResolver = Resolver<string | null>;
  export type MembershipLevelResolver = Resolver<string | null>;
}

export namespace SeatDimensionDetailsSMOResolvers {
  export interface Resolvers {
    length?: LengthResolver;
    width?: WidthResolver;
  }

  export type LengthResolver = Resolver<number>;
  export type WidthResolver = Resolver<number>;
}
/** ... */
export namespace BaggageTypeSCOResolvers {
  export interface Resolvers {
    bagCount?: BagCountResolver;
    code?: CodeResolver;
    connection?: ConnectionResolver;
    passenger?: PassengerResolver;
    prices?: PricesResolver;
    productClass?: ProductClassResolver;
    productId?: ProductIdResolver;
    productType?: ProductTypeResolver;
    type?: TypeResolver;
    unit?: UnitResolver;
  }

  export type BagCountResolver = Resolver<number | null>;
  export type CodeResolver = Resolver<string | null>;
  export type ConnectionResolver = Resolver<ConnectionSCO | null>;
  export type PassengerResolver = Resolver<PassengerSCO | null>;
  export type PricesResolver = Resolver<(BaggageTypePriceSCO | null)[] | null>;
  export type ProductClassResolver = Resolver<string | null>;
  export type ProductIdResolver = Resolver<string | null>;
  export type ProductTypeResolver = Resolver<string | null>;
  export type TypeResolver = Resolver<string | null>;
  export type UnitResolver = Resolver<string | null>;
}
/** ... */
export namespace ConnectionSCOResolvers {
  export interface Resolvers {
    connectionId?: ConnectionIdResolver;
  }

  export type ConnectionIdResolver = Resolver<number | null>;
}

export namespace PassengerSCOResolvers {
  export interface Resolvers {
    passengerId?: PassengerIdResolver;
  }

  export type PassengerIdResolver = Resolver<string | null>;
}
/** ... */
export namespace BaggageTypePriceSCOResolvers {
  export interface Resolvers {
    amount?: AmountResolver;
    basePriceAmount?: BasePriceAmountResolver;
    currencyCode?: CurrencyCodeResolver;
    description?: DescriptionResolver;
  }

  export type AmountResolver = Resolver<number | null>;
  export type BasePriceAmountResolver = Resolver<number | null>;
  export type CurrencyCodeResolver = Resolver<string | null>;
  export type DescriptionResolver = Resolver<string | null>;
}
/** ... */
export namespace SeatTypeSCOResolvers {
  export interface Resolvers {
    code?: CodeResolver;
    columnCode?: ColumnCodeResolver;
    name?: NameResolver;
    passenger?: PassengerResolver;
    prices?: PricesResolver;
    productClass?: ProductClassResolver;
    productId?: ProductIdResolver;
    productType?: ProductTypeResolver;
    rowNumber?: RowNumberResolver;
    segment?: SegmentResolver;
  }

  export type CodeResolver = Resolver<string | null>;
  export type ColumnCodeResolver = Resolver<string | null>;
  export type NameResolver = Resolver<string | null>;
  export type PassengerResolver = Resolver<PassengerSCO | null>;
  export type PricesResolver = Resolver<(PriceSCO | null)[] | null>;
  export type ProductClassResolver = Resolver<string | null>;
  export type ProductIdResolver = Resolver<string | null>;
  export type ProductTypeResolver = Resolver<string | null>;
  export type RowNumberResolver = Resolver<number | null>;
  export type SegmentResolver = Resolver<SegmentSCO | null>;
}
/** ... */
export namespace PriceSCOResolvers {
  export interface Resolvers {
    amount?: AmountResolver;
    currencyCode?: CurrencyCodeResolver;
    description?: DescriptionResolver;
  }

  export type AmountResolver = Resolver<number | null>;
  export type CurrencyCodeResolver = Resolver<string | null>;
  export type DescriptionResolver = Resolver<string | null>;
}
/** ... */
export namespace SegmentSCOResolvers {
  export interface Resolvers {
    segmentId?: SegmentIdResolver;
  }

  export type SegmentIdResolver = Resolver<number | null>;
}

export namespace HandoverCheckoutResolvers {
  export interface Resolvers {
    bookingCode?: BookingCodeResolver;
    emailAddress?: EmailAddressResolver;
    lastName?: LastNameResolver;
    destination?: DestinationResolver;
    shopId?: ShopIdResolver;
    connections?: ConnectionsResolver;
    productList?: ProductListResolver;
    totalPrice?: TotalPriceResolver;
    totalBookingFee?: TotalBookingFeeResolver;
    payments?: PaymentsResolver;
  }

  export type BookingCodeResolver = Resolver<string | null>;
  export type EmailAddressResolver = Resolver<string | null>;
  export type LastNameResolver = Resolver<string | null>;
  export type DestinationResolver = Resolver<CodeName | null>;
  export type ShopIdResolver = Resolver<string | null>;
  export type ConnectionsResolver = Resolver<(FlightProductConnection | null)[] | null>;
  export type ProductListResolver = Resolver<ProductList | null>;
  export type TotalPriceResolver = Resolver<TotalPrice | null>;
  export type TotalBookingFeeResolver = Resolver<TotalBookingFee | null>;
  export type PaymentsResolver = Resolver<(PaymentHUB | null)[] | null>;
}

export namespace FlightProductConnectionResolvers {
  export interface Resolvers {
    segments?: SegmentsResolver;
  }

  export type SegmentsResolver = Resolver<(FlightProductSegment | null)[] | null>;
}

export namespace FlightProductSegmentResolvers {
  export interface Resolvers {
    fareBase?: FareBaseResolver;
    cabinClass?: CabinClassResolver;
    flightNumber?: FlightNumberResolver;
  }

  export type FareBaseResolver = Resolver<string | null>;
  export type CabinClassResolver = Resolver<string | null>;
  export type FlightNumberResolver = Resolver<string | null>;
}

export namespace ProductListResolvers {
  export interface Resolvers {
    flightProduct?: FlightProductResolver;
    baggageProducts?: BaggageProductsResolver;
    seatProducts?: SeatProductsResolver;
    mealProducts?: MealProductsResolver;
    insuranceProduct?: InsuranceProductResolver;
  }

  export type FlightProductResolver = Resolver<FlightProduct | null>;
  export type BaggageProductsResolver = Resolver<(AncillaryProduct | null)[] | null>;
  export type SeatProductsResolver = Resolver<(AncillaryProduct | null)[] | null>;
  export type MealProductsResolver = Resolver<(AncillaryProduct | null)[] | null>;
  export type InsuranceProductResolver = Resolver<AncillaryProduct | null>;
}

export namespace FlightProductResolvers {
  export interface Resolvers {
    price?: PriceResolver;
    status?: StatusResolver;
    pricesPerPassenger?: PricesPerPassengerResolver;
  }

  export type PriceResolver = Resolver<ProductPrice>;
  export type StatusResolver = Resolver<string | null>;
  export type PricesPerPassengerResolver = Resolver<(PricePerPassenger | null)[] | null>;
}

export namespace ProductPriceResolvers {
  export interface Resolvers {
    amount?: AmountResolver;
  }

  export type AmountResolver = Resolver<number | null>;
}

export namespace PricePerPassengerResolvers {
  export interface Resolvers {
    passengerType?: PassengerTypeResolver;
    amount?: AmountResolver;
    taxTotal?: TaxTotalResolver;
    taxes?: TaxesResolver;
  }

  export type PassengerTypeResolver = Resolver<string | null>;
  export type AmountResolver = Resolver<number | null>;
  export type TaxTotalResolver = Resolver<number | null>;
  export type TaxesResolver = Resolver<(Tax | null)[] | null>;
}

export namespace TaxResolvers {
  export interface Resolvers {
    code?: CodeResolver;
    amount?: AmountResolver;
  }

  export type CodeResolver = Resolver<string | null>;
  export type AmountResolver = Resolver<number | null>;
}

export namespace AncillaryProductResolvers {
  export interface Resolvers {
    price?: PriceResolver;
  }

  export type PriceResolver = Resolver<ProductPrice>;
}

export namespace TotalPriceResolvers {
  export interface Resolvers {
    amount?: AmountResolver;
  }

  export type AmountResolver = Resolver<number>;
}

export namespace TotalBookingFeeResolvers {
  export interface Resolvers {
    amount?: AmountResolver;
  }

  export type AmountResolver = Resolver<number>;
}

export namespace PaymentHUBResolvers {
  export interface Resolvers {
    paymentMethod?: PaymentMethodResolver;
    amountToPay?: AmountToPayResolver;
    status?: StatusResolver;
  }

  export type PaymentMethodResolver = Resolver<PaymentMethodHUB | null>;
  export type AmountToPayResolver = Resolver<AmountToPay | null>;
  export type StatusResolver = Resolver<string | null>;
}

export namespace PaymentMethodHUBResolvers {
  export interface Resolvers {
    code?: CodeResolver;
    translationCode?: TranslationCodeResolver;
    name?: NameResolver;
    directPayment?: DirectPaymentResolver;
    additionalInfo?: AdditionalInfoResolver;
    timeLimit?: TimeLimitResolver;
    inputFields?: InputFieldsResolver;
    _links?: _linksResolver;
  }

  export type CodeResolver = Resolver<string | null>;
  export type TranslationCodeResolver = Resolver<string | null>;
  export type NameResolver = Resolver<string | null>;
  export type DirectPaymentResolver = Resolver<boolean | null>;
  export type AdditionalInfoResolver = Resolver<string | null>;
  export type TimeLimitResolver = Resolver<TimeLimit | null>;
  export type InputFieldsResolver = Resolver<(InputField | null)[] | null>;
  export type _linksResolver = Resolver<AdditionalInfoLink | null>;
}

export namespace TimeLimitResolvers {
  export interface Resolvers {
    timeLimit?: TimeLimitResolver;
    timeLimitLabel?: TimeLimitLabelResolver;
  }

  export type TimeLimitResolver = Resolver<string | null>;
  export type TimeLimitLabelResolver = Resolver<string | null>;
}

export namespace InputFieldResolvers {
  export interface Resolvers {
    code?: CodeResolver;
    name?: NameResolver;
    value?: ValueResolver;
  }

  export type CodeResolver = Resolver<string | null>;
  export type NameResolver = Resolver<string | null>;
  export type ValueResolver = Resolver<string | null>;
}

export namespace AdditionalInfoLinkResolvers {
  export interface Resolvers {
    additionalInfoUrl?: AdditionalInfoUrlResolver;
  }

  export type AdditionalInfoUrlResolver = Resolver<AdditionalInfoUrl | null>;
}

export namespace AdditionalInfoUrlResolvers {
  export interface Resolvers {
    href?: HrefResolver;
  }

  export type HrefResolver = Resolver<string | null>;
}

export namespace AmountToPayResolvers {
  export interface Resolvers {
    amount?: AmountResolver;
    name?: NameResolver;
    currencyCode?: CurrencyCodeResolver;
  }

  export type AmountResolver = Resolver<number | null>;
  export type NameResolver = Resolver<string | null>;
  export type CurrencyCodeResolver = Resolver<string | null>;
}
/** CompanionsList */
export namespace CompanionsListResolvers {
  export interface Resolvers {
    companions?: CompanionsResolver;
  }

  export type CompanionsResolver = Resolver<(Companion | null)[] | null>;
}
/** Companion */
export namespace CompanionResolvers {
  export interface Resolvers {
    id?: IdResolver;
    salutation?: SalutationResolver;
    givenNames?: GivenNamesResolver;
    familyName?: FamilyNameResolver;
    dateOfBirth?: DateOfBirthResolver;
    loyaltyProgramPreference?: LoyaltyProgramPreferenceResolver;
    emailAddress?: EmailAddressResolver;
  }

  export type IdResolver = Resolver<string | null>;
  export type SalutationResolver = Resolver<CodeNameCUO | null>;
  export type GivenNamesResolver = Resolver<string | null>;
  export type FamilyNameResolver = Resolver<string | null>;
  export type DateOfBirthResolver = Resolver<string | null>;
  export type LoyaltyProgramPreferenceResolver = Resolver<LoyaltyProgramPreference | null>;
  export type EmailAddressResolver = Resolver<string | null>;
}
/** Code && Name fields */
export namespace CodeNameCUOResolvers {
  export interface Resolvers {
    code?: CodeResolver;
    name?: NameResolver;
  }

  export type CodeResolver = Resolver<string | null>;
  export type NameResolver = Resolver<string | null>;
}
/** Loyalty Program Preference */
export namespace LoyaltyProgramPreferenceResolvers {
  export interface Resolvers {
    code?: CodeResolver;
    name?: NameResolver;
    membershipNumber?: MembershipNumberResolver;
  }

  export type CodeResolver = Resolver<string | null>;
  export type NameResolver = Resolver<string | null>;
  export type MembershipNumberResolver = Resolver<string | null>;
}
/** Travel Document type */
export namespace TravelDocumentResolvers {
  export interface Resolvers {
    number?: NumberResolver;
    type?: TypeResolver;
    dateOfBirth?: DateOfBirthResolver;
    expiryDate?: ExpiryDateResolver;
    givenNames?: GivenNamesResolver;
    surname?: SurnameResolver;
    countryOfIssue?: CountryOfIssueResolver;
    nationality?: NationalityResolver;
    gender?: GenderResolver;
    id?: IdResolver;
  }

  export type NumberResolver = Resolver<string | null>;
  export type TypeResolver = Resolver<CodeNameCUO | null>;
  export type DateOfBirthResolver = Resolver<string | null>;
  export type ExpiryDateResolver = Resolver<string | null>;
  export type GivenNamesResolver = Resolver<string | null>;
  export type SurnameResolver = Resolver<string | null>;
  export type CountryOfIssueResolver = Resolver<Country | null>;
  export type NationalityResolver = Resolver<Country | null>;
  export type GenderResolver = Resolver<CodeNameCUO | null>;
  export type IdResolver = Resolver<number | null>;
}
/** SocialConnections type */
export namespace SocialConnectionsResolvers {
  export interface Resolvers {
    socialConnections?: SocialConnectionsResolver;
    hasSocialConnection?: HasSocialConnectionResolver;
  }

  export type SocialConnectionsResolver = Resolver<(SocialConnectionCUO | null)[] | null>;
  export type HasSocialConnectionResolver = Resolver<boolean | null>;
}
/** Social connections */
export namespace SocialConnectionCUOResolvers {
  export interface Resolvers {
    type?: TypeResolver;
    screenName?: ScreenNameResolver;
    socialPhotoURL?: SocialPhotoURLResolver;
    disconnectURI?: DisconnectURIResolver;
  }

  export type TypeResolver = Resolver<string | null>;
  export type ScreenNameResolver = Resolver<string | null>;
  export type SocialPhotoURLResolver = Resolver<string | null>;
  export type DisconnectURIResolver = Resolver<string | null>;
}
/** Payment type */
export namespace PaymentTypeCUOResolvers {
  export interface Resolvers {
    code?: CodeResolver;
    name?: NameResolver;
    paymentMethod?: PaymentMethodResolver;
  }

  export type CodeResolver = Resolver<string | null>;
  export type NameResolver = Resolver<string | null>;
  export type PaymentMethodResolver = Resolver<PaymentMethodCUO | null>;
}
/** Payment Method */
export namespace PaymentMethodCUOResolvers {
  export interface Resolvers {
    code?: CodeResolver;
    name?: NameResolver;
  }

  export type CodeResolver = Resolver<string | null>;
  export type NameResolver = Resolver<string | null>;
}
/** Payment Methods */
export namespace PaymentMethodsCUOResolvers {
  export interface Resolvers {
    code?: CodeResolver;
    name?: NameResolver;
    displayOrder?: DisplayOrderResolver;
    dcpActivated?: DcpActivatedResolver;
    paymentFields?: PaymentFieldsResolver;
    _links?: _linksResolver;
  }

  export type CodeResolver = Resolver<string | null>;
  export type NameResolver = Resolver<string | null>;
  export type DisplayOrderResolver = Resolver<string | null>;
  export type DcpActivatedResolver = Resolver<boolean | null>;
  export type PaymentFieldsResolver = Resolver<(PaymentFieldsCUO | null)[] | null>;
  export type _linksResolver = Resolver<LinksCUO | null>;
}
/** Payment Fields */
export namespace PaymentFieldsCUOResolvers {
  export interface Resolvers {
    code?: CodeResolver;
    name?: NameResolver;
    displayOrder?: DisplayOrderResolver;
    paymentFieldProperties?: PaymentFieldPropertiesResolver;
  }

  export type CodeResolver = Resolver<string | null>;
  export type NameResolver = Resolver<string | null>;
  export type DisplayOrderResolver = Resolver<string | null>;
  export type PaymentFieldPropertiesResolver = Resolver<(PaymentFieldPropertyCUO | null)[] | null>;
}
/** Payment Field Property */
export namespace PaymentFieldPropertyCUOResolvers {
  export interface Resolvers {
    name?: NameResolver;
    value?: ValueResolver;
  }

  export type NameResolver = Resolver<string | null>;
  export type ValueResolver = Resolver<string | null>;
}
/** Links */
export namespace LinksCUOResolvers {
  export interface Resolvers {
    addPaymentPreference?: AddPaymentPreferenceResolver;
  }

  export type AddPaymentPreferenceResolver = Resolver<AddPaymentPreferenceCUO | null>;
}
/** Add Payment Preference */
export namespace AddPaymentPreferenceCUOResolvers {
  export interface Resolvers {
    href?: HrefResolver;
  }

  export type HrefResolver = Resolver<string | null>;
}
/** Payment Preference */
export namespace PaymentPreferenceCUOResolvers {
  export interface Resolvers {
    paymentId?: PaymentIdResolver;
    preferred?: PreferredResolver;
    corporate?: CorporateResolver;
    paymentFields?: PaymentFieldsResolver;
    paymentType?: PaymentTypeResolver;
  }

  export type PaymentIdResolver = Resolver<string | null>;
  export type PreferredResolver = Resolver<boolean | null>;
  export type CorporateResolver = Resolver<boolean | null>;
  export type PaymentFieldsResolver = Resolver<(PaymentFieldCUO | null)[] | null>;
  export type PaymentTypeResolver = Resolver<PaymentTypeCUO | null>;
}
/** Payment Field */
export namespace PaymentFieldCUOResolvers {
  export interface Resolvers {
    code?: CodeResolver;
    value?: ValueResolver;
  }

  export type CodeResolver = Resolver<string | null>;
  export type ValueResolver = Resolver<string | null>;
}
/** Loyalty Program type */
export namespace LoyaltyProgramResolvers {
  export interface Resolvers {
    code?: CodeResolver;
    name?: NameResolver;
  }

  export type CodeResolver = Resolver<string | null>;
  export type NameResolver = Resolver<string | null>;
}
/** Communication Subscriptions and Publication */
export namespace CommunicationPublicationsCUOResolvers {
  export interface Resolvers {
    flyingblue?: FlyingblueResolver;
    sales?: SalesResolver;
    telemarketing?: TelemarketingResolver;
    consents?: ConsentsResolver;
  }

  export type FlyingblueResolver = Resolver<(CommunicationPublicationCUO | null)[] | null>;
  export type SalesResolver = Resolver<CommunicationPublicationsSalesCUO | null>;
  export type TelemarketingResolver = Resolver<(CommunicationPublicationCUO | null)[] | null>;
  export type ConsentsResolver = Resolver<(Consents | null)[] | null>;
}
/** Communication Publication */
export namespace CommunicationPublicationCUOResolvers {
  export interface Resolvers {
    name?: NameResolver;
    nameMarketLang?: NameMarketLangResolver;
    meta?: MetaResolver;
    mandatoryOptin?: MandatoryOptinResolver;
    optin?: OptinResolver;
  }

  export type NameResolver = Resolver<string | null>;
  export type NameMarketLangResolver = Resolver<string | null>;
  export type MetaResolver = Resolver<PublicationMetaCUO | null>;
  export type MandatoryOptinResolver = Resolver<boolean | null>;
  export type OptinResolver = Resolver<boolean | null>;
}
/** Communication Subscriptions and Publication metadata */
export namespace PublicationMetaCUOResolvers {
  export interface Resolvers {
    code?: CodeResolver;
    language?: LanguageResolver;
    mailingType?: MailingTypeResolver;
    market?: MarketResolver;
    optInChangeOption?: OptInChangeOptionResolver;
  }

  export type CodeResolver = Resolver<string | null>;
  export type LanguageResolver = Resolver<string | null>;
  export type MailingTypeResolver = Resolver<string | null>;
  export type MarketResolver = Resolver<string | null>;
  export type OptInChangeOptionResolver = Resolver<string | null>;
}
/** Communication Subscriptions and Publication */
export namespace CommunicationPublicationsSalesCUOResolvers {
  export interface Resolvers {
    klmNewsletters?: KlmNewslettersResolver;
    newsletters?: NewslettersResolver;
    magazines?: MagazinesResolver;
    exotic?: ExoticResolver;
  }

  export type KlmNewslettersResolver = Resolver<(CommunicationPublicationCUO | null)[] | null>;
  export type NewslettersResolver = Resolver<(CommunicationPublicationCUO | null)[] | null>;
  export type MagazinesResolver = Resolver<(CommunicationPublicationCUO | null)[] | null>;
  export type ExoticResolver = Resolver<(CommunicationPublicationCUO | null)[] | null>;
}
/** Communication Preferences Consents */
export namespace ConsentsResolvers {
  export interface Resolvers {
    optin?: OptinResolver;
    name?: NameResolver;
    meta?: MetaResolver;
  }

  export type OptinResolver = Resolver<boolean | null>;
  export type NameResolver = Resolver<string | null>;
  export type MetaResolver = Resolver<ConsentMeta | null>;
}
/** Communication Preferences Consents meta */
export namespace ConsentMetaResolvers {
  export interface Resolvers {
    code?: CodeResolver;
    optInChangeOption?: OptInChangeOptionResolver;
    description?: DescriptionResolver;
  }

  export type CodeResolver = Resolver<string | null>;
  export type OptInChangeOptionResolver = Resolver<string | null>;
  export type DescriptionResolver = Resolver<string | null>;
}
/** FlyingBlue Benefits */
export namespace FlyingBlueBenefitsResolvers {
  export interface Resolvers {
    fbLevel?: FbLevelResolver;
    ultimate?: UltimateResolver;
    status?: StatusResolver;
    platinumForLife?: PlatinumForLifeResolver;
    currentBenefits?: CurrentBenefitsResolver;
    nextBenefits?: NextBenefitsResolver;
  }

  export type FbLevelResolver = Resolver<string | null>;
  export type UltimateResolver = Resolver<FlyingBlueUltimateStatus | null>;
  export type StatusResolver = Resolver<FlyingBlueStatus | null>;
  export type PlatinumForLifeResolver = Resolver<FlyingBluePFLStatus | null>;
  export type CurrentBenefitsResolver = Resolver<(FlyingBlueBenefit | null)[] | null>;
  export type NextBenefitsResolver = Resolver<(FlyingBlueBenefit | null)[] | null>;
}
/** FlyingBlue UltimateStatus */
export namespace FlyingBlueUltimateStatusResolvers {
  export interface Resolvers {
    rank?: RankResolver;
    label?: LabelResolver;
    ultimateCounter?: UltimateCounterResolver;
    ultimateEndValidity?: UltimateEndValidityResolver;
    keepUltimate?: KeepUltimateResolver;
  }

  export type RankResolver = Resolver<number | null>;
  export type LabelResolver = Resolver<string | null>;
  export type UltimateCounterResolver = Resolver<FlyingBlueTierDetails | null>;
  export type UltimateEndValidityResolver = Resolver<FlyingBlueTierDetails | null>;
  export type KeepUltimateResolver = Resolver<FlyingBlueTierDetails | null>;
}
/** FlyingBlue Platinum for Life Status */
export namespace FlyingBluePFLStatusResolvers {
  export interface Resolvers {
    rank?: RankResolver;
    label?: LabelResolver;
    description?: DescriptionResolver;
    pflCounter?: PflCounterResolver;
    pflTarget?: PflTargetResolver;
  }

  export type RankResolver = Resolver<number | null>;
  export type LabelResolver = Resolver<string | null>;
  export type DescriptionResolver = Resolver<string | null>;
  export type PflCounterResolver = Resolver<FlyingBlueTierDetails | null>;
  export type PflTargetResolver = Resolver<FlyingBlueTierDetails | null>;
}
/** FlyingBlue Benefit */
export namespace FlyingBlueBenefitResolvers {
  export interface Resolvers {
    priority?: PriorityResolver;
    label?: LabelResolver;
    labelContent?: LabelContentResolver;
    benefitsList?: BenefitsListResolver;
  }

  export type PriorityResolver = Resolver<number | null>;
  export type LabelResolver = Resolver<string | null>;
  export type LabelContentResolver = Resolver<string | null>;
  export type BenefitsListResolver = Resolver<(string | null)[] | null>;
}
/** FlyingBlue Dashboard */
export namespace FlyingBlueDashboardResolvers {
  export interface Resolvers {
    individual?: IndividualResolver;
    fbLevel?: FbLevelResolver;
    miles?: MilesResolver;
    xpCounters?: XpCountersResolver;
    status?: StatusResolver;
    lastTransaction?: LastTransactionResolver;
    cardImage?: CardImageResolver;
  }

  export type IndividualResolver = Resolver<FlyingBlueIndividual | null>;
  export type FbLevelResolver = Resolver<string | null>;
  export type MilesResolver = Resolver<FlyingBlueMiles | null>;
  export type XpCountersResolver = Resolver<(FlyingBlueTransactionsXPCounter | null)[] | null>;
  export type StatusResolver = Resolver<FlyingBlueStatus | null>;
  export type LastTransactionResolver = Resolver<FlyingBlueLastTransaction | null>;
  export type CardImageResolver = Resolver<FlyingBlueCardImage | null>;
}
/** FlyingBlue Individual */
export namespace FlyingBlueIndividualResolvers {
  export interface Resolvers {
    gin?: GinResolver;
    cin?: CinResolver;
  }

  export type GinResolver = Resolver<string | null>;
  export type CinResolver = Resolver<string | null>;
}
/** FlyingBlue Miles */
export namespace FlyingBlueMilesResolvers {
  export interface Resolvers {
    rank?: RankResolver;
    label?: LabelResolver;
    amount?: AmountResolver;
  }

  export type RankResolver = Resolver<number | null>;
  export type LabelResolver = Resolver<string | null>;
  export type AmountResolver = Resolver<number | null>;
}
/** FlyingBlue Transactions XP Counter */
export namespace FlyingBlueTransactionsXPCounterResolvers {
  export interface Resolvers {
    endOfQualifyingPeriod?: EndOfQualifyingPeriodResolver;
    labelXP?: LabelXPResolver;
    xpAmount?: XpAmountResolver;
    ultimate?: UltimateResolver;
  }

  export type EndOfQualifyingPeriodResolver = Resolver<string | null>;
  export type LabelXPResolver = Resolver<string | null>;
  export type XpAmountResolver = Resolver<number | null>;
  export type UltimateResolver = Resolver<boolean | null>;
}
/** FlyingBlue Last Transaction */
export namespace FlyingBlueLastTransactionResolvers {
  export interface Resolvers {
    rank?: RankResolver;
    label?: LabelResolver;
    date?: DateResolver;
    iconURL?: IconURLResolver;
    description?: DescriptionResolver;
    milesAmount?: MilesAmountResolver;
    xpAmount?: XpAmountResolver;
    labelMiles?: LabelMilesResolver;
    labelXP?: LabelXPResolver;
  }

  export type RankResolver = Resolver<number | null>;
  export type LabelResolver = Resolver<string | null>;
  export type DateResolver = Resolver<string | null>;
  export type IconURLResolver = Resolver<string | null>;
  export type DescriptionResolver = Resolver<string | null>;
  export type MilesAmountResolver = Resolver<number | null>;
  export type XpAmountResolver = Resolver<number | null>;
  export type LabelMilesResolver = Resolver<string | null>;
  export type LabelXPResolver = Resolver<string | null>;
}
/** FlyingBlue Card */
export namespace FlyingBlueCardImageResolvers {
  export interface Resolvers {
    href?: HrefResolver;
    fbCardRecto?: FbCardRectoResolver;
    fbCardVerso?: FbCardVersoResolver;
  }

  export type HrefResolver = Resolver<string | null>;
  export type FbCardRectoResolver = Resolver<string | null>;
  export type FbCardVersoResolver = Resolver<string | null>;
}
/** FlyingBlue Transaction History */
export namespace FlyingBlueTransactionHistoryResolvers {
  export interface Resolvers {
    milesAndXPCounter?: MilesAndXPCounterResolver;
    milesValidities?: MilesValiditiesResolver;
    transactions?: TransactionsResolver;
  }

  export type MilesAndXPCounterResolver = Resolver<FlyingBlueTransactionsMilesAndXPCounter | null>;
  export type MilesValiditiesResolver = Resolver<(FlyingBlueTransactionsMilesValidity | null)[] | null>;
  export type TransactionsResolver = Resolver<NewFlyingBlueTransactions | null>;
}
/** FlyingBlue Transactions Miles and XP Counter */
export namespace FlyingBlueTransactionsMilesAndXPCounterResolvers {
  export interface Resolvers {
    labelMiles?: LabelMilesResolver;
    milesAmount?: MilesAmountResolver;
    xpCounters?: XpCountersResolver;
  }

  export type LabelMilesResolver = Resolver<string | null>;
  export type MilesAmountResolver = Resolver<number | null>;
  export type XpCountersResolver = Resolver<(FlyingBlueTransactionsXPCounter | null)[] | null>;
}
/** FlyingBlue Transactions - Miles Validity */
export namespace FlyingBlueTransactionsMilesValidityResolvers {
  export interface Resolvers {
    details?: DetailsResolver;
    label?: LabelResolver;
    milesAmount?: MilesAmountResolver;
    validityDate?: ValidityDateResolver;
    type?: TypeResolver;
  }

  export type DetailsResolver = Resolver<string | null>;
  export type LabelResolver = Resolver<string | null>;
  export type MilesAmountResolver = Resolver<number | null>;
  export type ValidityDateResolver = Resolver<string | null>;
  export type TypeResolver = Resolver<string | null>;
}
/** FlyingBlue Transactions */
export namespace NewFlyingBlueTransactionsResolvers {
  export interface Resolvers {
    labelTransactions?: LabelTransactionsResolver;
    labelDetails?: LabelDetailsResolver;
    moreTransactions?: MoreTransactionsResolver;
    transactionsList?: TransactionsListResolver;
  }

  export type LabelTransactionsResolver = Resolver<string | null>;
  export type LabelDetailsResolver = Resolver<string | null>;
  export type MoreTransactionsResolver = Resolver<FlyingBlueLink | null>;
  export type TransactionsListResolver = Resolver<(NewFlyingBlueTransaction | null)[] | null>;
}
/** FlyingBlue Transaction */
export namespace NewFlyingBlueTransactionResolvers {
  export interface Resolvers {
    activityDate?: ActivityDateResolver;
    ancillaryLabelCategory?: AncillaryLabelCategoryResolver;
    complementaryDescriptionData?: ComplementaryDescriptionDataResolver;
    description?: DescriptionResolver;
    details?: DetailsResolver;
    finalDestination?: FinalDestinationResolver;
    iconURL?: IconURLResolver;
    labelMiles?: LabelMilesResolver;
    labelXP?: LabelXPResolver;
    milesAmount?: MilesAmountResolver;
    operationType?: OperationTypeResolver;
    subType?: SubTypeResolver;
    transactionDate?: TransactionDateResolver;
    type?: TypeResolver;
    xpAmount?: XpAmountResolver;
    xpActivity?: XpActivityResolver;
  }

  export type ActivityDateResolver = Resolver<string | null>;
  export type AncillaryLabelCategoryResolver = Resolver<string | null>;
  export type ComplementaryDescriptionDataResolver = Resolver<(string | null)[] | null>;
  export type DescriptionResolver = Resolver<string | null>;
  export type DetailsResolver = Resolver<(FlyingBlueTransactionDetail | null)[] | null>;
  export type FinalDestinationResolver = Resolver<string | null>;
  export type IconURLResolver = Resolver<string | null>;
  export type LabelMilesResolver = Resolver<string | null>;
  export type LabelXPResolver = Resolver<string | null>;
  export type MilesAmountResolver = Resolver<number | null>;
  export type OperationTypeResolver = Resolver<string | null>;
  export type SubTypeResolver = Resolver<string | null>;
  export type TransactionDateResolver = Resolver<string | null>;
  export type TypeResolver = Resolver<string | null>;
  export type XpAmountResolver = Resolver<number | null>;
  export type XpActivityResolver = Resolver<(xpActivityList | null)[] | null>;
}
/** FlyingBlue Transaction Detail */
export namespace FlyingBlueTransactionDetailResolvers {
  export interface Resolvers {
    activityDate?: ActivityDateResolver;
    ancillaryLabelCategory?: AncillaryLabelCategoryResolver;
    bookingClass?: BookingClassResolver;
    complementaryDetailDescriptionData?: ComplementaryDetailDescriptionDataResolver;
    description?: DescriptionResolver;
    destination?: DestinationResolver;
    iconURL?: IconURLResolver;
    labelMiles?: LabelMilesResolver;
    labelXP?: LabelXPResolver;
    milesAmount?: MilesAmountResolver;
    origin?: OriginResolver;
    subType?: SubTypeResolver;
    transactionDate?: TransactionDateResolver;
    ultimateEligibility?: UltimateEligibilityResolver;
    xpAmount?: XpAmountResolver;
    xpActivityDetails?: XpActivityDetailsResolver;
  }

  export type ActivityDateResolver = Resolver<string | null>;
  export type AncillaryLabelCategoryResolver = Resolver<string | null>;
  export type BookingClassResolver = Resolver<string | null>;
  export type ComplementaryDetailDescriptionDataResolver = Resolver<(string | null)[] | null>;
  export type DescriptionResolver = Resolver<string | null>;
  export type DestinationResolver = Resolver<string | null>;
  export type IconURLResolver = Resolver<string | null>;
  export type LabelMilesResolver = Resolver<string | null>;
  export type LabelXPResolver = Resolver<string | null>;
  export type MilesAmountResolver = Resolver<number | null>;
  export type OriginResolver = Resolver<string | null>;
  export type SubTypeResolver = Resolver<string | null>;
  export type TransactionDateResolver = Resolver<string | null>;
  export type UltimateEligibilityResolver = Resolver<boolean | null>;
  export type XpAmountResolver = Resolver<number | null>;
  export type XpActivityDetailsResolver = Resolver<(xpActivityDetailsList | null)[] | null>;
}
/** FlyingBlue xpActivityDetailsList */
export namespace xpActivityDetailsListResolvers {
  export interface Resolvers {
    type?: TypeResolver;
    amount?: AmountResolver;
    amountLabel?: AmountLabelResolver;
  }

  export type TypeResolver = Resolver<string | null>;
  export type AmountResolver = Resolver<number | null>;
  export type AmountLabelResolver = Resolver<string | null>;
}
/** FlyingBlue xpActivityList */
export namespace xpActivityListResolvers {
  export interface Resolvers {
    type?: TypeResolver;
    amount?: AmountResolver;
    amountLabel?: AmountLabelResolver;
  }

  export type TypeResolver = Resolver<string | null>;
  export type AmountResolver = Resolver<number | null>;
  export type AmountLabelResolver = Resolver<string | null>;
}
/** FlyingBlue Contact Details */
export namespace FlyingBlueContactDetailsResolvers {
  export interface Resolvers {
    fbLogoURL?: FbLogoURLResolver;
  }

  export type FbLogoURLResolver = Resolver<string | null>;
}
/** Contact Center list */
export namespace ContactCenterPhoneResolvers {
  export interface Resolvers {
    isFB?: IsFBResolver;
    phoneSegment?: PhoneSegmentResolver;
    phoneNumber?: PhoneNumberResolver;
    costTypeLabel?: CostTypeLabelResolver;
    referenceTimezoneLabel?: ReferenceTimezoneLabelResolver;
    spokenLanguages?: SpokenLanguagesResolver;
  }

  export type IsFBResolver = Resolver<boolean>;
  export type PhoneSegmentResolver = Resolver<string>;
  export type PhoneNumberResolver = Resolver<string>;
  export type CostTypeLabelResolver = Resolver<string>;
  export type ReferenceTimezoneLabelResolver = Resolver<string>;
  export type SpokenLanguagesResolver = Resolver<(ContactCenterSpokenLanguage | null)[] | null>;
}

export namespace ContactCenterSpokenLanguageResolvers {
  export interface Resolvers {
    languages?: LanguagesResolver;
    openingDays?: OpeningDaysResolver;
  }

  export type LanguagesResolver = Resolver<(string | null)[] | null>;
  export type OpeningDaysResolver = Resolver<(ContactCenterOpeningDays | null)[] | null>;
}

export namespace ContactCenterOpeningDaysResolvers {
  export interface Resolvers {
    days?: DaysResolver;
    hours?: HoursResolver;
  }

  export type DaysResolver = Resolver<string | null>;
  export type HoursResolver = Resolver<(ContactCenterOpeningHours | null)[] | null>;
}

export namespace ContactCenterOpeningHoursResolvers {
  export interface Resolvers {
    startTime?: StartTimeResolver;
    endTime?: EndTimeResolver;
  }

  export type StartTimeResolver = Resolver<string | null>;
  export type EndTimeResolver = Resolver<string | null>;
}
/** Voucher Mutation Type */
export namespace MutationResolvers {
  export interface Resolvers {
    updateCurrencyMutation?: UpdateCurrencyMutationResolver;
    addInsurance?: AddInsuranceResolver;
    replaceInsurance?: ReplaceInsuranceResolver;
    deleteInsurance?: DeleteInsuranceResolver;
    orderV2?: OrderV2Resolver;
    postPassengerMutation?: PostPassengerMutationResolver;
    paymentMutation?: PaymentMutationResolver;
    resumePaymentMutation?: ResumePaymentMutationResolver;
    putBin?: PutBinResolver;
    putCurrency?: PutCurrencyResolver;
    deleteCurrency?: DeleteCurrencyResolver;
    putMiles?: PutMilesResolver;
    deleteMiles?: DeleteMilesResolver;
    postPay?: PostPayResolver;
    resumePaymentV2?: ResumePaymentV2Resolver;
    putDiscountCode?: PutDiscountCodeResolver;
    deleteDiscountCode?: DeleteDiscountCodeResolver;
    postVouchers?: PostVouchersResolver;
    deleteVoucher?: DeleteVoucherResolver;
    deleteAllCartProducts?: DeleteAllCartProductsResolver;
    changeBaggage?: ChangeBaggageResolver;
    changeEnvironmental?: ChangeEnvironmentalResolver;
    boaLink?: BoaLinkResolver;
    postReservationInvoice?: PostReservationInvoiceResolver;
    saveUMNR?: SaveUMNRResolver;
    checkInSavePassengerInfo?: CheckInSavePassengerInfoResolver;
    checkInSavePassengerAPIS?: CheckInSavePassengerAPISResolver;
    checkInSubmit?: CheckInSubmitResolver;
    checkIn?: CheckInResolver;
    checkInAddPassenger?: CheckInAddPassengerResolver;
    checkInTransferPassenger?: CheckInTransferPassengerResolver;
    addUser?: AddUserResolver;
    updateUser?: UpdateUserResolver;
    deleteUser?: DeleteUserResolver;
    deletePhoneNumber?: DeletePhoneNumberResolver;
    deletePostalAddress?: DeletePostalAddressResolver;
    updateAll?: UpdateAllResolver;
    postPassengerMutationV2?: PostPassengerMutationV2Resolver;
    changeSeat?: ChangeSeatResolver;
    updateCompanion?: UpdateCompanionResolver;
    createCompanion?: CreateCompanionResolver;
    deleteCompanion?: DeleteCompanionResolver;
    updateTravelDocument?: UpdateTravelDocumentResolver;
    deleteTravelDocument?: DeleteTravelDocumentResolver;
    deleteSocialConnection?: DeleteSocialConnectionResolver;
    changePaymentPreference?: ChangePaymentPreferenceResolver;
    checkSecurePaymentPreference?: CheckSecurePaymentPreferenceResolver;
    deletePaymentPreference?: DeletePaymentPreferenceResolver;
    saveSecurePaymentPreference?: SaveSecurePaymentPreferenceResolver;
    updateSubscriptions?: UpdateSubscriptionsResolver;
    flyingBlueEnrolment?: FlyingBlueEnrolmentResolver;
    flyingBlueUpgrade?: FlyingBlueUpgradeResolver;
  }

  export type UpdateCurrencyMutationResolver = Resolver<OrderCOO | null, UpdateCurrencyMutationArgs>;
  export interface UpdateCurrencyMutationArgs {
    conversationStateId?: UniqueId | null;
    orderId: UniqueId;
    pnr?: string | null;
    name?: string | null;
    currencyCode?: string | null;
    paymentMethodCode?: string | null;
    binNumber?: string | null;
  }

  export type AddInsuranceResolver = Resolver<OrderV2 | null, AddInsuranceArgs>;
  export interface AddInsuranceArgs {
    conversationStateId: UniqueId;
    productCodeToAdd?: string | null;
  }

  export type ReplaceInsuranceResolver = Resolver<OrderV2 | null, ReplaceInsuranceArgs>;
  export interface ReplaceInsuranceArgs {
    conversationStateId: UniqueId;
    productIdToDelete?: string | null;
    productCodeToAdd?: string | null;
  }

  export type DeleteInsuranceResolver = Resolver<OrderV2 | null, DeleteInsuranceArgs>;
  export interface DeleteInsuranceArgs {
    conversationStateId: UniqueId;
    productIdToDelete?: string | null;
  }

  export type OrderV2Resolver = Resolver<OrderV2 | null, OrderV2Args>;
  export interface OrderV2Args {
    conversationStateId?: UniqueId | null;
    orderId?: UniqueId | null;
    name?: string | null;
    pnr?: string | null;
    timeToThinkReferenceId?: string | null;
  }

  export type PostPassengerMutationResolver = Resolver<PostPassengerMutationCOO | null, PostPassengerMutationArgs>;
  export interface PostPassengerMutationArgs {
    conversationStateId: UniqueId;
    orderId: UniqueId;
    hasAncillaries?: boolean | null;
    passengers?: (PassengerCOI | null)[] | null;
  }

  export type PaymentMutationResolver = Resolver<PaymentMutationCOO | null, PaymentMutationArgs>;
  export interface PaymentMutationArgs {
    conversationStateId?: UniqueId | null;
    orderId: UniqueId;
    pnr: string;
    name: string;
    body: string;
    store?: boolean | null;
  }

  export type ResumePaymentMutationResolver = Resolver<ResumePaymentMutationCOO | null, ResumePaymentMutationArgs>;
  export interface ResumePaymentMutationArgs {
    conversationStateId?: UniqueId | null;
    orderId: UniqueId;
    pnr: string;
    name: string;
    params: string;
    store?: boolean | null;
  }

  export type PutBinResolver = Resolver<PutBin | null, PutBinArgs>;
  export interface PutBinArgs {
    conversationStateId?: UniqueId | null;
    pnr?: string | null;
    name?: string | null;
    orderId?: UniqueId | null;
    body?: InputBin | null;
  }

  export type PutCurrencyResolver = Resolver<CurrencyMutation | null, PutCurrencyArgs>;
  export interface PutCurrencyArgs {
    conversationStateId?: UniqueId | null;
    pnr?: string | null;
    name?: string | null;
    orderId: UniqueId;
    body?: InputCurrency | null;
  }

  export type DeleteCurrencyResolver = Resolver<CurrencyMutation | null, DeleteCurrencyArgs>;
  export interface DeleteCurrencyArgs {
    conversationStateId?: UniqueId | null;
    pnr?: string | null;
    name?: string | null;
    orderId: UniqueId;
  }

  export type PutMilesResolver = Resolver<MilesMutation | null, PutMilesArgs>;
  export interface PutMilesArgs {
    conversationStateId?: UniqueId | null;
    pnr?: string | null;
    name?: string | null;
    orderId: UniqueId;
    body?: InputMiles | null;
  }

  export type DeleteMilesResolver = Resolver<MilesMutation | null, DeleteMilesArgs>;
  export interface DeleteMilesArgs {
    conversationStateId?: UniqueId | null;
    pnr?: string | null;
    name?: string | null;
    orderId: UniqueId;
  }

  export type PostPayResolver = Resolver<PostPay | null, PostPayArgs>;
  export interface PostPayArgs {
    orderId: UniqueId;
    termsAndConditionsCheck: boolean;
    conversationStateId?: UniqueId | null;
    name?: string | null;
    pnr?: string | null;
    body?: InputPay | null;
  }

  export type ResumePaymentV2Resolver = Resolver<ResumePaymentV2 | null, ResumePaymentV2Args>;
  export interface ResumePaymentV2Args {
    orderId: UniqueId;
    conversationStateId?: UniqueId | null;
    name?: string | null;
    pnr?: string | null;
    params?: JsonData | null;
  }

  export type PutDiscountCodeResolver = Resolver<PutDiscountCode | null, PutDiscountCodeArgs>;
  export interface PutDiscountCodeArgs {
    conversationStateId?: UniqueId | null;
    pnr?: string | null;
    name?: string | null;
    orderId?: UniqueId | null;
    body?: InputDiscountCodeBody | null;
  }

  export type DeleteDiscountCodeResolver = Resolver<DeleteDiscountCode | null, DeleteDiscountCodeArgs>;
  export interface DeleteDiscountCodeArgs {
    conversationStateId?: UniqueId | null;
    pnr?: string | null;
    name?: string | null;
    orderId?: UniqueId | null;
  }

  export type PostVouchersResolver = Resolver<PostVouchers | null, PostVouchersArgs>;
  export interface PostVouchersArgs {
    conversationStateId?: UniqueId | null;
    pnr?: string | null;
    name?: string | null;
    orderId?: UniqueId | null;
    body?: InputVouchers | null;
  }

  export type DeleteVoucherResolver = Resolver<DeleteVoucher | null, DeleteVoucherArgs>;
  export interface DeleteVoucherArgs {
    conversationStateId?: UniqueId | null;
    pnr?: string | null;
    name?: string | null;
    orderId?: UniqueId | null;
    voucherId: string;
  }

  export type DeleteAllCartProductsResolver = Resolver<(CartProductANO | null)[] | null, DeleteAllCartProductsArgs>;
  export interface DeleteAllCartProductsArgs {
    input?: DeleteAllCartProductsInput | null;
  }

  export type ChangeBaggageResolver = Resolver<(CartProductANO | null)[] | null, ChangeBaggageArgs>;
  export interface ChangeBaggageArgs {
    input?: ChangeProductsANI | null;
  }

  export type ChangeEnvironmentalResolver = Resolver<(CartProductANO | null)[] | null, ChangeEnvironmentalArgs>;
  export interface ChangeEnvironmentalArgs {
    input?: ChangeEnviromentalProductsANI | null;
  }

  export type BoaLinkResolver = Resolver<string | null>;
  export type PostReservationInvoiceResolver = Resolver<SuccessfullyPostedInvoice | null, PostReservationInvoiceArgs>;
  export interface PostReservationInvoiceArgs {
    input?: InvoiceInput | null;
  }

  export type SaveUMNRResolver = Resolver<UMNRSavedSuccessfully | null, SaveUmnrArgs>;
  export interface SaveUmnrArgs {
    formData?: (UMNRFormDataReservationInput | null)[] | null;
    initialData?: (UMNRInitialDataReservationInput | null)[] | null;
  }

  export type CheckInSavePassengerInfoResolver = Resolver<CIOCheckinSavePassengerResult | null, CheckInSavePassengerInfoArgs>;
  export interface CheckInSavePassengerInfoArgs {
    input: CheckInInformationCII;
  }

  export type CheckInSavePassengerAPISResolver = Resolver<CIOCheckinSavePassengerResult | null, CheckInSavePassengerApisArgs>;
  export interface CheckInSavePassengerApisArgs {
    input: CheckInInformationCII;
  }

  export type CheckInSubmitResolver = Resolver<CIOCheckinSavePassengerResult | null, CheckInSubmitArgs>;
  export interface CheckInSubmitArgs {
    input: CheckInInformationCII;
  }

  export type CheckInResolver = Resolver<CheckinInformationCIO | null, CheckInArgs>;
  export interface CheckInArgs {
    input: CheckInInformationCII;
    method: CIIMutationMethod;
  }

  export type CheckInAddPassengerResolver = Resolver<CheckinInformationCIO | null, CheckInAddPassengerArgs>;
  export interface CheckInAddPassengerArgs {
    checkInGroupId?: string | null;
    ticketNumber?: string | null;
  }

  export type CheckInTransferPassengerResolver = Resolver<CIOTransferPassengerResult | null, CheckInTransferPassengerArgs>;
  export interface CheckInTransferPassengerArgs {
    checkInGroupId?: string | null;
    alternativeConnectionId?: string | null;
  }

  export type AddUserResolver = Resolver<boolean | null, AddUserArgs>;
  export interface AddUserArgs {
    ceId: number;
    userCreationInfo: UserCreationInfos;
  }

  export type UpdateUserResolver = Resolver<UserUpdateResponse | null, UpdateUserArgs>;
  export interface UpdateUserArgs {
    ceId: number;
    uccrId: string;
    updateUserInfo: UserUpdateInfos;
  }

  export type DeleteUserResolver = Resolver<boolean | null, DeleteUserArgs>;
  export interface DeleteUserArgs {
    ceId: number;
    uccrId: string;
    message?: string | null;
  }

  export type DeletePhoneNumberResolver = Resolver<MutationCUO | null, DeletePhoneNumberArgs>;
  export interface DeletePhoneNumberArgs {
    phoneNumberType?: string | null;
  }

  export type DeletePostalAddressResolver = Resolver<MutationCUO | null, DeletePostalAddressArgs>;
  export interface DeletePostalAddressArgs {
    deletePostalAddressLink?: string | null;
  }

  export type UpdateAllResolver = Resolver<MutationCUO | null, UpdateAllArgs>;
  export interface UpdateAllArgs {
    dataToUpdate?: string | null;
    fields?: string | null;
  }

  export type PostPassengerMutationV2Resolver = Resolver<PostPassengerMutationOAO | null, PostPassengerMutationV2Args>;
  export interface PostPassengerMutationV2Args {
    conversationStateId: UniqueId;
    orderId: UniqueId;
    hasAncillaries?: boolean | null;
    passengers?: (PassengerCOI | null)[] | null;
  }

  export type ChangeSeatResolver = Resolver<ShoppingCartMutationResultSCO | null, ChangeSeatArgs>;
  export interface ChangeSeatArgs {
    input?: ChangeSeatSMI | null;
  }

  export type UpdateCompanionResolver = Resolver<CompanionsList | null, UpdateCompanionArgs>;
  export interface UpdateCompanionArgs {
    companionUpdate?: CompanionCUI | null;
    companionId?: string | null;
  }

  export type CreateCompanionResolver = Resolver<CompanionsList | null, CreateCompanionArgs>;
  export interface CreateCompanionArgs {
    companionToCreate?: (CreateCompanionCUI | null)[] | null;
  }

  export type DeleteCompanionResolver = Resolver<CompanionsList | null, DeleteCompanionArgs>;
  export interface DeleteCompanionArgs {
    companionId?: string | null;
  }

  export type UpdateTravelDocumentResolver = Resolver<TravelDocumentMutationCUO | null, UpdateTravelDocumentArgs>;
  export interface UpdateTravelDocumentArgs {
    travelDocument?: TravelDocumentCUI | null;
  }

  export type DeleteTravelDocumentResolver = Resolver<TravelDocumentMutationCUO | null, DeleteTravelDocumentArgs>;
  export interface DeleteTravelDocumentArgs {
    travelDocumentId?: number | null;
  }

  export type DeleteSocialConnectionResolver = Resolver<MutationCUO | null, DeleteSocialConnectionArgs>;
  export interface DeleteSocialConnectionArgs {
    socialConnectionURI?: string | null;
  }

  export type ChangePaymentPreferenceResolver = Resolver<ChangePPErrorCUO | null, ChangePaymentPreferenceArgs>;
  export interface ChangePaymentPreferenceArgs {
    paymentPreference?: PaymentPreferenceCUI | null;
  }

  export type CheckSecurePaymentPreferenceResolver = Resolver<ClientTransactionCUO | null, CheckSecurePaymentPreferenceArgs>;
  export interface CheckSecurePaymentPreferenceArgs {
    clientTransactionId?: string | null;
  }

  export type DeletePaymentPreferenceResolver = Resolver<PaymentPreferenceMutationCUO | null, DeletePaymentPreferenceArgs>;
  export interface DeletePaymentPreferenceArgs {
    paymentPreferenceId?: string | null;
  }

  export type SaveSecurePaymentPreferenceResolver = Resolver<CardPaymentPreferenceCUO | null, SaveSecurePaymentPreferenceArgs>;
  export interface SaveSecurePaymentPreferenceArgs {
    paymentPreference?: SecurePaymentPreferenceCUI | null;
    returnUrl?: string | null;
    styleId?: string | null;
  }

  export type UpdateSubscriptionsResolver = Resolver<CommunicationPublicationsCUO | null, UpdateSubscriptionsArgs>;
  export interface UpdateSubscriptionsArgs {
    input?: SubscriptionsCUI | null;
  }

  export type FlyingBlueEnrolmentResolver = Resolver<FlyingBlueEnrolmentResult | null, FlyingBlueEnrolmentArgs>;
  export interface FlyingBlueEnrolmentArgs {
    input?: FlyingBlueEnrolment | null;
  }

  export type FlyingBlueUpgradeResolver = Resolver<FlyingBlueEnrolmentResult | null, FlyingBlueUpgradeArgs>;
  export interface FlyingBlueUpgradeArgs {
    input?: FlyingBlueUpgrade | null;
  }
}
/** Create Order Mutation Type */
export namespace PostPassengerMutationCOOResolvers {
  export interface Resolvers {
    patchPassenger?: PatchPassengerResolver;
    inputErrors?: InputErrorsResolver /** validation errors array, empty in case of success */;
    _warnings?: _warningsResolver /** warnings array */;
    order?: OrderResolver;
  }

  export type PatchPassengerResolver = Resolver<PatchPassengerCOO | null>;
  export type InputErrorsResolver = Resolver<(PassengerErrorCOO | null)[] | null>;
  export type _warningsResolver = Resolver<(GenericWarningCOO | null)[] | null>;
  export type OrderResolver = Resolver<OrderCOO | null>;
}

export namespace PatchPassengerCOOResolvers {
  export interface Resolvers {
    _warnings?: _warningsResolver /** warnings array */;
  }

  export type _warningsResolver = Resolver<(GenericWarningCOO | null)[] | null>;
}
/** Error received in attempting to post a passenger */
export namespace PassengerErrorCOOResolvers {
  export interface Resolvers {
    field?: FieldResolver /** name of the field that is in error */;
    passengerIndex?: PassengerIndexResolver /** zero based index pointing to the passenger in error */;
    sectionType?: SectionTypeResolver /** name of the passenger section (property) that is in error */;
  }

  export type FieldResolver = Resolver<string | null>;
  export type PassengerIndexResolver = Resolver<number | null>;
  export type SectionTypeResolver = Resolver<string | null>;
}
/** Payment Mutation Type */
export namespace PaymentMutationCOOResolvers {
  export interface Resolvers {
    _links?: _linksResolver /** Links section */;
    _warnings?: _warningsResolver /** Order API warnings array */;
    order?: OrderResolver;
    inputErrors?: InputErrorsResolver;
  }

  export type _linksResolver = Resolver<OrderLinksCOO | null>;
  export type _warningsResolver = Resolver<(GenericWarningCOO | null)[] | null>;
  export type OrderResolver = Resolver<OrderCOO | null, OrderArgs>;
  export interface OrderArgs {
    conversationStateId?: UniqueId | null;
    orderId?: UniqueId | null;
    name?: string | null;
    pnr?: string | null;
    currencyCode?: string | null;
    paymentMethodCode?: string | null;
  }

  export type InputErrorsResolver = Resolver<(PaymentErrorCOO | null)[] | null>;
}
/** Description of the links type */
export namespace OrderLinksCOOResolvers {
  export interface Resolvers {
    order?: OrderResolver;
    shop?: ShopResolver;
    redirectToBank?: RedirectToBankResolver;
    getOrder?: GetOrderResolver;
    getPaymentOptions?: GetPaymentOptionsResolver;
    paymentOptions?: PaymentOptionsResolver;
    resumePayment?: ResumePaymentResolver;
  }

  export type OrderResolver = Resolver<OrderHrefCOO | null>;
  export type ShopResolver = Resolver<OrderHrefCOO | null>;
  export type RedirectToBankResolver = Resolver<OrderHrefCOO | null>;
  export type GetOrderResolver = Resolver<OrderHrefCOO | null>;
  export type GetPaymentOptionsResolver = Resolver<OrderHrefCOO | null>;
  export type PaymentOptionsResolver = Resolver<OrderHrefCOO | null>;
  export type ResumePaymentResolver = Resolver<ResumePaymentHrefCOO | null>;
}
/** Description of the href type */
export namespace OrderHrefCOOResolvers {
  export interface Resolvers {
    href?: HrefResolver;
  }

  export type HrefResolver = Resolver<string | null>;
}
/** Description of the href type */
export namespace ResumePaymentHrefCOOResolvers {
  export interface Resolvers {
    href?: HrefResolver;
    templated?: TemplatedResolver;
  }

  export type HrefResolver = Resolver<string | null>;
  export type TemplatedResolver = Resolver<boolean | null>;
}
/** Error received in attempting to post a passenger */
export namespace PaymentErrorCOOResolvers {
  export interface Resolvers {
    code?: CodeResolver /** name of the field that is in error */;
    description?: DescriptionResolver /** zero based index pointing to the passenger in error */;
  }

  export type CodeResolver = Resolver<string | null>;
  export type DescriptionResolver = Resolver<string | null>;
}
/** Resume Payment Mutation Type */
export namespace ResumePaymentMutationCOOResolvers {
  export interface Resolvers {
    _links?: _linksResolver /** Links section */;
    _warnings?: _warningsResolver /** Order API warnings array */;
  }

  export type _linksResolver = Resolver<OrderLinksCOO | null>;
  export type _warningsResolver = Resolver<(GenericWarningCOO | null)[] | null>;
}

export namespace PutBinResolvers {
  export interface Resolvers {
    payload?: PayloadResolver;
    paymentOptionsV2?: PaymentOptionsV2Resolver;
  }

  export type PayloadResolver = Resolver<JsonData | null>;
  export type PaymentOptionsV2Resolver = Resolver<PaymentOptionsV2 | null, PaymentOptionsV2Args>;
  export interface PaymentOptionsV2Args {
    conversationStateId?: UniqueId | null;
    orderId: UniqueId;
    pnr?: string | null;
    name?: string | null;
  }
}

export namespace CurrencyMutationResolvers {
  export interface Resolvers {
    payload?: PayloadResolver;
    paymentOptionsV2?: PaymentOptionsV2Resolver;
    orderV2?: OrderV2Resolver;
  }

  export type PayloadResolver = Resolver<JsonData | null>;
  export type PaymentOptionsV2Resolver = Resolver<PaymentOptionsV2 | null, PaymentOptionsV2Args>;
  export interface PaymentOptionsV2Args {
    conversationStateId?: UniqueId | null;
    orderId: UniqueId;
    pnr?: string | null;
    name?: string | null;
  }

  export type OrderV2Resolver = Resolver<OrderV2 | null, OrderV2Args>;
  export interface OrderV2Args {
    conversationStateId?: UniqueId | null;
    orderId?: UniqueId | null;
    name?: string | null;
    pnr?: string | null;
  }
}

export namespace MilesMutationResolvers {
  export interface Resolvers {
    payload?: PayloadResolver;
    paymentOptionsV2?: PaymentOptionsV2Resolver;
  }

  export type PayloadResolver = Resolver<JsonData | null>;
  export type PaymentOptionsV2Resolver = Resolver<PaymentOptionsV2 | null, PaymentOptionsV2Args>;
  export interface PaymentOptionsV2Args {
    conversationStateId?: UniqueId | null;
    orderId: UniqueId;
    pnr?: string | null;
    name?: string | null;
  }
}

export namespace PostPayResolvers {
  export interface Resolvers {
    payload?: PayloadResolver;
    status?: StatusResolver;
  }

  export type PayloadResolver = Resolver<JsonData | null>;
  export type StatusResolver = Resolver<PostPayStatus | null>;
}

export namespace ResumePaymentV2Resolvers {
  export interface Resolvers {
    payload?: PayloadResolver;
  }

  export type PayloadResolver = Resolver<JsonData | null>;
}

export namespace PutDiscountCodeResolvers {
  export interface Resolvers {
    payload?: PayloadResolver;
    paymentOptionsV2?: PaymentOptionsV2Resolver;
    payment?: PaymentResolver;
  }

  export type PayloadResolver = Resolver<JsonData | null>;
  export type PaymentOptionsV2Resolver = Resolver<PaymentOptionsV2 | null, PaymentOptionsV2Args>;
  export interface PaymentOptionsV2Args {
    orderId: UniqueId;
    conversationStateId?: UniqueId | null;
    pnr: string;
    name: string;
  }

  export type PaymentResolver = Resolver<Payment | null, PaymentArgs>;
  export interface PaymentArgs {
    orderId: UniqueId;
    conversationStateId?: UniqueId | null;
    pnr: string;
    name: string;
  }
}

export namespace DeleteDiscountCodeResolvers {
  export interface Resolvers {
    payload?: PayloadResolver;
    paymentOptionsV2?: PaymentOptionsV2Resolver;
    payment?: PaymentResolver;
  }

  export type PayloadResolver = Resolver<JsonData | null>;
  export type PaymentOptionsV2Resolver = Resolver<PaymentOptionsV2 | null, PaymentOptionsV2Args>;
  export interface PaymentOptionsV2Args {
    orderId: UniqueId;
    conversationStateId?: UniqueId | null;
    pnr: string;
    name: string;
  }

  export type PaymentResolver = Resolver<Payment | null, PaymentArgs>;
  export interface PaymentArgs {
    orderId: UniqueId;
    conversationStateId?: UniqueId | null;
    pnr: string;
    name: string;
  }
}

export namespace PostVouchersResolvers {
  export interface Resolvers {
    payload?: PayloadResolver;
    payment?: PaymentResolver;
    paymentOptionsV2?: PaymentOptionsV2Resolver;
  }

  export type PayloadResolver = Resolver<JsonData | null>;
  export type PaymentResolver = Resolver<Payment | null, PaymentArgs>;
  export interface PaymentArgs {
    orderId: UniqueId;
    conversationStateId?: UniqueId | null;
    pnr: string;
    name: string;
  }

  export type PaymentOptionsV2Resolver = Resolver<PaymentOptionsV2 | null, PaymentOptionsV2Args>;
  export interface PaymentOptionsV2Args {
    orderId: UniqueId;
    conversationStateId?: UniqueId | null;
    pnr: string;
    name: string;
  }
}

export namespace DeleteVoucherResolvers {
  export interface Resolvers {
    payload?: PayloadResolver;
    payment?: PaymentResolver;
    paymentOptionsV2?: PaymentOptionsV2Resolver;
  }

  export type PayloadResolver = Resolver<JsonData | null>;
  export type PaymentResolver = Resolver<Payment | null, PaymentArgs>;
  export interface PaymentArgs {
    orderId: UniqueId;
    conversationStateId?: UniqueId | null;
    pnr: string;
    name: string;
  }

  export type PaymentOptionsV2Resolver = Resolver<PaymentOptionsV2 | null, PaymentOptionsV2Args>;
  export interface PaymentOptionsV2Args {
    orderId: UniqueId;
    conversationStateId?: UniqueId | null;
    pnr: string;
    name: string;
  }
}

export namespace SuccessfullyPostedInvoiceResolvers {
  export interface Resolvers {
    success?: SuccessResolver;
  }

  export type SuccessResolver = Resolver<boolean>;
}

export namespace UMNRSavedSuccessfullyResolvers {
  export interface Resolvers {
    success?: SuccessResolver;
  }

  export type SuccessResolver = Resolver<boolean>;
}

export namespace UserUpdateResponseResolvers {
  export interface Resolvers {
    userProfileOnOrganizationId?: UserProfileOnOrganizationIdResolver;
  }

  export type UserProfileOnOrganizationIdResolver = Resolver<string | null>;
}
/** Mutation Type */
export namespace MutationCUOResolvers {
  export interface Resolvers {
    errors?: ErrorsResolver;
  }

  export type ErrorsResolver = Resolver<(MutationErrorCUO | null)[] | null>;
}
/** Error received in attempting to update something */
export namespace MutationErrorCUOResolvers {
  export interface Resolvers {
    code?: CodeResolver;
    name?: NameResolver;
    errorInInputPath?: ErrorInInputPathResolver;
  }

  export type CodeResolver = Resolver<string | null>;
  export type NameResolver = Resolver<string | null>;
  export type ErrorInInputPathResolver = Resolver<string | null>;
}
/** Create Order Mutation Type */
export namespace PostPassengerMutationOAOResolvers {
  export interface Resolvers {
    patchPassenger?: PatchPassengerResolver;
    inputErrors?: InputErrorsResolver /** validation errors array, empty in case of success */;
    _warnings?: _warningsResolver /** warnings array */;
    order?: OrderResolver;
  }

  export type PatchPassengerResolver = Resolver<PatchPassengerOAO | null>;
  export type InputErrorsResolver = Resolver<(PassengerErrorOAO | null)[] | null>;
  export type _warningsResolver = Resolver<(GenericWarningOAO | null)[] | null>;
  export type OrderResolver = Resolver<OrderV2 | null>;
}

export namespace PatchPassengerOAOResolvers {
  export interface Resolvers {
    _warnings?: _warningsResolver /** warnings array */;
  }

  export type _warningsResolver = Resolver<(GenericWarningOAO | null)[] | null>;
}

export namespace GenericWarningOAOResolvers {
  export interface Resolvers {
    code?: CodeResolver /** Error/warning code */;
    description?: DescriptionResolver /** Description of the error/warning */;
    severity?: SeverityResolver /** Error/warning severity level */;
  }

  export type CodeResolver = Resolver<string | null>;
  export type DescriptionResolver = Resolver<string | null>;
  export type SeverityResolver = Resolver<string | null>;
}
/** Error received in attempting to post a passenger */
export namespace PassengerErrorOAOResolvers {
  export interface Resolvers {
    field?: FieldResolver /** name of the field that is in error */;
    passengerIndex?: PassengerIndexResolver /** zero based index pointing to the passenger in error */;
    sectionType?: SectionTypeResolver /** name of the passenger section (property) that is in error */;
  }

  export type FieldResolver = Resolver<string | null>;
  export type PassengerIndexResolver = Resolver<number | null>;
  export type SectionTypeResolver = Resolver<string | null>;
}
/** ... */
export namespace ShoppingCartMutationResultSCOResolvers {
  export interface Resolvers {
    shop?: ShopResolver;
  }

  export type ShopResolver = Resolver<ShoppingCartMutationResultShopSCO | null>;
}
/** ... */
export namespace ShoppingCartMutationResultShopSCOResolvers {
  export interface Resolvers {
    _links?: _linksResolver;
    products?: ProductsResolver;
  }

  export type _linksResolver = Resolver<LinksSCO | null>;
  export type ProductsResolver = Resolver<(ProductTypeSCO | null)[] | null>;
}
/** Links from shoppingcart */
export namespace LinksSCOResolvers {
  export interface Resolvers {
    checkout?: CheckoutResolver;
  }

  export type CheckoutResolver = Resolver<LinkSCO | null>;
}
/** Link */
export namespace LinkSCOResolvers {
  export interface Resolvers {
    href?: HrefResolver;
  }

  export type HrefResolver = Resolver<string | null>;
}
/** Travel document Mutation Type */
export namespace TravelDocumentMutationCUOResolvers {
  export interface Resolvers {
    errors?: ErrorsResolver;
  }

  export type ErrorsResolver = Resolver<(TravelDocumentMutationErrorCUO | null)[] | null>;
}
/** Error received in attempting to add/update travel document */
export namespace TravelDocumentMutationErrorCUOResolvers {
  export interface Resolvers {
    code?: CodeResolver;
    name?: NameResolver;
    errorInInputPath?: ErrorInInputPathResolver;
  }

  export type CodeResolver = Resolver<string | null>;
  export type NameResolver = Resolver<string | null>;
  export type ErrorInInputPathResolver = Resolver<string | null>;
}
/** Payment Preference Error */
export namespace ChangePPErrorCUOResolvers {
  export interface Resolvers {
    errors?: ErrorsResolver;
  }

  export type ErrorsResolver = Resolver<(ErrorCUO | null)[] | null>;
}
/** Error received in attempting to change payment preference */
export namespace ErrorCUOResolvers {
  export interface Resolvers {
    code?: CodeResolver;
    name?: NameResolver;
    errorInInputPath?: ErrorInInputPathResolver;
  }

  export type CodeResolver = Resolver<string | null>;
  export type NameResolver = Resolver<string | null>;
  export type ErrorInInputPathResolver = Resolver<string | null>;
}
/** Client Transaction */
export namespace ClientTransactionCUOResolvers {
  export interface Resolvers {
    transaction?: TransactionResolver;
  }

  export type TransactionResolver = Resolver<string | null>;
}
/** Payment Preference Mutation Type */
export namespace PaymentPreferenceMutationCUOResolvers {
  export interface Resolvers {
    errors?: ErrorsResolver;
  }

  export type ErrorsResolver = Resolver<(PaymentPreferenceMutationErrorCUO | null)[] | null>;
}
/** Error received in attempting to delete a payment preference */
export namespace PaymentPreferenceMutationErrorCUOResolvers {
  export interface Resolvers {
    code?: CodeResolver;
    name?: NameResolver;
    errorInInputPath?: ErrorInInputPathResolver;
  }

  export type CodeResolver = Resolver<string | null>;
  export type NameResolver = Resolver<string | null>;
  export type ErrorInInputPathResolver = Resolver<string | null>;
}
/** Card Payment Preference */
export namespace CardPaymentPreferenceCUOResolvers {
  export interface Resolvers {
    clientTransactionId?: ClientTransactionIdResolver;
    redirectURL?: RedirectURLResolver;
  }

  export type ClientTransactionIdResolver = Resolver<string | null>;
  export type RedirectURLResolver = Resolver<string | null>;
}

export namespace FlyingBlueEnrolmentResponseResolvers {
  export interface Resolvers {
    fbContractNumber?: FbContractNumberResolver;
  }

  export type FbContractNumberResolver = Resolver<number | null>;
}

export namespace FlyingBlueEnrolmentErrorResponseResolvers {
  export interface Resolvers {
    errors?: ErrorsResolver;
  }

  export type ErrorsResolver = Resolver<(GenericWarningCOO | null)[] | null>;
}

export namespace AirportOAOResolvers {
  export interface Resolvers {
    code?: CodeResolver /** Airport code */;
    name?: NameResolver /** Airport name */;
    city?: CityResolver /** Airport city information */;
  }

  export type CodeResolver = Resolver<string | null>;
  export type NameResolver = Resolver<string | null>;
  export type CityResolver = Resolver<CityCOO | null>;
}

export namespace AirportResolvers {
  export interface Resolvers {
    city?: CityResolver;
    code?: CodeResolver;
    name?: NameResolver;
  }

  export type CityResolver = Resolver<CodeName | null>;
  export type CodeResolver = Resolver<string | null>;
  export type NameResolver = Resolver<string | null>;
}

export namespace SegmentOAOResolvers {
  export interface Resolvers {
    segmentId?: SegmentIdResolver /** Segment id */;
    transferTime?: TransferTimeResolver /** transfer time in format e.g. 2h40 */;
    departFrom?: DepartFromResolver /** Departure airport information */;
    arriveOn?: ArriveOnResolver /** Arrival airport information */;
    marketingFlight?: MarketingFlightResolver /** Marketing flight information */;
    fareBase?: FareBaseResolver;
    remarks?: RemarksResolver;
  }

  export type SegmentIdResolver = Resolver<string | null>;
  export type TransferTimeResolver = Resolver<string | null>;
  export type DepartFromResolver = Resolver<AirportCOO | null>;
  export type ArriveOnResolver = Resolver<AirportCOO | null>;
  export type MarketingFlightResolver = Resolver<MarketingFlightCOO | null>;
  export type FareBaseResolver = Resolver<S_FareFamilyCOO | null>;
  export type RemarksResolver = Resolver<(S_RemarksCOO | null)[] | null>;
}

export namespace CreditCardNumberResolvers {
  export interface Resolvers {
    title?: TitleResolver;
  }

  export type TitleResolver = Resolver<string | null>;
}

export namespace FirstNameResolvers {
  export interface Resolvers {
    title?: TitleResolver;
  }

  export type TitleResolver = Resolver<string | null>;
}

export namespace LastNameResolvers {
  export interface Resolvers {
    title?: TitleResolver;
  }

  export type TitleResolver = Resolver<string | null>;
}

export namespace AddressResolvers {
  export interface Resolvers {
    title?: TitleResolver;
  }

  export type TitleResolver = Resolver<string | null>;
}

export namespace CityResolvers {
  export interface Resolvers {
    title?: TitleResolver;
  }

  export type TitleResolver = Resolver<string | null>;
}

export namespace ZipCodeResolvers {
  export interface Resolvers {
    title?: TitleResolver;
  }

  export type TitleResolver = Resolver<string | null>;
}

export namespace HrefResolvers {
  export interface Resolvers {
    href?: HrefResolver;
  }

  export type HrefResolver = Resolver<string | null>;
}

export namespace LinksResolvers {
  export interface Resolvers {
    orderv2?: Orderv2Resolver;
  }

  export type Orderv2Resolver = Resolver<Href | null>;
}

export namespace CartProductsOAOResolvers {
  export interface Resolvers {
    cart?: CartResolver;
  }

  export type CartResolver = Resolver<(CartProductOAO | null)[] | null>;
}

export namespace CartProductOAOResolvers {
  export interface Resolvers {
    productClass?: ProductClassResolver;
    code?: CodeResolver;
    name?: NameResolver;
    productType?: ProductTypeResolver;
    insuranceOffers?: InsuranceOffersResolver;
    productId?: ProductIdResolver;
  }

  export type ProductClassResolver = Resolver<string | null>;
  export type CodeResolver = Resolver<string | null>;
  export type NameResolver = Resolver<string | null>;
  export type ProductTypeResolver = Resolver<string | null>;
  export type InsuranceOffersResolver = Resolver<(InsuranceOfferThirdPartyAncillariesCOO | null)[] | null>;
  export type ProductIdResolver = Resolver<string | null>;
}

export namespace OfferedProductsOAOResolvers {
  export interface Resolvers {
    ancillaries?: AncillariesResolver;
    thirdPartyAncillaries?: ThirdPartyAncillariesResolver;
    carServiceThirdPartyAncillaries?: CarServiceThirdPartyAncillariesResolver;
    _errors?: _errorsResolver;
  }

  export type AncillariesResolver = Resolver<(AncillariesCOO | null)[] | null>;
  export type ThirdPartyAncillariesResolver = Resolver<(InsuranceThirdPartyAncillariesCOO | null)[] | null>;
  export type CarServiceThirdPartyAncillariesResolver = Resolver<(CarServiceThirdPartyAncillariesCOO | null)[] | null>;
  export type _errorsResolver = Resolver<(GenericWarningCOO | null)[] | null>;
}

export namespace InsuranceOfferThirdPartyAncillariesOAOResolvers {
  export interface Resolvers {
    productId?: ProductIdResolver /** required for posting a new product */;
    type?: TypeResolver;
    code?: CodeResolver;
    name?: NameResolver;
    productCode?: ProductCodeResolver;
    endDate?: EndDateResolver;
    startDate?: StartDateResolver;
    passengerId?: PassengerIdResolver;
    prices?: PricesResolver;
    insuranceTypeCode?: InsuranceTypeCodeResolver;
    amountToInsure?: AmountToInsureResolver;
    currencyCode?: CurrencyCodeResolver;
    description?: DescriptionResolver;
    termsAndConditionsUrl?: TermsAndConditionsUrlResolver;
  }

  export type ProductIdResolver = Resolver<string | null>;
  export type TypeResolver = Resolver<string | null>;
  export type CodeResolver = Resolver<string | null>;
  export type NameResolver = Resolver<string | null>;
  export type ProductCodeResolver = Resolver<string | null>;
  export type EndDateResolver = Resolver<string | null>;
  export type StartDateResolver = Resolver<string | null>;
  export type PassengerIdResolver = Resolver<string | null>;
  export type PricesResolver = Resolver<(PriceCOO | null)[] | null>;
  export type InsuranceTypeCodeResolver = Resolver<string | null>;
  export type AmountToInsureResolver = Resolver<number | null>;
  export type CurrencyCodeResolver = Resolver<string | null>;
  export type DescriptionResolver = Resolver<string | null>;
  export type TermsAndConditionsUrlResolver = Resolver<string | null>;
}
/** City */
export namespace CityOAOResolvers {
  export interface Resolvers {
    code?: CodeResolver /** City code */;
    name?: NameResolver /** City name */;
    country?: CountryResolver /** Country code and name */;
  }

  export type CodeResolver = Resolver<string | null>;
  export type NameResolver = Resolver<string | null>;
  export type CountryResolver = Resolver<CodeName | null>;
}

export namespace CommonInputFieldValueListValuesOAOResolvers {
  export interface Resolvers {
    value?: ValueResolver;
    name?: NameResolver;
  }

  export type ValueResolver = Resolver<string | null>;
  export type NameResolver = Resolver<string | null>;
}

export namespace CommonInputFieldValueListOAOResolvers {
  export interface Resolvers {
    code?: CodeResolver;
    inputFieldValues?: InputFieldValuesResolver;
  }

  export type CodeResolver = Resolver<string | null>;
  export type InputFieldValuesResolver = Resolver<(CommonInputFieldValueListValuesOAO | null)[] | null>;
}
/** Input type for inputFields on payment/confirmation page */
export namespace InputFieldsOAOResolvers {
  export interface Resolvers {
    additionalInfo?: AdditionalInfoResolver /** additional info */;
    code?: CodeResolver /** inputfield code */;
    mandatory?: MandatoryResolver /** inputfield mandatory */;
    maxLength?: MaxLengthResolver /** maxLength input field */;
    minLength?: MinLengthResolver /** minLength input field */;
    name?: NameResolver /** inputfield name */;
    readOnly?: ReadOnlyResolver /** readOnly boolean */;
    regularExpression?: RegularExpressionResolver /** regular expression pattern */;
    type?: TypeResolver /** type of input field */;
    value?: ValueResolver /** possible prefilled value of input */;
  }

  export type AdditionalInfoResolver = Resolver<string | null>;
  export type CodeResolver = Resolver<string | null>;
  export type MandatoryResolver = Resolver<boolean | null>;
  export type MaxLengthResolver = Resolver<number | null>;
  export type MinLengthResolver = Resolver<number | null>;
  export type NameResolver = Resolver<string | null>;
  export type ReadOnlyResolver = Resolver<boolean | null>;
  export type RegularExpressionResolver = Resolver<string | null>;
  export type TypeResolver = Resolver<string | null>;
  export type ValueResolver = Resolver<string | null>;
}
/** KeyValueOAO */
export namespace KeyValueOAOResolvers {
  export interface Resolvers {
    key?: KeyResolver /** KeyValue key */;
    value?: ValueResolver /** KeyValue value */;
  }

  export type KeyResolver = Resolver<string | null>;
  export type ValueResolver = Resolver<string | null>;
}
/** different (credit)card types */
export namespace LinkOAOResolvers {
  export interface Resolvers {
    href?: HrefResolver;
  }

  export type HrefResolver = Resolver<string | null>;
}
/** Description of the href type */
export namespace OrderHrefOAOResolvers {
  export interface Resolvers {
    href?: HrefResolver;
  }

  export type HrefResolver = Resolver<string | null>;
}
/** Description of the links type */
export namespace OrderLinksOAOResolvers {
  export interface Resolvers {
    order?: OrderResolver;
    shop?: ShopResolver;
    redirectToBank?: RedirectToBankResolver;
    getOrder?: GetOrderResolver;
  }

  export type OrderResolver = Resolver<OrderHrefOAO | null>;
  export type ShopResolver = Resolver<OrderHrefOAO | null>;
  export type RedirectToBankResolver = Resolver<OrderHrefOAO | null>;
  export type GetOrderResolver = Resolver<OrderHrefOAO | null>;
}
/** Price */
export namespace PriceOAOResolvers {
  export interface Resolvers {
    amount?: AmountResolver /** Price amount */;
    currencyCode?: CurrencyCodeResolver /** Price code */;
    name?: NameResolver /** Localized price string */;
  }

  export type AmountResolver = Resolver<number | null>;
  export type CurrencyCodeResolver = Resolver<string | null>;
  export type NameResolver = Resolver<string | null>;
}
/** Baggage Product */
export namespace BaggageProductOAOResolvers {
  export interface Resolvers {
    productTypeText?: ProductTypeTextResolver /** Product's type text */;
    price?: PriceResolver /** Baggage price description */;
    oldPrice?: OldPriceResolver /** Baggage old price description */;
    connection?: ConnectionResolver /** Connection Id only */;
    passenger?: PassengerResolver /** Passenger information */;
    status?: StatusResolver /** Status code */;
    unit?: UnitResolver /** Baggage unit */;
    baseAllowance?: BaseAllowanceResolver /** Base baggage allowance */;
    extraAllowance?: ExtraAllowanceResolver /** Extra baggage allowance */;
    boughtAllowance?: BoughtAllowanceResolver /** Bought baggage allowance */;
  }

  export type ProductTypeTextResolver = Resolver<string | null>;
  export type PriceResolver = Resolver<PriceOAO | null>;
  export type OldPriceResolver = Resolver<PriceOAO | null>;
  export type ConnectionResolver = Resolver<ConnectionOAO | null>;
  export type PassengerResolver = Resolver<PassengerOAO | null>;
  export type StatusResolver = Resolver<string | null>;
  export type UnitResolver = Resolver<string | null>;
  export type BaseAllowanceResolver = Resolver<number | null>;
  export type ExtraAllowanceResolver = Resolver<number | null>;
  export type BoughtAllowanceResolver = Resolver<number | null>;
}
/** Connection */
export namespace ConnectionOAOResolvers {
  export interface Resolvers {
    connectionId?: ConnectionIdResolver /** Connection id */;
    segments?: SegmentsResolver /** Segment list */;
    origin?: OriginResolver /** Origin airport information */;
    duration?: DurationResolver /** Duration of one connection */;
    destination?: DestinationResolver /** Destination airport information */;
  }

  export type ConnectionIdResolver = Resolver<string | null>;
  export type SegmentsResolver = Resolver<(SegmentOAO | null)[] | null>;
  export type OriginResolver = Resolver<AirportOAO | null>;
  export type DurationResolver = Resolver<string | null>;
  export type DestinationResolver = Resolver<AirportOAO | null>;
}
/** Passenger */
export namespace PassengerOAOResolvers {
  export interface Resolvers {
    passengerId?: PassengerIdResolver /** Passenger id */;
    label?: LabelResolver /** Passenger label */;
    passengerType?: PassengerTypeResolver /** Passenger type */;
    contactDetails?: ContactDetailsResolver /** Contact details type */;
    personalDetails?: PersonalDetailsResolver /** Personal Details */;
  }

  export type PassengerIdResolver = Resolver<string | null>;
  export type LabelResolver = Resolver<string | null>;
  export type PassengerTypeResolver = Resolver<string | null>;
  export type ContactDetailsResolver = Resolver<ContactDetailsOAO | null>;
  export type PersonalDetailsResolver = Resolver<PersonalDetailsOAO | null>;
}
/** Contact Details */
export namespace ContactDetailsOAOResolvers {
  export interface Resolvers {
    label?: LabelResolver /** label */;
    emailAddress?: EmailAddressResolver /** E-mail adress */;
    phoneNumberFirst?: PhoneNumberFirstResolver /** 1st/main phone number */;
    emailForCommercialUse?: EmailForCommercialUseResolver /** allows receiving commercial offers */;
  }

  export type LabelResolver = Resolver<string | null>;
  export type EmailAddressResolver = Resolver<string | null>;
  export type PhoneNumberFirstResolver = Resolver<string | null>;
  export type EmailForCommercialUseResolver = Resolver<boolean | null>;
}
/** Contact Details */
export namespace PersonalDetailsOAOResolvers {
  export interface Resolvers {
    label?: LabelResolver /** label */;
    firstName?: FirstNameResolver /** Firstname */;
    lastName?: LastNameResolver /** Lastname */;
    title?: TitleResolver /** title */;
    ticketName?: TicketNameResolver /** ticketname */;
    dateOfBirth?: DateOfBirthResolver /** Date of birth */;
    frequentFlyerProgram?: FrequentFlyerProgramResolver /** FF Program name */;
    frequentFlyerNumber?: FrequentFlyerNumberResolver /** FF Program number */;
    skyBonusNumber?: SkyBonusNumberResolver /** Sky bonus number */;
    contractName?: ContractNameResolver /** DOCT contract name */;
    corporateAccountNumber?: CorporateAccountNumberResolver /** DOCT account number */;
  }

  export type LabelResolver = Resolver<string | null>;
  export type FirstNameResolver = Resolver<string | null>;
  export type LastNameResolver = Resolver<string | null>;
  export type TitleResolver = Resolver<string | null>;
  export type TicketNameResolver = Resolver<string | null>;
  export type DateOfBirthResolver = Resolver<string | null>;
  export type FrequentFlyerProgramResolver = Resolver<string | null>;
  export type FrequentFlyerNumberResolver = Resolver<string | null>;
  export type SkyBonusNumberResolver = Resolver<string | null>;
  export type ContractNameResolver = Resolver<string | null>;
  export type CorporateAccountNumberResolver = Resolver<string | null>;
}
/** Flight Product */
export namespace FlightProductOAOResolvers {
  export interface Resolvers {
    status?: StatusResolver /** Flight product status */;
    reservation?: ReservationResolver /** Reservation information */;
    price?: PriceResolver /** Price of the flight product */;
    oldPrice?: OldPriceResolver /** Original price of the flight product */;
    tax?: TaxResolver /** Tax of the flight product */;
    fare?: FareResolver /** Fare of the flight product */;
    pricesPerPassenger?: PricesPerPassengerResolver /** flight prices including fare and taxes per passenger */;
  }

  export type StatusResolver = Resolver<string | null>;
  export type ReservationResolver = Resolver<FP_ReservationOAO | null>;
  export type PriceResolver = Resolver<PriceOAO | null>;
  export type OldPriceResolver = Resolver<PriceOAO | null>;
  export type TaxResolver = Resolver<PriceOAO | null>;
  export type FareResolver = Resolver<PriceOAO | null>;
  export type PricesPerPassengerResolver = Resolver<(PricesPerPassengerOAO | null)[] | null>;
}
/** Reservation */
export namespace FP_ReservationOAOResolvers {
  export interface Resolvers {
    bookingCode?: BookingCodeResolver /** bookingCode */;
    itinerary?: ItineraryResolver /** Itinerary information */;
    passengers?: PassengersResolver /** Passenger list */;
    passengerCount?: PassengerCountResolver /** Passenger count */;
  }

  export type BookingCodeResolver = Resolver<string | null>;
  export type ItineraryResolver = Resolver<ItineraryOAO | null>;
  export type PassengersResolver = Resolver<(PassengerOAO | null)[] | null>;
  export type PassengerCountResolver = Resolver<number | null>;
}
/** Itinerary information */
export namespace ItineraryOAOResolvers {
  export interface Resolvers {
    type?: TypeResolver /** One way, two way, or multiple destinations */;
    connections?: ConnectionsResolver /** Connection list */;
    origin?: OriginResolver /** Origin airport information */;
    destination?: DestinationResolver /** Destination airport information */;
    departureTime?: DepartureTimeResolver /** Outbound departure time */;
    returnDepartureTime?: ReturnDepartureTimeResolver /** Inbound departure time */;
    departureDate?: DepartureDateResolver /** Outbound departure date */;
    returnDepartureDate?: ReturnDepartureDateResolver /** Inbound departure date */;
    collapsedText?: CollapsedTextResolver /** Text for additional information on the ticket */;
    ticketConditions?: TicketConditionsResolver /** Conditions for one of the connections of the ticket */;
  }

  export type TypeResolver = Resolver<string | null>;
  export type ConnectionsResolver = Resolver<(ConnectionOAO | null)[] | null>;
  export type OriginResolver = Resolver<AirportOAO | null>;
  export type DestinationResolver = Resolver<AirportOAO | null>;
  export type DepartureTimeResolver = Resolver<string | null>;
  export type ReturnDepartureTimeResolver = Resolver<string | null>;
  export type DepartureDateResolver = Resolver<string | null>;
  export type ReturnDepartureDateResolver = Resolver<string | null>;
  export type CollapsedTextResolver = Resolver<string | null>;
  export type TicketConditionsResolver = Resolver<TicketConditionsOAO | null>;
}
/** Conditions for the connection of the ticket */
export namespace TicketConditionsOAOResolvers {
  export interface Resolvers {
    sameConditions?: SameConditionsResolver /** Shows if the conditions are the same for all connections */;
    connections?: ConnectionsResolver /** Conditions for each connection */;
  }

  export type SameConditionsResolver = Resolver<boolean | null>;
  export type ConnectionsResolver = Resolver<(TC_ConditionOAO | null)[] | null>;
}
/** Conditions for the connection of the ticket */
export namespace TC_ConditionOAOResolvers {
  export interface Resolvers {
    origin?: OriginResolver /** Origin */;
    destination?: DestinationResolver /** Destination */;
    fareFamily?: FareFamilyResolver /** Fare family info */;
    tripText?: TripTextResolver /** Trip text */;
    travelClassText?: TravelClassTextResolver /** Travel class text */;
    cancelCondition?: CancelConditionResolver /** Cancel condition */;
    changeCondition?: ChangeConditionResolver /** Change condition */;
    noShowCondition?: NoShowConditionResolver /** No show condition */;
    goShowCondition?: GoShowConditionResolver /** No show condition */;
    advancePurchaseCondition?: AdvancePurchaseConditionResolver /** No show condition */;
    maximumStayCondition?: MaximumStayConditionResolver /** Maximum stay condition */;
    minimumStayCondition?: MinimumStayConditionResolver /** Maximum stay condition */;
    skyPriorityCondition?: SkyPriorityConditionResolver /** Maximum stay condition */;
    iATACondition?: IATAConditionResolver /** IATA condition */;
    baggageAllowance?: BaggageAllowanceResolver /** Baggage allowance condition */;
    flyingBlue?: FlyingBlueResolver /** FlyingBlue condition */;
  }

  export type OriginResolver = Resolver<AirportOAO | null>;
  export type DestinationResolver = Resolver<AirportOAO | null>;
  export type FareFamilyResolver = Resolver<TC_FareFamilyOAO | null>;
  export type TripTextResolver = Resolver<string | null>;
  export type TravelClassTextResolver = Resolver<string | null>;
  export type CancelConditionResolver = Resolver<TC_CancelConditionOAO | null>;
  export type ChangeConditionResolver = Resolver<TC_ChangeConditionOAO | null>;
  export type NoShowConditionResolver = Resolver<TC_GenericConditionInfoOAO | null>;
  export type GoShowConditionResolver = Resolver<TC_GenericConditionInfoOAO | null>;
  export type AdvancePurchaseConditionResolver = Resolver<TC_GenericConditionInfoOAO | null>;
  export type MaximumStayConditionResolver = Resolver<TC_GenericConditionInfoOAO | null>;
  export type MinimumStayConditionResolver = Resolver<TC_GenericConditionInfoOAO | null>;
  export type SkyPriorityConditionResolver = Resolver<TC_GenericConditionInfoOAO | null>;
  export type IATAConditionResolver = Resolver<(TC_IATAConditionOAO | null)[] | null>;
  export type BaggageAllowanceResolver = Resolver<TC_BaggageAllowanceConditionOAO | null>;
  export type FlyingBlueResolver = Resolver<TC_GenericConditionInfoOAO | null>;
}
/** Fare family info */
export namespace TC_FareFamilyOAOResolvers {
  export interface Resolvers {
    title?: TitleResolver /** Fare family title text */;
    commercialDescription?: CommercialDescriptionResolver /** Fare family commercial description text */;
  }

  export type TitleResolver = Resolver<string | null>;
  export type CommercialDescriptionResolver = Resolver<string | null>;
}
/** Conditions for cancel */
export namespace TC_CancelConditionOAOResolvers {
  export interface Resolvers {
    allowedBeforeDeparture?: AllowedBeforeDepartureResolver /** Is refund allowed before departure */;
    allowedAfterDeparture?: AllowedAfterDepartureResolver /** Is refund allowed after departure */;
    commercialText?: CommercialTextResolver /** Cancel condition commercial text */;
    taxRefundText?: TaxRefundTextResolver /** Tax refund fare condition */;
    refundText?: RefundTextResolver /** Refund fee fare condition */;
    beforeDepartureDetailsText?: BeforeDepartureDetailsTextResolver /** Cancel condition before departure details text */;
    afterDepartureDetailsText?: AfterDepartureDetailsTextResolver /** Cancel condition after departure details text */;
    extraCostsText?: ExtraCostsTextResolver /** Cancel condition extra cost text */;
  }

  export type AllowedBeforeDepartureResolver = Resolver<boolean | null>;
  export type AllowedAfterDepartureResolver = Resolver<boolean | null>;
  export type CommercialTextResolver = Resolver<string | null>;
  export type TaxRefundTextResolver = Resolver<string | null>;
  export type RefundTextResolver = Resolver<string | null>;
  export type BeforeDepartureDetailsTextResolver = Resolver<string | null>;
  export type AfterDepartureDetailsTextResolver = Resolver<string | null>;
  export type ExtraCostsTextResolver = Resolver<string | null>;
}
/** Conditions for the change */
export namespace TC_ChangeConditionOAOResolvers {
  export interface Resolvers {
    allowedBeforeDeparture?: AllowedBeforeDepartureResolver /** Is change allowed before departure */;
    allowedAfterDeparture?: AllowedAfterDepartureResolver /** Is change allowed after departure */;
    commercialText?: CommercialTextResolver /** Change condition commercial text */;
    beforeDepartureDetailsText?: BeforeDepartureDetailsTextResolver /** Change condition before departure details text */;
    afterDepartureDetailsText?: AfterDepartureDetailsTextResolver /** Change condition after departure details text */;
    taxChangeText?: TaxChangeTextResolver /** Tax change fare condition */;
    feeAfterTaxText?: FeeAfterTaxTextResolver /** After tax fee fare condition */;
    phoneAdminFeeText?: PhoneAdminFeeTextResolver /** Cancel condition before departure details text */;
  }

  export type AllowedBeforeDepartureResolver = Resolver<boolean | null>;
  export type AllowedAfterDepartureResolver = Resolver<boolean | null>;
  export type CommercialTextResolver = Resolver<string | null>;
  export type BeforeDepartureDetailsTextResolver = Resolver<string | null>;
  export type AfterDepartureDetailsTextResolver = Resolver<string | null>;
  export type TaxChangeTextResolver = Resolver<string | null>;
  export type FeeAfterTaxTextResolver = Resolver<string | null>;
  export type PhoneAdminFeeTextResolver = Resolver<string | null>;
}
/** Conditions for minimum stay */
export namespace TC_GenericConditionInfoOAOResolvers {
  export interface Resolvers {
    commercialText?: CommercialTextResolver /** Minimum stay condition commercial text */;
    detailsText?: DetailsTextResolver /** Minimum stay condition details text */;
  }

  export type CommercialTextResolver = Resolver<string | null>;
  export type DetailsTextResolver = Resolver<string | null>;
}
/** Conditions for IATA */
export namespace TC_IATAConditionOAOResolvers {
  export interface Resolvers {
    title?: TitleResolver /** IATA condition title */;
    text?: TextResolver /** IATA condition text */;
  }

  export type TitleResolver = Resolver<string | null>;
  export type TextResolver = Resolver<string | null>;
}
/** Conditions baggage allowance */
export namespace TC_BaggageAllowanceConditionOAOResolvers {
  export interface Resolvers {
    commercialText?: CommercialTextResolver /** Baggage allowance commercial text */;
    detailsText?: DetailsTextResolver /** Baggage allowance details text */;
    handBaggageDetailsText?: HandBaggageDetailsTextResolver /** Baggage allowance hand baggage */;
  }

  export type CommercialTextResolver = Resolver<string | null>;
  export type DetailsTextResolver = Resolver<string | null>;
  export type HandBaggageDetailsTextResolver = Resolver<string | null>;
}
/** Prices including fare and taxes per passenger */
export namespace PricesPerPassengerOAOResolvers {
  export interface Resolvers {
    passengerType?: PassengerTypeResolver /** ADULT / CHILD / INFANT */;
    totalPrice?: TotalPriceResolver /** totalPrice */;
    fare?: FareResolver /** fare price */;
    totalTaxes?: TotalTaxesResolver /** totalTaxes */;
    taxes?: TaxesResolver /** flight taxes per passenger */;
  }

  export type PassengerTypeResolver = Resolver<string | null>;
  export type TotalPriceResolver = Resolver<PriceOAO | null>;
  export type FareResolver = Resolver<PriceOAO | null>;
  export type TotalTaxesResolver = Resolver<PriceOAO | null>;
  export type TaxesResolver = Resolver<(TaxOAO | null)[] | null>;
}
/** Specification of a specific case of a specific type of tax */
export namespace TaxOAOResolvers {
  export interface Resolvers {
    code?: CodeResolver /** Tax code, e.g. CJ for security charge */;
    name?: NameResolver /** Name of the tax code, e.g. security charge */;
    price?: PriceResolver /** Price of this tax */;
    costType?: CostTypeResolver /** e.g. NON_AIRLINE_COSTS */;
  }

  export type CodeResolver = Resolver<string | null>;
  export type NameResolver = Resolver<string | null>;
  export type PriceResolver = Resolver<PriceOAO | null>;
  export type CostTypeResolver = Resolver<string | null>;
}
/** Insurance Product */
export namespace InsuranceProductOAOResolvers {
  export interface Resolvers {
    type?: TypeResolver /** Type of the insurance */;
    price?: PriceResolver /** Price of the insurance product */;
    status?: StatusResolver /** Insurance status */;
  }

  export type TypeResolver = Resolver<string | null>;
  export type PriceResolver = Resolver<PriceOAO | null>;
  export type StatusResolver = Resolver<string | null>;
}
/** Meal product */
export namespace MealProductOAOResolvers {
  export interface Resolvers {
    status?: StatusResolver /** Status of the product, e.g QUOTED/ISSUED etc */;
    name?: NameResolver /** commercial name given to a meal of this type */;
    price?: PriceResolver /** price of this meal product */;
    oldPrice?: OldPriceResolver;
    segment?: SegmentResolver /** segment to which this meal applies */;
    passenger?: PassengerResolver /** passenger for which the meal was ordered */;
  }

  export type StatusResolver = Resolver<string | null>;
  export type NameResolver = Resolver<string | null>;
  export type PriceResolver = Resolver<PriceOAO | null>;
  export type OldPriceResolver = Resolver<PriceOAO | null>;
  export type SegmentResolver = Resolver<MP_SegmentOAO | null>;
  export type PassengerResolver = Resolver<MP_PassengerOAO | null>;
}
/** segment to which the meal product applies */
export namespace MP_SegmentOAOResolvers {
  export interface Resolvers {
    segmentId?: SegmentIdResolver /** identifier of the segment */;
    origin?: OriginResolver /** city name of the origin of this flight */;
    destination?: DestinationResolver /** city name of the destination of this flight */;
  }

  export type SegmentIdResolver = Resolver<string | null>;
  export type OriginResolver = Resolver<string | null>;
  export type DestinationResolver = Resolver<string | null>;
}
/** Passenger for whom the meal product was ordered */
export namespace MP_PassengerOAOResolvers {
  export interface Resolvers {
    firstName?: FirstNameResolver /** first name of the passenger for which the meal product was ordered */;
    lastName?: LastNameResolver /** last name of the passenger for which the meal product was ordered */;
    passengerId?: PassengerIdResolver;
  }

  export type FirstNameResolver = Resolver<string | null>;
  export type LastNameResolver = Resolver<string | null>;
  export type PassengerIdResolver = Resolver<string | null>;
}
/** Ancillary Product */
export namespace PaidOptionOAOResolvers {
  export interface Resolvers {
    name?: NameResolver /** Name of the ancillary product */;
    price?: PriceResolver /** Price of the ancillary product */;
  }

  export type NameResolver = Resolver<string | null>;
  export type PriceResolver = Resolver<PriceOAO | null>;
}
/** Product List */
export namespace ProductListOAOResolvers {
  export interface Resolvers {
    seatProducts?: SeatProductsResolver /** Seats information */;
    baggageProducts?: BaggageProductsResolver /** Baggage information */;
    flightProduct?: FlightProductResolver /** Flight product information */;
    insuranceProduct?: InsuranceProductResolver /** Insurance product information */;
    mealProducts?: MealProductsResolver /** list of meal products ordered for this reservation */;
  }

  export type SeatProductsResolver = Resolver<(SeatProductOAO | null)[] | null>;
  export type BaggageProductsResolver = Resolver<(BaggageProductOAO | null)[] | null>;
  export type FlightProductResolver = Resolver<FlightProductOAO | null>;
  export type InsuranceProductResolver = Resolver<InsuranceProductOAO | null>;
  export type MealProductsResolver = Resolver<(MealProductOAO | null)[] | null>;
}
/** Seat Product */
export namespace SeatProductOAOResolvers {
  export interface Resolvers {
    productTypeText?: ProductTypeTextResolver /** Product's type text */;
    price?: PriceResolver /** Seat price description */;
    oldPrice?: OldPriceResolver;
    segment?: SegmentResolver /** Segment Id only */;
    passenger?: PassengerResolver /** Passenger information */;
    status?: StatusResolver /** Status code */;
    code?: CodeResolver /** The Code */;
    name?: NameResolver /** Name of the class, e.g. "Economy" etc. */;
    seatNumber?: SeatNumberResolver /** Seat number as in airplane, e.g. 8A */;
  }

  export type ProductTypeTextResolver = Resolver<string | null>;
  export type PriceResolver = Resolver<PriceOAO | null>;
  export type OldPriceResolver = Resolver<PriceOAO | null>;
  export type SegmentResolver = Resolver<SegmentOAO | null>;
  export type PassengerResolver = Resolver<PassengerOAO | null>;
  export type StatusResolver = Resolver<string | null>;
  export type CodeResolver = Resolver<string | null>;
  export type NameResolver = Resolver<string | null>;
  export type SeatNumberResolver = Resolver<string | null>;
}
/** Reference Flight Product */
export namespace ReferenceFlightProductOAOResolvers {
  export interface Resolvers {
    status?: StatusResolver /** Flight product status */;
    reservation?: ReservationResolver /** Reservation information */;
  }

  export type StatusResolver = Resolver<string | null>;
  export type ReservationResolver = Resolver<FP_ReservationOAO | null>;
}

export namespace ResidualValueDocumentOAOResolvers {
  export interface Resolvers {
    documentNumber?: DocumentNumberResolver;
    lastName?: LastNameResolver;
    type?: TypeResolver;
    value?: ValueResolver;
  }

  export type DocumentNumberResolver = Resolver<string | null>;
  export type LastNameResolver = Resolver<string | null>;
  export type TypeResolver = Resolver<string | null>;
  export type ValueResolver = Resolver<PriceOAO | null>;
}
/** Information aiding the construction of a form with passenger input fields */
export namespace PassengerFieldsOAOResolvers {
  export interface Resolvers {
    passengers?: PassengersResolver /** list of initialised passengers as a starting point for the id page passenger entry form */;
    inputFieldValueLists?: InputFieldValueListsResolver;
    locationSpecificTexts?: LocationSpecificTextsResolver /** location specific texts for some destinations */;
    customer?: CustomerResolver;
  }

  export type PassengersResolver = Resolver<(PF_PassengerOAO | null)[] | null>;
  export type InputFieldValueListsResolver = Resolver<(CommonInputFieldValueListOAO | null)[] | null>;
  export type LocationSpecificTextsResolver = Resolver<(string | null)[] | null>;
  export type CustomerResolver = Resolver<PF_CustomerOAO | null>;
}
/** Input type for a Passenger part of the id page entry form */
export namespace PF_PassengerOAOResolvers {
  export interface Resolvers {
    label?: LabelResolver;
    passengerId?: PassengerIdResolver;
    passengerType?: PassengerTypeResolver;
    personalDetails?: PersonalDetailsResolver;
    contactDetails?: ContactDetailsResolver;
  }

  export type LabelResolver = Resolver<string | null>;
  export type PassengerIdResolver = Resolver<string | null>;
  export type PassengerTypeResolver = Resolver<string | null>;
  export type PersonalDetailsResolver = Resolver<JsonData | null>;
  export type ContactDetailsResolver = Resolver<JsonData | null>;
}
/** Input type for the customer part of the id page entry form (i.e. the passenger data of a logged in customer) */
export namespace PF_CustomerOAOResolvers {
  export interface Resolvers {
    label?: LabelResolver;
    passengerType?: PassengerTypeResolver;
    personalDetails?: PersonalDetailsResolver;
    contactDetails?: ContactDetailsResolver;
  }

  export type LabelResolver = Resolver<string | null>;
  export type PassengerTypeResolver = Resolver<string | null>;
  export type PersonalDetailsResolver = Resolver<JsonData | null>;
  export type ContactDetailsResolver = Resolver<JsonData | null>;
}
/** Simple generic object with the name field */
export namespace NameSMOResolvers {
  export interface Resolvers {
    name?: NameResolver;
  }

  export type NameResolver = Resolver<string | null>;
}
/** Only the active segment of a seatmap */
export namespace ActiveSegmentSHOResolvers {
  export interface Resolvers {
    ordinal?: OrdinalResolver;
    type?: TypeResolver;
    operatingFlightSegment?: OperatingFlightSegmentResolver;
    departure?: DepartureResolver;
    arrival?: ArrivalResolver;
  }

  export type OrdinalResolver = Resolver<number | null>;
  export type TypeResolver = Resolver<string | null>;
  export type OperatingFlightSegmentResolver = Resolver<OperatingFlightSegmentSHO | null>;
  export type DepartureResolver = Resolver<StationSHO | null>;
  export type ArrivalResolver = Resolver<StationSHO | null>;
}
/** Description of the operating flight */
export namespace OperatingFlightSegmentSHOResolvers {
  export interface Resolvers {
    id?: IdResolver;
    boardingDateTime?: BoardingDateTimeResolver;
    duration?: DurationResolver;
    estimatedLocalArrivalDateTime?: EstimatedLocalArrivalDateTimeResolver;
    estimatedLocalDepartureDateTime?: EstimatedLocalDepartureDateTimeResolver;
    scheduledLocalArrivalDateTime?: ScheduledLocalArrivalDateTimeResolver;
    scheduledLocalDepartureDateTime?: ScheduledLocalDepartureDateTimeResolver;
    estimatedLocalArrivalDateTimeTimestamp?: EstimatedLocalArrivalDateTimeTimestampResolver;
    estimatedLocalDepartureDateTimeTimestamp?: EstimatedLocalDepartureDateTimeTimestampResolver;
    scheduledLocalArrivalDateTimeTimestamp?: ScheduledLocalArrivalDateTimeTimestampResolver;
    scheduledLocalDepartureDateTimeTimestamp?: ScheduledLocalDepartureDateTimeTimestampResolver;
    operatingFlight?: OperatingFlightResolver;
    transferTime?: TransferTimeResolver;
    departureStation?: DepartureStationResolver;
  }

  export type IdResolver = Resolver<string | null>;
  export type BoardingDateTimeResolver = Resolver<string | null>;
  export type DurationResolver = Resolver<string | null>;
  export type EstimatedLocalArrivalDateTimeResolver = Resolver<string | null>;
  export type EstimatedLocalDepartureDateTimeResolver = Resolver<string | null>;
  export type ScheduledLocalArrivalDateTimeResolver = Resolver<string | null>;
  export type ScheduledLocalDepartureDateTimeResolver = Resolver<string | null>;
  export type EstimatedLocalArrivalDateTimeTimestampResolver = Resolver<number | null>;
  export type EstimatedLocalDepartureDateTimeTimestampResolver = Resolver<number | null>;
  export type ScheduledLocalArrivalDateTimeTimestampResolver = Resolver<number | null>;
  export type ScheduledLocalDepartureDateTimeTimestampResolver = Resolver<number | null>;
  export type OperatingFlightResolver = Resolver<OperatingFlightSHO | null>;
  export type TransferTimeResolver = Resolver<string | null>;
  export type DepartureStationResolver = Resolver<NameSMO | null>;
}
/** Simple generic object with number and carrier fields */
export namespace OperatingFlightSHOResolvers {
  export interface Resolvers {
    number?: NumberResolver;
    carrier?: CarrierResolver;
  }

  export type NumberResolver = Resolver<string | null>;
  export type CarrierResolver = Resolver<CodeNameSMO | null>;
}
/** Description of the station */
export namespace StationSHOResolvers {
  export interface Resolvers {
    airport?: AirportResolver;
  }

  export type AirportResolver = Resolver<AirportSHO | null>;
}
/** Description of the Airport */
export namespace AirportSHOResolvers {
  export interface Resolvers {
    IATACode?: IATACodeResolver;
    code?: CodeResolver;
    name?: NameResolver;
    city?: CityResolver;
  }

  export type IATACodeResolver = Resolver<string | null>;
  export type CodeResolver = Resolver<string | null>;
  export type NameResolver = Resolver<string | null>;
  export type CityResolver = Resolver<CitySHO | null>;
}
/** Description of the city */
export namespace CitySHOResolvers {
  export interface Resolvers {
    code?: CodeResolver;
    name?: NameResolver;
    country?: CountryResolver;
  }

  export type CodeResolver = Resolver<string | null>;
  export type NameResolver = Resolver<string | null>;
  export type CountryResolver = Resolver<CodeNameSMO | null>;
}
/** Description of the connections */
export namespace ConnectionsSHOResolvers {
  export interface Resolvers {
    id?: IdResolver;
    ordinal?: OrdinalResolver;
    duration?: DurationResolver;
    segments?: SegmentsResolver;
  }

  export type IdResolver = Resolver<string | null>;
  export type OrdinalResolver = Resolver<number | null>;
  export type DurationResolver = Resolver<string | null>;
  export type SegmentsResolver = Resolver<(SegmentsSHO | null)[] | null>;
}
/** Description of the segments */
export namespace SegmentsSHOResolvers {
  export interface Resolvers {
    ordinal?: OrdinalResolver;
    type?: TypeResolver;
    operatingFlightSegment?: OperatingFlightSegmentResolver;
    departure?: DepartureResolver;
    arrival?: ArrivalResolver;
  }

  export type OrdinalResolver = Resolver<number | null>;
  export type TypeResolver = Resolver<string | null>;
  export type OperatingFlightSegmentResolver = Resolver<OperatingFlightSegmentSHO | null>;
  export type DepartureResolver = Resolver<StationSHO | null>;
  export type ArrivalResolver = Resolver<StationSHO | null>;
}
/** Description of the shop */
export namespace ShopSHOResolvers {
  export interface Resolvers {
    seatmap?: SeatmapResolver;
  }

  export type SeatmapResolver = Resolver<SeatmapDetailsSMO | null, SeatmapArgs>;
  export interface SeatmapArgs {
    segmentId?: string | null;
    passengerId?: string | null;
  }
}
/** FlightOfferRequest for available offers endpoint */
export interface FlightOfferRequest {
  commercialCabins?: (string | null)[] | null;
  country?: string | null;
  language?: string | null;
  passengerCount: PassengerCount;
  requestedConnections: (RequestedConnection | null)[];
  corporateContract?: string | null;
}

export interface PassengerCount {
  ADT?: number | null;
  C14?: number | null;
  CHD?: number | null;
  INF?: number | null;
  YTH?: number | null;
  YCD?: number | null;
}

export interface RequestedConnection {
  departureDate?: string | null;
  dateInterval?: string | null;
  origin?: InputConnectionPoint | null;
  destination?: InputConnectionPoint | null;
  commercialCabin?: string | null;
  fareFamilyCode?: string | null;
  segments?: (RequestedSegment | null)[] | null;
}
/** Either Origin|Dest, Can be a city or airport */
export interface InputConnectionPoint {
  city?: InputAirportCity | null;
  airport?: InputAirportCity | null;
}

export interface InputAirportCity {
  code: string;
}

export interface RequestedSegment {
  departureDateTime?: string | null;
  destination?: InputAirportCity | null;
  origin?: InputAirportCity | null;
  marketingCarrier?: string | null;
  marketingFlightNumber?: string | null;
}
/** Details of the pax group for the check-in Input Type */
export interface BoardingDocPassengersCII {
  id?: string | null;
}
/** Chekin Documents Input Type */
export interface DocumentsCII {
  type?: string | null;
  available?: (BoardingDocFormatCII | null)[] | null;
}
/** Boarding Document formats and deliveryAddresses fields Input Type */
export interface BoardingDocFormatCII {
  type?: string | null;
  deliveryAddresses?: (TypeCII | null)[] | null;
}
/** Simple generic object with the type field */
export interface TypeCII {
  type?: string | null;
}

export interface FlightStatusInput {
  originAirportCode?: string | null;
  destinationAirportCode?: string | null;
  date?: string | null;
  carrierCode?: string | null;
  flightNumber?: string | null;
}

export interface ItineraryBody {
  passengerCount?: ItineraryBodyPassengerCount | null;
  requestedConnections?: (ItineraryBodyRequestedConnection | null)[] | null;
}

export interface ItineraryBodyPassengerCount {
  ADT?: string | null;
  C14?: string | null;
  CHD?: string | null;
  INF?: string | null;
  YTH?: string | null;
  YCD?: string | null;
}

export interface ItineraryBodyRequestedConnection {
  commercialCabin?: string | null;
  fareBasis?: string | null;
  segments?: (ItineraryBodySegment | null)[] | null;
}

export interface ItineraryBodySegment {
  departureDateTime?: string | null;
  destination?: ItineraryBodyDestination | null;
  marketingCarrier?: string | null;
  marketingFlightNumber?: string | null;
  origin?: ItineraryBodyOrigin | null;
  sellingClass?: string | null;
}

export interface ItineraryBodyDestination {
  code?: string | null;
}

export interface ItineraryBodyOrigin {
  code?: string | null;
}
/** LowestOffersRequest for available offers endpoint */
export interface LowestOffersRequest {
  type?: string | null;
  commercialCabins?: (string | null)[] | null;
  passengerCount?: PassengerCount | null;
  requestedConnections?: (LowestOfferRequestedConnection | null)[] | null;
  inboundDateInterval?: string | null;
  corporateContract?: string | null;
}
/** Lowest Offer Requested Connection Type */
export interface LowestOfferRequestedConnection {
  departureDate?: string | null;
  dateInterval?: string | null;
  origin?: InputConnectionPoint | null;
  destination?: InputConnectionPoint | null;
  commercialCabin?: string | null;
  fareFamilyCode?: string | null;
  segments?: (RequestedSegment | null)[] | null;
}
/** Passenger with the details intended to be posted for the given passenger */
export interface PassengerCOI {
  customerProfileReferenceId?: string | null /** Customer profile reference id */;
  saveCustomerProfile?: boolean | null /** saveCustomerProfile */;
  passengerId: string /** passengerId as passed by the API */;
  personalDetails?: JsonData | null /** personal details */;
  contactDetails?: JsonData | null /** contact details */;
}

export interface InputBin {
  paymentMethod?: InputBinPaymentMethod | null;
  bankIdentificationNumber?: InputBinBankIdentificationNumber | null;
}

export interface InputBinPaymentMethod {
  code?: string | null;
}

export interface InputBinBankIdentificationNumber {
  binNumber?: string | null;
}

export interface InputCurrency {
  paymentMethod?: InputCurrencyPaymentMethod | null;
  currency?: InputCurrencyCurrency | null;
}

export interface InputCurrencyPaymentMethod {
  code?: string | null;
}

export interface InputCurrencyCurrency {
  currencyCode?: string | null;
}

export interface InputMiles {
  miles?: InputMilesAmount | null;
}

export interface InputMilesAmount {
  amount?: string | null;
}

export interface InputPay {
  waitForFinalization?:
    | boolean
    | null /** By default the payment API will start the Order finalization process immediately, once the payment is confirmed. This attribute can be used to indicate that the Order finalization process should be started asynchronously. In that case, the POST pay operation will not wait for the result. A consumer can poll for the result using a separate resource. */;
  emailAddress?:
    | string
    | null /** In some flows, an optional email address can be specified that will be used to send the confirmation email to. The paymentOptions resource will have a JSON schema fragments if the email address can be specified. */;
  resumeUrl?:
    | string
    | null /** Some payment method will require redirection to the site of a payment provider (e.g. secure data collection page, the site of a bank for online banking etc.). This URL will be used to return to the application of the consumer of this API. The consumer will then use the resume resource to resume the payment process. */;
  dataCollectionPageStyle?:
    | string
    | null /** Some consumers need control over the styling of the so-called Data Collection Page (e.g. BlueWeb and AF-ICI), which is used for credit card payments. This optional attribute is used to control the styling. BlueWeb: JOINT. AF-ICI: web, mobile or dinamo */;
  paymentMethod?: InputPayPaymentMethod | null /** The paymentMethod element contains the information about the selected payment method and the associated details */;
}

export interface InputPayPaymentMethod {
  code?: string | null;
  preferenceId?: string | null;
  saveAsPreference?: boolean | null;
  billingDetails?: InputPayBillingDetails | null;
  paymentDetails?: InputPayPaymentDetails | null;
  providerDetails?: InputPayProviderDetails | null;
}

export interface InputPayBillingDetails {
  firstName?: string | null;
  lastName?: string | null;
  address?: string | null;
  addressExtraInfo?: string | null /** The additional address information (e.g. 5th floor, room 25) */;
  city?: string | null;
  country?: string | null;
  county?: string | null;
  houseNumber?: string | null;
  zipCode?: string | null;
  phoneNumber?: string | null;
  emailAddress?: string | null;
}

export interface InputPayPaymentDetails {
  bankCity?: string | null /** The location of the bank of the end-user. Typically used for bank transfer payment methods. */;
  fiscalNumber?:
    | string
    | null /** The fiscal number of the end-user. Typically used for specific markets where this information is required to complete the payment. */;
  installments?:
    | string
    | null /** Some payment methods in specific markets may allow payment in installments.The number of installments. */;
  binNumber?: string | null /** The BIN number (e.g. the first 6 digits of the card number) */;
  creditCardNumber?:
    | string
    | null /** The credit card number. The value must be encrypted using the publicKey provided in the encryption element of the paymentOptions resource. See the 'Encrypting credit card data' section. */;
  creditCardVerificationCode?:
    | string
    | null /** The credit card CVV. The value must be encrypted using the publicKey provided in the encryption element of the paymentOptions resource. See the 'Encrypting credit card data' section. */;
  expiryDate?: string | null /** The credit card expiration date. */;
}
/** The providerDetails element is a special element that contains attributes that are not entered by the end-user. These attributes will only be used by specific consumers. */
export interface InputPayProviderDetails {
  token?: string | null /** Used for Apple Pay and Google Pay and contains an approval token. */;
  binNumber?: string | null /** Used for Chip & PIN on check-in kiosks and contains the BIN number of the payment card. */;
  approvalCode?: string | null /** Used for Chip & PIN on check-in kiosks and contains the approval code. */;
  emvCode?: string | null /** Used for Chip & PIN on check-in kiosks and contains the EMV code. */;
}

export interface InputDiscountCodeBody {
  discountCode?: InputDiscountCode | null;
}

export interface InputDiscountCode {
  code: string;
}

export interface InputVouchers {
  vouchers?: (InputVoucher | null)[] | null;
}

export interface InputVoucher {
  number: string;
}
/** Mutation */
export interface DeleteAllCartProductsInput {
  shopId: string;
  productClass?: ProductClassEnum | null;
}

export interface ChangeProductsANI {
  shopId: string;
  offers?: (ProductOfferANI | null)[] | null;
}

export interface ProductOfferANI {
  productId: string;
  productClass?: string | null;
}

export interface ChangeEnviromentalProductsANI {
  shopId: string;
  offers?: (EnvironmentalProductOfferANI | null)[] | null;
}

export interface EnvironmentalProductOfferANI {
  productId: string;
  amount?: number | null;
}

export interface InvoiceInput {
  name: string;
  streetAndHouseNumber: string;
  city: string;
  postalCode: string;
  emailAddress: string;
  invoiceUrl: string;
  chamberOfCommerceNumber?: string | null;
}
/** UMNR form data input type */
export interface UMNRFormDataReservationInput {
  contactType?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  gender?: string | null;
  phoneNumber?: string | null;
  streetAndHouseNumber?: string | null;
  city?: string | null;
  country?: string | null;
  postalCode?: string | null;
}
/** UMNR initial data input type */
export interface UMNRInitialDataReservationInput {
  segments?: (UMNRSegmentsReservationInput | null)[] | null;
}
/** UMNR segments input type */
export interface UMNRSegmentsReservationInput {
  _links?: LinksReservationInput | null;
}
/** Various HATEOAS links available from reservation apis */
export interface LinksReservationInput {
  addUnaccompaniedMinorContact?: HrefReservationInput | null;
  addUnaccompaniedMinorContactAddress?: HrefReservationInput | null;
}
/** Various links available for HATEAOS */
export interface HrefReservationInput {
  href?: string | null;
}
/** Check-in Form Submit object Input Type */
export interface CheckInInformationCII {
  checkInGroupId?: string | null;
  selectedForCheckinGroup?: (PassengersCII | null)[] | null;
  connections?: (ConnectionCII | null)[] | null;
  termsAndConditions?: (TermsAndConditionsCII | null)[] | null;
}
/** Description of the group for the check-in */
export interface PassengersCII {
  advancePassengerInformation?: AdvancePassengerInformationCII | null;
  contactDetails?: (ContactDetailsCII | null)[] | null;
  contactDetailsLinks?: LinksCII | null;
  dateOfBirth?: string | null;
  gender?: CodeNameCII | null;
  id?: string | null;
  infant?: InfantPassengersCII | null;
  isCheckedIn?: boolean | null;
  membershipList?: MembershipCII | null;
  title?: CodeNameCII | null;
  type?: CodeNameCII | null;
}
/** Boarding Pass formats and deliveryAddresses fields Input Type */
export interface AdvancePassengerInformationCII {
  nationality?: CodeNameCII | null;
  addresses?: (AdvancePassengerInfoAddressCII | null)[] | null;
  apiDocuments?: (APISDocumentCII | null)[] | null;
}
/** Simple generic object with code and name fields Input Type */
export interface CodeNameCII {
  code?: string | null;
  name?: string | null;
}
/** Advance Passenger Info Address Input type */
export interface AdvancePassengerInfoAddressCII {
  type?: CodeNameCII | null;
  streetAndHouseNumber?: string | null;
  city?: string | null;
  stateOrProvince?: CodeNameCII | null;
  postalCode?: string | null;
  country?: CodeNameCII | null;
}
/** APIS Document Type Input type */
export interface APISDocumentCII {
  travelDocument?: TravelDocumentCII | null;
}
/** Travel Document Input type */
export interface TravelDocumentCII {
  type?: CodeNameCII | null;
  surname?: string | null;
  givenNames?: string | null;
  expiryDate?: string | null;
  countryOfIssue?: CodeNameCII | null;
  number?: string | null;
  sourceOfDataType?: string | null;
  additionalApiDocuments?: (AdditionalApiDocumentsCII | null)[] | null;
}
/** Additional Travel Document Input type */
export interface AdditionalApiDocumentsCII {
  supplementaryDocument?: SupplementaryDocumentCII | null;
  travelDocument?: SupplementaryDocumentCII | null;
}
/** Supplementary Document Input type */
export interface SupplementaryDocumentCII {
  type?: CodeNameCII | null;
  countryOfIssue?: CodeNameCII | null;
  sourceOfDataType?: string | null;
  expiryDate?: string | null;
  number?: string | null;
  surname?: string | null;
  givenNames?: string | null;
}
/** Description of the contact details attached to a passenger */
export interface ContactDetailsCII {
  emailAddress?: EmailAddressCII | null;
  phoneNumber?: PhoneNumberCII | null;
}
/** Description of the email address in contact details */
export interface EmailAddressCII {
  newEmailAddress?: string | null;
  oldEmailAddress?: string | null;
  _links?: LinksCII | null;
}
/** Various HATEOAS links available from reservations apis */
export interface LinksCII {
  addContactDetails?: HrefCII | null;
  delete?: HrefCII | null;
  update?: HrefCII | null;
}
/** Various links available for HATEAOS */
export interface HrefCII {
  href?: string | null;
}
/** Description of the phone number in contact details */
export interface PhoneNumberCII {
  newPhoneNumber?: string | null;
  oldPhoneNumber?: string | null;
  type?: CodeNameCII | null;
  _links?: LinksCII | null;
}
/** Description of the infant attached to a passenger */
export interface InfantPassengersCII {
  id?: string | null;
  advancePassengerInformation?: AdvancePassengerInformationCII | null;
  dateOfBirth?: string | null;
  gender?: CodeNameCII | null;
}
/** Membership for passenger */
export interface MembershipCII {
  loyaltyProgramCode?: string | null;
  loyaltyProgramNumber?: string | null;
}
/** Description of the connection Input type */
export interface ConnectionCII {
  id?: string | null;
}
/** Terms And Conditions Input type */
export interface TermsAndConditionsCII {
  code?: string | null;
  confirmed?: boolean | null;
}

export interface UserCreationInfos {
  civility?: string | null;
  lastName?: string | null;
  firstName?: string | null;
  emailAddress?: string | null;
  profileId?: string | null;
  acceptanceNotification?: boolean | null;
  senderEmail?: string | null;
  communicationLanguage?: string | null;
}

export interface UserUpdateInfos {
  organizationId?: string | null;
  profileId?: string | null;
  userProfileOnOrganizationId?: string | null;
}
/** ... */
export interface ChangeSeatSMI {
  link?: string | null;
  productId?: string | null;
  segmentId?: string | null;
  passengerId?: string | null;
  exitRowConditionsAccepted?: boolean | null;
}
/** Companion */
export interface CompanionCUI {
  salutation?: CodeNameCUI | null;
  givenNames?: string | null;
  familyName?: string | null;
  dateOfBirth?: string | null;
  loyaltyProgramPreference?: LoyaltyProgramPreferenceCUI | null;
  emailAddress?: string | null;
}
/** Code && Name fields */
export interface CodeNameCUI {
  code?: string | null;
  name?: string | null;
}
/** Loyalty Program Preference */
export interface LoyaltyProgramPreferenceCUI {
  code?: string | null;
  name?: string | null;
  membershipNumber?: string | null;
}
/** Companion */
export interface CreateCompanionCUI {
  travelCompanions?: (CompanionCUI | null)[] | null;
}
/** Travel Document type */
export interface TravelDocumentCUI {
  id?: number | null;
  type?: string | null;
  number?: string | null;
  expiryDate?: string | null;
  countryOfIssue?: string | null;
  surname?: string | null;
  nationality?: string | null;
  givenNames?: string | null;
  dateOfBirth?: string | null;
  gender?: string | null;
}
/** Payment Preference Mutation */
export interface PaymentPreferenceCUI {
  paymentId?: string | null;
  preferred?: boolean | null;
  corporate?: boolean | null;
  paymentFields?: (PaymentFieldCUI | null)[] | null;
  paymentType?: PaymentTypeCUI | null;
}
/** Payment Field Mutation */
export interface PaymentFieldCUI {
  code?: string | null;
  value?: string | null;
}
/** Payment Type Mutation */
export interface PaymentTypeCUI {
  code?: string | null;
  name?: string | null;
  paymentMethod?: PaymentMethodCUI | null;
}
/** Payment Method Mutation */
export interface PaymentMethodCUI {
  code?: string | null;
  name?: string | null;
}
/** Secure Payment Preference Mutation */
export interface SecurePaymentPreferenceCUI {
  method?: string | null;
  paymentCardPreference?: PaymentCardPreferenceCUI | null;
}
/** Payment Card Preference Mutation */
export interface PaymentCardPreferenceCUI {
  firstName?: string | null;
  postalCode?: string | null;
  city?: string | null;
  familyName?: string | null;
  expiryYear?: string | null;
  expiryMonth?: string | null;
  streetHousenumber?: string | null;
  country?: string | null;
}
/** Communication Subscriptions and Publication */
export interface SubscriptionsCUI {
  flyingblue?: (CommunicationPublicationCUI | null)[] | null;
  sales?: CommunicationPublicationsSalesCUI | null;
  telemarketing?: (CommunicationPublicationCUI | null)[] | null;
  consents?: (ConsentsInput | null)[] | null;
}
/** Communication Publication */
export interface CommunicationPublicationCUI {
  meta?: PublicationMetaCUI | null;
  optin?: boolean | null;
}
/** Communication Subscriptions and Publication metadata */
export interface PublicationMetaCUI {
  code: string;
  language?: string | null;
  mailingType: string;
  market?: string | null;
}
/** Communication Subscriptions and Publication */
export interface CommunicationPublicationsSalesCUI {
  klmNewsletters?: (CommunicationPublicationCUI | null)[] | null;
  newsletters?: (CommunicationPublicationCUI | null)[] | null;
  magazines?: (CommunicationPublicationCUI | null)[] | null;
  exotic?: (CommunicationPublicationCUI | null)[] | null;
}
/** Consents input */
export interface ConsentsInput {
  optin: boolean;
  meta: ConsentsInputMeta;
}
/** Consents input meta */
export interface ConsentsInputMeta {
  code: string;
}
/** see https://confluence.devnet.klm.com/display/FBAPI/Request+-+Create+Enrolment */
export interface FlyingBlueEnrolment {
  requestor?: FlyingBlueEnrolmentRequestor | null;
  individualData: FlyingBlueEnrolmentIndividualData;
  addressData?: FlyingBlueEnrolmentAddressData | null;
  phoneData?: FlyingBlueEnrolmentPhoneData | null;
  emailData: FlyingBlueEnrolmentEmailData;
  communicationData?: FlyingBlueEnrolmentCommunicationData | null;
  ffpData?: FlyingBlueEnrolmentFfpData | null;
  permissions?: (FlyingBlueEnrolmentPermissions | null)[] | null;
  personalQuestion?: FlyingBlueEnrolmentPersonalQuestion | null;
}

export interface FlyingBlueEnrolmentRequestor {
  channel: string;
  applicationCode: string;
  requestorType: FlyingBlueEnrolmentRequestorType;
  ipAddress?: string | null;
  brand?: string | null;
  market?: string | null;
  iata?: string | null;
  agentCode?: string | null;
  promotionalCode?: string | null;
}

export interface FlyingBlueEnrolmentIndividualData {
  civility: FlyingBlueEnrolmentCivility;
  lastName: string;
  firstName: string;
  middleName?: string | null;
  birthDate: string;
  individualSearch?: boolean | null;
}

export interface FlyingBlueEnrolmentAddressData {
  addressForcing?: boolean | null;
  mediumCode?: FlyingBlueEnrolmentMediumCode | null;
  corporateName?: string | null;
  numberAndStreet?: string | null;
  apartmentBuilding?: string | null;
  additionalInfo?: string | null;
  city?: string | null;
  zipCode?: string | null;
  stateCode?: string | null;
  countryCode: string;
}

export interface FlyingBlueEnrolmentPhoneData {
  terminalType?: FlyingBlueEnrolmentTerminalType | null;
  countryCode?: string | null;
  number?: string | null;
}

export interface FlyingBlueEnrolmentEmailData {
  emailForcing?: boolean | null;
  mediumCode?: FlyingBlueEnrolmentMediumCode | null;
  email: string;
}

export interface FlyingBlueEnrolmentCommunicationData {
  mailingAuth?: FlyingBlueEnrolmentMailingAuth | null;
  languageCode: string;
}

export interface FlyingBlueEnrolmentFfpData {
  program?: string | null;
  enrolDate?: string | null;
  contractNumber?: number | null;
  commMedia?: FlyingBlueEnrolmentCommMedia | null;
  upgradeMyAccountIndic?: boolean | null;
}

export interface FlyingBlueEnrolmentPermissions {
  identifier: string;
  answer: boolean;
  market?: string | null;
  language?: string | null;
}

export interface FlyingBlueEnrolmentPersonalQuestion {
  personalQuestion: string;
  answer: string;
  newPassword: string;
}

export interface FlyingBlueUpgrade {
  requestor?: FlyingBlueEnrolmentRequestor | null;
  individualData: FlyingBlueUpgradeIndividualData;
  addressData?: FlyingBlueEnrolmentAddressData | null;
  phoneData?: FlyingBlueEnrolmentPhoneData | null;
  emailData: FlyingBlueEnrolmentEmailData;
  communicationData?: FlyingBlueEnrolmentCommunicationData | null;
  ffpData?: FlyingBlueEnrolmentFfpData | null;
  permissions?: (FlyingBlueEnrolmentPermissions | null)[] | null;
  personalQuestion?: FlyingBlueEnrolmentPersonalQuestion | null;
  upgradeFromMyAccount: FlyingBlueUpgradeFromMyAccount;
}

export interface FlyingBlueUpgradeIndividualData {
  civility?: FlyingBlueEnrolmentCivility | null;
  lastName?: string | null;
  firstName?: string | null;
  middleName?: string | null;
  birthDate: string;
  individualSearch?: boolean | null;
}

export interface FlyingBlueUpgradeFromMyAccount {
  gin: number;
  currentPassword: string;
}
/** Boaring Pass Availibility Input Type */
export interface BoardingDocCII {
  available?: (BoardingDocFormatCII | null)[] | null;
}
/** Description of the check-in group */
export interface CheckinDocumentCII {
  checkinConfirmation?: BoardingDocCII | null;
}
export interface OrderQueryArgs {
  conversationStateId?: UniqueId | null;
  orderId?: UniqueId | null;
  name?: string | null;
  pnr?: string | null;
  currencyCode?: string | null;
  paymentMethodCode?: string | null;
}
export interface CreateOrderWithAncillariesQueryArgs {
  conversationStateId?: UniqueId | null;
}
export interface CreateOrderQueryArgs {
  conversationStateId?: UniqueId | null;
  pnr?: string | null;
  name?: string | null;
}
export interface OrderV2QueryArgs {
  conversationStateId?: UniqueId | null;
  orderId?: UniqueId | null;
  name?: string | null;
  pnr?: string | null;
}
export interface CreateOrderWithAncillariesV2QueryArgs {
  conversationStateId?: UniqueId | null;
}
export interface ConfirmGratisProductsQueryArgs {
  conversationStateId?: UniqueId | null;
}
export interface DecryptedReservationQueryArgs {
  encryptedReservation?: string | null;
}
export interface EncryptedReservationQueryArgs {
  market: string;
  bookingCode: string;
  lastName: string;
}
export interface PaymentOptionsV2QueryArgs {
  conversationStateId?: UniqueId | null;
  orderId: UniqueId;
  pnr?: string | null;
  name?: string | null;
}
export interface PaymentQueryArgs {
  orderId: UniqueId;
  conversationStateId?: UniqueId | null;
  name?: string | null;
  pnr?: string | null;
}
export interface AncillariesQueryArgs {
  shopId?: string | null;
}
export interface NbaQueryArgs {
  resourceId: string;
}
export interface FlightProductQueryArgs {
  id?: string | null;
  flightProduct?: string | null;
}
export interface FlightOffersQueryArgs {
  flightOfferRequest?: FlightOfferRequest | null;
  activeConnection?: number | null;
  metaSearch?: boolean | null;
}
export interface OffersQueryArgs {
  flightOfferRequest?: FlightOfferRequest | null;
  activeConnection?: number | null;
  metaSearch?: boolean | null;
}
export interface RelatedProductsQueryArgs {
  flightOfferRequest?: FlightOfferRequest | null;
  activeConnection?: number | null;
  device?: string | null;
}
export interface ShoppingCartShopIdQueryArgs {
  flightOfferRequest?: FlightOfferRequest | null;
  activeConnection?: number | null;
  timeToThink?: boolean | null;
}
export interface BrandedFaresQueryArgs {
  upsellsUniqueKey?: string | null;
  flightAmenityNumber?: string | null;
  cabinClass?: string | null;
  activeConnection?: number | null;
  connectionsParam?: string | null;
  passengerString?: string | null;
}
export interface ReservationQueryArgs {
  bookingCode?: string | null;
  lastName?: string | null;
  id?: string | null;
}
export interface CheckInQueryArgs {
  ticketNumber?: string | null;
  airlineCode?: string | null;
  flightNumber?: string | null;
  checkInGroupId?: string | null;
  bookingCode?: string | null;
  departureStation?: string | null;
}
export interface BoardingDocsQueryArgs {
  checkInGroupId?: string | null;
  emailAddress?: string | null;
  passengers?: (BoardingDocPassengersCII | null)[] | null;
  documents?: (DocumentsCII | null)[] | null;
}
export interface CheckInReferenceDataQueryArgs {
  countryCode?: string | null;
}
export interface CheckTransferPassengerStatusQueryArgs {
  checkInGroupId?: string | null;
  checkStatusUrl?: string | null;
}
export interface ReservationFlightListQueryArgs {
  gin?: boolean | null;
  bookingCode?: string | null;
  lastName?: string | null;
}
export interface GetCheckDuplicateQueryArgs {
  firstName?: string | null;
  lastName?: string | null;
  category?: string | null;
  operatingAirlineCode?: string | null;
  operatingFlightNumber?: string | null;
  marketingAirlineCode?: string | null;
  marketingFlightNumber?: string | null;
  departureDate?: string | null;
}
export interface ProfilesQueryArgs {
  ceId: number;
}
export interface UccrsQueryArgs {
  ceId: number;
  page: number;
  size: number;
  sort?: string | null;
  direction?: string | null;
}
export interface UccrQueryArgs {
  ceId: number;
  id?: string | null;
}
export interface CustomerQueryArgs {
  expand?: string | null;
}
export interface DestinationQueryArgs {
  iataCode?: string | null;
}
export interface FlightStatusQueryArgs {
  flightStatusInput?: FlightStatusInput | null;
}
export interface InspireDestinationsV4QueryArgs {
  gin?: string | null;
  cities?: string | null;
}
export interface InspireDestinationsQueryArgs {
  cities: string;
}
export interface TaxBreakdownQueryArgs {
  flightOfferRequest?: FlightOfferRequest | null;
  activeConnection?: number | null;
}
export interface TripSummaryItineraryQueryArgs {
  body?: ItineraryBody | null;
  metaSearch?: boolean | null;
}
export interface LowestOffersQueryArgs {
  lowestOffersRequest?: LowestOffersRequest | null;
  activeConnection?: number | null;
  withEmptyDates?: boolean | null;
}
export interface DecryptedReservationV2QueryArgs {
  encryptedReservation?: string | null;
}
export interface EncryptedReservationV2QueryArgs {
  market: string;
  bookingCode: string;
  lastName: string;
}
export interface ReferenceDataQueryArgs {
  bookingFlow?: string | null;
}
export interface RichContentQueryArgs {
  flights?: (string | null)[] | null;
}
export interface SeatmapQueryArgs {
  shopId: string;
  segmentId: string;
  passengerId: string;
}
export interface ShoppingCartQueryArgs {
  shopCartUrl?: string | null;
  productClass?: string | null;
}
export interface HandoverCheckoutQueryArgs {
  ubc?: string | null;
}
export interface PaymentMethodsQueryArgs {
  paymentType?: string | null;
}
export interface FlyingBlueBenefitsQueryArgs {
  fbNumber?: string | null;
}
export interface FlyingBlueDashboardQueryArgs {
  fbNumber?: string | null;
}
export interface FlyingBlueTransactionHistoryQueryArgs {
  fbNumber?: string | null;
  size?: number | null;
  offset?: number | null;
}
export interface FlyingBlueContactDetailsQueryArgs {
  fbNumber?: string | null;
}
export interface StatesQueryArgs {
  countryCode?: string | null;
}
export interface PaymentOptionsOrderCooArgs {
  conversationStateId?: UniqueId | null /** Conversation state id */;
  orderId?: UniqueId | null /** order id */;
  pnr?: string | null /** PNR(bookingcode) */;
  name?: string | null /** Booking name */;
}
export interface PassengerFieldsOrderCooArgs {
  conversationStateId: UniqueId /** Conversation state id */;
}
export interface CartProductsOrderCooArgs {
  conversationStateId: UniqueId;
}
export interface OfferedProductsOrderCooArgs {
  conversationStateId: UniqueId /** Conversation state id */;
}
export interface PassengerFieldsOrderV2Args {
  conversationStateId: UniqueId /** Conversation state id */;
}
export interface PaymentOptionsV2OrderV2Args {
  orderId?: UniqueId | null;
  conversationStateId?: UniqueId | null;
  pnr?: string | null;
  name?: string | null;
}
export interface PaymentOrderV2Args {
  orderId?: UniqueId | null;
  conversationStateId?: UniqueId | null;
  pnr?: string | null;
  name?: string | null;
}
export interface CartProductsOrderV2Args {
  conversationStateId: UniqueId;
}
export interface OfferedProductsOrderV2Args {
  conversationStateId: UniqueId;
}
export interface ReservationAncillariesAnoArgs {
  reservationId?: string | null;
}
export interface ItineraryAncillariesAnoArgs {
  orderId?: string | null;
  checkinGroupId?: string | null;
  reservationId?: string | null;
}
export interface ProductPerksAncillariesAnoArgs {
  segmentId: string;
  passengerId: string;
}
export interface SegmentItineraryAnoArgs {
  segmentId?: string | null;
}
export interface ProductPerksNbaProductAnoArgs {
  shopId?: string | null;
}
export interface UpdateCurrencyMutationMutationArgs {
  conversationStateId?: UniqueId | null;
  orderId: UniqueId;
  pnr?: string | null;
  name?: string | null;
  currencyCode?: string | null;
  paymentMethodCode?: string | null;
  binNumber?: string | null;
}
export interface AddInsuranceMutationArgs {
  conversationStateId: UniqueId;
  productCodeToAdd?: string | null;
}
export interface ReplaceInsuranceMutationArgs {
  conversationStateId: UniqueId;
  productIdToDelete?: string | null;
  productCodeToAdd?: string | null;
}
export interface DeleteInsuranceMutationArgs {
  conversationStateId: UniqueId;
  productIdToDelete?: string | null;
}
export interface OrderV2MutationArgs {
  conversationStateId?: UniqueId | null;
  orderId?: UniqueId | null;
  name?: string | null;
  pnr?: string | null;
  timeToThinkReferenceId?: string | null;
}
export interface PostPassengerMutationMutationArgs {
  conversationStateId: UniqueId;
  orderId: UniqueId;
  hasAncillaries?: boolean | null;
  passengers?: (PassengerCOI | null)[] | null;
}
export interface PaymentMutationMutationArgs {
  conversationStateId?: UniqueId | null;
  orderId: UniqueId;
  pnr: string;
  name: string;
  body: string;
  store?: boolean | null;
}
export interface ResumePaymentMutationMutationArgs {
  conversationStateId?: UniqueId | null;
  orderId: UniqueId;
  pnr: string;
  name: string;
  params: string;
  store?: boolean | null;
}
export interface PutBinMutationArgs {
  conversationStateId?: UniqueId | null;
  pnr?: string | null;
  name?: string | null;
  orderId?: UniqueId | null;
  body?: InputBin | null;
}
export interface PutCurrencyMutationArgs {
  conversationStateId?: UniqueId | null;
  pnr?: string | null;
  name?: string | null;
  orderId: UniqueId;
  body?: InputCurrency | null;
}
export interface DeleteCurrencyMutationArgs {
  conversationStateId?: UniqueId | null;
  pnr?: string | null;
  name?: string | null;
  orderId: UniqueId;
}
export interface PutMilesMutationArgs {
  conversationStateId?: UniqueId | null;
  pnr?: string | null;
  name?: string | null;
  orderId: UniqueId;
  body?: InputMiles | null;
}
export interface DeleteMilesMutationArgs {
  conversationStateId?: UniqueId | null;
  pnr?: string | null;
  name?: string | null;
  orderId: UniqueId;
}
export interface PostPayMutationArgs {
  orderId: UniqueId;
  termsAndConditionsCheck: boolean;
  conversationStateId?: UniqueId | null;
  name?: string | null;
  pnr?: string | null;
  body?: InputPay | null;
}
export interface ResumePaymentV2MutationArgs {
  orderId: UniqueId;
  conversationStateId?: UniqueId | null;
  name?: string | null;
  pnr?: string | null;
  params?: JsonData | null;
}
export interface PutDiscountCodeMutationArgs {
  conversationStateId?: UniqueId | null;
  pnr?: string | null;
  name?: string | null;
  orderId?: UniqueId | null;
  body?: InputDiscountCodeBody | null;
}
export interface DeleteDiscountCodeMutationArgs {
  conversationStateId?: UniqueId | null;
  pnr?: string | null;
  name?: string | null;
  orderId?: UniqueId | null;
}
export interface PostVouchersMutationArgs {
  conversationStateId?: UniqueId | null;
  pnr?: string | null;
  name?: string | null;
  orderId?: UniqueId | null;
  body?: InputVouchers | null;
}
export interface DeleteVoucherMutationArgs {
  conversationStateId?: UniqueId | null;
  pnr?: string | null;
  name?: string | null;
  orderId?: UniqueId | null;
  voucherId: string;
}
export interface DeleteAllCartProductsMutationArgs {
  input?: DeleteAllCartProductsInput | null;
}
export interface ChangeBaggageMutationArgs {
  input?: ChangeProductsANI | null;
}
export interface ChangeEnvironmentalMutationArgs {
  input?: ChangeEnviromentalProductsANI | null;
}
export interface PostReservationInvoiceMutationArgs {
  input?: InvoiceInput | null;
}
export interface SaveUmnrMutationArgs {
  formData?: (UMNRFormDataReservationInput | null)[] | null;
  initialData?: (UMNRInitialDataReservationInput | null)[] | null;
}
export interface CheckInSavePassengerInfoMutationArgs {
  input: CheckInInformationCII;
}
export interface CheckInSavePassengerApisMutationArgs {
  input: CheckInInformationCII;
}
export interface CheckInSubmitMutationArgs {
  input: CheckInInformationCII;
}
export interface CheckInMutationArgs {
  input: CheckInInformationCII;
  method: CIIMutationMethod;
}
export interface CheckInAddPassengerMutationArgs {
  checkInGroupId?: string | null;
  ticketNumber?: string | null;
}
export interface CheckInTransferPassengerMutationArgs {
  checkInGroupId?: string | null;
  alternativeConnectionId?: string | null;
}
export interface AddUserMutationArgs {
  ceId: number;
  userCreationInfo: UserCreationInfos;
}
export interface UpdateUserMutationArgs {
  ceId: number;
  uccrId: string;
  updateUserInfo: UserUpdateInfos;
}
export interface DeleteUserMutationArgs {
  ceId: number;
  uccrId: string;
  message?: string | null;
}
export interface DeletePhoneNumberMutationArgs {
  phoneNumberType?: string | null;
}
export interface DeletePostalAddressMutationArgs {
  deletePostalAddressLink?: string | null;
}
export interface UpdateAllMutationArgs {
  dataToUpdate?: string | null;
  fields?: string | null;
}
export interface PostPassengerMutationV2MutationArgs {
  conversationStateId: UniqueId;
  orderId: UniqueId;
  hasAncillaries?: boolean | null;
  passengers?: (PassengerCOI | null)[] | null;
}
export interface ChangeSeatMutationArgs {
  input?: ChangeSeatSMI | null;
}
export interface UpdateCompanionMutationArgs {
  companionUpdate?: CompanionCUI | null;
  companionId?: string | null;
}
export interface CreateCompanionMutationArgs {
  companionToCreate?: (CreateCompanionCUI | null)[] | null;
}
export interface DeleteCompanionMutationArgs {
  companionId?: string | null;
}
export interface UpdateTravelDocumentMutationArgs {
  travelDocument?: TravelDocumentCUI | null;
}
export interface DeleteTravelDocumentMutationArgs {
  travelDocumentId?: number | null;
}
export interface DeleteSocialConnectionMutationArgs {
  socialConnectionURI?: string | null;
}
export interface ChangePaymentPreferenceMutationArgs {
  paymentPreference?: PaymentPreferenceCUI | null;
}
export interface CheckSecurePaymentPreferenceMutationArgs {
  clientTransactionId?: string | null;
}
export interface DeletePaymentPreferenceMutationArgs {
  paymentPreferenceId?: string | null;
}
export interface SaveSecurePaymentPreferenceMutationArgs {
  paymentPreference?: SecurePaymentPreferenceCUI | null;
  returnUrl?: string | null;
  styleId?: string | null;
}
export interface UpdateSubscriptionsMutationArgs {
  input?: SubscriptionsCUI | null;
}
export interface FlyingBlueEnrolmentMutationArgs {
  input?: FlyingBlueEnrolment | null;
}
export interface FlyingBlueUpgradeMutationArgs {
  input?: FlyingBlueUpgrade | null;
}
export interface OrderPaymentMutationCooArgs {
  conversationStateId?: UniqueId | null;
  orderId?: UniqueId | null;
  name?: string | null;
  pnr?: string | null;
  currencyCode?: string | null;
  paymentMethodCode?: string | null;
}
export interface PaymentOptionsV2PutBinArgs {
  conversationStateId?: UniqueId | null;
  orderId: UniqueId;
  pnr?: string | null;
  name?: string | null;
}
export interface PaymentOptionsV2CurrencyMutationArgs {
  conversationStateId?: UniqueId | null;
  orderId: UniqueId;
  pnr?: string | null;
  name?: string | null;
}
export interface OrderV2CurrencyMutationArgs {
  conversationStateId?: UniqueId | null;
  orderId?: UniqueId | null;
  name?: string | null;
  pnr?: string | null;
}
export interface PaymentOptionsV2MilesMutationArgs {
  conversationStateId?: UniqueId | null;
  orderId: UniqueId;
  pnr?: string | null;
  name?: string | null;
}
export interface PaymentOptionsV2PutDiscountCodeArgs {
  orderId: UniqueId;
  conversationStateId?: UniqueId | null;
  pnr: string;
  name: string;
}
export interface PaymentPutDiscountCodeArgs {
  orderId: UniqueId;
  conversationStateId?: UniqueId | null;
  pnr: string;
  name: string;
}
export interface PaymentOptionsV2DeleteDiscountCodeArgs {
  orderId: UniqueId;
  conversationStateId?: UniqueId | null;
  pnr: string;
  name: string;
}
export interface PaymentDeleteDiscountCodeArgs {
  orderId: UniqueId;
  conversationStateId?: UniqueId | null;
  pnr: string;
  name: string;
}
export interface PaymentPostVouchersArgs {
  orderId: UniqueId;
  conversationStateId?: UniqueId | null;
  pnr: string;
  name: string;
}
export interface PaymentOptionsV2PostVouchersArgs {
  orderId: UniqueId;
  conversationStateId?: UniqueId | null;
  pnr: string;
  name: string;
}
export interface PaymentDeleteVoucherArgs {
  orderId: UniqueId;
  conversationStateId?: UniqueId | null;
  pnr: string;
  name: string;
}
export interface PaymentOptionsV2DeleteVoucherArgs {
  orderId: UniqueId;
  conversationStateId?: UniqueId | null;
  pnr: string;
  name: string;
}
export interface SeatmapShopShoArgs {
  segmentId?: string | null;
  passengerId?: string | null;
}

export enum PaymentStatus {
  PAYMENT_AVAILABLE = 'PAYMENT_AVAILABLE',
  NO_PAYMENT_POSTED = 'NO_PAYMENT_POSTED',
  PAYMENT_RETRIEVAL_FAILED = 'PAYMENT_RETRIEVAL_FAILED'
}

export enum CIOProblemType {
  CheckInGroupIdProblem = 'CheckInGroupIdProblem',
  LargeGroupProblem = 'LargeGroupProblem',
  ThirdPartyAirlineProblem = 'ThirdPartyAirlineProblem',
  InvalidParamsProblem = 'InvalidParamsProblem'
}
/** represents the status after issuing postpay, mostly as meant by the http status of the underlying post pay API response */
export enum PostPayStatus {
  READY = 'READY',
  PENDING = 'PENDING',
  INVALID = 'INVALID',
  FRAUD = 'FRAUD',
  ERROR = 'ERROR'
}

export enum ProductClassEnum {
  seat = 'seat',
  luggage = 'luggage',
  environmental = 'environmental'
}

export enum CIIMutationMethod {
  savePassengerInfo = 'savePassengerInfo',
  selectAndSavePassengerInfo = 'selectAndSavePassengerInfo',
  saveAndSubmitForCheckin = 'saveAndSubmitForCheckin',
  saveAndSubmitChangedFlight = 'saveAndSubmitChangedFlight'
}

export enum FlyingBlueEnrolmentRequestorType {
  C = 'C',
  O = 'O',
  F = 'F'
}

export enum FlyingBlueEnrolmentCivility {
  M = 'M',
  MR = 'MR',
  MRS = 'MRS'
}

export enum FlyingBlueEnrolmentMediumCode {
  D = 'D',
  P = 'P'
}

export enum FlyingBlueEnrolmentTerminalType {
  M = 'M',
  T = 'T',
  F = 'F'
}

export enum FlyingBlueEnrolmentMailingAuth {
  N = 'N',
  A = 'A',
  T = 'T'
}

export enum FlyingBlueEnrolmentCommMedia {
  F = 'F',
  P = 'P',
  T = 'T'
}

export enum FlyingBlueEnrolmentRequestorChannel {
  AGV = 'AGV',
  DS = 'DS',
  GSV = 'GSV',
  IOB = 'IOB',
  IOG = 'IOG',
  MOB = 'MOB',
  PAR = 'PAR',
  WEB = 'WEB'
}

export type CartProductANO = SeatCartProductANO | BaggageCartProductANO | EnvironmentalCartProductANO;

export type CIOCheckinInformationResult =
  | CheckinInformationCIO
  | CIOThirdPartyAirlineProblem
  | CIOCheckInGroupIdProblem
  | CIOLargeGroupProblem
  | CIOInvalidParamsProblem;

export type CIOCheckTransferPassengerStatusResult = CIOTransferPassengerStatus | CheckinInformationCIO | CIOThirdPartyAirlineProblem;

export type ReservationFlightListResponse = ReservationFlightList | APIWarnings;

export type TripSummaryResponse = TripSummaryItinerary | APIWarnings;

export type ShoppingCartResult = BaggageTypeSCO | SeatTypeSCO;

export type CIOCheckinSavePassengerResult = CheckinInformationCIO | CIOCheckInGroupIdProblem;

export type CIOTransferPassengerResult = CIOTransferPassengerStatus | CIOCheckInGroupIdProblem;

/** ... */
export type ProductTypeSCO = BaggageTypeSCO | SeatTypeSCO;

export type FlyingBlueEnrolmentResult = FlyingBlueEnrolmentResponse | FlyingBlueEnrolmentErrorResponse;

export namespace AddPassenger {
  export type Variables = {
    checkInGroupId: string;
    ticketNumber: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';
    checkInAddPassenger?: CheckInAddPassenger | null;
  };

  export type CheckInAddPassenger = {
    __typename?: 'CheckinInformationCIO';
    checkInGroupId?: string | null;
  };
}
export namespace BoardingDocsByCigId {
  export type Variables = {
    checkInGroupId?: string | null;
  };

  export type Query = {
    __typename?: 'Query';
    checkIn?: CheckIn | null;
  };

  export type CheckIn = CheckinInformationCioInlineFragment | CioCheckInGroupIdProblemInlineFragment;

  export type CheckinInformationCioInlineFragment = {
    __typename?: 'CheckinInformationCIO';
    checkInGroupId?: string | null;
    selectedForCheckinGroup?: (SelectedForCheckinGroup | null)[] | null;
    documents?: (Documents | null)[] | null;
  };

  export type SelectedForCheckinGroup = {
    __typename?: 'SelectedForCheckinGroupCIO';
    id?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    title?: Title | null;
  };

  export type Title = {
    __typename?: 'CodeNameCIO';
    code?: string | null;
    name?: string | null;
  };

  export type Documents = {
    __typename?: 'DocumentsCIO';
    type?: string | null;
    available?: (Available | null)[] | null;
    notification?: string | null;
  };

  export type Available = {
    __typename?: 'BoardingDocFormatCIO';
    type?: string | null;
    deliveryAddresses?: (DeliveryAddresses | null)[] | null;
  };

  export type DeliveryAddresses = {
    __typename?: 'TypeCIO';
    type?: string | null;
  };

  export type CioCheckInGroupIdProblemInlineFragment = {
    __typename?: 'CIOCheckInGroupIdProblem';
    problem: CIOProblemType;
  };
}
export namespace CheckInByBookingCode {
  export type Variables = {
    bookingCode: string;
    flightNumber: string;
  };

  export type Query = {
    __typename?: 'Query';
    checkIn?: CheckIn | null;
  };

  export type CheckIn = CheckinInformationCioInlineFragment | CioThirdPartyAirlineProblemInlineFragment;

  export type CheckinInformationCioInlineFragment = {
    __typename?: 'CheckinInformationCIO';
    checkInGroupId?: string | null;
    notifications?: (Notifications | null)[] | null;
  };

  export type Notifications = {
    __typename?: 'NotificationsCIO';
    text?: string | null;
    type?: string | null;
  };

  export type CioThirdPartyAirlineProblemInlineFragment = {
    __typename?: 'CIOThirdPartyAirlineProblem';
    thirdPartyName?: string | null;
    thirdPartyRedirectLink: string;
  };
}
export namespace CheckInByCheckInGroupId {
  export type Variables = {
    checkInGroupId?: string | null;
  };

  export type Query = {
    __typename?: 'Query';
    checkIn?: CheckIn | null;
  };

  export type CheckIn =
    | CheckinInformationCioInlineFragment
    | CioThirdPartyAirlineProblemInlineFragment
    | CioCheckInGroupIdProblemInlineFragment;

  export type CheckinInformationCioInlineFragment = {
    __typename?: 'CheckinInformationCIO';
    checkInGroupId?: string | null;
  };

  export type CioThirdPartyAirlineProblemInlineFragment = {
    __typename?: 'CIOThirdPartyAirlineProblem';
    thirdPartyName?: string | null;
    thirdPartyRedirectLink: string;
  };

  export type CioCheckInGroupIdProblemInlineFragment = {
    __typename?: 'CIOCheckInGroupIdProblem';
    problem: CIOProblemType;
  };
}
export namespace CheckInByTicketNumber {
  export type Variables = {
    ticketNumber: string;
    flightNumber?: string | null;
  };

  export type Query = {
    __typename?: 'Query';
    checkIn?: CheckIn | null;
  };

  export type CheckIn = CheckinInformationCioInlineFragment | CioThirdPartyAirlineProblemInlineFragment;

  export type CheckinInformationCioInlineFragment = {
    __typename?: 'CheckinInformationCIO';
    checkInGroupId?: string | null;
    notifications?: (Notifications | null)[] | null;
  };

  export type Notifications = {
    __typename?: 'NotificationsCIO';
    text?: string | null;
    type?: string | null;
  };

  export type CioThirdPartyAirlineProblemInlineFragment = {
    __typename?: 'CIOThirdPartyAirlineProblem';
    thirdPartyName?: string | null;
    thirdPartyRedirectLink: string;
  };
}
export namespace CheckIn {
  export type Variables = {
    checkInData: CheckInInformationCII;
    method: CIIMutationMethod;
  };

  export type Mutation = {
    __typename?: 'Mutation';
    checkIn?: CheckIn | null;
  };

  export type CheckIn = CheckinInformationCioInlineFragment;

  export type CheckinInformationCioInlineFragment = {
    __typename?: 'CheckinInformationCIO';
    checkInGroupId?: string | null;
    connections?: (Connections | null)[] | null;
  };

  export type Connections = {
    __typename?: 'ConnectionsCIO';
    id?: string | null;
  };
}
export namespace CheckInQuery {
  export type Variables = {
    bookingCode?: string | null;
    checkInGroupId?: string | null;
    flightNumber?: string | null;
    ticketNumber?: string | null;
  };

  export type Query = {
    __typename?: 'Query';
    checkIn?: CheckIn | null;
  };

  export type CheckIn =
    | CheckinInformationCioInlineFragment
    | CioThirdPartyAirlineProblemInlineFragment
    | CioCheckInGroupIdProblemInlineFragment
    | CioInvalidParamsProblemInlineFragment;

  export type CheckinInformationCioInlineFragment = {
    __typename?: 'CheckinInformationCIO';
    checkInGroupId?: string | null;
    notifications?: (Notifications | null)[] | null;
  };

  export type Notifications = {
    __typename?: 'NotificationsCIO';
    text?: string | null;
    type?: string | null;
  };

  export type CioThirdPartyAirlineProblemInlineFragment = {
    __typename?: 'CIOThirdPartyAirlineProblem';
    thirdPartyName?: string | null;
    thirdPartyRedirectLink: string;
  };

  export type CioCheckInGroupIdProblemInlineFragment = {
    __typename?: 'CIOCheckInGroupIdProblem';
    problem: CIOProblemType;
  };

  export type CioInvalidParamsProblemInlineFragment = {
    __typename?: 'CIOInvalidParamsProblem';
    problem: CIOProblemType;
  };
}
export namespace CheckInSavePassengerApis {
  export type Variables = {
    checkInData: CheckInInformationCII;
  };

  export type Mutation = {
    __typename?: 'Mutation';
    checkInSavePassengerAPIS?: CheckInSavePassengerApis | null;
  };

  export type CheckInSavePassengerApis = CheckinInformationCioInlineFragment | CioCheckInGroupIdProblemInlineFragment;

  export type CheckinInformationCioInlineFragment = {
    __typename?: 'CheckinInformationCIO';
    checkInGroupId?: string | null;
  };

  export type CioCheckInGroupIdProblemInlineFragment = {
    __typename?: 'CIOCheckInGroupIdProblem';
    problem: CIOProblemType;
  };
}
export namespace CheckInSavePassengerInfo {
  export type Variables = {
    checkInData: CheckInInformationCII;
  };

  export type Mutation = {
    __typename?: 'Mutation';
    checkInSavePassengerInfo?: CheckInSavePassengerInfo | null;
  };

  export type CheckInSavePassengerInfo = CheckinInformationCioInlineFragment | CioCheckInGroupIdProblemInlineFragment;

  export type CheckinInformationCioInlineFragment = {
    __typename?: 'CheckinInformationCIO';
    checkInGroupId?: string | null;
    connections?: (Connections | null)[] | null;
  };

  export type Connections = {
    __typename?: 'ConnectionsCIO';
    id?: string | null;
  };

  export type CioCheckInGroupIdProblemInlineFragment = {
    __typename?: 'CIOCheckInGroupIdProblem';
    problem: CIOProblemType;
  };
}
export namespace CheckInSubmit {
  export type Variables = {
    checkInData: CheckInInformationCII;
  };

  export type Mutation = {
    __typename?: 'Mutation';
    checkInSubmit?: CheckInSubmit | null;
  };

  export type CheckInSubmit = CheckinInformationCioInlineFragment | CioCheckInGroupIdProblemInlineFragment;

  export type CheckinInformationCioInlineFragment = {
    __typename?: 'CheckinInformationCIO';
    checkInGroupId?: string | null;
    connections?: (Connections | null)[] | null;
  };

  export type Connections = {
    __typename?: 'ConnectionsCIO';
    id?: string | null;
  };

  export type CioCheckInGroupIdProblemInlineFragment = {
    __typename?: 'CIOCheckInGroupIdProblem';
    problem: CIOProblemType;
  };
}
export namespace CheckTransferPassengerStatus {
  export type Variables = {
    checkInGroupId: string;
    checkStatusUrl: string;
  };

  export type Query = {
    __typename?: 'Query';
    checkTransferPassengerStatus?: CheckTransferPassengerStatus | null;
  };

  export type CheckTransferPassengerStatus =
    | CioTransferPassengerStatusInlineFragment
    | CheckinInformationCioInlineFragment
    | CioThirdPartyAirlineProblemInlineFragment;

  export type CioTransferPassengerStatusInlineFragment = {
    __typename?: 'CIOTransferPassengerStatus';
    waitingTimeMs?: number | null;
    statusCheckUrl?: string | null;
    notifications?: (Notifications | null)[] | null;
  };

  export type Notifications = {
    __typename?: 'NotificationsCIO';
    name?: string | null;
    text?: string | null;
    type?: string | null;
  };

  export type CheckinInformationCioInlineFragment = {
    __typename?: 'CheckinInformationCIO';
    checkInGroupId?: string | null;
  };

  export type CioThirdPartyAirlineProblemInlineFragment = {
    __typename?: 'CIOThirdPartyAirlineProblem';
    thirdPartyName?: string | null;
    thirdPartyRedirectLink: string;
  };
}
export namespace DangerousGoods {
  export type Variables = {};

  export type Query = {
    __typename?: 'Query';
    dangerousGoods?: DangerousGoods | null;
  };

  export type DangerousGoods = {
    __typename?: 'DangerousGoodsCIO';
    description?: string | null;
    linkText?: string | null;
    linkUrl?: string | null;
    title?: string | null;
    items?: (Items | null)[] | null;
  };

  export type Items = {
    __typename?: 'DangerousGoodCIO';
    allowedCheckinLuggage?: boolean | null;
    allowedHandLuggage?: boolean | null;
    imageAlt?: string | null;
    imageUrl?: string | null;
    shortDescription?: string | null;
    text?: string | null;
  };
}
export namespace DestinationImage {
  export type Variables = {
    cities: string;
  };

  export type Query = {
    __typename?: 'Query';
    inspireDestinations?: InspireDestinations | null;
  };

  export type InspireDestinations = {
    __typename?: 'InspireDestinationsCOO';
    destinations?: (Destinations | null)[] | null;
  };

  export type Destinations = {
    __typename?: 'InspireDestinationCOO';
    pictureUrl?: string | null;
  };
}
export namespace SaveUmnr {
  export type Variables = {
    initialData?: (UMNRInitialDataReservationInput | null)[] | null;
    formData?: (UMNRFormDataReservationInput | null)[] | null;
  };

  export type Mutation = {
    __typename?: 'Mutation';
    saveUMNR?: SaveUmnr | null;
  };

  export type SaveUmnr = {
    __typename?: 'UMNRSavedSuccessfully';
    success: boolean;
  };
}
export namespace SendBoardingDocs {
  export type Variables = {
    checkInGroupId?: string | null;
    emailAddress?: string | null;
    passengers?: (BoardingDocPassengersCII | null)[] | null;
    documents?: (DocumentsCII | null)[] | null;
  };

  export type Query = {
    __typename?: 'Query';
    boardingDocs?: BoardingDocs | null;
  };

  export type BoardingDocs = {
    __typename?: 'BoardingDocumentsSentCIO';
    success?: boolean | null;
  };
}
export namespace GetStatesOfCountry {
  export type Variables = {
    countryCode?: string | null;
  };

  export type Query = {
    __typename?: 'Query';
    checkInReferenceData?: CheckInReferenceData | null;
  };

  export type CheckInReferenceData = {
    __typename?: 'ReferenceDataWrapperCIO';
    referenceData?: ReferenceData | null;
  };

  export type ReferenceData = {
    __typename?: 'ReferenceDataDetailsCIO';
    countries?: (Countries | null)[] | null;
  };

  export type Countries = {
    __typename?: 'CountryCIO';
    code?: string | null;
    name?: string | null;
    statesOrProvinces?: (StatesOrProvinces | null)[] | null;
  };

  export type StatesOrProvinces = {
    __typename?: 'CodeNameCIO';
    code?: string | null;
    name?: string | null;
  };
}
export namespace TopTasks {
  export type Variables = {
    checkInGroupId?: string | null;
  };

  export type Query = {
    __typename?: 'Query';
    checkIn?: CheckIn | null;
  };

  export type CheckIn = CheckinInformationCioInlineFragment | CioCheckInGroupIdProblemInlineFragment;

  export type CheckinInformationCioInlineFragment = {
    __typename?: 'CheckinInformationCIO';
    checkInGroupId?: string | null;
    notifications?: (Notifications | null)[] | null;
    shopId?: string | null;
  };

  export type Notifications = {
    __typename?: 'NotificationsCIO';
    text?: string | null;
  };

  export type CioCheckInGroupIdProblemInlineFragment = {
    __typename?: 'CIOCheckInGroupIdProblem';
    problem: CIOProblemType;
  };
}
export namespace TransferPassenger {
  export type Variables = {
    checkInGroupId: string;
    alternativeConnectionId: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';
    checkInTransferPassenger?: CheckInTransferPassenger | null;
  };

  export type CheckInTransferPassenger = CioTransferPassengerStatusInlineFragment | CioCheckInGroupIdProblemInlineFragment;

  export type CioTransferPassengerStatusInlineFragment = {
    __typename?: 'CIOTransferPassengerStatus';
    waitingTimeMs?: number | null;
    statusCheckUrl?: string | null;
    notifications?: (Notifications | null)[] | null;
  };

  export type Notifications = {
    __typename?: 'NotificationsCIO';
    name?: string | null;
    text?: string | null;
    type?: string | null;
  };

  export type CioCheckInGroupIdProblemInlineFragment = {
    __typename?: 'CIOCheckInGroupIdProblem';
    checkInGroupId: string;
  };
}
