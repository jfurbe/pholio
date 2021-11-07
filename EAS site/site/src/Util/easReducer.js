import * as ActionTypes from './ActionTypes';

export const reducer = (state = {
      errMess: null,
      userType: '',
      user: '',
      businesses: [],
      currentEAS: {},
      currentICT: {},
      ictData: {},
      oldICt: {},
      oldEAS: {},
      }, action) => {
    switch (action.type) {

      case ActionTypes.SET_USERTYPE:
        return {...state, isLoading: false, errMess: null, userType: action.payload};

      case ActionTypes.SET_USER:
        return {...state, isLoading: false, errMess: null, user: action.payload};

      case ActionTypes.HIT_SEARCH:
         return {...state, isLoading: false, errMess: null, businesses: action.payload};

      case ActionTypes.RESPONSE_SEARCH:
        return {...state, isLoading: false, errMess: null, responseSearch: action.payload};

      case ActionTypes.STORE_EAS:
        return {...state, isLoading: false, errMess: null, currentEAS:action.payload};

      case ActionTypes.GET_EAS:
          return {...state, isLoading: false, errMess: null, businesses: action.payload};

      case ActionTypes.POST_EAS:
          return {...state, isLoading: false, errMess: null, responseSearch: action.payload};

      case ActionTypes.STORE_ICT:
          return { ...state, currentICT: action.payload};
      
      case ActionTypes.STORE_OLDICT:
          return { ...state, oldICT: action.payload};
      
      case ActionTypes.STORE_OLDEAS:
          return { ...state, oldEAS: action.payload};

      case ActionTypes.GET_ICT:
          return {...state, isLoading: false, errMess: null, businesses: action.payload};

      case ActionTypes.POST_ICT:
          return {...state, isLoading: false, errMess: null, responseSearch: action.payload};

      default:
          return state;
      }
};

