mport axios from 'axios';
import getConfig from 'next/config';
import _, { get } from 'lodash';
import axiosApiInstance from './axiosInterpretor';

const { publicRuntimeConfig } = getConfig();

export const GET_CHARITY_REQUEST = 'GET_CHARITY_REQUEST';
export const SET_CHARITY_ERROR = 'SET_CHARITY_ERROR';
export const SET_CHARITY = 'SET_CHARITY';
export const SET_RECOMMENDED_CHARITY = 'SET_RECOMMENDED_CHARITY';

export function charityRequest() {
  return {
    type: GET_CHARITY_REQUEST,
    gettingCharity: true,
  };
}

export function charityError() {
  return {
    type: SET_CHARITY_ERROR,
    gettingCharity: false,
  };
}

export function setCharity(charity) {
  return {
    type: SET_CHARITY,
    gettingCharity: false,
    charity,
  };
}

export function setRecommendedCharity(charity) {
  return {
    type: SET_RECOMMENDED_CHARITY,
    recommendedCharity: charity
  };
}

export const getCharities = (value) => {
  const token = JSON.parse(localStorage.getItem('token'));
  return (dispatch) => {
    dispatch(charityRequest());
    return axiosApiInstance({
      url: `${publicRuntimeConfig.apiBaseUrl}${publicRuntimeConfig.apiVersion}/charity?$limit=999`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      method: 'GET'
    })
      .then((response) => {
        const charities = get(response, 'data.data.docs', []);
        dispatch(setCharity(charities));
        localStorage.setItem('charities', JSON.stringify(charities));
      })
      .catch(err => {
        dispatch(charityError());
        const errMsg = get(err.response, 'data.message', '');
        dispatch(charityError(errMsg));
      });
  };
};

export const setRecommendedCharities = (userPreferenceDetail, selectedPreferenceIds) => {
  const charities = JSON.parse(localStorage.getItem('charities'));
  const preferenceWeightage = {};
  for (const category of userPreferenceDetail) {
    for (const preference of category.option) {
      preferenceWeightage[preference._id] = preference.weight;
    }
  }
  return (dispatch) => {
    charities !== null && charities !== undefined && charities.map(charity => {
      if(charity.preferenceWeightage != null || charity.preferenceWeightage != undefined){
        const preferenceIds = Object.keys(charity.preferenceWeightage);
        // adding URI scheme if missing
        if (!charity.website.match(/^[a-zA-Z]+:\/\//)) {
          charity.website = `http://${charity.website}`;
        }
        charity.score = 0;
        preferenceIds.map(preferenceId => {
          if (_.includes(selectedPreferenceIds, preferenceId)) {
            charity.score += parseInt(preferenceWeightage[preferenceId]) * parseInt(charity.preferenceWeightage[preferenceId]);
          }
        });
      }
    });
    const recommendedCharity = _.orderBy(charities, 'score', 'desc');
    dispatch(setRecommendedCharity(recommendedCharity));
  };
};

export const initialState = {
  gettingCharity: false,
  charities: [],
  recommendedCharity: []
};

const ACTION_HANDLERS = {
  [GET_CHARITY_REQUEST]: (state, action) => {
    return {
      ...state,
      gettingCharity: action.gettingCharity,
    };
  },
  [SET_CHARITY_ERROR]: (state, action) => {
    return {
      ...state,
      gettingCharity: action.gettingCharity,
    };
  },
  [SET_CHARITY]: (state, action) => {
    return {
      ...state,
      gettingCharity: action.gettingCharity,
      charity: action.charity
    };
  },
  [SET_RECOMMENDED_CHARITY]: (state, action) => {
    return {
      ...state,
      recommendedCharity: action.recommendedCharity
    };
  },  
};

export default function preferenceReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}