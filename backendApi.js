import axios from 'axios';

export const host = 'http://api.globalchange.uz';

const httpClient = axios.create({
  baseURL: [host, 'api/'].join('/'),
});

export const getServices = async (params) => {
  try {
    const response = await httpClient.get('services', { params });
    return response.data.data;
  } catch (e) {
    throw e;
  }
};

export const getIndustries = async (params) => {
  try {
    const response = await httpClient.get('industries', { params });
    return response.data.data;
  } catch (e) {
    throw e;
  }
};

export const getCases = async (params) => {
  try {
    const response = await httpClient.get('cases', { params });
    return response.data.data;
  } catch (e) {
    throw e;
  }
};

export const getStatistics = async (params) => {
  try {
    const response = await httpClient.get('statistics', { params });
    return response.data.data;
  } catch (e) {
    throw e;
  }
};

export const getTestimonials = async (params) => {
  try {
    const response = await httpClient.get('testimonials', { params });
    return response.data.data;
  } catch (e) {
    throw e;
  }
};

export const getTeam = async (params) => {
  try {
    const response = await httpClient.get('team', { params });
    return response.data.data;
  } catch (e) {
    throw e;
  }
};

export const getNews = async (params) => {
  try {
    const response = await httpClient.get('news', { params });
    return response.data.data;
  } catch (e) {
    throw e;
  }
};

export const getNewsById = async ({ id, params}) => {
  try {
    const path = ['news', id].join('/');
    const response = await httpClient.get(path, { params });
    return response.data.data;
  } catch (e) {
    throw e;
  }
};

export const getMain = async (params) => {
  try {
    const response = await httpClient.get('main', { params });
    return response.data.data;
  } catch (e) {
    throw e;
  }
};

export const sendMessage = async (json) => {
  try {
    await httpClient.post('applications', { json });
  } catch (e) {
    throw e;
  }
};
