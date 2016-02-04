const { Map, List } = require('immutable');
const { handleActions } = require('redux-actions');

const { NAME_CATEGORY, ADDRESS, SIMILAR_NODES, ACCESSIBILITY, CONTACT, OVERVIEW } = require('../models/sections');
const { ACTIVATE_SECTION, CHANGE_NODE, CHANGE_MAP_CENTER, CHANGE_MAP_ZOOM, MARKER_MOVED } = require('../actions');
const { FETCH_CATEGORIES } = require('../../common/actions/categories');
const Node = require('../../common/models/node');

const defaultNode = new Node();

const DEFAULT_STATE = Map({
  activeSection: null,
  sections: List([NAME_CATEGORY, ADDRESS, SIMILAR_NODES, ACCESSIBILITY, CONTACT, OVERVIEW]),
  fetchedCategories: false,
  node: defaultNode,
  mapCenter: { lat: defaultNode.lat, lon: defaultNode.lon },
  mapZoom: 16,
  markerMoved: false
});

module.exports = handleActions({
  [ACTIVATE_SECTION]: (state, { payload: activeSection }) => {
    return state.set('activeSection', activeSection);
  },
  [FETCH_CATEGORIES]: (state) => {
    return state.set('fetchedCategories', true);
  },
  [CHANGE_NODE]: (state, { payload: props}) => {
    return state.mergeIn(['node'], props);
  },
  [CHANGE_MAP_CENTER]: (state, { payload: { lat, lon } }) => {
    return state.set('mapCenter', { lat, lon });
  },
  [CHANGE_MAP_ZOOM]: (state, { payload: zoom }) => {
    return state.set('mapZoom', zoom);
  },
  [MARKER_MOVED]: (state) => {
    return state.set('markerMoved', true);
  }
}, DEFAULT_STATE);