export const initialState = {
  currentEAS: {
    dic1 : {'Reference Number':'', 'P1111':0,'P1112':0, 'D4001':0, 'D4002':0,
            'D4110':0, 'D4190':0, 'D4211':0, 'D2180':0,
            'P1121':0, 'P5239':0, 'P5231':0, 'P1129':0, 'P1113':0, 'P1114':0, 'P1115':0,
            'P1111H':0, 'P1111G':0, 'P1111M':0, 'P1112G':0, 'P1113G':0, 'P1114G':0,
            'D4003':0, 'D7511':0, 'P1610':0, 'P1620':0, 'P1630':0,  'P1189':0,
            'P5219':0, 'P5211':0, 'P5229':0,
            'F6101':0, 'F6109':0, 'F6201':0, 'D6101':0, 'D6220':0, 'F6202':0, 'F7101':0,
            'F7200':0, 'F6203':0, 'D4000':0,
            'D4111':0, 'D4112':0,
            'TOTAL INCOME':0,
            'D1000':0, 'D2910':0, 'D2990':0, 'K1000':0, 'D4590':0, 'D1112':0, 'D2142':0,
            'P2151':0, 'P2152':0, 'P2153':0, 'P2154':0, 'P2155':0,
            'D4009':0, 'D7520':0, 'P2160':0, 'P2170':0, 'P2190':0, 'P2130':0,
            'P2180':0, 'P2214':0, 'P2220':0, 'P2230':0, 'P2111':0, 'P2212':0,
            'P2213':0, 'P2211':0, 'P2411':0, 'P5115':0, 'P5221':0, 'P2140':0,
            'P2240':0, 'P2300':0, 'P2412':0, 'P2420':0, 'D7200':0, 'P2620':0,
            'P2430':0, 'P2510':0, 'P2520':0, 'P2610':0, 'D2900':0, 'P2120':0,
            'P2630':0, 'P2700':0, 'P2810':0, 'P2820':0, 'P2830':0, 'D7101':0,
            'P2840':0, 'P2900':0, 'TOTAL EXPENSES':0,
            'P1111f':0,'P1112f':0, 'D4002f':0,
            'D4190f':0, 'D4211f':0, 'D2180f':0, 'P1189f':0,'D4110f':0,
            'P1121f':0, 'P5239f':0, 'P5231f':0, 'P1129f':0, 'P1113f':0, 'P1114f':0, 'P1115f':0,
            'D1000f':0, 'D2910f':0, 'D2990f':0, 'K1000f':0, 'D4590f':0, 'D1112f':0, 'D2142f':0,
            'P2151f':0, 'P2152f':0, 'P2153f':0, 'P2154f':0, 'P2155f':0,
            'D4009f':0, 'D7520f':0, 'P2160f':0, 'P2170f':0, 'P2190f':0, 'P2130f':0,
            'P2180f':0, 'P2214f':0, 'P2220f':0, 'P2230f':0, 'P2111f':0, 'P2212f':0,
            'P2213f':0, 'P2211f':0, 'P2411f':0, 'P5115f':0, 'P5221f':0, 'P2140f':0,
            'P2240f':0, 'P2300f':0, 'P2412f':0, 'P2420f':0, 'D7200f':0, 'P2620f':0,
            'P2430f':0, 'P2510f':0, 'P2520f':0, 'P2610f':0, 'D2900f':0, 'P2120f':0,
            'P2630f':0, 'P2700f':0, 'P2810f':0, 'P2820f':0, 'P2830f':0, 'D7101f':0,
            'P2840f':0, 'P2900f':0, 'ISIC':0, 'FORM':0},

    dic2 :  {'P5114':0, 'P5114p':0,	'P5114l':0,	'P5114d':0,	'P5114f':0,
              'P5116':0, 'P5116p':0,	'P5116l':0,	'P5116d':0,	'P5116f':0,
              'P5117':0, 'P5117p':0,	'P5117l':0,	'P5117d':0,	'P5117f':0,
              'P5118':0, 'P5118p':0,	'P5118l':0,	'P5118d':0,	'P5118f':0,
              'P5119':0, 'P5119p':0,	'P5119l':0,	'P5119d':0,	'P5119f':0,
              'P5120':0, 'P5120p':0,	'P5120l':0,	'P5120d':0,	'P5120f':0,
              'P5121':0, 'P5121p':0,	'P5121l':0,	'P5121d':0,	'P5121f':0,
              'P5122':0, 'P5122p':0,	'P5122l':0,	'P5122d':0,	'P5122f':0,
              'P5300':0, 'P5300p':0,	'P5300l':0,	'P5300d':0,	'P5300f':0,
             'Total Depreciation:':0,
             'P5200A':0,'P5200B':0,'P5200C':0,'P5200D':0,'P5200E':0,
             'P5200AC':0,'P5200BC':0,'P5200CC':0,'P5200DC':0,'P5200EC':0,
             'TOTAL VALUE OF INVENTORIES':0},

    dic3 : {'B2111D':0, 'B2222D':0, 'A7100D':0, 'A1021D':0, 'A1022D':0, 'A9200D':0,
            'A6100D':0, 'C2240D':0, 'A3400D':0, 'A4120D':0, 'A8000D':0, 'A1035D':0,
            'A1000D':0, 'C2227D':0, '343421NAF':0, 'B2111C':0, 'B2222C':0, 'A1021C':0,
            'A1022C':0, 'A9200C':0, 'A6100C':0, 'C2240C':0, 'A8000C':0, 'A1035C':0, 'A1000C':0,
            'C2227C':0, '343421NIL':0},
    dic4 : {'31111NAF1':[0,0], '32142NAF1':[0,0], '322412NAF1':[0,0], '342421NAF1':[0,0], '343421NAF1':[0,0],
            '346421NAF1':[0,0], '31111NIL1':[0,0], '32142NIL1':[0,0], '322412NIL1':[0,0],
            '343421NIL1':[0,0], '346421NIL1':[0,0], },
    dic5 : {'PercentageIncomeBusinessTourist':0,'PercentageIncomeVacationTourists':0,'PercentageIncomeLocals':0,'RemittedAbroad':0,
    'NumberEmployees':0,'NumberOwners':0,'Covid':0,'ConstructionActivity1':0,'ConstructionActivity2':0,'ConstructionActivity3':0,
    'RetailingActivity1':0,'RetailingActivity2':0,'RetailingActivity3':0}
  },
  ictData: {
    Computers: false,
    NumberComputerUsers: 0,
    InternetEnabledDevice: false,
    InternetEnabledDevicePhone: false,
    InternetEnabledDeviceTablet: false,
    InternetUse: false,
    ConnectionNarrowBand: false,
    ConnectionBroadBand: false,
    ConnectionMobileBand: false,
    NumberInternetUsers: 0,
    InternalNetwork: false,
    InternalNetworkIntranet: false,
    InternalNetworkLan: false,
    Extranet: false,
    WebPresence: false,
    InternetPurchases: false,
    InternetPurchasesValue: 0,
    InternetSales: false,
    InternetSalesValue: 0,
    Email: false,
    internetTelephony: false,
    ResearchOfGoodsAndServices: false,
    InfoFromGovtOrgs: false,
    InteractingWithGovtOrgs: false,
    InternetBanking: false,
    AccessingOtherFinancialServices: false,
    ProvidingCustomerServices: false,
    DeliveringProductsOnline: false,
    InternalOrExternalRecruitment: false,
    StaffTraining: false,
    CloudServices: false,
    ICTOutsourcing: false,
    ICTOutsourceLocation:"",
  },
  currentICT: {
    AccessingOtherFinancialServices: false,
    CloudServices: false,
    Computers: "",
    Connection: "",
    DeliveringProductsOnline: false,
    Email: false,
    Extranet: "",
    ICTOutsourceLocation: "",
    ICTOutsourcing: "",
    InfoFromGovtOrgs: false,
    InteractingWithGovtOrgs: false,
    InternalNetworks: "",
    InternalOrExternalRecruitment: false,
    InternetBanking: false,
    InternetEnabledDevices: "",
    InternetPurchases: "",
    InternetPurchasesValue: "",
    InternetSales: "",
    InternetSalesValue: "",
    InternetUse: "",
    NumberComputerUsers: "",
    NumberInternetUsers: "",
    OtherLocations: "",
    ProvidingCustomerServices: false,
    ResearchOfGoodsAndServices: false,
    StaffTraining: false,
    WebPresence: "",
    internetTelephony: false,
  },
}